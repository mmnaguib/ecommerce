import React, { useEffect, useState } from 'react'
import Product from './Product';

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [cats, setCats] = useState([]);
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    const getCats = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((data) => setCats(data));
    }
    const getSpeProducts = (catName) => {
        fetch(`${`https://fakestoreapi.com/products/category`}/${catName}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    useEffect(()=> {
        getProducts();
        getCats();
    }, [])
  return (
    <div className='container'>
        <button className='btn btn-primary' onClick={()=>getProducts()}>All</button>
        {cats.map(cat => 
            <button className='btn btn-primary' key={cat} onClick={()=>getSpeProducts(cat)}>{cat}</button>
        )}
        <div className='row'>
            {products.map(product => 
                <Product product={product} show={true} info={false} paraLen={true}/>
            )}
        </div>
    </div>
  )
}

export default Productlist