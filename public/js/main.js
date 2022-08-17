const deleteBtn = document.querySelectorAll('.del') //delete button
const todoItem = document.querySelectorAll('span.not')  // todo item
const todoComplete = document.querySelectorAll('span.completed') // todo item

Array.from(deleteBtn).forEach((el)=>{ // for each delete button
    el.addEventListener('click', deleteTodo) // add event listener to delete button
})

Array.from(todoItem).forEach((el)=>{ // for each todo item
    el.addEventListener('click', markComplete) // add event listener to todo item
})

Array.from(todoComplete).forEach((el)=>{ // for each todo item
    el.addEventListener('click', markIncomplete) // add event listener to todo item
})

async function deleteTodo(){ // delete todo
    const todoId = this.parentNode.dataset.id // get the todo id from the client
    try{ // try to do the following
        const response = await fetch('todos/deleteTodo', { // fetch the deleteTodo route
            method: 'delete', // set the method to delete
            headers: {'Content-type': 'application/json'}, // set the headers to application/json
            body: JSON.stringify({ // set the body to the todoId
                'todoIdFromJSFile': todoId // set the todoId to the todoId from the client
            })
        })
        const data = await response.json() // get the data from the response
        console.log(data) // log the data
        location.reload() // reload the page
    }catch(err){ // if there is an error
        console.log(err) // log the error
    }
}

async function markComplete(){ // mark todo complete
    const todoId = this.parentNode.dataset.id // get the todo id from the client
    try{ // try to do the following
        const response = await fetch('todos/markComplete', { // fetch the markComplete route
            method: 'put', // set the method to put
            headers: {'Content-type': 'application/json'}, // set the headers to application/json
            body: JSON.stringify({ // set the body to the todoId
                'todoIdFromJSFile': todoId // set the todoId to the todoId from the client
            })
        })
        const data = await response.json() // get the data from the response
        console.log(data) // log the data
        location.reload() // reload the page
    }catch(err){ // if there is an error
        console.log(err) // log the error
    }
}

async function markIncomplete(){ // mark todo incomplete
    const todoId = this.parentNode.dataset.id // get the todo id from the client
    try{ // try to do the following
        const response = await fetch('todos/markIncomplete', {  // fetch the markIncomplete route
            method: 'put', // set the method to put
            headers: {'Content-type': 'application/json'}, // set the headers to application/json
            body: JSON.stringify({ // set the body to the todoId
                'todoIdFromJSFile': todoId // set the todoId to the todoId from the client
            })
        })
        const data = await response.json()  // get the data from the response
        console.log(data) // log the data
        location.reload() // reload the page
    }catch(err){ // if there is an error
        console.log(err) // log the error
    }
}