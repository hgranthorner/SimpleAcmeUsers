function individualPage(name) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" type="text/css" media="screen" href="/style.css" />
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <a href="/" class="title">Home</a> <a href="/users">Users</a>
        <div id="user-container">${name}</div>
      </body>
    </html>
  `
  return html
}

module.exports = individualPage
