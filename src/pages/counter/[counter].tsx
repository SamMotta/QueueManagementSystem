import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { counter } = router.query

  return <p>Counter: { counter }</p>
}

export default Post