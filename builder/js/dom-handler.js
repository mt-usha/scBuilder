function $ (id) {
	var requested_element = document.getElementById(id);
	return requested_element; 
}

function createDomNode (html_tag) {
	var new_dom_node = document.createElement(html_tag);
	return new_dom_node;
}

function appendDomNode (node_to_append, node_to_append_to) {
	var final_dom = node_to_append_to.appendChild(node_to_append);
	return final_dom;
}