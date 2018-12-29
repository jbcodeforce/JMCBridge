from services import Biddings
import unittest

class TestReadLessons(unittest.TestCase):

    def test(self):
        l = Biddings.getLessonsByCategory("opening")
        self.assertTrue(len(l) >= 1)
        self.assertTrue(l[0]["id"] == "o1")
        self.assertTrue(len(l[0]["exercises"]) >= 1)
        self.assertTrue(l[0]["exercises"][0]["id"] == 1)
        print(l)


if __name__ == '__main__':
    unittest.main()