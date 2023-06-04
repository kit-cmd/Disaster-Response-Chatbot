import pickle

import faiss
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings

from get_docu_from_urls import GetDataFromUrls

embeddings = OpenAIEmbeddings()

docs = GetDataFromUrls("./chat_bot/urls.txt").docs 
vector_store_openAI = FAISS.from_documents(docs, embeddings).as_retriever()

with open("faiss_store_openai.pkl", "wb") as f:
    pickle.dump(vector_store_openAI, f)