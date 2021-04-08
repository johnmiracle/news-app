/** @format */

import React from 'react';
import { Footer, Header, LastestNews } from '../components';

function Contact() {
	return (
		<>
			<div className="container">
				<Header />
				<LastestNews />
				<section id="contentSection">
					<div className="row">
						<div className="col-lg-8 col-md-8 col-sm-8">
							<div className="left_content">
								<div className="contact_area">
									<h2>Contact Us</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
										eiusmod tempor incididunt ut labolore magna aliqua. Ut enim ad minim
										veniam. Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
										dolor sit amet, consectetur adipisicing elit.
									</p>
									<form action="#" className="contact_form">
										<input className="form-control" type="text" placeholder="Name*" />
										<input className="form-control" type="email" placeholder="Email*" />
										<textarea
											className="form-control"
											cols="30"
											rows="10"
											placeholder="Message*"
										></textarea>
										<input type="submit" value="Send Message" />
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<aside className="right_content">
								<div className="single_sidebar">
									<h2>
										<span>Popular Post</span>
									</h2>
									<ul className="spost_nav">
										<li>
											<div className="media wow fadeInDown">
												{' '}
												<a href="single_page.html" className="media-left">
													{' '}
													<img alt="" src="../images/post_img1.jpg" />{' '}
												</a>
												<div className="media-body">
													{' '}
													<a href="single_page.html" className="catg_title">
														{' '}
														Aliquam malesuada diam eget turpis varius 1
													</a>{' '}
												</div>
											</div>
										</li>
										<li>
											<div className="media wow fadeInDown">
												{' '}
												<a href="single_page.html" className="media-left">
													{' '}
													<img alt="" src="../images/post_img2.jpg" />{' '}
												</a>
												<div className="media-body">
													{' '}
													<a href="single_page.html" className="catg_title">
														{' '}
														Aliquam malesuada diam eget turpis varius 2
													</a>{' '}
												</div>
											</div>
										</li>
										<li>
											<div className="media wow fadeInDown">
												{' '}
												<a href="single_page.html" className="media-left">
													{' '}
													<img alt="" src="../images/post_img1.jpg" />{' '}
												</a>
												<div className="media-body">
													{' '}
													<a href="single_page.html" className="catg_title">
														{' '}
														Aliquam malesuada diam eget turpis varius 3
													</a>{' '}
												</div>
											</div>
										</li>
										<li>
											<div className="media wow fadeInDown">
												{' '}
												<a href="single_page.html" className="media-left">
													{' '}
													<img alt="" src="../images/post_img2.jpg" />{' '}
												</a>
												<div className="media-body">
													{' '}
													<a href="single_page.html" className="catg_title">
														{' '}
														Aliquam malesuada diam eget turpis varius 4
													</a>{' '}
												</div>
											</div>
										</li>
									</ul>
								</div>
							</aside>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default Contact;
