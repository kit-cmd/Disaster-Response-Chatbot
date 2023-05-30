import requests
from bs4 import BeautifulSoup


def render_url(value:str = "01"):
    return f"http://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/contents/prevent/prevent{value}.html?menuSeq=126'"



# Send a GET request to the website
response = requests.get(render_url())

# Create a BeautifulSoup object
soup = BeautifulSoup(response.content, 'html.parser')

# Find the element with class 'links_listCell'
elements = soup.find_all(class_='links_listCell')

# Extract the onclick phrase from the element
for i in elements:
    idx = i.a['onclick'].rfind('.')
    val = i.a['onclick'][idx-2:idx]
    
    print(render_url(val))
