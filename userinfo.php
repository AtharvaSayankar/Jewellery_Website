<?php
$con = mysqli_connect('localhost', 'root'); //connect to xampp 
if($con){
    echo "Connection Successful";
    }
else{
    echo "No connection";
}

mysqli_select_db($con,'userdata'); //use database query
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$price = $_POST['price'];
$item = $_POST['item'];

$query = " insert into userinfodata(fname, lname, email, mobile, price, item) values('$fname','$lname','$email','$mobile','$price','$item') ";

mysqli_query($con, $query);

header('location:index.html');
