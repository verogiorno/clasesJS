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

// //For Tradicional recorre un array compelto de punta a punta y saca los elementos del array (los separa) Además le podes marcar desde que posición arrancar y hasta cual posición leer
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
// //muestra la cantidad de caracteres (cuenta los espacios y los símbolos *.,$) en este caso= 231

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

/*const multiplicar =(multiplicador, numeros)=>{
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


console.log(multiplicar(2,[5, 7, 15, 22, 40, 50]))*/

//CLASES 11 Y 12 fuern sobre la pagina web, donde el profesor nos mostró como hace el diseño html y css de una landing page




//CLASE 13

//OBJETOS LITERALES (tipos de datos. EL Objeto Literal está compuesto por el nombre de la variable ={ aca van las propiedades y los valores de ese objeto } para seguir agregando mas propiedades y valores, hay que agregar una coma) Se puede tener un objeto dentro de otro objeto

// let auto={
//     marca:'Toyota',
//     año: 2016,
//     modelo: 'Etios',
//     estado: true,
//     dueños: ['Julio', 'Esteban', 'Maria'],
//     otrosAutos:{
//         marca: 'Toyota',
//         año: '2020',
//         modelo: 'Corolla',
//         estado: true,
//     }
// }
// console.log(auto.dueños[2])

//ARRAY DE OBJETOS

/*let personas =[{
    nombre: 'Pepe',
    apellido: 'Lopez',
    edad: 25,
},{
    nombre: 'Javier',
    apellido: 'Lopez',
    edad: 30,
},{
    nombre: 'Maria',
    apellido: 'Lopez',
    edad: 20,
},{
    nombre: 'Julio',
    apellido: 'Lopez',
    edad: 95,
}]
console.log(personas[1].nombre)

for (let persona of personas){
    console.log(persona.nombre)
}*/



//DOM = DOCUMENT OBJECT MODEL

/*let cuerpo = document.getElementById('cuerpo')
cuerpo.style.backgroundColor='aqua'

let mensaje= document.getElementById('mensaje')
let fechaHoy= '30/5/2023'

let otroMensaje= 'bienvenidos a mi página' //para que este mensaje aparezca hay q hacer lo siguiente
mensaje.innerHTML=otroMensaje
//agregar al ^html

mensaje.innerHTML=`${otroMensaje} <span class="fecha"> ${fechaHoy}</span>`*/




//EVENTOS (ya no se usa en JS pero sí se usa en REACT)

// let mensaje= document.querySelector('.ocultar')
// //El query selector es un metodo que permite seleccionar clases, etiquetas y IDs (sería con # en vez del . en el caso de una ID)
// let mensaje1='hola soy una variable global'
// const mostrar = (parametro) => {
// // console.log(mensaje1)
// let mensaje2('hola soy una variable local')
// }
// console.log(mensaje2)
//Cuando creamos una variable dentro de una función (local), no puede salir de esa función. Esto quiere decir que por fuera de la función no es reconocida.

//podemos usar esto para el MENU HAMBURGUESA!!!
/*let mensaje= document.querySelector('.ocultar')
let btn= document.getElementById('btn')
const mostrar = (parametro) => {
    if (mensaje.style.display ==='block'){
        mensaje.style.display='none'
    }else{
        mensaje.style.display='block'
    }
    
}
            //parametro1     //parametro2
            //eventos         //función
            //(como el    
            //onclick)   
btn.addEventListener('click', mostrar)*/

//El profe vuelve a explicar bien esto en: 1.32.20

//versión resumida

//los 3 pilares de JS: declaración de variables, funcines y ventos

//Declaración de variables
/*let mensaje= document.querySelector('.ocultar')
let etiqueta=document.querySelector('h2')
let btn= document.getElementById('btn')
//funciones
const mostrar = (parametro) => {
etiqueta.classList.toggle('ocultar')
    
}
//eventos 
btn.addEventListener('click', mostrar) */


//funciones: nombradas, flecha, funciones anónimas

