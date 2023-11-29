
user1 = User.create({
    first_name: "Olivia",
    last_name: "Hammer",
    # avatar: File.open(Rails.root.join("public/images/seed_photos/seed_photo1.jpg")),
    username: "olivia.hammer",
    password: "westport123",
    password_confirmation: "westport123",
    tsa_precheck: 123456789
})

user2 = User.create({
    first_name: "Jake",
    last_name: "McGuffog",
    # avatar: File.open(Rails.root.join("public/images/seed_photos/seed_photo2.jpg")),
    username: "jake.mcguffog",
    password: "skis123",
    password_confirmation: "skis123",
    tsa_precheck: 123456789
})

user3 = User.create({
    first_name: "Ilyssa",
    last_name: "Rudman",
    # avatar: File.open(Rails.root.join("public/images/seed_photos/seed_photo3.jpg")),
    username: "ilyssa.rudman",
    password: "malibu123",
    password_confirmation: "malibu123",
    tsa_precheck: 123456789
})

paris = Destination.create({
    country: "France",
    city: "Paris",
    photo: "https://assets.cntraveller.in/photos/62752c1974266e7300892c46/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg",
    latitude: 48.8566,
    longitude: 2.3522
})

florence = Destination.create({
    country: "Italy",
    city: "Florence",
    photo: "https://tourismmedia.italia.it/is/image/mitur/20210401173629-firenze-toscana-gettyimages-1145040590-2?wid=1600&hei=900&fit=constrain,1&fmt=webp",
    latitude: 43.7696,
    longitude: 11.2558
})

london = Destination.create({
    country: "England",
    city: "London",
    photo: "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg",
    latitude: 51.5072,
    longitude: -0.1276
})

tokyo = Destination.create({
    country: "Japan",
    city: "Tokyo",
    photo: "https://media.gq-magazine.co.uk/photos/5d13ad779a22c269d69496c8/master/w_1920,h_1280,c_limit/tokyo-hp-gq-19oct18_istock_b.jpg",
    latitude: 35.6762,
    longitude: 139.6503
})

australia = Destination.create({
    country: "Australia",
    city: "Sydney",
    photo: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
    latitude: -33.8688,
    longitude: 151.2093
})

tel_aviv = Destination.create({
    country: "Israel",
    city: "Tel Aviv",
    photo: "https://www.frommers.com/system/media_items/attachments/000/869/611/s980/Tel_Aviv_Skyline__Israel.jpg?1665751239",
    latitude: 32.0853,
    longitude: 34.7818
})

prague = Destination.create({
    country: "Czech Republic",
    city: "Prague",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg",
    latitude: 50.0755,
    longitude: 14.4378
})

dublin = Destination.create({
    country: "Ireland",
    city: "Dublin",
    photo: "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555940916/production/city/hero_image_32_1555940916.jpg",
    latitude: 53.3498,
    longitude: -6.2603
})

barcelona = Destination.create({
    country: "Spain",
    city: "Barcelona",
    photo: "https://media.cntraveller.com/photos/62d14e029bbb08746e6fd952/3:2/w_6000,h_4000,c_limit/barcelonaGettyImages-1386922276.jpeg",
    latitude: 41.3874,
    longitude: 2.1686
})

cape_town = Destination.create({
    country: "South Africa",
    city: "Cape Town",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1",
    latitude: -33.9249,
    longitude: 18.4241
})

amsterdam = Destination.create({
    country: "Netherlands",
    city: "Amsterdam",
    photo: "https://www.travelandleisure.com/thmb/_3nQ1ivxrnTKVphdp9ZYvukADKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amsterdam-nl-AMSTERDAMTG0521-6d2bfaac29704667a950bcf219680640.jpg",
    latitude: 52.3676,
    longitude: 4.9041
})

copenhagen = Destination.create({
    country: "Denmark",
    city: "Copenhagen",
    photo: "https://cdn.britannica.com/47/83447-050-42342CB1/Nyhavn-Canal-Copenhagen.jpg",
    latitude: 55.6761,
    longitude: 12.5683
})

rome = Destination.create({
    country: "Italy",
    city: "Rome",
    photo: "https://lp-cms-production.imgix.net/2021-07/GettyRF_582021521.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800",
    latitude: 41.9028,
    longitude: 12.4964
})

stockholm = Destination.create({
    country: "Sweden",
    city: "Stockholm",
    photo: "https://blog.zoom.us/wp-content/uploads/2023/01/GettyImages-1314099040-1820x1214.jpg",
    latitude: 59.3293,
    longitude: 18.0686
})

nyc = Destination.create({
    country: "United States of America",
    city: "New York City",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
    latitude: 40.7128,
    longitude: -74.0060
})

santorini = Destination.create({
    country: "Greece",
    city: "Santorini",
    photo: "https://media.cntraveller.com/photos/611be9bb69410e829d87e0c2/16:9/w_2560%2Cc_limit/Blue-domed-church-along-caldera-edge-in-Oia-Santorini-greece-conde-nast-traveller-11aug17-iStock.jpg",
    latitude: 36.3932,
    longitude: 25.4615
})

machu_picchu = Destination.create({
    country: "Peru",
    city: "Machu Picchu",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    latitude: -13.2263,
    longitude: -72.4973
})

berlin = Destination.create({
    country: "Germany",
    city: "Berlin",
    photo: "https://a.storyblok.com/f/58806/1164x784/20ee327044/berlin_city_01_skyline_unsplash.jpeg",
    latitude: 52.5200,
    longitude: 13.4050
})

zurich = Destination.create({
    country: "Switzerland",
    city: "Zürich",
    photo: "https://static.euronews.com/articles/stories/07/19/89/40/1000x563_cmsv2_a235329b-754b-571a-ac10-b4cd624cc798-7198940.jpg",
    latitude: 47.3769,
    longitude: 8.5417
})

marrakesh = Destination.create({
    country: "Morocco",
    city: "Marrakesh",
    photo: "https://loveincstatic.blob.core.windows.net/loveexploring/2020/Marrakech-full-guide/1Jemaa-el-Fna.jpg",
    latitude: 31.6295,
    longitude: -7.9811
})


#Activities

#Paris

activity1 = Activity.create({
    name: "Musée d'Orsay",
    description: "Musée d'Orsay in Paris is a must-visit for art lovers and travelers alike. It's famous for its impressive collection of Impressionist and post-Impressionist art, making it one of the largest in the world. Housed in a stunning former railway station on the Seine, the museum is just as beautiful on the outside as it is on the inside. Don't miss the famous clock face, which is part of the museum's exhibition.",
    address: "1 Rue De La Légion d'Honneur, 75007 Paris France",
    latitude: 48.859962,
    longitude: 2.326561,
    duration: "2 to 4 hours",
    price: "Free admission for ages 18 years and younger. Full price tickets are €16.",
    photo: "https://media.timeout.com/images/105976901/image.jpg",
    url: "https://www.musee-orsay.fr/en/visit/admission-opening-times-tickets",
    destination_id: paris.id
})

