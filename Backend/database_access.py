import uuid
from pymongo.mongo_client import MongoClient
import dotenv
import os

dotenv.load_dotenv()
uri = os.getenv("MONGODB_URI")

# Create a new client and connect to the server
client = MongoClient(uri)

# Create a new client and connect to the server
db = client["hackathon"]
collection = db["contacts"]

def save_new_contact(username, contact):
    try:
        uuid_str = str(uuid.uuid4())
        contact["_id"] = username+ uuid_str
        contact["id"] = uuid_str
        contact["conversation_history"] = []
        print(contact)
        collection.insert_one(contact)
        return True
    except Exception as e:
        print(e)
        return False


def get_all_contacts(username):
    try:
        result = collection.find({"_id": {"$regex": "^" + username}})
        contacts = []
        for contact in result:
            contacts.append(contact)
        return contacts
    except Exception as e:
        print(e)
        return None


def get_contact(contact_id):
    try:
        contact = collection.find_one({"id": contact_id })
        return contact
    except Exception as e:
        print(e)
        return None


def delete_contact(contact_id):
    try:
        collection.delete_one({ "_id": contact_id })
    except Exception as e:
        print(e)


def update_conversation(contact_id, conversation):
    try:
        collection.update_one({ "id": contact_id}, {"$set": { "conversation_history": conversation}})
        return get_contact(contact_id)
    except Exception as e:
        print(e)
        raise e
