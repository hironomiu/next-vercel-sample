import Layout from "../components/Layout"

const Home = (props) => {
  const lines = Object.values(props)
  return (
    <Layout>
      {/* TODO 型 */}
      {lines.map((line:any, index) => (
        <p key={index}>
          id:{line.id},name:{line.name}
        </p>
      ))}
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {
  const url = process.env.VERCEL_URL
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:3003'
  console.log(url)
  const response = await fetch(url + '/api/hoge')
  const posts = await response.json()
  return posts
}

export default Home