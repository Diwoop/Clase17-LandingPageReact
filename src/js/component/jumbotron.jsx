import React from "react";
export function Jumbotron () {
    return (
        <div className="row"> 
        <div className="jumbotron bg-warning bg-opacity-25 text-primary-emphasis mb-4 p-3">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deserunt minima sint enim, impedit, totam dolore explicabo quia sequi tempore harum officiis commodi voluptate et. Minus odio facere deserunt ad.</p>
            <p className="lead">
                <a className="btn btn-warning btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
        </div>
    );
}