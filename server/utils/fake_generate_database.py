import bcrypt
import faker
import json
from pymongo import MongoClient
from collections import OrderedDict

USER_COUNT = 1

fake = faker.Faker()

client = MongoClient('localhost:27017')
db = client['registerer']


def create_user():
    global USER_COUNT
    username = 'user{}'.format(USER_COUNT)
    USER_COUNT += 1
    password = bcrypt.hashpw(b'password', bcrypt.gensalt()).decode()
    email = fake.email()

    return {
        'email': email,
        'password': password,
        'username': username,
    }


def create_multiple(callback, count=10):
    return [callback() for i in range(count)]


def fill(name, data):
    db[name].drop()
    db[name].insert_many(data)
    print('{} was written'.format(name))


def write_data_to_json(data, filename):
    data_json = json.dumps(
        data, sort_keys=True, indent=2, separators=(',', ':'))
    with open(filename, 'w') as f:
        f.write(data_json)


def create(data):
    for name, (callback, count) in data.items():
        multiple_data = create_multiple(callback, count)
        fill(name, multiple_data)

    print('\n-------------------------------\n')
    print('Creation of databases is ternimated')


def create_fill():
    data = (('users', (create_user, 10)), )
    orderedData = OrderedDict(data)
    create(orderedData)


def main():
    create_fill()


if __name__ == '__main__':
    main()
