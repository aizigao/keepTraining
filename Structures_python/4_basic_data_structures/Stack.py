class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[-1]

    def size(self):
        return len(self.items)


s = Stack()

print(s.isEmpty())

s.push(4)
s.push('dog')

print(s.peek())  # dog
print(s.pop())  # dog
print(s.size(), s.items)
print('dfsdf %s' % 'xxx')
