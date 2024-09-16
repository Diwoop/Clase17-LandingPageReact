import React from "react";
export function Card () {
    return (
        <div className="row">
        <div className="card col-3 mb-4 p-3 bg-warning bg-opacity-25 border border-warning" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOPZxcr1N8MBo0EO-IVcU-OzQ3hpnb4Aokg&s" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">A very cute cat</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur quae et aut consectetur sint eaque. Perspiciatis, optio. Hic molestias natus blanditiis, tempore quas voluptatum distinctio asperiores et cupiditate vel.</p>
                <a href="#" className="btn btn-warning">Find Out More!</a>
            </div>
        </div>
        </div>
    );
}



  