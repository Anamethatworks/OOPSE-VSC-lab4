import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('<a href="/quote">Get a quote</a>')
        self.write('for gambling go to http://localhost:8000/roullete')