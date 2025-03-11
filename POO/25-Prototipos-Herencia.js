//prototipo
class Animal { //clase padre 
    constructor(nombre, edad, raza) { //creamos el constructor con las propiedades
        this.nombre = nombre; //propiedades
        this.edad = edad; //propiedades
        this.raza = raza; //propiedades
    }
    emitirSonido() { //creamos el metodo
        console.log("El animal emite un sonido");//imprimimos el sonido
    }
    segundoMetodo() {  // ✅ Agregarlo dentro de la clase
        console.log("Esto es un segundo metodo");
    }
}
//hernecia
class Perro extends Animal { //clase hijo
    constructor(nombre, edad, raza) { //creamos el constructor con las propiedades
        super(nombre, edad, raza); //heredamos las propiedades de la clase padre
        //super sirve para llamar a las propiedades de la clase padre 
        this.peso = 10; //creamos una nueva propiedad
    }
    ladrar() { //creamos el metodo
        console.log("El perro ladra");//imprimimos el sonido
    }
    correr() {//creamos el metodo
        console.log(`${this.nombre} esta corriendo`);//imprimimos el sonido 
    }
}
//instancia
const perro1 = new Perro("Firulais", 5, "Pastor Aleman");
perro1.nuevoMetodo = function() { //creamos el metodo para la clase hijo perro
    console.log(`${this.nombre} esta cuiando la casa`); //imprimimos el sonido
}//creamos el objeto con las propiedades

console.log(perro1);//imprimimos el objeto
perro1.ladrar();//llamamos al metodo de la clase hijo
perro1.emitirSonido();//llamamos al metodo de la clase padre
perro1.nuevoMetodo();//llamamos al metodo de la clase hijo

//herencia
const perro2 = new Perro("Tobby", 10, "Pug"); //creamos el objeto con las propiedades
console.log(perro2);//imprimimos el objeto
perro2.ladrar();//llamamos al metodo de la clase hijo
perro2.correr();//llamamos al metodo de la clase hijo
perro2.emitirSonido();//llamamos al metodo de la clase padre
//perro2.nuevoMetodo();//no funcionaria ya que nuevoMetodo es un metodo solo de perro1

