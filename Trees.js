class node {
    constructor(data, left = null, right = null,) {
        this.data = data
        this.left = left
        this.right = right
    }
}
class tree {
    constructor() {
        this.root = null
    }
    insertValue(value, subRoot = this.root) {
        if (!this.root) {
            this.root = new node(value);
            return
        }
        else {
            if (value < subRoot) {
                if (subRoot.left === null) {
                    subRoot.left = new node(value)
                }
                else {
                    this.insertValue(value, subRoot.left)
                }
            } else {
                if (subRoot.right === null) {
                    subRoot.right = new node(value)
                }
                else {
                    this.insertValue(value, subRoot.right)
                }
            }
        }
    }

    printValue(subRoot = this.root) {
        if (subRoot===null){
            return;
        }
        else{
            this.printValue(subRoot.left)
            console.log(subRoot.data);
            this.printValue(subRoot.right)
        }
    }
}

const newTree = new tree()
newTree.insertValue(10)
newTree.insertValue(20)
newTree.insertValue(50)
newTree.insertValue(12)
newTree.insertValue(9)
newTree.insertValue(5)
newTree.insertValue(8)
newTree.insertValue(4)

newTree.printValue()