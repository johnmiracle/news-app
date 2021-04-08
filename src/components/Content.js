/** @format */

import React, { useEffect, useState } from 'react';
import { fetchApi } from '../api/fetchApi';
import { Link } from 'react-router-dom';
import { Pagination } from '.';

function Content(props) {
	const [lists, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const data = await fetchApi();
			setList(data);
			setLoading(false);
		};
		fetchData();
		return () => {
			//
		};
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = lists.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<section id="contentSection">
				<div className="row">
					<div className="col-lg-8 col-md-8 col-sm-8">
						<div className="left_content">
							<div className="single_post_content">
								<h2>
									<span>Technology</span>
								</h2>

								<ul className="spost_nav">
									{loading ? (
										<img src="loader1.gif" alt="loader" className="loader1" />
									) : (
										currentPosts.map((list) => (
											<li key={list.id}>
												<div className=" wow fadeInDown">
													<a
														href={list.url}
														className="catg_title"
														target="_blank"
														rel="noreferrer"
													>
														<b> {list.title}</b>
													</a>
													<br />
													<span> {list.points} points</span>
													<span> by {list.user}</span>
													<span> {list.time_ago} | </span>
													<span>
														{' '}
														<Link
															to={{
																pathname: `/item/${list.id}`,
																state: { linkId: list.id }
															}}
															className="catg_title"
														>
															{list.comments_count} Comments
														</Link>
													</span>
												</div>
											</li>
										))
									)}
								</ul>
								<Pagination
									postsPerPage={postsPerPage}
									totalPosts={lists.length}
									paginate={paginate}
								/>
							</div>
							<div className="single_post_content">
								<h2>
									<span>Photography</span>
								</h2>
								<ul className="photograph_nav  wow fadeInDown">
									<li>
										<div className="photo_grid">
											<figure className="effect-layla">
												{' '}
												<a
													className="fancybox-buttons"
													data-fancybox-group="button"
													href="images/photograph_img2.jpg"
													title="Photography Ttile 1"
												>
													{' '}
													<img src="images/photograph_img2.jpg" alt="" />
												</a>{' '}
											</figure>
										</div>
									</li>
									<li>
										<div className="photo_grid">
											<figure className="effect-layla">
												{' '}
												<a
													className="fancybox-buttons"
													data-fancybox-group="button"
													href="images/photograph_img3.jpg"
													title="Photography Ttile 2"
												>
													{' '}
													<img src="images/photograph_img3.jpg" alt="" />{' '}
												</a>{' '}
											</figure>
										</div>
									</li>
									<li>
										<div className="photo_grid">
											<figure className="effect-layla">
												{' '}
												<a
													className="fancybox-buttons"
													data-fancybox-group="button"
													href="images/photograph_img4.jpg"
													title="Photography Ttile 3"
												>
													{' '}
													<img src="images/photograph_img4.jpg" alt="" />{' '}
												</a>{' '}
											</figure>
										</div>
									</li>
									<li>
										<div className="photo_grid">
											<figure className="effect-layla">
												{' '}
												<a
													className="fancybox-buttons"
													data-fancybox-group="button"
													href="images/photograph_img4.jpg"
													title="Photography Ttile 4"
												>
													{' '}
													<img src="images/photograph_img4.jpg" alt="" />{' '}
												</a>{' '}
											</figure>
										</div>
									</li>
									<li>
										<div className="photo_grid">
											<figure className="effect-layla">
												{' '}
												<a
													className="fancybox-buttons"
													data-fancybox-group="button"
													href="images/photograph_img2.jpg"
													title="Photography Ttile 5"
												>
													{' '}
													<img src="images/photograph_img2.jpg" alt="" />{' '}
												</a>{' '}
											</figure>
										</div>
									</li>
									<li>
										<div className="photo_grid">
											<figure className="effect-layla">
												{' '}
												<a
													className="fancybox-buttons"
													data-fancybox-group="button"
													href="images/photograph_img3.jpg"
													title="Photography Ttile 6"
												>
													{' '}
													<img src="images/photograph_img3.jpg" alt="" />{' '}
												</a>{' '}
											</figure>
										</div>
									</li>
								</ul>
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
											<a href="pages/single_page.html" className="media-left">
												{' '}
												<img alt="" src="images/post_img1.jpg" />{' '}
											</a>
											<div className="media-body">
												{' '}
												<a href="pages/single_page.html" className="catg_title">
													{' '}
													Aliquam malesuada diam eget turpis varius 1
												</a>{' '}
											</div>
										</div>
									</li>
									<li>
										<div className="media wow fadeInDown">
											{' '}
											<a href="pages/single_page.html" className="media-left">
												{' '}
												<img alt="" src="images/post_img2.jpg" />{' '}
											</a>
											<div className="media-body">
												{' '}
												<a href="pages/single_page.html" className="catg_title">
													{' '}
													Aliquam malesuada diam eget turpis varius 2
												</a>{' '}
											</div>
										</div>
									</li>
									<li>
										<div className="media wow fadeInDown">
											{' '}
											<a href="pages/single_page.html" className="media-left">
												{' '}
												<img alt="" src="images/post_img1.jpg" />{' '}
											</a>
											<div className="media-body">
												{' '}
												<a href="pages/single_page.html" className="catg_title">
													{' '}
													Aliquam malesuada diam eget turpis varius 3
												</a>{' '}
											</div>
										</div>
									</li>
									<li>
										<div className="media wow fadeInDown">
											{' '}
											<a href="pages/single_page.html" className="media-left">
												{' '}
												<img alt="" src="images/post_img2.jpg" />{' '}
											</a>
											<div className="media-body">
												{' '}
												<a href="pages/single_page.html" className="catg_title">
													{' '}
													Aliquam malesuada diam eget turpis varius 4
												</a>{' '}
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="single_sidebar">
								<ul className="nav nav-tabs" role="tablist">
									<li role="presentation" className="active">
										<a href="#category" aria-controls="home" role="tab" data-toggle="tab">
											Category
										</a>
									</li>
									<li role="presentation">
										<a href="#video" aria-controls="profile" role="tab" data-toggle="tab">
											Video
										</a>
									</li>
									<li role="presentation">
										<a
											href="#comments"
											aria-controls="messages"
											role="tab"
											data-toggle="tab"
										>
											Comments
										</a>
									</li>
								</ul>
								<div className="tab-content">
									<div role="tabpanel" className="tab-pane active" id="category">
										<ul>
											<li className="cat-item">
												<a href="/" className="ahref">
													Sports
												</a>
											</li>
											<li className="cat-item">
												<a href="/" className="ahref">
													Fashion
												</a>
											</li>
											<li className="cat-item">
												<a href="/" className="ahref">
													Business
												</a>
											</li>
											<li className="cat-item">
												<a href="/" className="ahref">
													Technology
												</a>
											</li>
											<li className="cat-item">
												<a href="/" className="ahref">
													Games
												</a>
											</li>
											<li className="cat-item">
												<a href="/" className="ahref">
													Life &amp; Style
												</a>
											</li>
											<li className="cat-item">
												<a href="/" className="ahref">
													Photography
												</a>
											</li>
										</ul>
									</div>
									<div role="tabpanel" className="tab-pane" id="video">
										<div className="vide_area">
											<iframe
												width="100%"
												height="250"
												src="http://www.youtube.com/embed/h5QWbURNEpA?feature=player_detailpage"
												frameBorder="0"
												allowFullScreen
												title="player"
											></iframe>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane" id="comments">
										<ul className="spost_nav">
											<li>
												<div className="media wow fadeInDown">
													{' '}
													<a href="pages/single_page.html" className="media-left">
														{' '}
														<img alt="" src="images/post_img1.jpg" />{' '}
													</a>
													<div className="media-body">
														{' '}
														<a
															href="pages/single_page.html"
															className="catg_title"
														>
															{' '}
															Aliquam malesuada diam eget turpis varius 1
														</a>{' '}
													</div>
												</div>
											</li>
											<li>
												<div className="media wow fadeInDown">
													{' '}
													<a href="pages/single_page.html" className="media-left">
														{' '}
														<img alt="" src="images/post_img2.jpg" />{' '}
													</a>
													<div className="media-body">
														{' '}
														<a
															href="pages/single_page.html"
															className="catg_title"
														>
															{' '}
															Aliquam malesuada diam eget turpis varius 2
														</a>{' '}
													</div>
												</div>
											</li>
											<li>
												<div className="media wow fadeInDown">
													{' '}
													<a href="pages/single_page.html" className="media-left">
														{' '}
														<img alt="" src="images/post_img1.jpg" />{' '}
													</a>
													<div className="media-body">
														{' '}
														<a
															href="pages/single_page.html"
															className="catg_title"
														>
															{' '}
															Aliquam malesuada diam eget turpis varius 3
														</a>{' '}
													</div>
												</div>
											</li>
											<li>
												<div className="media wow fadeInDown">
													{' '}
													<a href="pages/single_page.html" className="media-left">
														{' '}
														<img alt="" src="images/post_img2.jpg" />{' '}
													</a>
													<div className="media-body">
														{' '}
														<a
															href="pages/single_page.html"
															className="catg_title"
														>
															{' '}
															Aliquam malesuada diam eget turpis varius 4
														</a>{' '}
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="single_sidebar wow fadeInDown">
								<h2>
									<span>Sponsor</span>
								</h2>
								<a className="sideAdd" href="/">
									<img src="images/add_img.jpg" alt="" />
								</a>{' '}
							</div>
							<div className="single_sidebar wow fadeInDown">
								<h2>
									<span>Category Archive</span>
								</h2>
								<select className="catgArchive">
									<option>Select Category</option>
									<option>Life styles</option>
									<option>Sports</option>
									<option>Technology</option>
									<option>Treads</option>
								</select>
							</div>
							<div className="single_sidebar wow fadeInDown">
								<h2>
									<span>Links</span>
								</h2>
								<ul>
									<li>
										<a href="/" className="ahref">
											Blog
										</a>
									</li>
									<li>
										<a href="/" className="ahref">
											Rss Feed
										</a>
									</li>
									<li>
										<a href="/" className="ahref">
											Login
										</a>
									</li>
									<li>
										<a href="/" className="ahref">
											Life &amp; Style
										</a>
									</li>
								</ul>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
}

export default Content;
