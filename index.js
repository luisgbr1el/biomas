const biomasBrasileiros = require('./biomasAll/biomasBrasileiros.json');
const biomasInfo = require('./biomasAll/biomasInfo.json');
const faunaFloraAmazonia = require('./biomasFaunaFlora/faunaFloraAmazonia.json');
const faunaFloraMataAtlantica = require('./biomasFaunaFlora/faunaFloraMataAtlantica.json');
const faunaFloraCerrado = require('./biomasFaunaFlora/faunaFloraCerrado.json');
const faunaFloraCaatinga = require('./biomasFaunaFlora/faunaFloraCaatinga.json');
const faunaFloraPampa = require('./biomasFaunaFlora/faunaFloraPampa.json');
const faunaFloraPantanal = require('./biomasFaunaFlora/faunaFloraPantanal.json');

const amazoniaInfo = biomasInfo[0],
	mataAtlanticaInfo = biomasInfo[1],
	cerradoInfo = biomasInfo[2],
	caatingaInfo = biomasInfo[3],
	pampaInfo = biomasInfo[4],
	pantanalInfo = biomasInfo[5];

const anfibiosAmazonia = faunaFloraAmazonia[0],
	avesAmazonia = faunaFloraAmazonia[1],
	floraAmazonia = faunaFloraAmazonia[2],
	mamiferosAmazonia = faunaFloraAmazonia[3],
	peixesAmazonia = faunaFloraAmazonia[4],
	repteisAmazonia = faunaFloraAmazonia[5];

const anfibiosMataAtlantica = faunaFloraMataAtlantica[0],
	avesMataAtlantica = faunaFloraMataAtlantica[1],
	floraMataAtlantica = faunaFloraMataAtlantica[2],
	mamiferosMataAtlantica = faunaFloraMataAtlantica[3],
	peixesMataAtlantica = faunaFloraMataAtlantica[4],
	repteisMataAtlantica = faunaFloraMataAtlantica[5];

const anfibiosCerrado = faunaFloraCerrado[0],
	avesCerrado = faunaFloraCerrado[1],
	floraCerrado = faunaFloraCerrado[2],
	mamiferosCerrado = faunaFloraCerrado[3],
	peixesCerrado = faunaFloraCerrado[4],
	repteisCerrado = faunaFloraCerrado[5];

const anfibiosCaatinga = faunaFloraCaatinga[0],
	avesCaatinga = faunaFloraCaatinga[1],
	floraCaatinga = faunaFloraCaatinga[2],
	mamiferosCaatinga = faunaFloraCaatinga[3],
	peixesCaatinga = faunaFloraCaatinga[4],
	repteisCaatinga = faunaFloraCaatinga[5];

const anfibiosPampa = faunaFloraPampa[0],
	avesPampa = faunaFloraPampa[1],
	floraPampa = faunaFloraPampa[2],
	mamiferosPampa = faunaFloraPampa[3],
	peixesPampa = faunaFloraPampa[4],
	repteisPampa = faunaFloraPampa[5];

const anfibiosPantanal = faunaFloraPantanal[0],
	avesPantanal = faunaFloraPantanal[1],
	floraPantanal = faunaFloraPantanal[2],
	mamiferosPantanal = faunaFloraPantanal[3],
	peixesPantanal = faunaFloraPantanal[4],
	repteisPantanal = faunaFloraPantanal[5];

module.exports = { 
	biomas: biomasBrasileiros,
	amazonia: amazoniaInfo,
	mataAtlantica: mataAtlanticaInfo,
	cerrado: cerradoInfo,
	caatinga: caatingaInfo,
	pampa: pampaInfo,
	pantanal: pantanalInfo,
	anfibiosAmazonia: anfibiosAmazonia,
	avesAmazonia: avesAmazonia,
	floraAmazonia: floraAmazonia,
	mamiferosAmazonia: mamiferosAmazonia,
	peixesAmazonia: peixesAmazonia,
	repteisAmazonia: repteisAmazonia,
	anfibiosMataAtlantica: anfibiosMataAtlantica,
	avesMataAtlantica: avesMataAtlantica,
	floraMataAtlantica: floraMataAtlantica,
	mamiferosMataAtlantica: mamiferosMataAtlantica,
	peixesMataAtlantica: peixesMataAtlantica,
	repteisMataAtlantica: repteisMataAtlantica,
	anfibiosCerrado: anfibiosCerrado,
	avesCerrado: avesCerrado,
	floraCerrado: floraCerrado,
	mamiferosCerrado: mamiferosCerrado,
	peixesCerrado: peixesCerrado,
	repteisCerrado: repteisCerrado,
	anfibiosCaatinga: anfibiosCaatinga,
	avesCaatinga: avesCaatinga,
	floraCaatinga: floraCaatinga,
	mamiferosCaatinga: mamiferosCaatinga,
	peixesCaatinga: peixesCaatinga,
	repteisCaatinga: repteisCaatinga,
	anfibiosPampa: anfibiosPampa,
	avesPampa: avesPampa,
	floraPampa: floraPampa,
	mamiferosPampa: mamiferosPampa,
	peixesPampa: peixesPampa,
	repteisPampa: repteisPampa,
	anfibiosPantanal: anfibiosPantanal,
	avesPantanal: avesPantanal,
	floraPantanal: floraPantanal,
	mamiferosPantanal: mamiferosPantanal,
	peixesPantanal: peixesPantanal,
	repteisPantanal: repteisPantanal,
}

