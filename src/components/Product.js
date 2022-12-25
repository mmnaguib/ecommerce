import React from 'react'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {product, show, info, paraLen} = props;
  return (
    <div className='col-md-3'>
    <div className="card" style={{ minHeight: '500px' , maxHeight: '500px' }}>
        <img src={product.image} className="card-img-top" alt={ product.title } style={{margin: 'auto', width: '50%'}}/>
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            {((product.description).length) > 300 ? <>((product.description).substring(1, 4)) <button>Read More</button></>: product.description}
            {show && <Link to={`product/${product.id}`} className="btn btn-primary">Details</Link>}
            {info &&
            <div>
                price: {product.price}<br />
                category: {product.category}<br />
            </div>}
        </div>
    </div></div>
  )
}

export default Product