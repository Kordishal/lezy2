import subprocess



website = "https://www.zombie-and-mummy.org/"


subprocess.run(["wget", "-r", "--page-requisites", "--directory-prefix=zombie/web", website ])