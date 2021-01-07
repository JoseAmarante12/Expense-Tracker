
function Adds(){
    
    
    if(document.getElementById("currency").value == '' || document.getElementById("currency").value<-1 )
    {
        alert("Enter an amount greater than 0");
    }
    else if (document.getElementById("date").value == '')
    {
        alert("Please enter a valid date");
    }
    else
    {
    //variable refrences
    let nameInput= document.getElementById("name");
    let dateInput= document.getElementById("date");
    let currencyInput= document.getElementById("currency");
    let table = document.getElementById("mytable");
    
    //creating row in table
    let row = table.insertRow(-1);
    //inserts cells
    let name= row.insertCell(0);
    let date = row.insertCell(1);
    let currency =row.insertCell(2);

    //displays information
    name.innerHTML = nameInput.value;
    date.innerHTML = dateInput.value;
    currency.innerHTML = "$" + currencyInput.value;

    //displays total
   total();
    }
}


function total(){
     
    let amount =  document.getElementById("currency").value;
    let currentValue = document.getElementById("totall").value;

    let add = Number(amount) +Number(currentValue); 


     document.getElementById("totall").value= add.toFixed(2);
}
