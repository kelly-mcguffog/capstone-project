# response = RestClient.get("https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=london", 
#     headers: {
#         'X-RapidAPI-Key': "#{ENV["TRAVEL_ADVISOR_API_KEY"]}",
#         'X-RapidAPI-Host': "travel-advisor.p.rapidapi.com",
#     }
# )
# destinations_array = JSON.parse(response)

# destinations_array.each do |destination|
#     binding.pry
# end



#user

user1 = User.create({
    first_name: "Olivia",
    last_name: "Hammer",
    email: "olivia.hammer@gmail.com",
    username: "olivia.hammer",
    password_digest: "westport123",
    tsa_precheck: 123456789
})

#Destinations

paris = Destination.create({
    country: "France",
    city: "Paris",
    currency: "Euro",
    language: "French",
    time_zone: "Central European Time (CET)",
    dial_code: "+33",
    photo: "https://assets.cntraveller.in/photos/62752c1974266e7300892c46/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg"
})

florence = Destination.create({
    country: "Italy",
    city: "Florence",
    currency: "Euro",
    language: "Italian",
    time_zone: "Central European Time (CET)",
    dial_code: "+39",
    photo: "https://tourismmedia.italia.it/is/image/mitur/20210401173629-firenze-toscana-gettyimages-1145040590-2?wid=1600&hei=900&fit=constrain,1&fmt=webp"
})

london = Destination.create({
    country: "England",
    city: "London",
    currency: "Pound Sterling (GBP)",
    language: "English",
    time_zone: "Greenwich Mean Time (GMT)",
    dial_code: "+44",
    photo: "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg"
})

tokyo = Destination.create({
    country: "Japan",
    city: "Tokyo",
    currency: "Yen",
    language: "Japanese",
    time_zone: "Japan Standard Time (JST)",
    dial_code: "+03",
    photo: "https://media.gq-magazine.co.uk/photos/5d13ad779a22c269d69496c8/master/w_1920,h_1280,c_limit/tokyo-hp-gq-19oct18_istock_b.jpg"
})

australia = Destination.create({
    country: "Australia",
    city: "Sydney",
    currency: "Australian Dollar (AUD)",
    language: "English",
    time_zone:"Australian Eastern Standard Time (AEST)",
    dial_code: "+61",
    photo: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg"
})

tel_aviv = Destination.create({
    country: "Israel",
    city: "Tel Aviv",
    currency: "Israeli New Shekel (ILS)",
    language: "Hebrew & Arabic",
    time_zone: "Israel Standard Time (IST)",
    dial_code: "+972",
    photo: "https://www.frommers.com/system/media_items/attachments/000/869/611/s980/Tel_Aviv_Skyline__Israel.jpg?1665751239"
})

prague = Destination.create({
    country: "Czech Republic",
    city: "Prague",
    currency: "Czech Crown (Kč)",
    language: "Czech",
    time_zone: "Central European Time (CET)",
    dial_code: "+420",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg"
})

dublin = Destination.create({
    country: "Ireland",
    city: "Dublin",
    currency: "Euro",
    language: "English & Irish Gaelic",
    time_zone: "Summer: Irish Standard Time (IST) | Winter: Greenwich Mean Time (GMT)",
    dial_code: "+353",
    photo: "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555940916/production/city/hero_image_32_1555940916.jpg"
})

barcelona = Destination.create({
    country: "Spain",
    city: "Barcelona",
    currency: "Euro",
    language: "Catalan & Spanish",
    time_zone: "Central European Time (CET)",
    dial_code: "+93",
    photo: "https://media.cntraveller.com/photos/62d14e029bbb08746e6fd952/3:2/w_6000,h_4000,c_limit/barcelonaGettyImages-1386922276.jpeg"
})

cape_town = Destination.create({
    country: "South Africa",
    city: "Cape Town",
    currency: "South African Rand",
    language: "Afrikaans, Xhosa, & English",
    time_zone: "South Africa Standard Time (SAST)",
    dial_code: "+27",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1"
})

amsterdam = Destination.create({
    country: "Netherlands",
    city: "Amsterdam",
    currency: "Euro",
    language: "Dutch",
    time_zone: "Central European Time (CET)",
    dial_code: "+31",
    photo: "https://www.travelandleisure.com/thmb/_3nQ1ivxrnTKVphdp9ZYvukADKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amsterdam-nl-AMSTERDAMTG0521-6d2bfaac29704667a950bcf219680640.jpg"
})

copenhagen = Destination.create({
    country: "Denmark",
    city: "Copenhagen",
    currency: "Danish Kroner (DKK)",
    language: "Danish",
    time_zone: "Central European Time (CET)",
    dial_code: "+45",
    photo: "https://cdn.britannica.com/47/83447-050-42342CB1/Nyhavn-Canal-Copenhagen.jpg"
})

rome = Destination.create({
    country: "Italy",
    city: "Rome",
    currency: "Euro",
    language: "Italian",
    time_zone: "Central European Time (CET)",
    dial_code: "+39",
    photo: "https://lp-cms-production.imgix.net/2021-07/GettyRF_582021521.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800"
})

stockholm = Destination.create({
    country: "Sweden",
    city: "Stockholm",
    currency: "Swedish Krona",
    language: "Swedish",
    time_zone: "Central European Time (CET)",
    dial_code: "+45",
    photo: "https://blog.zoom.us/wp-content/uploads/2023/01/GettyImages-1314099040-1820x1214.jpg"
})