//Las FUNCIONES ANÓNIMAS no tienen nombre. Se utilizan según algunos criterios. Si esa funcion que vamos autilizar no tiene muchas lienas de código, podemos usar una funcion anon.
//Las funciones anon se usan en los eventos y en los metodos avanzados
// se colocan en el segundo parametro del addEventListener ()=>{}

/*let mensaje= document.querySelector('.ocultar')
let etiqueta=document.querySelector('h2')
let btn= document.getElementById('btn')
btn.addEventListener('click', ()=>{
    etiqueta.classList.toggle('ocultar')
})*/



//CLASE 14 fue una clase de ejercitación


//CLASE 15
//En la primer parte de la clase resolvieron algunos de los ejercicios que pasó el profe por el gdocs

/*#12f8e6
Números Hexadecimal:Están cmpuestos por letras y nuúmeros con una capacidad de 6. Esta combinación de letras y números me da un color.
Los números hexaedcimales van desde el 0 hasta el 9
La a=10, b=11, c=12, d=13, e=14, f=15
*/

//Declaración de variables
/*let cuerpo = document.getElementById('cuerpo')
let btn = document.getElementById('btn')
let codigoColor = document.getElementById('codigoColor')
let codigos=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

//Funciones
const colorRandom=()=>{
    return Math.round(Math.random()*15)
}

const cambiarColor = ()=>{
    let codigoColorFinal= '#'
    for(let i=0;i<6;i++){
        //codigoColorFinal=codigoColorFinal+codigos[colorRandom()]
        codigoColorFinal+=codigos[colorRandom()]
    }
    cuerpo.style.backgroundColor=codigoColorFinal
    codigoColor.innerHTML=codigoColorFinal
}

//eventos
btn.addEventListener('click', cambiarColor)*/



/*let btn=document.getElementById('cambiarColor')
let cuerpo=document.querySelector('body')

const cambiar=()=>{
    cuerpo.classList.toggle('modoOscuro')

}

btn.addEventListener('click', cambiarColor)*/




// CLASE 16

//Métodos avanzados
// let miarray=[1,2,5,9,6]
// let resultado=miarray.map(elemento =>elemento*9)
//     console.log(resultado) [9, 18, 45, 81, 54]
    //console.log(miarray)

/*for(let numero of miarray){
    console.log(numero)
}*/

/*
El .map() tiene 3 características
1. Recorre el array
2. Crea un nuevo array
3. Modifica cada uno de los elementos
La diferencia entre el For (recorre todo el array y saca c/u de sus elementos) y el .map^
Sí o sí, lo que se haga con el .map() hay que guardarlo en una variable
*/

// let resultadodos=miarray.filter(elemento=>elemento>5)
// console.log(resultadodos) [9,6]
/*
El .filter() tiene 3 características
1. Recorre el array
2. Crea un nuevo array
3. Filtra en base a una condición (ej: filtra el arrayy creando uno nuevo donde sólo se encuentran los números >5: 9, 6)
*/

// let resultadotres=miarray.find(elemento=>elemento>6)
// console.log(resultadotres) 9
/*
El .find() tiene 3 características
1. Puede recorrer el array pero
2. No crea un array nuevo
3. Devuelve el valor del priemr elemento del array que cumpla con la condición (ej: encuentra el primer número que sea >6: 9)
*/

// let resultadocuatro=miarray.some(elemento=>elemento==5)
// console.log(resultadocuatro) true
/*
El .some()
1. Recorre el array
2. No crea un nuevo array
3. Comprueba si hay al menos un elemento del array que cumpla la condición(en el array hay un núemro que es ==5 por ende, el .some() nos devuelve el booleano true)
*/

// let resultadocinco=miarray.every(elemento=>elemento>=10)
// console.log(resultadocinco) false
/*
El .every()
1. Recorre el array
2. No crea un nuevo array
3. Determina si TODOS los elementos del array satisfacen la condición (si todos los numeros del array son >=10, recién ahí me daría true)
*/

