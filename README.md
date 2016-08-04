Registerer
===========

Requirements
------------

To install and run this application you need:

- Python3 
- Node
- Mongodb

Installation
------------

backend with virtual env

    $ python -m venv venv
    $ source venv/bin/activate
    (venv) pip install -r requirements.txt
    
    
backend without virtual env

    make sure you have the all the dependencies in the file requirements.txt
    

frontend

    $ npm install
    

Launch 
------------

Dev
    
    $ npm start
    $ mongod
    $ cd server
    $ python app.py
    
Prod
    make sure the app is in production (check the settings.py file)
    
    $ npm run build
    $ mongod
    $ cd server
    $ python app.py
