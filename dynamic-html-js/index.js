const { readFile } = require('fs/promises');
const { createServer } = require('http');

const PORT = 8080

createServer(async (req, res) => {
  const html = await readFile('./index.html', 'utf-8')

  res.setHeader('Content-Type', 'text/html')
  res.end(html)

}).listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`)
})
