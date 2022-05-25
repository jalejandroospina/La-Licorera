
let register = document.getElementById("registrar");
persons =[];

register.addEventListener("click", registration);


function registration ()
{

    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let customer = 
    { 
        name : name,
        last_name: last_name,
        email : email,
        password : password
    }

    let cust_json = JSON.stringify(customer);
    persons.push(cust_json);

    localStorage.setItem("persona",persons);

    console.log(persons);

}
