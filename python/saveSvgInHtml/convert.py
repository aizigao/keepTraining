# https://www.geeksforgeeks.org/read-a-file-line-by-line-in-python/
# Using readlines()

import os
import shutil
import re
file1 = open('index.html', 'r')
Lines = file1.readlines()


regex = r"id=\"(.*?)\""
if os.path.exists('./dist'):
    shutil.rmtree("./dist")
os.mkdir('./dist')


for line in Lines:
    # https://stackoverflow.com/questions/55305327/convert-javascript-regex-exec-which-returns-group-matches-to-python
    matches = re.findall(regex, line)

    if matches[0]:
        fileName = re.sub(r'icon-', '', matches[0])
        print(fileName)
        f = open("./dist/%s.svg" % fileName, "a")
        f.write(line)
        f.close()