// miarray.forEach(elemento=>console.log(elemento))
// console.log(miarray) [1],[2],[5],[9],[6]
/*
El .forEach()
1. Recorre c/u de los elementos del array
2. Extrae c/u de los elementos del array
3. Es como el for of y el for tradicional 
*/


// const frases =['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// const longitud=(parametro)=>{
// return frases.map(elemento=>elemento.length)
// }

// console.log(longitud(frases)) [17, 18, 16]

//FORMULARIOS

// const numero1=document.getElementById('numeroa')
// const numero2=document.getElementById('numerob')
// const btn=document.getElementById('resultados')
// const resultado=document.getElementById('resultado')

// const ejecutar=() =>{
//     let resultadoFinal=Number(numero1.value)+Number(numero2.value)
//     resultado.innerHTML=resultadoFinal
// }

// btn.addEventListener('click', ejecutar)

// const nombre=document.getElementById('nombre')
// const email=document.getElementById('email')
// const btn=document.getElementById('btn')

// function validarFormulario(){
//     let datonombre=nombre.value
//     let datoemail=email.value
//     if(datonombre===''){
//         alert('No ingresó su nombre')
//         return false
//     } if(datoemail===''){
//         alert('No ingresó su email')
//         return false
//     }else{
//         alert('Los datos se enviaron correctamente')
//     }
// }
// btn.addEventListener('click', validarFormulario)


//REGETS o EXPRESIONES REGULARES
//Es una técnica que nos permite identificar si un string coincide con un patrón determinado (por ejemplo saber si un email está correctamente escrito)
//Un email = comienza con caracteres alfanuméricos +  @ + caracteres alfanuméricos + . + caracteres alfabéticos
//Sin los reget, podemos hacer lo mismo mediante  una serie de IFs que procesa los strings para comprobar si cumple la regla (super tedioso)
//Las expresiones regulares se agregan entre las / / y sirve solo para string


// const nombre=document.getElementById('nombre')
// const email=document.getElementById('email')
// const btn=document.getElementById('btn')


// let datoNombre=nombre.value
// let datoemail=email.value

// let patron=/^[a-z]+$/
// if(patron.test(datoNombre)){
//     console.log('verdadero')
// }else{
//     console.log('falso')
// }

// btn.addEventListener('click', validarFormulario)

//El patron se ejecuta y si cumple la condición se ejecuta. (Hay a-z en este mensaje? Sí, hay es true. Sino es false)
//El ^ sirve para ver si la cadena de string comienza con lo que viene despues del sombrerito (simpre va x fuera de los [])
//El $ sirve para ver si termina con lo que viene antes del $
//Entre {x} verifica si contiene x cantidad de dígitos. Ej: let patron=/0-9{3}/. Si le agrego una , ej: let patron=/0-9{3,}/ significa que contiene 3 o más dígitos
//En cuanto a EMAILS agregarle al final /.com/$ para que termine en .com sí o sí
//Para signos sería: /[\+\-\*\/\\]/

// /^[\+\-\*\/][A-Z]{2}[0-9]{3}[A-Z]{2}$/ 

//tambien podemos invertir la condición para que no se pueda usar lo que sea que esté entre / /. ej: 
// let patron=/^[a-z]+$/
// if(!patron.test(datoNombre)){
//     console.log('verdadero')
// }else{
//     console.log('falso')
// }


//CLASE 17 fue una clase de ejercitación

//CLASE 18 APIS

