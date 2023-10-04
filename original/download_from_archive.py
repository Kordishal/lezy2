import os
from requests import get

with open("original/archive_links.csv", "r") as f:
    links = f.readlines()[1:]

if not os.path.exists("html"):
    os.mkdir("original/html")

if not os.path.exists("gifs"):
    os.mkdir("original/gifs")

for link in links:
    frame, link, domain = link.strip().split(",")
    response = get(link)
    if response.ok:
        with open(f"original/html/{int(frame):02d}-{domain}-archive.html", "w") as f:
            f.write(response.text)
        
        response_gif = get(f"{link}/olia{int(frame):02d}.gif")
        if response_gif.ok:
            with open(f"original/gifs/{int(frame):02d}-{domain}-archive.gif", "wb") as f:
                f.write(response_gif.content)
    else:
        with open("original/errors_archive.csv", "a") as f:
            f.write(f"{frame},{link},{domain}\n")