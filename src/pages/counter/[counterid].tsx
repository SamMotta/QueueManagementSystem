import { useRouter } from 'next/router'


// Use NextAuth for Authentication? Really Needed?
// Dynamic routing
const Counter = () => {
  const router = useRouter()
  const { counterid } = router.query

  return <p>Counter: { counterid }</p>
}


function CounterDashboard() {
  const router = useRouter()
  const { counterid } = router.query
  
  return (
    <>
      <h1>Testing...</h1>
      <p>Counter: { counterid }</p>
    </>
  )
}

export default CounterDashboard