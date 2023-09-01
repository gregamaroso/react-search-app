/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data = require("./data");
const http = require("http");
const url = require("url");
const cors = require("cors");
const hostname = "localhost";
const port = 3035;
const Fuse = require("fuse.js");

/**
 * Create the fuse search options here...
 */
const fuseOptions = {
  keys: ["name", "about", "tags"],
  threshold: 0.3,
  includeScore: true,
  shouldSort: true,
};
const fuse = new Fuse(data, fuseOptions);

/**
 * Allow cross-origin requests
 */
const corsMiddleware = cors();

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http
  .createServer(function (req, res) {
    corsMiddleware(req, res, () => {
      // .. Here you can create your data response in a JSON format
      const parsedUrl = url.parse(req.url, true);
      const { pathname, query } = parsedUrl;

      /**
       * Only handle requests to the /search path
       */
      if (pathname === "/search" && query.q) {
        const results = fuse.search(query.q);
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(results));
        res.end();
        return;
      } else {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
      }
    });
  })
  .listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
