// requireds
const fs = require('fs');
var colors = require('colors');


let listar = (base, hasta) => {
    let texto = '';
    for (let i = 0; i<= hasta; i++) {        
        texto +=`${base*i} = ${base} * ${i} \n `;
    }
    console.log(texto.rainbow);
}

let creaArchivo = (base, hasta) => {

    return new Promise((resolve, reject) => {  

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        if (!Number(hasta)) {
            reject(`${hasta} no es un número`);
            return;
        }


        let texto = '';
        for (let i = 0; i<= hasta; i++) {        
            texto +=`${base*i} = ${base} * ${i} \n `;
        }

        fs.writeFile('tablas/tablita.txt', texto, (err) => {
            if (err) { 
                reject (err)
            } else {
                resolve ('tablita.txt');
            }
        });
    });
}


module.exports = {
    creaArchivo,
    listar
}


