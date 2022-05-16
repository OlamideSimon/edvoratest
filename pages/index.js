import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header'
import NavLinks from '../components/NavLinks'
import { addRides, addUser, resetCity, resetState } from '../state/slice/dataSlice';

export default function Home({user, rides}) {
  const dispatch = useDispatch()

  useEffect(() => {
    if(user && rides) {
      dispatch(addRides({rides}))
      dispatch(addUser({user}))
      dispatch(resetCity())
      dispatch(resetState())
    }
  }, [dispatch, rides, user])

  return (
    <div className='bg-gray-900 min-h-screen w-screen'>
      <Header />
      <NavLinks />
    </div>
  )
}


// conecting to api using ssr
export async function getServerSideProps() {
  try {
    const resUser = await fetch(`https://assessment.api.vweb.app/user`);
    const user = await resUser.json();

    const resRides = await fetch(`https://assessment.api.vweb.app/rides`);
    const rides = await resRides.json();

    if (!user) {
      return {
        notFound: true,
      };
    }

    if (!rides) {
      return {
        notFound: true,
      };
    }

    return {
      props: { user, rides },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
