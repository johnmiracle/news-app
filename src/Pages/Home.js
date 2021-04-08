/** @format */

import React from 'react';
import { Header, Footer, LastestNews, Content } from '../components';

function Home() {

	return (
		<>
			<div className="container">
				<Header />
				<LastestNews></LastestNews>
				<section id="sliderSection">
					<div className="row">
						<div className="col-lg-8 col-md-8 col-sm-8">
							<div className="slick_slider">
								<div className="single_iteam">
									<a href="pages/single_page.html">
										<img src="images/slider_img4.jpg" alt="" />
									</a>
									<div className="slider_article">
										<h2>
											<a className="slider_tittle" href="pages/single_page.html">
												Fusce eu nulla semper porttitor felis sit amet
											</a>
										</h2>
										<p>
											Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus,
											egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra
											urna. Morbi dui...
										</p>
									</div>
								</div>
								<div className="single_iteam">
									<a href="/contact">
										<img src="images/slider_img2.jpg" alt="" />
									</a>
									<div className="slider_article">
										<h2>
											<a className="slider_tittle" href="pages/single_page.html">
												Fusce eu nulla semper porttitor felis sit amet
											</a>
										</h2>
										<p>
											Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus,
											egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra
											urna. Morbi dui...
										</p>
									</div>
								</div>
								<div className="single_iteam">
									{' '}
									<a href="pages/single_page.html">
										{' '}
										<img src="images/slider_img3.jpg" alt="" />
									</a>
									<div className="slider_article">
										<h2>
											<a className="slider_tittle" href="pages/single_page.html">
												Fusce eu nulla semper porttitor felis sit amet
											</a>
										</h2>
										<p>
											Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus,
											egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra
											urna. Morbi dui...
										</p>
									</div>
								</div>
								<div className="single_iteam">
									{' '}
									<a href="pages/single_page.html">
										{' '}
										<img src="images/slider_img1.jpg" alt="" />
									</a>
									<div className="slider_article">
										<h2>
											<a className="slider_tittle" href="pages/single_page.html">
												Fusce eu nulla semper porttitor felis sit amet
											</a>
										</h2>
										<p>
											Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus,
											egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra
											urna. Morbi dui...
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="latest_post">
								<h2>
									<span>Latest post</span>
								</h2>
								<div className="latest_post_container">
									<div id="prev-button">
										<i className="fa fa-chevron-up"></i>
									</div>
									<ul className="latest_postnav">
										<li>
											<div className="media">
												<a href="pages/single_page.html" className="media-left">
													<img alt="" src="images/post_img1.jpg" />
												</a>
												<div className="media-body">
													<a href="pages/single_page.html" className="catg_title">
														Aliquam malesuada diam eget turpis varius 1
													</a>
												</div>
											</div>
										</li>
										<li>
											<div className="media">
												<a href="pages/single_page.html" className="media-left">
													<img alt="" src="images/post_img1.jpg" />
												</a>
												<div className="media-body">
													<a href="pages/single_page.html" className="catg_title">
														Aliquam malesuada diam eget turpis varius 1
													</a>
												</div>
											</div>
										</li>
										<li>
											<div className="media">
												<a href="pages/single_page.html" className="media-left">
													<img alt="" src="images/post_img1.jpg" />
												</a>
												<div className="media-body">
													<a href="pages/single_page.html" className="catg_title">
														Aliquam malesuada diam eget turpis varius 1
													</a>
												</div>
											</div>
										</li>
										<li>
											<div className="media">
												<a href="pages/single_page.html" className="media-left">
													<img alt="" src="images/post_img1.jpg" />
												</a>
												<div className="media-body">
													<a href="pages/single_page.html" className="catg_title">
														Aliquam malesuada diam eget turpis varius 1
													</a>
												</div>
											</div>
										</li>
										<li>
											<div className="media">
												<a href="pages/single_page.html" className="media-left">
													<img alt="" src="images/post_img1.jpg" />
												</a>
												<div className="media-body">
													<a href="pages/single_page.html" className="catg_title">
														Aliquam malesuada diam eget turpis varius 1
													</a>
												</div>
											</div>
										</li>
									</ul>
									<div id="next-button">
										<i className="fa  fa-chevron-down"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Content />
				<Footer />
			</div>
		</>
	);
}

export default Home;