activity2 = Activity.create({
    name: "Louvre Museum",
    description: "As one of the largest, oldest, and grandest museums in the world, the Louvre hosts a treasure trove of artworks spanning diverse cultures and periods of history. Marvel at the museum's greatest hits: the Mona Lisa, the Venus de Milo, Winged Victory, and stunning collections of prized paintings and Greek and Roman statues. It's not possible to see all of the museum in one visit, so be inspired to return for your next trip to Paris.",
    address: "99 Rue de Rivoli, 75001 Paris France",
    duration: "2 hours",
    latitude: 48.860294,
    longitude: 2.338629,
    price: "Free admission for ages 18 years and younger. Full price tickets are €16.",
    photo: "https://cdn.getyourguide.com/img/tour/878fbf962b3a3596.jpeg/98.jpg",
    url: "https://www.louvre.fr/en",
    destination_id: paris.id
})

activity3 = Activity.create({
    name: "Guided tour up to the 2nd floor of the Eiffel Tower",
    description: "Discover the world's most popular attraction, the Eiffel Tower. Ascend to the second level for a breath taking panoramic view of the city. Before descending, indulge in the restaurant located on the first floor.",
    address: "5 Avenue, 75007 Paris France",
    duration: "1 hour",
    latitude: 48.858093,
    longitude: 2.294694,
    price: "Adult full price tickets are €38.10.",
    photo: "https://images.prismic.io/mystique/4bb367e3-0cd2-43e8-af4f-843c34140596_ea04ba5d0f9a6571145de80ede53a572-The+Esplanade+eiffel+tower.jpeg?auto=compress,format",
    url: "https://www.toureiffel.paris/en",
    destination_id: paris.id
})
activity4 = Activity.create({
    name: "Luxembourg Gardens",
    description: "Luxembourg Gardens is a charming oasis in the heart of Paris, loved by both locals and travelers alike. With 55 acres of manicured gardens, it's the perfect place to unwind and soak up the Parisian atmosphere. You can admire the beautifully arranged flower beds, towering trees, and the grand Luxembourg Palace which overlooks the gardens.",
    address: "Rue de Médicis Rue de Vaugirard, 75006 Paris France",
    duration: "30 minutes",
    latitude: 48.846943,
    longitude: 2.337222,
    price:"Free access to garden for all public.",
    photo: "https://www.exp1.com/blog/wp-content/uploads/sites/7/2020/06/Luxembourg-Gardens-with-cherubs-holding-flower-pots-in-foreground-and-palace-in-the-background-1024x682.jpg",
    url: "https://jardin.senat.fr/",
    destination_id: paris.id
})

#Florence

activity5 = Activity.create({
    name: "Galleria dell'Accademia",
    description: "Europe's first school of drawing, this museum of art is chiefly famous for its several sculptures by Michelangelo, notably his David, in addition to an extensive collection of 15th- and 16th-century paintings.",
    address: "Via Ricasoli, 58/60, 50122, Florence Italy",
    duration: "1 to 2 hours",
    latitude: 45.43111,
    longitude: 12.32806,
    price: "Free admission for ages under 18 years old. Reduced rate €3 for young people 18-25 years old. Full price tickets are €16.",
    photo: "https://www.galleriaaccademiafirenze.it/wp-content/uploads/2022/03/Sala-del-Colosso.jpg",
    url: "https://www.galleriaaccademiafirenze.it/en/",
    destination_id: florence.id
})

activity6 = Activity.create({
    name: "Florence Duomo Express Guided Tour",
    description: "The cathedral's iconic dome was an architectural feat designed by famed Renaissance architect Brunelleschi. Climb 463 steps to the cupola for panoramic views of Florence.",
    address: "Via della Canonica, 1 Piazza del Duomo, 50122, Florence Italy",
    duration: "30 minutes",
    latitude: 43.773251,
    longitude: 11.255474,
    price: "Free admission for ages 18 years and younger. Full price tickets are €17.",
    photo: "https://www.ourescapeclause.com/wp-content/uploads/2022/04/shutterstock_1469046200-scaled.jpg",
    url: "https://duomo.firenze.it/en/discover/dome",
    destination_id: florence.id
})

activity7 = Activity.create({
    name: "Gallerie Degli Uffizi",
    description: "One of the great museums of the world, the Uffizi houses the premier collection of Italian Renaissance art, featuring works by such masters as Botticelli, Titian, Michelangelo and da Vinci.",
    address: "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",
    duration: "2-3 hours",
    latitude: 43.7686,
    longitude: 11.2552,
    price: "Adult full price tickets are €26. With the Uffizi ticket you can access the National Archaeological Museum and the Opificio delle Pietre Dure Museum for free.",
    photo: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/4c746a07-6826-4b2a-ba05-031041d67ed5/cd08afbe-c024-4676-b81f-f915b95ee568/1280x720/match/image.jpg",
    url: "https://www.uffizi.it/",
    destination_id: florence.id
})
activity8 = Activity.create({
    name: "Museo Galileo",
    description: "Housed in an old palace that was restored in the mid-1800s, this science museum houses an impressive collection of scientific instruments dating from the 13th century.",
    address: "Piazza dei Giudici, 1, 50122 Firenze FI, Italy",
    duration: "1 to 2 hours",
    latitude: 43.7677,
    longitude: 11.2559,
    price:"Adult full price tickets are €10.",
    photo: "https://www.artviva.com/wp-content/uploads/2018/12/Museo-Galileo-1.jpg",
    url: "https://www.museogalileo.it/it/",
    destination_id: florence.id
})

#London

activity9 = Activity.create({
    name: "TATE Modern",
    description: "Explore modern and contemporary art from around the world. Tate Modern has over a hundred years of art, from modernism in the early 1900s, to exciting works created today. This includes paintings, sculptures, and more made by artists all over the world such as Pablo Picasso, Salvador Dali, Emily Kame Kngwarreye, and Jenny Holzer. Experience Tate's iconic Turbine Hall. In the Natalie Bell Building you can see how artists create new ideas. In the Blavatnik Building you can explore the underground Tanks, dedicated to performances, installations and video works.",
    address: "Bankside, London SE1 9TG",
    duration: "1 to 2 hours",
    latitude: 51.507595,
    longitude: -0.099356,
    price: "Free admission for all public. Booking a ticket is recommended for exhibitions but some tickets may be available at the door.",
    photo: "https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2019/03/18102631/tate-modern-best-visitor-attraction.jpg",
    url: "https://www.tate.org.uk/visit/tate-modern",
    destination_id: london.id
})

