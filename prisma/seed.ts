import PrismaClientPkg from '@prisma/client'

// Prisma doesn't support ES Modules so we have to do this
const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()

export function randomUrl(): string {
	return Math.random().toString(16).slice(2)
}

// gets random time starting from now and
// going back one day whenever you seed the
// database in the future
export function randomDate(): string {
	// this is set to one day
	const offset = 60 * 60 * 24 * 1000

	const current = new Date().getTime()
	const random = Math.random() * offset
	const difference = new Date(current - random)

	return difference.toISOString()
}

function getUsers() {
	return [
		{
			name: 'matia',
			handle: '@joyofcodedev',
			email: 'matia@example.test',
			avatar: '/profile/matia/avatar.webp',
			about: 'Likes long walks on the beach. 😘',
			tweets: {
				create: [
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `SvelteKit is lit. 🔥`,
						likes: 10,
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `I love Svelte! ❤️`,
						likes: 24,
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `Sometimes when I'm writing JavaScript I want to throw up my hands and say "this is crazy!" but I can't remember what "this" refers to. 🤪`,
						likes: 0,
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `How do you comfort a JavaScript bug? You console it. 🤭`,
						likes: 0,
					},
				],
			},
		},
		{
			name: 'bob',
			handle: '@bobross',
			email: 'bob@example.test',
			avatar: '/profile/bob/avatar.webp',
			about: 'Likes painting.',
			tweets: {
				create: [
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `Use your imagination. Wind it up, blend it together. The joy of painting really is universal.`,
						likes: 1,
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `The only thing I have control over is taking out the trash. 😂`,
						likes: 4,
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content:
							'Painting is as individual as people are. 👩‍🎨',
						likes: 0,
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content:
							'All we do is just sorta have an idea in our mind, and we just sorta let it happen. 🌈',
						likes: 10,
					},
				],
			},
		},
	]
}

async function seed() {
	const users = getUsers()

	for (const user of users) {
		await prisma.user.create({ data: user })
	}
}

seed()