/*APIS: Application Programming Interface
Son un conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí y compartan datos.
API actúa como un intermediario que permite que dos programas o sistemas intercambien informacipon. EJ: https://project-static-assets.s3.amazonaws.com/APISpreadsheets/APIMemes/ServersCooksExample.jpeg
Nosotros (porgramadores FrontEnd) seríamos los clientes sentados. Los mozos (apis) vienen y nos dan una carta. De esa carta, nosotros elegimos los elemnetos que queremos consumir. Una vez que elegimos lo que queremos consumir, le decimos a la API. La API va hacia la cocina (lo que es el programa de BackEnd) y vuelve con lo pedido hacia nuestras mesas.

Hay 2 tipos de APIs:

1. API Estática (API común. => Algo que ya está quieto, que ya está agregado ej: La info de la API)
El profe nos muestra la API de Rick & Morty que nos da info sobre los personajes (img, nombre, estado: vivo/muerto, especie, último lugar en el que estuvo y la primera vez en la que fue visto). Se actualiza cuando sale un nueva temporada y se actualiza la info de los pjs (una vez x año)

2. API Dinámica: cambia constantemente, cada segundo, cada minuto, cada hora, cada mes. EJ: Whether API

Todas las APIs son diferentes. Hay que leer la documentación de todas!

Info específica de la API se llama ENDPOINT (location, status, etc)
La base url tiene una petición.
Las APIs tienen peticiones: GET(obtener), POST(enviar/modificar), PUT(acutualizar), DELETE (eliminar)
La única opción que tenemos habilitada es la de GET en las APIs estáticas y dinámicas (aunque hay APIs en las que tenemos abilitadas las 4 opciones. EJ: Las que hacemos nosotros)

//JSON
{
    'marca':'toyota',
    'modelo': 'Etios',
    'año': 2022,
    'dueños': ['Pedro','Maria'],
    'nuevo': true,
}

//Objeto literal
const auto={
    marca:'Toyota',
    modelo: 'Etios',
    año: 2022,
    dueños: ['Pedro','Maria'],
    nuevo: true,
}

JSON (JavaScript Object Notation): Formato ligero de intercambio de datos. Se utiliza para representar información estructurada de manera legible tanto para nosotros como para las computadoras. En este caso, la conexión es la API, y el envío de info es a través de JSON.
JSON es ampliamente utilizado en aplicaciones web y servicios de APIs ya que es facilmente legible y es compatible con la mayoría de los lenguajes de programación. Se utiliza apra intercambio de datos entre diferentes sistemas.

JS no reconoce JSON, reconoce el objeto literal.
*/

//Función FETCH => sirve para traer información, realizar peticiones GET
//Fetch viene con métodos propios ej: .then(): y entonces

// fetch('https://rickandmortyapi.com/api/character')
// .then(respuesta=>console.log(respuesta)) //para checkear que todo funciona ok


//Asincronismo (VERLO NOSOTROS)
//console.log('hola')
let page=1
fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
.then(respuesta=>respuesta.json()) //lo que la API trae de JASON, con el método .json me lo convierte a objeto
.then(datos=>console.log(datos.results)) //te muestra objeto x objeto del array
//console.log('adios')

//Resultado en consola: Hola
                        //Adios
                        //Array
//Es Asincronico xq no espera a que el fetch traiga la info y sigue leyendo la lina de abajo


/*
Hay APIs públicas y privadas
Las privadas tienen restricciones de acceso, necesitan una key. No podemos obtener tda la info completa. Requieren autorizaciones y tienen limitaciones en las peticiones. Algunas te cobran por petición (en dolar). Esto está definido en la documentación.

*/

// let lista= document.getElementById('lista')
// let anterior=document.getElementById('anterior')
// let siguiente=document.getElementById('siguiente')


// const obtenerPersonajes = (page) => {
//     console.log(page)
// fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
// .then(respuesta=>respuesta.json())
// .then(datos=>mostrarPersonaje(datos.results))
// } //si lo guardo en una función, la ejecuto y controlo la ejecuciónd e la función como quiero
// obtenerPersonajes(page)

// const mostrarPersonaje = (personajes) => {
//     //console.log(personajes)
//     lista.innerHTML=''
//     let resultado=''
//     for(let personaje of personajes){
//         //console.log(personaje.name)
//         if (personaje.status=== 'Alive'){
//             resultado= `<span class="alive">${personaje.status}</span>`
//         }else if(personaje.status=== 'Dead'){
//             resultado= `<span class="dead">${personaje.status}</span>`
//         }else{
//             resultado= `<span class="unknown">${personaje.status}</span>`
//         }


