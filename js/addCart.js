// Agregar al carrito

let btn_buy = document.getElementsByClassName("btn-buy");
let cant = document.getElementById("cantidad");
let cart_empty = document.getElementById("cart-view");

let itemCart = 0;
let cart= []; // cart para convertir a json
let showCart=[]; // cart sin convertir para mostrar en el html


for (let button of btn_buy)
{
    button.addEventListener("click", addCart);
}


function addCart(e)
{

    button = e.target;
    let item = button.parentNode.parentNode;
     
    let p_img = item.querySelector("img").src;
    let p_name = item.querySelector(".product").textContent;
    let p_desc = item.querySelector(".description").textContent;
    let p_price = item.querySelector(".price").textContent;

    Swal.fire({
        title:'¡ Agregado Correctamente !',
        text: `${p_name} - ${p_desc} `,
        imageUrl: `${p_img}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt:'Producto',
        
      })

    
    
    itemCart ++;
    console.log("Tu carrito tiene", itemCart + " producto(s) ")
    document.getElementById('cantidad').innerHTML = itemCart;

    //console.log(p_name);
    //console.log(p_desc);
    //console.log(p_price);


    let product = 
    { 
        img : p_img,
        name: p_name,
        description: p_desc,
        price: p_price,
        cant : 1
    }
    
    showCart.push(product); // cargar el objeto al arreglo carrito
    //cart.push(product);

    let cart_json = JSON.stringify(showCart);  // Convertir el arreglo a string JSON
    cart.push(cart_json); // pushear al arreglo el objeto convertido a string JSon 

    localStorage.setItem("productos", cart_json); // Cargar al local storage el string Json
    //console.log(cart_json); // String Jason

    

    //Recuperar del local storage
    let rec_json = localStorage.getItem("productos"); // recuperar de Local Storage
    //console.log("recuperado de ls " , rec_json);

    ///////////// desconvertir de  de JSon
    let cart_nj= JSON.parse(rec_json);
    

    let cart_show = [];
    cart_show.push(cart_nj);

    let {cant} = product;
    
    console.log ("Productos añadidos al carrito " + "" , ...cart_nj);
    console.log("Cantidad de cada producto",cant);


    
   
    








    show_Products(product); // llamada al metodo para ver los poductos en html
}

function show_Products( product )
{

  cart_empty.remove();


  let row = document.createElement("tr");
   row.innerHTML = 
                    `<td>  <img src="${product.img}" width="100" height="100">  ${product.name} </td>
                     <td>  ${product.description}  </td>
                     <td>  ${product.price} </td>
                     <td>  ${product.cant} </td>  
                     `;

  let cart_display = document.getElementById("cart-content");
  cart_display.appendChild(row);

}

