var sinonChai = require('sinon-chai')
  , sinon = require('sinon')
  , chai = require('chai')
  , expect = chai.expect
  , Ng = require('../dangpi.js');

chai.use(sinonChai);

components = {
  controller: sinon.spy(),
  service: sinon.spy(),
  factory: sinon.spy()
};

angular = {
  module: sinon.stub().returns(components)
};

describe('[testDangpi.js] Declarative Angular API:', function() {

  describe('When configuring a controller', function() {

    it('should use angulars API to create the controller.', function() {

      var expectedController = {
        module: 'mod',
        name: 'expectedController',
        dependencies: ['dep1', 'dep2'],
        controller: function(dep1, dep2) {}
      };

      Ng.NgPart(expectedController);

      expect(angular.module).calledWith(expectedController.module);
      expect(components.controller).calledWith(expectedController.name, ['dep1', 'dep2', expectedController.controller]);
    });
  });

  describe('When configuring a service', function() {

    it('should use angulars API to create the service.', function() {

      var expectedService = {
        module: 'mod',
        name: 'expectedService',
        dependencies: ['dep1', 'dep2'],
        service: function(dep1, dep2) {}
      };

      Ng.NgPart(expectedService);

      expect(angular.module).calledWith(expectedService.module);
      expect(components.service).calledWith(expectedService.name, ['dep1', 'dep2', expectedService.service]);
    });
  });

  describe('When configuring a factory', function() {

    it('should use angulars API to create the factory.', function() {

      var expectedFactory = {
        module: 'mod',
        name: 'expectedFactory',
        dependencies: ['dep1', 'dep2'],
        factory: function(dep1, dep2) {}
      };

      Ng.NgPart(expectedFactory);

      expect(angular.module).calledWith(expectedFactory.module);
      expect(components.factory).calledWith(expectedFactory.name, ['dep1', 'dep2', expectedFactory.factory]);
    });
  });
});
