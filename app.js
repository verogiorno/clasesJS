//CLASE 8

// Palabra reservada (son palabras que solo las puede usar el lenguage) ej: var, let, const
// "Asignar" a la variable



//Variables (espacios de memoria donde se guardan elementos)
var palabras= "hola soy string" //siempre entre comillas
console.log(palabras) //cuando el programa esta funcional, el console.log se elimina. Se usa para revisar las variables
var numeros = 9 //si lo pones en comillas, lo toma como string y no con numero
var escasado= true //booleano

var array=[]
var objetosliterales={}
var arrayObjetos=[{}]

//Operadores aritméticos (suma +, resta -, multiplicación *, división /, y resto % de una división)
var resultado
var numero1 =5
var numero2 =10
resultado=numero1+numero2
console.log(resultado)


/* Operadores relacionales

< menor
> mayor
<= menor o igual
>= mayor o igual
= asignar
== igual
=== estrictamente igual
!= distinto 
*/

//estructura condicional simple

//condicion (compuesta x 3 elemtos: Variable, operador relacional, variable o valor)

//Estructura condicional simple
var edadpermitidopasar = 19
var marcos = 18

if (marcos >= 19){
//si esto es verdadero
console.log('podes pasar')
}

//Estructura condicional compuesta
var nombreAlumno = "micaela"
var notaAlumno = 9

if(notaAlumno>=6){
    //console.log(nombreAlumno, ' estas aprobado porque tenes una nota de:' ,notaAlumno) //se puede poner un + por la ,
//template string
//comillas magicas invertidas/backsticks
console.log(`${nombreAlumno} estas aprobado porque tenes una nota de ${notaAlumno +10}`) //se puede hacer operaciones adentro de las {}

}else{
    console.log ('estas desaprobado')
}

//Operador Ternario (? = if    : = else) (El OT solo se usa para booleano)

notaAlumno >= 6 ? console.log(`${nombreAlumno} estas aprobado porque tenes una nota de ${notaAlumno}`): console.log(`${nombreAlumno} estas desaprobado porque tenes una nota de ${notaAlumno}`)


//Operadores Lógicos
// y ==> && (f t  = f) si tiene un falso, el resultado es falso
// 0 ==> || (f t  = t) si tiene un verdadero, el resultado es verdadero

//!(t && t = t) invierte el resultado por endere ahroa sería = f

// ej:
// (5>96 && 5>0) = F
// Pero si le agregamos ! adelante pasa lo siguiente
// !(5>96 && 5>0) = V
// Se invierte el resultado


var avanzar = true
//Operador cortocircuito o circuito corto (solo se puede usar para if del tipo simple y solo cuando estas ante una condicion que me da t or f y tengo un mensaje) => se utiliza mucho en react en js no tanto
if(avanzar == true){
    console.log(`podes avanzar`)
}
else{
    console.log(`NO podes avanzar`)
}


avanzar && console.log(`podes avanzar`)


//Estructura condicional anidada

var nota1 = 5
var nota2 = 6
var nota3 = 7

var promedio = (nota1+nota2+nota3)/3
if (promedio >=7){
console.log (`el alumno esta aprobado`)
}else{
    if(promedio >=4){
    console.log (`el alumno tiene un regular`)
    }else{
        console.log(`el alumno tiene un el alumno está desaprobado`)
    }
}
//aprobado 7
//regular 4
//desaprobado

// Estructura Switch (es una alternativa para reemplazar en algunas situacioens a la estructura condicional anidada. Se puede aplicar donde la condicion se verifica si es igual (==) a cierto valor. No pse puede preguntar x mayor o menor.)

var mensaje = 'dog'

if(mensaje == 'cat'){
console.log(`la traduccion es MACRI`)
}else{
    if(mensaje=='table'){
        console.log(`la traducion es MESA`)
        }else{
            if(mensaje=='dog'){
            console.log(`la traducion es PERRO`)
        }else{
        console.log(`no se encontro la traduccion`)
        }
    }
}
//Este ejemplo era para que entendieramos lo confuso que es poner tantos if/else con las estructuras condicionales compuestas, ahora viene el ejemplo de una estructura SWITCH:

switch(mensaje){                                    //es este ejemplo de condición, mensaje es la variable, case es 
    case 'cat' :                                    //el operador relacional y cat, table, dog son los tipos de valor.
                console.log(`la traducion es GATO`)
                break;
    case 'table' :
                console.log(`la traducion es MESA`)
                break;
    case 'dog' :
                console.log(`la traducion es PERRO`)
                break;
    default:
        console.log(`no se encontro la traduccion`)
    //case es el Operador relacional, y despues viene el valor (variable o tipo de dato) el cual vamos a comparar. EN el ej es cat. 
    //El break hace que finalice la condición. (se puede utilizar el break en un if, pero el profe recomienda no hacerlo)
    //El switch tiene una palabra reservada exclusivamente de switch, que es el default (x defecto) EL default no necesita un break.
    //La lectura de las estructuras es SECUENCIAL
    //Los : en una estructura switch equivalen a {} (No tiene nada que ver con el Operador Ternario)
}

//Estructura Repetitiva While (mientras) => se va a ejecutar/repetir hasta que algo se cumpla. El funcionamiento de While permite verificar la condición. Si la condición es T se va a ejecutar/repetir hasta que la condición de F y ahí es cuando el programa termina.

while(condicion){

}

