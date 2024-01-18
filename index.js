function validate() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let item = document.getElementById("item").value;
    let price = document.getElementById("price").value;
    let regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    if (fname == "") {
        alert("Please enter your First Name");
        return false;
    }
    if (lname == "") {
        alert("Please enter your Last Name");
        return false;
    }
    if (email == "") {
        alert("Please enter valid Email");
        return false;
    }
    if (mobile == "") {
        alert("Please enter valid Mobile");
        return false;
    }
    if (isNaN(mobile)) {
        alert("Mobile number is in digits");
        return false;
    }
    if (mobile.length > 10 || mobile.length < 10) {
        alert("Please enter 10 digits only");
        return false;
    }
    if (email != "") {
        if (regx.test(email)) {
            return true;
        } else {
            alert("Please enter valid Email");
            return false;
        }
    } else {
        alert(`Purchased ${item} Successfully at price ${price}!!!`)
        return true;
    }
}
