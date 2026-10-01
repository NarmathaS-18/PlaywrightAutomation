# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flipkart.spec.js >> Verify search functionality in flipkart
- Location: tests\flipkart.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.screenshot: Test timeout of 30000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic [ref=f1e7]:
    - generic [ref=f1e9]:
      - link [ref=f1e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=f1e11]
      - link "Explore Plus" [ref=f1e12] [cursor=pointer]:
        - /url: /plus
    - generic [ref=f1e16]:
      - textbox "Search for products, brands and more" [ref=f1e18]: DSLR Camera
      - button [ref=f1e19] [cursor=pointer]
    - link "Login" [ref=f1e28] [cursor=pointer]:
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2520Camera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Don%26as%3Doff
    - link "Become a Seller" [ref=f1e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
    - generic [ref=f1e32]: More
    - link "Cart" [ref=f1e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
  - generic [ref=f1e50]:
    - generic [ref=f1e51] [cursor=pointer]: Electronics
    - generic [ref=f1e54] [cursor=pointer]: TVs & Appliances
    - generic [ref=f1e57] [cursor=pointer]: Men
    - generic [ref=f1e60] [cursor=pointer]: Women
    - generic [ref=f1e63] [cursor=pointer]: Baby & Kids
    - generic [ref=f1e66] [cursor=pointer]: Home & Furniture
    - generic [ref=f1e69] [cursor=pointer]: Sports, Books & More
    - link "Flights" [ref=f1e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=f1e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=f1e74]:
    - generic [ref=f1e75]:
      - generic [ref=f1e77]:
        - generic [ref=f1e79]:
          - generic [ref=f1e80]: Filters
          - generic [ref=f1e84]:
            - generic [ref=f1e85]: CATEGORIES
            - generic [ref=f1e87]:
              - img [ref=f1e89] [cursor=pointer]
              - link "Cameras & Accessories" [ref=f1e91] [cursor=pointer]:
                - /url: /cameras-accessories/pr?sid=jek&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e93]:
              - img [ref=f1e95] [cursor=pointer]
              - link "Cameras" [ref=f1e97] [cursor=pointer]:
                - /url: /cameras/pr?sid=jek,p31&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e99]:
              - img [ref=f1e101] [cursor=pointer]
              - link "DSLR & Mirrorless" [ref=f1e103] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&q=DSLR+Camera&otracker=categorytree
          - generic [ref=f1e104]: Brand
          - generic [ref=f1e109]:
            - generic [ref=f1e110]: Price
            - generic [ref=f1e118]:
              - generic [ref=f1e119] [cursor=pointer]
              - generic [ref=f1e126]:
                - generic [ref=f1e127]: .
                - generic [ref=f1e128]: .
                - generic [ref=f1e129]: .
                - generic [ref=f1e130]: .
                - generic [ref=f1e131]: .
                - generic [ref=f1e132]: .
                - generic: .
            - generic [ref=f1e133]:
              - combobox [ref=f1e135]:
                - option "Min" [selected]
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
              - generic [ref=f1e136]: to
              - combobox [ref=f1e138]:
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
                - option "50000+" [selected]
          - generic [ref=f1e139]: Video Resolution
          - generic [ref=f1e144]: Lens Mount
          - generic [ref=f1e149]:
            - generic [ref=f1e150] [cursor=pointer]: Customer Ratings
            - generic [ref=f1e155]:
              - generic "4★ & above" [ref=f1e156] [cursor=pointer]
              - generic "3★ & above" [ref=f1e161] [cursor=pointer]
              - generic "2★ & above" [ref=f1e166] [cursor=pointer]
              - generic "1★ & above" [ref=f1e171] [cursor=pointer]
          - generic [ref=f1e176]: Effective Pixels
          - generic [ref=f1e181]: Sensor Size
          - generic [ref=f1e186]: Shutter Speed
          - generic [ref=f1e191]: Mega Pixel
          - generic [ref=f1e196]: Type
          - generic [ref=f1e201]: Number of Lens
          - generic [ref=f1e206]: Discount
          - generic [ref=f1e211]: FPS in Burst Mode
          - generic [ref=f1e216]:
            - generic [ref=f1e217] [cursor=pointer]
            - generic [ref=f1e222]: "?"
          - generic [ref=f1e224]: Country Of Origin
          - generic [ref=f1e229]: Color
          - generic [ref=f1e234]:
            - generic [ref=f1e235] [cursor=pointer]: Offers
            - generic [ref=f1e240]:
              - generic "Special Price" [ref=f1e241] [cursor=pointer]
              - generic "Buy More, Save More" [ref=f1e246] [cursor=pointer]
          - generic [ref=f1e251]: Features
          - generic [ref=f1e256]: Maximum ISO
          - generic [ref=f1e261]: Availability
          - generic [ref=f1e266]: GST Invoice Available
          - generic [ref=f1e271]: Maximum Shutter Speed
        - link "Need help? Help me decide Buying Guide" [ref=f1e277] [cursor=pointer]:
          - /url: /buying-guide/dslr-camera?sid=jek,p31,trv&otracker=bg_from_browse_lhs
          - generic [ref=f1e278]: Need help?
          - generic [ref=f1e279]: Help me decide
          - img "Buying Guide" [ref=f1e282]
      - generic [ref=f1e283]:
        - generic [ref=f1e286]:
          - generic [ref=f1e287]:
            - link "Home" [ref=f1e289] [cursor=pointer]:
              - /url: /
            - link "Cameras & Accessories" [ref=f1e293] [cursor=pointer]:
              - /url: /cameras-accessories/pr?sid=jek&marketplace=FLIPKART
            - link "Cameras" [ref=f1e297] [cursor=pointer]:
              - /url: /cameras/pr?sid=jek,p31&marketplace=FLIPKART
            - link "DSLR & Mirrorless" [ref=f1e301] [cursor=pointer]:
              - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&marketplace=FLIPKART
          - generic [ref=f1e302]: Showing 1 – 24 of 154 results for "DSLR Camera"
          - generic [ref=f1e303]:
            - generic [ref=f1e304]: Sort By
            - generic [ref=f1e305]: Relevance
            - generic [ref=f1e306] [cursor=pointer]: Popularity
            - generic [ref=f1e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e309] [cursor=pointer]: Newest First
        - 'link "Toy Imagine CMOS 3MP DSLR Camera NA Toy Imagine CMOS 3MP DSLR Camera NA 3.3 12 Ratings & 0 Reviews • Effective Pixels: 3 MP • Sensor Type: CMOS • HD • NA ₹498 ₹1,799 72% off Only few left Bank Offer" [active] [ref=f1e314] [cursor=pointer]':
          - /url: /toy-imagine-cmos-3mp-dslr-camera-na/p/itm18fbacd4277a8?pid=DLLHN2HHVZAHQBFU&lid=LSTDLLHN2HHVZAHQBFUSJQCCF&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN2HHVZAHQBFU.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "Toy Imagine CMOS 3MP DSLR Camera NA" [ref=f1e319]
          - generic [ref=f1e324]:
            - generic [ref=f1e325]:
              - generic [ref=f1e326]: Toy Imagine CMOS 3MP DSLR Camera NA
              - generic [ref=f1e327]:
                - generic [ref=f1e328]: "3.3"
                - generic [ref=f1e331]: 12 Ratings & 0 Reviews
              - list [ref=f1e334]:
                - listitem [ref=f1e335]: "• Effective Pixels: 3 MP"
                - listitem [ref=f1e336]: "• Sensor Type: CMOS"
                - listitem [ref=f1e337]: • HD
                - listitem [ref=f1e338]: • NA
            - generic [ref=f1e339]:
              - generic [ref=f1e341]:
                - generic [ref=f1e342]: ₹498
                - generic [ref=f1e343]: ₹1,799
                - generic [ref=f1e344]: 72% off
              - generic [ref=f1e345]: Only few left
              - generic [ref=f1e348]: Bank Offer
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹480 ₹1,899 74% off Only few left Bank Offer" [ref=f1e355] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-pink/p/itm14396e66ed02c?pid=DLLHN3PNQJSHKHMY&lid=LSTDLLHN3PNQJSHKHMYMLVWQU&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3PNQJSHKHMY.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera" [ref=f1e360]
          - generic [ref=f1e365]:
            - generic [ref=f1e366]:
              - generic [ref=f1e367]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera
              - list [ref=f1e369]:
                - listitem [ref=f1e370]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e371]: "• Sensor Type: CCD"
                - listitem [ref=f1e372]: • Best Quality
                - listitem [ref=f1e373]: • 0
            - generic [ref=f1e374]:
              - generic [ref=f1e376]:
                - generic [ref=f1e377]: ₹480
                - generic [ref=f1e378]: ₹1,899
                - generic [ref=f1e379]: 74% off
              - generic [ref=f1e380]: Only few left
              - generic [ref=f1e383]: Bank Offer
        - 'link "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens 4.5 1,231 Ratings & 154 Reviews • 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity • Effective Pixels: 20.9 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Year Warranty ₹78,990 ₹94,950 16% off Upto ₹60,150 Off on Exchange Bank Offer" [ref=f1e390] [cursor=pointer]':
          - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&lid=LSTDLLFCKK6GET9EEDCJAOQAJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLFCKK6GET9EEDC.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e395]
          - generic [ref=f1e400]:
            - generic [ref=f1e401]:
              - generic [ref=f1e402]: NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens
              - generic [ref=f1e403]:
                - generic [ref=f1e404]: "4.5"
                - generic [ref=f1e407]: 1,231 Ratings & 154 Reviews
              - list [ref=f1e410]:
                - listitem [ref=f1e411]: • 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
                - listitem [ref=f1e412]: "• Effective Pixels: 20.9 MP"
                - listitem [ref=f1e413]: "• Sensor Type: CMOS"
                - listitem [ref=f1e414]: • WiFi Available
                - listitem [ref=f1e415]: • 4K
                - listitem [ref=f1e416]: • 2 Year Warranty
            - generic [ref=f1e417]:
              - generic [ref=f1e419]:
                - generic [ref=f1e420]: ₹78,990
                - generic [ref=f1e421]: ₹94,950
                - generic [ref=f1e422]: 16% off
              - generic [ref=f1e426]:
                - generic [ref=f1e427]: Upto
                - generic [ref=f1e428]: ₹60,150
                - generic [ref=f1e429]: Off on Exchange
              - generic [ref=f1e430]: Bank Offer
        - 'link "KMUYO 6 PACK OF 2 4G VIDEO CAMERA DSLR Camera IP Camera KMUYO 6 PACK OF 2 4G VIDEO CAMERA DSLR Camera IP Camera • Effective Pixels: 12 MP • Sensor Type: CMOS • WiFi Available • HD, FULL HD • https://fkmpimages.flixcart.com/iu-pre-catalog-images-feed/1762776099095-91779c6cd82746fc-FBCF0EA5EBA987F2717768D19F1C8C20 ₹5,248 ₹8,000 34% off Only few left Bank Offer" [ref=f1e437] [cursor=pointer]':
          - /url: /kmuyo-6-pack-2-4g-video-camera-dslr-ip/p/itmea0127047cfd7?pid=DLLHZGYKCXQDFMAM&lid=LSTDLLHZGYKCXQDFMAMWUFNLI&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&spotlightTagId=default_TrendingId_jek%2Fp31%2Ftrv&srno=s_1_4&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHZGYKCXQDFMAM.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "KMUYO 6 PACK OF 2 4G VIDEO CAMERA DSLR Camera IP Camera" [ref=f1e442]
          - generic [ref=f1e447]:
            - generic [ref=f1e448]:
              - generic [ref=f1e449]: KMUYO 6 PACK OF 2 4G VIDEO CAMERA DSLR Camera IP Camera
              - list [ref=f1e451]:
                - listitem [ref=f1e452]: "• Effective Pixels: 12 MP"
                - listitem [ref=f1e453]: "• Sensor Type: CMOS"
                - listitem [ref=f1e454]: • WiFi Available
                - listitem [ref=f1e455]: • HD, FULL HD
                - listitem [ref=f1e456]: • https://fkmpimages.flixcart.com/iu-pre-catalog-images-feed/1762776099095-91779c6cd82746fc-FBCF0EA5EBA987F2717768D19F1C8C20
            - generic [ref=f1e457]:
              - generic [ref=f1e459]:
                - generic [ref=f1e460]: ₹5,248
                - generic [ref=f1e461]: ₹8,000
                - generic [ref=f1e462]: 34% off
              - generic [ref=f1e463]: Only few left
              - generic [ref=f1e466]: Bank Offer
        - 'link "OLYMPUS EM1XINBLK DSLR Camera Camera OLYMPUS EM1XINBLK DSLR Camera Camera • Effective Pixels: 20.4 MP • Sensor Type: MOS • WiFi Available • 4K, FULL HD • 1 Year Warranty ₹2,05,712 ₹2,59,990 20% off Only 1 left Upto ₹61,650 Off on Exchange" [ref=f1e473] [cursor=pointer]':
          - /url: /olympus-em1xinblk-dslr-camera/p/itm990ac7c9db070?pid=DLLGEFRNTPUYERXU&lid=LSTDLLGEFRNTPUYERXULITWFM&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_5&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLGEFRNTPUYERXU.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "OLYMPUS EM1XINBLK DSLR Camera Camera" [ref=f1e478]
          - generic [ref=f1e483]:
            - generic [ref=f1e484]:
              - generic [ref=f1e485]: OLYMPUS EM1XINBLK DSLR Camera Camera
              - list [ref=f1e487]:
                - listitem [ref=f1e488]: "• Effective Pixels: 20.4 MP"
                - listitem [ref=f1e489]: "• Sensor Type: MOS"
                - listitem [ref=f1e490]: • WiFi Available
                - listitem [ref=f1e491]: • 4K, FULL HD
                - listitem [ref=f1e492]: • 1 Year Warranty
            - generic [ref=f1e493]:
              - generic [ref=f1e495]:
                - generic [ref=f1e496]: ₹2,05,712
                - generic [ref=f1e497]: ₹2,59,990
                - generic [ref=f1e498]: 20% off
              - generic [ref=f1e501]: Only 1 left
              - generic [ref=f1e505]:
                - generic [ref=f1e506]: Upto
                - generic [ref=f1e507]: ₹61,650
                - generic [ref=f1e508]: Off on Exchange
        - 'link "Canon EOS 7D Mark II DSLR Camera (Body only) Canon EOS 7D Mark II DSLR Camera (Body only) 4.1 21 Ratings & 6 Reviews • Effective Pixels: 20.2 MP • Sensor Type: CMOS • Full HD • 2 Years Canon India Warranty and Free Transit Insurance ₹99,999 ₹1,24,995 19% off Only 1 left Upto ₹60,650 Off on Exchange" [ref=f1e513] [cursor=pointer]':
          - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&lid=LSTCAME3YQ44SXE3SQFGY5OCG&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_6&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.CAME3YQ44SXE3SQF.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "Canon EOS 7D Mark II DSLR Camera (Body only)" [ref=f1e518]
          - generic [ref=f1e523]:
            - generic [ref=f1e524]:
              - generic [ref=f1e525]: Canon EOS 7D Mark II DSLR Camera (Body only)
              - generic [ref=f1e526]:
                - generic [ref=f1e527]: "4.1"
                - generic [ref=f1e530]: 21 Ratings & 6 Reviews
              - list [ref=f1e533]:
                - listitem [ref=f1e534]: "• Effective Pixels: 20.2 MP"
                - listitem [ref=f1e535]: "• Sensor Type: CMOS"
                - listitem [ref=f1e536]: • Full HD
                - listitem [ref=f1e537]: • 2 Years Canon India Warranty and Free Transit Insurance
            - generic [ref=f1e538]:
              - generic [ref=f1e540]:
                - generic [ref=f1e541]: ₹99,999
                - generic [ref=f1e542]: ₹1,24,995
                - generic [ref=f1e543]: 19% off
              - generic [ref=f1e546]: Only 1 left
              - generic [ref=f1e550]:
                - generic [ref=f1e551]: Upto
                - generic [ref=f1e552]: ₹60,650
                - generic [ref=f1e553]: Off on Exchange
        - 'link "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeabl... Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeabl... 3.1 17 Ratings & 2 Reviews • Effective Pixels: 3 MP • Sensor Type: CCD • 1080 • 0 ₹542 ₹1,799 69% off Only few left Bank Offer" [ref=f1e558] [cursor=pointer]':
          - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&lid=LSTDLLHHYD8NNH6VGZHHYALL9&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHHYD8NNH6VGZH.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeabl..." [ref=f1e563]
          - generic [ref=f1e568]:
            - generic [ref=f1e569]:
              - generic [ref=f1e570]: Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeabl...
              - generic [ref=f1e571]:
                - generic [ref=f1e572]: "3.1"
                - generic [ref=f1e575]: 17 Ratings & 2 Reviews
              - list [ref=f1e578]:
                - listitem [ref=f1e579]: "• Effective Pixels: 3 MP"
                - listitem [ref=f1e580]: "• Sensor Type: CCD"
                - listitem [ref=f1e581]: • 1080
                - listitem [ref=f1e582]: • 0
            - generic [ref=f1e583]:
              - generic [ref=f1e585]:
                - generic [ref=f1e586]: ₹542
                - generic [ref=f1e587]: ₹1,799
                - generic [ref=f1e588]: 69% off
              - generic [ref=f1e589]: Only few left
              - generic [ref=f1e592]: Bank Offer
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹478 ₹1,699 71% off Only few left Bank Offer" [ref=f1e599] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-pink/p/itma6a893ac91b08?pid=DLLHN3PZBD9QT5PM&lid=LSTDLLHN3PZBD9QT5PMK3S5QW&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_8&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3PZBD9QT5PM.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera" [ref=f1e604]
          - generic [ref=f1e609]:
            - generic [ref=f1e610]:
              - generic [ref=f1e611]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera
              - list [ref=f1e613]:
                - listitem [ref=f1e614]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e615]: "• Sensor Type: CCD"
                - listitem [ref=f1e616]: • Best Quality
                - listitem [ref=f1e617]: • 0
            - generic [ref=f1e618]:
              - generic [ref=f1e620]:
                - generic [ref=f1e621]: ₹478
                - generic [ref=f1e622]: ₹1,699
                - generic [ref=f1e623]: 71% off
              - generic [ref=f1e624]: Only few left
              - generic [ref=f1e627]: Bank Offer
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹478 ₹1,799 73% off Big Billion Days Price Only few left" [ref=f1e634] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-pink/p/itm22129cf6606f3?pid=DLLHN3PPPSEW5ZSV&lid=LSTDLLHN3PPPSEW5ZSVMMFDRA&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_9&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3PPPSEW5ZSV.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera" [ref=f1e639]
          - generic [ref=f1e644]:
            - generic [ref=f1e645]:
              - generic [ref=f1e646]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera
              - list [ref=f1e648]:
                - listitem [ref=f1e649]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e650]: "• Sensor Type: CCD"
                - listitem [ref=f1e651]: • Best Quality
                - listitem [ref=f1e652]: • 0
            - generic [ref=f1e653]:
              - generic [ref=f1e655]:
                - generic [ref=f1e656]: ₹478
                - generic [ref=f1e657]: ₹1,799
                - generic [ref=f1e658]: 73% off
              - generic [ref=f1e659]: Big Billion Days Price
              - generic [ref=f1e662]: Only few left
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹498 ₹1,799 72% off Big Billion Days Price Only few left" [ref=f1e669] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-pink/p/itm8576d70760839?pid=DLLHN3ZY9SB3MJA5&lid=LSTDLLHN3ZY9SB3MJA5K0KHGM&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_10&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3ZY9SB3MJA5.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera" [ref=f1e674]
          - generic [ref=f1e679]:
            - generic [ref=f1e680]:
              - generic [ref=f1e681]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera
              - list [ref=f1e683]:
                - listitem [ref=f1e684]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e685]: "• Sensor Type: CCD"
                - listitem [ref=f1e686]: • Best Quality
                - listitem [ref=f1e687]: • 0
            - generic [ref=f1e688]:
              - generic [ref=f1e690]:
                - generic [ref=f1e691]: ₹498
                - generic [ref=f1e692]: ₹1,799
                - generic [ref=f1e693]: 72% off
              - generic [ref=f1e694]: Big Billion Days Price
              - generic [ref=f1e697]: Only few left
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹480 ₹1,699 71% off Only few left Bank Offer" [ref=f1e704] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-pink/p/itm65fdf4a2faed3?pid=DLLHN3ZYQGZJN3TW&lid=LSTDLLHN3ZYQGZJN3TW1NX52P&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_11&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3ZYQGZJN3TW.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera" [ref=f1e709]
          - generic [ref=f1e714]:
            - generic [ref=f1e715]:
              - generic [ref=f1e716]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Pink Kids Camera
              - list [ref=f1e718]:
                - listitem [ref=f1e719]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e720]: "• Sensor Type: CCD"
                - listitem [ref=f1e721]: • Best Quality
                - listitem [ref=f1e722]: • 0
            - generic [ref=f1e723]:
              - generic [ref=f1e725]:
                - generic [ref=f1e726]: ₹480
                - generic [ref=f1e727]: ₹1,699
                - generic [ref=f1e728]: 71% off
              - generic [ref=f1e729]: Only few left
              - generic [ref=f1e732]: Bank Offer
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹480 ₹1,899 74% off Only few left Bank Offer" [ref=f1e739] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-blue/p/itm79e5bcb033c19?pid=DLLHN3ZSVZY9CU2V&lid=LSTDLLHN3ZSVZY9CU2VX6I7XW&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_12&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3ZSVZY9CU2V.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera" [ref=f1e744]
          - generic [ref=f1e749]:
            - generic [ref=f1e750]:
              - generic [ref=f1e751]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera
              - list [ref=f1e753]:
                - listitem [ref=f1e754]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e755]: "• Sensor Type: CCD"
                - listitem [ref=f1e756]: • Best Quality
                - listitem [ref=f1e757]: • 0
            - generic [ref=f1e758]:
              - generic [ref=f1e760]:
                - generic [ref=f1e761]: ₹480
                - generic [ref=f1e762]: ₹1,899
                - generic [ref=f1e763]: 74% off
              - generic [ref=f1e764]: Only few left
              - generic [ref=f1e767]: Bank Offer
        - 'link "BuyLuxe HD Video Recording Kids Camera DSLR Camera HD Video Recording Kids Camera BuyLuxe HD Video Recording Kids Camera DSLR Camera HD Video Recording Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹478 ₹1,899 74% off Only few left Bank Offer" [ref=f1e774] [cursor=pointer]':
          - /url: /buyluxe-hd-video-recording-kids-camera-dslr/p/itm1ad13f72d6a73?pid=DLLHN3ZTCHABPGX8&lid=LSTDLLHN3ZTCHABPGX8AZP5CQ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_13&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3ZTCHABPGX8.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe HD Video Recording Kids Camera DSLR Camera HD Video Recording Kids Camera" [ref=f1e779]
          - generic [ref=f1e784]:
            - generic [ref=f1e785]:
              - generic [ref=f1e786]: BuyLuxe HD Video Recording Kids Camera DSLR Camera HD Video Recording Kids Camera
              - list [ref=f1e788]:
                - listitem [ref=f1e789]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e790]: "• Sensor Type: CCD"
                - listitem [ref=f1e791]: • Best Quality
                - listitem [ref=f1e792]: • 0
            - generic [ref=f1e793]:
              - generic [ref=f1e795]:
                - generic [ref=f1e796]: ₹478
                - generic [ref=f1e797]: ₹1,899
                - generic [ref=f1e798]: 74% off
              - generic [ref=f1e799]: Only few left
              - generic [ref=f1e802]: Bank Offer
        - 'link "KMUYO 6 VIDEO 4G CAMERA DSLR Camera IP Camera KMUYO 6 VIDEO 4G CAMERA DSLR Camera IP Camera • Effective Pixels: 12 MP • Sensor Type: CMOS • WiFi Available • HD, FULL HD • 1 Year Warranty From The Date Delivery against any manufacturing Defects In Material And Workmanship. Note warranty terms- - Battery carries only 6 months warranty - No warranty for Accessories, cables or Tools supplied - Warranty Does Not Cover Damages Rr by asking the customer to bring the product at a certain Service Centeretc. ₹2,807 ₹5,000 43% off Only few left Bank Offer" [ref=f1e809] [cursor=pointer]':
          - /url: /kmuyo-6-video-4g-camera-dslr-ip/p/itmb351f1845e97d?pid=DLLHZGYHQHKSCCFJ&lid=LSTDLLHZGYHQHKSCCFJN3TT8P&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_14&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHZGYHQHKSCCFJ.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "KMUYO 6 VIDEO 4G CAMERA DSLR Camera IP Camera" [ref=f1e814]
          - generic [ref=f1e819]:
            - generic [ref=f1e820]:
              - generic [ref=f1e821]: KMUYO 6 VIDEO 4G CAMERA DSLR Camera IP Camera
              - list [ref=f1e823]:
                - listitem [ref=f1e824]: "• Effective Pixels: 12 MP"
                - listitem [ref=f1e825]: "• Sensor Type: CMOS"
                - listitem [ref=f1e826]: • WiFi Available
                - listitem [ref=f1e827]: • HD, FULL HD
                - listitem [ref=f1e828]: • 1 Year Warranty From The Date Delivery against any manufacturing Defects In Material And Workmanship. Note warranty terms- - Battery carries only 6 months warranty - No warranty for Accessories, cables or Tools supplied - Warranty Does Not Cover Damages Rr by asking the customer to bring the product at a certain Service Centeretc.
            - generic [ref=f1e829]:
              - generic [ref=f1e831]:
                - generic [ref=f1e832]: ₹2,807
                - generic [ref=f1e833]: ₹5,000
                - generic [ref=f1e834]: 43% off
              - generic [ref=f1e835]: Only few left
              - generic [ref=f1e838]: Bank Offer
        - 'link "KMUYO 6 KIDS CAMERA DSLR Camera Instant Camera KMUYO 6 KIDS CAMERA DSLR Camera Instant Camera • Effective Pixels: 12 MP • Sensor Type: CMOS • HD, FULL HD • 1 Year Warranty From The Date Delivery against any manufacturing Defects In Material And Workmanship. Note warranty terms- - Battery carries only 6 months warranty - No warranty for Accessories, cables or Tools supplied - Warranty Does Not Cover Damages Rr by asking the customer to bring the product at a certain Service Centeretc. ₹740 ₹2,600 71% off Bank Offer" [ref=f1e845] [cursor=pointer]':
          - /url: /kmuyo-6-kids-camera-dslr-instant/p/itmca779bc54ecdd?pid=DLLHZGYFBFRZHKRJ&lid=LSTDLLHZGYFBFRZHKRJ3MNTJY&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_15&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHZGYFBFRZHKRJ.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "KMUYO 6 KIDS CAMERA DSLR Camera Instant Camera" [ref=f1e850]
          - generic [ref=f1e855]:
            - generic [ref=f1e856]:
              - generic [ref=f1e857]: KMUYO 6 KIDS CAMERA DSLR Camera Instant Camera
              - list [ref=f1e859]:
                - listitem [ref=f1e860]: "• Effective Pixels: 12 MP"
                - listitem [ref=f1e861]: "• Sensor Type: CMOS"
                - listitem [ref=f1e862]: • HD, FULL HD
                - listitem [ref=f1e863]: • 1 Year Warranty From The Date Delivery against any manufacturing Defects In Material And Workmanship. Note warranty terms- - Battery carries only 6 months warranty - No warranty for Accessories, cables or Tools supplied - Warranty Does Not Cover Damages Rr by asking the customer to bring the product at a certain Service Centeretc.
            - generic [ref=f1e864]:
              - generic [ref=f1e866]:
                - generic [ref=f1e867]: ₹740
                - generic [ref=f1e868]: ₹2,600
                - generic [ref=f1e869]: 71% off
              - generic [ref=f1e870]: Bank Offer
        - 'link "KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera 5 1 Ratings & 1 Reviews • Effective Pixels: 12 MP • Sensor Type: CMOS • WiFi Available • HD, FULL HD • https://fkmpimages.flixcart.com/iu-pre-catalog-images-feed/1762774824906-91779c6cd82746fc-B0F673BE3B9CCFA060705C1F9CCAA969 ₹3,601 ₹8,000 54% off Only few left Bank Offer" [ref=f1e877] [cursor=pointer]':
          - /url: /kmuyo-6-pack-2-mini-ptz-camera-dslr-ip/p/itmac7027059ac79?pid=DLLHZGYJQNBCMCDZ&lid=LSTDLLHZGYJQNBCMCDZAF2K6R&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_16&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHZGYJQNBCMCDZ.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera" [ref=f1e882]
          - generic [ref=f1e887]:
            - generic [ref=f1e888]:
              - generic [ref=f1e889]: KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera
              - generic [ref=f1e890]:
                - generic [ref=f1e891]: "5"
                - generic [ref=f1e894]: 1 Ratings & 1 Reviews
              - list [ref=f1e897]:
                - listitem [ref=f1e898]: "• Effective Pixels: 12 MP"
                - listitem [ref=f1e899]: "• Sensor Type: CMOS"
                - listitem [ref=f1e900]: • WiFi Available
                - listitem [ref=f1e901]: • HD, FULL HD
                - listitem [ref=f1e902]: • https://fkmpimages.flixcart.com/iu-pre-catalog-images-feed/1762774824906-91779c6cd82746fc-B0F673BE3B9CCFA060705C1F9CCAA969
            - generic [ref=f1e903]:
              - generic [ref=f1e905]:
                - generic [ref=f1e906]: ₹3,601
                - generic [ref=f1e907]: ₹8,000
                - generic [ref=f1e908]: 54% off
              - generic [ref=f1e909]: Only few left
              - generic [ref=f1e912]: Bank Offer
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹478 ₹1,899 74% off Bank Offer" [ref=f1e919] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-blue/p/itmd17e27ab9f477?pid=DLLHN3ZXSSNAZNP3&lid=LSTDLLHN3ZXSSNAZNP30YQNE1&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_17&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3ZXSSNAZNP3.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera" [ref=f1e924]
          - generic [ref=f1e929]:
            - generic [ref=f1e930]:
              - generic [ref=f1e931]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera
              - list [ref=f1e933]:
                - listitem [ref=f1e934]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e935]: "• Sensor Type: CCD"
                - listitem [ref=f1e936]: • Best Quality
                - listitem [ref=f1e937]: • 0
            - generic [ref=f1e938]:
              - generic [ref=f1e940]:
                - generic [ref=f1e941]: ₹478
                - generic [ref=f1e942]: ₹1,899
                - generic [ref=f1e943]: 74% off
              - generic [ref=f1e944]: Bank Offer
        - 'link "NIKON D850 DSLR Camera Body Only NIKON D850 DSLR Camera Body Only 4.7 19 Ratings & 2 Reviews • 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed. • Effective Pixels: 45.7 MP • Sensor Type: CMOS • WiFi Available • Full HD • 2 Years Warranty ₹1,56,990 ₹2,34,950 33% off Big Billion Days Price Only 3 left" [ref=f1e951] [cursor=pointer]':
          - /url: /nikon-d850-dslr-camera-body-only/p/itm67ace0c4a825f?pid=DLLF65NSFMNPVPXD&lid=LSTDLLF65NSFMNPVPXDPQPSMO&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_18&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLF65NSFMNPVPXD.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "NIKON D850 DSLR Camera Body Only" [ref=f1e956]
          - generic [ref=f1e961]:
            - generic [ref=f1e962]:
              - generic [ref=f1e963]: NIKON D850 DSLR Camera Body Only
              - generic [ref=f1e964]:
                - generic [ref=f1e965]: "4.7"
                - generic [ref=f1e968]: 19 Ratings & 2 Reviews
              - list [ref=f1e971]:
                - listitem [ref=f1e972]: • 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed.
                - listitem [ref=f1e973]: "• Effective Pixels: 45.7 MP"
                - listitem [ref=f1e974]: "• Sensor Type: CMOS"
                - listitem [ref=f1e975]: • WiFi Available
                - listitem [ref=f1e976]: • Full HD
                - listitem [ref=f1e977]: • 2 Years Warranty
            - generic [ref=f1e978]:
              - generic [ref=f1e980]:
                - generic [ref=f1e981]: ₹1,56,990
                - generic [ref=f1e982]: ₹2,34,950
                - generic [ref=f1e983]: 33% off
              - generic [ref=f1e986]: Big Billion Days Price
              - generic [ref=f1e989]: Only 3 left
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Best BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Best • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹480 ₹1,899 74% off Only few left Bank Offer" [ref=f1e996] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-best/p/itm312ad54094ada?pid=DLLHN2QQXSZT8NWS&lid=LSTDLLHN2QQXSZT8NWSAEOT4U&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_19&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN2QQXSZT8NWS.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Best" [ref=f1e1001]
          - generic [ref=f1e1006]:
            - generic [ref=f1e1007]:
              - generic [ref=f1e1008]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Best
              - list [ref=f1e1010]:
                - listitem [ref=f1e1011]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e1012]: "• Sensor Type: CCD"
                - listitem [ref=f1e1013]: • Best Quality
                - listitem [ref=f1e1014]: • 0
            - generic [ref=f1e1015]:
              - generic [ref=f1e1017]:
                - generic [ref=f1e1018]: ₹480
                - generic [ref=f1e1019]: ₹1,899
                - generic [ref=f1e1020]: 74% off
              - generic [ref=f1e1021]: Only few left
              - generic [ref=f1e1024]: Bank Offer
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera & Games DSLR Camera Best Quality BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera & Games DSLR Camera Best Quality • Effective Pixels: 13 MP • Sensor Type: CCD • Best • NA ₹605 ₹665 9% off Only few left Bank Offer" [ref=f1e1031] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-best-quality/p/itm76b0f967ceb3d?pid=DLLHN2PGZHFJGDZK&lid=LSTDLLHN2PGZHFJGDZKGE6DXX&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_20&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN2PGZHFJGDZK.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera & Games DSLR Camera Best Quality" [ref=f1e1036]
          - generic [ref=f1e1041]:
            - generic [ref=f1e1042]:
              - generic [ref=f1e1043]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera & Games DSLR Camera Best Quality
              - list [ref=f1e1045]:
                - listitem [ref=f1e1046]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e1047]: "• Sensor Type: CCD"
                - listitem [ref=f1e1048]: • Best
                - listitem [ref=f1e1049]: • NA
            - generic [ref=f1e1050]:
              - generic [ref=f1e1052]:
                - generic [ref=f1e1053]: ₹605
                - generic [ref=f1e1054]: ₹665
                - generic [ref=f1e1055]: 9% off
              - generic [ref=f1e1058]: Only few left
              - generic [ref=f1e1061]: Bank Offer
        - 'link "Canon EOS R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM Canon EOS R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM 4.4 2,083 Ratings & 204 Reviews • DIGIC 8 Image Processor, 4K 24p Video with Crop, Full HD 60p, Dual Pixel CMOS AF with 143 AF Zones, 6.5 fps Electronic Shutter, 2.36m-Dot OLED EVF, 3\" 1.04m-Dot LCD Screen, Creative Assist Mode, Silent Mode for Quiet Operation, Bluetooth with SD Card Slot • Effective Pixels: 24.1 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹48,460 ₹64,995 25% off Upto ₹37,800 Off on Exchange Bank Offer" [ref=f1e1068] [cursor=pointer]':
          - /url: /canon-eos-r100-mirrorless-camera-rf-s-18-45mm-f-4-5-6-3-stm/p/itm3bc65ea11d81b?pid=DLLGQAQYNT39ZJTG&lid=LSTDLLGQAQYNT39ZJTGWF2CZS&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_21&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLGQAQYNT39ZJTG.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "Canon EOS R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM" [ref=f1e1073]
          - generic [ref=f1e1078]:
            - generic [ref=f1e1079]:
              - generic [ref=f1e1080]: Canon EOS R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM
              - generic [ref=f1e1081]:
                - generic [ref=f1e1082]: "4.4"
                - generic [ref=f1e1085]: 2,083 Ratings & 204 Reviews
              - list [ref=f1e1088]:
                - listitem [ref=f1e1089]: • DIGIC 8 Image Processor, 4K 24p Video with Crop, Full HD 60p, Dual Pixel CMOS AF with 143 AF Zones, 6.5 fps Electronic Shutter, 2.36m-Dot OLED EVF, 3" 1.04m-Dot LCD Screen, Creative Assist Mode, Silent Mode for Quiet Operation, Bluetooth with SD Card Slot
                - listitem [ref=f1e1090]: "• Effective Pixels: 24.1 MP"
                - listitem [ref=f1e1091]: "• Sensor Type: CMOS"
                - listitem [ref=f1e1092]: • WiFi Available
                - listitem [ref=f1e1093]: • 4K
                - listitem [ref=f1e1094]: • 2 Years Warranty
            - generic [ref=f1e1095]:
              - generic [ref=f1e1097]:
                - generic [ref=f1e1098]: ₹48,460
                - generic [ref=f1e1099]: ₹64,995
                - generic [ref=f1e1100]: 25% off
              - generic [ref=f1e1104]:
                - generic [ref=f1e1105]: Upto
                - generic [ref=f1e1106]: ₹37,800
                - generic [ref=f1e1107]: Off on Exchange
              - generic [ref=f1e1108]: Bank Offer
        - 'link "BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera Add to Compare BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera 3.3 60 Ratings & 5 Reviews • Effective Pixels: 13 MP • Optical Zoom: 0 • Sensor Type: CCD | LCD Size: 0 inch • Max Shutter Speed: 0 • 0 ₹486 ₹1,899 74% off Only few left Bank Offer" [ref=f1e1115] [cursor=pointer]':
          - /url: /buyluxe-mini-digital-camera-kids-girls-boys-gift-young-children-13mp-dslr/p/itm316d68b1bd03c?pid=CAMHKVKTZFH5KG4E&lid=LSTCAMHKVKTZFH5KG4ENKFTAV&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_22&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.CAMHKVKTZFH5KG4E.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - generic [ref=f1e1116]:
            - img "BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera" [ref=f1e1120]
            - generic [ref=f1e1121]: Add to Compare
          - generic [ref=f1e1131]:
            - generic [ref=f1e1132]:
              - generic [ref=f1e1133]: BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera
              - generic [ref=f1e1134]:
                - generic [ref=f1e1135]: "3.3"
                - generic [ref=f1e1138]: 60 Ratings & 5 Reviews
              - list [ref=f1e1141]:
                - listitem [ref=f1e1142]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e1143]: "• Optical Zoom: 0"
                - listitem [ref=f1e1144]: "• Sensor Type: CCD | LCD Size: 0 inch"
                - listitem [ref=f1e1145]: "• Max Shutter Speed: 0"
                - listitem [ref=f1e1146]: • 0
            - generic [ref=f1e1147]:
              - generic [ref=f1e1149]:
                - generic [ref=f1e1150]: ₹486
                - generic [ref=f1e1151]: ₹1,899
                - generic [ref=f1e1152]: 74% off
              - generic [ref=f1e1153]: Only few left
              - generic [ref=f1e1156]: Bank Offer
        - 'link "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera • Effective Pixels: 13 MP • Sensor Type: CCD • Best Quality • 0 ₹478 ₹1,899 74% off Only few left Bank Offer" [ref=f1e1163] [cursor=pointer]':
          - /url: /buyluxe-camera-kids-hd-video-recording-selfie-games-dslr-blue/p/itm254245fc81df9?pid=DLLHN3PZBZHDUVHS&lid=LSTDLLHN3PZBZHDUVHS0YFAWI&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_23&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.DLLHN3PZBZHDUVHS.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - img "BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera" [ref=f1e1168]
          - generic [ref=f1e1173]:
            - generic [ref=f1e1174]:
              - generic [ref=f1e1175]: BuyLuxe Camera for Kids with HD Video Recording, Selfie Camera and Games DSLR Camera Blue Kids Camera
              - list [ref=f1e1177]:
                - listitem [ref=f1e1178]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e1179]: "• Sensor Type: CCD"
                - listitem [ref=f1e1180]: • Best Quality
                - listitem [ref=f1e1181]: • 0
            - generic [ref=f1e1182]:
              - generic [ref=f1e1184]:
                - generic [ref=f1e1185]: ₹478
                - generic [ref=f1e1186]: ₹1,899
                - generic [ref=f1e1187]: 74% off
              - generic [ref=f1e1188]: Only few left
              - generic [ref=f1e1191]: Bank Offer
        - 'link "BuyLuxe Mini HD Digital Camera for Kids – Photo & Video Camera Toy 13MP DSLR Camera Add to Compare BuyLuxe Mini HD Digital Camera for Kids – Photo & Video Camera Toy 13MP DSLR Camera 3.5 13 Ratings & 1 Reviews • Effective Pixels: 13 MP • Optical Zoom: 0 • Sensor Type: CCD | LCD Size: 6 inch • Max Shutter Speed: 0 • 0 ₹550 ₹1,599 65% off Big Billion Days Price Only few left" [ref=f1e1198] [cursor=pointer]':
          - /url: /buyluxe-mini-hd-digital-camera-kids-photo-video-toy-13mp-dslr/p/itm602821a5a1dd6?pid=CAMHKVH5FPBYXRXK&lid=LSTCAMHKVH5FPBYXRXK8HRKFX&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_1_24&otracker=search&otracker1=search&fm=organic&iid=824d1694-f2c1-4efd-aeda-d5b474bde53d.CAMHKVH5FPBYXRXK.SEARCH&ppt=dynamic&ppn=Login%3ACategory_List&ssid=k8bnmce74g0000001790864735592&qH=198617266331bfb3&ov_redirect=true
          - generic [ref=f1e1199]:
            - img "BuyLuxe Mini HD Digital Camera for Kids – Photo & Video Camera Toy 13MP DSLR Camera" [ref=f1e1203]
            - generic [ref=f1e1204]: Add to Compare
          - generic [ref=f1e1214]:
            - generic [ref=f1e1215]:
              - generic [ref=f1e1216]: BuyLuxe Mini HD Digital Camera for Kids – Photo & Video Camera Toy 13MP DSLR Camera
              - generic [ref=f1e1217]:
                - generic [ref=f1e1218]: "3.5"
                - generic [ref=f1e1221]: 13 Ratings & 1 Reviews
              - list [ref=f1e1224]:
                - listitem [ref=f1e1225]: "• Effective Pixels: 13 MP"
                - listitem [ref=f1e1226]: "• Optical Zoom: 0"
                - listitem [ref=f1e1227]: "• Sensor Type: CCD | LCD Size: 6 inch"
                - listitem [ref=f1e1228]: "• Max Shutter Speed: 0"
                - listitem [ref=f1e1229]: • 0
            - generic [ref=f1e1230]:
              - generic [ref=f1e1232]:
                - generic [ref=f1e1233]: ₹550
                - generic [ref=f1e1234]: ₹1,599
                - generic [ref=f1e1235]: 65% off
              - generic [ref=f1e1236]: Big Billion Days Price
              - generic [ref=f1e1239]: Only few left
        - generic [ref=f1e1244]:
          - generic [ref=f1e1245]: Page 1 of 7
          - navigation [ref=f1e1246]:
            - link "1" [ref=f1e1247] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=1
            - link "2" [ref=f1e1248] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=2
            - link "3" [ref=f1e1249] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=3
            - link "4" [ref=f1e1250] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=4
            - link "5" [ref=f1e1251] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=5
            - link "6" [ref=f1e1252] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=6
            - link "7" [ref=f1e1253] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=7
            - link "Next" [ref=f1e1254] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=2
        - generic [ref=f1e1256]:
          - text: Did you find what you were looking for?
          - generic [ref=f1e1257]:
            - generic [ref=f1e1258] [cursor=pointer]: "Yes"
            - generic [ref=f1e1259] [cursor=pointer]: "No"
    - generic [ref=f1e1261]:
      - generic [ref=f1e1262]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e1263]:
        - generic [ref=f1e1264]:
          - generic [ref=f1e1266]:
            - img "BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera"
          - generic [ref=f1e1267]:
            - link "1. BuyLuxe Mini Digital Camera... 3.3 60 Ratings&5 Reviews ₹486 74% off" [ref=f1e1268] [cursor=pointer]:
              - /url: /buyluxe-mini-digital-camera-kids-girls-boys-gift-young-children-13mp-dslr/p/itm316d68b1bd03c?pid=CAMHKVKTZFH5KG4E&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1269]: 1. BuyLuxe Mini Digital Camera...
              - generic [ref=f1e1271]:
                - generic [ref=f1e1272]: "3.3"
                - generic [ref=f1e1274]:
                  - text: 60 Ratings
                  - generic [ref=f1e1275]: "&5 Reviews"
              - generic [ref=f1e1277]:
                - generic [ref=f1e1278]: ₹486
                - generic [ref=f1e1279]: 74% off
            - list [ref=f1e1280]:
              - listitem [ref=f1e1281]: "Effective Pixels: 13 MP"
              - listitem [ref=f1e1282]: "Optical Zoom: 0"
              - listitem [ref=f1e1283]: "Sensor Type: CCD | LCD Size: 0 inch"
        - generic [ref=f1e1284]:
          - generic [ref=f1e1285]: Most Helpful Review
          - generic [ref=f1e1287]:
            - generic [ref=f1e1288]:
              - generic [ref=f1e1289]: "3"
              - paragraph [ref=f1e1291]: Decent product
            - generic [ref=f1e1292]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f1e1297]:
              - paragraph [ref=f1e1298]: Flipkart Customer
              - paragraph [ref=f1e1303]: Certified Buyer
              - paragraph [ref=f1e1304]: 5 months ago
        - generic [ref=f1e1305]:
          - generic [ref=f1e1306]: Recent Review
          - generic [ref=f1e1308]:
            - generic [ref=f1e1309]:
              - generic [ref=f1e1310]: "3"
              - paragraph [ref=f1e1312]: Decent product
            - generic [ref=f1e1313]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f1e1318]:
              - paragraph [ref=f1e1319]: Flipkart Customer
              - paragraph [ref=f1e1324]: Certified Buyer
              - paragraph [ref=f1e1325]: 5 months ago
      - generic [ref=f1e1326]:
        - generic [ref=f1e1327]:
          - generic [ref=f1e1329]:
            - img "Canon EOS 7D Mark II DSLR Camera (Body only)"
          - generic [ref=f1e1330]:
            - link "2. Canon EOS 7D Mark II DSLR C... 4.1 21 Ratings&6 Reviews ₹99,999 19% off" [ref=f1e1331] [cursor=pointer]:
              - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1332]: 2. Canon EOS 7D Mark II DSLR C...
              - generic [ref=f1e1334]:
                - generic [ref=f1e1335]: "4.1"
                - generic [ref=f1e1337]:
                  - text: 21 Ratings
                  - generic [ref=f1e1338]: "&6 Reviews"
              - generic [ref=f1e1340]:
                - generic [ref=f1e1341]: ₹99,999
                - generic [ref=f1e1342]: 19% off
            - list [ref=f1e1343]:
              - listitem [ref=f1e1344]: "Effective Pixels: 20.2 MP"
              - listitem [ref=f1e1345]: "Sensor Type: CMOS"
              - listitem [ref=f1e1346]: Full HD
        - generic [ref=f1e1347]:
          - generic [ref=f1e1348]: Most Helpful Review
          - generic [ref=f1e1350]:
            - generic [ref=f1e1351]:
              - generic [ref=f1e1352]: "5"
              - paragraph [ref=f1e1354]: Shubham sanjay khanvilkar
            - generic [ref=f1e1355]: My mom gifted me this dslr on my bday...since then i fallen in love with this instrument..awesome pics..:D
            - generic [ref=f1e1360]:
              - paragraph [ref=f1e1361]: Shubham sanjay khanvilkar
              - paragraph [ref=f1e1362]: Apr, 2016
        - generic [ref=f1e1363]:
          - generic [ref=f1e1364]: Recent Review
          - generic [ref=f1e1366]:
            - generic [ref=f1e1367]:
              - generic [ref=f1e1368]: "5"
              - paragraph [ref=f1e1370]: Brilliant
            - generic [ref=f1e1371]: Its a ECO version of 1DX MARK II , excellent camera in crop sensor
            - generic [ref=f1e1376]:
              - paragraph [ref=f1e1377]: Avijit Dasgupta
              - paragraph [ref=f1e1382]: Certified Buyer
              - paragraph [ref=f1e1383]: Oct, 2018
      - generic [ref=f1e1384]:
        - generic [ref=f1e1385]:
          - generic [ref=f1e1387]:
            - img "BuyLuxe Mini HD Digital Camera for Kids – Photo & Video Camera Toy 13MP DSLR Camera"
          - generic [ref=f1e1388]:
            - link "3. BuyLuxe Mini HD Digital Cam... 3.5 13 Ratings&1 Reviews ₹550 65% off" [ref=f1e1389] [cursor=pointer]:
              - /url: /buyluxe-mini-hd-digital-camera-kids-photo-video-toy-13mp-dslr/p/itm602821a5a1dd6?pid=CAMHKVH5FPBYXRXK&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1390]: 3. BuyLuxe Mini HD Digital Cam...
              - generic [ref=f1e1392]:
                - generic [ref=f1e1393]: "3.5"
                - generic [ref=f1e1395]:
                  - text: 13 Ratings
                  - generic [ref=f1e1396]: "&1 Reviews"
              - generic [ref=f1e1398]:
                - generic [ref=f1e1399]: ₹550
                - generic [ref=f1e1400]: 65% off
            - list [ref=f1e1401]:
              - listitem [ref=f1e1402]: "Effective Pixels: 13 MP"
              - listitem [ref=f1e1403]: "Optical Zoom: 0"
              - listitem [ref=f1e1404]: "Sensor Type: CCD | LCD Size: 6 inch"
        - generic [ref=f1e1405]:
          - generic [ref=f1e1406]: Most Helpful Review
          - generic [ref=f1e1408]:
            - generic [ref=f1e1409]:
              - generic [ref=f1e1410]: "5"
              - paragraph [ref=f1e1412]: Fabulous!
            - generic [ref=f1e1413]: Good
            - generic [ref=f1e1418]:
              - paragraph [ref=f1e1419]: C S JHA
              - paragraph [ref=f1e1424]: Certified Buyer
              - paragraph [ref=f1e1425]: 1 month ago
        - generic [ref=f1e1426]:
          - generic [ref=f1e1427]: Recent Review
          - generic [ref=f1e1429]:
            - generic [ref=f1e1430]:
              - generic [ref=f1e1431]: "5"
              - paragraph [ref=f1e1433]: Fabulous!
            - generic [ref=f1e1434]: Good
            - generic [ref=f1e1439]:
              - paragraph [ref=f1e1440]: C S JHA
              - paragraph [ref=f1e1445]: Certified Buyer
              - paragraph [ref=f1e1446]: 1 month ago
      - generic [ref=f1e1447]:
        - generic [ref=f1e1448]:
          - generic [ref=f1e1450]:
            - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens"
          - generic [ref=f1e1451]:
            - link "4. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e1452] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1453]: 4. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e1455]:
                - generic [ref=f1e1456]: "4.5"
                - generic [ref=f1e1458]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e1459]: "&154 Reviews"
              - generic [ref=f1e1461]:
                - generic [ref=f1e1462]: ₹78,990
                - generic [ref=f1e1463]: 16% off
            - list [ref=f1e1464]:
              - listitem [ref=f1e1465]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e1466]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e1467]: "Sensor Type: CMOS"
        - generic [ref=f1e1468]:
          - generic [ref=f1e1469]: Most Helpful Review
          - generic [ref=f1e1471]:
            - generic [ref=f1e1472]:
              - generic [ref=f1e1473]: "5"
              - paragraph [ref=f1e1475]: Brilliant
            - generic [ref=f1e1478]:
              - generic [ref=f1e1479]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e1480] [cursor=pointer]: Read full review
            - generic [ref=f1e1482]:
              - paragraph [ref=f1e1483]: Satyajit Acharjee
              - paragraph [ref=f1e1488]: Certified Buyer
              - paragraph [ref=f1e1489]: Aug, 2019
        - generic [ref=f1e1490]:
          - generic [ref=f1e1491]: Recent Review
          - generic [ref=f1e1493]:
            - generic [ref=f1e1494]:
              - generic [ref=f1e1495]: "5"
              - paragraph [ref=f1e1497]: Perfect product!
            - generic [ref=f1e1498]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e1503]:
              - paragraph [ref=f1e1504]: Flipkart Customer
              - paragraph [ref=f1e1509]: Certified Buyer
              - paragraph [ref=f1e1510]: 3 months ago
      - generic [ref=f1e1511]:
        - generic [ref=f1e1512]:
          - generic [ref=f1e1514]:
            - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera"
          - generic [ref=f1e1515]:
            - link "5. Toy Imagine Top Quality Kid... 3.1 17 Ratings&2 Reviews ₹542 69% off" [ref=f1e1516] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1517]: 5. Toy Imagine Top Quality Kid...
              - generic [ref=f1e1519]:
                - generic [ref=f1e1520]: "3.1"
                - generic [ref=f1e1522]:
                  - text: 17 Ratings
                  - generic [ref=f1e1523]: "&2 Reviews"
              - generic [ref=f1e1525]:
                - generic [ref=f1e1526]: ₹542
                - generic [ref=f1e1527]: 69% off
            - list [ref=f1e1528]:
              - listitem [ref=f1e1529]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e1530]: "Sensor Type: CCD"
              - listitem [ref=f1e1531]: "1080"
        - generic [ref=f1e1532]:
          - generic [ref=f1e1533]: Most Helpful Review
          - generic [ref=f1e1535]:
            - generic [ref=f1e1536]:
              - generic [ref=f1e1537]: "1"
              - paragraph [ref=f1e1539]: Did not meet expectations
            - generic [ref=f1e1540]: The battery is draining quickly.
            - generic [ref=f1e1545]:
              - paragraph [ref=f1e1546]: Komal Kumar Sahu
              - paragraph [ref=f1e1551]: Certified Buyer
              - paragraph [ref=f1e1552]: 3 months ago
        - generic [ref=f1e1553]:
          - generic [ref=f1e1554]: Recent Review
          - generic [ref=f1e1556]:
            - generic [ref=f1e1557]:
              - generic [ref=f1e1558]: "1"
              - paragraph [ref=f1e1560]: Did not meet expectations
            - generic [ref=f1e1561]: The battery is draining quickly.
            - generic [ref=f1e1566]:
              - paragraph [ref=f1e1567]: Komal Kumar Sahu
              - paragraph [ref=f1e1572]: Certified Buyer
              - paragraph [ref=f1e1573]: 3 months ago
  - contentinfo [ref=f1e1574]:
    - generic [ref=f1e1576]:
      - generic [ref=f1e1577]:
        - generic [ref=f1e1578]:
          - generic [ref=f1e1579]: ABOUT
          - link "Contact Us" [ref=f1e1580] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e1581] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e1582] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e1583] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e1584] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e1585] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e1586]:
          - generic [ref=f1e1587]: GROUP COMPANIES
          - link "Myntra" [ref=f1e1588] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e1589] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e1590] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e1591]:
          - generic [ref=f1e1592]: HELP
          - link "Payments" [ref=f1e1593] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e1594] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e1595] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e1596] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e1597]:
          - generic [ref=f1e1598]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e1599] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e1600] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e1601] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e1602] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e1603] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e1604] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e1605] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e1606] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e1608]:
          - generic [ref=f1e1609]: "Mail Us:"
          - generic [ref=f1e1612]:
            - paragraph [ref=f1e1613]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e1614]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e1615]: Clove Embassy Tech Village,
            - paragraph [ref=f1e1616]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e1617]: Bengaluru, 560103,
            - paragraph [ref=f1e1618]: Karnataka, India
          - generic [ref=f1e1619]: Social
          - generic [ref=f1e1620]:
            - link [ref=f1e1622] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e1625] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e1628] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e1631] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e1634]:
          - generic [ref=f1e1635]: "Registered Office Address:"
          - generic [ref=f1e1638]:
            - paragraph [ref=f1e1639]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e1640]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e1641]: Clove Embassy Tech Village,
            - paragraph [ref=f1e1642]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e1643]: Bengaluru, 560103,
            - paragraph [ref=f1e1644]: Karnataka, India
            - paragraph [ref=f1e1645]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e1646]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e1647] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e1648] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e1650]:
        - link "Become a Seller" [ref=f1e1653] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e1654]: Advertise
        - link "Gift Cards" [ref=f1e1658] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e1661] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e1662]: © 2007-2026 Flipkart.com
