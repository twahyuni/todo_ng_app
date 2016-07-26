app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.newTodo = '';

  $scope.todos = [
    {task: "build an awesome todo list", done: false},
    {task: "become a AngularJS master", done: false},
    {task: "have a Shoyu ramen for dinner", done: false},
    {task: "watch Daredevil Season 2 Episode 1 tonight", done: false},
    {task: "buy a cup of coffee", done: false}
  ];

  $scope.addTodo = function() {
    $scope.todos.push({task: $scope.newTodo, done: false});
    $scope.newTodo = '';
  };

}]);