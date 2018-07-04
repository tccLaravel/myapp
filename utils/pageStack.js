function getPageStack(){
  let page = getCurrentPages();
  let stack = [];
  for (var i = 1; i< page.length; i++){
    stack.push(page[i].data.where);
  }
  console.log(stack);
}

module.exports.getPageStack = getPageStack