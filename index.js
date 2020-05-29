function getName(node){
  return node["name"]
}

function headNode(head, collection){
  return collection[head]
}

function next(node, collection){
  return collection[node["next"]]
}


function nodeAt(index, head, collection){
  let node = headNode(head, collection)
  for(let i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(){
  
}