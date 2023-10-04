import subprocess


with open("datenbank.csv", "r") as f:
    links = f.readlines()[1:]


for i in links:
    frame, link = i.strip().split(",")
    subprocess.run(["wget", "--page-requisites", "--directory-prefix=archiv/webseite", link ])