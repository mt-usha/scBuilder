function displaySC_Records (object) {
	for (i in object) {
		var new_node = createDomNode('div');
		new_node.id = i;
		var node_text = document.createTextNode(i);
		appendDomNode(node_text, new_node);
		appendDomNode(new_node, $('properties-all'));

		displayProperties(object[i]);
		
		var myelement = $('ciao');
		console.log(myelement);
		
		var nuovo_nodo = createDomNode('p');
		console.log(nuovo_nodo);
		
		appendDomNode(nuovo_nodo, $('properties-all'));
	}
}

var h_layout = ['h3', 'title'];
var p_layout = ['p', ''];
var layout = [];

		function displayProperties (SC_Record) {
			for (i in SC_Record) {
				displayProperty (i, SC_Record[i], select_layout(i));
			}
		}
		
				function displayProperty (property, property_value, layout) {
					var new_node = document.createElement(layout[0]);
					new_node.setAttribute('class', layout[1]);
					var node_text = document.createTextNode(property + ': ' + property_value);
					new_node.appendChild(node_text);
					
					document.body.appendChild(new_node);
				}
								
				function select_layout (property_to_display) {
					if (property_to_display == 'value') {
						layout = h_layout;
					}
					else if (property_to_display == 'instructions' || property_to_display == 'mandatory' || property_to_display == 'config') {
						layout = p_layout;
					}
				
					return layout;
				}
				
				
				
				
				
//				function displaySC_Records (object) {
//					for (i in object) {
//						var new_node = document.createElement('p');
//						var node_text = document.createTextNode(i);
//						new_node.appendChild(node_text);
//						
//						document.body.appendChild(new_node);
//
//						displayProperties(object[i]);
//						
//						var myelement = $('ciao');
//						console.log(myelement);
//						
//						var nuovo_nodo = createDomNode('p');
//						console.log(nuovo_nodo);
//						
//						appendDomNode(nuovo_nodo, $('properties-all'));
//					}
//				}
//
//				var h_layout = ['h3', 'title'];
//				var p_layout = ['p', ''];
//				var layout = [];
//
//						function displayProperties (SC_Record) {
//							for (i in SC_Record) {
//								displayProperty (i, SC_Record[i], select_layout(i));
//							}
//						}
//						
//								function displayProperty (property, property_value, layout) {
//									var new_node = document.createElement(layout[0]);
//									new_node.setAttribute('class', layout[1]);
//									var node_text = document.createTextNode(property + ': ' + property_value);
//									new_node.appendChild(node_text);
//									
//									document.body.appendChild(new_node);
//								}
//												
//								function select_layout (property_to_display) {
//									if (property_to_display == 'value') {
//										layout = h_layout;
//									}
//									else if (property_to_display == 'instructions' || property_to_display == 'mandatory' || property_to_display == 'config') {
//										layout = p_layout;
//									}
//								
//									return layout;
//								}
