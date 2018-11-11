  CATALOG Application: it's a real simple exemple of React application that we use redux/axios/react router




Getting started

To get the frontend running locally:

Clone this repo
npm install to install all req'd dependencies
npm start to start the local server (this project uses create-react-app)
Local web server will use standard React's port 3000. 

Making requests to the backend API
For convenience, we have a live API server running at https://jsonplaceholder.typicode.com/for the application to make requests against. 


Functionality overview
The example application is a Catalogue site (i.e. a  called "mycatalogue". It uses a cAPI for get requests,

General functionality:
GET and display paginated lists of albums
GET and display paginated lists of images for desired album /add to favorite
display desired image add to favorite
Favorite images display paginated favorite lists of images

The general project breakdown looks like this:
1-folder:Components:
-HomePage witch  display all lists of albums using albumcard component

-Photolist witch  display all lists of images using PhotoCard component


-wishlist witch  display all lists of wished images using wishcard component

-Phototodeplay witch desplay the desired photo from photolist

navbar/footer/hoc optional component for the design of our application

2-folder store: contain all Reducers for our application

-albumsreducer for lists of albums

-albumreduer for photolist of specifique album

-wishlistreducer fir wishlist

-store where we configurate our store

3-folder: images witch contain all list of image used for styling

4-Route where we define lists of routes

5-index the container component

--->The general project structure looks like this:


*public*
|---/images
├── */src/*
│   ├── */Components* all components
│   ├── */store* redux reducers
│   ├── *Routes.js* front-end routes      
│   │
│   └──*index.js* javascript entry point
│   
│
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
│
└── *README.md* this file

the application is based On:
creacte-react-app react-router Redux axios inline style npm webpack container components stateless components


