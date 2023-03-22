const input = document.getElementById('input') 
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_List')

const createTodo = () => {
    if(input.value.trim() === '') {
       input.value = ''
        return false
    }
    else {
        const div = document.createElement('div')
        const text = document.createElement('h3')


        div.setAttribute('class','block_text')
        text.innerHTML = input.value

        div.append(text)
        todoList.prepend(div)
        input.value = ''

createButton.addEventListener('click',createTodo)


const editButton = document. createElement ('button' )
const inputCheck = document. createElement ('inDut' )
    inputCheck.setAttribute('type', 'checkbox') 
    deleteButton.setAttribute('class', 'delete_button') 
    editButton. setAttribute('class', 'edit_button') 
    buttonsDiv.setAltribute ('class', 'buttons_div') 
    div.setAttribute('class','block_text')
    deleteButton.innerTML= 'DELETE'
    editButton.innerHTML = 'EDIT'
    text.innerHTML = input. value
    deleteButtun.onclick = () => div. remove ()
    buttonsDiv.setAltribute('class','buttons_div')
    div.setAltribute('class','block_text')
    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'
    text.innerHTML = input.value

    deleteButton.onclick = () => div.remove ()
    editButton.onclick = () => {
        let editedText = prompt('EDIT: ${text.innerText}').trim()
        editedText === '' ? text.innerText : text.innerText = editedText
    }
    buttonsDiv.append(editButton, deleteButton)
    div.append(text , buttonsDiv)
    todoList.prepend(div)

    }
        input.value = ''
}
createButton.onclick = ()  => createTodo ()
input.addEventListener('keydown', e => (e.keyCode ===13)? createTodo():false)


    
    
    
    
    
    
    
    
   


  