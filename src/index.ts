import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'

// Load environment variables
config()

const app = new Hono()

// Serve static files from root for SEO files
app.use('/robots.txt', serveStatic({ path: './public/robots.txt' }))
app.use('/sitemap.xml', serveStatic({ path: './public/sitemap.xml' }))
app.use('/humans.txt', serveStatic({ path: './public/humans.txt' }))
app.use('/security.txt', serveStatic({ path: './public/security.txt' }))
app.use('/.well-known/security.txt', serveStatic({ path: './public/security.txt' }))

// Serve qrisdinamis directory if needed (it has some assets like images)
app.use('/qrisdinamis/*', serveStatic({ root: './' }))

// Main route
app.get('/', (c) => {
  const qrisUtama = process.env.QRIS_UTAMA || ''
  
  try {
    let html = fs.readFileSync(path.join(process.cwd(), 'public', 'index.html'), 'utf-8')
    // Replace the placeholder with the actual QRIS_UTAMA value
    html = html.replace('__QRIS_UTAMA__', qrisUtama)
    return c.html(html)
  } catch (err) {
    console.error('Error reading index.html:', err)
    return c.text('Internal Server Error', 500)
  }
})

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
