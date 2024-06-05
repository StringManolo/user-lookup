const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.get("/search_aboutme", (req, res) => {
  const username = req.query.username;
  fetch(`https://about.me/${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_allrecipes", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.allrecipes.com/cook/${username}/`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_anime-planet", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.anime-planet.com/users/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    new RegExp(`<a\\s+href="/users/${username}/following">`, "gi").test(response) ? res.send("true") : res.send("false");
  });
});

app.get("/search_ebay", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.ebay.com/usr/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    new RegExp("this user was not found", "gi").test(response) ? res.send("false") : res.send("true")
  });
});

app.get("/search_github", (req, res) => {
  const username = req.query.username;
  fetch(`https://github.com/${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_instagram", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.instagram.com/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    response.match(/httpErrorPage/g).length > 1 ? res.send("false") : res.send("true");
  });
});

app.get("/search_pinterest", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.pinterest.com/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    new RegExp(`user not found`, "gi").test(response) ? res.send("false") : res.send("true");
  });

});

app.get("/search_pornhub", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.pornhub.com/users/${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_reddit", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.reddit.com/user/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    new RegExp(`Sorry, nobody on Reddit goes by that name.`, "gi").test(response) ? res.send("false") : res.send("true");
  });
});

app.get("/search_snapchat", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.snapchat.com/add/${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_spotify", (req, res) => {
  const username = req.query.username;
  fetch(`https://open.spotify.com/user/${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_telegram", (req, res) => {
  const username = req.query.username;
  fetch(`https://t.me/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    new RegExp(`https://telegram.org/img/t_logo.png`, "gi").test(response) ? res.send("false") : res.send("true");
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

app.get("/search_xvideos", (req, res) => {
  const username = req.query.username;
  fetch(`https://www.xvideos.com/profiles/${username}`).then((response) => {
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
