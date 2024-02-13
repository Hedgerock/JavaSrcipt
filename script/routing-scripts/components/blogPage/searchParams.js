export function searchParams(props, posts) {
    const paramStr = props.searchParams;
    const searchParams = new URLSearchParams(paramStr);
    const filter = searchParams.get('post');

    console.log(paramStr, searchParams, filter);
    posts = posts.filter(post => {
        if (!filter) {
            return true;
        }

        return post.title.includes(filter);
    })

    return posts
}