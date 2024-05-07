# NetWrk: Your AI-powered Networking Assistant 🌐💼

## About Project ℹ️

### Introduction 🚀

Feeling intimidated reaching out to professionals? Don't sweat the small talk! NetWrk is your AI-powered assistant, helping you build meaningful connections and unlock the knowledge and experience of industry experts.

### What does NetWrk Do? 🤖

They say "Your network is your net worth." But many people are uncomfortable with networking, for myriad reasons. NetWrk is a website designed to help professionals and students strengthen their network and have meaningful conversations. Our built-in AI assistant analyzes public information, like LinkedIn profiles, to suggest relevant questions and break the ice.

### Tech Stack ⚙️

* **Front-end:** React.js, Tailwind CSS
* **Back-end:** Python, Flask, LangChain, GeminiAI, MongoDB
* **Additional Technologies:** GitHub, GenerativeAI, Google Cloud

### What's Next for NetWrk 🔮

NetWrk has the potential to become a powerful application for young or inexperienced, neurodiverse, and international students and professionals to connect with mentors. Here are our next steps:

* Integrate received messages from professionals to help the AI curate more meaningful questions.
* Develop a Chrome extension for seamless networking within LinkedIn.

We welcome your feedback and contributions! 🙌

# Contributors 👥

We'd like to thank the following people for their contributions to NetWrk:

* [Mayank(me)](https://github.com/mayank-raj1)
* [Ashton](https://github.com/ashsic)
* [Brian](https://github.com/Khepriest)
* [Silas](https://github.com/verimascent)

**This project was created for the GDSC Hackathon 2024.**  We are grateful for the opportunity to have participated in this event and for the support provided by Google Developer Student Clubs.

## Running NetWrk ▶️

NetWrk consists of a back-end server and a front-end React application. 

### Prerequisites 🛠️

* Ensure you have Node.js and npm (or yarn) installed on your machine. You can download them from the official Node.js website ([https://nodejs.org/en](https://nodejs.org/en)).

### Running the Back-end ⚙️

1.  Clone this repository to your local machine.
2.  Navigate to the project directory using your terminal.
3.  Create a virtual environment (recommended) to isolate project dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate  # Activate the virtual environment (Linux/macOS)
    venv\Scripts\activate.bat  # Activate on Windows
    ```
4.  Install the required Python libraries:
    ```bash
    pip install -r requirements.txt
    ```
5.  Create a file named `.env` in the root directory of the project. This file will store your Gemini API key. Add the following line, replacing `YOUR_GEMINI_API_KEY` with your actual key:
    ```
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```
    **Important:**  Never commit your API key to version control. You can obtain a Gemini API key by following the instructions here [invalid URL removed].
6.  Run the back-end server:
    ```bash
    python app.py
    ```

### Running the Front-end ▶️

1.  Navigate to the front-end directory within the project:
    ```bash
    cd front-end
    ```
2.  Install the required front-end dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    This will start the front-end application on `http://localhost:3000` by default.

### Contributing 🤝

We welcome contributions to this project! Simply make your own fork, work on it, and make an pull request with your pitch for us to review.
