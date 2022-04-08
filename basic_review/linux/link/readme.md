https://www.jianshu.com/p/dde6a01c4094

```shell
touch myfile && echo "This is a plain text file." > myfile
cat myfile

This is a plain text file.
```

```
ls -li


#inode值相同
#25869085 -rw-r--r--  2 unixzii  staff  27  7  8 17:39 hard
#25869085 -rw-r--r--  2 unixzii  staff  27  7  8 17:39 myfile
```

硬链接是指针，所有的硬链接都是指向同一个磁盘块。 删除一个指针不会真正删除文件，只有把所有的指针都删除才会真正删除文件。 软连接是另外一种类型的文件，保存的是它指向文件的全路径， 访问时会替换成绝对路径
