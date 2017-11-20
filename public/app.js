$(document).ready(function(){
    $.getJSON('/api/todos')
        .then(todos=>{
            todos.forEach(todo => addTodo(todo));
        });

    $('#todoInput').on('keypress', function(evt){
        if(evt.which === 13){
            createTodo($(this).val())
        }
    });

    $('.list').on('click','span', function(evt){
        evt.stopPropagation()
        removeTodo($(this).parent(), evt)
    });

    $('.list').on('click','.task', function(evt){
        console.log('halo update list')
    });
}); //end document ready

createTodo = (valInput)=>{
    // $(this) bekerja dgn baik bila menggunakan regular function
    // tapi undefined bila menggunakan arraw function
    let userInput = valInput.trim()
    if (userInput) {
        $.post('/api/todos', { name: userInput })
            // todo merupakan return dari database 
            // stelah dibuat data dari userInput
            .then(todo => {
                console.log(todo);
                $('#todoInput').val('');
                addTodo(todo)
            })
            .catch(err => console.log(err))
    }
    
}

addTodo = (todo) => {
    let newTodo = $(`<li class='task'>${todo.name}<span>X</span></li>`);
    // jQuery menyimpan data(id) secara tersembunyi
    newTodo.data('id', todo._id)
    if (todo.completed) {
        newTodo.addClass('done')
    }
    $('.list').append(newTodo);
}

removeTodo =(todo)=>{
    let _idClick = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: `/api/todos/${_idClick}`
    })
    .then(todoDelete => {
        // todoDelete berasal dari res.send backend helpers.deleteTodo
        console.log(todoDelete);
        todo.remove()
    })
    .catch(err => console.log(err))
}
