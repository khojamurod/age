let  x = prompt('Ismingiz :')

function age() {
    let  y = +prompt('Hoz nechanchi yil')
    let  z = +prompt('Nechanchi yil tug`ilgansiz')
    
    return y-z
}
if(x=='Sultonbek'){
    alert('Assalomu Alaykum ustoz, sizni yoshingz '+ age()+'da')
}else{
alert( x + ' yoshingiz ' + age()+'da')
}