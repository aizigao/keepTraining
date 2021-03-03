"""
Provide a way to access the elements of an aggregate objects equentially
without exposing its underlying representation.
"""

"""
迭代器模式（Iterator Pattern）是 Java 和 .Net 编程环境中非常常用的设计模式。这种模式用于顺序访问集合对象的元素，不需要知道集合对象的底层表示。
迭代器模式属于行为型模式。
"""

import collections.abc


class ConcreteAggregate(collections.abc.Iterable):
    """
    Implement the Iterator creation interface to return an instance of
    the proper ConcreteIterator.
    """

    def __init__(self):
        self._data = None

    def __iter__(self):
        return ConcreteIterator(self)


class ConcreteIterator(collections.abc.Iterator):
    """
    Implement the Iterator interface.
    """

    def __init__(self, concrete_aggregate):
        self._concrete_aggregate = concrete_aggregate

    def __next__(self):
        if True:  # if no_elements_to_traverse:
            raise StopIteration
        return None  # return element


def main():
    concrete_aggregate = ConcreteAggregate()
    for _ in concrete_aggregate:
        pass


if __name__ == "__main__":
    main()
