import type { RequestHandler } from '@sveltejs/kit'
import { getUserProfile } from '$root/utils/prisma'

export const GET: RequestHandler = async ({ params }) => {
	const { profile, tweets } = await getUserProfile(params)

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { profile, tweets },
	}
}
