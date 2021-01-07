# Movie-Finder-App
A full-stack movie finder application that allows users to search for their favorite movies, add movies to their watchlist, and like or dislike movies.

![Image](https://github.com/smkattoula/smkattoula.github.io/blob/portfolio2021/assets/img/moviefinder.png)

## Installation 
Clone this repo to your text editor and `cd into the root folder`. In the command line, go ahead and run `npm install`. Afterwards, `cd into the frontend folder` and run `npm install` as well. This will install all of the dependacies for both server side and client side package.json. You can then `cd back into the root folder` and run `npm run dev` to start up the nodemon server (for real-time error handling) and the development server (to view the app in localhost on your browser). 

## System Requirement Specification (SRS)
### Overview
Movie Finder is a full-stack web application that aims to solve the problem of figuring out what to watch next during movie nights. How many times have you had a friend recommend a movie to you that you say you will "for sure check it out" but only to end up forgetting about it? Or how about those times when you and your significant other spend at least 20 minutes scrolling through Netflix just trying to find a good movie to watch? Don't let your popcorn get cold! Use Movie Finder! Movie Finder will allow you to quickly log into the app, search for any movie in the database and add that movie to your watchlist to refer back to later. No more wasting time trying to figure out what movie to watch. The next time someone suggests a good movie for you to see, log into Movie Finder and add that movie to your watchlist so that you won't forget about it! Movie Finder also shows you the latest and upcoming movies along with details for each movie so that you can quickly and easily find a good movie to enjoy. 

### Project Developer

**Shaker Kattoula - Full Stack Web Developer - shakerkattoula.com**

### Goal
* Develop a full-stack web application that fetches data from a third-party API.
* Demonstrate my understanding in the core fundamentals of full-stack web development. 
* Solve a real world problem by engineering creative solutions using code. 

### Phases
* Phase 1: Backend - Server initialization, MongoDB with Models using an ODM(Mongoose) and REST API routes.
* Phase 2: Frontend - Create React App, UI/UX design with CSS and Bootstrap/Reactstrap, CRUD functionality, State Management(Context API).
* Phase 3: User Authentication - JSON Web Token(JWT), bcryptJS, form validations, error handling, auth middleware.
* Phase 4: Review - Debugging, refactoring, improvements, and documentation.
* Phase 5: Deployment - Prepare build and deploy to Heroku.

### User Stories
* As a guest, I WANT to be able to search for any movie in the database by typing a movie name in the search bar and get a list of movies based on my search term.
* As a guest, I WANT to be able to click on any movie title and see the details of that movie(name, description, release date and director).
* As a guest, I WANT to be able to see a list of the latest movies on the front page and be able to click a button to load more movies.


* As a user, I WANT to be able to register my own account with a name, email and password.
* As a user, I WANT to be able to log into my own account with my email and password.
* As a user, I WANT to be able to log out of my own account.
* As a user, I WANT to to be able to click a button to add a movie to my watchlist.
* As a user, I WANT to be able to access my watchlist and see the list of movies that I've added. 
* As a user, I WANT to be able able to delete a movie from my watchlist.
* As a user, I WANT to be able to rate a movie by liking or disliking it. 

## Blockers and Challenges
1. One challenge I had during this project was a CORS issue that wouldn't allow me to fetch data from the MovieDB API after I had added authentication middleware to the backend REST API's. The first solution I found was to add `https://cors-anywhere.herokuapp.com/` to the beginning of all MovieDB API fetch requests. It had worked, but the problem now was that fetching data from the MovieDB API became significantly slower. This is due to the fact that heroku's `cors-anywhere` is a proxy that adds CORS headers to requests. So in order to send a response to the client from the MovieDB API, the data first has to pass through heroku's `cors-anywhere` proxy which enables CORS in the header of the request and THEN it is authorized to pass through to the client. In order to improve the speed of fetch calls, I decided to remove the `cors-anywhere` proxy and just rewrite the auth middleware to accept the correct authorization type: `Bearer Token` from the MovieDB API. Problem solved!
2.
3.
## Ways to Improve and Future Updates
1.
2.
3. 

