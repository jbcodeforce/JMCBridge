import json

# Read biddings exercices

    
# Return the list of bidding lessons for the given category
def getTutorialByCategory(category):
    f = open('./data/bidding/opening-tutorials.json')
    l = json.load(f)
    print(l)
    return l

def getExercisesByCategory(category):
    f = open('./data/bidding/opening-exercises.json')
    l = json.load(f)
    return l