nyc = Destination.create({
    country: "United States of America",
    city: "New York City",
    currency: "United States Dollar (USD)",
    language: "English",
    time_zone: "Eastern Time (ET)",
    dial_code: "+1",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"
})

santorini = Destination.create({
    country: "Greece",
    city: "Santorini",
    currency: "Euro",
    language: "Greek",
    time_zone: "Eastern European Time (EET)",
    dial_code: "+30",
    photo: "https://media.cntraveller.com/photos/611be9bb69410e829d87e0c2/16:9/w_2560%2Cc_limit/Blue-domed-church-along-caldera-edge-in-Oia-Santorini-greece-conde-nast-traveller-11aug17-iStock.jpg"
})

machu_picchu = Destination.create({
    country: "Peru",
    city: "Machu Picchu",
    currency: "Nuevo Sol (S/)",
    language: "Quechua",
    time_zone: "Peru Standard Time",
    dial_code: "+51",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg"
})

berlin = Destination.create({
    country: "Germany",
    city: "Berlin",
    currency: "Euros",
    language: "German",
    time_zone: "Central European Time (CET)",
    dial_code: "+49",
    photo: "https://a.storyblok.com/f/58806/1164x784/20ee327044/berlin_city_01_skyline_unsplash.jpeg"
})

zurich = Destination.create({
    country: "Switzerland",
    city: "Zürich",
    currency: "Swiss Franc",
    language: "German",
    time_zone: "Central European Time (CET)",
    dial_code: "+41",
    photo: "https://static.euronews.com/articles/stories/07/19/89/40/1000x563_cmsv2_a235329b-754b-571a-ac10-b4cd624cc798-7198940.jpg"
})

marrakesh = Destination.create({
    country: "Morocco",
    city: "Marrakesh",
    currency: "Moroccan Dirham",
    language: "Arabic",
    time_zone: "Western European Time (WET)",
    dial_code: "+212",
    photo: "https://loveincstatic.blob.core.windows.net/loveexploring/2020/Marrakech-full-guide/1Jemaa-el-Fna.jpg"
})

#Activities

#Paris

activity1 = Activity.create({
    name: "Musée d'Orsay",
    description: "Musée d'Orsay in Paris is a must-visit for art lovers and travelers alike. It's famous for its impressive collection of Impressionist and post-Impressionist art, making it one of the largest in the world. Housed in a stunning former railway station on the Seine, the museum is just as beautiful on the outside as it is on the inside. Don't miss the famous clock face, which is part of the museum's exhibition.",
    address: "1 Rue De La Légion d'Honneur, 75007 Paris France",
    latitude: 48.859962,
    longitude: 2.326561,
    price: "Free admission for ages 18 years and younger. Full price tickets are €16.",
    photo: "https://media.timeout.com/images/105976901/image.jpg",
    destination_id: paris.id
})

activity2 = Activity.create({
    name: "Louvre Museum",
    description: "As one of the largest, oldest, and grandest museums in the world, the Louvre hosts a treasure trove of artworks spanning diverse cultures and periods of history. Marvel at the museum's greatest hits: the Mona Lisa, the Venus de Milo, Winged Victory, and stunning collections of prized paintings and Greek and Roman statues. It's not possible to see all of the museum in one visit, so be inspired to return for your next trip to Paris.",
    address: "99 Rue de Rivoli, 75001 Paris France",
    latitude: 48.860294,
    longitude: 2.338629,
    price: "Free admission for ages 18 years and younger. Full price tickets are €16.",
    photo: "https://cdn.getyourguide.com/img/tour/878fbf962b3a3596.jpeg/98.jpg",
    destination_id: paris.id
})

activity3 = Activity.create({
    name: "Guided tour up to the 2nd floor of the Eiffel Tower",
    description: "Discover the world's most popular attraction, the Eiffel Tower. Ascend to the second level for a breath taking panoramic view of the city. Before descending, indulge in the restaurant located on the first floor.",
    address: "5 Avenue, 75007 Paris France",
    latitude: 48.858093,
    longitude: 2.294694,
    price: "Adult full price tickets are €38.10.",
    photo: "https://images.prismic.io/mystique/4bb367e3-0cd2-43e8-af4f-843c34140596_ea04ba5d0f9a6571145de80ede53a572-The+Esplanade+eiffel+tower.jpeg?auto=compress,format",
    destination_id: paris.id
})
activity4 = Activity.create({
    name: "Luxembourg Gardens",
    description: "Luxembourg Gardens is a charming oasis in the heart of Paris, loved by both locals and travelers alike. With 55 acres of manicured gardens, it's the perfect place to unwind and soak up the Parisian atmosphere. You can admire the beautifully arranged flower beds, towering trees, and the grand Luxembourg Palace which overlooks the gardens.",
    address: "Rue de Médicis Rue de Vaugirard, 75006 Paris France",
    latitude: 48.846943,
    longitude: 2.337222,
    price:"Free access to garden for all public.",
    photo: "https://www.exp1.com/blog/wp-content/uploads/sites/7/2020/06/Luxembourg-Gardens-with-cherubs-holding-flower-pots-in-foreground-and-palace-in-the-background-1024x682.jpg",
    destination_id: paris.id
})

#Florence

