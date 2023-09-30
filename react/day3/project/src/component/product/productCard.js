import { Link, NavLink } from "react-router-dom";

export default function ProductCard({item}) {
    return (
        
        <div className="col p-5 w-25"  key={item.id}>
            
            <div className="card">
                <div className="position-relative">
                    <img src={item.images[0]} className="card-img-top" alt="..." style={{height: '250px'}}/>
                    {item.stock > 50 ? 
                    <span className="m-1 w-25 badge text-bg-success position-absolute top-0 start-0">in stock</span> 
                    : <span bg="danger" className='m-1 w-50 badge text-bg-danger position-absolute top-0 start-0'>out of stock</span>
                    }
                    <Link to={`/product-detail/${item.id}`} className="stretched-link"></Link>
                </div>
                <div className="card-body ">
                    <div className="d-flex justify-content-between " style={{height: '50px'}}>
                        <h6 className="card-title fw-bold">{item.title}</h6>
                        <h6 className="fw-bold">{item.price}$</h6>
                    </div>
                    <p className="card-text" style={{height: '90px'}}>{item.description}</p>
                    <h6>rate: {item.rating}</h6>
                    <button type="button" className="btn btn-outline-secondary rounded-pill">add to cart</button>
                </div>

            </div>

            
        </div>
        
    );
}