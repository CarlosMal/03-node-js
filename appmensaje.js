// requireds
const fs = require('fs');

let empleados = [{      id: 1,
    nombre: 'fernando'  }, 
{       id: 2,
    nombre: 'melissa'   },
{       id: 3,
    nombre: 'jorge'     }];

let salarios = [{       id: 1,
    salario: 2000       },
{       id:2,
    salario: 3000       }];

let getIdEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
        reject(`no Existe empleado con id ${ id }`);
        } else {
        resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${ empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario, 
                id: empleado.id
            });
        }
    });
}

getIdEmpleado(2).then(empleado => {
return getSalario(empleado);
})
.then(resp => {
    let data = `El salario de ${resp.nombre} es de ${resp.salario}`;
    // console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);

    fs.writeFile('Salarios.txt', data, (err) => {
        if (err) throw err;
        console.log('se creo el archivo');
    });
})
.catch (err => {
    console.log(err);
});
