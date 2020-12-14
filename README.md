This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project Summary:

This is a Web App created with React, and several NPM packages. I designed this app using a mix of my own CSS and Material-UI Componanats. The goal was to learn the basics of React as well as get into the Hooks used to make Functional Compontants Stateful. 

I got data from the [Trefle API](https://trefle.io/). Because of this, please click [here](https://alfilatov.com/posts/run-chrome-without-cors/) to see how to get the web app to run on Chrome 

### Context API: 

In the folder "contexts," I have the 2 Componants that use the Context API, to allow communications between different componants using props. 

## Plant Context: 

The Plant Context Componant gets data from the Trefle API so that it can be displayed on the app. I used and async fuction and axios to do this. 

## AuthContext: 

This Componant is used to store login informaiton form the login componant. I have begun to integrate Firebase into this componant for a Sign Up page, but it is not yet done. I imported the Firebase componant from the "lib" folder. 

### Forms for Input Validation:

## Login

I have the Login Componant working with the AuthContext Componant. I used Formik and Yup for validation, and important the AuthContext API so that information would be stored. This has a CSS Transition from Material UI to bring the Dialog up from the bottom.  

## Sign Up

This would be my first attempt at storing sign up information in Firebase. I am not quite finished with this yet as I had run into issues with validation from Formik and Yup. The Sign Up Page is still a route, but it currently does not have any validation. 

### Other Componants: 

I have added about 8 other Compnants to this and have finished about 5 of those. I have a few routes created for these componants, and I will list which pages are the routes, and which componants work with them. The Sign Up Compnant is also a route. All routes have a transition added to them whenever a route is switched. 

## Plant List Page: 

I had three componants created for the Plant List Page: The Plant List which maps the data received from the Plant Conext API, and the Plant Card which styles the list into cards are completed. I have the Drawer Compnant added, but nothing has been done with it yet. It is the plan to add filtering to this so certain kinds of plants can be selected at once. For now, all you will see is the cards. 

### Layout: 

This Componant has the links for the routes. Currently only the App Bar is in this layout, which main design is from material UI. I added a background image that I took myself onto the background of the App Bar. It is in future plans to add a search bar to this app on the app bar. 

### Homepage:

This is under construction: I would like to add a home page that will desplay information form the weather API from GraphQL, as well as some featured plants, and news. 

### Favorites: 

This is also under construction: I would have liked this componanat to show up when logged in or signed up, and to be able to add a favorites button to the cards in the Plant Card componant. I would use Firebase's FireStore for this.

### Summing it up: 

This is an incomplete project, which I hope to finish.

