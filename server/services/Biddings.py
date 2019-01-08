import json

# Read biddings exercices

    
# Return the list of bidding lessons for the given category
def getLessonsByCategory(category):
    f = open('./data/bidding/opening-lessons.json')
    l = json.load(f)
    print(l)
    return l

