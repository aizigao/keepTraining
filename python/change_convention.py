#!/usr/bin/env python

#Simple python script to change lower camel case strings in a file to snake case
import sys
import re

#detect if the string is lower camel case
def is_camel(word):
    bol = re.search('\w([a-z][A-Z])', word)
    return bol

# def convert(word):
#     word = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', word)
#     word = re.sub('([a-z0-9])([A-Z])', r'\1_\2', word).lower()
#     return word

def snake_to_camel(text):
    return re.sub('_([a-zA-Z0-9])', lambda m: m.group(1).upper(), text)

FILE_NAME = sys.argv[1]
OLD_FILE = open(FILE_NAME).read()
NEW_FILE = open(FILE_NAME, 'w')
for w in OLD_FILE.split():
    # if is_camel(w) != None:
        OLD_FILE = OLD_FILE.replace(w, snake_to_camel(w))
NEW_FILE.write(OLD_FILE)

print("Convention changed to snake case successfully!")
