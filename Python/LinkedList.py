class node:
    def __init__(self,data,next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__ (self,head=None):
        self.head = head
    def insertValue(self,value):
        newNode = node(value)
        if not self.head:
            self.head = newNode
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            temp.next = newNode
    
    def printValues(self):
        temp = self.head
        while temp is not None:
            print(temp.data)
            temp = temp.next

newLL = LinkedList()
newLL.insertValue(10)
newLL.insertValue(410)
newLL.insertValue(40)
newLL.insertValue(890)
newLL.insertValue(140)

newLL.printValues()