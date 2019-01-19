import { SAVE_NAME, GET_TOKEN, SEARCH_PHOTO } from '../constants'
import {accessKey, secretKey} from '../../secrets'

const initialState = {
	logged: false,
	key: null,
	test_value: 'Hello'
};

function rootReducer(state = initialState, action) {
	if (action.type === SAVE_NAME) {
		return Object.assign({}, state, {
			name: action.payload
		});
	}

	if (action.type === SEARCH_PHOTO) {
		//fetch here
		console.log('should search')
	}

	if (action.type === GET_TOKEN) {
		console.log('getting token here')
		fetch('https://unsplash.com/oauth/token', {
			method: 'POST',
			headers: {
				'Accept-Version': 'v1',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'client_id': accessKey,
				'client_secret': secretKey,
				'redirect_uri': 'http://localhost:3000',
				// 'code': this.getResponseCode(),
				'grant_type': 'authorization_code'
			})
		})
		.then(res => res.json())
		.then(res => {
			localStorage.setItem('state', JSON.stringify(res))
			return Object.assign({}, state, {
				key: res,
				logged: true
			})
		})
	}
	return state;
}
export default rootReducer;