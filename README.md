# MERN-TraversyMedia
MERN stack course from Traversy Media

M -> MongoDb    - NoSQL database
E -> Express    - Backend framework (used mostly for building APIs)
R -> React      - Frontend UI library/framework
N -> NodeJs     - JavaScript runtime (use JS as server side language)

extra - ReactStrap, React transition group

### Folders
config -> for URIs
model -> model for the database
routes -> for all routes
       -> api -> api routes return json
client1 is the working directory in this project
client -> client side apps (react) -> npm i -g create-react-app -> create-react-app
              when we make requests via react we use axios
              axios.get() -> add a proxy value in package.json
       use concurrently to run the server and xlient together
       delete these files after setting up react -> logo.svg,index.css,app.css (css),index.js -> index.css, app.js change