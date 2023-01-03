import React from "react";
import TabBar from "../../components/TabBar";
import useAuth from "../../store/useAuth";
import Link from "next/link";
import Header from "../../components/profile/Header";
import Section from "../../components/profile/Section";
import Container from "../../components/Container";

const Home = () => {
  const { user, setUser } = useAuth();
  const [hydrate, setHydrate] = React.useState(false);

  React.useEffect(() => {
    setHydrate(true);
  }, [user]);

  if (!hydrate) return null;
  return (
    <Container>
      <Header />
      <div className="w-full bg-zinc-200 flex flex-row items-center justify-around py-5">
        <Link href="/goal">
          <a className="w-40 h-12 rounded-md bg-white flex flex-col items-center justify-center">
            <p>هدف گذاری</p>
          </a>
        </Link>
        <Link href="/">
          <a className="w-40 h-12 rounded-md bg-white flex flex-col items-center justify-center">
            <p> تعیین وقت </p>
          </a>
        </Link>
      </div>
      <Section />
      <TabBar />
    </Container>
  );
};

export default Home;
