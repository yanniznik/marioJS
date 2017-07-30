from bottle import route, run, template
@route('/')
def index():
    return template("index.html")
def main():
 run(host='localhost', port=7000)

@route('/js/<filename:re:.*\.js>', method='GET')
def javascripts(filename):
    return static_file(filename, root='assets')
@route('/css/<filename:re:.*\.css>', method='GET')
def stylesheets(filename):
    return static_file(filename, root='assets')
@route('/images/<filename:re:.*\.(jpg|png|gif|ico)>', method='GET')
def images(filename):
    return static_file(filename, root='assets')
if __name__ == '__main__':
 main()