activity5 = Activity.create({
    name: "Galleria dell'Accademia",
    description: "Europe's first school of drawing, this museum of art is chiefly famous for its several sculptures by Michelangelo, notably his David, in addition to an extensive collection of 15th- and 16th-century paintings.",
    address: "Via Ricasoli, 58/60, 50122, Florence Italy",
    latitude: 45.43111,
    longitude: 12.32806,
    price: "Free admission for ages under 18 years old. Reduced rate €3 for young people 18-25 years old. Full price tickets are €16.",
    photo: "https://www.galleriaaccademiafirenze.it/wp-content/uploads/2022/03/Sala-del-Colosso.jpg",
    destination_id: florence.id
})

activity6 = Activity.create({
    name: "Florence Duomo Express Guided Tour",
    description: "The cathedral's iconic dome was an architectural feat designed by famed Renaissance architect Brunelleschi. Climb 463 steps to the cupola for panoramic views of Florence.",
    address: "Via della Canonica, 1 Piazza del Duomo, 50122, Florence Italy",
    latitude: 43.773251,
    longitude: 11.255474,
    price: "Free admission for ages 18 years and younger. Full price tickets are €17.",
    photo: "https://www.ourescapeclause.com/wp-content/uploads/2022/04/shutterstock_1469046200-scaled.jpg",
    destination_id: florence.id
})

activity7 = Activity.create({
    name: "Guided tour up to the 2nd floor of the Eiffel Tower",
    description: "Discover the world's most popular attraction, the Eiffel Tower. Ascend to the second level for a breath taking panoramic view of the city. Before descending, indulge in the restaurant located on the first floor.",
    address: "5 Avenue, 75007 Paris France",
    latitude: 48.858093,
    longitude: 2.294694,
    price: "Adult full price tickets are €38.10.",
    photo: "https://images.prismic.io/mystique/4bb367e3-0cd2-43e8-af4f-843c34140596_ea04ba5d0f9a6571145de80ede53a572-The+Esplanade+eiffel+tower.jpeg?auto=compress,format",
    destination_id: paris.id
})
activity8 = Activity.create({
    name: "Luxembourg Gardens",
    description: "Luxembourg Gardens is a charming oasis in the heart of Paris, loved by both locals and travelers alike. With 55 acres of manicured gardens, it's the perfect place to unwind and soak up the Parisian atmosphere. You can admire the beautifully arranged flower beds, towering trees, and the grand Luxembourg Palace which overlooks the gardens.",
    address: "Rue de Médicis Rue de Vaugirard, 75006 Paris France",
    latitude: 48.846943,
    longitude: 2.337222,
    price:"Free access to garden for all public.",
    photo: "https://www.exp1.com/blog/wp-content/uploads/sites/7/2020/06/Luxembourg-Gardens-with-cherubs-holding-flower-pots-in-foreground-and-palace-in-the-background-1024x682.jpg",
    destination_id: paris.id
})

#London

activity9 = Activity.create({
    name: "TATE Modern",
    description: "Explore modern and contemporary art from around the world. Tate Modern has over a hundred years of art, from modernism in the early 1900s, to exciting works created today. This includes paintings, sculptures, and more made by artists all over the world such as Pablo Picasso, Salvador Dali, Emily Kame Kngwarreye, and Jenny Holzer. Experience Tate's iconic Turbine Hall. In the Natalie Bell Building you can see how artists create new ideas. In the Blavatnik Building you can explore the underground Tanks, dedicated to performances, installations and video works.",
    address: "Bankside, London SE1 9TG",
    latitude: 51.507595,
    longitude: -0.099356,
    price: "Free admission for all public. Booking a ticket is recommended for exhibitions but some tickets may be available at the door.",
    photo: "https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2019/03/18102631/tate-modern-best-visitor-attraction.jpg",
    destination_id: london.id
})

activity10 = Activity.create({
    name: "London Eye",
    description: "Located along the Thames River, this iconic observation wheel offers unobstructed views from its glass pods. During the 30-minute ride, you'll be able to see London's well-known buildings like Buckingham Palace, Big Ben, and The Shard. On a clear day, you can see up to 25 miles from the top—where Windsor Castle is. Sunset views here are otherworldly, but nightfall views of the twinkling lights are great too.",
    address: "Riverside Building, County Hall, London SE1 7PB, United Kingdom",
    latitude: 51.503399,
    longitude: -0.119519,
    price: "Standard entry price starting from £38.",
    photo: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ikknf4oeysojhyv2z0jk/LondonEyeTickets-FastTrackTicketsAvailable-KlookUnitedKingdom.jpg",
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
    latitude: 51.536388,
    longitude: -0.140556,
    price: "Camden Market is open to the public. Shops and food prices range.",
    photo: "https://www.selina.com/blog/wp-content/uploads/2021/07/javier-martinez-8W8k7z-F3Kk-unsplash-1.jpg",
    destination_id: london.id
})

#tokyo

activity13 = Activity.create({
    name: "Shinjuku Gyoen National Garden",
    description: "Shinjuku Gyoen was constructed on the site of a private mansion belonging to Lord Naito, a 'daimyo' (feudal lord) of the Edo era. Completed in 1906 as an imperial garden, it was re-designated as a national garden after the Second World War and opened to the public. With 58.3 ha(144 acres) in size and a circumference of 3.5 km, it blends three distinct styles, Formal Garden, Landscape Garden and Japanese Traditional Garden, and is considered to be one of the most important gardens from the Meiji era.",
    address: "11 Naito-machi, Shinjuku 160-0014 Tokyo Prefecture",
    latitude: 35.685272,
    longitude: 139.709442,
    price: "Free admission for children ages 15 and under. General admissions for adults starting from 	500yen.",
    photo: "https://www.japan-guide.com/g18/3034_001_01.jpg",
    destination_id: tokyo.id
})

