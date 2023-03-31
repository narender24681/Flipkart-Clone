import React from 'react';
import { Box, Button, Center, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bestOfelectronicsBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90",
  heading: "Best of Electronics",
}

const bestOfelectronicsProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    brand: "Canon, Sony, Fujifilm...",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
    name: "Monitors",
    price: "From ₹9999",
    brand: "SAMSUNG",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
    name: "Printers",
    price: "From ₹3999",
    brand: "HP",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l12h1u80/cases-covers/back-cover/v/7/9/sgf235g-pat367-my-thing-original-imagcprak4yhdbh5.jpeg?q=70",
    name: "Designer Cases & Covers",
    price: "Just ₹169",
    brand: "For Top Models",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=70",
    name: "Printers",
    price: "From ₹2336",
    brand: "Canon",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/xif0q/monitor/u/b/u/s2721hnm-full-hd-27-p0w45-dell-original-imaghmz37qrgxheh.jpeg?q=70",
    name: "Monitor",
    price: "From ₹8279",
    brand: "DELL",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
    name: "Monitors",
    price: "From ₹7949",
    brand: "Lenovo",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/xif0q/projector/h/u/s/-original-imafwnfzxqp3yymc.jpeg?q=70",
    name: "Projector",
    price: "From ₹6990",
    brand: "Egate",
  }
];





const beautyFoodToysAndMoreBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90",
  heading: "Beauty, Food, Toys & more",
}

const beautyFoodToysAndMoreProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70",
    name: "Tyres",
    price: "From 799",
    brand: "Apollo, Bridgestone, Ceat and",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
    name: "Top Selling Stationery",
    price: "From ₹49",
    brand: "Pens, Notebooks & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=70",
    name: "Yoga Mat",
    price: "From ₹ 159",
    brand: "beatXP, HRX & Adrenex",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70",
    name: "Soft Toys",
    price: "Upto 70% Off",
    brand: "Stuffed Toys, Plush Toys & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
    name: "Non-Geared Cycles",
    price: "Up to 40% Off",
    brand: "Hercules, Hero & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70",
    name: "Tricycles & Rideons",
    price: "Up to 70% Off",
    brand: "Figurines, Battle Toys & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jms25jk0/dumbbell/e/p/r/pvc-combo16-na-8-krx-original-imaepy3rcgm3nsva.jpeg?q=70",
    name: "Dumbbell",
    price: "Up to 50% off",
    brand: "PROWL, HRX & KRX",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jjolt3k0/ball/j/b/6/400-22-5-country-colour-1-1360br-football-nivia-original-imaf746mud9cxqgh.jpeg?q=70",
    name: "Footballs",
    price: "Up to 60% Off",
    brand: "Nivia, Cosco & more",
  }
];





const sportsHealthCareAndMoreBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/59d58e5ce057f2e6.jpg?q=90",
  heading: "Sports, Healthcare & more",
}

const sportsHealthCareAndMoreProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/xif0q/book/j/f/q/-original-imagnhh9gsj5hkkt.jpeg?q=70",
    name: "Fiction Books",
    price: "Up to 70% off",
    brand: "Shop Now!",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70",
    name: "Gym Essentials",
    price: "From ₹139",
    brand: "Shop Now",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=70",
    name: "Musical Toys",
    price: "Under 199",
    brand: "Top-Selling Toys",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jve4pe80/shampoo/9/f/q/500-baby-no-more-tears-shampoo-500-ml-johnson-s-original-imaf6uf4gtswfu8k.jpeg?q=70",
    name: "Baby Bath & Skin Care",
    price: "From ₹69",
    brand: "Baby Soap, Oil & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kk5rgy80/racquet/a/n/f/g4-3-25-inches-strung-nanoflare-light-29is-1-nanoflare-light-original-imafzkgg9zrt6eet.jpeg?q=70",
    name: "Badminton Racquets",
    price: "From ₹899",
    brand: "Full Graphite Racquets",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/xif0q/book/j/d/b/hpssc-hrtc-conductor-recruitment-exam-guide-original-imagk4gm5mfevx4c.jpeg?q=70",
    name: "Test Preparation",
    price: "Up to 70% off",
    brand: "Explore Now!",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kql8sy80/lipstick/7/m/y/21-sara-s-favorite-sensational-liquid-matte-pack-of-3-touch-of-original-imag4kgnbmynydnw.jpeg?q=70",
    name: "Makeup Essentials",
    price: "Upto 60% Off",
    brand: "Lakme, Swiss Beauty & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k6jnfrk0/shampoo/y/n/t/400-gentle-baby-shampoo-pack-himalaya-original-imafzzebzanwzwvw.jpeg?q=70",
    name: "Baby Care Essentials",
    price: "Under ₹699",
    brand: "Baby Soaps, Shampoos & More",
  }
];





const homeAndKitchenEssentialsBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90",
  heading: "Home & Kitchen Essentials",
}

const homeAndKitchenEssentialsProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kz8qsnk0/mosquito-net/h/1/p/double-bed-polyester-adults-blue-mosquito-net-double-bed-nets-original-imagbagfgnfvnquj.jpeg?q=70",
    name: "Mosquito Nets",
    price: "From ₹149",
    brand: "Best Deal Price",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k0e66q80/plant-sapling/c/e/7/air-purifying-pothos-money-plant-with-imported-pot-1-water-original-imafk747aczgq6ze.jpeg?q=70",
    name: "Live Plants",
    price: "From ₹199",
    brand: "Best Selling",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/ks4yz680/sticker/d/g/t/wall-stickers-wallpaper-home-decoration-whale-and-shaded-frames-original-imag5rvjdvrjdzgc.jpeg?q=70",
    name: "Stickers & Wallpapers",
    price: "Upto 80% Off",
    brand: "Big Discounts",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l02r1jk0/bulb/j/e/o/motion-sensor-9w-01-philips-original-imagbxcabmu8yvhh.jpeg?q=70",
    name: "Bulbs",
    price: "Upto 80% Off",
    brand: "Big Discounts",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kz065jk0/emergency-light/v/t/4/high-quality-60-high-bright-led-light-with-android-charging-original-imagb3v8h8zdm3q3.jpeg?q=70",
    name: "Emergency Lights",
    price: "Upto 80% Off",
    brand: "Big Discounts",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70",
    name: "Artificial Plants",
    price: "Upto 80% Off",
    brand: "Big Discounts",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/ks4yz680/sticker/d/g/t/wall-stickers-wallpaper-home-decoration-whale-and-shaded-frames-original-imag5rvjdvrjdzgc.jpeg?q=70",
    name: "Stickers & Wallpapers",
    price: "Upto 80% Off",
    brand: "Big Discounts",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l2m78280/bedding-set/t/b/g/polycotton-bedding-set-queen-com-set-grey-bail-the-artsy-home-original-imagdxgdnpz7mzyq.jpeg?q=70",
    name: "Bedding Sets",
    price: "From ₹189",
    brand: "Best Offers",
  }
];





const groomingBooksAutoAndMoreBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/30c9dd7e9c28b96a.jpg?q=90",
  heading: "Grooming, Books, Auto & more",
}

const groomingBooksAutoAndMoreProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70",
    name: "Electric Cycle",
    price: "Up to 40% Off",
    brand: "Nuze, Motovolt & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
    name: "Top Selling Stationery",
    price: "From ₹49",
    brand: "Pens, Notebooks & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70",
    name: "Tricycles & Rideons",
    price: "Up to 70% Off",
    brand: "Figurines, Battle Toys & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70",
    name: "Dry Fruits",
    price: "Upto 75% Off",
    brand: "Happilo, Farmley & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jms25jk0/dumbbell/e/p/r/pvc-combo16-na-8-krx-original-imaepy3rcgm3nsva.jpeg?q=70",
    name: "Dumbbell",
    price: "Up to 50% off",
    brand: "PROWL, HRX & KRX",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k186fm80/bat/9/f/n/1000-1200-short-handle-endorsed-for-light-hard-tennis-ball-with-original-imafkuuyxrrphkbr.jpeg?q=70",
    name: "Cricket",
    price: "Up to 45% Off",
    brand: "CEAT, MRF & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70",
    name: "Coffee Powder",
    price: "Upto 80% Off",
    brand: "Nescafe, Continental & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k3j1z0w0/kit/d/v/e/combo-of-ab-wheel-rollerand-tummy-trimmer-exercisee1s-charuvi-original-imafdwh9nyzyujvk.jpeg?q=70",
    name: "Ab Exerciser",
    price: "From ₹199",
    brand: "Adrenex, Manogyam & More",
  }
];





const fashionTopDealsBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90",
  heading: "Fashion Top Deals",
}

