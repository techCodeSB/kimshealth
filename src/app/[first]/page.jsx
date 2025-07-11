import checkLocation from '@/app/lib/checkLocation'
import Hospital from '@/app/hospital/page'
import Home from '@/app/page'




const FstHome = async ({ params }) => {
  const check = await checkLocation(params.first)

  if (check) {
    return <Hospital />

  }

  return <Home/>
}

export default FstHome;
