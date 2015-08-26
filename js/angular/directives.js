app.directive('input', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attr) {
      if (attr.ngModel && attr.value) {
        $parse(attr.ngModel).assign(scope, attr.value);
      }
    }
  };
}).directive('textarea', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attr) {
      if (attr.ngModel && attr.value) {
        $parse(attr.ngModel).assign(scope, attr.value);
      }
    }
  };
}).directive('select', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attr) {
      if (attr.ngModel && attr.value) {
        $parse(attr.ngModel).assign(scope, attr.value);
      }
    }
  };
}).directive('codeinject', function() {
  return {
    templateUrl: function(elem, attr){
      return 'partials/email-code/'+attr.type+'.html';
    }
  };
}).directive('newsection', function() {
  return {
    templateUrl: function(elem, attr){
      return 'partials/gen-code/'+attr.type+'.html';
    }
  };
});





/*.directive('source', ['$sce', function($sce){
  return function(val) {
    templateUrl: function(elem, attr){
      return $sce.'partials/'+attr.type+'.html';
    }
  };
}]);

console.log($('xmp').html());
*/