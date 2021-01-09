# Movie-Finder-App
A full-stack movie finder application that allows users to search for their favorite movies, add movies to their watchlist, and like or dislike movies.

![Image](https://github.com/smkattoula/smkattoula.github.io/blob/portfolio2021/assets/img/moviefinder.png)

## Installation 
Clone this repo to your text editor and `cd into the root folder`. In the command line, go ahead and run `npm install`. Afterwards, `cd into the frontend folder` and run `npm install` as well. This will install all of the dependacies for both server side and client side package.json. You can then `cd back into the root folder` and run `npm run dev` to start up the nodemon server (for real-time error handling) and the development server (to view the app in localhost on your browser). 

## System Requirement Specification (SRS)
### Overview
Movie Finder is a full-stack web application that aims to solve the problem of figuring out what to watch during movie nights. Movie Finder will allow you to quickly log into the app, search for any movie in the database and add that movie to your watchlist to refer back to later. No more wasting time trying to figure out what movie to watch. The next time someone suggests a good movie for you to see, log into Movie Finder and add that movie to your watchlist so that you won't forget about it! Movie Finder also shows you the latest and upcoming movies along with details for each movie so that you can quickly and easily find a good movie to enjoy. 

### Project Developer

**Shaker Kattoula - Full Stack Web Developer - shakerkattoula.com**

### Goal
* Develop a full-stack web application that fetches data from a third-party API.
* Demonstrate my understanding in the core fundamentals of full-stack web development. 
* Solve a real world problem by engineering a creative solution using code. 

### Phases
* Phase 1: Backend - Server initialization, connect MongoDB, create Models using an ODM(Mongoose) and REST API routes.
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
1. One challenge I had during this project was a CORS issue that wouldn't allow me to fetch data from the MovieDB API after I had added authentication middleware to the backend REST API's. The first solution I found was to add `https://cors-anywhere.herokuapp.com/` to the beginning of all MovieDB API fetch requests. It had worked, but the problem now was that fetching data from the MovieDB API became significantly slower. This is due to the fact that heroku's `cors-anywhere` is a proxy that adds CORS headers to requests. So in order to send a response to the client from the MovieDB API, the data first has to pass through heroku's `cors-anywhere` proxy which enables cross-origin requests to anywhere and THEN it is authorized to pass through to the client. In order to improve the speed of fetch calls, I decided to remove the `cors-anywhere` proxy all together and just rewrite the auth middleware to accept the correct authorization type: `Bearer Token` from the MovieDB API. Problem solved.
2. Another challenge I had during this project was when I tried to create two REST API's that would allow users to rate a movie by clicking a thumbs up or thumbs down button. The two biggest blockers I had when building these API's were the logic and my improper use of JavaScript methods. I broke the code A LOT but I was determined to figure it out. I spent 3 days researching and experimenting and I eventually was able to solve the problem. The logic is rather brute force, but it works. I had to account for 3 cases in my logic for both API's. If a user clicks the `like` button, the logic is as follows: `if like: 0, unlike: 1 ---> remove unlike and then add like || if like: 1, unlike: 0 ---> remove like || if like: 0, unlike: 0 ---> add like`. If a user clicks the dislike button, the same logic for liking a movie can be applied to disliking a movie, only the logic is reversed. Now, as far the Javascript method goes, I was having trouble getting the API to match the parameters of the movie and it was simply due to using the wrong method. Normally, I use findById to locate the URL parameters of an item, but since we're working with a third-party API, they use unique movie ID's as their endpoint for each movie instead of the `_id` we usually target when using MongoDB. I just needed to use the findOne method and specify the `movieId` object from the `ratings model` that I had created for rating movies.  
3. Let's talk syntax. A lot of headaches could have been avoided had I been a little more diligent about writing proper syntax. I'm usually pretty good about it, but sometimes we programmers make really small errors that are easy to overlook. It happens. Took me half a day to realize that the functions for my PUT requests weren't working because I had written them in the syntax for Redux, instead of the syntax for Context API. These two state managers are really similar so I got them mixed up when coding and eventually realized my mistake. Once I saw the PUT requests actually work when clicking the like or dislike button, I was really stoked! 

## What I learned and Ways to Improve
1. This project has definetly taught me a lot about how I solve problems and think about logic. I know for sure that I have improved significantly since my Ticket Tracker app that I deployed in August 2020. This is awesome because it shows that I have learned and upgraded my skills rather quickly, which is a good sign of progression. Here are some ways that I've improved my coding skills: This time around, I used an npm package called "express-validator" to handle all of my validations in the backend for the REST API's, making the code cleaner and more efficient. For my auth middleware, I specified the authorization type as: `Bearer Token`, which is a primary header used by client's for authentication, instead of: `x-auth-token`, which is an unregistered header and is not subject to the HTTP authentication framework. This also helped to solve a CORS issue when fetching data from the MovieDB API. I have also improved my web design skills comparative to the Ticket Tracker app. I used Bootstrap, Reactstrap, CSS and CSS Grids to style the UI and add media queries for responsiveness on all devices. Overall, my understanding of full-stack web development has improved in all areas. I have a better grasp on building REST API's, the state management process is becoming a lot more familiar and favorable for creating functions/actions and dispatching them to a reducer and then passing them down to components. Implementing CRUD functionality on the front-end and understanding the client-server relationship are now becoming solidfied concepts for me, and so much more. I'm really excited about it!
2. I know there is always room for improvement and I strive for continuous learning in the world of code (and life in general). Here are some ways that I can improve upon this project and future projects: There are some aspects of the user experience that I know can be improved. For instance, when a guest searches for a movie and clicks on a movie title to see more details, they have the option to add a movie to their watchlist or rate a movie but only if they are logged in as a user. Upon logging in, the application redirects to the home page and the user will have to search for their movie again in order to add it to their watchlist or to rate it. It would be much better to have the logged user redirected to the movie details page they were on prior to logging in so that they don't have to search for their movie again. Another aspect of the application that can be improved is preventing users from being able to add the same movie twice. While this is not a bug, it would certainly improve the user experience. Also, it was noted by others who have used my app that they would like to be able to click on a movie in the carousel on the home page and be redirected to that movie detail's page. Since I have built the carousel using Reactstrap, there are some limitations to what I can do with it. I am considering creating my own carousel from scratch and implementing the redirect feature that way. 
3. Of course, we are just scratching the surface with this application as there will always be ways to improve. However, as long as it's not a buggy mess, then I am happy with it (for now). At the very minimum, my goal was to create a full-stack web application from scratch that fetches data from a third-party API and incorperates full CRUD functionality. I'm really happy to say that I have succeed in this goal, but I am definitely going to return to this project and improve upon it as I continue to upgrade my skills in coding and web development!
