/** @format */

import React, { useEffect, useState } from 'react';
import { newsApi } from '../api/fetchApi';
import { Header, Footer, LoadingBox } from '../components';

function NewsPost(props) {
	let newsId = props.match.params.id;
	const [news, setNews] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const data = await newsApi(newsId);
			setNews(data);
			setLoading(false);
		};

		fetchData();
		return () => {
			//
		};
	}, [newsId]);

	return (
		<div className="">
			{loading ? (
				<LoadingBox />
			) : (
				<div className="container">
					<Header />
					<section id="contentSection">
						<div className="row">
							<div className="col-md-12">
								<div className="left_content">
									<div className="single_page">
										<ol className="breadcrumb">
											<li>
												<a href="/">Home</a>
											</li>
											<li>
												<a href="/">Technology</a>
											</li>
											<li className="active">Mobile</li>
										</ol>
										<h1>{news.title}</h1>
										<div className="post_commentbox">
											<a href="/">
												<i className="fa fa-user"></i>
												{news.user}
											</a>
											<span>
												<i className="fa fa-bullseye"></i>
												{news.points} Points
											</span>
											<span>
												<i className="fa fa-calendar"></i>
												{news.time_ago}
											</span>
											<span>
												<i className="fa fa-comments"></i>
												{news.comments_count}
											</span>
											<a href="/">
												<i className="fa fa-tags"></i>Technology
											</a>
										</div>
										<div className="">
											<p className="">
												<i className="fa fa-comments mt-5"> Comments:</i>
											</p>
											<ul className="">
												{news.comments && news.comments.length > 0
													? news.comments.map((item) => (
															<li key={item.id}>
																<div className="">
																	<details
																		open
																		className="comment"
																		id="comment-1"
																	>
																		<a
																			href="#comment-1"
																			className="comment-border-link"
																		>
																			<span className="sr-only">
																				Jump to comment-1
																			</span>
																		</a>
																		<summary>
																			<div className="comment-heading">
																				<div className="comment-info">
																					<a
																						href="#!"
																						className="comment-author"
																					>
																						{item.user}
																					</a>
																					<p className="m-0">
																						{item.level} level
																						&bull; {item.time_ago}
																					</p>
																				</div>
																			</div>
																		</summary>

																		<div className="comment-body w-80">
																			<p>{item.content}</p>
																		</div>

																		<div className="replies">
																			{item.comments.map((item) => (
																				<details
																					open
																					className="comment"
																					id="comment-2"
																				>
																					<a
																						href="#comment-2"
																						className="comment-border-link"
																					>
																						<span className="sr-only">
																							Jump to comment-2
																						</span>
																					</a>
																					<summary>
																						<div className="comment-heading">
																							<div className="comment-info">
																								<a
																									href="#!"
																									className="comment-author"
																								>
																									{
																										item.user
																									}
																								</a>
																								<p className="m-0">
																									{
																										item.level
																									}{' '}
																									level
																									&bull;{' '}
																									{
																										item.time_ago
																									}
																								</p>
																							</div>
																						</div>
																					</summary>

																					<div className="comment-body w-80">
																						<p>{item.content}</p>
																					</div>
																					<div className="replies">
																						{item.comments.map(
																							(item) => (
																								<details
																									open
																									className="comment"
																									id="comment-2"
																								>
																									<a
																										href="#comment-2"
																										className="comment-border-link"
																									>
																										<span className="sr-only">
																											Jump
																											to
																											comment-2
																										</span>
																									</a>
																									<summary>
																										<div className="comment-heading">
																											<div className="comment-info">
																												<a
																													href="#!"
																													className="comment-author"
																												>
																													{
																														item.user
																													}
																												</a>
																												<p className="m-0">
																													{
																														item.level
																													}{' '}
																													level
																													&bull;{' '}
																													{
																														item.time_ago
																													}
																												</p>
																											</div>
																										</div>
																									</summary>

																									<div className="comment-body w-80">
																										<p>
																											{
																												item.content
																											}
																										</p>
																									</div>
																								</details>
																							)
																						)}
																					</div>
																				</details>
																			))}
																		</div>
																	</details>
																</div>
															</li>
													  ))
													: 'No Comments'}
											</ul>
											<a
												href={news.url}
												target="_blank"
												rel="noreferrer"
												className="white btn default-btn btn-block btn-sm mt-3"
											>
												News Url
											</a>
										</div>
										<div className="social_link">
											<ul className="sociallink_nav">
												<li>
													<a href="/">
														<i className="fa fa-facebook"></i>
													</a>
												</li>
												<li>
													<a href="/">
														<i className="fa fa-twitter"></i>
													</a>
												</li>
												<li>
													<a href="/">
														<i className="fa fa-google-plus"></i>
													</a>
												</li>
												<li>
													<a href="/">
														<i className="fa fa-linkedin"></i>
													</a>
												</li>
												<li>
													<a href="/">
														<i className="fa fa-pinterest"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<Footer />
				</div>
			)}
		</div>
	);
}
export default NewsPost;
