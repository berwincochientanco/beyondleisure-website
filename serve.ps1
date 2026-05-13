$root = Split-Path $MyInvocation.MyCommand.Path

$mime = @{
  '.html'  = 'text/html; charset=utf-8'
  '.css'   = 'text/css; charset=utf-8'
  '.js'    = 'application/javascript; charset=utf-8'
  '.jsx'   = 'application/javascript; charset=utf-8'
  '.json'  = 'application/json; charset=utf-8'
  '.png'   = 'image/png'
  '.jpg'   = 'image/jpeg'
  '.jpeg'  = 'image/jpeg'
  '.webp'  = 'image/webp'
  '.svg'   = 'image/svg+xml'
  '.ttf'   = 'font/ttf'
  '.woff'  = 'font/woff'
  '.woff2' = 'font/woff2'
  '.xlsx'  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:3000/')
$listener.Start()

Write-Host ''
Write-Host '  Server running at http://localhost:3000' -ForegroundColor Green
Write-Host "  Home:    http://localhost:3000/brand_assets/Gili%20Gede/index.html" -ForegroundColor Cyan
Write-Host "  About:   http://localhost:3000/brand_assets/Gili%20Gede/about.html" -ForegroundColor Cyan
Write-Host "  Pricing: http://localhost:3000/brand_assets/Gili%20Gede/pricing.html" -ForegroundColor Cyan
Write-Host "  Contact: http://localhost:3000/brand_assets/Gili%20Gede/contact.html" -ForegroundColor Cyan
Write-Host ''
Write-Host '  Press Ctrl+C to stop.' -ForegroundColor Yellow
Write-Host ''

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response

    $urlPath = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)

    if ($urlPath -eq '/' -or $urlPath -eq '/index.html') {
      $res.StatusCode = 302
      $res.Headers.Add('Location', '/brand_assets/Gili%20Gede/index.html')
      $res.Close()
      continue
    }

    $file = Join-Path $root ($urlPath.TrimStart('/'))

    if (Test-Path $file -PathType Leaf) {
      $ext  = [IO.Path]::GetExtension($file).ToLower()
      $ct   = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
      $data = [IO.File]::ReadAllBytes($file)

      $res.StatusCode       = 200
      $res.ContentType      = $ct
      $res.ContentLength64  = $data.Length
      $res.Headers.Add('Cache-Control', 'no-cache')
      $res.OutputStream.Write($data, 0, $data.Length)
    } else {
      $msg = [Text.Encoding]::UTF8.GetBytes("404 Not found: $urlPath")
      $res.StatusCode      = 404
      $res.ContentType     = 'text/plain'
      $res.ContentLength64 = $msg.Length
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }

    $res.Close()
  }
} finally {
  $listener.Stop()
}
