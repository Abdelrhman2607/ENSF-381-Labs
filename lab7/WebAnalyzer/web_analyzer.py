import requests
import re
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/University_of_Calgary"
headers = {"User-Agent": "lab07-web-analyzer"} 

try: 
    response = requests.get(url, headers=headers) 
    response.raise_for_status() # Ensures the request was successful 
    soup = BeautifulSoup(response.text, 'html.parser') 
    print(f"Successfully fetched content from {url}")
    # print(soup.prettify())
    
    h_elements = soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"])
    a_elements = soup.find_all("a")
    p_elements = soup.find_all("p")
    
    h_count = len(h_elements)
    a_count = len(a_elements)
    p_count = len(p_elements)
    
    print(f"h: {h_count}, a: {a_count}, p: {p_count}")
    
    website_text = soup.get_text().lower()
    words = re.findall(r'\b\w+\b', website_text)
    word_freq = {}
    for word in words:
        word_freq[word] = word_freq.get(word, 0) + 1
        
    top_5 = {}
    sorted_freqs = sorted(word_freq, key = lambda word: -word_freq[word])
    for i in range(5):
        word = sorted_freqs[i]
        top_5[word] = word_freq[word]
        
    print(top_5)
    
    user_word = str(input("Enter a word to count: ")).lower()
    try: 
        print(f"The word \"{user_word}\" appeared {word_freq[user_word]} times.")
    except:
        print(f"The word \"{user_word}\" appeared 0 times.")
    
    max_p = None
    max_length = 0
    for p in p_elements:
        text = p.get_text(strip=True)
        words = re.findall(r'\b\w+\b', text)       
        length = len(words)
        if (length < 5):
            continue
        elif (length > max_length):
            max_p = p
            max_length = length
            
    if (max_p):
        print(f"The longest paragraph on the website is {max_length} words long:")
        print(max_p.get_text())
    
    import matplotlib.pyplot as plt
    from os.path import join
    labels = ['Headings', 'Links', 'Paragraphs'] 
    values = [h_count, a_count, p_count] 
    plt.bar(labels, values) 
    plt.title('Group 5') 
    plt.ylabel('Count') 
    #plt.savefig(join('lab7', 'WebAnalyzer', 'web_analysis_results.png')) # Save the figure as an image file 
    plt.show()
    
except Exception as e: 
    print(f"Error fetching content: {e}")
    

