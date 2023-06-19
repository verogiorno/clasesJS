// //CLASE 8

// // Palabra reservada (son palabras que solo las puede usar el lenguage) ej: var, let, const
// // "Asignar" a la variable

// //Variables (espacios de memoria donde se guardan elementos)
// var palabras= "hola soy string" //siempre entre comillas
// console.log(palabras) //cuando el programa esta funcional, el console.log se elimina. Se usa para revisar las variables
// var numeros = 9 //si lo pones en comillas, lo toma como string y no con numero
// var escasado= true //booleano

// var array=[]
// var objetosliterales={}
// var arrayObjetos=[{}]

// //Operadores aritméticos (suma +, resta -, multiplicación *, división /, y resto % de una división)
// var resultado
// var numero1 =5
// var numero2 =10
// resultado=numero1+numero2
// console.log(resultado)

// /* Operadores relacionales

// < menor
// > mayor
// <= menor o igual
// >= mayor o igual
// = asignar
// == igual
// === estrictamente igual
// != distinto 
// */

// //estructura condicional simple

// //Condición (compuesta x 3 elemtos: Variable, operador relacional, variable o valor)

// //Estructura condicional simple
// var edadpermitidopasar = 19
// var marcos = 18

// if (marcos >= 19){
// //si esto es verdadero
// console.log('podes pasar')
// }

// //Estructura condicional compuesta
// var nombreAlumno = "micaela"
// var notaAlumno = 9

// if(notaAlumno>=6){
//     //console.log(nombreAlumno, ' estas aprobado porque tenes una nota de:' ,notaAlumno) //se puede poner un + por la ,
// //template string
// //comillas magicas invertidas/backsticks
// console.log(`${nombreAlumno} estas aprobado porque tenes una nota de ${notaAlumno +10}`) //se puede hacer operaciones adentro de las {}

// }else{
//     console.log ('estas desaprobado')
// }

// //Operador Ternario (? = if    : = else) (El OT solo se usa para booleano)

// notaAlumno >= 6 ? console.log(`${nombreAlumno} estas aprobado porque tenes una nota de ${notaAlumno}`): console.log(`${nombreAlumno} estas desaprobado porque tenes una nota de ${notaAlumno}`)


// //Operadores Lógicos
// // y ==> && (f t  = f) si tiene un falso, el resultado es falso
// // 0 ==> || (f t  = t) si tiene un verdadero, el resultado es verdadero

// //!(t && t = t) invierte el resultado por endere ahroa sería = f

// // ej:
// // (5>96 && 5>0) = F
// // Pero si le agregamos ! adelante pasa lo siguiente
// // !(5>96 && 5>0) = V
// // Se invierte el resultado


// var avanzar = true
// //Operador cortocircuito o circuito corto (solo se puede usar para if del tipo simple y solo cuando estas ante una condicion que me da t or f y tengo un mensaje) => se utiliza mucho en react en js no tanto
// if(avanzar == true){
//     console.log(`podes avanzar`)
// }
// else{
//     console.log(`NO podes avanzar`)
// }


// avanzar && console.log(`podes avanzar`)


// //Estructura condicional anidada

// var nota1 = 5
// var nota2 = 6
// var nota3 = 7

// var promedio = (nota1+nota2+nota3)/3
// if (promedio >=7){
// console.log (`el alumno esta aprobado`)
// }else{
//     if(promedio >=4){
//     console.log (`el alumno tiene un regular`)
//     }else{
//         console.log(`el alumno tiene un el alumno está desaprobado`)
//     }
// }
// //aprobado 7
// //regular 4
// //desaprobado

// // Estructura Switch (es una alternativa para reemplazar en algunas situacioens a la estructura condicional anidada. Se puede aplicar donde la condicion se verifica si es igual (==) a cierto valor. No pse puede preguntar x mayor o menor.)

// var mensaje = 'dog'

// if(mensaje == 'cat'){
// console.log(`la traduccion es GATO`)
// }else{
//     if(mensaje=='table'){
//         console.log(`la traducion es MESA`)
//         }else{
//             if(mensaje=='dog'){
//             console.log(`la traducion es PERRO`)
//         }else{
//         console.log(`no se encontro la traduccion`)
//         }
//     }
// }
// //Este ejemplo era para que entendieramos lo confuso que es poner tantos if/else con las estructuras condicionales compuestas, ahora viene el ejemplo de una estructura SWITCH:

