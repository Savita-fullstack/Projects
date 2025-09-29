// let a=15;
// console.log(a);
// if(a<10)
// {
//     console.log('i am less than 10')

// }
// else
// {
//     console.log('i am greater than 10');
// }

// const b=100;
// console.log(a);
// const arr=[1,2,3,4,5];
// console.log(arr);
// const student=[

// {
//     name:'savita',
//     age: 22
// }
// ]

// console.log(student);
// const arr1 =['savita','sarita','shrikant'];
// console.log(arr1);
// for(let i=0; i<arr1.length; i++)
// {
//     console.log(arr1[i]);
//     console.log(arr1[i]);
//     console.log(arr[i]+1);
//     console.log(arr[i]+'neha');
// }
// const c=['r ','s', 't'] ;


// arrow function
//  const add=(a,b)=>{
//    return a+b;
 
//  }
//   const add=(a,b)=>   console.log(a+b);
//   add(22,22)

// const shop={
//     product:'sarree',
//     purchase:()=>{
//         console.log(this);
//         console.log(`${shop.product} urchased from mall`);
//         console.log(shop.product);
//     }
// // }
// // shop.purchase();

// const table=(a)=>{
//     for(let i=0; i<10; i++)

//     console.log(a*i);

// // }
// // table(2);
// // table(9);

// // const pyramd=()=>{
// //     for(let i=0; i<10; i++){
//       for(j=0; j<=i; j++)
//       {
//          console.log('*\n')
//       }

    
//     }

       

// }

// pyramd();
// const Keyname='name';

// const product=
//     {
//         [Keyname]:'mobile',
//         price:3000,
//     }

// console.log(product.price);
// console.log(product);

// const refreshtoken='fdgdgegagag';
// const newtoken='ffaffeid';
// const product={
//     refreshtoken,
//     newtoken,
// }
// console.log(product)
//object destructuring
const product={
    name:'neha',
    city:'mumbai',
}
// const{name,neha}=product;
// console.log(product);
const pro={...product};
console.log(pro);