import os
from requests import get

with open("datenbank.csv", "r") as f:
    links = f.readlines()[1:]

if not os.path.exists("original/html"):
    os.mkdir("original/html")

if not os.path.exists("original/gifs"):
    os.mkdir("original/gifs")

if not os.path.exists("original/favicon"):
    os.mkdir("original/favicon")

if os.path.exists("original/errors.csv"):
    os.remove("original/errors.csv")

for link in links:
    frame, link = link.strip().split(",")
    domain = link.split("/")[2]
    response = get(link)
    if response.ok:
        with open(f"original/html/{int(frame):02d}-{domain}.html", "w") as f:
            f.write(response.text)
        if frame == "4":
            response_gif = get(f"http://{domain}/misc/olia/olia{int(frame):02d}.gif")
        else:
            response_gif = get(f"{link}/olia{int(frame):02d}.gif")
        if response_gif.ok:
            with open(f"original/gifs/{int(frame):02d}-{domain}.gif", "wb") as f:
                f.write(response_gif.content)
        
        favicon = get(f"http://{domain}/favicon.ico")
        if favicon.ok and favicon.content != b'':
            with open(f"original/favicon/{int(frame):02d}_{domain}.ico", "wb") as f:
                f.write(favicon.content)
    else:
        with open("original/errors.csv", "a") as f:
            f.write(f"{frame},{link},{domain}\n")