const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

const host = `http://localhost:${port}`;

app.get("/user-lookup", (req, res) => {
  res.send(`<h1>User Lookup</h1>
  <form action="/search" method="get">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <input type="submit" value="Submit">
  </form>`);
});

app.get("/search", async (req, res) => {
  const username = req.query.username;
 
  const promises = [
    fetch(`${host}/search_aboutme?username=${username}`).then((response) => aboutme = response.text()),
    fetch(`${host}/search_allrecipes?username=${username}`).then((response) => allrecipes = response.text()),
    fetch(`${host}/search_anime-planet?username=${username}`).then((response) => animeplanet = response.text()),
    fetch(`${host}/search_ao3?username=${username}`).then((response) => ao3 = response.text()),
    fetch(`${host}/search_boardgamegeek?username=${username}`).then((response) => boardgamegeek = response.text()),
    fetch(`${host}/search_discussionsapple?username=${username}`).then((response) => discussionsapple = response.text()),
    fetch(`${host}/search_ebay?username=${username}`).then((response) => facebook = response.text()),
    fetch(`${host}/search_github?username=${username}`).then((response) => instagram = response.text()),
    fetch(`${host}/search_imdb?username=${username}`).then((response) => reddit = response.text()),
    fetch(`${host}/search_instagram?username=${username}`).then((response) => instagram = response.text()),
    fetch(`${host}/search_pinterest?username=${username}`).then((response) => pinterest = response.text()),
    fetch(`${host}/search_pornhub?username=${username}`).then((response) => pornhub = response.text()),
    fetch(`${host}/search_reddit?username=${username}`).then((response) => reddit = response.text()),
    fetch(`${host}/search_snapchat?username=${username}`).then((response) => snapchat = response.text()),
    fetch(`${host}/search_spotify?username=${username}`).then((response) => spotify = response.text()),
    fetch(`${host}/search_telegram?username=${username}`).then((response) => telegram = response.text()),
    fetch(`${host}/search_tiktok?username=${username}`).then((response) => tiktok = response.text()),
    fetch(`${host}/search_twitch?username=${username}`).then((response) => twitch = response.text()),
    fetch(`${host}/search_twitter?username=${username}`).then((response) => twitter = response.text()),
    fetch(`${host}/search_wikipedia?username=${username}`).then((response) => wikipedia = response.text()),
    fetch(`${host}/search_xvideos?username=${username}`).then((response) => xvideos = response.text()),
    fetch(`${host}/search_youtube?username=${username}`).then((response) => youtube = response.text())
  ];

  try {
    const values = await Promise.all(promises);
    const sites = [];

    if (values[0] == "true") {
      sites.push(`<a href="https://about.me/${username}">about.me`);
    }
    if (values[1] == "true") {
      sites.push(`<a href="https://allrecipes.com/cook/${username}/">allrecipes.com</a>`);
    }
    if (values[2] == "true") {
      sites.push(`<a href="https://www.anime-planet.com/users/${username}">anime-planet.com</a>`);
    }
    if (values[3] == "true") {
      sites.push(`<a href="https://archiveofourown.org/users/${username}">archiveofourown.org</a>`);
    }
    if (values[4] == "true") {
      sites.push(`<a href="https://boardgamegeek.com/user/${username}">boardgamegeek.com</a>`);
    }
    if (values[5] == "true") {
      sites.push(`<a href="https://discussions.apple.com/member/${username}">discussions.apple.com</a>`);
    }
    if (values[6] == "true") {
      sites.push(`<a href="https://www.ebay.com/usr/${username}">ebay.com</a>`);
    }
    if (values[7] == "true") {
      sites.push(`<a href="https://github.com/${username}">github.com</a>`);
    }
    if (values[8] == "true") {
      sites.push(`<a href="https://www.imdb.com/user/${username}">imdb.com</a>`);
    }
    if (values[9] == "true") {
      sites.push(`<a href="https://www.instagram.com/${username}">instagram.com</a>`);
    }
    if (values[10] == "true") {
      sites.push(`<a href="https://www.pinterest.com/${username}">pinterest.com</a>`);
    }
    if (values[11] == "true") {
      sites.push(`<a href="https://www.pornhub.com/users/${username}">pornhub.com</a>`);
    }
    if (values[12] == "true") {
      sites.push(`<a href="https://www.reddit.com/user/${username}">reddit.com</a>`);
    }
    if (values[13] == "true") {
      sites.push(`<a href="https://www.snapchat.com/add/${username}">snapchat.com</a>`);
    }
    if (values[14] == "true") {
      sites.push(`<a href="https://open.spotify.com/user/${username}">spotify.com</a>`);
    }
    if (values[15] == "true") {
      sites.push(`<a href="https://t.me/${username}">t.me</a>`);
    }
    if (values[16] == "true") {
      sites.push(`<a href="https://www.tiktok.com/@${username}">tiktok.com</a>`);
    }
    if (values[17] == "true") {
      sites.push(`<a href="https://www.twitch.tv/${username}">twitch.tv</a>`);
    }
    if (values[18] == "true") {
      sites.push(`<a href="https://twitter.com/${username}">twitter.com</a>`);
    }
    if (values[19] == "true") {
      sites.push(`<a href="https://www.wikipedia.org/wiki/User:${username}">wikipedia.org</a>`);
    }
    if (values[20] == "true") {
      sites.push(`<a href="https://xvideos.com/user/${username}">xvideos.com</a>`);
    }
    if (values[21] == "true") {
      sites.push(`<a href="https://www.youtube.com/user/${username}">youtube.com</a>`);
    }



    res.send(`
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
          }
          h1 {
            color: #333;
          }
          a {
            display: block;
            margin: 10px 0;
            color: #0073e6;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Results for ${username}</h1>
        ${sites.length > 0 ? sites.join("") : "<p>No profiles found.</p>"}
      </body>
      </html>
    `);

    
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }

});

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

