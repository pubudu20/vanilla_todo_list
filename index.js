
const todo_list = [];

$('#btn').click(() => {
    todo_list.push($('#input').val());
    showList(todo_list);
    $('#input').val('');  
    
})

$('#search-item').keyup((e) => {
    const filtered_list = [];
    let input = e.target.value;
    todo_list.map(item => item.includes(input) ? filtered_list.push(item) : null);
    showFilteredList(filtered_list);
})

 showList = todo_list => {
    $('#items').children().remove();
    todo_list.map(item => $('#items').append('<li class="list-group-item"><div class="d-flex justify-content-between"><input type="checkbox" ><p>'+item+'</p><button class="btn-del btn btn-outline-dark btn-sm m-2">Delete</button></div></li>')); 
    
    $('.btn-del').click((item) => {
        console.log(item);
    })
};

 showFilteredList = filtered_list => {
    $('#items').children().remove();
    filtered_list.map(item => $('#items').append('<li class="list-group-item"><div class="d-flex justify-content-between"><p>'+item+'</p><button id="btn-delete" class="btn btn-outline-dark btn-sm m-2">Delete</button></div></li>'))
};















