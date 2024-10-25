console.log('prova snack 1')

const arraybici = [

    {
        nome: 'Giant Propel Advanced SL 0',
        peso: 6.8,
    },

    {
        nome: 'Scott Addict RC Ultimate',
        peso: 6.7,
    },

    {
        nome: 'Specialized S-Works Aethos/Sram Red Etap AXS',
        peso: 6.36,
    },

    {
        nome: 'Wilier Zero SLR',
        peso: 6.8,
    },

    {
        nome: 'Orbea Orca M10iLTD PWR',
        peso: 6.64,
    },

    {
        nome: 'Look 795 Blade RS',
        peso: 7,
    },

    {
        nome: 'Cube Litening Air C:68X SLT',
        peso: 6.6,
    },

    {
        nome: 'Bianchi Specialissima RC/Shimano Dura-Ace',
        peso: 6.36,
    }
]



let oggettoBiciLeggera = arraybici[0];

let arrayRisultati = [];



for (let i = 0; i < arraybici.length; i++) {


    if (arraybici[i].peso < oggettoBiciLeggera.peso) {

        oggettoBiciLeggera = arraybici[i];
    }

}
for (let i = 0; i < arraybici.length; i++) {


    if (arraybici[i].peso === oggettoBiciLeggera.peso) {

        arrayRisultati.push(arraybici[i]);
    }

}

console.log(oggettoBiciLeggera)
console.log(arrayRisultati)



const nomeElement = document.getElementById('nome-bici');
const pesoElement = document.getElementById('peso-bici');

nomeElement.innerHTML = `${oggettoBiciLeggera.nome}`
pesoElement.innerHTML = `con il peso di: ${oggettoBiciLeggera.peso}kg`
