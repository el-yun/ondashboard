var children = [
	{num: 1, name: '테스트', comment: '처음'}, 
	{num: 2, name: '테스트2', comment: '두번째'}
];

/*
	Table Listing
*/

function addHeaders(table, keys) {
  var row = table.insertRow();
  for( var i = 0; i < keys.length; i++ ) {
    var cell = row.insertCell();
    cell.appendChild(document.createTextNode(keys[i]));
  }
}
function Dashboard(id, children){
	this.table = document.createElement(id);
	for( var i = 0; i < children.length; i++ ) {
	  var child = children[i];
	  if(i === 0 ) {
		addHeaders(table, Object.keys(child));
	  }
	  var row = table.insertRow();
	  Object.keys(child).forEach(function(k) {
		console.log(k);
		var cell = row.insertCell();
		cell.appendChild(document.createTextNode(child[k]));
	  })
	}
}

Dashboard.prototype.render = function(target){
	return document.getElementById(target).appendChild(table);
}