activity10 = Activity.create({
    name: "London Eye",
    description: "Located along the Thames River, this iconic observation wheel offers unobstructed views from its glass pods. During the 30-minute ride, you'll be able to see London's well-known buildings like Buckingham Palace, Big Ben, and The Shard. On a clear day, you can see up to 25 miles from the top—where Windsor Castle is. Sunset views here are otherworldly, but nightfall views of the twinkling lights are great too.",
    address: "Riverside Building, County Hall, London SE1 7PB, United Kingdom",
    duration: "30 minutes",
    latitude: 51.503399,
    longitude: -0.119519,
    price: "Standard entry price starting from £38.",
    photo: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ikknf4oeysojhyv2z0jk/LondonEyeTickets-FastTrackTicketsAvailable-KlookUnitedKingdom.jpg",
    url: "https://www.londoneye.com/",
    destination_id: london.id
})

activity11 = Activity.create({
    name: "Buckingham Palace",
    description: "Buckingham Palace is recognised around the world as the focus of national and royal celebrations as well as the backdrop to the regular Changing the Guard ceremony. Explore the magnificent State Rooms which are open to visitors for 10 weeks each summer and on selected dates during winter and spring. During a visit to Buckingham Palace, visitors can see the 19 magnificent State Rooms, which provide the setting for ceremonial occasions and official entertaining. All rooms are furnished with many of the greatest treasures from the Royal Collection.",
    address: "Spur Road, London SW1A 1AA England",
    latitude: 51.501476,
    longitude: -0.140634,
    price: "Standard entry price starting from £17",
    photo: "https://cdn.britannica.com/94/148994-050-3EFF8DCB/Buckingham-Palace-Queen-Victoria-Memorial-London-statue.jpg",
    destination_id: london.id
})
activity12 = Activity.create({
    name: "Camden Market",
    description: "We're driven by the belief that you can only keep discovering if you keep looking ... so we're always adding interesting stores and traders. No two days are ever the same at Camden Market. Keep checking back to see what's new and what's next.",
    address: "32 Camden Lock Place, London NW1 8AF England",
    duration: "2 hours",
    latitude: 51.536388,
    longitude: -0.140556,
    price: "Camden Market is open to the public. Shops and food prices range.",
    photo: "https://www.selina.com/blog/wp-content/uploads/2021/07/javier-martinez-8W8k7z-F3Kk-unsplash-1.jpg",
    url: "https://www.rct.uk/visit/buckingham-palace?gclid=EAIaIQobChMIpqm-paCHgAMVGPDICh14TAHlEAAYASAAEgKTyfD_BwE",
    destination_id: london.id
})

#tokyo

activity13 = Activity.create({
    name: "Shinjuku Gyoen National Garden",
    description: "Shinjuku Gyoen was constructed on the site of a private mansion belonging to Lord Naito, a 'daimyo' (feudal lord) of the Edo era. Completed in 1906 as an imperial garden, it was re-designated as a national garden after the Second World War and opened to the public. With 58.3 ha(144 acres) in size and a circumference of 3.5 km, it blends three distinct styles, Formal Garden, Landscape Garden and Japanese Traditional Garden, and is considered to be one of the most important gardens from the Meiji era.",
    address: "11 Naito-machi, Shinjuku 160-0014 Tokyo Prefecture",
    duration: "45 minutes",
    latitude: 35.685272,
    longitude: 139.709442,
    price: "Free admission for children ages 15 and under. General admissions for adults starting from 	500yen.",
    photo: "https://www.japan-guide.com/g18/3034_001_01.jpg",
    url: "https://www.env.go.jp/garden/shinjukugyoen/english/index.html",
    destination_id: tokyo.id
})

activity14 = Activity.create({
    name: "Senso-ji Temple",
    description: "According to legend, two brothers kept trying to return a statue of Kannon, the goddess of mercy, to the Sumida River only to have it returned to them the next day. This temple located in Tokyo's Asakusa district was built to honor her.",
    address: "2-3-1, Asakusa, Taito 111-0032 Tokyo Prefecture",
    duration: "1 to 2 hours",
    latitude: 35.714661,
    longitude: 139.796783,
    price: "Free admission for all public.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Cloudy_Sens%C5%8D-ji.jpg",
    url: "https://www.senso-ji.jp/english/",
    destination_id: tokyo.id
})

activity15 = Activity.create({
    name: "Meiji Jingu Shrine",
    description: "Two, large gates frame the entrance to this Shinto shrine that was dedicated to Emperor and Empress Meiji. Completed in 1920, repairs were required after the shrine was damaged during World War II.",
    address: "1-1 Yoyogi-Kamizono-cho, Shibuya 151-8857 Tokyo Prefecture",
    duration: "1 hour",
    latitude: 35.675526,
    longitude: 139.698578,
    price: "Free admission for all public.",
    photo: "https://loving-tokyo.com/en/wp-content/uploads/2020/02/meiji-jingu-shrine-main-complex-200210134821003.jpg",
    url: "https://www.meijijingu.or.jp/en/",
    destination_id: tokyo.id
})

activity16 = Activity.create({
    name: "Tokyo National Museum",
    description: "This famous museum houses the largest collection of Japanese artifacts and artworks in the world. With over 100,000 pieces and room to display only 4,000, exhibits are rotated constantly.",
    address: "13-9, Uenokoen, Taito 110-0007 Tokyo Prefecture",
    duration: "30 minutes",
    latitude: 35.7188,
    longitude: 139.7765,
    price: "Free admission for High/Junior High/ Elementary School Students and persons under 18 and over 70. 500 yen for University Students. 1,000 yen for adults.",
    photo: "https://www.japan-guide.com/g18/3054_tokyo_01.jpg",
    url: "https://www.tnm.jp/?lang=en",
    destination_id: tokyo.id
})

#australia

activity17 = Activity.create({
    name: "Sydney Opera House",
    description: "One of the most iconic buildings in the world - the Sydney Opera House is an architectural masterpiece and vibrant performance space. It's a place where the past shapes the future, where conventions are challenged and cultures are celebrated. Step inside and discover the stories that make the Opera House so inspiring. Whether you're a local or a tourist, a first-timer or an aficionado, the Sydney Opera House has something for everyone.",
    address: "Bennelong Point, Sydney NSW 2000, Australia",
    duration: "1 hour",
    latitude: -33.856159,
    longitude: 151.215256,
    price: "The Sydney Opera House's entry fee is usually INR 2,000 per person. The cost varies from performance to performance and is influenced by the runtime, the type of show, and the venue where the performance takes place.",
    photo: "https://images.strang-inc.com/wp-content/uploads/2019/04/01192706/Sydenyopera-1024x538-1.jpg",
    url: "https://www.sydneyoperahouse.com/",
    destination_id: australia.id
})

