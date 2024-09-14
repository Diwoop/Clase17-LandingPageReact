import React from "react";
export function Jumbotron () {
    return (
        <div className="jumbotron bg-secondary bg-opacity-25 text-primary-emphasis mb-4 p-3">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deserunt minima sint enim, impedit, totam dolore explicabo quia sequi tempore harum officiis commodi voluptate et. Minus odio facere deserunt ad.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
}