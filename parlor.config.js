const env = require('./config/latest');

module.exports = {
	projectId: 26,
	username: env.username,
	password: env.password,
	typoSettingsFilename: '_usage.scss',
	typoEmbedFilename: '_embed.scss',
	colorFilename: '_custom-colors.scss',
	gridFilename: '_grid.scss',
	fonts: 'assets/scss/fonts',
	images: 'static/images',
	colors: 'assets/sccs/color',
	grid: 'assets/grid',
	typoFolder: 'assets/scss/typography'
};
