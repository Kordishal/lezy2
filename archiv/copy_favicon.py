

import os
import subprocess


path = 'original/favicon/'
target = 'archiv/webseite/'
for file in os.listdir(path):
    if file.endswith('.ico'):
        source = path + file
        domain = file.split('_')[1]
        print(domain)
        destination = target + domain.removesuffix('.ico') + '/favicon.ico'

        subprocess.run(['cp', source, destination])