from google.generativeai.types import content_types
from langchain_core.prompts import ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
import google.generativeai as genai
import dotenv

RESUME_SUMMARIZATION_TEMPLATE = """You are an experienced career coach with over 20 years of experience
Based on the following LinkedIn profile, could you please generate a summary of this person's career accomplishments and highlight their top three achievements in list format.
Please provide as much detail as possible, including relevant experiences, skills, and accomplishments that showcase the person's expertise in their field, under 350 words
Here's their profile: {profile}"""

COLD_MESSAGE_SYSTEM_TEMPLATE = """I am a and I wish to connect with {contact_name}. They get a lot of connection messages so I want to stand out from the crowd. Craft an Introducer Message that I send them to initiate a conversation, I am gonna give you some information about the person, some of the goals that I have in mind that I want to achieve from this connection, make sure the message talks about some specific aspect of their profile, keep the message short enough(under 100 words) so it doesn’t feel intimating to respond to its only meant as an introductory message, the goals is to start an engaging conversation. Only output the message no extra text, and it's just a simple LinkedIn message, so please keep it simple here is a profile of the person:
{profile}

Here are my goals for this connection:
{goals}"""

FOLLOWUP_TEMPLATE = "Here an change that I want to make in the message, make the change and return just the update messasge: {query}"

SEND_MESSAGE_SYSTEM_TEMPLATE = """You are an experienced career coach with over 20 years of experience. 
Help me respond to continue to this chat, I am providing the chat summary of the conversation till now, 
my goals from the this person connection, and some context about this person, keep the responses short and only output the messages.
here is the summary of the conversation:
{summary}

here are my goals for the conversation:
{goals}

here is some context about the person:
{profile}
"""


CONTACT_CHAT_COMPRESSION_TEMPLATE = "Can you please generate a summary of this conversation, keep as much of the details as possible"


dotenv.load_dotenv()
llm = ChatGoogleGenerativeAI(model="gemini-pro")
model = genai.GenerativeModel('gemini-pro')


def encode_history(chat_history):
    encoded_history = []
    for content in chat_history:
        encoded_history.append({
            "role": content.role,
            "text": content.parts[0].text
        })

    return encoded_history


def decode_history(chat_history):
    decoded_history = []
    for message in chat_history:
        content = content_types.to_content(message["text"])
        content.role = message["role"]
        decoded_history.append(content)
    return decoded_history


def contact_history_compression(conversation_history):
    contact_history_compression_prompt = ChatPromptTemplate.from_template(CONTACT_CHAT_COMPRESSION_TEMPLATE)
    conversation_history = " ".join([str(item) for item in conversation_history])
    contact_history_compression_prompt.format(chat_history=conversation_history)


def summarize_resume(resume: str):
    resume_summarization_prompt = ChatPromptTemplate.from_template(RESUME_SUMMARIZATION_TEMPLATE)
    summarize_chain = resume_summarization_prompt | llm
    return summarize_chain.invoke({"profile": resume})


def generate_cold_message(contact: dict, chat_history, query=None):

    if len(chat_history) == 0:
        cold_message_prompt = ChatPromptTemplate.from_template(COLD_MESSAGE_SYSTEM_TEMPLATE)
        cold_message_prompt = cold_message_prompt.format(contact_name=contact["name"], profile=contact["profile"], goals=contact["goals"])
    else:
        cold_message_prompt = ChatPromptTemplate.from_template(FOLLOWUP_TEMPLATE.format())
        cold_message_prompt.format(query=query)

    chat = model.start_chat(history=chat_history)

    response = chat.send_message(cold_message_prompt)

    return {
        "response": response.text,
        "chat_history": encode_history(chat.history)
    }


def generate_send_message(contact: dict, chat_history, query=None):
    if len(chat_history) == 0:
        send_message_prompt = ChatPromptTemplate.from_template(SEND_MESSAGE_SYSTEM_TEMPLATE)
        send_message_prompt.format(summary=contact_history_compression(contact["conversation_history"]),
                                   goals=contact["goals"], profile=contact["profile"])
    else:
        send_message_prompt = ChatPromptTemplate.from_template(FOLLOWUP_TEMPLATE)
        send_message_prompt.format(query=query)

    chat = model.start_chat(history=chat_history)

    response = chat.send_message(send_message_prompt)

    return {
        "response": response.text,
        "chat_history": encode_history(chat.history)
    }


def refine_send_message(contact: dict, chat_history, query=None):
    if len(chat_history) == 0:
        send_message_prompt = ChatPromptTemplate.from_template(SEND_MESSAGE_SYSTEM_TEMPLATE)
        send_message_prompt.format()
    else:
        send_message_prompt = ChatPromptTemplate.from_template(FOLLOWUP_TEMPLATE)
        send_message_prompt.format(query=query)

    chat = model.start_chat(history=chat_history)

    response = chat.send_message(send_message_prompt)

    return {
        "response": response.text,
        "chat_history": encode_history(chat.history)
    }
