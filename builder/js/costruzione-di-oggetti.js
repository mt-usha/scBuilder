oggetto2 = new Object
Object
__proto__: Object
oggetto2
Object
__proto__: Object
var contenitore = new Object
undefined
contenitore
Object
__proto__: Object
__defineGetter__: function __defineGetter__() { [native code] }
__defineSetter__: function __defineSetter__() { [native code] }
__lookupGetter__: function __lookupGetter__() { [native code] }
__lookupSetter__: function __lookupSetter__() { [native code] }
constructor: function Object() { [native code] }
hasOwnProperty: function hasOwnProperty() { [native code] }
isPrototypeOf: function isPrototypeOf() { [native code] }
propertyIsEnumerable: function propertyIsEnumerable() { [native code] }
toLocaleString: function toLocaleString() { [native code] }
toString: function toString() { [native code] }
valueOf: function valueOf() { [native code] }
cose_da_creare = ['casa', 'albero', 'mulino']
["casa", "albero", "mulino"]
for (i=0; i <cose_da_creare.length; i++)
{
contenitore[i] = {tipo_di_costruzione:cose_da_creare[i], numero:4};
}
Object
numero: 4
tipo_di_costruzione: "mulino"
__proto__: Object
contenitore
Object
0: Object
numero: 4
tipo_di_costruzione: "casa"
__proto__: Object
1: Object
numero: 4
tipo_di_costruzione: "albero"
__proto__: Object
2: Object
numero: 4
tipo_di_costruzione: "mulino"
__proto__: Object
__proto__: Object
contenitore[0]
Object
contenitore[0].numero
4
contenitore{0}.numero
SyntaxError: Unexpected token {
contenitore[0].numero
4
contenitore[0].tipo_di_costruzione
"casa"
contenitore
Object
0: Object
numero: 4
tipo_di_costruzione: "casa"
__proto__: Object
__defineGetter__: function __defineGetter__() { [native code] }
__defineSetter__: function __defineSetter__() { [native code] }
__lookupGetter__: function __lookupGetter__() { [native code] }
__lookupSetter__: function __lookupSetter__() { [native code] }
constructor: function Object() { [native code] }
hasOwnProperty: function hasOwnProperty() { [native code] }
isPrototypeOf: function isPrototypeOf() { [native code] }
propertyIsEnumerable: function propertyIsEnumerable() { [native code] }
toLocaleString: function toLocaleString() { [native code] }
toString: function toString() { [native code] }
valueOf: function valueOf() { [native code] }
1: Object
2: Object
__proto__: Object
contenitore2 = {}
Object
contenitore2
Object
__proto__: Object
function Costruzione () {
this.tipo_di_palazzo = 'casa';
}
undefined
Costruzione
function Costruzione() {
this.tipo_di_palazzo = 'casa';
}
function Costruzione (tipo_di_palazzo, numero, altezza) {
this.tipo_di_palazzo = tipo_di_palazzo;
this.numero = numero;
this.altezza = altezza;

}
undefined
Costruzione
function Costruzione(tipo_di_palazzo, numero, altezza) {
this.tipo_di_palazzo = tipo_di_palazzo;
this.numero = numero;
this.altezza = altezza;

}
costruzioni_da_realizzare = ['albergo', 'piscina', 'chiesa']
["albergo", "piscina", "chiesa"]
for (i=0; i<costruzioni_da_realizzare.length; i ++) {
costruzioni_da_realizzare[i] = new Costruzione(costruzioni_da_realizzare[i], 3, 12);
}
Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "chiesa"
__proto__: Costruzione
costruzioni_da_realizzare
[
Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "albergo"
__proto__: Costruzione
, 
Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "piscina"
__proto__: Costruzione
, 
Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "chiesa"
__proto__: Costruzione
]
for (i=0; i<costruzioni_da_realizzare.length; i ++) {
contenitore2[i] = new Costruzione(costruzioni_da_realizzare[i], 3, 12);
}
Costruzione
contenitore2
Object
0: Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: Costruzione
__proto__: Costruzione
1: Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: Costruzione
__proto__: Costruzione
2: Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: Costruzione
__proto__: Costruzione
__proto__: Object
costruzioni_da_realizzare = ['albergo', 'piscina', 'chiesa']
["albergo", "piscina", "chiesa"]
for (i=0; i<costruzioni_da_realizzare.length; i ++) {
contenitore2[i] = new Costruzione(costruzioni_da_realizzare[i], 3, 12);
}
Costruzione
contenitore2
Object
0: Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "albergo"
__proto__: Costruzione
1: Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "piscina"
__proto__: Costruzione
2: Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "chiesa"
__proto__: Costruzione
__proto__: Object
contenitore2[0]
Costruzione
altezza: 12
numero: 3
tipo_di_palazzo: "albergo"
__proto__: Costruzione
contenitore2.1
SyntaxError: Unexpected number
estrazione = []
[]
estrazione
[]
for (var i = 0; i < contenitore2.length; i++) {
if (contenitore2[i].tipo_di_palazzo = 'albergo') {
estrazione = estrazione.push(i);
}
}
undefined
estrazione
[]
for (var i = 0; i < contenitore2.length; i++) {
if (contenitore2[i].tipo_di_palazzo = 'albergo') {
estrazione = estrazione.push(i);
}
}
undefined
estrazione
[]
estrazione = estrazione.push('ioooo')
1
estrazione
1
typeof(estrazione)
"number"
estrazione = new Array
[]
estrazione
[]
estrazione.push('matteo')
1
estrazione
["matteo"]
for (var i = 0; i < contenitore2.length; i++) {
if (contenitore2[i].tipo_di_palazzo = 'albergo') {
estrazione = estrazione.push(i);
}
}
undefined
estrazione
["matteo"]
for (var i = 0; i < contenitore2.length; i++) {
if (contenitore2[i].tipo_di_palazzo = 'albergo') {
estrazione = estrazione.push('i');
}
}
undefined
estrazione
["matteo"]
contenitore2[0].tipo_di_palazzo
"albergo"
contenitore2[0].altezza
12
for (var i = 0; i < contenitore2.length; i++) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
estrazione = estrazione.push('i');
}
}
undefined
estrazione
["matteo"]
estrazione
["matteo"]
for (var i = 0; i < contenitore2.length; i++) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
estrazione = estrazione.push(i);
}
}
undefined
estrazione
["matteo"]
for (var i = 0; i < contenitore2.length; i++) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
estrazione = estrazione.push(i);
}
}
undefined
for (var i = 0; i < contenitore2.length; i++) {

console.log('entro nel for');

if (contenitore2[i].tipo_di_palazzo == 'albergo') {
console.log('entro nell_IF');
estrazione = estrazione.push(i);
}
}
undefined
estrazione
["matteo"]
for (var i = 0; i < contenitore2.length; i++) {

console.log('entro nel for');

if (contenitore2[i].tipo_di_palazzo == 'albergo') {
console.log('entro nell_IF');
estrazione = estrazione.push(i);
}
}
undefined
for (var i = 0; i < contenitore2.length; i++) {

casuale = 'numero a caso';

if (contenitore2[i].tipo_di_palazzo == 'albergo') {
casuale2 = 'casuale nell_IF';
estrazione = estrazione.push(i);
}
}
undefined
casuale
ReferenceError: casuale is not defined
for (var i = 0; i < contenitore2.length; i++) {

casuale = 'numero a caso';

if (contenitore2[i].tipo_di_palazzo == 'albergo') {
casuale2 = 'casuale nell_IF';
estrazione = estrazione.push(i);
}
}
undefined
for (var i in contenitore2) {}
undefined
contenitore2
Object
0: Costruzione
1: Costruzione
2: Costruzione
__proto__: Object
for (var i in contenitore2) {
if () {

}
SyntaxError: Unexpected token )
for (var i in contenitore2) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
esistenza = true;
}
}
true
for (var i in contenitore2) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
esistenza = true;
}
}
true
albergo = new Boolean
Boolean
albergo
Boolean
__proto__: Boolean
for (var i in contenitore2) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
albergo = true;
}
}
true
albergo
true
for (var i in contenitore2) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
albergo = true;
}
}
true
for (var i in contenitore2) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
albergo = true;
console.log('che figata: ci sono alberghi da costruire');
}
}
che figata: ci sono alberghi da costruire
undefined
for (var i in contenitore2) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
albergo = true;
console.log('che figata: ci sono alberghi da costruire');
}
}
che figata: ci sono alberghi da costruire
undefined
albergo
true
albergo = false
false
for (var i in contenitore2) {
if (contenitore2[i].tipo_di_palazzo == 'albergo') {
albergo = true;
console.log('che figata: ci sono alberghi da costruire');
}
}
che figata: ci sono alberghi da costruire
undefined
albergo
true
albergo
