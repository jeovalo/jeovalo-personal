(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('jeovaloPersonal.config', [])
      .value('jeovaloPersonal.config', {
          debug: true
      });

  // Modules
  angular.module('jeovaloPersonal.directives', []);
  angular.module('jeovaloPersonal.filters', []);
  angular.module('jeovaloPersonal.services', []);
  angular.module('jeovaloPersonal',
      [
          'jeovaloPersonal.config',
          'jeovaloPersonal.directives',
          'jeovaloPersonal.filters',
          'jeovaloPersonal.services'
      ]);

})(angular);
