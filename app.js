const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea =document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {
    1640892576920:{
        id: 1640892576920,
        texto: 'Tarea #1',
        estado: false
    },
    1640892887644:{
        id: 1640892887644,
        texto: 'Tarea #2',
        estado: false
    }
}

//console.log(Date.now())

formulario.addEventListener('submit', e =>{
    e.preventDefault()//evitamos que desaparezca, como una ancla
    console.log(e.target[0].value)
    console.log(e.target.querySelector('input').value)
    console.log(input.value)

   // setTarea(e)
})

//const setTarea = e =>{
    //console.log('diste click')

//}