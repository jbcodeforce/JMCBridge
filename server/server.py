from flask import Flask,render_template,jsonify,json
from flask_cors import CORS, cross_origin
from services import Biddings

app = Flask(__name__,template_folder="./public", static_folder="./public", static_url_path='')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def hello():
    return render_template('index.html')

# For the given user returns the list of lessons available for the given category. 
@app.route('/api/biddings/lessons/<category>', methods = ['GET'])


@app.route('/api/biddings/lessons/<category>', methods = ['GET'])
@cross_origin()
def getLessonsByCategory(category):
    print(category)
    return jsonify(Biddings.getLessonsByCategory(category))



if __name__ == "__main__":
    # bind to host to be accessible outside of the container while running in docker
    app.run(host='0.0.0.0')