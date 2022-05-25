// Agregar al carrito

let btn_buy = document.getElementsByClassName("btn-buy");
let cant = document.getElementById("cantidad");
let cart_empty = document.getElementById("cart-view");

let cart= [];
let showCart=[];
let itemCart= 0 ;

for (let button of btn_buy)
{
    button.addEventListener("click", addCart);
}


function addCart(e)
{

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado Correctamente',
        showConfirmButton: false,
        timer: 800
      })

      

    button = e.target;
    let item = button.parentNode.parentNode;
     
    let p_img = item.querySelector("img").src;
    let p_name = item.querySelector(".product").textContent;
    let p_desc = item.querySelector(".description").textContent;
    let p_price = item.querySelector(".price").textContent;

    Swal.fire({
        title: 'Agregado Correctamente!',
        text: `${p_name}`,
        imageUrl: `${p_img}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt:'Producto' ,
      })

    itemCart ++ ;
    document.getElementById('cantidad').innerHTML = itemCart;

    console.log(p_name);
    console.log(p_desc);
    console.log(p_price);


    let product = 
    { 
        img : p_img,
        name: p_name,
        description: p_desc,
        price: p_price,
        cant : 1
    }
    
    showCart.push(product);
    //cart.push(product);
    let cart_json = JSON.stringify(product);  // Convertir el arreglo a string JSON
    cart.push(cart_json); // pushear el arreglo convertido

    localStorage.setItem("productos", cart); // Cargar al local storage el arreglo

    
    console.log(cart);

    show_Products(product);

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

