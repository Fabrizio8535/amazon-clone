---------------------------------------------Header-----------------------------------------

- Created the header functional component.
- Created the header html tag in JSX.
- In the Header.js, Created items such as Amazon logo, search bar, and other items that are present in the Amazon navbar. Also gave them appropriate classNames using the BEM naming convention.
- Then created the Header.css file.
- Designed the .header and .header__logo in the css file.
- Installed the material ui into the project using 
	1) "npm install @material-ui/core"
	2) "npm install @material-ui/icons"
	3) https://material-ui.com/components/material-icons/ for icons 
-Imported the SearchIcon and used it in the JSX of the Header (<SearchIcon /> with a className)
-Finished designing the header using flex, margins and shopping basket icon.

-----------------------------------------------Home----------------------------------------
-Created the Home functional component
- Imported it into App.css
- Then added the image that is usually on the amazon home section. Styled it so it looks cool. Used the width, z-index, margin-bottom and mask-image properties on CSS.
- Created three "home__row" divs inside the "home__container".
- Created a Product functional Component. Imported it into home.css so that it can be used into the "home__row".
--Styled the Product components such as its title, price, image and buttons on Product.css
- Styled the Home Component in the Home.css (.home, .home__row)

--Introduced using props.
- In Product.js, we passed the attributes as the function parameters ({id, rating, title, price, image}) and used it in the JSX (For example - <p>{title}</p>)
- In Home.js, we assigned values to each of the attributes (<Product id="12345671" rating= {4} title="The lean startup" price = {29.99} image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>)
- Then styled the 'product__rating' class in Product.css file so it flexes.
- Then populated the products in Home.js.
(React Router Introduction)
- Installed the React router  on the terminal using the "npm install react-router-dom".
-Imported all necessary routes in App and wrapped main div inside the <Router></Router> tag.
-Used the Switch and Route Tags inside the Router Tag and performed a simple route check to the "/checkout" page.

-------Checkout Component------
- Created the "checkout__left" div and put an ad image. (Resized it in Checkout.CSS). Added the "checkout__title" so the shopping basket item goes on there and styled it. Finally, added the checkout__right div for subtotal section (not styled yet).
- Surrounded the amazon logo image with the <Link></Link> tag and specified the 'to' property to "/" (This will redirect users to the home page when clicked on the main logo).
- Same process as surrounded the ShoppingBasket icon with the Link tag.

(Here is when I pushed to the Github repository)

- Added the Subtotal component on the Checkout component. Added all its imports and created a css for it too.
- Used the command "npm i react-currency-format" so we can render money in an easy manner.
-Used the CurrencyFormat tag on the subtotal component to render out money. Styled the whole subtotal section in Subtotal.css.