import json
from bottle import route, run, static_file

@route('/hello')
def index():
    return json.dumps({'name': 'lsl', 'passwd': '123456'})

@route('/static/<path:path>')
def callback(path):
    return static_file(path, '.')

@route('/6.html')
def t6():
    return static_file('6.html', '.')

run(host='localhost', port=8080)
