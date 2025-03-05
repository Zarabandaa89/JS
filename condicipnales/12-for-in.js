//lista de champions usando for in

const listaDeChampions = { //lista de equipos que han ganado la champions (objetos))
    barcelona : 5,  //cada equipo es una propiedad y el numero de copas ganadas es el valor
    realMadrid : 15,
    bayernMunich : 6,
    liverpool : 6,
    milan : 7,
    manchesterUnited : 3,
}

for (champions in listaDeChampions){ //for in recorre las propiedades de un objeto es decir solo los nombres de los equipos
    console.log(`Equipo: ${champions}, total de copas ganadas ${listaDeChampions[champions]}`); 
    //para acceder al valor en este caso el numero de copas ganadas tenemos que llamar al objeto y pasarle la propiedad
}
