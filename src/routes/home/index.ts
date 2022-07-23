import type { RequestHandler } from '@sveltejs/kit'

import {
	createTweet,
	getTweets,
	removeTweet,
} from '$root/utils/prisma'

export const GET: RequestHandler = async () => {
	const tweets = await getTweets()

	if (!tweets) {
		return { status: 400 }
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { tweets },
	}
}

export const POST: RequestHandler = async ({ request }) => {
	await createTweet(request)

	return {}
}

export const DELETE: RequestHandler = async ({
	request,
}) => {
	await removeTweet(request)

	return {
		status: 303,
		headers: { location: '/home' },
	}
}
