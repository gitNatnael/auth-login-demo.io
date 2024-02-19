// AuthService.js

import { UserManager } from 'oidc-client'

class AuthService {
  constructor() {
    this.userManager = new UserManager({
      authority: 'https://dev-y41onbvbhxgt227i.eu.auth0.com',
      client_id: 'zaY81M2g12CMj3WNCeEDxGkVJDLq5n1t',
      redirect_uri: 'http://localhost:7070/callback',
      post_logout_redirect_uri: 'http://localhost:7070',
      response_type: 'code',
      scope: 'openid profile' 
      // client_secret: '7Hp9mVQOf51ig1j2g6teYZ4bDqPSpP4Gx9-XqUajQKPbPnCcCd5WumXZ0COUSO69'
    })
  }

  async login() {
    try {
      await this.userManager.signinRedirect()
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  async logout() {
    try {
      await this.userManager.signoutRedirect()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  async getUser() {
    try {
      const user = await this.userManager.getUser()
      return user
    } catch (error) {
      console.error('Get user error:', error)
      return null
    }
  }

  async handleRedirectCallback() {
    try {
      const user = await this.userManager.signinRedirectCallback()
      return user
    } catch (error) {
      console.error('Redirect callback error:', error)
      return null
    }
  }
}

export default new AuthService()
