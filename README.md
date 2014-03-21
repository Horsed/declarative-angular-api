declarative-angular-api [![Build Status](https://secure.travis-ci.org/Horsed/declarative-angular-api.png)](http://travis-ci.org/Horsed/declarative-angular-api)
=======================

More declarative AngularJS Providers, Factories, Services, Controllers, Directives, Filters

Turn this:

```js
angular.module('myModule').service('myService', ['$http', function ($http) {
  // service stuff
}]);
```

into this:

```js
NgPart({

  module: 'myModule',

  name: 'myService',

  dependencies: ['$http'],

  service: function($http) {
    // service stuff
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
NgPart({
  module: 'myModule',
  name: 'myFactory',
  dependencies: ['$http'],
  factory: function($http) {
    // factory stuff
  }
});
```

### Service

```js
NgPart({
  module: 'myModule',
  name: 'myService',
  dependencies: ['$http'],
  service: function($http) {
    // service stuff
  }
});
```

### Controller

```js
NgPart({
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
NgPart({
  module: 'myModule',
  name: 'myDirective',
  dependencies: ['$scope', '$routeParams'],  
  directive: function($scope, $routeParams) {
    // directive stuff
  }
});
```

### Filter

```js
TBD
```