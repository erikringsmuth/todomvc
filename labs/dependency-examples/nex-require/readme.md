# {nex.js} & RequireJS TodoMVC Example

> Unleashing the power of AMD for web applications.

> _[{nex.js} - erikringsmuth.github.io/nex-js](http://erikringsmuth.github.io/nex-js/)_

## Why Nex
First, [why AMD](http://requirejs.org/docs/whyamd.html). AMD is the future of Javascript dependency injection. [require.js](http://requirejs.org/) is the only script tag you need to include. The rest of your scripts are injected using AMD. No more globals!

The router comes next. Other frameworks load all of your app's Javascript up front. You can optimize your site by compiling it down to one file but that still doesn't solve the problem. The [RequireJS Router](https://github.com/erikringsmuth/requirejs-router) lazy loads your modules as you navigate to each page. You're site could contain 10mb of Javascript and HTML templates and it would only load the 10kb needed for the current page.

Last, nex-js views. Other frameworks render the layout (header, footer, etc.) then use the router to load the content. With nex-js the router loads your view and your view injects the layout. You attach your `view.outerEl` to the document with everything rendered.

The combination of AMD, a lazy loading router, and layout views gives you an awesome framework to build your application. This is the next step in web application design.

## Implementation
The small size of this TodoMVC app can only start to show the power of the router, views, and layout views.

The app is structured so that each feature gets it's own folder. A full site would look like this ([nex.js example](http://erikringsmuth.github.io/nex-js/#/examples)). This Todo app only has the `todo` folder under the `js` directory.

## Running

- Clone todomvc
- Change to the nex-require directory `/todomvc/labs/dependency-examples/nex-require`
- Run `bower install` to get dependencies
- Run a static content server with `/todomvc/labs/dependency-examples/nex-require` as the root

## Tests
Run `http://localhost:port/tests/AmdSpecRunner.html`. The tests are written using [Jasmine](http://jasmine.github.io/) and [Squire.js](https://github.com/iammerrick/Squire.js/).

## Credit
This TodoMVC application was created by [Erik Ringsmuth](http://github.com/erikringsmuth).