//         lista.innerHTML+=`<div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//           <div class="col-md-4">
//             <img src="${personaje.image}" class="img-fluid rounded-start" alt="...">
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">${personaje.name}</h5>

//               <p class="card-text"><b>Estado:</b> ${resultado} </p>

//               <p class="card-text"><b>Especie:</b> ${personaje.species} </p>
//               <p class="card-text"><b>Género:</b> ${personaje.gender} </p>
//             </div>
//           </div>
//         </div>
//       </div>`
//     }
// }

// const nueva = () =>{
// page++
// obtenerPersonajes(page)
// console.log('perdiste 1 dolar')
// }
//                 //BASE               ENDPOINT   //condición
// // "https://rickandmortyapi.com/api/character/?page=2"

// const antes = () =>{
// page--
// obtenerPersonajes(page)
// console.log('perdiste 1 dolar')
// }

// siguiente.addEventListener('click', nueva)
// anterior.addEventListener('click', antes)

//<p class="card-text"><b>Estado:</b> ${personaje.status==='Alive'? `<span class="alive">${personaje.status}</span>`: `<span class="dead">${personaje.status}</span>`} </p> Esto vendria en lugar de la linea 955 si no usara el if




//CLASE 19

/*Framework => es una herramienta que tiene clases que ya estan armadas con ciertos criterios. Nosotros podemos utilizarlas y nos facilita ahorrar muchísimo tiempo. EL que vamos a ver es el de Boostrap pero hay muchos más.

Un framework es una estructura o plantilla que los programadores utilizan en su día a día para desarrollar un software, crear una app, etc de manera más rápida

Un framework es un esquema o marco de trabajo que ofrece una estructura base para elaborar un proyecto con objetivos específicos, una especie de plantilla que sirve como punto de partida para la organización y desarrollo de software.

CDN tiene un link que llama al servidor de Boostrap. Hago referencia al link, nada más.

Boostrap (https://getbootstrap.com/docs/5.3/getting-started/introduction/) tiene un estilo propio, se puede modificar pero nunca desde el archivo original.

La clase container ya viene seteada para que se centren los elementos y viene con un ancho deetrminado para que siempre se respeten los margenes


Para cambiar el CSS de Boostrap lo que hay que hacer es agregarle otra clase al elemento. EJ: si tenemos <div class="col"></div> hacemos un espacio y le agregamos otra clase => <div class="col otraClase"></div>. Después, vamos al style.css y llamamos a la clase y la modificamos como siempre hicimos.

Bosotrap está programado para tener un max de 12 columnas. Si tengo 1 columna sola, va aa ocupar todo el espacio de la pantalla. Pero si tengo más de 1, se va repartiendo el espacio equitativamente. Si quisiera tener más de 12 columnas, tengo que hacerle cambios a la clase xq sino, las columnas que sobran se salen del ancho de la pantalla =>

Si a la clase col le agregamos un -1 (o sea, <div class="col-1"></div>) esa columna me va a ocupar el espacio de 1 (o el numero que elija ponerle entre 1-12) columna.

Hay 32 Frameworks
Otro Framework que podemos usar es BULMA https://bulma.io/documentation/

https://blog.nubecolectiva.com/los-5-mejores-frameworks-css-para-desarrolladores-en-2020/ (otros frameworks)
*/

//Ver como agregar más paquetes a PACKAGE.JSON
//NO SE RECOMIENDA EDITAR NADA DE PACKAGE.LOCK.JSON HASTA TENER 5 AÑOS DE PROGRAMACIÓN
//No se recomienda tocar la carpeta node_modules tampoco


//.gitignore

/* ejemplo:

# dependencies
/node_modules
/.pnp         
.pnp.js
*/

//La / hace referencia a las carpetas y los . hacen referencia a los archivos. Lo que hace es que esos archivos/carpetas no se suban al github


