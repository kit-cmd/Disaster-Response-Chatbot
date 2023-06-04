import pickle

from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQAWithSourcesChain
from langchain.chains import RetrievalQA
from langchain.chains.question_answering import load_qa_chain
from langchain.chat_models import ChatOpenAI
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from dotenv import load_dotenv

load_dotenv()

with open("./faiss_store_openai.pkl", "rb") as f:
    VectorStore = pickle.load(f)

llm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo", streaming=True, callbacks=[StreamingStdOutCallbackHandler()])
#chain = RetrievalQAWithSourcesChain.from_llm(llm=llm, retriever=VectorStore, type="stuff")
qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=VectorStore)
print("Start!")

while True:
    question = input()
    if len(question) == 1:
        break
    result = qa.run(question)
    print(result, type(result))

print("\nBye!")