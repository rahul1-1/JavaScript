const getPathFromChildToParent = (parent, child) => {
    let currentNode = child;
    let pathArray = [];
  
    while (currentNode !== parent && currentNode !== null) {
      const parentElement = currentNode.parentElement;
      if (parentElement) {
        const childrenArray = Array.from(parentElement.children);
        pathArray.push(childrenArray.indexOf(currentNode));
        currentNode = parentElement;
      } else {
        currentNode = null;
      }
    }
  
    return pathArray;
  };
  
  const getValueFromPath = (parent, path) => {
    let currentNode = parent;
  
    while (path.length) {
      const index = path.pop();
      if (currentNode && currentNode.children && index < currentNode.children.length) {
        currentNode = currentNode.children[index];
      } else {
        // Handle invalid index or missing child
        return undefined;
      }
    }
  
    return currentNode.innerText;
  };
  
  const findNodeValue = () => {
    const rootA = document.getElementById('rootA');
    const rootB = document.getElementById('rootB');
    const nodeA = document.getElementById('nodeA');
  
    if (rootA && rootB && nodeA) {
      const path = getPathFromChildToParent(rootA, nodeA);
      return getValueFromPath(rootB, path);
    } else {
      return undefined; // Handle missing elements
    }
  };
  
  console.log(findNodeValue());
  