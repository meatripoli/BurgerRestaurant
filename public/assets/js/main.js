
$('#burgerbutton').on('click',(event)=>{
    event.preventDefault();
    let burger={
        text: $('#burgerinput').val().trim()
    }
    $.ajax({
        type:'POST',
        url: `/add`,
        data: burger
    }).then((data)=>{
        createHTMLLists(data)
    });
})

///for the devour button
$(document).on('click', '#devourBotton', (event)=> {
    event.preventDefault();
    let sandwichID ={
        id: $(event.target).attr("data-id")
    };
    //console.log($(this).parent().attr("data-id"))
    //when clciked read the burger id from the list html
    //change the eat flag in the database to true
    //return the data from table
    $.ajax({
        type:'PUT',
        url: `/update`,
        data: sandwichID
    }).then((data)=>{
        createHTMLLists(data)
    });

});

function createHTMLLists(response) {
    let rightList = '';
    let leftList = '';
    response.forEach(obj => {
        let ateFlag = obj.ate;
        ///if eat flag is true create the list on right
        if(ateFlag){
            rightList = `${rightList} 
            <li class="list-group-item disabled">
                ${obj.sandwiches_name}
            </li>`;
        }
        ///if eat flag is false create the list on the right
        else{
            leftList = `${leftList} 
            <div class="row" data-id=${obj.id}>
                <li class="col-sm-8 list-group-item d-flex justify-content-between align-items-center" data-id=${obj.id}>
                ${obj.sandwiches_name}
                </li>
                <button type="button" id="devourBotton" class="col-sm-4 list-group-item list-group-item-action" data-id=${obj.id}>
                    Devour it!
                </button>
            </div>`;
        }    
    });
    $("#order").html(leftList);
    $("#devoured").html(rightList);
}