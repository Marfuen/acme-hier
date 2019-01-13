const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4}
];

function showManagementStructure(obj){
  for(let i = 0; i < obj.length; i++){
    let curObj = obj[i]
    if(curObj.managerId === undefined){
      console.log(curObj.name);
    }
    if(curObj.managerId === 1){
      console.log(` - ${curObj.name}`);
    } else if(curObj.managerId > 1){
      console.log(`         - ${curObj.name}`);
    }
  }
}

showManagementStructure(users);
