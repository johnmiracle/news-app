/** @format */

import axios from 'axios';

const BaseURL = 'https://node-hnapi.herokuapp.com';

export const fetchApi = async (query) => {
	const { data } = await axios.get(BaseURL + `/news`);
	return data;
};

export const newsApi = async (id) => {
	const { data } = await axios.get(BaseURL + `/item/${id}`);
	console.log(data);

	return data;
};
