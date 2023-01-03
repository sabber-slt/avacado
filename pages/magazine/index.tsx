import { useRouter } from 'next/router';
import React from 'react';
import ImageCo from '../../components/main/ImageCo';
import TabBar from '../../components/TabBar';
import Container from '../../components/Container';

const Home = () => {
  const router = useRouter();
  const { id, media, title, content1, content2 } = router.query;
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-center text-zinc-500 bg-white">
        <ImageCo src={media as string} w="w-full" h="h-52 lg:h-96" />
        <h2 className="mt-3 px-4 text-center lg:text-3xl">{title}</h2>
        <p className="w-full text-right px-3 text-md mt-4 lg:text-lg">
          {content1}
        </p>
        <p className="w-full text-right px-3 text-md mt-2 mb-20 lg:text-lg">
          {content2}
        </p>
        <TabBar />
      </div>
    </Container>
  );
};

export default Home;