// switch(mensaje){                                    //es este ejemplo de condición, mensaje es la variable, case es 
//     case 'cat' :                                    //el operador relacional y cat, table, dog son los tipos de valor.
//                 console.log(`la traducion es GATO`)
//                 break;
//     case 'table' :
//                 console.log(`la traducion es MESA`)
//                 break;
//     case 'dog' :
//                 console.log(`la traducion es PERRO`)
//                 break;
//     default:
//         console.log(`no se encontro la traduccion`)
//     //case es el Operador relacional, y despues viene el valor (variable o tipo de dato) el cual vamos a comparar. EN el ej es cat. 
//     //El break hace que finalice la condición. (se puede utilizar el break en un if, pero el profe recomienda no hacerlo)
//     //El switch tiene una palabra reservada exclusivamente de switch, que es el default (x defecto) EL default no necesita un break.
//     //La lectura de las estructuras es SECUENCIAL
//     //Los : en una estructura switch equivalen a {} (No tiene nada que ver con el Operador Ternario)
// }

// //Estructura Repetitiva While (mientras) => se va a ejecutar/repetir hasta que algo se cumpla. El funcionamiento de While permite verificar la condición. Si la condición es T se va a ejecutar/repetir hasta que la condición de F y ahí es cuando el programa termina.

// // var x = 1
// // while(x<=10){
// // console.log(x)
// // }

// //Una Estructura Repetitiva While necesita sí o sí o contador para que no se quede en un bucle/loop infinito como en el caso de arriva que siempre que x sea menor o igual a 10 la condición se va a repetir infinitamente (lo que ocasiona que se te cuelgue la PC)
// //Un CONTADOR es un tipo especial de variable que se incrementa o decrementa con valores constantes durante la ejecución de ese programa. EL CONTADOR nos indica en cada momento la cantidad de valores impresos.


// var x = 1
// while(x<=10){
//     console.log(x)
//     x = x + 1
// }
 
// //La operación va a ser T y se va a repetir hasta que x = 11


// var x = 1
// while(x<=10){
//     console.log(`Hola Buenos dias: Esta es la vuelta ${x}`)
//     x = x + 1
// }

// // CLASE 9


// //Estructura Repetitiva For (es como una versión simplificada del while)
// //(se emplea en aquellas situaciones en las que sabemos la cantidad de veces que queremos que se ejecute)
// //se compone: "for ()" dentro del for hay 3 etapas inciialización, condición y el incremento/decremento

// //Condición: compuesta x una variable, Operador relacional, y otra varieble o un tipo de valor

// //For Tradicional recorre un array compelto de punta a punta pero además le podes marcar desde que posición arrancar y hasta cual posición leer
// for(var i = 1; i<=10;i=i+1){
// console.log(i)
// }


// //i++ es lo mismo que hacer i=i+1 pero simplificado

// //Scope es el alcanze de variables (hasta donde pueden llegar las variables)

// //En JS tenemos 3 tipos de variables
// //var, let y const (ves Daniel, que const es variable, sonso)
// //En JS se dejó de usar var y se usa let
// //Const = constante (es una variable que no varía ej: const pi =3.14 el valor de las constantes NO se puede cambair)


// //Arrays

// // let miarray=[20, 96, 1, 'm', 'booleanos', true, false, 22222, [45, 'buenos dias']]
// // console.log(miarray)

// //Al array le podemos poner infinidades de elementos, incluso puede haber un array dentro de otro

// //posiciones: Para JS, el primer ítem de un array está en la posición 0 (índices). Para abrir una posición en particular hacermos lo siguiente:
// console.log(miarray[0])

// //Cuando se necesita recorrer/iterar un array para así inspeccioanr cada elemento, lo que hay que hacer es recorrerlo con un WHILE o un FOR
// let miarray=[20, 96, 1, 'hola mundo', 'm', true]

// i=0 
// while(i<6){
//     console.log(miarray[i])
//     i++
// }

// //dowhile (vino después del while. Ya no se usa)

// //for (el for es una actualización del while. El while ya no se utiliza)

// for(let j=0;j<6;j++){
//     console.log(miarray[j])
// }

// let objetos=[20, 96, 1, 'hola mundo', 'm', true]

// //FOR OF recorre un array compelto de punta a punta (es otra actualización de JS)
// //dentro del for va la variable let + el nombre de la variale en singular + of + nombre de la variable en plural

// for(let objeto of objetos){
//     console.log(objeto)
// }

// //Propiedades en JS
// //LENGTH

// // let mensaje= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat corporis maxime reiciendis commodi, ullam provident fuga ipsa dolorem sapiente quibusdam modi placeat ut, obcaecati, quam a quod inventore aspernatur.'

// // let cantidad= mensaje.length
// //     console.log(cantidad)
// //muestra la cantidad de caracteres, en este caso= 231

