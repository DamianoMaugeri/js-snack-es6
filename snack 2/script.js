console.log('prova snack 2')

const squadre = [

    {
        nome: 'juve',
        punti: 0,
        'falli subiti': 0
    },

    {
        nome: 'milan',
        punti: 0,
        'falli subiti': 0
    },

    {
        nome: 'inter',
        punti: 0,
        'falli subiti': 0
    },

    {
        nome: 'napoli',
        punti: 0,
        'falli subiti': 0
    },

    {
        nome: 'fiorentina',
        punti: 0,
        'falli subiti': 0
    }
]
//console.log(squadre)

const arrayNomiFalli = []



for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomIntFromMinToMax(5, 100);
    squadre[i]['falli subiti'] = randomIntFromMinToMax(2, 30);

    let newobj = {}

    /*
    newobj.nome = squadre[i].nome
    newobj['falli subiti'] = squadre[i]['falli subiti']

    arrayNomiFalli.push(newobj);
    */

    arrayNomiFalli.push({
        nome: squadre[i].nome,
        ['falli subiti']: squadre[i]['falli subiti']
    })

}
//console.log(squadre)

console.log(arrayNomiFalli)



////


function randomIntFromMinToMax(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomInt
}