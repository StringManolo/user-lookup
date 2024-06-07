# User-Lookup

Check if username exists in many services like Instagram, TikTok, Twitter, Wikipedia, and Youtube

## Legal
[Legal Notice](https://github.com/StringManolo/user-lookup/blob/main/LEGAL.md#disclaimer-notice)

### Preview
![Preview](https://raw.githubusercontent.com/StringManolo/user-lookup/378c42812db7c84d6c81394259fa9516d67f8b68/images/user_lookup_image_1.jpg)

### Usage

##### Download the Software
```bash
git clone https://github.com/stringmanolo/user-lookup
```

##### Move to the Directory
```bash
cd user-lookup
```

##### Install Dependencies
```bash
npm install
```

##### Start the Program
```bash
npm start # or node main.js
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
- boardgamegeek
- buzzfeed
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
- tumblr
- twitch
- twitter (not yet)
- vimeo
- wikipedia
- wordpress
- xvideos
- youtube

* Services may become unavailable at any time if breaking changes are made by the developers of the target service. 
