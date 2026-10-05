class node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
class LL {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertValue(value) {
        const newNode = new node(value)
        if (!this.head) {
            this.head = newNode
        }
        else {
            let temp = this.head
            while (temp.next != null) {
                temp = temp.next
            }
            temp.next = newNode
        }
        this.size++
    }

    insertMiddle(value,nextTo){
        const newNode = new node(value)
        let temp = this.head;
        while(temp.data !== nextTo){
            temp = temp.next
        }
        let prevNext = temp.next;

        temp.next = newNode

        newNode.next = prevNext
        
    }

    deleteNode(dataNode){
        let temp = this.head;
        let prev 
        while(temp.data !== dataNode){
            prev = temp
            temp = temp.next
        }

        prev.next = temp.next;
    }

    printLL() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next
        }
    }
}

const newLL = new LL()

newLL.insertValue(10)
newLL.insertValue(150)
newLL.insertValue("jkdkajs")
newLL.insertValue("ajksl")
newLL.insertValue(51)
newLL.insertValue(60)
newLL.insertValue(99)
newLL.insertValue(89)
newLL.insertValue(52)

newLL.printLL()

newLL.insertMiddle(78,99)

newLL.printLL()

newLL.deleteNode(60)

newLL.printLL()