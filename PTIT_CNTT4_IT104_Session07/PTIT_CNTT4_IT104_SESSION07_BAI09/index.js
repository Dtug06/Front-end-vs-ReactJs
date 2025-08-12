var UserComment = /** @class */ (function () {
    function UserComment(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    UserComment.prototype.addReply = function (reply) {
        this.replies.push(reply);
    };
    return UserComment;
}());
var Post = /** @class */ (function () {
    function Post(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    Post.prototype.addLike = function (userId) {
        if (this.likes.indexOf(userId) === -1) {
            this.likes.push(userId);
        }
    };
    Post.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
    return Post;
}());
var User = /** @class */ (function () {
    function User(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    User.prototype.createPost = function (content) {
        var post = new Post((this.posts.length + 1).toString(), this.id, content);
        this.posts.push(post);
    };
    User.prototype.comment = function (postId, commentContent) {
        for (var _i = 0, _a = this.followers; _i < _a.length; _i++) {
            var user = _a[_i];
            for (var _b = 0, _c = user.posts; _b < _c.length; _b++) {
                var post = _c[_b];
                if (post.id === postId) {
                    var comment = new UserComment((post.comments.length + 1).toString(), this.id, commentContent);
                    post.addComment(comment);
                }
            }
        }
    };
    User.prototype.follow = function (user) {
        if (this.followers.indexOf(user) === -1) {
            this.followers.push(user);
        }
    };
    User.prototype.likePost = function (postId) {
        for (var _i = 0, _a = this.followers; _i < _a.length; _i++) {
            var user = _a[_i];
            for (var _b = 0, _c = user.posts; _b < _c.length; _b++) {
                var post = _c[_b];
                if (post.id === postId) {
                    post.addLike(this.id);
                }
            }
        }
    };
    User.prototype.viewFeed = function () {
        var feed = [];
        for (var _i = 0, _a = this.followers; _i < _a.length; _i++) {
            var user = _a[_i];
            feed.push.apply(feed, user.posts);
        }
        return feed;
    };
    return User;
}());
var userA = new User("A");
var userB = new User("B");
userA.follow(userB);
userB.createPost("Xin chào mọi người");
userA.likePost("1");
userA.comment("1", "Hay quá!");
console.log(userA.viewFeed());
