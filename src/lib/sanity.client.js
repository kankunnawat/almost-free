import { createClient } from 'next-sanity'

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: '2022-01-21',
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	reactStrictMode: true,
})