activity18 = Activity.create({
    name: "Art Gallery of New South Wales",
    description: "From its magnificent site on Sydney Harbour, on Gadigal land, the Art Gallery of New South Wales is one of Australia's flagship art museums and the state's leading visual arts institution.",
    address: "Art Gallery Road, The Domain, Sydney NSW 2000, Australia",
    duration: "2 to 3 hours",
    latitude: -33.8688,
    longitude: 151.2174,
    price: "Admission is free, and so are most exhibitions and events.",
    photo: "https://media.cntraveler.com/photos/5a7e178926924e3c324ef2f8/16:9/w_2560%2Cc_limit/Art-Gallery-NSW-TTD-and-Museums__2018_20090818oldcourts_1.jpg",
    url: "https://www.artgallery.nsw.gov.au/",
    destination_id: australia.id
})

activity19 = Activity.create({
    name: "Royal Botanic Garden Sydney",
    description: "The Royal Botanic Garden Sydney is a major botanical Garden located in the heart of Sydney, New South Wales, Australia. Opened in 1816, the garden is the oldest scientific institution in Australia and one of the most important historic botanical institutions in the world.",
    address: "Mrs Macquaries Rd, Sydney, New South Wales 2000 Australia",
    duration: "2 hours",
    latitude: -33.864186,
    longitude: 151.216571,
    price: "Entry to the gardens is free.",
    photo: "https://s3.eu-west-2.amazonaws.com/tripspell/EXPERIENCE/royal-botanic-garden-sydney/description/0_high",
    url: "https://www.rbgsyd.nsw.gov.au/",
    destination_id: australia.id
})

activity20 = Activity.create({
    name: "Queen Victoria Building",
    description: "Visit for the beautiful architecture, stay for the shops. Window shop through the atrium's five levels for high fashion brands, enjoy coffee at the cafes, and listen to the Royal Clock strike.",
    address: "455 George St, Sydney, New South Wales 2000 Australia",
    duration: "45 minutes",
    latitude: -37.020100,
    longitude: 144.964600,
    price: "Tickets are free of charge.",
    photo: "https://www.overseasattractions.com/wp-content/uploads/2019/02/queen-victoria-building.jpg",
    url: "https://www.qvb.com.au/",
    destination_id: australia.id
})

#tel aviv

activity21 = Activity.create({
    name: "Carmel Market (Shuk Ha'Carmel)",
    description: "Tel Aviv's biggest and busiest marketplace is filled with colorful stalls and shouting vendors selling a variety of goods, from dried fruits and exotic spices to clothing and footwear.", 
    address: "HaCarmel St 35, Tel Aviv-Yafo, Israel",
    duration: "1 hour",
    latitude: 32.0695,
    longitude: 34.7698,
    price: "Foods and shops vary in prices.",
    photo: "https://media.timeout.com/images/103477516/750/562/image.jpg",
    url: "https://en.shuktlv.co.il/category/carmel-market",
    destination_id: tel_aviv.id
})

activity22 = Activity.create({
    name: "Joseph Bau House Museum",
    description: "'Joseph Bau House' is an authentic artist workshop that conveys to the visitor the amazing life story of Joseph Bau reflected in the wide range of his creativity, which includes movies, animation, paintings, graphics, literature and research of the Hebrew language - all spiced with special humor stemming from his optimistic view of life. Rebecca and Joseph Bau are the original couple whose wedding is shown in the movie 'Schindler's List'. Visits may be made only by appointment.",
    address: "9 Berdichevski St, Tel Aviv 6425808 Israel",
    duration: "2 to 3 hours",
    latitude: 32.071230,
    longitude: 34.779910,
    price: "For booking and prices please call ahead.",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/57/df/af/joseph-bau-house.jpg?w=1200&h=-1&s=1",
    url: "http://www.josephbau.com/",
    destination_id: tel_aviv.id
})

#prague

activity23 = Activity.create({
    name: "St. Vitus Cathedral",
    description: "Situated at the Prague Castle, St. Vitus Cathedral is the most important and largest church in Prague. The cathedral is the burial place of the former Czech kings and a home of the Czech Crown Jewels.",
    address: "III. Nadvori 48/2 Prague Castle, Prague 119 01 Czech Republic",
    duration: "2.5 hours",
    latitude: 50.090473,
    longitude: 14.401048,
    price: "There are three different sets of tickets to Prague Castle with access to St. Vitus Cathedral, starting from CZK 350 for adults, CZK 175 for children, students, and visitors aged over 65.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/St_Vitus_Prague_September_2016-21.jpg/1200px-St_Vitus_Prague_September_2016-21.jpg",
    url: "https://www.katedralasvatehovita.cz/en",
    destination_id: prague.id
})

activity24 = Activity.create({
    name: "Prague Zoo",
    description: "Prague Zoological Garden is situated near the center of the Czech capital, in a unique rugged landscape on the bank of the Vltava River. It opened in 1931 and during its existence of more than 80 years it has risen to become one of the most prestigious zoos in the world. 5,049 animals and 676 species live in Prague Zoo. You can explore 13 pavilions and 150 exhibits over 58 hectares. The kids will love the Bororo Reserve, chairlift, mini-train, observation tower, paddling pool and Children's Zoo. The pride of the zoo is its Elephant Valley, home to a sizeable herd of Asian elephants. The Giant Salamander House, where you can see the largest amphibians in the world - the critically endangered Chinese Giant Salamanders - is extraordinary as well; and the African House with an adjacent vast meadow inhabited by herds of antelopes and giraffes is worth your attention, too.",
    address: "U Trojskeho Zamku 120/3, Prague 171 00 Czech Republic",
    duration: "5 hours",
    latitude: 50.11694,
    longitude: 14.40611,
    price: "Tickets are CZK 330 for adults and CZK 250 for students and children aged 3 to 15 years.",
    photo: "https://www.nicerightnow.com/wp-content/uploads/2017/09/VLOG-017-Prague-Zoo-covr.jpg",
    url: "https://www.zoopraha.cz/en",
    destination_id: prague.id
})

#dublin

