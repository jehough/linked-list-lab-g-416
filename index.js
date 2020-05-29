function getName(node){
  return node["name"]
}

function headNode(head, collection){
  return collection[head]
}

function next(node, collection){
  return collection[node["next"]]
}
