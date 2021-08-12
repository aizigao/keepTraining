'''
先做个双向链表
'''


class Node:
    def __init__(self, data, _pre=None, _next=None):

        self.data = data

        self._pre = _pre

        self._next = _next

    def __str__(self):

        return str(self.data)


class DoublyLink:
    def __init__(self):

        self.tail = None

        self.head = None

        self.size = 0

    def insert(self, data):

        if isinstance(data, Node):

            tmp_node = data

        else:

            tmp_node = Node(data)

        if self.size == 0:

            self.tail = tmp_node

            self.head = self.tail

        else:

            self.head._pre = tmp_node

            tmp_node._next = self.head

            self.head = tmp_node

        self.size += 1

        return tmp_node

    def remove(self, node):

        if node == self.head:

            self.head._next._pre = None

            self.head = self.head._next

        elif node == self.tail:

            self.tail._pre._next = None

            self.tail = self.tail._pre

        else:

            node._pre._next = node._next

            node._next._pre = node._pre

        self.size -= 1

    def __str__(self):

        str_text = ""

        cur_node = self.head

        while cur_node != None:

            str_text += cur_node.data + " "

            cur_node = cur_node._next

        return str_text


class LRUCache:
    def __init__(self, size):

        self.size = size

        self.hash_map = dict()

        self.link = DoublyLink()

    def set(self, key, value):

        if self.size == self.link.size:

            self.link.remove(self.link.tail)

        if key in self.hash_map:

            self.link.remove(self.hash_map.get(key))

        tmp_node = self.link.insert(value)

        self.hash_map.__setitem__(key, tmp_node)

    def get(self, key):

        tmp_node = self.hash_map.get(key)

        self.link.remove(tmp_node)

        self.link.insert(tmp_node)

        return tmp_node.data


r = LRUCache(3)
r.set("1", "1")
r.set("2", "2")
r.set("3", "3")
print(r.link)

r.get("1")
print(r.link)
r.set("4", "4")
print(r.link)
'''
output
>> 3 2 1
>> 1 3 2
>> 4 1 3
'''