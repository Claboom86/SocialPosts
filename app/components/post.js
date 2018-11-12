"use strict";
const post = {
    template: `
    <div class="ind-post">
        <h4>{{ $ctrl.post.title }}</h4>
        <p class="post-text">{{ $ctrl.post.text }}</p>
    </div>
    `,
    bindings: {
        post: "<"
    }
};

angular
    .module("App")
    .component("post", post);