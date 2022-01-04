React project with Firebase Authentication

This is a cooperative project with others. Following are the details I did.


# Features

## Firebase Authentication
A Login / Register page that required user to login to use ther further features.
* Password authentication
* Warning message
    * showed the warning if the email type is wrong
    * showed the waring if the passward less than 6 words
* Login page
    * connected with Firebase to ensure the user data is in the database.
    * authentication the user email and password are correct. 

## Pexel API
A page for searching any pictures in Pexels.com's API.
* Loaded 12 pictures in a time.
* Clicked Load more button to get more pictures.
* Each picture shows the photo's arthur and the link of the photo.
* You can downloaded the photo in the new browser after you clicked the Download.
---
## Google Map API
A lot of useStates and useEffects in this Google Map page.
* Default IP adress is my location.
* It shows all the banks and ATM in the radious of 1.5km near me.
* move the screen freedomly to see the banks location in the other places.
*  Hybrid button to see the diffrent map types, there are road map and satellite version.
*  Autocomplete searching.
   * Debounce feature to prevent showing result continuously.
   * shows the most relevent results by the words that user types
   * clicked the target will automatically move the map center to the target places and show the banks near the place.