activity14 = Activity.create({
    name: "Senso-ji Temple",
    description: "According to legend, two brothers kept trying to return a statue of Kannon, the goddess of mercy, to the Sumida River only to have it returned to them the next day. This temple located in Tokyo's Asakusa district was built to honor her.",
    address: "2-3-1, Asakusa, Taito 111-0032 Tokyo Prefecture",
    latitude: 35.714661,
    longitude: 139.796783,
    price: "Free admission for all public.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Cloudy_Sens%C5%8D-ji.jpg",
    destination_id: tokyo.id
})

activity15 = Activity.create({
    name: "Meiji Jingu Shrine",
    description: "Two, large gates frame the entrance to this Shinto shrine that was dedicated to Emperor and Empress Meiji. Completed in 1920, repairs were required after the shrine was damaged during World War II.",
    address: "1-1 Yoyogi-Kamizono-cho, Shibuya 151-8857 Tokyo Prefecture",
    latitude: 35.675526,
    longitude: 139.698578,
    price: "Free admission for all public.",
    photo: "https://loving-tokyo.com/en/wp-content/uploads/2020/02/meiji-jingu-shrine-main-complex-200210134821003.jpg",
    destination_id: tokyo.id
})

activity16 = Activity.create({
    name: "Tokyo National Museum",
    description: "This famous museum houses the largest collection of Japanese artifacts and artworks in the world. With over 100,000 pieces and room to display only 4,000, exhibits are rotated constantly.",
    address: "13-9, Uenokoen, Taito 110-0007 Tokyo Prefecture",
    latitude: 35.7188,
    longitude: 139.7765,
    price: "Free admission for High/Junior High/ Elementary School Students and persons under 18 and over 70. 500 yen for University Students. 1,000 yen for adults.",
    photo: "https://www.japan-guide.com/g18/3054_tokyo_01.jpg",
    destination_id: tokyo.id
})

#australia

activity17 = Activity.create({
    name: "Sydney Opera House",
    description: "One of the most iconic buildings in the world - the Sydney Opera House is an architectural masterpiece and vibrant performance space. It's a place where the past shapes the future, where conventions are challenged and cultures are celebrated. Step inside and discover the stories that make the Opera House so inspiring. Whether you're a local or a tourist, a first-timer or an aficionado, the Sydney Opera House has something for everyone.",
    address: "Bennelong Point, Sydney NSW 2000, Australia",
    latitude: -33.856159,
    longitude: 151.215256,
    price: "The Sydney Opera House's entry fee is usually INR 2,000 per person. The cost varies from performance to performance and is influenced by the runtime, the type of show, and the venue where the performance takes place.",
    photo: "https://images.strang-inc.com/wp-content/uploads/2019/04/01192706/Sydenyopera-1024x538-1.jpg",
    destination_id: australia.id
})

# activity18 = Activity.create({
#     name: 
#     description: 
#     address: 
#     latitude: 
#     longitude:
#     price: 
#     photo: 
#     destination_id: australia.id
# })

activity19 = Activity.create({
    name: "Royal Botanic Garden Sydney",
    description: "The Royal Botanic Garden Sydney is a major botanical Garden located in the heart of Sydney, New South Wales, Australia. Opened in 1816, the garden is the oldest scientific institution in Australia and one of the most important historic botanical institutions in the world.",
    address: "Mrs Macquaries Rd, Sydney, New South Wales 2000 Australia", 
    latitude: -33.864186,
    longitude: 151.216571,
    price: "Entry to the gardens is free.",
    photo: "https://s3.eu-west-2.amazonaws.com/tripspell/EXPERIENCE/royal-botanic-garden-sydney/description/0_high",
    destination_id: australia.id
})

activity20 = Activity.create({
    name: "Queen Victoria Building",
    description: "Visit for the beautiful architecture, stay for the shops. Window shop through the atrium's five levels for high fashion brands, enjoy coffee at the cafes, and listen to the Royal Clock strike.",
    address: "455 George St, Sydney, New South Wales 2000 Australia",
    latitude: -37.020100,
    longitude: 144.964600,
    price: "Tickets are free of charge.",
    photo: "https://www.overseasattractions.com/wp-content/uploads/2019/02/queen-victoria-building.jpg",
    destination_id: australia.id
})

#tel aviv

activity21 = Activity.create({
    name: "Carmel Market (Shuk Ha'Carmel)",
    description: "Tel Aviv's biggest and busiest marketplace is filled with colorful stalls and shouting vendors selling a variety of goods, from dried fruits and exotic spices to clothing and footwear.", 
    address: "HaCarmel St 35, Tel Aviv-Yafo, Israel",
    latitude: 32.0695,
    longitude: 34.7698,
    price: "Foods and shops vary in prices.",
    photo: "https://media.timeout.com/images/103477516/750/562/image.jpg",
    destination_id: tel_aviv.id
})

