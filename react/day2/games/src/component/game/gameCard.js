import { Link } from "react-router-dom";

function Card({gd, btn, event, handel}){
    return(
        <div className="col w-25 p-5 m-5 h-25" key={gd.id}>
        <div className="card h-100">
            <img src={gd.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <Link to= {`/blog/${gd.id}`}>
                    <h5 className="card-title">{gd.title}</h5>
                </Link>
                {gd.onSale && <span class="badge text-bg-success">on sale</span>}
                <p className="card-text">{gd.description}</p>
                {gd.tags.map((t) => {
                    return (
                        <span class="badge text-bg-primary">{t}</span>
                    );
                })}
                <button type="button" class="d-block mt-2 btn btn-danger" onClick={() => handel(gd.id)}>view</button>

                <button type="button" class="d-block mt-2 btn btn-danger" onClick={() => event(gd.id)}>{btn}</button>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary">price {gd.price} $</small>
            </div>
        </div>
    </div>
    );
}
export default Card;