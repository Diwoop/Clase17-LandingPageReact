import React from "react";

//include images into your bundle
import  {NavBar} from "./navbar";
import {Jumbotron} from "./jumbotron";
import {Card} from "./card";
import {Footer} from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar />
		<div className="container my-4">
			<Jumbotron/>
			<div className="row d-flex justify-content-around">
				<div className="col-xs-12 col-sm-6 col-md-3">
					<Card/>                            
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3">
					<Card/>                            
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3">
					<Card/>                            
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3">
					<Card/>                            
				</div>
			</div>
		</div>
		<Footer/>
	</div>
);
};

export default Home;