//BORRAR CARPETAS QUE NO NECESITAMOS video: 2.07.10


// CLASE 21

//PROPS = PROPERTIES
//Son una herramienta desde la cual vamos a enviar info desde un componente hacia otro componente

// function Card(){
//     let mivalor=35
//     return(
//         <>

//         </>
//     )
// }

// export {Card}


//Crear una carpeta en SRC llamade Card y agregar un archivo Card.jsx y Card.css
//Se renderiza en al app.jsx:

// import './App.css'
// import {Card} from './Components/Card/Card'
// import {Header} from './Components/Header/Header'
// import {Footer} from './Components/Footer/Footer'

// function app(){
//     const usuario={
//          nombre: 'mario',
//          apellido: 'lopez',
//          anios: 25,
//          LikeCSS: false
//}
//     return(
//         <Header/>
//         <Card user={usuario}/>
//         <Footer/>
//     )
// }

// export default app


//En MediaDeviceInfo.jsx va
// https://cdn.discordapp.com/attachments/784731978347315260/1126206848354234478/vlc_1E1nb2pB3D.png

//En Card.jsx va 
// https://cdn.discordapp.com/attachments/784731978347315260/1126209801957949472/image.png

//React no muestra el resultado de los booleanos

/* DESTRUCTURING: hace que la info quede más limpia y visual, fácil de entender.
 https://cdn.discordapp.com/attachments/784731978347315260/1126210765716738088/image.png

Yo tengo un array de objetos (productos) en app.jsx y quiero llevar esa info a las cards. Lo que hago es hacer un .map en Card.jsx

Cada base de daots que traemos SIEMPRE tiene que tener un ID para diferenciar un elemento de otro
*/

/*
CLASE 22


useState: es un hook (el más usado. También tenemos useEffect, useMain, useMemo,etc) 
Un hook en react es una fnción especial que permite usar el estado y otras características de React en componentes funcionales.
useState está declarado como una variable de estado en un cmponente funcional. Esta función devuelve un array con dos elementos (el estado actual) y una función para actualizar ese estado propiamente.
Para declararlo, hay que hacer un array con dos elementos (uno es el estado actual y el otro una función para actualizar ese estado.)
EJ:
https://media.discordapp.net/attachments/784731978347315260/1126573144438751262/image.png

El useState es una forma sencilla de introducir y gestionar el estado del componente en React, permitiendo agregar interactividad y cambios dinámicos a la aplicación.

El valor del useState puede ser string, booleano, números, array
EJ: https://cdn.discordapp.com/attachments/784731978347315260/1126573821781102654/image.png

El useState funciona como un innerHTML

Para hacer que funcione el contador hay que hacer lo siguiente
https://cdn.discordapp.com/attachments/784731978347315260/1126574781832118312/image.png (Como el cookie clicker)

En este ejemplo, se crearon dos botones (restar y sumar) y lo programamos para que cuando se llegue a 10, se deshabilite el botón de sumar
https://cdn.discordapp.com/attachments/784731978347315260/1126577907377111050/image.png
https://cdn.discordapp.com/attachments/784731978347315260/1126578022762422362/image.png


Trivias

https://cdn.discordapp.com/attachments/784731978347315260/1126581969157894206/image.png

Para hacer que solo se muestre una pregunta a la vez:
https://cdn.discordapp.com/attachments/784731978347315260/1126582445618245649/image.png
1. Llamo al array de objetos (que contiene las preguntas, opciones y respuestas) me posiciono en el primer elemento (posición 0)

Para hacer le código más limpio usamos el useState
https://cdn.discordapp.com/attachments/784731978347315260/1126583855302840380/image.png
Se usa el useState para preguntarle al index, por lo cual hacer preguntaIndex.setPreguntaIndex=useState (0) y le asignamos el valor 0 por lo cual solo muestra lo seleccionado (la pregunta en la posición 0)
https://cdn.discordapp.com/attachments/784731978347315260/1126584523107340289/image.png
Y todo lo que está en el cosole.log lo guardo en una variable que se llama pregunta actual para yo saber que estoy mirando la pregunta actual en este momento.

Para mostrar las opciones creamos botones con.map
https://cdn.discordapp.com/attachments/784731978347315260/1126587760459911168/image.png
Se crean 1 boton x cada opción que hay gracias al .map
Cuando hay que romper la estructura del .map y seguir escribiendo código en la líneade abajo, hay que ponerle parentesis al elemento (en esta caso a opción en la linea 47)

Para agregar la respuesta le agregamos un false al useState

https://cdn.discordapp.com/attachments/784731978347315260/1126590659218915378/image.png
https://cdn.discordapp.com/attachments/784731978347315260/1126591665973502093/image.png
Le agregamos el btn de la siguiente pregunta
https://media.discordapp.net/attachments/784731978347315260/1126595391069102240/image.png
*/


