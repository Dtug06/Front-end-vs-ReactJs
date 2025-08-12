class UserComment {
    public id: string
    public userId: string
    public content: string
    public replies: UserComment[]

    constructor(id: string, userId: string, content: string) {
        this.id = id
        this.userId = userId
        this.content = content
        this.replies = []
    }

    addReply(reply: UserComment) {
        this.replies.push(reply)
    }
}

class Post {
    public id: string
    public likes: string[]
    public comments: UserComment[]
    public userId: string
    public content: string

    constructor(id: string, userId: string, content: string) {
        this.id = id
        this.userId = userId
        this.content = content
        this.likes = []
        this.comments = []
    }

    addLike(userId: string) {
        if (this.likes.indexOf(userId) === -1) {
            this.likes.push(userId)
        }
    }

    addComment(comment: UserComment) {
        this.comments.push(comment)
    }
}

class User {
    public id: string
    public posts: Post[]
    public followers: User[]

    constructor(id: string) {
        this.id = id
        this.posts = []
        this.followers = []
    }

    createPost(content: string) {
        const post = new Post((this.posts.length + 1).toString(), this.id, content)
        this.posts.push(post)
    }

    comment(postId: string, commentContent: string) {
        for (const user of this.followers) {
            for (const post of user.posts) {
                if (post.id === postId) {
                    const comment = new UserComment(
                        (post.comments.length + 1).toString(),
                        this.id,
                        commentContent
                    )
                    post.addComment(comment)
                }
            }
        }
    }

    follow(user: User) {
        if (this.followers.indexOf(user) === -1) {
            this.followers.push(user)
        }
    }

    likePost(postId: string) {
        for (const user of this.followers) {
            for (const post of user.posts) {
                if (post.id === postId) {
                    post.addLike(this.id)
                }
            }
        }
    }

    viewFeed() {
        const feed: Post[] = []
        for (const user of this.followers) {
            feed.push(...user.posts)
        }
        return feed
    }
}
const userA = new User("A")
const userB = new User("B")
userA.follow(userB)
userB.createPost("Xin chào mọi người")
userA.likePost("1")
userA.comment("1", "Hay quá!")
console.log(userA.viewFeed())
