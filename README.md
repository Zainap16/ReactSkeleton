# ReactSkeleton

React.js handles UI
Express.js - is middleman this receices requests (POST /chat) with:
{
    "message":"Hello AI"
}
thne Express will ask AI

Ollama -Ollama is just software that lets you run AI models on your own computer. It launches AI models

Models - The AI itself is the model.(i.e Llama 3.2, DeepSeek, Gemma)

ollama pull llama3.2 -> donwload AI weights/model
ollama serve -starts a server that waits for requests.


The API

Ollama exposes an API.

That means other programs can ask it questions.

reaso to use express? key is safe nc if react comms directly to Ai key is exposed anyone can steal it.

