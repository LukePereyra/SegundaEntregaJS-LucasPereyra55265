//realicé la consigna pautada pero me hubiese gustado acercarme un poco más a mi proyecto que se trata de un spa, en el que primero pretendía hacer un algoritmo para sacar turno, aún no he podido volcarlo al código pero para la 3ra ya con el dom espro hacerlo, de todas formas mi pag tambien tiene tienda, en realidad mi idea es acompañarlo con el servivio principal que son los masajes y que al sacar turno tambien tenga chance de reservar los productos utilizados//




const Agregado = function(tipoDeProducto,valor,disponibilidad){
    this.tipoDeProducto=tipoDeProducto;
    this.valor=valor;
    this.disponibilidad=disponibilidad;

}

let agregado1 = new Agregado("sahumerio", 500, 50)
let agregado2 = new Agregado("velas", 200, 10)
let agregado3 = new Agregado("crema", 1500, 5)
let agregado4 = new Agregado("aceite", 2000, 3)



let combo = [agregado1,agregado2,agregado3,agregado4]



function eleccion (){
    let eleccion = prompt("¿Qué agregado quiere reservar? Puede ser: sahumerio, velas, crema o aceite").trim().toUpperCase()
    let seleccion = combo.filter(    (agregado)=> agregado.tipoDeProducto.toUpperCase().includes(eleccion)  )  
    
    
    if(seleccion.length >0){
        console.table(seleccion)
    }else{
        alert("El agregado mencionado " + eleccion + "no coincide con los que disponemos")
    }

}

eleccion()



function 