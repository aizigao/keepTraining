# Morris 遍历

https://leetcode.cn/problems/convert-bst-to-greater-tree/solution/ba-er-cha-sou-suo-shu-zhuan-huan-wei-lei-jia-sh-14/

https://zhuanlan.zhihu.com/p/101321696

-   有一种巧妙的方法可以在线性时间内，只占用常数空间来实现中序遍历
-   利用树的大量空闲指针，实现空间开销的极限缩减

## 过程

-   记作当前节点为 cur。
-   1. 如果 cur 无左孩子，cur 向右移动（cur=cur.right）
-   2. 如果 cur 有左孩子，找到 cur 左子树上最右的节点，记为 mostright
    -   1. 如果 mostright 的 right 指针指向空，让其指向 cur，cur 向左移动（cur=cur.left）
    -   2. 如果 mostright 的 right 指针指向 cur，让其指向空，cur 向右移动（cur=cur.right）

```java
// 前
public static void morrisPre(Node head) {
    if(head == null){
        return;
    }
    Node cur = head;
    Node mostRight = null;
    while (cur != null){
        // cur表示当前节点，mostRight表示cur的左孩子的最右节点
        mostRight = cur.left;
        if(mostRight != null){
            // cur有左孩子，找到cur左子树最右节点
            while (mostRight.right !=null && mostRight.right != cur){
                mostRight = mostRight.right;
            }
            // mostRight的右孩子指向空，让其指向cur，cur向左移动
            if(mostRight.right == null){
                mostRight.right = cur;
                System.out.print(cur.value+" ");
                cur = cur.left;
                continue;
            }else {
                // mostRight的右孩子指向cur，让其指向空，cur向右移动
                mostRight.right = null;
            }
        }else {
            System.out.print(cur.value + " ");
        }
        cur = cur.right;
    }
    System.out.println();
}
```

```java
// 中
public static void morrisIn(Node head) {
    if(head == null){
        return;
    }
    Node cur = head;
    Node mostRight = null;
    while (cur != null){
        mostRight = cur.left;
        if(mostRight != null){
            while (mostRight.right !=null && mostRight.right != cur){
                mostRight = mostRight.right;
            }
            if(mostRight.right == null){
                mostRight.right = cur;
                cur = cur.left;
                continue;
            }else {
                mostRight.right = null;
            }
        }
        System.out.print(cur.value+" ");
        cur = cur.right;
    }
    System.out.println();
}

```

```java
// 后
public static void morrisPos(Node head) {
       if(head == null){
           return;
       }
       Node cur = head;
       Node mostRight = null;
       while (cur != null){
           mostRight = cur.left;
           if(mostRight != null){
               while (mostRight.right !=null && mostRight.right != cur){
                   mostRight = mostRight.right;
               }
               if(mostRight.right == null){
                   mostRight.right = cur;
                   cur = cur.left;
                   continue;
               }else {
                   mostRight.right = null;
                   printEdge(cur.left);
               }
           }
           cur = cur.right;
       }
       printEdge(head);
       System.out.println();
   }
   public static void printEdge(Node node){
       Node tail =reverseEdge(node);
       Node cur = tail;
       while (cur != null ){
           System.out.print(cur.value+" ");
           cur =cur.right;
       }
       reverseEdge(tail);
   }
   public static Node reverseEdge(Node node){
       Node pre = null;
       Node next = null;
       while (node != null){
           next = node.right;
           node.right = pre;
           pre = node;
           node = next;
       }
       return pre;
   }

```
