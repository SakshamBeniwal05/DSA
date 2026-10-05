class Graph {
    constructor(vertex){
        this.vertex = vertex
        this.matrix = []
        for (let index = 0; index < vertex; index++) {
            let row = []
            for (let y = 0; y < vertex; y++) {
                row.push(0)
            }
            this.matrix.push(row)
        }
    }

    insertEdge(src,dest){
        if (src >= 0 && src < this.vertex && dest >= 0 && dest < this.vertex){
            this.matrix[src-1][dest-1] = 1
            this.matrix[dest-1][src-1] = 1
        }
    }

        printGraph() {
        for (let index = 0; index < this.vertex; index++) {
            console.log(this.matrix[index]);
        }
    }
}

const newGraph = new Graph(5)

newGraph.insertEdge(1, 2)
newGraph.insertEdge(3, 5)
newGraph.insertEdge(2, 4)
newGraph.insertEdge(2, 3)

newGraph.printGraph()