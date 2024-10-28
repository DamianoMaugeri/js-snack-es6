
const memberEmail = ['kcyg4y4yve@email.net',
    'qj1zgkmmelqc@example.com',
    'fljpv1uyiz@email.net',
    '2fqlmbs9pl@example.com',
    '7rpwut09c9x@test.org',
    'deuv2fxft@example.com',
    '9up4d5q74kd@email.net',
    'iazxosp1@email.net',
    '2wv6v4znf@example.com',
    'utv8624c@test.org',
    '6ns9mo516b@example.com',
    '7cv0jaxdrmm5@mail.com',
    '5di2c7iae3k@mail.com',
    'jysddde4@example.com',
    'ya815h4cf@mail.com',
    '7j8ghkkxwkr@example.com',
    'yn6bnh2xpzy@test.org',
    'bd0ibri@mail.com',
    '6hfqns9vuijm@test.org',
    'rk9pp3rqa7@example.com'];



const nuovo = arrayPiuPiccolo(memberEmail, 2, 7)

console.log(nuovo)

/**
 * 
 * @param {Array} array 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Array | undefined}
 */
function arrayPiuPiccolo(array, a, b) {


    // aggiungere controlli 
    // se il nostro array da ciclare non è un array 
    if (!Array.isArray(array)) {
        console.error('element che in questo caso abbiamo chiamato array deve essere un array');
        return
    }

    if (isNaN(a)) {
        console.error('a non è un numero')
        return
    }

    if (isNaN(b)) {
        console.error('b non è un numero')
        return
    }



    if (a < 0) {
        a = 0
    }
    // stesso caso con b ma al contrario

    if (b > array.length) {
        b = array.length
    }


    a = Math.max(a, 0);
    b = Math.min(b, array.length);




    let newArray = []

    /*

    for (let i=0; i<array.length; i++){

        if(i >= a && i < b ){
            newArray.push(array[i])
        }

    }
    return newArray 

    */

    for (let i = a; i < b; i++) {

        newArray.push(array[i])

    }
    return newArray


}