activity22 = Activity.create({
    name: "Joseph Bau House Museum",
    description: "'Joseph Bau House' is an authentic artist workshop that conveys to the visitor the amazing life story of Joseph Bau reflected in the wide range of his creativity, which includes movies, animation, paintings, graphics, literature and research of the Hebrew language - all spiced with special humor stemming from his optimistic view of life. Rebecca and Joseph Bau are the original couple whose wedding is shown in the movie 'Schindler's List'. Visits may be made only by appointment.",
    address: "9 Berdichevski St, Tel Aviv 6425808 Israel",
    latitude: 32.071230,
    longitude: 34.779910,
    price: "For booking and prices please call ahead.",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/57/df/af/joseph-bau-house.jpg?w=1200&h=-1&s=1",
    destination_id: tel_aviv.id
})

#prague

activity23 = Activity.create({
    name: "St. Vitus Cathedral",
    description: "Situated at the Prague Castle, St. Vitus Cathedral is the most important and largest church in Prague. The cathedral is the burial place of the former Czech kings and a home of the Czech Crown Jewels.",
    address: "III. Nadvori 48/2 Prague Castle, Prague 119 01 Czech Republic",
    latitude: 50.090473,
    longitude: 14.401048,
    price: "There are three different sets of tickets to Prague Castle with access to St. Vitus Cathedral, starting from CZK 350 for adults, CZK 175 for children, students, and visitors aged over 65.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/St_Vitus_Prague_September_2016-21.jpg/1200px-St_Vitus_Prague_September_2016-21.jpg",
    destination_id: prague.id
})

activity24 = Activity.create({
    name: "Prague Zoo",
    description: "Prague Zoological Garden is situated near the center of the Czech capital, in a unique rugged landscape on the bank of the Vltava River. It opened in 1931 and during its existence of more than 80 years it has risen to become one of the most prestigious zoos in the world. 5,049 animals and 676 species live in Prague Zoo. You can explore 13 pavilions and 150 exhibits over 58 hectares. The kids will love the Bororo Reserve, chairlift, mini-train, observation tower, paddling pool and Children's Zoo. The pride of the zoo is its Elephant Valley, home to a sizeable herd of Asian elephants. The Giant Salamander House, where you can see the largest amphibians in the world - the critically endangered Chinese Giant Salamanders - is extraordinary as well; and the African House with an adjacent vast meadow inhabited by herds of antelopes and giraffes is worth your attention, too.",
    address: "U Trojskeho Zamku 120/3, Prague 171 00 Czech Republic",
    latitude: 50.11694,
    longitude: 14.40611,
    price: "Tickets are CZK 330 for adults and CZK 250 for students and children aged 3 to 15 years.",
    photo: "https://www.nicerightnow.com/wp-content/uploads/2017/09/VLOG-017-Prague-Zoo-covr.jpg",
    destination_id: prague.id
})

#dublin

activity25 = Activity.create({
    name: "Guinness Storehouse",
    description: "Say cheers at the Guinness Storehouse in Dublin, Ireland. Housed in an old fermentation plant, the seven-story brewery gives you the lowdown on Ireland's iconic beer. Start by standing at the bottom of the world's largest pint glass and then make your way through the different stages of production before enjoying a complimentary pint with a view at Gravity Bar, Dublin's highest bar. Even better, learn to pour your own pint with the Guinness Academy Experience.",
    address: "St. James's Gate, Dublin 8, D08 VF8H, Ireland",
    latitude: 53.341908,
    longitude: -6.286686,
    price: "Ticket prices starting from €26.",
    photo: "https://www.dublincitihotel.com/wp-content/uploads/2020/02/GuinnessBrewerygate_Guinnesss_storehouse.jpg",
    destination_id: dublin.id
})

#Barcelona

activity26 = Activity.create({
    name: "Parc Guell",
    description: "The quirky colorful mosaics and undulating curves of Park Güell are a signature of the legendary Catalan architect Antoni Gaudi, who designed many of the features in this park. Officially opened in 1926 and initially planned as a district for the rich, it is now one of the city's most popular attractions and a great representation of Catalan modernism. The entrance with two fairytale-like houses and the iconic salamander fountain are the most busy. You can climb up to the highest point, El Calvari, and visit the nearby Gaudi House museum as well.",
    address: "08024 Barcelona, Spain",
    latitude: 41.414494,
    longitude: 2.152695,
    price: "General admission starting from 10€.",
    photo: "https://cdn.getyourguide.com/img/tour/55bfb034705fe.jpeg/148.jpg",
    destination_id: barcelona.id
})

#capetown

activity27 = Activity.create({
    name: "Table Mountain Aerial Cableway",
    description: "The best views of Cape Town are seen from the top of Table Mountain. The Cableway takes you to the summit in under 5 minutes and the cable car's rotating floor ensure that all visitors get a 360 degree aerial view of the city.",
    address: "Tafelberg Road Lower Cable Station, Cape Town Central 8001 South Africa",
    latitude: -33.962864,
    longitude: 18.409834,
    price: "One way ticket starting from R220.",
    photo: "https://www.capetownetc.com/wp-content/uploads/2021/03/5A9A9460Final--1024x683.jpg",
    destination_id: cape_town.id
})

#amsterdam

activity28 = Activity.create({
    name: "Van Gogh Museum",
    description: "Discover the world's largest collection of works by Dutch painter Vincent van Gogh, featuring masterpieces such as Sunflowers, The Potato Eaters, Almond Blossom and The Bedroom.",
    address: "Museumplein 6, 1071 DJ Amsterdam The Netherlands",
    latitude: 52.35836725,
    longitude: 4.88108997215221,
    price: "€20 per person, free admission under 18 years old.",
    photo: "https://images.adsttc.com/media/images/55e6/f619/e58e/ce03/1300/0374/large_jpg/PORTADA_06_VanGoghMuseum_EntranceBuilding_HansvanHeeswijkArchitects_photo_RonaldTilleman.jpg?1441199623",
    destination_id: amsterdam.id
})

