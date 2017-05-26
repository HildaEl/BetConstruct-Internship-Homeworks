function Node(content, parent) {
    this.data = content || 0;
    this.parent = parent || null;
    this.children = [];
} 
Node.prototype.DFS = function f(root, funct) {
    for(var i = 0; i < root.children.length; i++) {
        f(root.children[i], funct);
    }
    funct(root);
}

Node.insert = function(data, toParent) {
    toParent.children[toParent.children.length] = new Node(data, toParent);
}
Node.delete = function(dataDel, rootNode) {
    var node = rootNode.DFS(rootNode, function(root) {
        if(root.data == dataDel) {
            var index = root.parent.children.indexOf(root);
            root.parent.children.splice(index, 1);
        }
    });
}

var root = new Node("1");
Node.insert("2", root);
Node.insert("3", root);
Node.insert("4", root);
Node.insert("5", root.children[0]);
Node.insert("6", root.children[0]);

var printDatas = function(node) {console.log(node.data)};

root.DFS(root, printDatas);
Node.delete('3', root);
root.DFS(root, printDatas);

