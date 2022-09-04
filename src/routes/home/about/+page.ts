import { dev } from '$app/environment'

// load JavaScript in development for hot module replacement
export const csr = dev

// prerender static page in production
export const prerender = true
