from pythonds.basic import Stack
from pythonds.trees import BinaryTree
import operator


def buildParseTree(fpexp):
    # -- to a list
    fplist = fpexp.split()

    pStack = Stack()
    # no Data on initial
    eTree = BinaryTree('')
    pStack.push(eTree)
    currentTree = eTree

    for i in fplist:
        if i == "(":
            currentTree.insertLeft('')
            pStack.push(currentTree)
            currentTree = currentTree.getLeftChild()

        elif i in ['+', '-', '*', '/']:
            currentTree.setRootVal(i)
            currentTree.insertRight('')
            pStack.push(currentTree)
            currentTree = currentTree.getRightChild()
        elif i == ')':
            currentTree = pStack.pop()
        else:
            try:
                currentTree.setRootVal((int(i)))
                parent = pStack.pop()
                currentTree = parent
            except ValueError:
                raise ValueError('Token "{}" is not a valid integer'.format(i))
    return eTree


pt = buildParseTree("( ( 10 + 5 ) * 3 )")
pt.postorder()  # defined and explained in the next section



def evaluate(parseTree):
    opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv}

    leftC = parseTree.getLeftChild()
    rightC = parseTree.getRightChild()

    if leftC and rightC:
        fn = opers[parseTree.getRootVal()]
        return fn(evaluate(leftC),evaluate(rightC))
    else:
        return parseTree.getRootVal()


print(evaluate(pt))