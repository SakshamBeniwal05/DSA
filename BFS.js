class graph {
    constructor(vertex) {
        this.vertex = vertex
        this.matrix = []
        for (let index = 0; index < this.vertex; index++) {
            let row = []
            for (let y = 0; y < this.vertex; y++) {
                row.push(0)
            }
            this.matrix.push(row)
        }
    }

    insertEdge(src, dest) {
        if (src >= 0 && src < this.vertex && dest >= 0 && dest < this.vertex) {

            this.matrix[src][dest] = 1
            this.matrix[dest][src] = 1
        }
    }

    printGraph() {
        for (let index = 0; index < this.vertex; index++) {
            console.log(this.matrix[index].join(' '));
        }
    }

    bfsTraversal(node) {
        const travel = Array(this.vertex).fill(false)
        const queueT = [node]

        while (queueT.length > 0) {
            const v = queueT.shift()
            travel[v] = true
            console.log(`${v} ->`);
            for (let index = 0; index < this.vertex; index++) {
                if ((this.matrix[v][index] === 1) && (travel[index]===false) ){
                    queueT.push(index)
                    
                }
            }
        }
    }
}


const newGraph = new graph(5)

newGraph.insertEdge(0, 1)
newGraph.insertEdge(1, 2)
newGraph.insertEdge(1, 3)
newGraph.insertEdge(2, 4)
newGraph.insertEdge(3, 4)

newGraph.printGraph()

newGraph.bfsTraversal(1)