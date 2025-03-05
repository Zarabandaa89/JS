let equipo = 'REAl MadRid'.toLowerCase();

if ( equipo === 'real madrid' ) {
    console.log('El equipo es el Real Madrid');
} else if (equipo === 'barcelona') {
    console.log('El equipo es el Barcelona');
} else {
    console.log('El equipo no es ni el Real Madrid ni el Barcelona');
} 
console.log('Fin del programa');


console.log('-----------------------------------');
const definirEdad = (n, edad) =>{
    let eda = edad;
    if (eda >= 18){
        return(`puede ${n} entrar al bar`);
    } else {
        return(`no puede ${n} entrar al bar`);
    }
}
console.log(definirEdad('Juan', 18));
console.log(definirEdad('Pedro', 17));