```

# Test source

```ts
  1   | import fs from 'fs';
  2   | import path from 'path';
  3   | 
  4   | 
  5   | // ============================================================
  6   | // SCREENSHOT UTILITY
  7   | // ============================================================
  8   | 
  9   | export async function captureScreen(
  10  |     page,
  11  |     testInfo,
  12  |     screenName
  13  | ) {
  14  | 
  15  |     await testInfo.attach(
  16  |         `SCREEN - ${screenName}`,
  17  |         {
> 18  |             body: await page.screenshot({
      |                              ^ Error: page.screenshot: Test timeout of 30000ms exceeded.
  19  |                 fullPage: true
  20  |             }),
  21  | 
  22  |             contentType: 'image/png'
  23  |         }
  24  |     );
  25  | }
  26  | 
  27  | 
  28  | // ============================================================
  29  | // CUSTOM HTML REPORTER
  30  | // ============================================================
  31  | 
  32  | class CustomHTMLReporter {
  33  | 
  34  |     constructor() {
  35  | 
  36  |         this.results = [];
  37  | 
  38  |         this.reportFolder =
  39  |             path.resolve('custom-report');
  40  | 
  41  |         this.attachmentFolder =
  42  |             path.join(
  43  |                 this.reportFolder,
  44  |                 'attachments'
  45  |             );
  46  | 
  47  |         fs.mkdirSync(
  48  |             this.attachmentFolder,
  49  |             {
  50  |                 recursive: true
  51  |             }
  52  |         );
  53  |     }
  54  | 
  55  | 
  56  |     // ========================================================
  57  |     // CALLED AFTER EVERY TEST
  58  |     // ========================================================
  59  | 
  60  |     onTestEnd(test, result) {
  61  | 
  62  |         // -----------------------------------------------
  63  |         // TEST TITLE
  64  |         // -----------------------------------------------
  65  | 
  66  |         const testTitle =
  67  |             test.title;
  68  | 
  69  | 
  70  |         // -----------------------------------------------
  71  |         // SCENARIO
  72  |         // -----------------------------------------------
  73  | 
  74  |         const titlePath =
  75  |             test.titlePath();
  76  | 
  77  |         let scenario = '';
  78  | 
  79  | 
  80  |         if (titlePath.length >= 2) {
  81  | 
  82  |             scenario =
  83  |                 titlePath[
  84  |                     titlePath.length - 2
  85  |                 ];
  86  |         }
  87  | 
  88  | 
  89  |         // -----------------------------------------------
  90  |         // STATUS
  91  |         // -----------------------------------------------
  92  | 
  93  |         let status;
  94  | 
  95  | 
  96  |         if (result.status === 'passed') {
  97  | 
  98  |             status = 'PASSED';
  99  | 
  100 |         } else if (
  101 |             result.status === 'failed' ||
  102 |             result.status === 'timedOut'
  103 |         ) {
  104 | 
  105 |             status = 'FAILED';
  106 | 
  107 |         } else if (
  108 |             result.status === 'skipped'
  109 |         ) {
  110 | 
  111 |             status = 'SKIPPED';
  112 | 
  113 |         } else {
  114 | 
  115 |             status =
  116 |                 result.status.toUpperCase();
  117 |         }
  118 | 
```