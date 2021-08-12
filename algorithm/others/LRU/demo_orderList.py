from collections import OrderedDict


class LRUCache:
    def __init__(self, size):

        self.size = size

        self.linked_map = OrderedDict()

    def set(self, key, value):

        if key in self.linked_map:

            self.linked_map.pop(key)

        if self.size == len(self.linked_map):

            self.linked_map.popitem(last=False)

        self.linked_map.update({key: value})

    def get(self, key):

        value = self.linked_map.get(key)

        self.linked_map.pop(key)

        self.linked_map.update({key: value})

        return value


r = LRUCache(3)

r.set("1", "1")

r.set("2", "2")

r.set("3", "3")

print(r.linked_map)

r.get("1")

print(r.linked_map)

r.set("4", "4")

print(r.linked_map)
'''
output
>> OrderedDict([('1', '1'), ('2', '2'), ('3', '3')])
>> OrderedDict([('2', '2'), ('3', '3'), ('1', '1')])
>> OrderedDict([('3', '3'), ('1', '1'), ('4', '4')])
'''