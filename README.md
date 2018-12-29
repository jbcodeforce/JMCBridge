# Jmcbridge

A web app to support educating on Bridge contract game

## TODO
* [x] Serve angular app with Flask - 
* [ ] Create API end point for the current bidding service so data comes from backend
* [x] Add CORS to flask - run flask in continuous debug
* [ ] Create first lesson for opening at 1 trick: this will be a set of markdown files and popup dialog with next
* [ ] Dockerize and deploy to IKS or cloud foundry 
* [ ] Load lessons from files in the data folder and exposed as json objets

## UI Development 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the angular project. The build artifacts will be stored in the `server/public` directory. Use the `--prod` flag for a production build.

To build the Flask application: `python3 server.py`. 

### Coding tricks

* To use Cors with flask and angular, first integrate [flask-cors module](https://flask-cors.readthedocs.io/en/latest) into the flask server. Use `pip install -U flask-cors` or add to the requirements.txt. 
 ```
 @cross_origin()
 def biddings(category):

 ```
 Then start the server, and use the base URL: http://localhost:5000/api in the Angular services.