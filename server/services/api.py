
from server import app;
import json

'''
Search the lessons for the given category. 
Return the list of lessons
'''
@app.route('/api/biddings/lessons/<category>', methods = ['GET'])
def getLessonsByCategory(category):
    f = open('../../data/bidding/opening-lessons.json')
    l = json.load(f)
    return l