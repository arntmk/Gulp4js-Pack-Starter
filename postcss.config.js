// Plugins

// https://www.postcss.parts/
// https://www.npmjs.com/search?q=keywords%3Apostcss-plugin
/* ____________________________________________ */
import pxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import gcmq from 'group-css-media-queries';
import mergerules from 'postcss-merge-rules';
import mergelonghand from 'postcss-merge-longhand';
import mergeidents from 'postcss-merge-idents';
import purgecss from '@fullhuman/postcss-purgecss';

/* ____________________________________________ */
const srcFolder = './src';
const postcssConfig = [
	gcmq(),
	mergerules(),
	mergelonghand(),
	mergeidents(),
	autoprefixer({ cascade: false, grid: true }),
	pxtorem({ rootValue: 16, propWhiteList: ['*'] }),
	purgecss({
		content: [`${srcFolder}/**/*.{html,twig,js}`],
		skippedContentGlobs: ['node_modules/**', 'bower_components/**'],
		safelist: [':where', ':is', ':has', 'hidden', 'active', 'open', 'lock-fixed', 'lock'],
		keyframes: true,
		variables: false,
		fontFace: false,
	}),
];

export default postcssConfig;