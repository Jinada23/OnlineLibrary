$("#form_message").hide();

var error_nameform = false;
var error_emailform = false;
var error_passform = false;
var error_repassform = false;
var error_phoneform = false;

$("#nameform").focusout(function () {
    check_nameform();
})
$("#emailform").focusout(function () {
    check_emailform();
})
$("#passform").focusout(function () {
    check_passform();
})
$("#repassform").focusout(function () {
    check_repassform();
})
$("#phoneform").focusout(function () {
    check_phoneform();
})


function check_nameform() {
    var pattern = /^[a-zA-Z]+([ a-zA-Z]*) *$/;
    var nameinput = $("#nameform").val();

    if (pattern.test(nameinput) && nameinput !== '') {
        $("#name_error_message").css("color", "#34F458");
        $("#nameform").css("border", "2px solid #34F458");
    } else {
        $("#name_error_message").css("color", "#F90A0A");
        $("#nameform").css("border", "2px solid #F90A0A");
        error_nameform = true;
    }
}
function check_emailform() {
    var pattern = /\S+@\S+\.\S+/;
    var emailinput = $("#emailform").val();

    if (pattern.test(emailinput) && emailinput !== '') {
        $("#email_error_message").css("color", "#34F458");
        $("#emailform").css("border", "2px solid #34F458");
    } else {
        $("#email_error_message").css("color", "#F90A0A");
        $("#emailform").css("border", "2px solid #F90A0A");
        error_emailform = true;
    }
}
function check_passform() {
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    var passinput = $("#passform").val();

    if (pattern.test(passinput) && passinput !== '') {
        $("#pass_error_message").css("color", "#34F458");
        $("#passform").css("border", "2px solid #34F458");
    } else {
        $("#pass_error_message").css("color", "#F90A0A");
        $("#passform").css("border", "2px solid #F90A0A");
        error_passform = true;
    }
}
function check_repassform() {
    var passinput = $("#passform").val();
    var repassinput = $("#repassform").val();

    if (passinput == repassinput && repassinput !== '') {
        $("#repass_error_message").css("color", "#34F458");
        $("#repassform").css("border", "2px solid #34F458");
    } else {
        $("#repass_error_message").css("color", "#F90A0A");
        $("#repassform").css("border", "2px solid #F90A0A");
        error_repassform = true;
    }
}
function check_phoneform() {
    var pattern = /^([+]{1}[3][7][3][0-9]{8})+$|^([0]{1}[0-9]{8})+$|^(([6]{1}|[7]{1})[0-9]{7})+$/;
    var phoneinput = $("#phoneform").val();

    if (pattern.test(phoneinput) && phoneinput !== '') {
        $("#phoneform").css("border", "2px solid #34F458");
    } else {
        $("#phoneform").css("border", "2px solid #F90A0A");
        error_phoneform = true;
    }
}

$("#register-form").submit(function () {
    var error_nameform = false;
    var error_emailform = false;
    var error_passform = false;
    var error_repassform = false;
    var error_phoneform = false;

    check_nameform();
    check_emailform();
    check_passform();
    check_repassform();
    check_phoneform();

    if (error_nameform === false && error_emailform === false && error_passform === false && error_repassform === false && error_phoneform === false) {
        $("#form_message").html("Registration Successfull!");
        $("#form_message").css("color", "#34F458");

    } else {
        $("#form_message").html("Registration Failed, fill the form correctly!");
        $("#form_message").css("color", "#F90A0A");

    }
})