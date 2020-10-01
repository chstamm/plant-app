This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### API: 

I took the API from a Starwars Ships JSON file, and imported it into both components of my ship-app

## Components I Used:
* Functional: 
    * Header.js
* Class:
    * Starship.js

## Header.js

The goal in my Header component was to display the most expensive ship, as well as how many ships could be for sale. Here are the array methods used: <br>
* Filter: got rid of the ships that didn't have a price.
* Reduce: located the most expensive ship out of all the objects in the ships JSON. <br>

I used .length to show how many ship object there were in the JSON Array

## Starship.js

The goal with the the Starship component was to make ship cards in order from the cheepest to the most expensive. Here are the arry methods used:

* Filter: again, to get rid of the ships that didn't have a price, since it was messing with my parsing. 
* Sort: to sort ships from the least expensive to the most expensive
* Map: to loop through all objects so I would be able to display them in the DOM. <br>

I also wanted to show images, and I found again the website that had images, and took from the API. I had to figure out how to get everything to line up with the URL provided in the API as well as the URL of the images. 