#rome

activity29 = Activity.create({
    name: "Colosseum",
    description: "The ancient Flavian Amphitheater was built by the Flavian emperors in 70 C.E. as a gift to the Roman people. As the largest Roman theater ever built, it was designed to house over 50,000 people, and had played host to gladiator games, plays and even public executions.",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    latitude: 41.890251,
    longitude: 12.492373,
    price: "Colosseum Standard adult ticket	is € 16.00.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
    destination_id: rome.id
})

#stockholm

activity30 = Activity.create({
    name: "Vasa Museum",
    description: "The Vasa ship capsized and sank in Stockholm 1628. After 333 years on the seabed the mighty warship was salvaged and the voyage could continue. Today Vasa is the world's only preserved 17th century ship.",
    address: "Galärvarvsvägen 14, 115 21 Stockholm, Sweden",
    latitude: 59.3280233,
    longitude: 18.0913964,
    price: "Free admission for ages 18 and under. Standard Adult ticket starting from SEK 190.",
    photo: "https://www.city-guide-stockholm.com/_bibli/articlesPage/32/images/1-vasa-lesley-williamson-1-7.jpg?v=ficheArticle&width=416&height=275&pixelRatio=2.6250",
    destination_id: stockholm.id
})

#nyc

activity31 = Activity.create({
    name: "The Metropolitan Museum of Art",
    description: "At New York City's most visited museum and attraction, you will experience over 5,000 years of art from around the world. The Met is for anyone as a source of inspiration, insight and understanding. You can learn, escape, play, dream, discover, connect.",
    address: "1000 5th Ave, New York City, NY 10028-0198",
    latitude: 40.779434,
    longitude: -73.963402,
    price: "Standard ticket starting from $30.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/1200px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg",
    destination_id: nyc.id
})

#santorini

activity32 = Activity.create({
    name: "Santo Winery",
    description: "This state-of-the-art facility in Greece houses a modern winery, a tomato processing factory, and a wine tourism center. For the full experience, enjoy a guided winery tour and cellar visit before sitting down for the star of the show—local wines paired expertly with Mediterranean dishes featuring locally farmed produce.",
    address: "Pyrgos Kallistis 847 00, Greece",
    latitude: 36.3876,
    longitude: 25.4367,
    price: "Prices vary by activity.",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/40/75/santo-winery.jpg?w=1200&h=1200&s=1",
    destination_id: santorini.id
})

#machu picchu

activity33 = Activity.create({
    name: "Intihuatana",
    description: "The best-known monolithic sculpture in Machu Picchu and the most impressive due to its purpose. It is a large solar clock that, through its shadows, was used as an astronomical calendar to measure time and define the beginning and end of the seasons of the year.",
    address: "parque arqueológico de Tipón, Acceso a Tipon, 08205, Peru",
    latitude: -13.163133,
    longitude: -72.54563,
    price: "Bus tickets are $32 and the bus will take you from the town of Aguas Calientes to the Machu Picchu entrance. Guided tours starting from $60.",
    photo: "https://www.machupicchu.org/wp-content/uploads/top-destinations-machu-picchu.jpg",
    destination_id: machu_picchu.id
})

#berlin

activity34 = Activity.create({
    name: "Reichstag Building",
    description: "Situated just north of the Brandenburg Gate, this building houses the German Parliament and was the seat of the Weimar Republic government until it was seized by the Nazis in 1933.",
    address: "Platz der Republik 1, 11011 Berlin, Germany",
    latitude: 52.518623,
    longitude: 13.376198,
    price: "Admission is free; advance registration required.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Reichstag_Dome_2019.jpg",
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
    latitude: 31.641758,
    longitude: -8.002498,
    price: "Admission Fee starting from 150 Dhs.",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4f/7f/06/20190418-125956-largejpg.jpg?w=1200&h=1200&s=1",
    destination_id: marrakesh.id
})

#copenhagen

activity37 = Activity.create({
    name: "Tivoli Gardens",
    description: "More than two dozen rides await you at this world-class amusement park that inspired Walt Disney. Tivoli Gardens, in the very center of Copenhagen, is well-known for its old-world charm, lush gardens, and rides for all ages. You'll get to watch live concerts and light shows, as well as see the fireworks that take place every week. When hungry, choose between the wide selection of restaurants and food stands, or have a picnic at the gardens.",
    address: "VVesterbrogade 3, 1630 København V, Denmark",
    latitude: 55.6708,
    longitude: 12.5677,
    price: "Entrance tickets for Tivoli starting from 155 DKK.",
    photo: "https://images.squarespace-cdn.com/content/v1/56b2203262cd9449d3d390ca/1586158117781-Z3OBCYCMX2BFL9Z5BDYU/TivoliGardens-20_0406-%28Cover%29.jpg?format=2500w",
    destination_id: copenhagen.id
})


#restaurant

#paris

