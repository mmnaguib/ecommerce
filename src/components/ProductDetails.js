import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Product from './Product';
const ProductDetails = () => {
    const [product,setProduct] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`${'https://fakestoreapi.com/products'}/${params.productId}`)
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    });
  return (
    <div key={product.id}>
        <Product product={product} show={false} info={true}/>
    </div>
  )
}

export default ProductDetails