activity25 = Activity.create({
    name: "Guinness Storehouse",
    description: "Say cheers at the Guinness Storehouse in Dublin, Ireland. Housed in an old fermentation plant, the seven-story brewery gives you the lowdown on Ireland's iconic beer. Start by standing at the bottom of the world's largest pint glass and then make your way through the different stages of production before enjoying a complimentary pint with a view at Gravity Bar, Dublin's highest bar. Even better, learn to pour your own pint with the Guinness Academy Experience.",
    address: "St. James's Gate, Dublin 8, D08 VF8H, Ireland",
    duration: "90 minutes",
    latitude: 53.341908,
    longitude: -6.286686,
    price: "Ticket prices starting from €26.",
    photo: "https://www.dublincitihotel.com/wp-content/uploads/2020/02/GuinnessBrewerygate_Guinnesss_storehouse.jpg",
    url: "https://www.guinness-storehouse.com/en/home",
    destination_id: dublin.id
})

#Barcelona

activity26 = Activity.create({
    name: "Parc Guell",
    description: "The quirky colorful mosaics and undulating curves of Park Güell are a signature of the legendary Catalan architect Antoni Gaudi, who designed many of the features in this park. Officially opened in 1926 and initially planned as a district for the rich, it is now one of the city's most popular attractions and a great representation of Catalan modernism. The entrance with two fairytale-like houses and the iconic salamander fountain are the most busy. You can climb up to the highest point, El Calvari, and visit the nearby Gaudi House museum as well.",
    address: "08024 Barcelona, Spain",
    duration: "30 minutes",
    latitude: 41.414494,
    longitude: 2.152695,
    price: "General admission starting from 10€.",
    photo: "https://cdn.getyourguide.com/img/tour/55bfb034705fe.jpeg/148.jpg",
    url: "https://parkguell.barcelona/en?q=en",
    destination_id: barcelona.id
})

#capetown

activity27 = Activity.create({
    name: "Table Mountain Aerial Cableway",
    description: "The best views of Cape Town are seen from the top of Table Mountain. The Cableway takes you to the summit in under 5 minutes and the cable car's rotating floor ensure that all visitors get a 360 degree aerial view of the city.",
    address: "Tafelberg Road Lower Cable Station, Cape Town Central 8001 South Africa",
    duration: "It is a 5 minute ride. People tend to spend 3 to 4 hours at the top.",
    latitude: -33.962864,
    longitude: 18.409834,
    price: "One way ticket starting from R220.",
    photo: "https://www.capetownetc.com/wp-content/uploads/2021/03/5A9A9460Final--1024x683.jpg",
    url:"https://tablemountain.net/",
    destination_id: cape_town.id
})

#amsterdam

activity28 = Activity.create({
    name: "Van Gogh Museum",
    description: "Discover the world's largest collection of works by Dutch painter Vincent van Gogh, featuring masterpieces such as Sunflowers, The Potato Eaters, Almond Blossom and The Bedroom.",
    address: "Museumplein 6, 1071 DJ Amsterdam The Netherlands",
    duration: "1 hour and 15 minutes",
    latitude: 52.35836725,
    longitude: 4.88108997215221,
    price: "€20 per person, free admission under 18 years old.",
    photo: "https://images.adsttc.com/media/images/55e6/f619/e58e/ce03/1300/0374/large_jpg/PORTADA_06_VanGoghMuseum_EntranceBuilding_HansvanHeeswijkArchitects_photo_RonaldTilleman.jpg?1441199623",
    url: "https://krollermuller.nl/en/van-gogh-gallery?gclid=EAIaIQobChMIxfelr6SHgAMVlsvICh3-cQL0EAAYASAAEgL5lPD_BwE",
    destination_id: amsterdam.id
})

#rome

activity29 = Activity.create({
    name: "Colosseum",
    description: "The ancient Flavian Amphitheater was built by the Flavian emperors in 70 C.E. as a gift to the Roman people. As the largest Roman theater ever built, it was designed to house over 50,000 people, and had played host to gladiator games, plays and even public executions.",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    duration: "1 hour",
    latitude: 41.890251,
    longitude: 12.492373,
    price: "Colosseum Standard adult ticket	is € 16.00.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
    url: "https://www.thecolosseum.org/",
    destination_id: rome.id
})

#stockholm

activity30 = Activity.create({
    name: "Vasa Museum",
    description: "The Vasa ship capsized and sank in Stockholm 1628. After 333 years on the seabed the mighty warship was salvaged and the voyage could continue. Today Vasa is the world's only preserved 17th century ship.",
    address: "Galärvarvsvägen 14, 115 21 Stockholm, Sweden",
    duration: "90 minutes",
    latitude: 59.3280233,
    longitude: 18.0913964,
    price: "Free admission for ages 18 and under. Standard Adult ticket starting from SEK 190.",
    photo: "https://www.city-guide-stockholm.com/_bibli/articlesPage/32/images/1-vasa-lesley-williamson-1-7.jpg?v=ficheArticle&width=416&height=275&pixelRatio=2.6250",
    url: "https://www.vasamuseet.se/en",
    destination_id: stockholm.id
})

#nyc

activity31 = Activity.create({
    name: "The Metropolitan Museum of Art",
    description: "At New York City's most visited museum and attraction, you will experience over 5,000 years of art from around the world. The Met is for anyone as a source of inspiration, insight and understanding. You can learn, escape, play, dream, discover, connect.",
    address: "1000 5th Ave, New York City, NY 10028-0198",
    duration: "3 to 5 hours",
    latitude: 40.779434,
    longitude: -73.963402,
    price: "Standard ticket starting from $30.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/1200px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg",
    url: "https://www.metmuseum.org/",
    destination_id: nyc.id
})

#santorini

activity32 = Activity.create({
    name: "Santo Winery",
    description: "This state-of-the-art facility in Greece houses a modern winery, a tomato processing factory, and a wine tourism center. For the full experience, enjoy a guided winery tour and cellar visit before sitting down for the star of the show—local wines paired expertly with Mediterranean dishes featuring locally farmed produce.",
    address: "Pyrgos Kallistis 847 00, Greece",
    duration: "45 minutes",
    latitude: 36.3876,
    longitude: 25.4367,
    price: "Prices vary by activity.",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/40/75/santo-winery.jpg?w=1200&h=1200&s=1",
    url: "https://santowines.gr/",
    destination_id: santorini.id
})

#machu picchu

