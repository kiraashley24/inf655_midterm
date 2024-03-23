/*App.js: This is the main component where you set up your routing using react-router-dom. 
It defines routes for your different pages/components (HomePage, Products, ProductDetail, Cart), manages the cart state, and passes down necessary props to child components.

HomePage.js: This is a simple component for your home page. 

Header.js: This component renders the header/navigation for your application.

Products.js: This component renders a list of products (Product components) based on the 
data in ItemDescript.js. It receives the product data and a function to add items 
to the cart as props.

Product.js: This component represents a single product item. 
It displays the product's name, image, price, and provides an input field for the user 
to enter the quantity they wish to purchase. It also has an "Add to Cart" button.

ProductDetail.js: This component is intended to display detailed information about a 
specific product. However, it's currently empty in your project.

Cart.js (under pages): This component is supposed to display the items in the cart, 
including their names, prices, and descriptions. It's using the ItemDescript data to 
render the items, but since ItemDescript is now being used for the products, 
it's causing an error.

CartComponent.js (under components): This component is intended to handle the 
functionality of the shopping cart, including adding and removing items. 
It receives the cart items and a function to remove items as props.

ItemDescript.js: This file contains an array of objects, each representing a product item. 
It's used to populate the products in the Products component.

Cart.js (under components): This component is supposed to display the items in the cart, 
including their names, prices, and descriptions. It's using the ItemDescript data to render 
the items, but since ItemDescript is now being used for the products, it's causing an error.

AddToCart.js: This component provides a form for users to enter a product name and price. 
It's not currently being used in your project.*/