/* Clase 23

Seguimos con la Trivia

Creamos la función respuesta y le agregamos el onClick al botón de las respuestas
https://cdn.discordapp.com/attachments/784731978347315260/1128381450358628423/image.png

Para que se visualice en el console.loh la respuesta seleccionada x el usuario, agregamos un string + opción al console.log
https://media.discordapp.net/attachments/784731978347315260/1128383083029217410/image.png
Y además hacemos una función anónima para que únicamente nos muestrela respuesta seleccionada x el usuario (de lo contrario te muestra todas las respuestas)
La función flecha se ejecuta solamente cuando la presionan (x eso muestra solamente la opción seleccionada/presionada)

Ahora, para que una vez que el usuario seleccione una respuesta (sea correcta o no) se tiene que visualizar la RTA correcta. En esta caso, hay que llamar a setMostrarRespuesta y darle un valor True
https://cdn.discordapp.com/attachments/784731978347315260/1128385405713141810/image.png
Entonces, la rta correct solo va a apareces después de que el usuario haya seleccionado una rta

Puntaje: Ahora, necesitamos que al contestar bien la pregunta se sumen 5 pts al puntaje 

https://cdn.discordapp.com/attachments/784731978347315260/1128387066275835965/image.png
Se crea una función flecha (actualizarPuntaje) con un if y se agrega actualizarPuntaje a la función rta. Así dependiendo de la rta del usuario, se le suman 5 pts o no.

React no reconoce el (puntaje++) hay que darle (puntaje+5 o el numero q le querramso sumar)

Ahora, tengo que hacer que el botón Siguiente Pregunta me lleve a la sig preg

Le agregamos un onClick al btn sig preg
https://cdn.discordapp.com/attachments/784731978347315260/1128389923314081935/image.png
Y llamamos a la función 
https://media.discordapp.net/attachments/784731978347315260/1128389376406212638/image.png

El problema es que cuando pasamos a la siguiente pregunta, la rta se puede visualizar. Por lo que hay que hacer lo siguiente:
https://cdn.discordapp.com/attachments/784731978347315260/1128395151023280248/image.png
Darle false a setMostrarRespuesta

Finalmente, tenemos que deshabilitar el btn de siguien rta. Lo desabilitamos con un corto circuito. (lo que en mi opinión habría que hacer para todas las preguntas. O sea, habilitar el btn sig rta después de que el usuario seleccionó una rta)

FORMULARIO (hecho con boostrap)

Creamos un formulario
https://cdn.discordapp.com/attachments/784731978347315260/1128410431623536730/image.png
Y ahora tenemos que hacer que lo que escribe el usuario se guarde. Para eso usamos UseState (en vez de hacer funciones)
https://cdn.discordapp.com/attachments/784731978347315260/1128411663985553480/image.png
https://cdn.discordapp.com/attachments/784731978347315260/1128411849956786197/image.png
con el onClick hacemos que cuando la persona presione en enviar, se envién lso datos
https://cdn.discordapp.com/attachments/784731978347315260/1128412222176104498/image.png
Despues vamos al sector de las funciones y hacemos lo siguiente
https://cdn.discordapp.com/attachments/784731978347315260/1128412783319449710/image.png
El event es un parametro propiamente de los eventos y se lo conoce como event o la letra e
El parametro event tiene una propiedad que tiene que ver con lo siguiente:
Hay que parar ese proceso natural que tiene el event y cualquier formulario que hace que cuando presiono el boton enviar, se actualiza la pagina. Para eso paramos ese proceso nativo agregando el preventDefault.
https://cdn.discordapp.com/attachments/784731978347315260/1128414177388675132/image.png
Ahora la pagina no se actualiza cuando tocamos el btn, y al no pasar esto, se ejecuta el console.log que tenemos de ese event.
Lo que queremos hacer es que en vez de enviarse los datos (nombre, email del usuario) de una, que primero sean analizados para saber que información colocó la persona.

El value='' es un valor fijo, seteado x default. No se puede modificar, borrar, sobreescribir.
El evento onChange se utiliza para los formularios, controla lo que el usuario agrega. Detecta y maneja cambios en sus valores. Se utiliza, principalmente, en lso componentes de entrada de formularios (input, textarea, textselect. El buscador es un input, la unica diferencia es si se van a utilizar datos sensibles o no. Si se usan datos sensibles, se debe usar un formulario.)
https://cdn.discordapp.com/attachments/784731978347315260/1128449636995186759/image.png
Target es una propiedad.
https://cdn.discordapp.com/attachments/784731978347315260/1128450686795911318/image.png
Le agregamos setNombre
https://cdn.discordapp.com/attachments/784731978347315260/1128451198614253638/image.png
Hacemos lo mismo con email y dirección
https://media.discordapp.net/attachments/784731978347315260/1128453159363280977/image.png?width=482&height=473
Para que el usuario visualize los datos que colocó hacemos lo siguiente:
https://cdn.discordapp.com/attachments/784731978347315260/1128454435257995274/image.png
Pero como sólo queremos que se visualize despues de q el usuario enció los datos lo q hacemos es lo sigueinte:
Vamos al sector de useState y creamos uno nuevo:
https://cdn.discordapp.com/attachments/784731978347315260/1128455277281300560/image.png
Y para que funcione hacemos:
https://cdn.discordapp.com/attachments/784731978347315260/1128455674137956382/image.png
Para que funcione, hay que agregar todo lo de este div entre {} ya que al agregarlas, le estoy diciendo que voy a interpolar JS..
https://cdn.discordapp.com/attachments/784731978347315260/1128456199650689075/image.png
...por lo cual necesito tener la variable mostrarValores. Usamos el corto circuito
https://cdn.discordapp.com/attachments/784731978347315260/1128456724492324954/image.png

Para agregar una passwords
https://cdn.discordapp.com/attachments/784731978347315260/1128458186911907900/image.png
Para que se visualize la pw, le agregamos un boton "mostrar pw". Para eso agregamos un evento onClick en mostrar pw
https://cdn.discordapp.com/attachments/784731978347315260/1128458823082979408/image.png
Ahora, usamos un ternario
https://media.discordapp.net/attachments/784731978347315260/1128461176897024050/image.png
creamos la variable 
https://cdn.discordapp.com/attachments/784731978347315260/1128460346009583656/image.png
setMirarPassword
https://cdn.discordapp.com/attachments/784731978347315260/1128462682643763352/image.png
le agregamos el preventDefault para q funcione
https://cdn.discordapp.com/attachments/784731978347315260/1128463254851682305/image.png
El problema es que solo funciona una vez, xq si volvemos a tocar el btn mostrar pw no se oculta la pw. Lo solucionamos haciendo lo siguiente:
https://cdn.discordapp.com/attachments/784731978347315260/1128465167097790586/image.png
Ahora, para que el texto del botón cambie de mostrar a ocultar, usamos un ternario en el boton
https://cdn.discordapp.com/attachments/784731978347315260/1128466344464101396/image.png

MODO OSCURO CON useState 2:18:00 (video)
*/