activity33 = Activity.create({
    name: "Intihuatana",
    description: "The best-known monolithic sculpture in Machu Picchu and the most impressive due to its purpose. It is a large solar clock that, through its shadows, was used as an astronomical calendar to measure time and define the beginning and end of the seasons of the year.",
    address: "parque arqueológico de Tipón, Acceso a Tipon, 08205, Peru",
    duration: "2 hours",
    latitude: -13.163133,
    longitude: -72.54563,
    price: "Bus tickets are $32 and the bus will take you from the town of Aguas Calientes to the Machu Picchu entrance. Guided tours starting from $60.",
    photo: "https://www.machupicchu.org/wp-content/uploads/top-destinations-machu-picchu.jpg",
    url: "https://www.ticketmachupicchu.com/intihuatana-machu-picchu/",
    destination_id: machu_picchu.id
})

#berlin

activity34 = Activity.create({
    name: "Reichstag Building",
    description: "Situated just north of the Brandenburg Gate, this building houses the German Parliament and was the seat of the Weimar Republic government until it was seized by the Nazis in 1933.",
    address: "Platz der Republik 1, 11011 Berlin, Germany",
    duration: "2 hours",
    latitude: 52.518623,
    longitude: 13.376198,
    price: "Admission is free; advance registration required.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Reichstag_Dome_2019.jpg",
    url: "https://www.bundestag.de/en/visittheBundestag/dome/registration-245686",
    destination_id: berlin.id
})

#zurich

activity35 = Activity.create({
    name: "Kunsthaus Zürich",
    description: "This fantastic art museum displays Western works since the 1600s and has an especially impressive selection of modern art.",
    address: "Heimplatz 1/5, 8001 Zürich, Switzerland",
    latitude: 47.370160,
    longitude: 8.548450,
    price: "Tickets starting from CHF 23. Wednesdays free admission to the collection (except to exhibitions) for all visitors. Reduced evening admission, Thursdays, 6 PM - 8 PM: CHF 10 admission to the collection and exhibitions.",
    photo: "https://artnexus.com:3000/uploads/2020-04-21T01:01:10.351ZKunsthaus%20Zu%CC%88rich%20expo%202.jpeg",
    destination_id: zurich.id
})

#marrakesh

activity36 = Activity.create({
    name: "Jardin Majorelle",
    description: "The Jardin Majorelle is one of the most enchanting and mysterious gardens in Morocco. Created over the course of forty years, it is enclosed by outer walls, and consists of a labyrinth of crisscrossing alleyways on different levels and boldly-coloured buildings that blend both Art Deco and Moorish influences. The French painter Jacques Majorelle conceived of this large and luxuriant garden as a sanctuary and botanical 'laboratory'. In 1922, he began planting it with exotic botanical specimens from the far corners of the world.",
    address: "Rue Yves St Laurent, Marrakech 40090, Morocco",
    duration: "1 to 2 hours",
    latitude: 31.641758,
    longitude: -8.002498,
    price: "Admission Fee starting from 150 Dhs.",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4f/7f/06/20190418-125956-largejpg.jpg?w=1200&h=1200&s=1",
    url: "https://www.kunsthaus.ch/",
    destination_id: marrakesh.id
})

#copenhagen

activity37 = Activity.create({
    name: "Tivoli Gardens",
    description: "More than two dozen rides await you at this world-class amusement park that inspired Walt Disney. Tivoli Gardens, in the very center of Copenhagen, is well-known for its old-world charm, lush gardens, and rides for all ages. You'll get to watch live concerts and light shows, as well as see the fireworks that take place every week. When hungry, choose between the wide selection of restaurants and food stands, or have a picnic at the gardens.",
    address: "VVesterbrogade 3, 1630 København V, Denmark",
    duration: "3 to 4 hours",
    latitude: 55.6708,
    longitude: 12.5677,
    price: "Entrance tickets for Tivoli starting from 155 DKK.",
    photo: "https://images.squarespace-cdn.com/content/v1/56b2203262cd9449d3d390ca/1586158117781-Z3OBCYCMX2BFL9Z5BDYU/TivoliGardens-20_0406-%28Cover%29.jpg?format=2500w",
    url: "https://www.tivoli.dk/en",
    destination_id: copenhagen.id
})


#restaurant

#paris

restaurant1 = Restaurant.create({
    name: "Substance",
    cuisine: "French",
    description: "Innovative cuisine, tasting menus & wine pairings served amid contemporary decor.",
    average_price: 2,
    phone_number: 33147200890,
    rating: 5,
    address: "18 rue de Chaillot, 75116 Paris France",
    latitude: 48.8673,
    longitude: 2.2977,
    photo1: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/5647bc2b-cb55-484d-baba-4895e7dba7b2/fab22bad-099a-435d-ad7a-f476b149f896.jpg",
    photo2: "https://media.cntraveler.com/photos/61017c135f23949711c80a24/16:9/w_2560%2Cc_limit/Substance%2C%2520Paris_%2520(1).jpeg",
    photo3: "https://www.parisupdate.com/wp-content/uploads/2019/04/ParisUpdate-Substance-restaurant-dessert-1024x768.jpg",
    url: "https://www.substance.paris/reservation/",
    destination_id: paris.id
})

restaurant2 = Restaurant.create({
    name: "Clover Grill",
    cuisine: "American",
    description: "Polished restaurant specializing in ember-cooked & grilled meats, plus classic cocktails & dessert.",
    average_price: 4,
    rating: 4,
    address: "6 rue Bailleul, 75001 Paris France",
    phone_number: 33140415959,
    latitude: 48.86109,
    longitude: 2.34200,
    photo1: "https://media.cntraveler.com/photos/610180bb5f23949711c80a2a/16:9/w_2560%2Cc_limit/Clover%2520Grill%2C%2520Paris_Clover-Grill-Salle-2-%25C2%25A9Nicolas-Lobbestael.jpg",
    photo2: "https://media.cntraveler.com/photos/610180bbc28e94c67dd525ff/16:9/w_2560,c_limit/Clover%20Grill,%20Paris_Co%CC%82te%20de%20boeuf%203%20%C2%A9Nicolas%20Lobbestael.jpg",
    photo3: "https://images.xceed.me/restaurants/gallery/clover-grill-restaurant-paris-xceed-da5b-4dd0.png",
    url: "https://module.lafourchette.com/fr_FR/module/282537-7f18e#/1754615/pdh",
    destination_id: paris.id
})

