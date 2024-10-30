import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import UserProfile from './UserProfile';
import Settings from './Settings';
import Banner from './Banner';  // Import the Banner component

const products = {
  fruits: [
    { id: 1, name: 'Apple', price: '$1.00', image: 'https://img.freepik.com/premium-psd/isolated-apple-style-png-with-white-background-generative-ia_209190-253918.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 2, name: 'Banana', price: '$0.50', image: 'https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 3, name: 'Kiwi', price: '$2.50', image: 'https://img.freepik.com/free-photo/fresh-kiwi-fruit-isolated_144627-30034.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 4, name: 'Orange', price: '$1.50', image: 'https://img.freepik.com/free-photo/raw-cross-ingredient-studio-citrus_1172-204.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 5, name: 'Mango', price: '$1.00', image: 'https://img.freepik.com/premium-photo/mango-mango-slice-white-background_807917-49.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 6, name: 'Pine Apple', price: '$0.50', image: 'https://img.freepik.com/free-photo/raw-fresh-texture-vitamin-fruit_1172-220.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 7, name: 'Grapes', price: '$1.50', image: 'https://img.freepik.com/free-photo/grapes-wicker-basket-high-angle-view-grey-plaster_176474-10442.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 8, name: 'Guava', price: '$2.00', image: 'https://img.freepik.com/premium-photo/fresh-guava-fruit-isolated-white-background_824239-3268.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 9, name: 'Strawberry', price: '$1.50', image: 'https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 10, name: 'Pomegranate', price: '$2.50', image: 'https://img.freepik.com/premium-photo/fresh-pomegranate-with-vibrant-seeds-green-leaves-white-background_87646-46872.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
  ],
  vegetables: [
    { id: 11, name: 'Carrot', price: '$0.70', image: 'https://img.freepik.com/premium-psd/carrot-isolate-style-png-with-white-background-generative-ia_209190-247538.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 12, name: 'Broccoli', price: '$1.20', image: 'https://img.freepik.com/premium-photo/fresh-green-head-broccoli-white-background_960396-634104.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 13, name: 'Okra', price: '$1.20', image: 'https://image.shutterstock.com/image-photo/asian-cooking-vegetable-food-broth-260nw-2480819537.jpg' },
    { id: 14, name: 'Cabbage', price: '$1.20', image: 'https://img.freepik.com/premium-photo/fresh-green-cabbage-isolated-white-background-healthy-eating-concept_533856-6368.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 15, name: 'Brinjals', price: '$1.20', image: 'https://img.freepik.com/premium-photo/there-are-four-eggplants-basket-table_1034966-100786.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 16, name: 'Onions', price: '$1.20', image: 'https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 17, name: 'Green Chillies', price: '$1.20', image: 'https://img.freepik.com/premium-psd/green-hot-chili-pepper-isolated-transparent-background-generative_617816-6300.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 18, name: 'Capsicum', price: '$1.20', image: 'https://img.freepik.com/premium-psd/green-bell-pepper-with-white-label-it_431965-437.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 19, name: 'Tomato', price: '$1.50', image: 'https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 20, name: 'Cucumber', price: '$1.50', image: 'https://img.freepik.com/premium-photo/cucumber-slices-wooden-table_55883-3967.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
  ],
  
  beans: [
    { id: 31, name: 'Navy Beans', price: '$2.00', image: 'https://img.freepik.com/free-photo/mixed-beans_74190-7149.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 32, name: 'Black Beans', price: '$1.75', image: 'https://img.freepik.com/free-photo/black-beans-white-small-bowl-place-dark-floor_1150-35412.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 33, name: 'Kidney Beans', price: '$1.75', image: 'https://img.freepik.com/free-photo/bowl-full-legumes_1220-42.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 34, name: 'Pinto Beans', price: '$1.75', image: 'https://img.freepik.com/premium-photo/pinto-beans-wooden-bowl-isolated-white-background_33736-2186.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 35, name: 'Lima Beans', price: '$1.75', image: 'https://img.freepik.com/premium-photo/plate-green-peas-with-word-im-it_999340-84391.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 36, name: 'Cannellini Beans', price: '$1.75', image: 'https://img.freepik.com/free-photo/peanuts-wooden-bowl_74190-7262.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 37, name: 'Soybeans', price: '$1.75', image: 'https://img.freepik.com/premium-photo/natural-fresh-soybeans-isolated-white-background_787273-37705.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 38, name: 'Adzuki Beans', price: '$1.75', image: 'https://img.freepik.com/free-photo/red-bean-paste-brown-wood-floor_1150-17185.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 39, name: 'Chickpeas', price: '$1.75', image: 'https://img.freepik.com/premium-photo/bowl-food-with-green-top-that-says-pasta_996043-2692.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
  ],
  vegan: [
    { id: 40, name: 'Tofu', price: '$2.50', image: 'https://img.freepik.com/free-photo/tofu-made-from-soybeans-food-nutrition-concept_1150-26355.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 41, name: 'Almond milk', price: '$3.00', image: 'https://img.freepik.com/premium-photo/almond-milk-food-vector-illustration_1029473-653677.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 42, name: 'Brown rice', price: '$3.00', image: 'https://img.freepik.com/premium-photo/stock-photo-brown-basmati-rice-raw-form-selective-focus_466689-56576.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 43, name: 'Plant-Based-Milk', price: '$3.00', image: 'https://img.freepik.com/premium-photo/world-plant-milk-day-background-concept-copy-space_1027753-2344.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 44, name: 'Vegan Cheese', price: '$3.00', image: 'https://img.freepik.com/premium-photo/brie-cheese-with-lettuce-leaf-ai-generated_469558-48571.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 45, name: 'Soy-Milk', price: '$3.00', image: 'https://img.freepik.com/free-vector/soy-milk-vector-realistic-product-placement-mock-up-label-design-milk-splash-3d-detailed_1268-18673.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 46, name: 'Vegan-Yogurt', price: '$3.00', image: 'https://img.freepik.com/premium-photo/yogurt-with-chia-seeds-walnuts-mint_1304645-31228.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 47, name: 'Avacado', price: '$3.00', image: 'https://img.freepik.com/free-psd/photo-open-avocado-isolated-transparent-background_125540-5151.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
  ],
  dairy: [
    { id: 48, name: 'Milk', price: '$1.10', image: 'https://img.freepik.com/premium-photo/cow-drinking-milk-from-glass-bottle-milk_1015384-187900.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 49, name: 'Yogurt', price: '$0.90', image: 'https://img.freepik.com/free-vector/realistic-set-two-blank-pots-with-open-foil-lids-plastic-containers-jars-with-spoons_1441-1852.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 50, name: 'Paneer', price: '$0.90', image: 'https://img.freepik.com/premium-photo/wooden-tray-with-some-cubes-butter-it_1275823-4464.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 51, name: 'Butter', price: '$0.90', image: 'https://img.freepik.com/premium-psd/butter-melted-butter-isolated-transparent-background_1268218-33663.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 52, name: 'Ghee', price: '$0.90', image: 'https://img.freepik.com/premium-photo/ghee-clarified-butter-hindu_1279508-11385.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 53, name: 'Smoothies', price: '$0.90', image: 'https://img.freepik.com/free-psd/fresh-smoothie-poster-template_23-2148581643.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 54, name: 'Ice-creams', price: '$0.90', image: 'https://img.freepik.com/free-vector/realistic-ice-cream-advertisement_52683-729.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 55, name: 'Butter-Milk', price: '$0.90', image: 'https://img.freepik.com/free-vector/vector-realistic-illustration-plastic-transparent-buckets-with-food-products_1441-535.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 56, name: 'Whipped Cream', price: '$0.90', image: 'https://img.freepik.com/premium-psd/whipped-cream-isolated-transparent-background_682379-1319.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 57, name: 'Frozen-Yogurt', price: '$0.90', image: 'https://img.freepik.com/free-vector/realistic-natural-yogurt-advertisement-background_52683-9570.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 58, name: 'Peanut Butter', price: '$0.90', image: 'https://img.freepik.com/premium-photo/peanut-butter-bowl_1234738-351054.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
  ],
  Sweets: [
    { id: 31, name: 'Gulab Jamun', price: '$1.75', image: 'https://img.freepik.com/premium-photo/gulab-jamun-bowl-copper-antique-bowl-with-spoon-indian-dessert-sweet-dish_463801-2229.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 32, name: 'Rasgulla', price: '$1.75', image: 'https://img.freepik.com/premium-photo/rasgulla-hindu_1278454-5039.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 33, name: 'Ras Mallai', price: '$1.75', image: 'https://media.istockphoto.com/id/1441840881/photo/appetizing-traditional-ras-malai-indian-sweet-dish-soft-paneer-balls-immersed-in-creamy-milk.jpg?b=1&s=612x612&w=0&k=20&c=oeYDlVMUvdXDVwofPBG344GZNeT1KLWKUfwRcvYYfII=' },
    { id: 34, name: 'Kaju Katli', price: '$1.75', image: 'https://img.freepik.com/premium-photo/mix-mithai-milk-made-sweets-indian-pakistani-festivals_466689-61550.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 35, name: 'Motichoor Laddoo', price: '$1.75', image: 'https://img.freepik.com/premium-vector/vector-illustration-indian-sweet-motichoor-ladoo-also-called-boondi-ladoo_560226-1118.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 36, name: 'Besan Laddoo', price: '$1.75', image: 'https://img.freepik.com/premium-photo/besan-ladoo-are-delicious-sweet-balls-made-with-gram-flour-sugar-ghee-cardamoms_466689-72124.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 37, name: 'Rava Laddoo', price: '$1.75', image: 'https://img.freepik.com/premium-photo/rava-laddu-semolina-laddoo-rawa-ladu-popular-sweet-dish-from-maharashtra-india_466689-42601.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 38, name: 'Jalebi', price: '$1.75', image: 'https://img.freepik.com/premium-photo/plate-carrots-with-words-z-it_591055-329.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 39, name: 'Balushahi', price: '$1.75', image: 'https://img.freepik.com/premium-photo/balushahi-badushah-mughlai-dish-is-traditional-indian-soft-flaky-dessert-sweet-food-also-popular-pakistan-bangladesh_466689-68.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 40, name: 'Kalakand', price: '$1.75', image: 'https://img.freepik.com/premium-photo/indian-milk-cake-kalakand-alwar-ka-mawa-sweet-served-plate_466689-71000.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 41, name: 'Shrikhand', price: '$1.75', image: 'https://img.freepik.com/premium-photo/shrikhand-with-poori-hindu_1279527-3425.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 42, name: 'Mango Shrikhand', price: '$1.75', image: 'https://img.freepik.com/premium-photo/amrakhand-is-alphonso-flavoured-yogurt-shrikhand-popular-indian-sweet-served-with-dry-fruits-saffron-with-whole-mango-fruit-colourful-background-selective-focus_466689-60588.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
    { id: 43, name: 'Imarti', price: '$1.75', image: 'https://img.freepik.com/premium-photo/jalebi-jilbi-imarati_1234738-363629.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },

],

ColdBeverage: [
            { id: 44, name: 'Iced Coffe', price: '$1.75', image: 'https://img.freepik.com/premium-photo/refreshing-iced-coffee-with-cream-swirl-tall-glass_35766-34228.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 45, name: 'Iced Tea', price: '$1.75', image: 'https://img.freepik.com/premium-photo/plastic-cup-iced-tea-with-ice-lemon-wedge-it_926796-5782.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 46, name: 'Lemonade', price: '$1.75', image: 'https://img.freepik.com/premium-photo/flavorful-fresh-mint-lemonade-isolated-white-background_787273-49367.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 47, name: 'Fruit Smoothies', price: '$1.75', image: 'https://img.freepik.com/premium-photo/bunch-different-fruits-glass-jar-with-strawberries-strawberries_1127442-1475.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 48, name: 'Milkshakes', price: '$1.75', image: 'https://img.freepik.com/premium-photo/three-desserts-with-strawberries-chocolate-wooden-table_1204495-20155.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 49, name: 'Cola', price: '$1.75', image: 'https://img.freepik.com/premium-photo/refreshing-cola-beverage-glass-with-ice-cubes-splattering_1311536-8046.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 25, name: 'Lemon-Lime Soda', price: '$1.75', image: 'https://img.freepik.com/premium-photo/glass-lemonade-with-lemons-limes-green-background_737852-93118.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 26, name: 'Root Beer', price: '$1.75', image: 'https://img.freepik.com/free-photo/oktoberfest-celebration-with-beer-still-life_23-2151639923.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 27, name: 'Orange Juice', price: '$1.75', image: 'https://img.freepik.com/free-photo/fresh-orange-juice-glass-dark-background_1150-45560.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 28, name: 'Apple Juice', price: '$1.75', image: 'https://img.freepik.com/premium-photo/refreshing-apple-juice-special-drink-template_640251-98474.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 25, name: 'Cranberry Juice', price: '$1.75', image: 'https://img.freepik.com/premium-photo/glass-red-liquid-with-words-cherries-it_1087825-21978.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 26, name: 'Mango Juice', price: '$1.75', image: 'https://img.freepik.com/premium-photo/glass-mango-banana-juice_1169880-144882.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 27, name: 'Pine Apple Juice', price: '$1.75', image: 'https://img.freepik.com/free-photo/delicious-pina-colada-cocktail-still-life_23-2150143235.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 28, name: 'Slushie', price: '$1.75', image: 'https://img.freepik.com/free-photo/colorful-milkshake-with-decoration_23-2148601286.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 26, name: 'Frappes', price: '$1.75', image:'https://img.freepik.com/premium-photo/tasty-coffee-frappes-isolated-white-background_787273-59417.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid'}
        ],
        HotBeverages: [
            { id: 24, name: 'Hot-Coffee', price: '$1.75', image: 'https://img.freepik.com/premium-photo/cup-coffee-with-words-coffee-it_1271802-14579.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 25, name: 'Black-Tea', price: '$1.75', image: 'https://img.freepik.com/premium-psd/black-tea-kawa-joshanda-with-transparent-background_1262389-3980.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 26, name: 'Green-Tea', price: '$1.75', image: 'https://img.freepik.com/premium-psd/cup-green-tea-transparent-background_1244891-12154.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 27, name: 'Herbal-Tea', price: '$1.75', image: 'https://img.freepik.com/premium-photo/cup-tea-with-tea-cinnamon-sticks-table_1204495-19814.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 28, name: 'Hot-Chocolate', price: '$1.75', image: 'https://img.freepik.com/premium-photo/steaming-cup-hot-cocoa-with-whipped-cream-top-surrounded-by-cinnamon-sticks-cookies-ai_344451-8256.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 29, name: 'Latte', price: '$1.75', image: 'https://img.freepik.com/premium-photo/cappuccino-white-background_1015182-31567.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 26, name: 'Chaii', price: '$1.75', image: 'https://img.freepik.com/premium-photo/indian-chai_1279579-14726.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 27, name: 'Mocha', price: '$1.75', image: 'https://img.freepik.com/free-photo/caramel-latte-with-chocolade-table_140725-4.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 28, name: 'Cappuccino', price: '$1.75', image: 'https://img.freepik.com/premium-psd/cappuccino-isolated-style-png-with-white-background-generative-ia_209190-254491.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
            { id: 29, name: 'Espresso', price: '$1.75', image: 'https://img.freepik.com/premium-photo/espresso-dark-background_974629-438170.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid' },
        ]
    
,

};
const Dashboard = () => {
    const { addToCart } = useCart();
    const [popupMessage, setPopupMessage] = useState('');
    const [activeComponent, setActiveComponent] = useState('products');

    const handleAddToCart = (product) => {
        addToCart(product);
        setPopupMessage(`${product.name} added to cart!`);

    
        setTimeout(() => {
            setPopupMessage('');
        }, 2000);
    };

    return (
        <div className="flex h-screen bg-cream-500">
           <aside className="w-64 bg-gradient-to-b from-orange-500 to-orange-300 shadow-md">
    <div className="p-4">
        <h2 className="text-2xl font-bold text-white">My Grocery Store</h2>
    </div>
    <nav className="mt-4">
        <ul className="space-y-2">
            <li>
                <Link to="/dashboard" className="block p-4 text-white hover:bg-orange-400" onClick={() => setActiveComponent('products')}>
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to="/cart" className="block p-4 text-white hover:bg-orange-400 flex items-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    Your Cart
                </Link>
            </li>
            <li>
                <button className="block w-full p-4 text-white hover:bg-orange-400 flex items-center" onClick={() => setActiveComponent('profile')}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    User Profile
                </button>
            </li>
            <li>
                <button className="block w-full p-4 text-white hover:bg-orange-400 flex items-center" onClick={() => setActiveComponent('settings')}>
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    Settings
                </button>
            </li>
        </ul>
    </nav>
</aside>
<div className="flex-1 p-6">
                <Banner 
                    imageUrl="https://img.freepik.com/free-vector/hand-drawn-grocery-store-facebook-cover_23-2151086740.jpg?ga=GA1.1.1620644891.1729238217&semt=ais_hybrid" 
                    altText="Fresh Groceries" 
                />

                <h1 className="text-3xl font-bold mb-4">Products</h1>

                {/* Popup Notification */}
                {popupMessage && (
                    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                        {popupMessage}
                    </div>
                )}

                {/* Render based on active component */}
                {activeComponent === 'products' && (
                    <div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {Object.entries(products).map(([category, items]) => (
                                <div key={category} className="bg-white p-4 rounded-lg shadow-md">
                                    <h2 className="text-xl font-semibold">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        {items.map(product => (
                                            <div key={product.id} className="border p-2 rounded-md flex flex-col items-center">
                                                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mb-2" />
                                                <span>{product.name}</span>
                                                <span className="text-lg font-bold">{product.price}</span>
                                                <button
                                                    onClick={() => handleAddToCart(product)}
                                                    className="mt-2 bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 transition"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeComponent === 'profile' && <UserProfile />}
                {activeComponent === 'settings' && <Settings />}
            </div>
        </div>
    );
};

export default Dashboard;