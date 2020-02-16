
$('#burgerbutton').on('click',(event)=>{
    event.preventDefault();
    let burger=$('#burgerinput').val()
    $.ajax({
        type:'POST',
        url: `addburger/${burger}`
    }).then((data)=>{
        console.log('posted to database')
        console.log(data)
    });
})

///for the devour button
$(document).on('click', '#devourBotton', (event)=> {
    event.preventDefault();

  });