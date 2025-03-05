// ejemplo de switch

let usuario = 'Felipe'

switch(usuario){
    case 'Diego':
        console.log('Diego es un usuario registrado')
        break;
    case 'Martin':
        console.log('Martin es un usuario registrado')
        break;
    case 'Felipe':
        console.log('Felipe es un usuario registrado')
        break;
    default:
        console.log(`Usuario no reconocido: ${usuario}`)
}