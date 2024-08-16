import requests

def testConnection():
    urls = [
        "http://aus-reef-tracker.com/",
        "https://aus-reef-tracker.com/",
        "http://aus-reef-tracker.com/home",
        "https://aus-reef-tracker.com/home",
        "http://aus-reef-tracker.com/dashboard",
        "https://aus-reef-tracker.com/dashboard",
        "http://aus-reef-tracker.com/library",
        "https://aus-reef-tracker.com/library"
    ]
    
    for url in urls:
        try:
            response = requests.get(url)
            if response.status_code == 200:
                print(f"{url} - OK")
            else:
                print(f"{url} - Failed with status code {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"{url} - Failed with error: {str(e)}")

testConnection()