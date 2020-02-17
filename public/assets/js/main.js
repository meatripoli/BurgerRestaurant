
$('#burgerbutton').on('click',(event)=>{
    console.log('clicked burger button');
    event.preventDefault();
    let burger=$('#burgerinput').val();
    console.log('user input: ',burger);
    $.ajax({
        type:'POST',
        url: `/add`,
        data: burger
    }).then((data)=>{
        console.log('posted to database');
        console.log(data);
    });
})

///for the devour button
$(document).on('click', '#devourBotton', (event)=> {
    event.preventDefault();
    console.log('clicked devour button');
    //url: `/update/${burgerID}`
    //when clciked read the burger id from the list html
    //change the eat flag in the database to true
    //return the data from table

});

function createHTMLLists(obj) {
    //loop through the list of objects
    ///if eat flag is true create the list on right
    ///if eat flag is false create the list on the right
    let leftList = `
    <div class="row">
        <li class="col-sm-8 list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
        </li>
        <button type="button" class="col-sm-4 list-group-item list-group-item-action" id="devourBotton">Devour it!</button>
    </div>`

    let rightList = `<li class="list-group-item disabled">Cras justo odio</li>`
}