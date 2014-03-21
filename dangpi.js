function NgPart(component) {
  var module = angular.module(component.module);

  angular.forEach(['controller', 'service', 'factory', 'directive'], createPart(module, component));

  function createPart(module, component) {
    return function(type) {
      if(component[type]) module[type](component.name, component.dependencies.concat([component[type]]));
    }
  }
}


if(exports) exports.NgPart = NgPart;