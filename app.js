var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "component/home/home.html"
        })
        .state("category", {
            url: "/category",
            templateUrl: "component/category/category.html"
        })
        .state("find", {
            url: "/find",
            templateUrl: "component/find/find.html"
        })
        .state("home.food", {
            url:"/food",
            templateUrl: "component/home/food/food.html"
        })
        .state("home.jiaju", {
            url:"/jiaju",
            templateUrl: "component/home/jiaju/jiaju.html"
        })
        .state("home.huazhuang", {
            url:"/huazhuang",
            templateUrl: "component/home/huazhuang/huazhuang.html"
        })
        .state("home.chuandai", {
            url:"/chuandai",
            templateUrl: "component/home/jiaju/jiaju.html"
        })
        .state("mine", {
            url: "/mine",
            templateUrl: "component/mine/mine.html"
        })
        .state("buycar", {
        url:"/buycar",
        templateUrl: "component/buycar/buycar.html"
    });
});