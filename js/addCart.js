// Agregar al carrito

//Cart Menu
let btn_buy = document.getElementsByClassName("btn-buy");
let cant = document.getElementById("cantidad");
let cart_empty = document.getElementById("cart-view");
let cart_body = document.getElementById("cart-body");
//

//Modal Cart Preview
let prod_image = document.getElementById("p-image");
let prod_name = document.getElementById("p-name");
let prod_desc = document.getElementById("p-desc");
let prod_price = document.getElementById("p-price");
//////

let itemCart = 0; // variable para mostrar en el icono del carrito
let cart_storage = []; // cart para convertir a localstorage .json
let showCart=[]; // cart sin convertir para mostrar en el html
let cart_recovery // 


// Escuchar botones agregar carrito
for (let button of btn_buy)
{
    button.addEventListener("click", addCart);
}
//

//Funcion agregar producto al carrito
function addCart(e)
{
    //Obtener valores de cada prducto
    button = e.target;
    let item = button.parentNode.parentNode; 
    let p_img = item.querySelector("img").src;
    let p_name = item.querySelector(".product").textContent;
    let p_desc = item.querySelector(".description").textContent;
    let p_price = item.querySelector(".price").textContent;
    ///

    /// Cargar datos al Modal
    prod_image.innerHTML = `<img src="${p_img}" width="200" height="200">`;
    prod_name.innerHTML = p_name;
    prod_desc.innerHTML = p_desc;
    prod_price.innerHTML = p_price;
    ////
   

    // Modificar cantidad del icono carrito
    itemCart ++; 
    cant.innerHTML = itemCart;
    //

    //Crear objeto producto
    let product = 
    { 
        img : p_img,
        name: p_name,
        description: p_desc,
        price: p_price,
        cant : 1
    }
    //
    
    
    cartJSON = JSON.stringify (showCart); // array a json
    localStorage.setItem("Carrito de compras",cartJSON); //almacenamineto en localstorage
    cart_recovery = JSON.parse(cartJSON); // de str json a array js
    //console.log("Guardado en ls",cart_recovery);

  

    if(showCart.length == 0)
    {
        console.log("carrito está vacio, se agrega un producto")
        showCart.push(product); //agregar producto al arreglo 
        console.log(showCart);
    }
    else
    {
          
        showCart.push(product); 
        console.log("se agrega el otro  producto al arreglo", showCart);
         
    }
    
    
    show_Products(product);
 } 

        // Funcion agregar producto al HTML
        function show_Products( product )
        {   
            cart_empty.remove();
            
            let row = document.createElement("tr");
            row.innerHTML = 
                            `<td>  <img src="${product.img}" width="100" height="100">  </td>
                            <td>  ${product.name} - ${product.description}   </td>
                             <td>  ${product.price} </td>
                            <td>  ${product.cant} </td
                            <td>
                            `;
            
            let cart_display = document.getElementById("cart-content");
            cart_display.appendChild(row);
                    
                    
        }
               
                

                
            




        

       
        

        
          
            

        
   

 
  
















