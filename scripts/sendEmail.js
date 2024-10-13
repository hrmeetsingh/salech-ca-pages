function sendEmail() { 
    const sender = document.getElementById("sender-email");
    const messageBody = encodeURIComponent("Keep me updated");
    const subject = encodeURIComponent("Interested");
    window.location.href=`mailto:harmeet@salech.ca?subject=${subject}&body=${messageBody}&from=${sender}`;
}
