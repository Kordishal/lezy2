import os
from requests import get

with open("datenbank.csv", "r") as f:
    links = f.readlines()[1:]

if not os.path.exists("html"):
    os.mkdir("original/html")

if not os.path.exists("gifs"):
    os.mkdir("original/gifs")

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
    else:
        with open("original/errors.csv", "a") as f:
            f.write(f"{frame},{link},{domain}\n")