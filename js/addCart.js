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



let cant_select = 1;
let itemCart = 0; // variable para mostrar en el icono del carrito
let cart= []; // cart para convertir a json
let showCart=[]; // cart sin convertir para mostrar en el html


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
    
    let imagen = document.createElement("img");
   imagen.innerHTML = 
                    `<img src="${p_img}" width="200" height="200">
                     `;
    prod_image.appendChild(imagen);
    
   // console.log(p_img);
    prod_name.innerHTML = p_name;
    prod_desc.innerHTML = p_desc;
    prod_price.innerHTML = p_price;

   


    itemCart ++; // Modificar cantidad
//
/*
    Swal.fire({
        title:'¡ Agregado Correctamente !',
        text: `${p_name} - ${p_desc} `,
        imageUrl: `${p_img}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt:'Producto',
        
      })

 */
    
   
   // console.log("Tu carrito tiene", itemCart + " producto(s) ");
    //console.log(p_name);
    //console.log(p_desc);
    //console.log(p_price);

    //Crear objeto producto
    let product = 
    { 
        img : p_img,
        name: p_name,
        description: p_desc,
        price: p_price,
        cant : 1
    }
    
    if(showCart.length <= 0)
    {
        showCart.push(product)
        console.log("Carrito contiene",showCart)
        console.log("Producto",product.name)
    }
    else
    {
        showCart.forEach (
            function (product)
            {
                
                if(product.name === product.name)
                {   
                    console.log("Producto igual");
                    product.cant ++;
                }
                else
                {
                    console.log("Producto diferente")
                    showCart.push(product)
                }
                console.log("Vector Carrito" , showCart)
            }
        )
    }

    


    

    document.getElementById('cantidad').innerHTML = itemCart;
    //console.log("Agregado al html", itemCart);
    
    //showCart.push(product); // cargar el objeto al arreglo carrito
    //cart.push(product);

    //console.log("Arreglo de objetos",showCart)

    let cart_json = JSON.stringify(showCart);  // Convertir el arreglo a string JSON
    cart.push(cart_json); // pushear al arreglo el objeto convertido a string JSon 

    localStorage.setItem("productos", cart_json); // Cargar al local storage el string Json
    //console.log(cart_json); // String Jason

    

    //Recuperar del local storage
    let rec_json = localStorage.getItem("productos"); // recuperar de Local Storage
    //  

    ///////////// desconvertir de  de JSon
    let cart_nj= JSON.parse(rec_json);
    //for(i)
    //if    datos.nombre = producto.nombre
            //{datos.cantidad ++;}
    

    let cart_show = [];
    cart_show.push(cart_nj);
    console.log(cart_show)

    let {cant} = product;
    
    //console.log ("Productos añadidos al carrito " + "" , ...cart_nj);
    //console.log("Cantidad de cada producto",cant);


    //Subida  del json al servidor
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method:"POST",
        body: cart_json,
        headers:
        {
            "Content-type":"application/jason;charset=utf-8"
        }

    })
    .then((response)=> response.json)
    .then(function(data)
    {
       // console.log(data);
        
    })

    
   show_Products(product); // llamada al metodo para ver los poductos en html
}

// Funcion agregar producto al HTML

function show_Products( product )
{

  cart_empty.remove();


  let row = document.createElement("tr");
   row.innerHTML = 
                    `<td>  <img src="${product.img}" width="100" height="100">   </td>
                     <td>  ${product.name} - ${product.description}   </td>
                     <td> ${product.price} </td>
                     <td>  ${product.cant} </td
                     <td>
                     
                     `;

    let cart_display = document.getElementById("cart-content");
    cart_display.appendChild(row);
    //console.log(product.img);


 }   
 
   

 
  
















