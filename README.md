# routing-example

IF user visits / or /home
THEN show the homepage

IF user submits the login form on /login with username "uncinc" and password "letmein"
THEN set user as logged in and redirect to /dashboard
ELSE show a message that the credentials are invalid

IF user is logged in
THEN show the dashboard on /dashboard
ELSE redirect to /login

IF user visits /dashboard from /home
THEN show the dashboard

IF user tries to access a page they don't have access to
THEN redirect to /login with the original page as a query parameter

IF user submits login form with valid credentials
THEN redirect to the original page requested before login

IF user logs out
THEN set user as logged out and redirect to /login

IF user is logged in and leaves the site
THEN remember the session and allow the user to access the dashboard without having to log in again



ioannis dimitriou
The above can be a flowchart as well ,right?
Yes, the above pseudocode can be translated into a flowchart diagram. Flowcharts are a graphical representation of a process, and can be a helpful tool to visualize the steps involved in a system.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
