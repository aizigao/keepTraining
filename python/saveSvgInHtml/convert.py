<<<<<<< HEAD
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
=======
import os
import shutil
import re
import requests

fileLink = 'http://at.alicdn.com/t/font_1760743_cqc31zkvkvd.js'

file_data = str(requests.get(fileLink).content)

# 获取svg部分
svg_str_regex = r"\<svg\>(.*?)\<\/svg\>"
matches = re.findall(svg_str_regex, file_data)
if len(matches):
    target_string = matches[0]
    svg_str = re.sub(r'symbol', 'svg', target_string)
    # target_str = re.sub('</svg>', '</svg>@@@', svg_str)
    print(svg_str)

# filedata

# Lines = file1.readlines()


# regex = r"id=\"(.*?)\""
# if os.path.exists('./dist'):
#     shutil.rmtree("./dist")
# os.mkdir('./dist')


# for line in Lines:
#     # https://stackoverflow.com/questions/55305327/convert-javascript-regex-exec-which-returns-group-matches-to-python
#     matches = re.findall(regex, line)

#     if matches[0]:
#         fileName = re.sub(r'icon-', '', matches[0])
#         print(fileName)
#         f = open("./dist/%s.svg" % fileName, "a")
#         f.write(line)
#         f.close()
>>>>>>> 083fc59... feat: sync
