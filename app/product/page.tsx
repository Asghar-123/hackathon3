// import React, { useEffect, useState} from "react";
// import  sanityClient, { SanityClient }  from "@sanity/client";
// import Image from "next/image";

// const sanity = sanityClient({
//     projectId: "umv2vmns",
//     dataset: "production",
//     apiVersion:"2023-01-01",
//     useCdn:true
// })

// interface Product {
//     _id: string;
//     title: string;
//     price:number;
//     description:string;
//     discountPercentage:number;
//     imageUrl:string
//     productImage: {
//         assests:{
//             _ref:string
//         }
//     }
//     tags: string[]
// }


// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([])
//     const [cart, setCart] = useState<Product[]>([])

//     const fetchProducts = async () => {
//         try {
//             const query = `
//             *[type == "product"] {
//               _id,
//               title,
//               price,
//               description,
//               discountPercentage,
//               "imageUrl": productImage.asseset->url,
//               tags
//             }
//             `
//             const data = await sanity.fetch(query)
//             setProducts(data) 
//         } catch (error){
//             console.error("Error Fetching data:",error)
//         }

// }    }


// const addToCart = (product:Product) => {
//      setCart((prevCart:any) => [...prevCart,product])
//     alert(`${product.title} has been added to your cart`)
// }

// useEffect(() =>{
//     fetchProducts();
// }, []);
