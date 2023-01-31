const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([optimizedImages], {
	target: 'serverless',
	images: {
		disableStaticImages: true,
	},
	env: {
		BASE_URL: process.env.BASE_URL,
	},
})
