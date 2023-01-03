import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { motion } from "framer-motion";
import TabContainer from "../../components/main/TabContainer";

const Player = () => {
  const router = useRouter();
  const { query } = router;
  const playerRef = useRef<any>(null);

  const [hydrate, setHydrate] = useState(false);
  useEffect(() => {
    setHydrate(true);
  }, []);
  useEffect(() => {
    if (hydrate) {
      playerRef.current.showPreview();
    }
  }, [hydrate]);
  if (!hydrate) return null;
  console.log(query);
  return (
    <div>
      <TabContainer img="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665221494/07414c97a18f01492bcb3a8cad4a8158_sf4k4x.jpg">
        <div>
          <div className="w-screen h-[80vh] flex flex-col items-center justify-center">
            <div className="aspect-video w-screen ">
              <ReactPlayer
                url={query?.url}
                style={{ width: 500 }}
                width="100%"
                height="100%"
                controls
                ref={playerRef}
                light={true}
              />
            </div>
          </div>
        </div>
      </TabContainer>
    </div>
  );
};

export default Player;
