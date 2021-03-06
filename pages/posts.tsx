import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { POST } from '../types'
import PostLine from '../components/parts/PostLine'

const Posts: React.FC<{ posts: POST[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1 className="text-2xl pb-10">Posts Page</h1>
      {posts.map((post: POST) => (
        <PostLine key={post.id} post={post} />
      ))}
    </Layout>
  )
}

// TODO Build時に自身のAPIは叩けないのでエラーとなってる可能性がある
// 一旦jsonplaceholderからデータを取得に変更

// SSG
export const getStaticProps: GetStaticProps = async () => {
  // const url = process.env.VERCEL_URL
  //   ? 'https://' + process.env.VERCEL_URL
  //   : // : 'http://localhost:3003'
  //     'https://jsonplaceholder.typicode.com/users?_limit=10'
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  const response = await fetch(new URL(url).toString())
  if (response.status !== 200) {
    return {
      notFound: true,
    }
  }
  const posts = await response.json()
  return {
    props: { posts },
  }
}

export default Posts
