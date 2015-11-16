import datetime
import json
import random
from bottle import route, run, static_file,request


@route('/people')
def index():
    data = []
    name = request.query['name']
    for i in range(1):
        info = {'name': name, 'age': random.randint(1, 12),
                'updated_at': datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%s")}
        data.append(info)
    return json.dumps(data)


@route('/static/<path:path>')
def callback(path):
    return static_file(path, '.')


@route('/<path:path>')
def html(path):
    return static_file(path, '.')

run(host='localhost', port=8080)
