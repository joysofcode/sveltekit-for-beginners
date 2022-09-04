import { error } from '@sveltejs/kit'
import type { Action, PageServerLoad } from './$types'

import {
	createTweet,
	getTweets,
	removeTweet,
} from '$lib/utils/prisma'

export const load: PageServerLoad = async () => {
	const tweets = await getTweets()

	if (!tweets) {
		throw error(400, 'No Tweets Found')
	}

	return { tweets }
}

export const POST: Action = async ({ request }) => {
	await createTweet(request)
}

export const DELETE: Action = async ({ request }) => {
	await removeTweet(request)
	return { location: '/home' }
}
