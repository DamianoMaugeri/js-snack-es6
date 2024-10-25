console.log('prova snack 1')

const arraybici = []

const bici1 = {
    nome : 'Giant Propel Advanced SL 0',
    peso : 6.8,
}

const bici2 = {
    nome : 'Scott Addict RC Ultimate',
    peso : 6.7,
}

const bici3 = {
    nome : 'Specialized S-Works Aethos/Sram Red Etap AXS',
    peso : 6.36,
}

const bici4 = {
    nome : 'Wilier Zero SLR',
    peso : 6.8,
}

const bici5 = {
    nome : 'Orbea Orca M10iLTD PWR',
    peso : 6.64,
}

const bici6 = {
    nome : 'Look 795 Blade RS',
    peso : 7,
}

const bici7 = {
    nome : 'Cube Litening Air C:68X SLT',
    peso : 6.6,
}

const bici8 = {
    nome : 'Bianchi Specialissima RC/Shimano Dura-Ace',
    peso : 6.6,
}

arraybici.push(bici1,bici2,bici3,bici4,bici5,bici6,bici7,bici8)
console.log(arraybici)

let bicileggera =''

let pesobicileggera = 100

for (let i=0; i < arraybici.length; i++){

    if (arraybici[i].peso <pesobicileggera){

        bicileggera = arraybici[i].nome;
        pesobicileggera = arraybici[i].peso;
    }
    
}

console.log(bicileggera,pesobicileggera);

const nomeElement = document.getElementById('nome-bici');
const pesoElement = document.getElementById('peso-bici');

nomeElement.innerHTML = `${bicileggera}`
pesoElement.innerHTML = `con il peso di: ${pesobicileggera}kg`
