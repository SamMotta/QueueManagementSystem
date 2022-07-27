import { useRouter } from 'next/router'

// Dynamic routing
const Counter = () => {
  const router = useRouter()
  const { counterid } = router.query

  return <p>Counter: { counterid }</p>
}

export default Counter