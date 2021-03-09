$(function () {
  $("#username_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();
  $("#phone_number_error_message").hide();
  $("#card_number_password_error_message").hide();

  let error_username = false;
  let error_email = false;
  let error_password = false;
  let error_retype_password = false;
  let error_phone_number = false;
  let error_card_number = false;

  $("#form_username").focusout(function () {
    check_username();
  });
  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  $("#form_retype_password").focusout(function () {
    check_retype_password();
  });
  $("#form_phone_number").focusout(function () {
    check_phone_number();
  });
  $("#form_card_number").focusout(function () {
    check_card_number();
  });

  function check_username() {
    let pattern = /^[a-zA-Z ]*$/;
    let username = $("#form_username").val();
    if (pattern.test(username) && username !== "") {
      $("#username_error_message").hide();
      $("#form_username").css("border-bottom", "2px solid #34F458");
    } else {
      $("#username_error_message").html("Should contain only Characters*");
      $("#username_error_message").show();
      $("#form_username").css("border-bottom", "2px solid #F90A0A");
      error_username = true;
    }
  }

  function check_password() {
    let pattern = /^[A-Za-z0-9@#$_]{8,20}$/;
    let password = $("#form_password").val();
    if (pattern.test(password)) {
      $("#password_error_message").hide();
      $("#form_password").css("border-bottom", "2px solid #34F458");
    } else {
      $("#password_error_message").html("Atleast 8 Characters*");
      $("#password_error_message").show();
      $("#form_password").css("border-bottom", "2px solid #F90A0A");
      error_password = true;
    }
  }

  function check_retype_password() {
    let pattern = /^[A-Za-z0-9@#$_]{8,20}$/;
    let password = $("#form_password").val();
    let retype_password = $("#form_retype_password").val();
    if (password === retype_password && pattern.test(retype_password)) {
      $("#retype_password_error_message").hide();
      $("#form_retype_password").css("border-bottom", "2px solid #34F458");
    } else {
      $("#retype_password_error_message").html("Passwords Did not Matched*");
      $("#retype_password_error_message").show();
      $("#form_retype_password").css("border-bottom", "2px solid #F90A0A");
      error_retype_password = true;
    }
  }

  function check_email() {
    let pattern = /^[a-z]+[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
      $("#form_email").css("border-bottom", "2px solid #34F458");
    } else {
      $("#email_error_message").html("Invalid Email*");
      $("#email_error_message").show();
      $("#form_email").css("border-bottom", "2px solid #F90A0A");
      error_email = true;
    }
  }

  function check_phone_number() {
    let pattern = /^(6|7|8|9)\d{9}$/;
    let phone_number = $("#form_phone_number").val();
    if (pattern.test(phone_number) && phone_number !== " ") {
      $("#phone_number_error_message").hide();
      $("#form_phone_number").css("border-bottom", "2px solid #34F458");
    } else {
      $("#phone_number_error_message").html("Invalid Phone Number*");
      $("#phone_number_error_message").show();
      $("#form_phone_number").css("border-bottom", "2px solid #F90A0A");
      error_phone_number = true;
    }
  }

  function check_card_number() {
    let pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    let card_number = $("#form_card_number").val();
    if (pattern.test(card_number) && card_number !== " ") {
      $("#card_number_error_message").hide();
      $("#form_card_number").css("border-bottom", "2px solid #34F458");
    } else {
      $("#card_number_error_message").html("Invalid Credit Card Number*");
      $("#card_number_error_message").show();
      $("#form_card_number").css("border-bottom", "2px solid #F90A0A");
      error_card_number = true;
    }
  }

  $("#form").submit(function () {
    error_username = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;
    error_phone_number = false;
    error_card_number = false;

    check_username();
    check_email();
    check_password();
    check_retype_password();
    check_phone_number();
    check_card_number();

    let username = $("#form_username").val();
    let password = $("#form_password").val();
    let email = $("#form_email").val();
    let phone_number = $("#form_phone_number").val();
    let card_number = $("#form_card_number").val();

    if (
      error_username === false &&
      error_email === false &&
      error_password === false &&
      error_retype_password === false &&
      error_phone_number === false &&
      error_card_number === false
    ) {
      console.log(`Username: ${username}
Password: ${password}
Email: ${email}
Phone Number: ${phone_number}
Credit Card Number: ${card_number}`);
      alert("Registration Successfull");

      return true;
    } else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
});
