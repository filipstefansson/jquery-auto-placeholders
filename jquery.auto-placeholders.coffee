###
jQuery Auto Placeholders
(c) 2012 Filip Stefansson, @filipstefansson
Adds support for the placeholder attribute in older browsers.
###

# IMPORTANT: This file should not be inlcuded. Check the /min/-folder
# for jquery.auto-placeholders.js. This is a CoffeeScript file.
# Visit http://coffescript.org for more information.

$ = jQuery

$.fn.autoPlaceholders = ->

	# Check if browser supports HTML5 placehoders.
	# If user has Modernizr, use that.
	placehodersSupported = false

	if Modernizr?
		placehodersSupported = if Modernizr.input.placeholder then true else false
	else
		input = document.createElement "input"

		if "placeholder" of input
			placehodersSupported = true;

	# If placeholders are supported, we don't have do to anything!
	if !placehodersSupported

		# Find all inputs and textareas in the selected element.
		$("input, textarea", this).each ->

			# Get their placeholder value(if they have any) and add it as value.
			# Also add a CSS-class for blurred inputs to mimic the placeholder look.
			if $(this).attr("placeholder")?
				placeholder = $(this).attr "placeholder"

				$(this).val(placeholder).addClass "placeholder"

				# Bind focus event, so when user clicks the input the value disapears,
				# if it's the same as placeholder.
				$(this).bind "focus", ->
					if $(this).hasClass("placeholder")
						$(this).val("").removeClass "placeholder"


				# Bind blur event, so when user exit the input the value resets if
				# the input is empty.
				$(this).bind "blur", ->
					if $(this).val() is ""
						$(this).val(placeholder).addClass "placeholder"

		# Don't submit placeholders
		$("form").submit ->
			$(this).find(":input.placeholder").each ->
				$(this).val("")

	# That's all!