/*
 * app configurations
 * Array[app]
 * app:string | key:value pair
 * string `app` means directory and there is entry direct in it.
 * A key:value pair `app` may have `title`: string, optional, 'dir': string, entry: string | key:value pair | Array[string] 'plugins': array, optional
 */
module.exports = [{
	title: 'JavaScript Gallery',
	module: 'javascript_gallery',
	path: './javascript-gallery/'
},{
	title: 'Improved Gallery',
	module: 'improved_gallery',
    path: './improved-gallery/'
},{
	title: 'New Gallery',
	module: 'new_gallery',
	path: './dynamic-markup/new-gallery/'
},{
	title: 'Second Improved Gallery',
	module: 'second_improved_gallery',
	path: './dynamic-markup/second-improved-gallery/'
},{
	title: 'Fullfill Doc',
	module: 'fullfill_doc',
	path: './fullfill-doc/'
}, {
	title: 'CSS DOM',
	module: 'css_dom',
	path: './css-dom'
},{
	title: 'Set styles muti times',
	module: 'set_styles_muti_times',
	path: './css-dom/set-styles-multics'
},{
	title: 'Move message',
	module: 'move_message',
	path: './javascript-animation/move-message'
},{
	title: 'Move element',
	module: 'move_element',
	path: './javascript-animation/move-element'
},{
	title: 'Useful animation',
	module: 'useful_animation',
	path: './javascript-animation/useful-animation'
}];