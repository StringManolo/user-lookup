# User-Lookup

Check if username exists in many services like Instagram, TikTok, Twitter, Wikipedia, and Youtube

### Usage

##### Download the Software
```bash
git clone https://github.com/stringmanolo/user-lookup
```

##### Start the Local Server
```bash
node main.js
```

##### Open the Webpage in your Browser
http://localhost:3000/user-lookup


### API Usage
http://localhost:3000/search_{x}?username={y}

Where __x__ is the service you want to use, and __y__ is the username you want to search. For example http://localhost:3000/search_youtube?username=stringmanolo

* Api returns true when the account exists in the service, and false when it doesn't

##### Available Services
- AboutMe
- AllRecipes
- Anime-Planet
- Ebay
- Github
- Instagram
- Pinterest
- Pornhub
- Reddit
- Snapchat
- Spotify
- Telegram
- TikTok
- Twitter (not yet)
- Wikipedia
- XVideos
- Youtube

* Services may become unavailable at any time if breaking changes are made by the developers of the target service. 
