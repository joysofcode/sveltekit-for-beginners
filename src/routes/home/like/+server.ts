import { likeTweet } from '$lib/utils/prisma'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
	await likeTweet(request)

	return new Response(undefined, {
		headers: {
			location: '/home',
		},
	})
}
