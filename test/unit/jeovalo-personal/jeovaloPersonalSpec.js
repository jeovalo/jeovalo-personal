'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('jeovaloPersonal');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('jeovaloPersonal.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('jeovaloPersonal.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('jeovaloPersonal.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('jeovaloPersonal.services')).to.be.ok;
  });
  

});