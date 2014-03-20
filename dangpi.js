function NgController(controller) {
  angular.module(controller.module).controller(controller.name, controller.dependencies.concat([controller.controller]));
}

function NgService(service) {
  angular.module(service.module).service(service.name, service.dependencies.concat([service.service]));
}