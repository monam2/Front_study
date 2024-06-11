import { useRouter } from "next/router"

const Country = () => {
    const router = useRouter();
    const code = router.query.code;

  return (
    <div>{code}</div>
  )
}

export default Country