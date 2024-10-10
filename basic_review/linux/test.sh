#!/user/bin/env bash

echo "hello world"

echo "This is the first command"; echo "This is the second command"

variable="Some string"
variable = "Some string"
variable= "Some string"

echo "$variable"
echo "${variable}"
echo '$variable'

echo "${variable/Some/A}"

length=7
echo "${variable:0:length}" # => Some st
# This will return only the first 7 characters of the value
echo "${variable: -5}" # => tring

echo "${#variable}" # => tring
echo "${foo:-"DefaultValueIfFooIsMissingOrEmpty"}"



# Declare an array with 6 elements:
array=(one two three four five six)
