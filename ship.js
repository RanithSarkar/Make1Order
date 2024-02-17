function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "abca98211@gmail.com",
    Password : "8BA63E1423BBBDAFF386EA1A51C4CADA69C3",
    To : "makeordershopbyt.r@gmail.com",
    From : "abca98211@gmail.com",
    Subject : "Order By Website",
    Body : "SenderName: "+document.getElementById("name").value
    +"<br>SenderEmail: "+document.getElementById("email").value
    +"<br>Sender Phone Number: "+document.getElementById("phone").value
    +"<br>PickupAddress: "+document.getElementById("message").value
       +"<br>ReciverName:"+document.getElementById("RRname").value
       +"<br>ReceiverEmail:"+document.getElementById("RRemail").value
       +"<br>ReceiverPhone:"+document.getElementById("RRphone").value
       +"<br>DeliveryAddress:"+document.getElementById("RRmessage").value
       +"<br>Percel Weight:"+document.getElementById("weight").value
       +"<br>Percel Length:"+document.getElementById("length").value
       +"<br>Percel Breadth:"+document.getElementById("breadth").value
       +"<br>Percel Height:"+document.getElementById("height").value
}).then(
  message => alert("We will reach you soon")
);
}
