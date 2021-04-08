/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const News = (lists, loading) => {
	return (
		<ul className="spost_nav">
			{loading ? (
				<img src="loader1.gif" alt="loader" className="loader1" />
			) : (
				lists.map((list) => (
					<li key={list.id}>
						<div className="media wow fadeInDown">
							<Link
								to={{
									pathname: `/item/${list.id}`,
									state: { linkId: list.id }
								}}
								className="media-left"
							>
								<img alt="" src="images/post_img1.jpg" />
							</Link>
							<div className="media-body">
								<Link to="pages/single_page.html" className="catg_title">
									{list.title}
								</Link>
							</div>
						</div>
					</li>
				))
			)}
		</ul>
	);
};

export default News;


	