app.get("/search_ao3", (req, res) => {
  const username = req.query.username;
  fetch(`https://archiveofourown.org/users/${username}/works`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
  });
});

app.get("/search_boardgamegeek", (req, res) => {
  const username = req.query.username;
  fetch(`https://boardgamegeek.com/user/${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    new RegExp(`Error: User does not exist`, "gi").test(response) ? res.send("false") : res.send("true");
  });
});

app.get("/search_discussions_apple", (req, res) => {
  const username = req.query.username;
  fetch(`https://discussions.apple.com/profile/${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
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

app.get("/search_imdb", (req, res) => {
  const username = req.query.username;
  fetch(`https://html.duckduckgo.com/html?q=site:imdb.com%20%2B%20%22user%22%20%2B%20%22ur%22%20${username}%20-%22title%22`).then((response) => {
    return response.text(); 
  })
  .then((response) => {
    new RegExp(`<a[^>]+>${username}\&\#x27\;s Profile - IMDb</a>`, "gi").test(response) ? res.send("true") : res.send("false");
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
    new RegExp(`tgme_page_title`, "gi").test(response) ? res.send("true") : res.send("false"); 
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

app.get("/search_twitch", (req, res) => {
  const username = req.query.username;
  fetch(`https://m.twitch.tv/${username}`).then((response) => {
    response.status == 200 ? res.send("true") : res.send("false");
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

    res.send("false");
    //response.match(/httpErrorPage/g).length > 1 ? res.send("false") : res.send("true");
  });
});

app.get("/search_wikipedia", (req, res) => {
  const username = req.query.username;
  fetch(`https://en.wikipedia.org/wiki/User:${username}`).then((response) => {
    return response.text();
  })
  .then((response) => {
    if (new RegExp(`is not registered on this wiki`, "gim").test(response)) {
      res.send("false");
    } else if (new RegExp(`Wikipedia does not have a`, "gim").test(response)) {
      res.send("false");
    } else {
      res.send("true");
    }
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
