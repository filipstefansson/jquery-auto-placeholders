# jQuery Auto Placeholders <1kb

This simple jQuery plugin adds support for the HTML5 placeholder attribute on older browsers.

It automatically checks the browser compability, and if it doesn't support placeholders this plugin will mimic the exact behaivior.

## Usage
Import jquery.auto-placeholders.js

```<script type="text/javascript" src="min/jquery.auto-placeholders.js"></script>```

If you want the placeholder to look like a real placeholder you should also add this CSS:

```css
.placeholder {
	color: darkGrey;
}
```

And then you can use this on any HTML element:

```javascript
$("#example_form").autoPlaceholders()
```

## Dependencies

* Tested against jQuery 1.7.1
* Will use Modernizr if detected, but doesn't depend on it.