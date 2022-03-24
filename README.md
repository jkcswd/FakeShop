# FakeShop
An example shop built using React and React-Router-Dom. The app consumes the fake store API to get example product data to display on the app.

- [Access a live version of the app here.](https://fakeshop-8ba44.firebaseapp.com/)

## Demo
![FakeShop Demo](https://github.com/jkcswd/FakeShop/blob/main/README/Demo.gif)

## Tech
- React
- React-Router-Dom

## Functionality 
- User can see all items in the shop on one page.
- User can add items to basket specifying quantity.
- User can alter the ammount of items in the basket.
- Loading display while API fetches.

## Design
- React router DOM is used to create client side routes for the sepperate pages including dynamic routing for the individual products.
- The data from the API is retrieved and then stored in the top level component's state then passed down via props.
- The basket is stored in the top level compnent's state with callback functions passed down to components triggering changes.

## Reflections
This project helped me to solidify my knowledge of functional React, API consumption in React and how client side routing works.
