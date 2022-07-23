import type { RequestHandler } from '@sveltejs/kit'

import { likeTweet } from '$root/utils/prisma'

export const POST: RequestHandler = async ({ request }) => {
	await likeTweet(request)

	return {
		status: 303,
		headers: {
			location: '/home',
		},
	}
}
