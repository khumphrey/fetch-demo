Go over what exists 
	- show network tab 
	- cache disabled vs not (200 vs 304)
	- click on link and see `GET /babes` as rendering a NEW page

Now do it with window.fetch 
	- log the info from the backend (body is a stream)
	- talk about `.json()` being a promise
	- log again and expand (show timing with a shift)
	- show `JSON.stringify()`
	- show network tab show XHR request (preview response, etc)

Error handling (`.catch`)
	- talk about chrome not needing to bind `console.error`, but not all browsers/versions are like this
	

It always shows up
	- Make sure you created the button and ul
	- grab button and make `addEventListener`

For each babe in the `babeArrFromBackend` 
	- create new `li` node, fill it in, append to `ul`
	- add `img` and append to `li` 
	- what happens if we keep clicking the button

Script AFTER the DOM elements exist!
	- Show it before and after

Timing
	- do NOT append to DOM until you hear back from server
		- This is *more* important for Trip Planner 3
		- do NOT append a day icon if there isn't a new day in the DB
	- Based on checkpoints, I always notice you send a response before confirming that it has successfully happened in the db
		-	As soon as you type 'update' you also send response without waiting to make sure there were no errors with updating an item in the database

POST
	- make input fields
	- similar approach to getElementById

Make separate file
	- How else do we know how to include scripts into our HTML?