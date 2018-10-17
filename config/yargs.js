const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 20
    }
}

const argv = require('yargs')
.command
    ('listar', 'Descripcion: Imprime en consola la tabla de multiplicar', opciones )
.command
    ('crea', 'Descripcion: Crear la Tabla de multiplicar que con un inicio y un limite', opciones)
.argv;

module.exports = {
    argv
}