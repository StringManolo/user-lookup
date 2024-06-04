const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;


app.get("/search_instagram", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.instagram.com/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    response.match(/httpErrorPage/g).length > 1 ? res.send("false") : res.send("true");
  });
});


app.get("/search_tiktok", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.tiktok.com/@${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    new RegExp(`"uniqueId":"${username}"`, "gi").test(response) ? res.send("true") : res.send("false");
  });
});


/* Not done yet */
app.get("/search_twitter", (req, res) => {
  const username = req.query.username;
  fetch(`https://x.com/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    
    /* TODO:
     * Make manual redirection by "setting" cookie from response headers and follow URL redirection manually */

    console.log(response);
    res.send("true");
    //response.match(/httpErrorPage/g).length > 1 ? res.send("false") : res.send("true");
  });
});

app.get("/search_wikipedia", (req, res) => {
  const username = req.query.username;
  fetch(`https://en.wikipedia.org/wiki/User:${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_youtube", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.youtube.com/@${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});




app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
