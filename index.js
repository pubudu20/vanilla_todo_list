
$('#btn').click(function(){
    var input = $('#input').val();
    $('#items').append('<li class="list-group-item"><div class="d-flex justify-content-between"><p>'+input+'</p><button id="btn-delete" class="btn btn-outline-dark btn-sm m-2">Delete</button></div></li>');
    ; 
    $('#input').val('');
    $('ul button').click(function(){
         $(this).parents('li').remove();
    })
})



