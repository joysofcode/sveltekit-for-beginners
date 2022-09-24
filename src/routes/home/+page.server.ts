import { error } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

import {
	createTweet,
	getTweets,
	removeTweet,
	likeTweet,
} from '$lib/utils/prisma'

export const load: PageServerLoad = async () => {
	const tweets = await getTweets()

	if (!tweets) {
		throw error(400, 'No Tweets Found')
	}

	return { tweets }
}

export const actions: Actions = {
	createTweet: async ({ request }) => {
		await createTweet(request)
	},
	deleteTweet: async ({ request }) => {
		await removeTweet(request)
	},
	likeTweet: async ({ request }) => {
		await likeTweet(request)
	},
}
