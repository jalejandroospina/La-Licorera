

class customer
{
    constructor( name , last_name, age, email)
    {

        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.email = email;
    }
    
}

let customerList = [];

function register()
{
    for( let i = 0 ; i < 2 ; i++)
    {
        
        let name = prompt("Ingresa tu nombre");
        let last_name = prompt("Ingresa tu apellido");
        let age = prompt("Ingresa tu edad");
        let email = prompt("Ingrese tu email");
        alert("Bienvenido");
    
        customerList.push( new customer(name, last_name, age, email));
    }
    
}
register();

for( let customer of customerList)
{
    console.log("El nombre del usuario es:" , customer.name);
    console.log("El apellido del usuario es:" , customer.last_name);
    console.log("La edad del usuario es:" , customer.age);
    console.log("La edad del usuario es:" , customer.email);
}