// let cantidad=miaray.length
// //muestra la cantidad de elemntos, en este caso= 6


// //Objetos clases JS
// //Método
// //variable.nombreeningles()
// let fecha=new Date()

//     console.log(`la hora actual es: 
//     ${fehca.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`)

//     console.log(`${fecha.getDate()} / ${fecha.getMonth()+1} / ${fecha.getFullYear()}`)

// // Al getMonth se le agrega +1 porque la posición de Enero (el primer mes de l año) es 0 y al agregarle el +1 se arregla ese problema

// console.log(`${fecha.getDay()}`)
// //Lo mismo ocurre con getDate que muestra los días de la semana. Domingo estaría en la posición 0 al ser el primer día de la semana


// //Objeto o clase Math (matemáticas)
// //hay que darle un valor numérico

// // let valor = Math.floor(2.7)
// // console.log(valor)
// //Math.floor redondea para abajo en este caso sería 2

// // let valor = Math.round(2.7)
// // console.log(valor)
// //Math.round redondea hacia el entero más cercano en este caso sería 3 

// //let valor = Math.random() //Al no colocar nada entre los parentésis te un número random entre 0 y 1
// // console.log(valor) 

// // let valor = Math.random()*15 //al agregarle el *15 me va a tirar un núnero entre el 0 y el 15 
// // console.log(valor)

// // let valor = Math.random()*15(1) //Al agregarle el (1) esto te da un numero del 1 al 15

// let valor = Math.random()*15
// let resultado= Math.round(valor)
// console.log(resultado)
// //Esto hace que se redondee ese valor random que va desde el 0 al 15

// let valorfinal=Math.round(Math.random()*15) //forma correcta de hacer lo mismo que arriba

// let mensaje= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat corporis maxime reiciendis commodi, ullam provident fuga ipsa dolorem sapiente quibusdam modi placeat ut, obcaecati, quam a quod inventore aspernatur.'

// let resultado=mensaje.charAt(25)
// console.log(resultado)
// //Te muestra la posición de caracter que en este caso es la t de la palabra amet


// let resultado=mensaje.substring(2)
// console.log(resultado)
// //Te sustrae los caracteres, en este caso en la consola te muestra desde 'rem ipsum dolor...' ya que arranca desde la posición 2. Sustrajo desde la posición 0-2 

// let resultado=mensaje.substring(2,9)
// console.log(resultado)
// //Se puede colocar dos valores que corresónded a la posición inicial y la posición final. En esta caso, en la consola se visualiza 'rem ips'

// let resultado=mensaje.indexOf('Lorem')
// console.log(resultado)
// //Te muestra la posición donde se encuentra la palabra

// let resultado=mensaje.toUpperCase()
// console.log(resultado)
// //Te muestra todas las minúsculas en mayúscula y .toLowerCase te muestra todas las mayús en minúsculas


// //CLASE 10

// //Funciones hacen nuestro código más factible (diseccionan nuestro código)
// //Existen 3 formas de hacer funciones

// let numero1 = 56
// let numero2 = 23

// /*function suma(){
//     console.log('hola soy la función suma')
// }*/

// //1. La llamada a la función (para que se ejecute) (es indistinto ponerla arriba o abajo pero por buenas practicas es mejor ponerla abajo)

// //suma(numero1, numero2)

// //2. Funciones con parámetro

// /*function suma(primer_numero){                //El profe recomienda cambiar el nombre de la variable adentro de la función para no 
//     console.log('hola soy la función suma')  // confunidrnos y xq se debe hacer así
//     console.log(primer_numero, segundo_numero)

//     let resultado=primer_numero+segundo_numero
//     console.log(resultado)
// }

// suma(numero1, numero2)*/

// //3. Funciones que retornan un valor

// function suma(primer_numero){
//     let resultado=primer_numero+segundo_numero
//     return resultado
// }

// //console.log(suma(numero1, numero2))

// /*let resultadoFinal=suma(numero1, numero2)
// console.log(resultadoFinal)*/


// //FUNCIONES NOMBRADAS (se usa más ara otros lenguages como Python y C++)

// function suma(){
//     let resultado=numero1+2
//     console.log(resultado)
// }

// suma()
// let resultadoFinal= numero1+5
// console.log(resultadoFinal)


//FUNCIÓN FLECHA (Es el formato que usa JS hoy en día y es un formato más entendible)

/*let suma(a,b)=>{
    let resultado=a+b
    console.log('soy una función flecha')
    return resultado
}

console.log(suma(5,2))



let nombre='pedro'
let edad=25
let esCasado=true

console.log(`mi nomber es ${nombre} tengo ${edad} años y estoy ${esCasado? 'casado': 'soltero'}`)

//condición

if(esCasado==true){
    console.log('casado')
}else{
    console.log('soltero')
} */

//Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

/*const puedeVerPelicula = (edad,tieneAutorizacion)=>{
    // if(edad >=15 || tieneAutorizacion){
    //     return(`puede ver la película`)
    // }else{
    //         return(`como es menor y no tiene autorización no puede ver la película`)            
    //     }
        //Versión simplificada
        return (edad >=15 || tieneAutorizacion) ? `puede ver la película` : `como es menor y no tiene autorización no puede ver la película`
    }   
//^^^^^el return esta en lugar del console.log. Una vez que verificamos que todo anda bien con el console.log, lo borramos/cambiamos x el return
console.log(puedeVerPelicula(12, true))
console.log(puedeVerPelicula(14, false))
console.log(puedeVerPelicula(20, false))
console.log(puedeVerPelicula(27, true)) */

//Definí una función esVocal que tome por parametro un string letra y nos indique si la letra es una vocal.

/*const esVocal = (letra)=>{
//     if (letra=== 'a' || letra=== 'e' || letra=== 'i' || letra=== 'o' || letra=== 'u'){
//         return(`es una vocal`)
//     }else{
//             return(`es una consonante`)            
//         }
return(letra=== 'a' || letra=== 'e' || letra=== 'i' || letra=== 'o' || letra=== 'u')//? `es una vocal` : `es una consonante` Si no le agrego esto sale en la consola como booleano
}



console.log(esVocal('a'))
console.log(esVocal('b'))
console.log(esVocal('z'))
console.log(esVocal('i'))
console.log(esVocal('v')) */

//Definí una función tienenMismaLongitud que reciba como argumentos dos strings a y b y devuelva si tienen la misma longitud.

// const tienenMismaLongitud = (a, b) =>{
//     return(a.length===b.length)
// }

// console.log (tienenMismaLongitud('gato', 'gatos'))
// console.log (tienenMismaLongitud('League of Legends', 'LoL'))
// console.log (tienenMismaLongitud('geranio', 'geranio'))
// console.log (tienenMismaLongitud('gatos', 'autos'))

//cuenta la cantidad de caracteres

//Definí una función sumar que reciba como argumento un array de dos números y devuelva la suma de ellos


// const sumar = (numeros) => {
//     //acumulador
//     let acumulador= 0 //se inicializa la variable en un valor 0 xq lo que guardamos aquí van a ser valores en 0. Voy a almacenar ceros
//     let contador = 0
//     for(let numero of numeros){
//         console.log(numeros) 
//         acumulador=acumulador+numero
//         console.log('soy el acumulador', acumulador)
//         contador++
//         console.log('soy el contador de vueltas', contador)
//     }
// }

// console.log(sumar([29,50,1994,9,6]))


// const sumar = (nombres) => {
//     let acumulador= '' //Voy a acumular strings
//     let contador = 0
//     for(let nombre of nombres){
//         console.log(nombres) 
//         acumulador=acumulador+nombre //o podemos resumirlo como acumulador+=nombre
//         console.log('soy el acumulador', acumulador)
//         contador++
//         console.log('soy el contador de vueltas', contador)
//     }
// }

// console.log(sumar(['maria', 'julia', 'cecilia']))


//Definí una función invertirCaso que tome por parámetro un string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// Explicación: 2.17hrs aprox
// const invertirCaso=(letras)=>{
//     let nuevaOracion='' //declaramos un acumulador arriba del for, jamás adentro
//     for (let letra of letras){
//         if(letra.toUpperCase()=== letra){
//             nuevaOracion+=letra.toLowerCase()
//         }else{
//             nuevaOracion+=letra.toUpperCase()
//         }
//     }
//     return nuevaOracion
// }

// console.log(invertirCaso('feliz cumple'))
// console.log(invertirCaso('vErÓnIcA hUeHuEhUe'))
// console.log(invertirCaso('HOLD the LINE love ISNT ALWAYS on time oh OH oh'))


//Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.

const multiplicar =(multiplicador, numeros)=>{
    let total = []
    //total.push(85, 9, 25, 'hola mundo', true, false, (95+2)) //lo que yo coloque en los () se va a agregar al array
    //console.log(total)
    for(let numero of numeros){
    //métodos del array: métodos básicos y métodos avanzados (son métodos para un array)
    //método.push() le agrega al array un elemento
    total.push(multiplicador*numero)
    }
    return total
}


console.log(multiplicar(2,[5, 7, 15, 22, 40, 50]))