restaurant3 = Restaurant.create({
    name: "Épicure",
    cuisine: "French",
    description: "Upscale hotel restaurant overlooking a courtyard garden & specializing in French fine dining & wine.",
    average_price: 3,
    phone_number: 33153434340,
    rating: 5,
    address: "112 Rue Du Faubourg Saint-Honore Le Bristol Paris, 75008 Paris France",
    latitude: 48.87190,
    longitude: 2.31483,
    photo1: "https://media.cntraveler.com/photos/5cdb3297f2177802c6279622/16:9/w_2560,c_limit/Epicure-Le-Bristol.jpg",
    photo2: "https://tinyurbankitchen.com/wp-content/uploads/2022/11/20221119-dsc06969.jpg",
    photo3: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/8c5df4b2-34be-4eba-bc36-e08e73665325/bbd1b599-6b28-45d6-8140-03053bf06cc2.jpg",
    url: "https://www.oetkercollection.com/fr/hotels/le-bristol-paris/restaurants-et-bar/epicure/?utm_source=google&utm_medium=local&utm_campaign=Epicure",
    destination_id: paris.id
})

restaurant4 = Restaurant.create({
    name: "Allard",
    cuisine: "French",
    description: "Old-school bistro offering elevated, traditional French dishes & wines in a warm atmosphere.",
    average_price: 2,
    phone_number: 33143264823,
    rating: 4,
    address: "41 Rue Saint-André des Arts, 75006 Paris, France",
    latitude: 48.85401,
    longitude: 2.34101,
    photo1: "https://www.restaurant-allard.fr/wp-content/uploads/2022/04/ALLARD_08-09-2021@pmonetta-1028-1-1-1.png",
    photo2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqZJvCLP0ZAf_RjSNJNmSCSyIo7gXWAR6kg&usqp=CAU",
    photo3: "https://www.restaurant-allard.fr/wp-content/uploads/2022/06/ALLARD_10-04-15%E2%94%AC%C2%AEpierremonetta-11-1-780x574.jpg",
    url: "https://module.lafourchette.com/fr_FR/module/408835-c7bdb",
    destination_id: paris.id
})

restaurant5 = Restaurant.create({
    name: "La Tour d'Argent",
    cuisine: "French",
    description: "Centuries-old quayside emblem of upscale French cuisine famed for its house special, pressed duck.",
    average_price: 3,
    rating: 5,
    phone_number: 33143541747,
    address: "15 Quai de la Tournelle, 75005 Paris, France",
    latitude: 48.84996,
    longitude: 2.35484,
    photo1: "https://prod-upp-image-read.ft.com/c957e6f4-f565-11e7-88f7-5465a6ce1a00",
    photo2: "data:image/jpeg;base64,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",
    photo3: "https://www.alexanderlobrano.com/wp-content/uploads/2016/08/La-Tour-dArgent-duckling.jpg",
    url: "https://tourdargent.com/en/",
    destination_id: paris.id
})

restaurant6 = Restaurant.create({
    name: "Benoit Paris",
    cuisine: "French",
    description: "Casseroles, snails & desserts like profiteroles in a venerable bistro with brass details & mirrors.",
    average_price: 2,
    phone_number: 33142722576,
    rating: 4,
    address: "20 Rue Saint-Martin, 75004 Paris, France",
    latitude: 48.85856,
    longitude: 2.35004,
    photo1: "https://bonjourparis.com/wp-content/uploads/2015/05/Benoit.jpg",
    photo2: "https://www.benoit-paris.com/wp-content/uploads/2023/01/BC_Turbot-dore_03-780x574.jpg",
    photo3: "https://www.benoit-paris.com/wp-content/uploads/2022/07/BENOIT-salon-privec-C-2-1560x758.jpg",
    url: "https://module.lafourchette.com/en_GB/module/408827-91dfe",
    destination_id: paris.id
})

#florence
restaurant7 = Restaurant.create({
    name: "Trattoria 13 Gobbi",
    cuisine: "Italian",
    description: "Trattoria 13 Gobbi wants to tell you the essence of Florence in every dish. The menu combines the culinary tradition of our country with some more current dishes.",
    average_price: 2,
    phone_number: 39055284015,
    rating: 4,
    address: "Via del Porcellana, 9R, 50123 Firenze FI, Italy",
    latitude: 43.77298,
    longitude: 11.24656,
    photo1:"https://cdn.tasteatlas.com/images/restaurants/1c8936fd7ec2415b8897b29ed632e8da.jpg?w=600",
    photo2: "https://flawless.life/wp-content/uploads/2018/04/trattoria-13-gobbi-rigatoni.jpg",
    photo3: "https://www.trattoria13gobbi.com/wp-content/uploads/2022/10/13-gobbi-ambiente.jpg", 
    url: "https://www.trattoria13gobbi.com/",
    destination_id: florence.id
})

#london

restaurant8 = Restaurant.create({
    name: "The Clove Club",
    cuisine: "European",
    description: "The Clove Club is a relaxed fine dining restaurant set in the historic rooms of the Grade II-listed shoreditch town hall, london. We serve a seasonal tasting menu featuring modern, elegant dishes rooted in technique but stripped back to their essential elements. We place a great emphasis on sourcing the best produce the british isles has to offer.",
    average_price: 4,
    phone_number: 442077296496,
    rating: 4,
    address: "The Clove Club, Shoreditch Town Hall, 380 Old Street, London EC2",
    latitude: 43.77298,
    longitude: 11.24656,
    photo1:"https://cdn.vox-cdn.com/thumbor/uioLVu8uqaJJyc7iefdK-QBvpKk=/0x0:3550x2367/1200x800/filters:focal(1491x900:2059x1468)/cdn.vox-cdn.com/uploads/chorus_image/image/67225109/Eater_day5_The_Clove_Club_0208.0.jpg",
    photo2: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/11/16/10/clove-club.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
    photo3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Fcity-guides%2Flondon%2Fvenue%2Fclove-club&psig=AOvVaw2PiRFzZLoq5CzVKOTnsDR-&ust=1690042736116000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCOin0v-ZoIADFQAAAAAdAAAAABAD", 
    url: "http://thecloveclub.com/",
    destination_id: london.id
})

#hotel

#paris

hotel1 = Hotel.create({
    name: "Hotel Malte - Astotel",
    description: "Located in the 2nd district next to the Stock Exchange, the Louvre and Place des Victoires, Hotel Malta provides a superb location for a memorable stay. Whether you want to shop in the heart of the department store neighbourhood or visit one of the main business centres of Paris, Malta Hotel is the place to be. Elegantly concealed behind a facade dating from the seventeenth century, let yourself be seduced by our garden patio, a pleasurable experience on sunny days, our cozy breakfast room, and the relaxing atmosphere of our lobby. After the warm welcome by our professional team, always at your disposal, you will appreciate the comfort of our rooms decorated in an elegant and timeless design. A convenient location , caring personnel and warm atmosphere make Malta Hotel the perfect place for your stay in the capital, whether traveling with family or on your own.",
    average_price: 2,
    phone_number: 33144589494,
    rating: 4,
    address: "63 rue de Richelieu, 75002 Paris France",
    latitude: 48.86778,
    longitude: 2.33779,
    photo1: "https://malteastotel.parishotelsfinder.com/data/Photos/OriginalPhoto/12738/1273830/1273830424/malte-astotel-paris-photo-4.JPEG",
    photo2: "https://astotel.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/17/2018/02/13112652/MA_photo3.jpg",
    photo3: "https://i.travelapi.com/lodging/1000000/60000/53600/53587/8c449261_z.jpg",
    url: "https://en.astotel.com/hotel/malte-opera-en/overview",
    destination_id: paris.id
})

