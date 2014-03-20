declarative-angular-api
=======================

More declarative AngularJS Providers, Factories, Services, Controllers and Directives

Turn this:

```js
angular.module('myModule')

.service('myService',

['$http',

function ($http) {
  return {
    // service stuff
  }
}]);
```

into this:

```js
NgService({

  module: 'myModule',

  name: 'myService',

  dependencies: ['$http'],

  service: function($http) {
    return {
      // service stuff
    };
  }
});
```

## Installation

> via [bower](http://bower.io/):

    $ bower install declarative-angular-api --save

> manually

    $ git clone git@github.com:Horsed/declarative-angular-api.git

Copy ```./declarative-angular-api/dangpi.js``` to wherever your JavaScript libraries reside and put it in your ```index.html```.

## Usage

### Provider

```js
TBD
```

### Factory

```js
TBD
```

### Service

```js
NgService({
  module: 'myModule',
  name: 'myService',
  dependencies: ['$http'],
  service: function($http) {
    return {
      // service stuff
    };
  }
});
```

### Controller

```js
NgController({
  module: 'myModule',
  name: 'myCtrl',
  dependencies: ['$scope', '$routeParams'],  
  controller: function($scope, $routeParams) {
    // ctrl stuff
  }
});
```

### Directive

```js
TBD
```