const print = (...args) => console.log(...args);
/***************
# linkedlist
### 1，单向链表
单向链表也叫单链表，是链表中最简单的一种形式，它的每个节点包含两个域，一个信息域（元素域）和一个链接域。这个链接指向链表中的下一个节点，而最后一个节点的链接域则指向一个空值。
表元素域elem用来存放具体的数据。
链接域next用来存放下一个节点的位置（python中的标识）
变量p指向链表的头节点（首节点）的位置，从p出发能找到表中的任意节点。

 ********************/
console.log("run");
(() => {
  // 节点
  class SingleNode {
    constructor(elem) {
      this.elem = elem;
      this.next = null;
    }
  }

  // -- 单链表
  class SingleLinkList {
    constructor(node = null) {
      this._head = node;
    }

    // 链表是否为空
    isEmpty() {
      return !this._head;
    }

    length() {
      let count = 0;
      let current = this._head;
      while (current) {
        count += 1;
        current = current.next;
      }
      return count;
    }
    // 遍历整个链表
    travel() {
      let current = this._head;
      console.log("[ \n");
      while (current) {
        console.log(current.elem + "\n");
        current = current.next;
      }
      console.log("]");
    }

    // 头部添加元素（头插法）
    add(item) {
      let node = new SingleNode(item);
      node.next = this._head;
      // 设置新节点
      this._head = node;
    }

    // 尾部添加
    append(item) {
      let node = new SingleNode(item);
      if (this.isEmpty()) {
        this._head = node;
      } else {
        let current = this._head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
    // 指定位置插入元素
    insert(index, item) {
      if (index <= 0) {
        this.add(item);
      } else if (index > this.length() - 1) {
        this.append(item);
      } else {
        let node = new SingleNode(item);
        let count = 0;
        let prev = this._head;

        while (count < index - 1) {
          count += 1;
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
      }
    }

    insert(index, item) {
      if (index <= 0) {
        this.add(item);
      } else if (index > this.length() - 1) {
        this.append(item);
      } else {
        let node = new Node();
        let count = 0;
        let prev = this._head;

        while (count < index - 1) {
          count += 1;
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
      }
    }

    // 删除节点
    remove(item) {
      let current = this._head;
      let prev = null;

      while (current) {
        if (current.elem === item) {
          if (!prev) {
            // 没有上一个元素，比如删除头结点
            this._head = current.next;
          } else {
            prev.next = current.next;
          }
          return;
        } else {
          // 没有找到时,后移
          prev = current;
          current = current.next;
        }
      }
    }
    search(item) {
      let current = this._head;
      while (current) {
        if (current.elem === item) {
          return true;
        } else {
          current = current.next;
        }
      }
      return false;
    }
  }
  print("test:");
  let single_link_list = new SingleLinkList();
  print("isEmpty", single_link_list.isEmpty()); // true
  print("长度", single_link_list.length());

  // 添加 2 3 5
  single_link_list.append(2);
  single_link_list.append(3);
  single_link_list.append(5);

  print("-----------遍历------------");
  single_link_list.travel();

  // 添加 1 0
  single_link_list.add(1);
  single_link_list.add(0);
  single_link_list.insert(4, 4);
  single_link_list.insert(-1, -1); // 头部添加元素（头插法）

  print("-----------遍历------------");
  single_link_list.travel();

  print("-----------查找------------");
  print(single_link_list.search(49));
  print(single_link_list.search(4));

  print("-----------删除------------");
  single_link_list.remove(-1);

  print("-----------遍历------------");
  single_link_list.travel();

  print("-----------长度------------");
  print(single_link_list.length());
})();
/****************8


运行结果：

![](https://baagee.vip/Upload/article_images/2017-08-06/59871c49bb46d.png)

### 2，循环单链表

单链表的一个变形是单向循环链表，链表中最后一个节点的next域不再为None，而是指向链表的头节点。

![](https://baagee.vip/Upload/article_images/2017-08-06/59871d072f0bb.png)



### 2.1，节点的实现和单链表一样

    class SingleNode(object):
        """节点"""

        def __init__(self, elem):
            # 标识数据域
            self.elem = elem
            # 标识链接域
            self.next = None

### 2.2，循环单链表的实现

    class SingleCircleLinkList(object):
        """单向循环链表"""

        def __init__(self, node=None):
            # 私有属性头结点
            self.__head = node
            if node:
                # 不是构造空的链表
                # 头结点的下一个节点指向头结点
                node.next = node

        # is_empty() 链表是否为空
        def is_empty(self):
            return self.__head == None

        # length() 链表长度
        def length(self):
            if self.is_empty():
                # 空链表
                return 0
            count = 1  # 数目
            # 当前节点
            current = self.__head
            # 当前节点的下一个节点不是头结点则继续增加
            while current.next != self.__head:
                count += 1
                # 当前节点往后移
                current = current.next
            return count

        # travel() 遍历整个链表
        def travel(self):
            # 访问的当前节点
            if self.is_empty():
                return False
            current = self.__head
            print('[ ', end='')
            while current.next != self.__head:
                print(current.elem, end=' ')
                current = current.next
            # 打印最后一个元素
            print(current.elem, end=' ')
            print(']')

        # add(item) 链表头部添加元素
        def add(self, item):
            node = SingleNode(item)
            if self.is_empty():
                # 空链表
                self.__head = node
                node.next = node
            else:
                # 非空链表添加
                current = self.__head
                # 查找最后一个节点
                while current.next != self.__head:
                    current = current.next
                # 新节点的下一个节点为旧链表的头结点
                node.next = self.__head
                # 新链表的头结点为新节点
                self.__head = node
                # 最后节点的下一个节点指向新节点
                current.next = node

        # append(item) 链表尾部添加元素
        def append(self, item):
            node = SingleNode(item)
            if self.is_empty():
                # 为空节点时
                self.__head = node
                node.next = node
            else:
                # 让指针指向最后节点
                current = self.__head
                while current.next != self.__head:
                    current = current.next
                # 最后节点的下一个为新添加的node
                current.next = node
                # 新节点下一个节点指向头结点
                node.next = self.__head

        # insert(index, item) 指定位置（从0开始）添加元素
        def insert(self, index, item):
            if index <= 0:
                # 在前方插入
                self.add(item)
            elif index > (self.length() - 1):
                # 在最后添加
                self.append(item)
            else:
                # 创建新节点
                node = SingleNode(item)
                # 遍历次数
                count = 0
                # 插入节点位置的上一个节点
                prev = self.__head
                # 查找到插入节点的上一个节点
                while count < (index - 1):
                    count += 1
                    prev = prev.next
                # 新节点的下一个节点为上一个节点的下一个节点
                node.next = prev.next
                # 上一个节点的下一个节点为新的节点
                prev.next = node

        # remove(item) 删除节点
        def remove(self, item):
            if self.is_empty():
                return False
            current = self.__head
            prev = None
            while current.next != self.__head:
                if current.elem == item:
                    # 找到要删除的节点元素
                    if current == self.__head:
                        # 删除结点,先找尾节点
                        rear = self.__head
                        while rear.next != self.__head:
                            rear = rear.next
                        # 头结点指向当前节点的下一个节点
                        self.__head = current.next
                        # 尾节点的下一个节点指向头结点
                        rear.next = self.__head
                    else:
                        # 中间节点，上一个节点的下一个节点指向当前节点的下一个节点
                        prev.next = current.next
                    return  # 返回当前节点
                else:
                    # 没找到，往后移
                    prev = current
                    current = current.next
            # 循环结束current指向尾节点
            if current.elem == item:
                if prev:
                    # 如果删除最后一个节点
                    prev.next = current.next
                else:
                    # 删除只含有一个头结点的链表的头结点
                    self.__head = None

        # search(item) 查找节点是否存在
        def search(self, item):
            # 当前节点
            if self.is_empty():
                # 空链表直接返回False
                return False
            current = self.__head
            while current.next != self.__head:
                if current.elem == item:
                    # 找到了
                    return True
                else:
                    current = current.next
            # 判断最后一个元素
            if current.elem == item:
                return True
            return False


    if __name__ == '__main__':
        print('test:')
        single_circle_link_list = SingleCircleLinkList()

        print('--------判断是否为空-------')
        print(single_circle_link_list.is_empty())

        print('-----------长度------------')
        print(single_circle_link_list.length())

        single_circle_link_list.append(2)
        single_circle_link_list.append(3)
        single_circle_link_list.append(5)
        #
        print('-----------遍历------------')
        single_circle_link_list.travel()
        #
        single_circle_link_list.add(1)
        single_circle_link_list.add(0)
        single_circle_link_list.insert(4, 4)
        single_circle_link_list.insert(-1, -1)
        #
        print('-----------遍历------------')
        single_circle_link_list.travel()
        #
        print('-----------查找------------')
        print(single_circle_link_list.search(4))
        #
        print('-----------删除------------')
        single_circle_link_list.remove(4)

        print('-----------遍历------------')
        single_circle_link_list.travel()

        print('-----------长度------------')
        print(single_circle_link_list.length())

        # print('-----------删除只含有一个头结点的链表------------')
        # single_circle_link_list.add(3)
        # single_circle_link_list.travel()
        # print(single_circle_link_list.remove(3))

**运行结果：**

![](https://baagee.vip/Upload/article_images/2017-08-06/59871dd56ee1b.png)

### 3，双链表

一种更复杂的链表是“双向链表”或“双面链表”。每个节点有两个链接：一个指向前一个节点，当此节点为第一个节点时，指向空值；而另一个指向下一个节点，当此节点为最后一个节点时，指向空值。

![](https://baagee.vip/Upload/article_images/2017-08-06/59871e3f75db7.png)

### 3.1，双向链表节点的实现

    class DoubleNode(object):
        """节点"""

        def __init__(self, elem):
            # 标识数据域
            self.elem = elem
            # 标识前一个链接域
            self.prev = None
            # 标识后一个链接域
            self.next = None

### 3.2，双向链表的实现

    class DoubleLinkList(object):
        """双链表"""

        def __init__(self, node=None):
            # 私有属性头结点
            self.__head = node

        # is_empty() 链表是否为空
        def is_empty(self):
            return self.__head == None

        # length() 链表长度
        def length(self):
            count = 0  # 数目
            # 当前节点
            current = self.__head
            while current != None:
                count += 1
                # 当前节点往后移
                current = current.next
            return count

        # travel() 遍历整个链表
        def travel(self):
            # 访问的当前节点
            current = self.__head
            print('[ ', end='')
            while current != None:
                print(current.elem, end=' ')
                current = current.next
            print(']')

        # add(item) 链表头部添加元素
        def add(self, item):
            node = DoubleNode(item)
            # 新节点的下一个节点为旧链表的头结点
            node.next = self.__head
            # 新链表的头结点为新节点
            self.__head = node
            # 下一个节点的上一个节点指向新增的节点
            node.next.prev = node

        # append(item) 链表尾部添加元素
        def append(self, item):
            node = DoubleNode(item)
            if self.is_empty():
                # 为空节点时
                self.__head = node
            else:
                # 让指针指向最后节点
                current = self.__head
                while current.next != None:
                    current = current.next
                # 最后节点的下一个为新添加的node
                current.next = node
                # 新添加的结点上一个节点为当前节点
                node.prev = current

        # search(item) 查找节点是否存在
        def search(self, item):
            # 当前节点
            current = self.__head
            while current != None:
                if current.elem == item:
                    # 找到了
                    return True
                else:
                    current = current.next
            return False

**指定位置插入节点**

![](https://baagee.vip/Upload/article_images/2017-08-06/59871f1a689a5.png)

    # insert(index, item) 指定位置（从0开始）添加元素
    def insert(self, index, item):
        if index <= 0:
            # 在前方插入
            self.add(item)
        elif index > (self.length() - 1):
            # 在最后添加
            self.append(item)
        else:
            # 创建新节点
            node = DoubleNode(item)
            current = self.__head
            # 遍历次数
            count = 0
            # 查找到插入节点的上一个节点
            while count < index:
                count += 1
                current = current.next
            # 新节点的下一个节点指向当前节点
            node.next = current
            # 新节点的上一个节点指向当前节点的上一个节点
            node.prev = current.prev
            # 当前节点的上一个节点的下一个节点指向新节点
            current.prev.next = node
            # 当前节点的上一个节点指向新节点
            current.prev = node

**删除节点**

![](https://baagee.vip/Upload/article_images/2017-08-06/59871f393760f.png)

    # remove(item) 删除节点
    def remove(self, item):
        current = self.__head
        while current != None:
            if current.elem == item:
                # 找到要删除的节点元素
                if current == self.__head:
                    # 头结点
                    self.__head = current.next
                    if current.next:
                        # 如果不是只剩下一个节点
                        current.next.prev = None
                else:
                    # 当前节点的上一个节点的下一个节点指向当前节点的下一个节点
                    current.prev.next = current.next
                    if current.next:
                        # 如果不是删除最后一个元素，当前节点的下一个节点的上一个节点指向当前节点的上一个节点
                        current.next.prev = current.prev
                return  # 返回当前节点
            else:
                # 没找到，往后移
                current = current.next

**代码测试**

    if __name__ == '__main__':
        print('test:')
        double_link_list = DoubleLinkList()

        print('--------判断是否为空-------')
        print(double_link_list.is_empty())

        print('-----------长度------------')
        print(double_link_list.length())

        double_link_list.append(2)
        double_link_list.append(3)
        double_link_list.append(5)

        print('-----------遍历------------')
        double_link_list.travel()

        double_link_list.add(1)
        print('-----------遍历------------')
        double_link_list.travel()
        double_link_list.add(0)
        print('-----------遍历------------')
        double_link_list.travel()
        double_link_list.insert(4, 4)
        print('-----------遍历------------')
        double_link_list.travel()
        double_link_list.insert(-1, -1)

        print('-----------遍历------------')
        double_link_list.travel()

        print('-----------查找------------')
        print(double_link_list.search(4))

        print('-----------删除------------')
        double_link_list.remove(5)
        double_link_list.remove(-1)

        print('-----------遍历------------')
        double_link_list.travel()

        print('-----------长度------------')
        print(double_link_list.length())

    ***********************/
