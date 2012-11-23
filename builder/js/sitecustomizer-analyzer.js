/* prelievo e organizzazione del sitecustomizer*/
function pickUpSitecustomizer (input_field) {
	var starting_sitecustomizer = document.getElementById(input_field);
	picked_sitecustomizer = starting_sitecustomizer.value;
	
	return picked_sitecustomizer;
}

function divideMultiline (multiline_string) {
	divided_lines = multiline_string.split("\n");		
	var end_of_array = divided_lines.length;

	for (var i=0; i<end_of_array; i++) {		
		if (divided_lines[i]=='') {
			divided_lines.splice(i,1);
		}
	}
	return divided_lines;
}

/* individuazione parti uguali nelle stringhe del sitecustomizer */
function detectEqualLetters (array_of_lines) {
	selectRandomLines (array_of_lines);
	
	for (var i = 0; i < random_lines.length; i++) {
		compareLetters (array_of_lines, random_lines[i]);
	}
	
	detectLastEqual (possible_last_equal_letters);
}

function selectRandomLines (array_of_lines) {
	random_lines = new Array();
	
	var i = 0;
	while (i<5) {
		var random_num = Math.floor(Math.random() * array_of_lines.length);
		if (!random_num == 0) {
			random_lines[i] = random_num;
			i++;
		}
	}
	//console.log(random_lines);
	return random_lines;
}

var possible_last_equal_letters = new Array;

function compareLetters (array_of_lines, line_to_compare) {
	var last_equal_letter = 0;
	
	var desigual_found = false;
	//console.log('ho calcolato il numero di righe dell\'array ed è pari a ' + array_of_lines_length);
	
		while (!desigual_found) {
			//console.log('sono dentro il ciclo while');
			if (array_of_lines[0][last_equal_letter] == array_of_lines[line_to_compare][last_equal_letter]) {
				//console.log('confronto ' + array_of_lines[i] + ' lettera numero ' + last_equal_letter + '(' + array_of_lines[i][last_equal_letter] + ')' + ' con ' + array_of_lines[i+1] + ' lettera numero ' + last_equal_letter + '(' + array_of_lines[i+1][last_equal_letter] + ')');
				//console.log('lettere in posizione ' + last_equal_letter + ' trovate uguali; vado avanti');
				last_equal_letter += 1;
			}
			else {
				//console.log('sono entrato nell\'else');
				desigual_found = true;
				possible_last_equal_letters.push(last_equal_letter);
				last_equal_letter = 0;
			}
		}
}

function detectLastEqual (possible_lasts) {
	possible_lasts.sort(function (a,b) {
		return (a-b);
	});
	
	last_letter_to_erase = possible_lasts[0];
	return last_letter_to_erase;
}

function removeEqualLetters (divided_lines) {
	for (var i=0; i < divided_lines.length; i++) {
		//console.log(divided_lines[i]);
		divided_lines[i] = divided_lines[i].substr(last_letter_to_erase);
		//console.log(divided_lines[i]);
		//document.write(divided_lines[i]);
	}
	//console.log(divided_lines);
}

function prepareSitecustomizer (input_field) {
	pickUpSitecustomizer(input_field);
	divideMultiline(picked_sitecustomizer);
	//selectRandomLines(divided_lines);
	
	if (divided_lines.length > 1) {
		detectEqualLetters(divided_lines);
		console.log('l\'ultima lettera che ho trovato uguale è la numero ' + last_letter_to_erase);
		removeEqualLetters(divided_lines);
		
		///////////////////////////////////
		
		//buildPropertyObject(divided_lines);
		buildNewSC(divided_lines);
		displaySC_Records(NewSiteCustomizer);
	}
	else {
		console.log('c\'è una sola riga');
	}	
}

/* da un array ad un oggetto complesso */

function findEqualSign (string) {
	var equal_position = string.indexOf("=");
	return equal_position;
}

function getKey (string) {
	var key = string.substring(0, findEqualSign(string));
	return key;
}

function getValue (string) {
	var value = string.substring(findEqualSign(string) + 1);
	return value;
}

var NewSiteCustomizer = {};

function SC_String (value) {
	this.value = value;
	this.mandatory = true;
	this.istructions = 'Istruzioni legate alla chiave';
	this.config = 'Regole per gestire il layout della configurazione';
}

function buildNewSC (starting_array) {
	for (var i = 0; i < starting_array.length; i ++) {
		NewSiteCustomizer[getKey(starting_array[i])] = new SC_String(getValue(starting_array[i]));
	}
}

NewSiteCustomizer.prototype.length = function () {
	var num_of_elements = 0;
	
	for (i in NewSiteCustomizer) {
		num_of_elements ++;
	}
	
	return num_of_elements;
};