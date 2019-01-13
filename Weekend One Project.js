const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

function showManagementStructure(obj){
  for(let i = 0; i < obj.length; i++){
    console.log(obj[i])
    let curObj = obj[i]
    if(!obj.managerId){
      return obj[i][name];
    }
  }
}

showManagementStructure(users);
