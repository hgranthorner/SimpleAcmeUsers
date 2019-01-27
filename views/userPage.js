function userPage() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <a href="/">Home</a> <a href="/users">Users</a>
        <ul>
          <li><a href="/users/1">Moe</a></li>
          <li><a href="/users/2">Larry</a></li>
          <li><a href="/users/3">Curly</a></li>
        </ul>
      </body>
    </html>
  `
  return html
}

module.exports = userPage
