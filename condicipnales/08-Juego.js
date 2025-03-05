//adivina el número

const numeroSecreto = Math.floor(Math.random() * 10 +1)
//console.log(`(DEBUG) El número secreto es: ${numeroSecreto}`); // Muestra el número secreto
const numeroUsuario = parseInt(prompt('Adivina el número secreto entre 1 y 10'));

console.log(`Este es el numero que elegiste: ${numeroUsuario}`)

if (numeroSecreto === numeroUsuario){
    console.log('Felicidades, acabas de adivinar el numero secreto')
} else if (numeroSecreto < numeroUsuario){
    console.log(`tu numero: ${numeroUsuario} es muy alto`)
} else{
    console.log(`tu numero: ${numeroUsuario} es muy bajo`)
}
