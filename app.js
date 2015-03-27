//var tb = document.getElementById("name");
//
//console.log(tb);
//
//tb.addEventListener('keypress', function (event) {
//    console.log(event);
//});


'use strict';
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function ($scope, $log, $filter, $resource) {


    $scope.handle = "";

    $scope.lowercaseHandle = function () {

        return $filter('lowercase')($scope.handle);

    };


    $scope.$watch('handle', function (newValue, oldValue) {

        console.info("Handle Changed!");
        console.log("New:", newValue);
        console.log("Old:", oldValue);

    });


    setTimeout(function () {

        $scope.$apply(function () {

            $scope.handle = "newhandlevalue";
            console.info("newhandlevalue");

        });

    }, 3000);


    //    $log.log($resource);

    //    $scope.name = 'John';
    //    $scope.formattedName = $filter('uppercase')($scope.name);
    //    
    //    $log.info($scope.name);
    //    $log.info($scope.formattedName);
    //    
    //    
    //    $log.log('Hello');
    //    $log.info('This is some information.');
    //    $log.warn('Warning!');
    //    $log.debug('Some debug information while writing my code!');
    //    $log.error('This was an error!!!');


    //    $scope.firstName = "Marcio";
    //    $scope.lastName = "Rosa";
    //    
    //    $scope.getName = function(){
    //        
    //        return $scope.firstName + " " + $scope.lastName;
    //    }
    //    
    //    console.log($scope.getName());
    //    
    //    console.log($scope);

    //    console.log($scope);



});

//function searchPeople(firstName, lastName, height, age, occupation) {
//
//    return 'Márcio Rosa';
//    
//    firstName
//    firstName
//    firstName
//    
//    
//};

//console.log(searchPeople(1,2,3,4,5));
//console.log(searchPeople);

//console.log(angular.injector().annotate(searchPeople));