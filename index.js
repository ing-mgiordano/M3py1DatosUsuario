const nombre = prompt ('Cual es tu nombre?', 'Tu nombre')


const apellido = prompt ('Cual es tu apellido?', 'Tu apellido')


const edad = prompt ('Cual es tu edad?', 'Edad')


const datosUser = `Tu nombre es ${nombre}, tu apellido es ${apellido} y tu edad es ${edad} años`

alert(datosUser)
document.getElementById('datosUsuario').innerHTML = datosUser 
console.log(nombre, apellido, edad)

