# Effect.less - CSS3 Animation Library


### ABOUT

Effect.less is a cross-browser CSS3 animation library with predefined animation sequences that I use in my web projects. I would like to thank to [Daniel Eden] (https://github.com/daneden/animate.css) and [Christian Pucci] (https://github.com/miniMAC/magic) for their awesome libraries!

- [See the demo](http://avirtum.com/demo/effectless)


### Basic usage

1. Include the stylesheet on your document's `<head>` section.

	```html
<head>
	<link rel="stylesheet" href="effect.min.css">
</head>
```

2. Add the animation class to the element you want to animate via javascript.

	```javascript
$("#button").addClass("fx-bounce");
```

3. You have a list of over 100 animation classes, [see the demo](http://avirtum.com/demo/effectless).


### Using with Less

The `effect.less` is modular and each effect aka animation can be loaded separately. Activate only animations that are used. It is recommend not to add all.


### LICENSE

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)