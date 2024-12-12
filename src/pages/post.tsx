import {useState, useEffect} from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
    id : number;
    title : string;
}
export default function Post() {

    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${BASE_URL}/posts`);
            const fetchechPosts = await response.json();
            setPosts(fetchechPosts);
        }

        fetchPosts();
    }, [])

  return (
    <div>
        <h1>Posts</h1>
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div>{post.id}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
