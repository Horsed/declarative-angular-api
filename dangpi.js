function NgPart(component) {
  var module = angular.module(component.module);

  if     (component.controller) createPart(module, component, 'controller');
  else if(component.service)    createPart(module, component, 'service');
  else if(component.factory)    createPart(module, component, 'factory');
}

function createPart(module, component, type) {
  module[type](component.name, component.dependencies.concat([component[type]]));
}

if(exports) exports.NgPart = NgPart;