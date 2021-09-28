import { FETCH_POSTS, NEW_POST } from './types';




export const fetchPosts = () => dispatch => {
    // dispatch parameter is similar to a promise or a resolver
        console.log('fetching');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => dispatch({
                type: FETCH_POSTS,
                // data coming in from the post will be named payload for a bit of better readability
                payload: posts
                }));

}

