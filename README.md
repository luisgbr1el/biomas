<h1 align="center">biomas 🇧🇷</h1>
Uma package npm para extrair informações sobre os biomas brasileiros. 🇧🇷 <br>
Fonte: IBGE
<br>
<br>
<a href="https://nodei.co/npm/biomas/"><img src="https://nodei.co/npm/biomas.png"></a> <br>
<a href="https://github.com/luisgbr1el/biomas/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/luisgbr1el/biomas"></a> 
<a href="https://github.com/luisgbr1el/biomas"><img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/luisgbr1el/biomas"></a>

# 🚩 Instalação

### Node.js
 <pre>
npm i biomas
</pre>

# 🚩 Uso

### Projeto Node.js
<pre>
const biomas = require("biomas");
</pre>
E depois
<pre>
const biomasBrasileiros = biomas.biomas;

console.log(biomasBrasileiros);
</pre>

O resultado é:
>[ <br>
>	"Amazônia", <br>
>	"Mata Atlântica", <br>
>	"Cerrado", <br>
>	"Caatinga", <br>
>	"Pampa", <br>
>	"Pantanal" <br>
>]

### Descrições dos biomas:
<pre>
const biomaAmazonia = biomas.amazonia;
const biomaMataAtlantica = biomas.mataAtlantica;
const biomaCerrado = biomas.cerrado;
const biomaCaatinga = biomas.caatinga;
const biomaPampa = biomas.pampa;
const biomaPantanal = biomas.pantanal;

console.log(biomaAmazonia);

console.log(biomaMataAtlantica);

console.log(biomaCerrado);

console.log(biomaCaatinga);

console.log(biomaPampa);

console.log(biomaPantanal);
</pre>

### Fauna e flora dos biomas:
<pre>
const anfibiosAmazonia = biomas.anfibiosAmazonia;
const avesAmazonia = biomas.avesAmazonia;
const floraAmazonia = biomas.floraAmazonia;
const mamiferosAmazonia = biomas.mamiferosAmazonia;
const peixesAmazonia = biomas.peixesAmazonia;
const repteisAmazonia = biomas.repteisAmazonia;

console.log(anfibiosAmazonia); <br>// 163 espécies, sendo 12 endêmicas<br>
console.log(avesAmazonia); <br>// 1000 espécies, sendo 32 endêmicas<br>
console.log(floraAmazonia); <br>// 13229 espécies, sendo 2956 endêmicas<br>
console.log(mamiferosAmazonia); <br>// 311 espécies<br>
console.log(peixesAmazonia); <br>// 3000 espécies<br>
console.log(repteisAmazonia); <br>// 550 espécies
</pre>

### Usando para os outros biomas:
É só adicionar depois do `anfibios`, `aves`, `flora`, `mamiferos`, `peixes` ou `repteis` o nome do bioma. <br>
Ex:
<pre>
const anfibiosMataAtlantica = biomas.anfibiosMataAtlantica;

console.log(anfibiosMataAtlantica);
// 456 espécies

const floraCaatinga = biomas.floraCaatinga;

console.log(floraCaatinga);
// 5311 espécies, sendo 1547 endêmicas
</pre>

# 🚩 Fonte
Todas as informações usadas foram retiradas do site do [IBGE](https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18307-biomas-brasileiros.html) - Instituto Brasileiro de Geografia e Estatística.

# 🚩 Autor
Luis Gabriel Araújo - [Twitter](https://twitter.com/luisgbr1el)
