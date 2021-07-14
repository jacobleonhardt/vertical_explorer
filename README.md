# Vertical Explorer
by Jacob Leonhardt | [Checkout Vertical Explorer](https://vertical-explorer.herokuapp.com/)

***

Veritcal Explorer is a rock-climbing tracker app that helps climbers keep track of how high they have climbed in total, as well as keep a log of their recent climbs and routes they frequently climb.

Climbers can access Vertical Explorer by visiting https://vertical-explorer.herokuapp.com/ If the climber is not logged in, or does not have an account, the splash page will render, prompting them to login or create an account. If the climber has an account and is logged in, the page will render the logged in user's profile.

Once logged in, climbers can create, update, and delete climbing routes, and climbs - which are a collection of routes. Once created, these climbs will be posted as a feed on the climber's profile.

To logout, climbers can simply click the Logout button, located in the dropdown menu.

***

## To-Dos:

Vertical Explorer still requires a lot of work. 
* Routes need to be properly configured so users can input them.
* Climbs need to be reconfigured to calculate the total height climbed based on the addition of all routes in a climb.
* User's total height climbed needs to be configured based off of the addition of all previous climbs.
* Routes Climbed checkbox on Climbed form has bugs - such as it cannot be updated after it has been initially submitted.
* Users should not be able to submit a climb without having any routes.
* Redux/state needs to be refined.
* Additional seeding data is needed for the Demo user.
* Styling needs to be refined.
