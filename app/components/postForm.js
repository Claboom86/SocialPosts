"use strict";
const postForm = {
    template: `
        <div class="new-form" ng-show="$ctrl.show" ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost });">
            <form ng-submit="$ctrl.addPost($ctrl.newPost);">
                <p class="label">Title</p>
                <input id="title-input" type="text" ng-model="$ctrl.newPost.title">
                <p class="label">Thought</p>
                <input id="text-input" type="text" ng-model="$ctrl.newPost.text">
                <button class="submit-btn"">Add Post</button>
            </form>
        </div>
    `,
    bindings: {
        addPost: "&",
        show: "<",
    }
};

angular
    .module("App")
    .component("postForm", postForm);