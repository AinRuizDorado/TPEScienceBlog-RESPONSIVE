<?php
// NOTE: Smarty has a capital 'S'
include('smarty/libs/Smarty.class.php');

$smarty = new Smarty();




// $smarty->display("templates/index.tpl");



?>

<html lang="en">

<head>
    <title>Science!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <!-- <link rel="stylesheet" href="css/style viejo.css"> -->
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <img src="https://i.imgur.com/pZfAI33.gif" width="50" height="30" class="d-inline-block align-top">
        <a class="navbar-brand js-home" href="#">Science!</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link js-home" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-categories" href="#">Categories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-users" href="#">Top Users</a>
                </li>
                <li>
                    <a href="scripts/route.php" class="nav-link js-users">Base de Datos Prueba</a>
                </li>
            </ul>
            <div class="d-flex flex-row-reverse">

                <a class="nav-link p-2 js-log" href="#">Sign in/Log In</a>

            </div>
        </div>
    </nav>


    
    <div class="main">
        <div id="render">
            <div class="d-flex justify-content-center">
                <div class="row d-flex justify-content-center">
                    <img src="https://i.imgur.com/pZfAI33.gif">
                    <div class="col-12 d-flex justify-content-center">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class=" d-flex justify-content-center">
            <footer>
                <p> Pagina web Realizada por Hsieh Ezequiel y Ruiz Dorado Ain
                    <a href="https://github.com/AinRuizDorado/TPEScienceBlog-RESPONSIVE/">GITHUB</a>
                </p>
            </footer>
        </div>

    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script type="module" src="scripts/partial-render.js"></script>
    <script type="module" src="scripts/REST.js"></script>
</body>
</html>

