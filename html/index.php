<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>WKU WIKI</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">


  </head>

  <!--*********************************************-->
  <!--onload calls the java script when the webpage is loaded-->
  <body onload="getFocus()">

    <!--Create custom javascript for this page-->
    <script type="text/javascript">
      //a method that focus the user's cuser to the search box 
      function getFocus()
      {
        document.search_box.search.focus();
      }

      function signUp()
      {
        location.href = "signUp.html";
      }
      
      function logInToggle()
      {
        var x = document.getElementById('SignOut');
        var y = document.getElementById('CreatePage');
        var z = document.getElementById('SignUp');
        var a = document.getElementById('LogIn');
        var b = document.getElementById('Email');
        var c = document.getElementById('Password');

        display(x);
        display(y);
        display(z);
        display(a);
        display(b);
        display(c);
      }

      function display(x)
      {
        if (x.style.display === 'none') {
          x.style.display = 'block';
        } else {
          x.style.display = 'none';
        }
      }
    </script>

    <!--Custom CSS-->
    <!-- <style type="text/css"> </style> -->

    <!--Navigation-->
    <!--Add navbar-light bg-faded  to make navbar visiable-->
    <nav class="navbar fixed-top align-items-end">
        <!-- navBar Name-->
         <!-- <a class="navbar-brand" href="#">WKU Wiki</a> -->

        <div class="btn-group ml-auto">
          <!--Button for dropdown-->

          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Joe Mama </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class = "mx-2" >
              <input  class="dropdown-item form-control" type="text" id="Email" placeholder="email">
              <input  class="dropdown-item form-control" type="password" id="Password" placeholder="password" >
              <button class="dropdown-item " type="button" id="LogIn" onclick="logInToggle()">Log In</button>
              <button class="dropdown-item" type="button" id="SignUp" onclick="signUp()">Sign Up</button>
              <button class="dropdown-item" type="button" id="CreatePage" style="display: none;">Create Page</button>
              <button class="dropdown-item example" type="button" id="SignOut" style="display: none;" onclick="logInToggle()">Sign Out</button>
            </div>
          </div>
        </div>
    </nav>

    
    <!--Search page conent flex from top of the screen to the bottom-->
    <div class="container-fluid d-flex" style=" height: 100vh; ">
      <!--Align the child container to the parent-->
      <div class="container align-self-center">
        <!-- Hold search image-->
        <img src="img/search.jpg" class ="img-fluid mx-auto d-block" alt="Search Image" style = "width: 60%">
        <form name="search_box">
          <!-- Center the childern -->
          <center>
            <!-- text box to input keyword to search -->
            <input class="form-control" type="text" name="search" placeholder="Search" style ="width: 60%; margin-top: 20px;">
            <!-- button for search -->
            <button class="btn btn-success mt-3 mx-auto d-block" type="submit">Search</button>
          </center>
        </form>
      </div>
    </div>
         
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

  </body>
</html>