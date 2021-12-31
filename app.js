const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea =document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {
}

//console.log(Date.now())

formulario.addEventListener('submit', e =>{
    e.preventDefault()//evitamos que desaparezca, como una ancla
    //console.log(e.target[0].value)
    //console.log(e.target.querySelector('input').value)
    //console.log(input.value)

    setTarea(e)
})

const setTarea = e =>{
    if(input.value.trim() === ''){ //trim nos permite limpiar si el usuario no escribe nada
        console.log('Esta vacio')
        return //para que salga de SetTarea y no caiga la siguieente console
    }
    
    const tarea = {
            id: Date.now(),
            texto: input.value,
            estado: false
    }
    tareas[tarea.id] = tarea
    //console.log(tareas)
    formulario.reset()// para limpair la barra del fromulario
    input.focus()

    pintarTareas()
}

const pintarTareas = () =>{
        listaTarea.innerHTML = ''
        Object.values(tareas).forEach(tarea =>{
            const clone = template.cloneNode(true)
            clone.querySelector('p').textContent=tarea.texto
            fragment.appendChild(clone)
        })
        listaTarea.appendChild(fragment) 

        }
