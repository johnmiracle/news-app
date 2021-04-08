/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<section id="navArea">
				<nav className="navbar navbar-inverse" role="navigation">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#navbar"
							aria-expanded="false"
							aria-controls="navbar"
						>
							{' '}
							<span className="sr-only">Toggle navigation</span>{' '}
							<span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
							<span className="icon-bar"></span>{' '}
						</button>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav main_nav">
							<li className="active">
								<Link to={'/'}>
									<span className="fa fa-home desktop-home"></span>
									<span className="mobile-show">Home</span>
								</Link>
							</li>
							<li>
								<Link to={''}>Technology</Link>
							</li>
							<li className="dropdown">
								{' '}
								<Link
									to={''}
									className="dropdown-toggle"
									data-toggle="dropdown"
									role="button"
									aria-expanded="false"
								>
									Mobile
								</Link>
								<ul className="dropdown-menu" role="menu">
									<li>
										<Link to={''}>Android</Link>
									</li>
									<li>
										<Link to={''}>Samsung</Link>
									</li>
									<li>
										<Link to={''}>Nokia</Link>
									</li>
									<li>
										<Link to={''}>Walton Mobile</Link>
									</li>
									<li>
										<Link to={''}>Sympony</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to={''}>Laptops</Link>
							</li>
							<li>
								<Link to={''}>Tablets</Link>
							</li>
							<li>
								<Link to={'/contact'}>Contact Us</Link>
							</li>
							<li>
								<Link to="pages/404.html">404 Page</Link>
							</li>
						</ul>
					</div>
				</nav>
			</section>
		</>
	);
}

export default Navbar
