# CORS

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

- [What is the Same-Origin policy?](#what-is-the-same-origin-policy)
- [How can I allow a cross-origin request?](#how-can-i-allow-a-cross-origin-request)
- [CORS in Node/Express](#cors-in-nodeexpress)

## What is the Same-Origin policy?

If you are creating a website (let's call it awesome-cyf-website.com). This website may make requests back to your server that you want to trust. You wrote the website, so you know that it should be making that request.

If I am a hacker creating a website (let's call it evil.com), and I make a request to your website - from evil.com to awesome-cyf-website.com - then you can't trust that request. You do not know or control what my website is doing. I could be stealing data, hacking your users or many other evil things.

To prevent this, browsers follow a rule called the Same-Origin policy. This means that JavaScript running on a website can only make a request to the same *origin* as the current page.

### What is an origin?

The origin is part of the URL of the request. It is made up of the scheme (`http://` or `https://`), the host (`example.com`) and the port (usually blank, but can be `:3000` or `:3001`). Here are some example URLs with their origins:

| URL | Origin |
|---|---|
| http://example.com | http://example.com |
| http://example.com/foo | http://example.com |
| https://example.com/foo/bar | https://example.com |
| https://www.example.com/foo | https://www.example.com |
| https://www.example.com:3000/foo | https://www.example.com:8080 |

Most modern browsers will highlight the origin in the address bar.

## How can I allow a cross-origin request?

Sometimes we want to make a request that is *cross-origin*. For example, if I am building a Twitter client, I need to be able to make requests to `twitter.com` from a website that is not `twitter.com`. This would be a cross-origin request - the origins do not match and so the browser cannot follow the same-origin rule.

This would be a problem for us, however Twitter can enable special rules to allow cross-origin requests. They can avoid the security problems of cross-origin requests by requiring authentication info to be included on every request (this is commonly called an *API key*).

To allow users to make cross-origin requests, you can add some *headers* to the server's HTTP responses which tells the browser that we are allowing cross-origin requests. The most important header is `Access-Control-Allow-Origin`, this means the server says "I allow requests to be made from these origins" to the browser. You can list specific origins like this:

```
Access-Control-Allow-Origin: example.com,awesome-cyf-website.com
```

Or you can allow any origin like this:

```
Access-Control-Allow-Origin: *
```

## CORS in Node/Express

You can add a header to a response in Node/Express using the `res.header()` function:

```js
app.get('/foo', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*')
})
```

The first argument is the name of the header and the second argument is the value.

This can become quite tedious to add to every request. Instead we can use a package from npm called [cors](https://www.npmjs.com/package/cors). Once you have installed it (using `npm install`), you can add it to your server like this:

```js
var cors = require('cors')

app.use(cors())
```

Normally you would do this once, where you are creating and setting up the Express server.
