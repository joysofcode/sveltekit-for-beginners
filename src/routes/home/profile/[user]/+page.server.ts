import { error } from '@sveltejs/kit'
import { getUserProfile } from '$lib/utils/prisma'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const { profile, tweets } = await getUserProfile(params)

	if (!profile || !tweets) {
		throw error(400, 'Could not get data')
	}

	return { profile, tweets }
}
