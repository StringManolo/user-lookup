# User-Lookup

Check if username exists in many services like Instagram, TikTok, Twitter, Wikipedia, and Youtube

## Legal
[Legal Notice](https://github.com/StringManolo/user-lookup/blob/main/LEGAL.md#disclaimer-notice)

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
- aboutme
- allrecipes
- anime-planet
- ao3
- boardgamegeek
- cnn
- discussions_apple
- ebay
- github
- imdb
- instagram
- pinterest
- pornhub
- reddit
- snapchat
- spotify
- telegram
- tiktok
- twitch
- twitter (not yet)
- vimeo
- wikipedia
- xvideos
- youtube

* Services may become unavailable at any time if breaking changes are made by the developers of the target service. 
