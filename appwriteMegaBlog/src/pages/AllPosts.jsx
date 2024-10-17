import { Container, PostCard } from '../components'
import { AuthService } from '../appwrite/config'
import React ,{ useState , useEffect} from 'react'
import authService from '../appwrite/auth';

function AllPosts() {
    const [posts , setPosts] = useState('');
    useEffect(() =>{},[])

    authService.getPosts([]).then((posts) =>{
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div w-full py-8>
      <Container>
        <div className='flex flex-wrap'> 
          {posts.map((post) => (
            <div key={post.$id}>
                <PostCard post = {post}/>
            </div>
          
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
