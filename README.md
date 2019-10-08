React-Native Monorepo: SimpleRouting
=================
"SimpleRouting" is sample code of routing and navigation for web or app platforms.

This is upgrade work to [another monorepo](https://github.com/og-pr/public_ticket.520). The repos are examples for how to share code between different platforms (Web, Android, & iOS). They can be used as a template or starter-kit for React-Native & React-Native-Web. The key to code sharing is React-Native's [Platform-specific extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions). The extensions are ```.native.js``` , ```.ios.js``` or ```.android.js``` and when used, the relevant platform file is compiled.

The main benefit of any monorepo is to share application logic. Another benefit is the rendering of individual components unique to each platform. Development is mobile-first AND then webapp.

Installation
============

* Get the repo
* From root directory, do ```yarn```
* Change root/android/local.properties as needed 
* From root/ios directory, do ```pod install``` (if needed)


**Required:** React-Native working per [Getting Started](https://facebook.github.io/react-native/docs/getting-started). If using React-Native ^0.60 , 
make sure    
you review the [blog post](https://facebook.github.io/react-native/blog/2019/07/03/version-60) & use the [upgrade guide](https://react-native-community.github.io/upgrade-helper/?from=0.59.8&to=0.60.4). As notes in those links, update these files
* Change root/android/build.gradle as needed 
* Change root/android/app/build.gradle as needed 
* Change root/android/gradle.properties as needed
* etc

Run
===

For each platform, from the root directory, do

### Web
* ```node_modules/.bin/webpack -p --progress```
* ```node_modules/.bin/webpack-dev-server --content-base public/ --config ./webpack.config.js --port 3001 --inline --hot --colors```
* Manually open a browser to localhost:3001 to see webapp 
* Inspect browser window = open console to see shared code working on button click

### Android
* ```react-native run-android -- --clear-cache```

### iOS
* ```react-native run-ios``` or open ```ios/SimpleRouting.xcodeproj``` with Xcode

Screenshots & Animated GIFs
===========
![Screenshot - all](https://github.com/og-pr/public_ticket.524/blob/master/SimpleRouting/_docs/monorepo_all.png)
![Animated GIF - iOS](https://github.com/og-pr/public_ticket.524/blob/master/SimpleRouting/_docs/ezgif-720_ios_c.gif)
![Animated GIF - Andoid](https://github.com/og-pr/public_ticket.524/blob/master/SimpleRouting/_docs/ezgif-720_android_c.gif)


Notes - Development 
===========
* [React Router](https://github.com/ReactTraining/react-router) aka 1 package is used as navigational components 
* Error handling for missing routes, aka 404 pages, left as exercise to repo user. You can use this [guide](https://tylermcginnis.com/react-router-handling-404-pages/), if stuck.

Notes - Miscellaneous 
=====
* To make code simple, Redux is omitted. No [state](https://facebook.github.io/react-native/docs/state) is needed.
* Lerna or Yarn Workspaces is not used ; there is only 1 ```node_modules``` folder.

Inspiration
===========
* [Simple CRNA Routing](https://github.com/edupooch/simple-crna-routing)
* [React-router for navigation](https://micropyramid.com/blog/react-router-for-navigation/)
* [React Router](https://github.com/ReactTraining/react-router) (mainly used as API reference)
* [The Future of React Router and @reach/router](https://reacttraining.com/blog/reach-react-router-future/)
* [React Navigation vs React Native Navigation: Which is right for you?](https://blog.logrocket.com/react-navigation-vs-react-native-navigation-which-is-right-for-you-3d47c1cd1d63/)
