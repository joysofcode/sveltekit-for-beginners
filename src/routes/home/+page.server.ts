import { error, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

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

export const actions: Actions = {
	createTweet: async ({ request }) => {
		await createTweet(request)
	},
	deleteTweet: async ({ request }) => {
		await removeTweet(request)
		return { location: '/home' }
	},
}
