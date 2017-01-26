# Growth-Academy
### Growth Academy is an early learning activity app geared towards children 6 and under. Main focus is education through repetition.
### Currently two grade levels (Pre-k & Kindergarten) with three activities each, including a book section.
* App Link: https://growthacademy.herokuapp.com/

![image](public/images/readMe-screenshot.png)

## Technologies
HTML, CSS, javascript, jQuery 3.1.1 CDN, Boostrap 3.3.7 CDN, Angularjs 1.5.6 CDN, Heroku

## Most Challenging Aspect
* During this project I learned how difficult it is to dynamically create html elements that have an ng-click function that takes arguments. The only way to really do this is to use Angularjs's $compile feature. One of the more challenging things to set up.
* My work around was to change the way I was handling my algorithm in a way that does not take arguments as part of the function as well as hard coded the html elements in the view and hide them with <style="visibility:hidden"> toggling visibility on and off as needed.

## Known Issues (bugs)
* Formatting not great on phone in portrait view
* Performance is a bit slow while changing pages in the book section
* Counting button background on the activity select screen not appearing in Safari

## Thinking Ahead
* Better, more consistently themed activity piece images
* User login to track child statistics as well as identify which activities are used the most in order to optimize
* Audio reading of the books so that the child user does not need a parent near by
* Audio of each instructions & questions
* Multiply the amount of items we can present to the User
* Picture Puzzles
* First Grade content

## Resources
* Stackoverflow - http://stackoverflow.com/
* Mozilla Developer Network - https://developer.mozilla.org
* jQuery API - http://api.jquery.com/
* Google Fonts - https://fonts.google.com/
* Angularjs - https://angularjs.org/
* Heroku - https://dashboard.heroku.com/

## Credits
* I Love You Stinky Face - http://www.lisamccourt.com/
