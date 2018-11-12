"use strict";
const socialPosts = {
    templateUrl: "app/components/socialPosts.html",
    controller: [function() {
        const vm = this;
        vm.list = [
            {title: "Dog", text: "lorem ipsum"},
            {title: "Cat", text: "meow"},
            {title: "title", text: "words"},
            {title: "title", text: "words"}
        ];
        vm.showForm = () => {
            vm.show = true;
            console.log(vm.show);
        };
        vm.addPost = (newPost) => {
            console.log(newPost);
            vm.show = false;
            vm.list.unshift(angular.copy(newPost));
        };
        vm.onSubmit = (item) => {
            console.log("onSubmit works!");
            console.log(item);
        };
    }]
};

angular
    .module("App")
    .component("socialPosts", socialPosts);