function validation() {
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let ccNumber = document.getElementById("ccNumber").value;

  let passwordcheck = /^[A-Za-z0-9@#$_]{8,}$/;
  let emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  let numbercheck = /^[1-9]{10}$/;
  let ccVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  let ccMastercard = /^5[1-5][0-9]{14}$/;
  let ccAmexp = /^3[47][0-9]{13}$/;
  let ccDiscov = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  let ccElectron = /^(4026|417500|4405|4508|4844|4913|4917)d+$/;
  let ccMaestro = /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/;
  let ccDankort = /^(5019)\d+$/;
  let ccInterpayment = /^(636)\d+$/;
  let ccUnionpay = /^(62|88)\d+$/;
  let ccDiners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  let ccJcb = /^(?:2131|1800|35\d{3})\d{11}$/;

  if (passwordcheck.test(password)) {
    document.getElementById("passworderror").innerHTML = " ";
  } else if (password == Number(" ")) {
    document.getElementById("passworderror").innerHTML =
      "**Please enter Password";
    return false;
  } else {
    document.getElementById("passworderror").innerHTML =
      "**Minimum 8 character";
    return false;
  }

  if (passwordcheck.test(cpassword) && password.match(cpassword)) {
    document.getElementById("cpassworderror").innerHTML = " ";
  } else if (cpassword == Number(" ")) {
    document.getElementById("cpassworderror").innerHTML =
      "**Please Re-enter Password";
    return false;
  } else {
    document.getElementById("cpassworderror").innerHTML =
      "**Password is not matching";
    return false;
  }

  if (emailcheck.test(email)) {
    document.getElementById("emailerror").innerHTML = " ";
  } else if (email == Number(" ")) {
    document.getElementById("emailerror").innerHTML =
      "**Please enter Email address";
    return false;
  } else {
    document.getElementById("emailerror").innerHTML = "**Email is Invalid";
    return false;
  }

  if (numbercheck.test(number)) {
    document.getElementById("numbererror").innerHTML = " ";
  } else if (number == Number(" ")) {
    document.getElementById("numbererror").innerHTML =
      "**Please enter Phone number";
    return false;
  } else {
    document.getElementById("numbererror").innerHTML =
      "**Phone number is Invalid";
    return false;
  }

  if (
    ccVisa.test(ccNumber) ||
    ccMastercard.test(ccNumber) ||
    ccAmexp.test(ccNumber) ||
    ccDiscov.test(ccNumber) ||
    ccElectron.test(ccNumber) ||
    ccMaestro.test(ccNumber) ||
    ccDankort.test(ccNumber) ||
    ccInterpayment.test(ccNumber) ||
    ccUnionpay.test(ccNumber) ||
    ccDiners.test(ccNumber) ||
    ccJcb.test(ccNumber)
  ) {
    document.getElementById("ccNumbererror").innerHTML = " ";
  } else if (ccNumber == Number(" ")) {
    document.getElementById("ccNumbererror").innerHTML =
      "**Please enter Credit card number";
    return false;
  } else {
    document.getElementById("ccNumbererror").innerHTML =
      "**Your Card number is Invalid";
    return false;
  }
}
