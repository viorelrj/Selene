import './scss/main.scss'

import React from 'react'
import { connect } from 'react-redux'

import Login from './components/login'

const mapStateToProps = state => {
	return {
		test_value: state.test_value
	}
}

const ConnectedApp = ({ test_value }) => (
	<div>
		<Login/>
	</div>
)

const App = connect(mapStateToProps)(ConnectedApp)

export default App;

// class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			logged: false
// 		}
// 	}	

// 	saveStateInStorage() {
// 		localStorage.setItem('state', JSON.stringify(this.state))
// 	}

// 	componentDidUpdate () {
// 	}

// 	componentDidMount() {
// 		const state = localStorage.getItem('state')
// 		if (state) {
// 			this.setState(JSON.parse(state))
// 			return
// 		} else {
// 			if (this.getResponseCode()) {
// 				this.getToken.bind(this)()
// 			}
// 		}
// 	}

// 	unloggedRequest() {
// 		fetch('https://api.unsplash.com/photos/', {
// 			headers: {
// 				'Authorization': 'Client-ID ' + accessKey
// 			}
// 		})
// 		.then((res) => res.json())
// 	}

// 	redirect() {
// 		let redirectURI = 'https://unsplash.com/oauth/authorize?client_id='+ accessKey +'&redirect_uri=http://localhost:3000&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections'
// 		window.location = redirectURI
// 	}

// 	getResponseCode() {
// 		const url = new URL(window.location.href)
// 		return url.searchParams.get('code')
// 	}

// 	getToken() {
// 		if (!this.getResponseCode()) {
// 			return false;
// 		}

// 		console.log('Got the response code, getting the token')

// 		fetch('https://unsplash.com/oauth/token', {
// 			method: 'POST',
// 			headers: {
// 				'Accept-Version': 'v1',
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				'client_id': accessKey,
// 				'client_secret': secretKey,
// 				'redirect_uri': 'http://localhost:3000',
// 				'code': this.getResponseCode(),
// 				'grant_type': 'authorization_code'
// 			})
// 		})
// 		.then(res => res.json())
// 		.then(res => res.logged = true)
// 		.then(res => {
// 			this.setState(res)
// 			return localStorage.setItem('state', JSON.stringify(res))
// 		})
// 	}

// 	getUserInfo () {
// 		fetch('https://api.unsplash.com/me', {
// 			headers: {
// 				'Accept-Version': 'v1',
// 				'Content-Type': 'application/json',
// 				'Authorization': 'Bearer ' + this.state.access_token
// 			}
// 		})
// 		.then(res => res.json())
// 	}

// 	searchPhoto (query) {
// 		const url = createUrl('search/photos', {query: query})

// 		fetch(url, {
// 			headers: {
// 				'Accept-Version': 'v1',
// 				'Content-Type': 'application/json',
// 				'Authorization': 'Bearer ' + this.state.access_token,
// 			}
// 		})
// 		.then(res => res.json())
// 		.then(res => console.log(res))
// 	}

// 	render () {
// 		console.log(access_token)
// 		return (
// 			<div>
// 				<Card 
// 					title='Please Log in'
// 					content={
// 						<button onClick={this.redirect.bind(this)}>Login</button>
// 					}
// 				/>
// 			</div>
// 		)
// 	}
// }
