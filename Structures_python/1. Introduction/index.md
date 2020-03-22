- Data Structures 
- Abstract Data Types



## build-in Atomic Data types

- Numberic 
  - int 
  - float
- Bool
  - True
  - False
  - < > <= >= == != adn or not

## Build-in Collection Data types


- lists
  - indexing []
  - concatenation + 
  - repetition *
  - membership in
  - length len
  - slicing [:]
  - append(item)
  - insert(i,item)
  - pop(i)
  - sort()
  - reverse()
  - del list[i]
  - alist.index(item) --> indexOf
  - count alist.count(item)
  - alist.remove(item)
  - * range list(range(5))
- string
  - myName[3]
  - len(myName) 
  - myName.upper()
  - myName.center(10) --> add padding
  - myName.find('v') --> indexOf
  - myName.split(',)
 
- tuples
 - immutable --> can't changed
 - len 
 - in 
 - | : union --> return new set with all elements form both sets
 - & : intersection --> return new set only those elements common to both sets
 - - : difference return new Set with all items form the first set not in second
 - <= : issubset asks whether all elements of the first set are in the second
 - add
 - remove
 - pop
 - clear

- dictionary
  - []
  - key in adict
  - del adict[key]
  - adict.keys()
  - adict.items() --> values()
  - adict.get(k)
  - adict.get(k, alt)


-  String Formatting Conversion Characters
  - d, i --> integer
  - u --> unsigned integer
  - f ->float
  - e 
  - E 
  - g auto e/f
  - c single char
  - s string
  - %20d Put the value in a field width of 20
  - %-20d Put the value in a field 20 characters wide, left-justified
  - $+20d right
  - %020d Put the value in a field 20 characters wide, fill in with leading zeros.
  - %20.2f 
  - %(name)d Get the value from the supplied dictionary using name as the key.