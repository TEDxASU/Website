

$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: true, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  }
);


// Form javascript/jquery START ------------------------------------------------------------

$("#signup_button").click(function(e)
{
    submitEmail(e);
});

function submitEmail(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var email_url = 'https://script.google.com/macros/s/AKfycbzW6c7IW5QairdZk06k_pWVhj4Aa_3ACRSj1B380boFUWo0ckIe/exec' + "?email=" + $("#email_input").val();

    $.ajax({
        url: email_url,
        method: "GET",
        success: function(data){
            confirmForm();
        },
        failure: function(error){}
    });
}

function confirmForm()
{
    var emailinput = document.getElementById("email_span");
    var emailbutton = document.getElementById("signup_button");

    emailinput.style.display = 'none';
    emailbutton.style.display = 'none';

    var confirmtext = document.getElementById("confirm_text");
    confirmtext.style.display = 'block';
}
// Form javascript/jquery END ------------------------------------------------------------