const fashionTopDealsProducts = [
  {
    image: "https://rukminim1.flixcart.com/fk-p-flap/400/400/image/5aa98b7cee183286.jpg?q=70",
    name: "Best selling Styles",
    price: "Min. 40% Off",
    brand: "Woodland, U.S. Polo Assn....",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70",
    name: "Roadster, HRX & more",
    price: "From ₹249",
    brand: "T-Shirts, Shirts",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/xif0q/kurta/h/c/u/xxl-k95165-526-deyann-original-imafj9a9t4bqhxca-bb.jpeg?q=70",
    name: "Kurtas, Dhotis...",
    price: "From ₹499",
    brand: "Be Pongal Ready",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/xif0q/sandal/y/w/8/2-goldensuperstaruk2-purplehunt-golden-original-imaggzdrcyj6fuqq.jpeg?q=70",
    name: "Puma, Bata, Crocs...",
    price: "Min 40% off",
    brand: "Women's Shoes & Sandals...",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l111lzk0/kurta/t/r/c/m-dafksp22daterracota-max-original-imagczshpt7mamjd.jpeg?q=70",
    name: "Kurtas, Sets & more",
    price: "Up to 70% Off",
    brand: "Rangmanch, Melange & more..",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/ksez24w0/hand-messenger-bag/w/z/z/amy-plus-md-satchel-ladies-handbag-hgge016022m3-satchel-lavie-original-imag5zj5aqrwgcdz.jpeg?q=70",
    name: "Lavie, Caprese, Allen Solly…",
    price: "40%-70% off",
    brand: "Grab the Deal Now!",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l23mhzk0/top/a/b/l/m-tttp006710-tokyo-talkies-original-imagdgg4gqpmdgm8.jpeg?q=70",
    name: "Tops, Dresses, Jeans...",
    price: "Min. 60% Off",
    brand: "AND, Sassafras, Killer...",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l3khsi80/shirt/b/n/4/m-ld-hlf-red-cargo-lumad-original-imagenqjfgkujsvv.jpeg?q=70",
    name: "Shirts, Trousers",
    price: "Min 65% Off",
    brand: "Lowest Ever Prices",
  }
];





const topDealsBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/86e6d52663901503.jpg?q=90",
  heading: "Top Deals",
}

const topDealsProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/ktop5e80/tablet/6/o/s/mk2p3hn-a-apple-original-imag6yy8deumbvxz.jpeg?q=70",
    name: "Apple iPads",
    price: "Shop Now!",
    brand: "Liquid Retina Display",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
    name: "Mirrorless Cameras",
    price: "From ₹57,999",
    brand: "NCEMI | Product Exch",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kpvivm80/tablet/n/t/v/sm-t225nzsains-samsung-original-imag4yryasv6s7h3.jpeg?q=70",
    name: "Samsug Galaxy Tabs",
    price: "Shop Now!",
    brand: "Best Sellers | Most Wishlisted",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kp2y2kw0/instant-camera/q/l/a/treasure-box-mini-9-instax-mini-9-fujifilm-original-imag3efxgamx5bna.jpeg?q=70",
    name: "Instax Cameras",
    price: "From ₹3,999",
    brand: "Capture your unique moments",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/l1v1uvk0/tablet/9/c/s/6650034-realme-original-imagdc5ac3y7xgxh.jpeg?q=70",
    name: "realme Pad",
    price: "From ₹9,999",
    brand: "#1 Best Seller In Charts!",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kgqvlow0/battery-charger/d/a/7/apple-mhjd3hn-a-original-imafwwwfg5xgcctm.jpeg?q=70",
    name: "Buy Now",
    price: "From ₹99",
    brand: "Ambrane, Mi & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jv2p6kw0/stylus/m/p/8/pencil-2nd-gen-mu8f2zm-a-apple-original-imafg2dsgpu9pfgz.jpeg?q=70",
    name: "Apple Pencil",
    price: "Shop Now",
    brand: "Stylus For Your iPad",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k6qsn0w0/tablet/3/q/z/lenovo-za5g0047in-original-imafp4w7qvpnprv5.jpeg?q=70",
    name: "Lenovo Tab M8",
    price: "Shop Now!",
    brand: "8-inch | Upto 64GB",
  }
];





const booksToysAndMoreBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/fb57b447c8eefb65.jpg?q=90",
  heading: "Books, Toys & More",
}

const booksToysAndMoreProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kfbfr0w0/arm-sleeve/p/x/3/free-arm-gy-auto-hub-original-imafvsutr6gkvsuf.jpeg?q=70",
    name: "Riding Glove",
    price: "Upto 80% Off",
    brand: "Never Before",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kmds4nk0/vehicle-indicator-light/c/g/9/set-of-4-bike-front-side-rear-smd-blue-led-light-indicator-turn-original-imagfatnzgzegkmg.jpeg?q=70",
    name: "Bike Light Bulb",
    price: "From ₹89",
    brand: "Bike Essentials",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70",
    name: "String Instruments",
    price: "Up to 70% Off",
    brand: "Guitars, Ukuleles & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70",
    name: "Food Spreads",
    price: "Upto 75% Off",
    brand: "Myfiness,Alpino & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jamtevk0/two-wheeler-cover/v/f/4/fksbyellow-apache-rtr-160-flipkart-smartbuy-original-imafy658ggts6rwr.jpeg?q=70",
    name: "Bike Body Cover",
    price: "From ₹199",
    brand: "Bike Essentials",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kebpqq80/musical-keyboard/j/h/h/37-keys-nj-fashion-original-imafvyhrjeuah2ge.jpeg?q=70",
    name: "Musical Keyboards",
    price: "up to 70% off",
    brand: "Beston, Redbox & more",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=70",
    name: "Honey",
    price: "Upto 75% Off",
    brand: "Saffola, Dabur & More",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kw104nk0/vehicle-light-bulb/z/x/m/12-h7-geniune-9000lm-6500k-72-w-led-automotive-headlight-bulbs-original-imag8sqneb7etpg6.jpeg?q=70",
    name: "Car Light Bulb",
    price: "Upto 70% Off",
    brand: "Car Essentials",
  }
];





const pickYourStylesBanner = {
  banner: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/ae3cf1d27ef0eabc.jpg?q=90",
  heading: "Pick Your Styles",
}

const pickYourStylesProducts = [
  {
    image: "https://rukminim1.flixcart.com/image/400/400/jvmpci80/track-pant/g/w/j/s-7224489-hrx-by-hrithik-roshan-original-imafghfrgedw3zq8.jpeg?q=70",
    name: "Nivia, Van Heusen Flex..",
    price: "Up to 60% Off",
    brand: "Trackpants, Shorts",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k59xci80/watch/t/p/9/premium-luxury-business-casual-trendy-water-resistant-original-imafnzmembfxdyhv.jpeg?q=70",
    name: "Watches",
    price: "From ₹399",
    brand: "Best Selling",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=70",
    name: "U.S. Polo Assn., Highlander..",
    price: "Min. 40% Off",
    brand: "Sneakers, Loafers, Slides...",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=70",
    name: "Sweatshirts, Hoodies, Jackets...",
    price: "From ₹249",
    brand: "Wildcraft, Fort Collins...",
  },
  {
    image: "https://rukminim1.flixcart.com/flap/400/400/image/f1ffa6330a602013.jpeg?q=70",
    name: "Bags, Trolleys, Luggage...",
    price: "50-70%+Extra 10% Off",
    brand: "Wildcraft, American Tourister...",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kj0bp8w0-0/jewellery-set/y/5/7/n83811-sukkhi-original-imafyzd5ze4v7dee.jpeg?q=70",
    name: "Jewellery",
    price: "Under ₹499",
    brand: "Shop Now",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/kylvr0w0/shirt/u/p/t/m-1596-fs-maple-killer-original-imagasvf8qupbpuz.jpeg?q=70",
    name: "Ketch, Mast & Harbour..",
    price: "From ₹399",
    brand: "Shirts, Trousers",
  },
  {
    image: "https://rukminim1.flixcart.com/image/400/400/ktyp8cw0/t-shirt/a/y/n/s-14806378-mast-harbour-original-imag76r6ba6kgj8f.jpeg?q=70",
    name: "Being Human, Ruf & Tuf, Lee..",
    price: "Min. 50% Off",
    brand: "T-Shirts, Jeans",
  }
];




export const ProductsCarousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const productsData = [
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c38b4036d90d6d0e.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/bdef343421b6987d.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9be53b0f471a35b6.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/112b0206a861accc.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/75a15c3e19c3f7de.jpg?q=50",
  ];

  return (
    <Box mt={4} width="100%">
      <Flex>
        <Box>
          <Box pt="20px" height="300px" width="100%" backgroundImage="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" backgroundPosition="0px bottom" backgroundRepeat="no-repeat" border="1px solid red">
            <Center>
              <VStack>
                <Text pb="10px" textAlign="center" fontSize="xx-large">Best of Electronics</Text>
                <Button colorScheme="#2874f0" backgroundColor="#2874f0" color="white" borderRadius="0px" fontSize="sm">VIEW ALL</Button>
              </VStack>
            </Center>
          </Box>
        </Box>

        <Box width="80%">
          <Slider {...settings}>
            {productsData.map((el, i) =>
              <Image height="300px" key={i} objectfit="contain" src={el} alt="" />
            )}
          </Slider>
        </Box>
      </Flex>
    </Box>
  )
}

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, marginLeft: "30px", zIndex: "1" }} onClick={onClick} />
  )
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, marginRight: "30px" }} onClick={onClick} />
  )
}
