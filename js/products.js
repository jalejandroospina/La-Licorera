// Products

class Product
{
    constructor ( prod_name, prod_brand, prod_price , prod_stock , prod_desc, prod_category)
    {
        this.prod_name = prod_name;             //nombre 
        this.prod_name = prod_brand;            //marca    
        this.prod_price = prod_price;           //precio
        this.prod_stock = prod_stock;           //stock
        this.prod_desc = prod_desc;             //descripción
        this.prod_category = prod_category;     //categoría
    }

    Sale()
    {
        this.prod_stock = this.prod_stock - 1;
    }

    Add()
    {
        this.prod_stock = this.prod_stock + 1;
    }

    price_sale()
    {
        this.prod_price = this.prod_price * 0.19;
    }


}

let ProductList = [];

function AddProducts()
{
    for( let i = 0 ; i < 1 ; i++)
    {
        
        let prod_name = prompt("Ingresa el nombre del producto");
        let prod_brand = prompt("Ingresa la marca del producto");
        let prod_price = prompt("Ingresa el precio del producto");
        let prod_stock = prompt("Ingresa unidades del producto");
        let prod_desc = prompt("Ingresa descripción del producto");
        let prod_category = prompt("Ingresa la categoria del producto");

        alert("Registrado");
    
        ProductList.push( new Product(prod_name, prod_brand, prod_price, prod_stock,prod_desc,prod_category ));
    }
    
}
AddProducts();

for( let Product of ProductList)
{
    console.log("El nombre del producto es:" , Product.prod_name);
    console.log("La marca del producto es:" , Product.prod_brand);
    console.log("El precio del productos es:" , Product.prod_price);
    console.log("El stock del producto es:" , Product.prod_stock);
    console.log("La descripción del producto es:" , Product.prod_desc);
    console.log("La categoria del producto es:" , Product.prod_category);
}

/*
// Cervezas
let corona = new Product ("Cerveza Corona Extra 355 ml x6","Corona", 22900, 10,"Cerveza tipo Lager Pilsner, clara y brillante","Cerveza");
let stella = new Product ("Cerveza Stella Artois 330 ml x6","Stella Artois", 22900, 10,"Cerveza tipo Lager color dorado brillante", "Cerveza");
let club = new Product("Cerveza Club Colombia Dorada Lata 330 ml x6", "Club Colombia", 12900, 10, "Cerveza tipo Lager color dorado, elaborada con cebada malteada y malta de caramelo." , "Cerveza");
let heineken = new Product ("Cerveza Heineken Lata 269 ml x6","Heineken", 13900, 10, "Cerveza tipo Lager, con un sabor intenso, equilibrado y con aromas frutados", "Cerveza");

//Rones
let zacapa = new Product ("Ron Zacapa Centenario Ambar","Zacapa", 99900, 10,"Ron de color ámbar con sabores a madera, piel de naranja y almendras y un final a mazapán y mermelada","Ron");
let havana = new Product ("Ron Havana Club Añejo 7 Años", "Havana Club", 79900, 10, "Ron oscuro mezcla de finos rones a partir de tabaco y dulces frutos a especias y vainilla", "Ron" );
let bacardi = new Product ("Bacardí Carta Blanca x 750 ml","Bacardí", 54900, 10, "Ron Blanco brillante y pulido.Con aroma a vainilla ligera y albaricoque fresco", "Ron");
let caldas = new Product ("Ron Viejo De Caldas Tradicional x 750 ml","Ron Caldas",44900, 10, "Ron producido de la caña de azúcar y añejado en barriles de roble, con un sabor dulce frutal, madera bajo y amargo", "Ron" );
*/