restaurant1 = Restaurant.create({
    name: "Substance",
    cuisine: "French",
    description: "Innovative cuisine, tasting menus & wine pairings served amid contemporary decor.",
    average_price: 2,
    rating: 5,
    address: "18 rue de Chaillot, 75116 Paris France",
    latitude: 48.8673,
    longitude: 2.2977,
    photo: "https://media.cntraveler.com/photos/61017c181f7774b62f9601b3/16:9/w_2560%2Cc_limit/Substance%2C%2520Paris_%2520(2).jpg",
    reservation_link: "https://www.substance.paris/reservation/",
    destination_id: paris.id
})

restaurant2 = Restaurant.create({
    name: "Clover Grill",
    cuisine: "American",
    description: "Polished restaurant specializing in ember-cooked & grilled meats, plus classic cocktails & dessert.",
    average_price: 4,
    rating: 4,
    address: "6 rue Bailleul, 75001 Paris France",
    latitude: 48.86109,
    longitude: 2.34200,
    photo: "https://media.cntraveler.com/photos/610180bb5f23949711c80a2a/16:9/w_2560%2Cc_limit/Clover%2520Grill%2C%2520Paris_Clover-Grill-Salle-2-%25C2%25A9Nicolas-Lobbestael.jpg",
    reservation_link: "https://module.lafourchette.com/fr_FR/module/282537-7f18e#/1754615/pdh",
    destination_id: paris.id
})

restaurant3 = Restaurant.create({
    name: "Épicure",
    cuisine: "French",
    description: "Upscale hotel restaurant overlooking a courtyard garden & specializing in French fine dining & wine.",
    average_price: 3,
    rating: 5,
    address: "112 Rue Du Faubourg Saint-Honore Le Bristol Paris, 75008 Paris France",
    latitude: 48.87190,
    longitude: 2.31483,
    photo: "https://www.oetkercollection.com/media/42272/le_bristol_paris_-_epicure_-_c_claire_cocano_6607.jpg?anchor=center&mode=crop&quality=85&width=1000&height=500&rnd=133095059080000000",
    reservation_link: "https://www.oetkercollection.com/fr/hotels/le-bristol-paris/restaurants-et-bar/epicure/?utm_source=google&utm_medium=local&utm_campaign=Epicure",
    destination_id: paris.id
})

restaurant4 = Restaurant.create({
    name: "Allard",
    cuisine: "French",
    description: "Old-school bistro offering elevated, traditional French dishes & wines in a warm atmosphere.",
    average_price: 2,
    rating: 4,
    address: "41 Rue Saint-André des Arts, 75006 Paris, France",
    latitude: 48.85401,
    longitude: 2.34101,
    photo: "https://images.squarespace-cdn.com/content/v1/624b6533242826543b1ca2c5/f9fdda63-f1ca-4eae-9877-568f7ed46771/IMG_3286.jpeg",
    reservation_link: "https://module.lafourchette.com/fr_FR/module/408835-c7bdb",
    destination_id: paris.id
})

restaurant5 = Restaurant.create({
    name: "La Tour d'Argent",
    cuisine: "French",
    description: "Centuries-old quayside emblem of upscale French cuisine famed for its house special, pressed duck.",
    average_price: 3,
    rating: 5,
    address: "15 Quai de la Tournelle, 75005 Paris, France",
    latitude: 48.84996,
    longitude: 2.35484,
    photo: "https://imageio.forbes.com/blogs-images/rooksanahossenally/files/2016/12/Tour-DArgent-restaurant-Paris-Michelin-star-1200x739.jpg?format=jpg&width=1200",
    reservation_link: "https://tourdargent.com/en/",
    destination_id: paris.id
})

restaurant6 = Restaurant.create({
    name: "Benoit Paris",
    cuisine: "French",
    description: "Casseroles, snails & desserts like profiteroles in a venerable bistro with brass details & mirrors.",
    average_price: 2,
    rating: 4,
    address: "20 Rue Saint-Martin, 75004 Paris, France",
    latitude: 48.85856,
    longitude: 2.35004,
    photo: "https://bonjourparis.com/wp-content/uploads/2015/05/Benoit.jpg",
    reservation_link: "https://module.lafourchette.com/en_GB/module/408827-91dfe",
    destination_id: paris.id
})

# restaurant7 = Restaurant.create({
#     name: 
#     cuisine: 
#     description:
#     avaerage_price: 
#     rating:
#     address:
#     latitude: 
#     longitude: 
#     photo:
#     reservation_link:
#     destination_id: paris.id
# })

# restaurant8 = Restaurant.create({
#     name: 
#     cuisine: 
#     description:
#     avaerage_price: 
#     rating:
#     address:
#     latitude: 
#     longitude: 
#     photo:
#     reservation_link:
#     destination_id: paris.id
# })

#florence

restaurant9 = Restaurant.create({
    name: "Trattoria 13 Gobbi",
    cuisine: "Italian",
    description: "Trattoria 13 Gobbi wants to tell you the essence of Florence in every dish. The menu combines the culinary tradition of our country with some more current dishes.",
    average_price: 2,
    rating: 4,
    address: "Via del Porcellana, 9R, 50123 Firenze FI, Italy",
    latitude: 43.77298,
    longitude: 11.24656,
    photo:"https://res.cloudinary.com/tf-lab/image/upload/restaurant/78dd2d5b-07fa-4c4f-bf79-0e6758f852f9/30b6be02-23e8-4d5c-84c4-7983f3d656ac.jpg",
    reservation_link: "https://www.trattoria13gobbi.com/",
    destination_id: florence.id
})

#london

