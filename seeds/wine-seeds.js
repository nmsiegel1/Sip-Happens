// wine seeds
const Wine = require('../models/Wine');

const wineData = [
  {
    id: 1,
    type: 'Chardonnay',
    name: "Kendall Jackson Vintner's Reserve Chardonnay",
    description:
      "As with chicken, seafood is always a go-to food pairing when it comes to white wines, and chardonnay is no different. Chardonnay is going to go well with butter or nutty flavors. When it comes to seafood it will pair well with seafood dishes based on shellfish like crab, lobster, shrimp, and mussels. You’ll also find that it pairs very well with flaky white fish like halibut. If you’re enjoying a very oaky bottle of chardonnay, then a nice pan seared salmon would compliment the wine nicely as well.",
    food_image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F03%2F26%2Fseafood-boil-FT-RECIPE0321.jpg',
    food_pairing: 'Seafood',
    wine_image:
      'https://images.ctfassets.net/zpx0hfp3jryq/7fwRP7V2VaFRziRirTMY3O/47dc3afc4b5d374305c8a2766d9aff91/Kendall-Jackson-Chardonnay-3.jpg?fm=jpg&fl=progressive',
    wine_url:
      'https://www.vivino.com/US-NC/en/kendall-jackson-vintner-s-reserve-chardonnay/w/2132?bottle_count=1&gclid=Cj0KCQjwz96WBhC8ARIsAATR253eMRHcvbwJ5h-IphpFVgJbCSHtzUVeNxl__I1AAxL6NTDp3ikerUoaAkZJEALw_wcB&istBid=t&istCompanyId=d352232b-82d1-4fe3-80c3-2b824cbf11c9&istFeedId=e1be2e9c-a381-40af-aa01-251793a4fd12&istItemId=pqlpirlra&region_id=110038&utm_campaign=PM_02_413&utm_content=US&utm_medium=paid_search&utm_source=google&year=2018',
  },
  {
    id: 2,
    type: 'Pinot Grigio',
    name: 'Santa Margherita Pinot Grigio Valdadige',
    description:
      "Pinot Grigio’s herbal and green character make it an excellent match for green salads and fresh summer vegetables like zucchini, lettuces, and cucumbers. It complements crunchy raw veggies with ranch dip, tempura vegetables, rice with stir fried vegetables, or veggie burgers.",
    food_image:
      'https://s23209.pcdn.co/wp-content/uploads/2014/10/Roasted-VegetablesIMG_0409-1200x1200-cropped.jpg',
    food_pairing: 'Vegetables',
    wine_image:
      'https://images.squarespace-cdn.com/content/v1/54a9e543e4b04f595700140e/1441924557974-I0JJAQ7V6A3M8OFHPKOM/santa.jpg?format=1000w',
    wine_url:
      'https://www.vivino.com/US-NC/en/santa-margherita-pinot-grigio-valdadige/w/1184502',
  },
  {
    id: 3,
    type: 'Savigon Blanc',
    name: 'Kim Crawford Sauvignon Blanc',
    description:
      "I’m all about a great chicken dinner – Chicken Piccata, Grilled Mango Chicken, Chicken Gyro Bowls all pair amazingly well with Sauvignon Blanc. Or get a little fancy at your next BBQ and try out these Lemon Chicken Skewers with Harissa Yogurt Sauce.",
    food_image:
      'https://www.platingsandpairings.com/wp-content/uploads/2021/01/air-fryer-chicken-breasts-recipe-7-scaled.jpg',
    food_pairing: 'Chicken',
    wine_image:
      'https://cdn.shopify.com/s/files/1/0589/1067/1057/products/illuminate-sauvignon-blanc-3.5f0fb9e_x600.jpg?v=1632140813',
    wine_url:
      'https://www.vivino.com/US-NC/en/kim-crawford-sauvignon-blanc/w/66534?ref=nav-search',
  },
  {
    id: 4,
    type: 'Moscato',
    name: "Stella Rosa Moscato d'Asti",
    description:
      'If there is one food category that Moscato really shines, that is no other than spicy food. The sweetness and low alcohol of Moscato calm down and complement the spice.',
    food_image:
      'https://www.sandiegorestaurantweek.com/wp-content/uploads/2018/09/iStock-687758388-1030x687.jpg',
    food_pairing: 'Spicy Food',
    wine_image:
      'https://ribolione-images-production-us-east-2-9354302113.s3.us-east-2.amazonaws.com/images/thumbs/0000133_lemon-drop.png',
    wine_url:
      'https://www.vivino.com/US-NC/en/stella-rosa-moscato-d-asti/w/4264359?price_id=22043757',
  },
  {
    id: 5,
    type: 'Prosecco',
    name: 'La Marca Prosecco',
    description:
      "With it's natural sweetness and delicate fruit and citrus notes, Prosecco is a great way to round off a meal along with a well-paired dessert. Most people would opt for a dry or extra-dry Prosecco as a dessert pairing, but there are desserts to suit the less sweet wines too.",
    food_image:
      'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-760x580.jpg?ext=.jpg',
    food_pairing: 'Dessert',
    wine_image:
      'https://images.ctfassets.net/zpx0hfp3jryq/2G0ZwSqm9fc9h0fmEne2L7/c89fec33ea769e779f3d62dcf564ba9a/La-Marca-Prosecco-5.jpg?fm=jpg&fl=progressive',
    wine_url: 'https://www.vivino.com/US-NC/en/la-marca-prosecco/w/1126336',
  },
  {
    id: 6,
    type: 'Chenin Blanc',
    name: 'Honeybunch Reserve Chenin Blanc',
    description:
      "There are several white wines out there with enough gusto to moisten even the driest turkey. Try a high quality South African Chenin Blanc with your Thanksgiving dinner. It will even handle cranberry sauce like it was born to do so.",
    food_image:
      'https://www.thespruceeats.com/thmb/qbqn0_YHPSUPpXdVdy4xy1pYDeg=/2000x1333/filters:fill(auto,1)/thanksgiving-dinner-dishes-836012728-5bdda2e6c9e77c00262539e0.jpg',
    food_pairing: 'Turkey',
    wine_image:
      'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/64253782_1095733683955772_6778912626064752640_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=973b4a&_nc_ohc=JdB9ttqF4g8AX9gGbEj&_nc_ht=scontent-atl3-2.xx&oh=00_AT9niwNp-C8b8WqXvwYO8Xp8gi7HHQWnnKtlW4Etsly9nA&oe=62FFA5AB',
    wine_url:
      'https://www.vivino.com/US-NC/en/remhoogte-honeybunch-reserve-chenin-blanc/w/1919433?year=2020&price_id=28633648',
  },
  {
    id: 7,
    type: 'Pinot Noir',
    name: 'Craggy Range Pinot Noir',
    description:
      "New Zealand is famous for excellent lamb and Pinot Noir, and there couldn’t be a better pairing. The tender, succulent lamb meat is balanced by the Pinot’s acidity and red fruit and plum flavors. Remember, if it grows together, it goes together.",
    food_image:
      'https://www.totalwine.com/site/binaries/t1637262064309/content/gallery/data-axle/0026-pinot-noir-food-pairings/lamb-chops.png',
    food_pairing: 'Lamb Chops',
    wine_image:
      'https://burtonsgrill.com/wp-content/uploads/2022/03/Pouring-banner.png',
    wine_url:
      'https://www.vivino.com/US-NC/en/craggy-range-pinot-noir-martinborough-red-wine/w/5731330?year=2018&price_id=24558137',
  },
  {
    id: 8,
    type: 'Cabernet Savigon',
    name: 'Justin Cabernet Sauvignon',
    description:
    "Who doesn’t love a good juicy steak when sipping on a glass of red wine? Well, there’s a reason for that. Meats like steak and lamb have a higher level of fatty proteins in them which help coat your mouth with each bite. This coating in your mouth can diminish the flavor of your next bite of food. But by sipping on a wine like Cabernet Sauvignon, which has high levels of tannin and acidity, the wine will cut through that fatty coating to clear your palate, making each bite as delicious as the first.",
    food_image:
      'https://www.seriouseats.com/thmb/K40kegtcsC9WbzOCvogu-sjU79k=/1500x1125/filters:fill(auto,1)/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg',
    food_pairing: 'Steak',
    wine_image:
      'https://www.justinwine.com/content/dam/justin/trade-and-media/2021/Justin_Winery2292.jpg',
    wine_url:
      'https://www.vivino.com/US-NC/en/us-justin-cabernet-sauvignon/w/3462',
  },
  {
    id: 9,
    type: 'Malbec',
    name: 'Luca Old Vine Malbec',
    description:
      "Blue cheese burgers have a bold flavor, but they make an excellent pairing with an Argentinean variety. The wine offers a dark fruitiness that complements the pungent blue cheese, while its moderate tannins are a match for the richness of the burger and cheese. You’ll enjoy how the charred meat lends a smoky taste that complements the sweet tobacco notes in the wine.",
    food_image:
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/16/1492695774-blue-cheese-burger.jpg',
    food_pairing: 'Blue Cheese Burger',
    wine_image:
      'https://thumbs.vivino.com/winery_backgrounds/206OtPAtS5uN2brQgvc3vA_1280x760.jpeg',
    wine_url:
      'https://www.vivino.com/US-NC/en/luca-old-vine-malbec-valle-de-uco/w/74338?year=2018&price_id=28093921',
  },
  {
    id: 10,
    type: 'Rosé',
    name: "Château d'Esclans Whispering Angel Rosé",
    description:
      "Hearty picnic salads, like Ina Garten’s Tomato-Feta Pasta Salad are lovely with rosé wine. Guy Fieri’s Roasted Beet Salad with Chickpeas and Red Onion is also a nice choice, as is a BLT Pasta Salad. Bring one of these cold, zesty salads along with a bottle of pink wine to your next potluck party and you’re sure to be invited back.",
    food_image:
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FSeries%2F2020-06-Snapshot-5-Quick-Dinners-That-Start-with-Rotisserie-Chicken%2FSnapshot-Rotisserie-Chicken_French-Bistro-Chicken-Salad%2F2020-06-08_AT-K19153',
    food_pairing: 'Salads',
    wine_image:
      'https://cdn.shopify.com/s/files/1/2428/2089/products/Whispering_Angel_Facebook.jpg?v=1584808937',
    wine_url:
      'https://www.vivino.com/US-NC/en/chateau-d-esclans-whispering-angel-rose/w/1104824?ref=nav-search',
  },
  {
    id: 11,
    type: 'Merlot',
    name: 'Duckhorn Napa Valley Merlot',
    description:
      "What cheese goes best with Merlot? Merlot and even some Merlot-blends pair well with hard cheeses like Cheddar, Manchego, Parmigiano-Reggiano, Grana Padano and Pecorino. These cheeses have salty and savoury flavours that pair wonderfully with medium- and full-bodied red wines. Merlot’s position in the middle of the red wine spectrum makes it possible to pair it with different types of cheese, including semi-soft cheeses like Gruyère, Comté, Emmenthaland Gouda.",
    food_image:
      'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2020/10/cheese-3463368_1280.jpg',
    food_pairing: 'Cheese',
    wine_image:
      'https://foodwineclick.files.wordpress.com/2020/10/merlotme_duckhorn_swordfish-20201018-122-edit.jpg?w=512&h=640',
    wine_url:
      'https://www.vivino.com/US-NC/en/duckhorn-napa-valley-merlot/w/3474?year=2019&price_id=27856306',
  },
  {
    id: 12,
    type: 'Chianti Classico',
    name: 'Castello della Paneretta Chianti Classico Riserva',
    description:
      "Chianti is often cited as the ultimate pizza wine. Made predominantly from the Sangiovese grape, from vineyards grown in a hilly region of Tuscany, Chianti wines tend to be quite brisk and very dry. Aromas and flavours are fairly earthy, with tart red fruit notes, and sometimes subtle vegetal notes (tomato leaf, dried herbs). Tannins are generally only moderately firm, and quite chalky in texture.",
    food_image:
      'https://mshanken.imgix.net/wso/bolt/2021-02/pg2d_lanternalead022521_1600.jpg',
    food_pairing: 'Pizza',
    wine_image:
      'https://i0.wp.com/chabrolwines.com/wp-content/uploads/2020/12/chianti_reserva.jpg?fit=631%2C686&ssl=1',
    wine_url:
      'https://www.vivino.com/US-NC/en/castello-della-paneretta-chianti-classico-riserva/w/1099919?year=2018&price_id=29403234',
  },
];

const seedWines = () => Wine.bulkCreate(wineData);

module.exports = seedWines;