from flask import Flask, request, jsonify
from database_access import save_new_contact

app = Flask(__name__)
port = 3000


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/contacts/newContact', methods=['POST'])
def new_contact():
    data = request.get_json()
    username = data['username']
    contact = data['contact']
    if save_new_contact(username, contact):
        return jsonify({"message": "User Added successfully"}), 201
    else:
        return jsonify({"message": "Unable to add the user"}), 500


@app.route('/contacts', methods=['GET'])
def get_all_contacts():
    username = request.args.get('username')
    return jsonify({"contacts": get_all_contacts(username)})


@app.route('/contact', methods=['GET'])
def get_one_contact():
    contact_id = request.args.get('contact_id')
    return jsonify({"contact": get_one_contact(contact_id)})


if __name__ == '__main__':
    app.run()
