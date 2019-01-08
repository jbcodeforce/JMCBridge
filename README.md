# Jmcbridge

A web app to support educating on Bridge contract card game with the major by 5 method.

## TO DO

* [x] Serve angular app with Flask - 
* [x] Create API end point for the current bidding service so data comes from backend
* [x] Add CORS to flask - run flask in continuous debug
* [ ] Create first lesson for opening at 1 trick: this will be a set of markdown files and popup dialog with navigation buttons
* [ ] Dockerize and deploy to IKS or cloud foundry 
* [x] Load lesson exercises from files in the data folder and exposed as json objets
* [ ] Merge user data into exercise for completion and next exercise
* [ ] UI with canvas to navigate exercises
* [ ] Organize the exercises so they can be easily merged and developed inside data folder. 

## UI Development 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `python3 server.py` for the flask web server. The UI can access the APIs using CORS or the UI can be served by the flask app. `http://localhost:5000` 

## Build

Run `ng build` to build the angular project. The build artifacts will be stored in the `server/public` directory. Use the `--prod` flag for a production build.

To build the Flask application: `python3 server.py`. 

## Deploy

A dockerfile is under server folder. `docker build -t jbcodeforce/jmcbridge .`
### Coding tricks

* To use Cors with flask and angular, first integrate [flask-cors module](https://flask-cors.readthedocs.io/en/latest) into the flask server. Use `pip install -U flask-cors` or add to the requirements.txt. 
 ```
 @cross_origin()
 def biddings(category):

 ```
 Then start the server, and use the base URL: http://localhost:5000/api in the Angular services.