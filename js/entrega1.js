//************ Clases

// Clase cliente
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

let customerList = []; // Lista de clientes

// Clase Productos
class product
{
    constructor ( prod_name, prod_brand, prod_price , prod_stock , prod_desc, prod_category)
    {
        this.prod_name = prod_name;             //nombre 
        this.prod_brand = prod_brand;            //marca    
        this.prod_price = prod_price;           //precio
        this.prod_stock = prod_stock;           //stock
        this.prod_desc = prod_desc;             //descripción
        this.prod_category = prod_category;     //categoría
    }
}

let productList = []; // Lista de productos

//**********************************************/
//********* Funciones 

// Mostrar productos
function showCerveza(opcion)
{
    switch (opcion)
    {
        case 1 :
            alert("Corona x6 $22.900");
                prod_name ="Cerveza Corona x 6 ";
                prod_brand = "Corona"; 
                prod_price = "$ 22.900"

                productList.push( new product(prod_name, prod_brand, prod_price));

                for( let product of productList)
                {
                console.log("Compraste:" , product.prod_name);
                console.log("Marca:" , product.prod_brand);
                console.log("Precio:" , product.prod_price);
                
                }
            //console.log("El producto comprado fue: Corona x6 $22.900");
            break;
        
        case 2 :
            alert("Stella Artois x6  $24.900");
            console.log("El producto comprado fue: Stella Artois x6  $22.900");
            break;

        case 3 :
            alert("Club Colombia x6  $13.900");
            console.log("El producto comprado fue: Club Colombia x6  $12.900");
            break;
        
        case 4 :
            alert("Heineken x6  $13.900");
            console.log("El producto comprado fue: Heineken x6  $13.900");
            break;
    }
}

function showRon(opcion)
{
    switch (opcion)
    {
        case 1 :
            alert("Zacapa 750 ml $99.900");
            console.log("El producto comprado fue: Zacapa 750 ml $99.900");
            break;
        
        case 2 :
            alert("Havana Club 750 ml $83.900");
            console.log("El producto comprado fue: Havana Club 750 ml $79.900");
            break;

        case 3 :
            alert("Bacardí Carta Blanca 750 ml $52.900");
            console.log("El producto comprado fue: Bacardí Carta Blanca 750 ml $54.900");
            break;
        
        case 4 :
            alert("Viejo De Caldas 750 ml  $42.900");
            console.log("El producto comprado fue: Viejo De Caldas 750 ml  $44.900");
            break;
    }
}

function showTequila(opcion)
{
    switch (opcion)
    {
        case 1 :
            alert("Olmeca 750 ml $69.900");
            console.log("El producto comprado fue: Olmeca 750 ml $69.900");
            break;
        
        case 2 :
            alert("Jose Cuervo 750 ml $72.900");
            console.log("El producto comprado fue: Jose Cuervo 750 ml $72.900");
            break;

        case 3 :
            alert("Don Julio 750 ml $209.900");
            console.log("El producto comprado fue: Don Julio 750 ml $209.900");
            break;
        
        case 4 :
            alert("El Jimador 750 ml  $91.900");
            console.log("El producto comprado fue: El Jimador 750 ml  $91.900");
            break;
    }
}

function showVodka(opcion)
{
    switch (opcion)
    {
        case 1 :
            alert("Absolut 700 ml $70.900");
            console.log("El producto comprado fue: Absolut 700 ml $70.900");
            break;
        
        case 2 :
            alert("Smirnoff Lulo 750 ml $74.900");
            console.log("El producto comprado fue: Smirnoff Lulo 750 ml $74.900");
            break;

        case 3 :
            alert("Wyborowa 750 ml $55.900");
            console.log("El producto comprado fue: Wyborowa 750 ml $55.900");
            break;
        
        case 4 :
            alert("Finlandia 750 ml  $64.900");
            console.log("El producto comprado fue: Finlandia 750 ml  $64.900");
            break;
    }
}

function showWisky(opcion)
{
    switch (opcion)
    {
        case 1 :
            alert("JW Red Label 700 ml $57.900");
            console.log("El producto comprado fue: JW Red Label 700 ml $57.900");
            break;
        
        case 2 :
            alert("Old Par 750 ml $123.900");
            console.log("El producto comprado fue: Old Par 750 ml $123.900");
            break;

        case 3 :
            alert("Buchanan's 750 ml $135.900");
            console.log("El producto comprado fue: Buchanan's 750 ml $135.900");
            break;
        
        case 4 :
            alert("Something Special 750 ml  $79.900");
            console.log("El producto comprado fue: Something Special 750 ml  $79.900");
            break;
    }
}


// Funcion comprar
function Buy()
{
    let opcion = prompt("Bienvenido !!!\n\n ¿ Que quieres comprar hoy ?  \n\n Digita la opción\n\n 1. Cerveza \n 2. Ron \n 3. Tequila \n 4. Vodka \n 5. Wisky");
    opcion = parseInt(opcion);


switch (opcion)
    {
        case 1 :
            opcion = prompt("Cerveza \n\n 1. Corona x6 \n 2. Stella Artois x6 \n 3. Club Colombia x6 \n 4. Heineken x6");
            opcion = parseInt(opcion);
            showCerveza(opcion);
            break;

        case 2 :
            opcion = prompt("Ron \n\n 1. Zacapa 750 ml \n 2. Havana Club 750 ml \n 3. Bacardí Carta Blanca 750 ml \n 4. Viejo De Caldas 750 ml");
            opcion = parseInt(opcion);
            showRon(opcion);
            break;

        case 3 :
            opcion = prompt("Tequila \n\n 1. Olmeca 750 ml \n 2. Jose Cuervo 750 ml \n 3. Don Julio 750 ml \n 4. El Jimador 750 ml");
            opcion = parseInt(opcion);
            showTequila(opcion);
            break;

         case 4 :
            opcion = prompt("Vodka \n\n 1. Absolut 700 ml \n 2. Smirnoff Lulo 750 ml \n 3. Wyborowa 750 ml \n 4. Finlandia 750 ml");
            opcion = parseInt(opcion);
            showVodka(opcion);
            break;

        case 5 :
            opcion = prompt("Wiskey \n\n 1. JW Red Label 700 ml \n 2. Old Par 750 ml \n 3. Buchanan's 750 ml \n 4. Something Special 750 ml");
            opcion = parseInt(opcion);
            showWisky(opcion);
            break;       
    }



    alert("Gracias por comprar")

}

// Funcion Registro clientes
function Register ()
{
   
    let name = prompt("Ingresa tu nombre");
    let last_name = prompt("Ingresa tu apellido");
    let email = prompt("Ingrese tu email"); 
    alert("Bienvenido"); 

    customerList.push( new customer(name, last_name, age, email));

    for( let customer of customerList)
    {
    console.log("El nombre del usuario es:" , customer.name);
    console.log("El apellido del usuario es:" , customer.last_name);
    console.log("La edad del usuario es:" , customer.age);
    console.log("La edad del usuario es:" , customer.email);
    }
}




///////////////////////////////////////
// Al iniciar se ejecuta
alert("Bienvenido a La Licorera");
let age = prompt("Ingresa tu edad");
age = parseInt(age);

if(age >= 18)
{
    Register();
    Buy();
}
else
{
    alert("Prohibido el expendio de bebidas embriagantes a menores de edad \n Ley 124 de 1994")
}














        