hotel2 = Hotel.create({
    name: "La Maison Favart",
    description: "La Maison Favart is a 4-star Boutique Hotel in the heart of Paris that embodies the discreet luxury of tailor-made attention and a unique intimate universe.",
    average_price: 3,
    phone_number: 33142975983,
    rating: 4,
    address: "5 Rue de Marivaux, 75002 Paris, France",
    latitude: 48.87094,
    longitude: 2.33741,
    photo1: "https://global-uploads.webflow.com/636a47dae5b989c7c2753720/6372b020e0bc15aae8180d17_7-lamaisonfavart-hotel-paris-lobby-full.jpg",
    photo2: "https://www.letsgomylove.com/wp-content/uploads/2022/01/maison-favart-paris-2-1009x1024.jpg",
    photo3: "https://walkcatwalk.com/wp-content/uploads/2022/11/HI9A7606-low.jpg",
    url: "https://www.lamaisonfavart.com/en/",
    destination_id: paris.id
})

#trip

trip1 = Trip.create({
    origin_airport: "JFK",
    destination_airport: "CDG",
    outbound_flight: DateTime.parse("2023-06-25 16:25:00"),
    return_flight: DateTime.parse("2023-06-20 07:30:00"),
    outbound_flight_number: "AA799",
    return_flight_number: "AA345",
    confirmation_number: "123456789",
    user_id: user1.id,
    destination_id: paris.id
})

trip2 = Trip.create({
    origin_airport: "JFK",
    destination_airport: "CDG",
    outbound_flight: DateTime.parse("2023-06-25 16:25:00"),
    return_flight: DateTime.parse("2023-06-20 07:30:00"),
    outbound_flight_number: "AA7991",
    return_flight_number: "AA345",
    confirmation_number: "123456789",
    user_id: user2.id,
    destination_id: paris.id
})

trip3 = Trip.create({
    origin_airport: "JFK",
    destination_airport: "CDG",
    outbound_flight: DateTime.parse("2023-06-25 16:25:00"),
    return_flight: DateTime.parse("2023-06-20 07:30:00"),
    outbound_flight_number: "AA791",
    return_flight_number: "AA345",
    confirmation_number: "123456789",
    user_id: user3.id,
    destination_id: paris.id
})

#itinerary day

itinerary1 = ItineraryDay.create({
    date: Date.parse("2023-06-20"),
    trip_id: trip1.id
})

itinerary2 = ItineraryDay.create({
    date: Date.parse("2023-06-21"),
    trip_id: trip2.id
})

itinerary3 = ItineraryDay.create({
    date: Date.parse("2023-06-22"),
    trip_id: trip3.id
})

itinerary4 = ItineraryDay.create({
    date: Date.parse("2023-06-23"),
    trip_id: trip1.id
})

itinerary5 = ItineraryDay.create({
    date: Date.parse("2023-06-24"),
    trip_id: trip2.id
})

itinerary6 = ItineraryDay.create({
    date: Date.parse("2023-06-25"),
    trip_id: trip3.id
})

#hotel itinerary time

hotel_itinerary_time1 = HotelItineraryTime.create({
    time: DateTime.parse("2023-06-20 06:00:00"),
    hotel_id: hotel1.id,
    itinerary_day_id: itinerary1.id
})

hotel_itinerary_time2 = HotelItineraryTime.create({
    time: DateTime.parse("2023-06-21 07:00:00"),
    hotel_id: hotel2.id,
    itinerary_day_id: itinerary2.id
})

hotel_itinerary_time3 = HotelItineraryTime.create({
    time: DateTime.parse("2023-06-22 08:00:00"),
    hotel_id: hotel2.id,
    itinerary_day_id: itinerary3.id
})

#restaurant itinerary time

restaurant_itinerary_time1 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-20 09:00:00"),
    restaurant_id: restaurant1.id,
    itinerary_day_id: itinerary1.id
})

restaurant_itinerary_time2 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-21 10:00:00"),
    restaurant_id: restaurant2.id,
    itinerary_day_id: itinerary2.id
})

restaurant_itinerary_time3 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-22 11:00:00"),
    restaurant_id: restaurant3.id,
    itinerary_day_id: itinerary3.id
})

restaurant_itinerary_time4 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-23 12:00:00"),
    restaurant_id: restaurant4.id,
    itinerary_day_id: itinerary4.id
})

restaurant_itinerary_time5 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-24 13:00:00"),
    restaurant_id: restaurant5.id,
    itinerary_day_id: itinerary5.id
})

restaurant_itinerary_time6 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-25 14:00:00"),
    restaurant_id: restaurant6.id,
    itinerary_day_id: itinerary6.id
})


#activity itinerary time

activity_itinerary_time1 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-20 16:00:00"),
    activity_id: activity1.id,
    itinerary_day_id: itinerary1.id
})

activity_itinerary_time2 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-22 17:00:00"),
    activity_id: activity2.id,
    itinerary_day_id: itinerary3.id
})

activity_itinerary_time3 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-20 20:00:00"),
    activity_id: activity3.id,
    itinerary_day_id: itinerary1.id
})

activity_itinerary_time4 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-21 21:00:00"),
    activity_id: activity4.id,
    itinerary_day_id: itinerary2.id
})

activity_itinerary_time5 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-23 22:00:00"),
    activity_id: activity2.id,
    itinerary_day_id: itinerary4.id
})

activity_itinerary_time6 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-21 23:00:00"),
    activity_id: activity3.id,
    itinerary_day_id: itinerary2.id
})

activity_itinerary_time7 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-22 08:30:00"),
    activity_id: activity1.id,
    itinerary_day_id: itinerary3.id
})

#packing item

item1 = PackingListItem.create({
    item: "underwear",
    quantity: 12,
    packed: true,
    trip_id: trip1.id
})

item2 = PackingListItem.create({
    item: "underwear",
    quantity: 12,
    packed: true,
    trip_id: trip2.id
})

item3 = PackingListItem.create({
    item: "underwear",
    quantity: 12,
    packed: true,
    trip_id: trip3.id
})