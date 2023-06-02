from typing import List
import os

from dotenv import load_dotenv
from langchain.document_loaders import UnstructuredURLLoader
from langchain.text_splitter import CharacterTextSplitter

load_dotenv()


def load_urls(text_path: str) -> List[str]:
    result = []
    
    with open(text_path, 'r') as f:
        for i in f.readlines():
            result.append(i.strip())
    
    return result


def load_data_from_url(urls: List[str]) -> List[str]:
    result = []

    for url in urls:
        loaders = UnstructuredURLLoader(urls=[url])
        data = loaders.load()
        result += data

    return result


def split_text(text: List[str]) -> List[str]:
    text_spliter = CharacterTextSplitter(separator='\n',
                                         chunk_size=1000,
                                         chunk_overlap=200)
    docs = text_spliter.split_documents(text)
    return docs


if __name__ == '__main__':
    urls = load_urls("./chat_bot/urls.txt")
    data = load_data_from_url(urls=urls)
    docs = split_text(data)

    print(f"urls length: {len(urls)}")
    print(f"data length: {len(data)}")
    print(f"docs length: {len(docs)}")