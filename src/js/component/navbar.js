import React from "react";
import { Link } from "react-router-dom";
import ImagenLogoNavbar from "../../img/HV001.jpeg";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (







		<nav className="navbar navbar-light  mb-3 estiloNavbar">


			<div className="col-3">
				<Link to="/">
					<img className="imagenLogo" src={ImagenLogoNavbar} alt="LogoNavbar" />
				</Link>
			</div>

			<div className="col">
				<h1 className="titulo">GENERADOR DE NOMBRES DE <br></br> <span className="hyv">HÉROES</span> y <span className="hyv">VILLANOS</span></h1>
			</div>
			<div className="col3">

			</div>


			{/* <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">Check the Context in action</button>
        </Link>
      </div> */}


	
		</nav>




	);
};

