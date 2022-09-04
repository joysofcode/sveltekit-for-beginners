import { error } from '@sveltejs/kit'

import { getTweet } from '$lib/utils/prisma'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const tweet = await getTweet(params)

	if (!tweet) {
		throw error(400, 'Could not load tweet')
	}

	return { tweet }
}
