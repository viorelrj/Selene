import './scss/main.scss'

import React, { Component } from 'react'
import {accessKey, secretKey} from './secrets.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			accessToken: '',
			refreshToken: '',
			tokenType: ''
		}
		this.oAuth = this.oAuth.bind(this)
	}

	saveStateInStorage() {
		localStorage.setItem('state', JSON.stringify(this.state))
	}

	componentDidUpdate () {
	}

	componentDidMount() {
		if (this.getResponseCode()) {
			window.location = 'http://localhost:3000'
		}

		const state = localStorage.getItem('state')
		if (state) {
			this.setState(JSON.parse(state))
		}
	}

	unloggedRequest() {
		fetch('https://api.unsplash.com/photos/', {
			headers: {
				'Authorization': 'Client-ID ' + accessKey
			}
		})
		.then((res) => res.json())
	}

	redirect() {
		let redirectURI = 'https://unsplash.com/oauth/authorize?client_id='+ accessKey +'&redirect_uri=http://localhost:3000&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections'
		window.location = redirectURI
	}

	getResponseCode() {
		const url = new URL(window.location.href)
		return url.searchParams.get('code')
	}

	getToken() {
		if (this.getResponseCode()) {
			return false;
		}

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
				'code': this.getResponseCode(),
				'grant_type': 'authorization_code'
			})
		})
		.then(res => res.json())
		.then(res => res)
		.then(res => localStorage.setItem('state', JSON.stringify(res)))
	}

	debug () {
		console.log(this.state)
		console.log(JSON.parse(localStorage.getItem('state')))
	}

	render () {
		return (
			<div>
				<button onClick={this.redirect.bind(this)}>Log in</button>
				<button onClick={this.debug.bind(this)}>Debug</button>
			</div>
		)
	}
}

export default App;
