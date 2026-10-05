class adjListGraObj {
    constructor(){
        this.aLGO = {}
    }

    insertVertex(vertex){
        if (!(vertex in this.aLGO)){
            this.aLGO[vertex] = []
        }
        else{
            return
        }
    }

    insertEdge(src,dest){
        if (!(src in this.aLGO)){
            this.insertVertex(src)
        }
        if (!(dest in this.aLGO)){
            this.insertVertex(dest)
        }
        this.aLGO[src].push(dest)
        this.aLGO[dest].push(src)
    }

    printGraph(){
        for (let vertex in this.aLGO){
            console.log(`${vertex} --> ${this.aLGO[vertex]}`);
        }
    }
}

const newGraph = new adjListGraObj()
newGraph.insertEdge("1","2")
newGraph.insertEdge("3","5")
newGraph.insertEdge("4","2")
newGraph.insertEdge("4","5")
newGraph.insertEdge("4","1")
newGraph.insertVertex("6")

newGraph.printGraph()