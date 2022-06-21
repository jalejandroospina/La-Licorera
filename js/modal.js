//Modal Cart Preview
let prod_name = document.getElementById("p-name");
let prod_image = document.getElementById("p-image");
let prod_desc = document.getElementById("p-desc");
let prod_price = document.getElementById("p-price");
let btn_less = document.getElementById("less");
let cant_value =document.getElementById("cant-value");
let btn_plus = document.getElementById("plus");
//////


//Botones modificar cantidad
btn_plus.addEventListener("click",addition);
btn_less.addEventListener("click",substraction);
//


// Cargar datos al Modal
prod_name.innerHTML = p_name;
prod_image.innerHTML = p_img;
 prod_desc.innerHTML = p_desc;
 prod_price.innerHTML = p_price
//

//Funciones de suma y resta de cantidad
function addition()
{
    itemCart ++;
    console.log(" + 1" ,itemCart);
    

}
function substraction()
{
    itemCart --;
    console.log(" - 1", itemCart);
}
//


// Recorrer arreglo para modificar cantidad
  showCart.forEach(
    function(product)
    {
       
        if(product.name === product.name)
        {
            product.cant ++;
            //console.log("Resultado del if", product.name + product.cant);
            showCart = showCart;
        }
        else
        {
           // console.log("Es otro producto");
        }
        console.log(showCart);
        
    }
);
///