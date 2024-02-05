# Native checkbox and cutom checkbox 
The following project represents two checkbox interactions with each other. The project represents how you can edit the apparence of the native checkbox input and how you can modify the interaction of it with javascript when ```onchange event is triggered```

## Technical Details
The project is using native HTML/CSS/JS code. There is no library additional to achieve custom styling.

* Please keep in mind if you want to style the checkbox , you need to disable its appearance and keep in your mind that IE is not anymore supported for this feature. You can know more about[appreance: none](https://caniuse.com/?search=appearance%3A%20none)

* If you want a custom checkbox style, we need to think about every single attribute that was assigned to the checkbox as a native element. This means (border, width, color, size, content...)

## Good to know
The approach for working with Javascript in this project was encapsulated inside JS only. This means we opt for a single source of truth of JS rather than mixed code. All the logic of interaction would be inside the JS file, there will be no callback associated with the Tag attribute.
Only the reference of the JS file import and the id of the element as JS selector.

## Project structure
In this project, you will find 3 main folders:

1- The HTML folder: contains all the code logic to create a static page with the checkbox.

2- The CSS folder: contains all the styling and designs for the checkbox.

3- The js folder: contains the Javascript logic to make the page dynamic.