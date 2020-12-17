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

--Introducing the React Context API
- Added StateProvider.js
- Wrapped the App component in Index.js around the <StateProvider initialState ={initialState} reducer ={reducer}> tag.
- Added a reducer.js file and then initialized the initial state and a reducer which helpes push the item to the basket.
- In Product.js, Added an onclick on the 'Add to Basket' button then created the addToBasket function along with the "const [{basket}, dispatch] = useStateValue()"" along with its imports. This function uses the reducer to push the items to the basket
- In Header.js, used the "const [{basket}, dispatch] = useStateValue()" for dynamically updating the number of items in the basket using {basket?.length} 
- In reducer.js, created a function called getBasketTotal that returns the 
total price of the items in the basket.
-In Subtotal.js, pulled the getBasketTotal function and used it in the value property and rendered it in renderText.

(Displaying the items that were added to the basket in checkout screen)
-Created CheckoutProduct.js
-Passed as props {id, title, price, image, rating} to the CheckoutProduct.
These attributes will be used to display the basket item on the checkout screen.
-Styling the elements in the checkout screen in CheckoutProduct.css
-Made the RemoveFromBasket button work on the CheckoutProduct by adding an
onClick function which dispatches the 'REMOVE_FROM_BASKET' case to
reducer.js.

-----------------User Register and Login---------------------
-Implemented the Login Page UI logic using forms and routes
- Styled the login page in Login.CSS
- Went to firebase and enabled the Email & Password under 
"Authentication" section
- Used the "npm install firebase" command in terminal to install
firebase into our project
- In firebase.js, implemented the ability to access db and auth from firebase
and exported them both so it can be accessed in other components
- Then in Login.js, imported the "auth" from firebase.js. Also
implemented the "auth" feature on register function.
-In Login.js, Imported the useHistory from "react-router-dom"
- Implemented the redirecting upon successful signup and login.
User get redirected to the main page of the application.

-Added a new state called user = null (initial value) in reducer.js
- added the set_user functionality that will set the users coming
from the login page. 
-In App.js, created an useEffect (when App component mounts) to
implement the sign in/sign out feature:
If logged in, it dispatches the 'SET_USER' request with
user as 'authUser' else dispatches 'SET_USER' with user as 'null'. 
- In Header.js, fixed a few things so UI looks better such as 
distinguishing between whether a user is logged in or not (by using 
conditional rendering.)

---------------Deploying the app online-----------------
- using "firebase login" on cmd admin mode
- using "firebase init" on cmd admin mode
--- choosing the "hosting" option, saying "build" on the question
"what do you want to in project" then types "y" on "index.html" option
finally, pressing y on "set automatic builds to github"
- using "npm run build" on cmd admin mode
-using "firebase deploy" on cmd admin mode

--This is for the homework--- applying "react flip move animation"
found on "https://github.com/joshwcomeau/react-flip-move"
(completed)
--Added hover effect on products in Home page


---------------Payment/Checkout Page-------------------
-Introducing useHistory on Subtotal.js for redirecting user to Payment/
Checkout Page. Using history allows us to keep the button's styles.
-Creating Payment.js using divs and interactive links.
-Styling in Payment.css using flexboxes.

--------------Stripe functionality---------------------
-Install Stripe dependencies to handle payments
a) npm install @stripe/stripe-js
b) npm install @stripe/react-stripe-js
-Upgrade Firebase plan to Blaze to be able to make outgoing requests(done)
-Create account on Stripe.com and get the public API key
- Perform two imports on App.js
a)import { loadStripe } from '@stripe/stripe-js'
b)import { Elements } from '@stripe/react-stripe-js'
- then const promise = loadStripe('PublicApiKeyHere')
- In App.js, wrap <Payment />like the following:
<Elements stripe={promise}>
	<Payment />
</Elements>
-In Payment.js, using useStripe() and useElements()... so add imports
-Also import the CardElement along with those two as we will be using this
later.
-Now create a form and have <CardElement/> insisde it under the payment__details section
-Add the .payment__details on flex-0.8 so the card form appears on screen.
-Introduce handleChange and handleSubmit functions
-Adding div inside the form with "payment__priceContainer" and
CurrencyFormat on it.
-Setting states for "error, disabled, processing and succeeded
-Complete the handleChange function
-Introduce useEffect and initialize "clientSecret" state so we can
retrieve the latest client secret each time the basket updates.
- Use "npm i axios" to import the axios dependencies
-Create a new file called "axios.js" (the base url is "..." at the moment
which will be changed later)
-After axios.js, complete the useEffect() and get the clientSecret.
- then use that clientSecret to complete the handleSubmit


------------------------BACKEND-----------------------------------
---- Type "firebase init" on cmd but this time choose the "Functions"
and select Javascript, press Yes on both options..
- Now we should have a different directory called "functions" so
FROM NOW ON ALWAYS USE NPM INSTALL INSIDE THIS DIRECTORY... very IMPORTANT
- use command "npm i express" inside the functions directory.
- use command "npm i cors" inside the functions directory.
- use command "npm i stripe" inside the functions directory.
-Add requires for all three and the stripe one will contain the secret key..
-Finishing setting up the API thingy in index.js on functions directory
- To run it on localhost, run "firebase emulators:start" on cmd
- Get that link("http://localhost:5001/challenge-1e59f/us-central1/api")
and test whether the API call works... should get the response
-- Now do the POST request for the api after the GET request.
- Go to axios and paste the base url into it ("http://localhost:5001/challenge-1e59f/us-central1/api")

--------FIX THAT ERROR WITH LOCALHOST://3000 THING ASAP