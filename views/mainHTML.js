const render = function() {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            <!--local stylesheet-->
            <link rel="stylesheet" href="../public/assets/css/style.css">
        </head>
        <body class="container">
            <header>
                <div class="col-6" id="title">
                    <span >Eat-Da-Burger!</span>
                </div>           
                <div class="col-6" id="burgerimage" >
                    <img src="http://clipartandscrap.com/wp-content/uploads/2017/07/Hamburger-burger-clip-art-vector-clipart.png" width="200" height="200">
                </div>
            </header>
            <div class="row">
                <div class="col-sm-8" >
                    <input type="text" class="form-control" id="burgerinput"> 
                </div>  
                <div class="col-sm-4">
                    <button type="submit" class="btn btn-primary" id="burgerbutton">Submit</button>
                </div>                   
            </div>   
            <div class="row" id="description">          
                <span >
                    Enter a burger you want to eat then click the submit button
                </span>          
            </div>  
            <div class="row">
                <div class="col" id="order">
                    <ul class="list-group" id="leftlist"></ul>
                </div>
                <div class="col" id="devoured">
                    <ul class="list-group" id="rightlist"></ul>
                </div>
            </div>
            <script src="../public/assets/js/main.js"></script>
        </body>
    </html>`
};

exports.render = render;