# restaurant10 = Restaurant.create({
#     name: 
#     cuisine: 
#     description:
#     average_price: 
#     rating:
#     address:
#     latitude: 
#     longitude: 
#     photo:
#     reservation_link:
#     destination_id: london.id
# })

# #tokyo

# restaurant11 = Restaurant.create({
#     name: 
#     cuisine: 
#     description:
#     average_price: 
#     rating:
#     address:
#     latitude: 
#     longitude: 
#     photo:
#     reservation_link:
#     destination_id: tokyo.id
# })

# #australia

# restaurant12 = Restaurant.create({
#     name: 
#     cuisine: 
#     description:
#     average_price: 
#     rating:
#     address:
#     latitude: 
#     longitude: 
#     photo:
#     reservation_link:
#     destination_id: tokyo.id
# })

#hotel

#paris

hotel1 = Hotel.create({
    name: "Hotel Malte - Astotel",
    description: "Located in the 2nd district next to the Stock Exchange, the Louvre and Place des Victoires, Hotel Malta provides a superb location for a memorable stay. Whether you want to shop in the heart of the department store neighbourhood or visit one of the main business centres of Paris, Malta Hotel is the place to be. Elegantly concealed behind a facade dating from the seventeenth century, let yourself be seduced by our garden patio, a pleasurable experience on sunny days, our cozy breakfast room, and the relaxing atmosphere of our lobby. After the warm welcome by our professional team, always at your disposal, you will appreciate the comfort of our rooms decorated in an elegant and timeless design. A convenient location , caring personnel and warm atmosphere make Malta Hotel the perfect place for your stay in the capital, whether traveling with family or on your own.",
    average_price: 2,
    rating: 4,
    address: "63 rue de Richelieu, 75002 Paris France",
    latitude: 48.86778,
    longitude: 2.33779,
    photo: "https://photos.bringfido.com/ein/2/7/1/128172/31828_362954_z.jpg?size=slide&density=2x",
    reservation_link: "https://en.astotel.com/hotel/malte-opera-en/overview",
    destination_id: paris.id
})

hotel2 = Hotel.create({
    name: "La Maison Favart",
    description: "La Maison Favart is a 4-star Boutique Hotel in the heart of Paris that embodies the discreet luxury of tailor-made attention and a unique intimate universe.",
    average_price: 3,
    rating: 4,
    address: "5 Rue de Marivaux, 75002 Paris, France",
    latitude: 48.87094,
    longitude: 2.33741,
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e4/84/cb/exterior-view.jpg?w=700&h=-1&s=1",
    reservation_link: "https://www.lamaisonfavart.com/en/",
    destination_id: paris.id
})

# hotel3 = Hotel.create({
#     name:
#     description:
#     average_price: 
#     rating:
#     address:
#     latitude: 
#     longitude:
#     photo:
#     reservation_link:
#     destination_id: paris.id
# })

# hotel4 = Hotel.create({
#     name:
#     description:
#     average_price: 
#     rating:
#     address:
#     latitude: 
#     longitude:
#     photo:
#     reservation_link:
#     destination_id: paris.id
# })

#trip

trip1 = Trip.create({
    origin_airport: "JFK",
    destination_airport: "CDG",
    departure: DateTime.parse("2023-06-22 16:25:00"),
    arrival: DateTime.parse("2023-06-20 07:30:00"),
    flight_number: "AA7991",
    confirmation_number: "C5CEKV",
    user_id: user1.id,
    destination_id: paris.id
})

#itinerary day

itinerary1 = ItineraryDay.create({
    date: Date.parse("2023-06-20"),
    trip_id: trip1.id
})

itinerary2 = ItineraryDay.create({
    date: Date.parse("2023-06-21"),
    trip_id: trip1.id
})

#hotel itinerary time

hotel_itinerary_time1 = HotelItineraryTime.create({
    time: DateTime.parse("2023-06-20 06:00:00"),
    hotel_id: hotel1.id,
    itinerary_day_id: itinerary1.id
})

#restaurant itinerary time

restaurant_itinerary_time1 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-20 09:00:00"),
    restaurant_id: restaurant1.id,
    itinerary_day_id: itinerary1.id
})

restaurant_itinerary_time2 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-20 12:00:00"),
    restaurant_id: restaurant2.id,
    itinerary_day_id: itinerary1.id
})

restaurant_itinerary_time3 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-21 07:00:00"),
    restaurant_id: restaurant3.id,
    itinerary_day_id: itinerary2.id
})

restaurant_itinerary_time4 = RestaurantItineraryTime.create({
    time: DateTime.parse("2023-06-21 06:00:00"),
    restaurant_id: restaurant4.id,
    itinerary_day_id: itinerary2.id
})

#activity itinerary time

activity_itinerary_time1 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-20 02:00:00"),
    activity_id: activity1.id,
    itinerary_day_id: itinerary1.id
})

activity_itinerary_time2 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-20 11:00:00"),
    activity_id: activity2.id,
    itinerary_day_id: itinerary1.id
})

activity_itinerary_time3 = ActivityItineraryTime.create({
    time: DateTime.parse("2023-06-21 10:00:00"),
    activity_id: activity3.id,
    itinerary_day_id: itinerary2.id
})

#packing list

packing_list1 = PackingList.create({
    name: "My Packing List for Paris",
    trip_id: trip1.id
})

#packing item

item1 = Item.create({
    name: "underwear",
    quantity: 12,
    packed: true,
    packing_list_id: packing_list1.id
})