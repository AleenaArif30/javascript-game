var secret = +prompt("Enter a secret number between 1 and 10 ");
var number = Math.floor(Math.random()*10 +1 );

document.write("<h1> SECRET NUMBER: </h1>")
document.write( "the secret number is : " +number);
if(secret===number){
    alert("congrats dear you win")
}
else{
    alert('oh! try again');
}

