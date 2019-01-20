import { SEARCH_PHOTO, GET_LOGIN_CODE, SILENT_LOGIN, DEBUG } from '../constants'
import { accessKey, secretKey } from '../../secrets'
import { createUrl} from '../utilities'	

const initialState = {
	logged: false,
	key: null,
};

function rootReducer(state = initialState, action) {

	if (action.type === SEARCH_PHOTO) {
		const url = createUrl('search/photos', {query: action.payload})

		fetch(url, {
			headers: {
				'Accept-Version': 'v1',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + state.key.access_token,
			}
		})
		.then(res => res.json())
		.then(res => console.log(res))
	}

	if (action.type === GET_LOGIN_CODE) {
		
		let redirectURI = 'https://unsplash.com/oauth/authorize?client_id=' + accessKey + '&redirect_uri=http://localhost:3000&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections'
		window.location = redirectURI
	}

	if (action.type === SILENT_LOGIN) {
		const storageState = localStorage.getItem('state')
		if (storageState) {
			return Object.assign({}, state, {
				key: JSON.parse(storageState)
			})
		} else {
			const url = new URL(window.location.href)
			const responseCode = url.searchParams.get('code')

			if (responseCode) {
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
						'code': responseCode,
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
		}
	}

	if (action.type === DEBUG) {
		console.log(state)
	}
	
	return state;
}
export default rootReducer;