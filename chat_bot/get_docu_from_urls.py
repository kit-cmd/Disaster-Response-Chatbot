from typing import List
import os

from dotenv import load_dotenv
from langchain import schema
from langchain.document_loaders import UnstructuredURLLoader
from langchain.text_splitter import CharacterTextSplitter

load_dotenv()

class GetDataFromUrls:
    def __init__(self, text_path: str) -> None:
        self.urls: List[str] = self.load_urls(text_path)
        self.data: List[schema.Document] = self.load_data_from_url(self.urls)
        self.docs: List[schema.Document] = self.split_text(self.data)

    def load_urls(self, text_path: str) -> List[str]:
        result = []
        with open(text_path, 'r') as f:
            for i in f.readlines():
                result.append(i.strip())
        
        return result

    def load_data_from_url(self, urls: List[str]) -> List[schema.Document]:
        result = []

        for url in urls:
            loaders = UnstructuredURLLoader(urls=[url])
            data = loaders.load()
            result += data

        return result

    def split_text(self, docu: List[schema.Document]) -> List[schema.Document]:
        text_spliter = CharacterTextSplitter(separator='\n',
                                            chunk_size=1000,
                                            chunk_overlap=200)
        docs = text_spliter.split_documents(docu)
        return docs


if __name__ == '__main__':
    docs_data = GetDataFromUrls("./chat_bot/urls.txt")

    print(f"urls length: {len(docs_data.urls)}")
    print(f"data length: {len(docs_data.data)}")
    print(f"docs length: {len(docs_data.docs)}")