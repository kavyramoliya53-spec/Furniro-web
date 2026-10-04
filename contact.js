// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// Send Email
document.getElementById("sendbtn").addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name=="" || email=="" || subject=="" || message==""){
        alert("Please fill all fields.");
        return;
    }

    const params = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send(
        "YOUR_TEMPLATE_ID",
        "YOUR_PUBLIC_KEY",
        "YOUR_SERVICE_ID",
        params
    )

    .then(function(response){

        alert("Message Sent Successfully!");

        console.log(response);

        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";

    })

    .catch(function(error){

        alert("Failed to send email.");

        console.log(error);

    });

});