# Native checkbox and cutom checkbox 
The foloowing project represent two checkbox interaction with each other

## Technical Details
The project is using native HTML/CSS/JS code. There is no library additional to achieve custom styling.

* Please keep in mind if you want to style the checkbox , you need to disable its apperance and keep in your mind that IE is not anymore supported for this feature.
You can know more about [appreance: none](https://caniuse.com/?search=appearance%3A%20none)

* If you want custom checkbox style, we need to think about every single attribute which was assigned to the checkbox as native element. This mean (border, width, color, size, content...)

## Good to know
The approach for working with javascript in this project was incapsulated inside JS only. This mean we opt for single source of truth of JS rather than mixed code. All the logic of interaction would be inside the JS file, there will be no callback associated to Tag attribute.
Only the reference of the JS file import and the id of element as JS selector.

## Project structure
In this project your will find 3 main folder:

1- The html folder: contains all the code logic to create static page with checkbox.
2- The css folder: contains all the styling and designs for the checkbox.
3- The js folder: contains the javascipt logic to make the page dynamic.