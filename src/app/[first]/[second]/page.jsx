import checkLocation from '@/app/lib/checkLocation'
import Hospital from '@/app/hospital/page'
import Home from '@/app/page'




const SecHome = async ({ params }) => {
  const check = await checkLocation(params.second)

  if (check) {
    return <Hospital />

  }

  return <Home/>
}

export default SecHome;

