# hueist

> Track your mood, in full color

## Demo Credentials

**username:** demo@demo.com

**password:** demo

# Links
* [Deployed client-side app](https://hueist.herokuapp.com)
* [Back-end repo](https://github.com/xiangcatherine/hueist-backend)
* [Deployed backend](https://hueist-backend.herokuapp.com) 

# App overview
![Hueist](http://i.imgur.com/GFlHvlE.jpg)

# Technologies used:
> HTML, CSS, JavaScript, and Vuejs (Ruby on Rails for back-end)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# General approach:
> I presented on Vuejs, and while doing the tutorials found it to be a very intuitive framework. I wanted to learn more about it — so I took the plunge and decided to use it for this capstone project.

> I've also thought that when it comes to moods, they're often hard to describe through words, and even harder to put on a scale of 1 to 10, which a lot of mood tracker apps do. So I decided to build an app that tracks your mood in color. Overtime, you build up a mood palette. 

# User stories:
* As a user, I can perform standard user actions such as log in and change my password.
* As a user, I can choose a hue to represent my current mood.
* As a user, I can view a palette that represents my mood over time.
* As a user, I can change the greeting message that I see everytime I log in.
* As a user, I can clear my mood history.

> Next user story goal: As a user, I can view my mood trends over time (e.g., ‘On Mondays there are more blues than other days’ or ‘at 11pm you tend to feel like lilac')

# Wireframes: 

![Wireframes](http://i.imgur.com/kXaOK2B.jpg)

# Unsolved problems
> After getting user mood history, sort it in interesting ways (e.g. 'You seem to choose blue a LOT on Mondays.')

# Major hurdles
* First off, although I did study Vuejs a bit for the presentation, it took a bit to get used to. Figuring out how to configure and build authentication with Vuejs took a lot of exploring and documentation-reading.
* Vuejs has awesome data-passing abilities amongst components, but learning how the data flows and how to actually write it was a big hurdle and really was the bulk of work and studying I had to do. I learned a lot about promises! 
