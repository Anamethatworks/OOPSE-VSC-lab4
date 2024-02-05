import asyncio
import os, os.path
import tornado.web
import Index, Quote, TemplateTest, ExampleUsers, RoulleteLab1v1

HTMLDIR = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "html"
    )
)


def makeApp():
    endpoints=[
        ("/",Index.Handler),
        ("/quote",Quote.Handler),
        ("/fancy",TemplateTest.Handler),
        ("/profile/.*",ExampleUsers.Handler),
        ("/roullete", RoulleteLab1v1.Handler)
    ]
    app = tornado.web.Application(
        endpoints,
        static_path=HTMLDIR
    )
    app.listen(8000)
    print("Point your browser to http://localhost:8000")
    return app

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()

    