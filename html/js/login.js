var glob_firstname;
function submitLogin()
{
	var failed = false;
	var failedmessage = "";
	
	var emailval = document.getElementById('Email').value;
    var passval = document.getElementById('Password').value;
	
	if(emailval.length==0){
		failed = true;
		failedmessage="The email field is empty";
	}
	
	if(passval.length==0){
		failed = true;
		failedmessage="The password field is empty";
	}
	
	if(failed==false){
		//The fields are not empty -- submit to php login script.
		//Create the xhttp request
		var xhttp = new XMLHttpRequest();
		var params = 'email='+emailval+'&pass='+passval;
		xhttp.open('POST', 'http://104.145.83.147/PHP/login.php', true);
		xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				  if(this.responseText == "1"){
					  //1 Indicates a successful login
					  //Verify that the session variables were accepted
					  isLoggedIn();
				  }else if(this.responseText=="2"){
					  //2 Indicates incorrect login
					  alert("Invalid Login Combination!\nIf you've forgot your username and password, go to http://104.145.83.147/PHP/accountforgot.php");
				  }else if(this.responseText=="3"){
					  //Shouldn't reach here - failsafe
					  alert("Not all post vars collected");
				  }else{
					  alert(this.responseText);
				  }
			}
		};
		xhttp.send(params);
	}else{
		alert(failedmessage);
	}
}

function display(x)
{
	x.style.display = 'block';
}
function hide(x)
{
	x.style.display = 'none';
}
function isset(variable)
{
	if(typeof(variable) != "undefined" && variable !== null && variable!="") {
		return true;
	}
}

function isLoggedInModifyHomeDrop()
{
	var x = document.getElementById('SignOut');
	var y = document.getElementById('CreatePage');
	var z = document.getElementById('SignUp');
	var a = document.getElementById('LogIn');
	var b = document.getElementById('Email');
	var c = document.getElementById('Password');
	var d = document.getElementById('btnHolderName');
	
	display(x);
	display(y);
	hide(z);
	hide(a);
	hide(b);
	hide(c);
	d.innerText = glob_firstname + " ";
}

function isLoggedOutModifyHomeDrop()
{
	var x = document.getElementById('SignOut');
	var y = document.getElementById('CreatePage');
	var z = document.getElementById('SignUp');
	var a = document.getElementById('LogIn');
	var b = document.getElementById('Email');
	var c = document.getElementById('Password');
	var d = document.getElementById('btnHolderName');
	
	hide(x);
	hide(y);
	display(z);
	display(a);
	display(b);
	display(c);
	d.innerText = "Account ";
}

function signUp()
{
	location.href = "signUp.html";
}

//a method that focus the user's cuser to the search box 
function getFocus()
{
	document.search_box.search.focus();
}

//The onload functions
function loadFunctions()
{
	getFocus();
	if(isLoggedIn()){
		isLoggedInModifyHomeDrop();
	}else{
		isLoggedOutModifyHomeDrop();
	}
}

//IsLoggedIn
function isLoggedIn()
{
	var response = "";
	var sess_email = "";
	var sess_pass = "";
	var sess_accLevel = "";
	var sess_name = "";
	
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', 'http://104.145.83.147/PHP/sAuth/getcurrentSess.php', true);
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			response = this.responseText;
			var res = response.split("~~");
			sess_email = res[0];
			sess_pass = res[1];
			sess_accLevel = res[2];
			sess_name = res[3];
			glob_firstname = res[3];
			if (isset(sess_email) && isset(sess_pass) && isset(sess_accLevel) && isset(sess_name)){
				isLoggedInModifyHomeDrop();
			}else{
				return false;
			}
		}
	};
	xhttp.send(null);
}

//logout function
function logOut()
{
	//Destroy Session Variables
	destroySession();
	isLoggedOutModifyHomeDrop();
}

//Destroy Session
function destroySession()
{	
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', 'http://104.145.83.147/PHP/sAuth/destroySession.php', true);
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.send(null);

}