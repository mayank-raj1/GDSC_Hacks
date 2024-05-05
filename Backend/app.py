from flask import Flask, request, jsonify
from flask_cors import CORS
import model_chat
import database_access

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])
port = 3000
# Initialize CORS for the app

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/contacts/newContact', methods=['POST'])
def new_contact():
    data = request.get_json()
    username = data['username']
    contact = data['contact']
    contact["profile"] = model_chat.summarize_resume(contact["context"])
    if database_access.save_new_contact(username, contact):
        return jsonify({"message": "User Added successfully"}), 201
    else:
        return jsonify({"message": "Unable to add the user"}), 500


@app.route('/contacts', methods=['GET'])
def get_all_contacts():
    username = request.args.get('username')
    response = jsonify({"contacts": database_access.get_all_contacts(username)})
    return response


@app.route('/contact', methods=['GET'])
def get_one_contact():
    contact_id = request.args.get('contact_id')
    return jsonify({"contact": database_access.get_one_contact(contact_id)})


@app.route('/cold_message', methods=['POST'])
def cold_message():
    data = request.get_json()
    contact = data['contact']
    chat_history = data['chat_history']
    if "query" in data:
        query = data['query']
        return model_chat.generate_cold_message(contact=contact, chat_history=chat_history, query=query)
    else:
        return model_chat.generate_cold_message(contact=contact, chat_history=chat_history)


@app.route('/generate_send_message', methods=['POST'])
def send_message_generate():
    data = request.get_json()
    contact = data['contact']
    chat_history = data['chat_history']
    if "query" in data:
        query = data['query']
        return model_chat.generate_send_message(contact=contact, chat_history=chat_history, query=query)
    else:
        return model_chat.generate_send_message(contact=contact, chat_history=chat_history)


@app.route('/generate_send_message', methods=['POST'])
def send_message_refine():
    data = request.get_json()
    contact = data['contact']
    chat_history = data['chat_history']
    if "query" in data:
        query = data['query']
        return model_chat.generate_send_message(contact=contact, chat_history=chat_history, query=query)
    else:
        return model_chat.generate_send_message(contact=contact, chat_history=chat_history)


@app.route("/sendMessage", methods=['POST'])
def sendMessage():
    data = request.get_json()
    contact_id = data['contact_id']
    chat_history = data['chat_history']
    model_history = data['model_history']
    contact = database_access.get_contact(contact_id)
    if "query" in data:
        chat_history.append(data['query'])
        answer = model_chat.generate_cold_message(contact=contact, chat_history=model_history)
        model_history = answer["chat_history"]
        chat_history.append(answer["response"])
    else:
        if len(contact["conversation_history"]) == 0:
            answer = model_chat.generate_cold_message(contact=contact, chat_history=model_history)
            model_history = answer["chat_history"]
            chat_history.append(answer["response"])
        else:
            answer = model_chat.generate_send_message(contact=contact, chat_history=model_history)
            model_history = answer["chat_history"]
            chat_history.append(answer["response"])

    return jsonify({
        'chat_history': chat_history,
        'model_history': model_history
    })



@app.route('/update_conversation_sender', methods=['POST'])
def update_conversation_sender():
    data = request.get_json()
    contact_id = data['contact_id']
    message = data['message']
    contact = database_access.get_contact(contact_id)
    contact["conversation_history"].append({'sender': contact["name"], 'text': message})
    database_access.update_conversation(contact_id, contact["conversation_history"])

    return jsonify({'conversation_history': contact["conversation_history"]})



if __name__ == '__main__':
    app.run(port=3000)
