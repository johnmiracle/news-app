/** @format */

import React from 'react';

function Header() {
	const todayDate = Date().toLocaleString() + '';
	return (
		<>
			<header id="header">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="header_top">
							<div className="header_top_left">
								<ul className="top_nav">
									<li>
										<a href="/">Home</a>
									</li>
									<li>
										<a href="/">About</a>
									</li>
									<li>
										<a href="/contact">Contact</a>
									</li>
								</ul>
							</div>
							<div className="header_top_right">
								<p>{todayDate}</p>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="header_bottom">
							<div className="logo_area">
								<a href="/" className="logo">
									<img src="/images/logo.jpg" alt="" />
								</a>
							</div>
							<div className="add_banner">
								<a href="/">
									<img src="/images/addbanner_728x90_V1.jpg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
