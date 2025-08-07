// Product = {

//      id: string;

//      name: string;

//      price: number;

//      category: {

//        id: string;

//        name: string;

//   };

//      discount?: number; // optional

// };
interface Product{
       id: string;
       name: string,
       price: number;
       category: {
         id: string;
         name: string;
       };
       discount?: number;
};
const product:Product={
    id:"btt1",
    name:"Tuan",
    price:100,
    category:{
        id:"id1",
        name:"banana",
    },
    discount:50
}
const product1:Product={
    id:"btt2",
    name:"Minh",
    price:100,
    category:{
        id:"id2",
        name:"orange",
    },
    discount:20
}
const product2:Product={
    id:"btt3",
    name:"Kimure",
    price:1000,
    category:{
        id:"id5",
        name:"ringo",
    },
    discount:10
}
function getFinalPrice(product: Product):number{
   if(typeof product.discount==="number"&&!isNaN(product.discount)){
       return product.price-=product.discount;
   }
   return product.price;
}
function printProductInfo(product: Product): void{
    console.log(`Ten ${product.name}`);
    console.log(`Gia goc ${product.price}`);
    console.log(`Gia sau khi giam${getFinalPrice(product)}`);
    console.log(`Danh muc ${product.category.name}`);
}
printProductInfo(product)
printProductInfo(product1)
printProductInfo(product2)
