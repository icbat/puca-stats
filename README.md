# puca-tools
[![Build Status](https://travis-ci.org/icbat/puca-tools.svg?branch=master)](https://travis-ci.org/icbat/puca-tools)

A collection of tools I've built for my own Puca use.

## puca-addresses

This is a tool I use to build a CSV to Mail Merge in to label software to easily print a bunch of addresses.

#### How to use it

Make a new bookmark and paste this into the url:

```
javascript:(function () {
$('<script>').attr('src', 'https://icbat.github.io/puca-tools/puca-addresses.js?'+(new Date()).getTime()).appendTo('head');
module_addresses.init();
})()
```

When you are on the sending page, click the bookmark.

## puca-stats

This will ideally be a way to export historical data from pucatrade for visualization somewhere else.
