import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Login from '../components/home/Login';
import Main from '../components/home/Main';
import useAuth from '../store/useAuth';
import Container from '../components/Container';

const Home: NextPage = () => {
  const { user } = useAuth();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (user === null) {
      setShow(false);
    }
  }, [user]);

  return <div>{!show ? <Login /> : <Main />}</div>;
};

export default Home;
