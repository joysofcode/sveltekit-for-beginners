import prisma from '$root/lib/prisma'
import { timePosted } from '$root/utils/date'

export async function getTweets() {
	const tweets = await prisma.tweet.findMany({
		include: { user: true },
		orderBy: { posted: 'desc' },
	})

	const likedTweets = await getLikedTweets()

	return tweets.map((tweet) => {
		return {
			id: tweet.id,
			content: tweet.content,
			likes: tweet.likes,
			posted: timePosted(tweet.posted),
			url: tweet.url,
			avatar: tweet.user.avatar,
			handle: tweet.user.handle,
			name: tweet.user.name,
			liked: likedTweets.includes(tweet.id),
		}
	})
}

export async function getTweet(
	params: Record<string, string>
) {
	const tweet = await prisma.tweet.findFirst({
		where: { url: params.tweetId },
		include: { user: true },
	})

	const likedTweets = await getLikedTweets()

	return {
		id: tweet.id,
		content: tweet.content,
		likes: tweet.likes,
		posted: timePosted(tweet.posted),
		url: tweet.url,
		avatar: tweet.user.avatar,
		handle: tweet.user.handle,
		name: tweet.user.name,
		liked: likedTweets.includes(tweet.id),
	}
}

export async function getLikedTweets() {
	const liked = await prisma.liked.findMany({
		where: { userId: 1 },
		select: { tweetId: true },
	})

	const likedTweets = Object.keys(liked).map(
		(key) => liked[key].tweetId
	)

	return likedTweets
}

export async function createTweet(request: Request) {
	const form = await request.formData()
	const tweet = String(form.get('tweet'))

	if (tweet.length > 140) {
		return {
			status: 400,
			body: 'Maximum Tweet length exceeded.',
			headers: { location: '/home' },
		}
	}

	// you can get the user from the session
	await prisma.tweet.create({
		data: {
			posted: new Date(),
			url: Math.random().toString(16).slice(2),
			content: tweet,
			likes: 0,
			user: { connect: { id: 1 } },
		},
	})
}

export async function removeTweet(request: Request) {
	const form = await request.formData()
	const tweetId = +form.get('id')
	await prisma.tweet.delete({ where: { id: tweetId } })
}

export async function likeTweet(request: Request) {
	const form = await request.formData()
	const id = +form.get('id')

	// verify if tweet is already liked
	const liked = await prisma.liked.count({
		where: { tweetId: id },
	})

	if (liked === 1) {
		// if tweet is already liked unlike it
		await prisma.liked.delete({ where: { tweetId: id } })

		// update the likes count
		const count = await prisma.tweet.findUnique({
			where: { id },
			select: { likes: true },
		})

		await prisma.tweet.update({
			where: { id },
			data: { likes: (count.likes -= 1) },
		})

		return {
			status: 303,
			headers: {
				location: '/home',
			},
		}
	}

	// add liked record
	await prisma.liked.create({
		data: {
			tweetId: id,
			user: { connect: { id: 1 } },
		},
	})

	// get the current like count and update it
	const count = await prisma.tweet.findUnique({
		where: { id },
		select: { likes: true },
	})

	await prisma.tweet.update({
		where: { id },
		data: { likes: (count.likes += 1) },
	})
}

export async function getUserProfile(
	params: Record<string, string>
) {
	const profile = await prisma.user.findFirst({
		where: { name: params.user },
	})

	const tweets = await prisma.tweet.findMany({
		where: { user: { id: 1 } },
		include: { user: true },
		orderBy: { posted: 'desc' },
	})

	const likedTweets = await getLikedTweets()

	if (!profile || !tweets || tweets.length === 0) {
		return { status: 404 }
	}

	const userTweets = tweets.map((tweet) => {
		return {
			id: tweet.id,
			content: tweet.content,
			likes: tweet.likes,
			posted: timePosted(tweet.posted),
			url: tweet.url,
			avatar: tweet.user.avatar,
			handle: tweet.user.handle,
			name: tweet.user.name,
			liked: likedTweets.includes(tweet.id),
		}
	})

	return { profile, tweets: userTweets }
}
