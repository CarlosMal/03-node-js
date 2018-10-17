// requireds
// const {creaArchivo} = require('./multiplicar/multiplicar.js');

// let base = 'asdf';
// let hasta = 'asdf';

// let argv = process.argv

// let parametro1 = argv[2];
// let parametro2 = argv[3];

// base = parametro1.split('=')[1];
// hasta = parametro2.split('=')[1];

// console.log(base);
// console.log(hasta);

const argv = require('./config/yargs.js').argv;
const {creaArchivo, listar} = require('./multiplicar/multiplicar.js');

const argv2 = process.argv;

let comando = argv2[2];

switch (comando) {
    case 'listar':
        // console.log(argv.base);
        // console.log('hasta', argv.limite);

        listar(argv.base, argv.limite);
        
    break;
    case 'crea':        
        creaArchivo(argv.base, argv.limite)
        .then(
            archivo => console.log(`Archivo creado: ${archivo.green}`)
        )
        .catch (err => {
            console.log(err);
        });
    break;
}



// console.log(argv.crea);







// creaArchivo(base, hasta)
// .then(
//     archivo => console.log(`Archivo creado: ${archivo}`)
// )
// .catch (err => {
//     console.log(err);
// });