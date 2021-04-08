/** @format */

import React from 'react';

function Footer() {
	return (
		<>
			<footer id="footer">
				<div className="footer_top">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="footer_widget wow fadeInLeftBig">
								<h2>Flickr Images</h2>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="footer_widget wow fadeInDown">
								<h2>Tag</h2>
								<ul className="tag_nav">
									<li>
										<a href="/">Games</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="footer_widget wow fadeInRightBig">
								<h2>Contact</h2>
								<p>
									These was built as a project, for development and knowledge gathering. 
								</p>
								<address>
									Perfect News, Ibadan, Oyo State, Nigeria Phone: 081 3117 ****
								</address>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_bottom">
					<p className="copyright">
						Copyright &copy; 2045 <a href="/">NewsFeed</a>
					</p>
					<p className="developer">Developed By Miracle Anaje</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
