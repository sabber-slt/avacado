import React from "react";
import ImageCo from "../../components/main/ImageCo";
import TabBar from "../../components/TabBar";
import useAuth from "../../store/useAuth";
import { GrAddCircle } from "react-icons/gr";
import Link from "next/link";

const Header = () => {
  const { user, setUser } = useAuth();
  const [hydrate, setHydrate] = React.useState(false);
  const [postImage, setPostImage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [menu, setMenu] = React.useState("posts");
  React.useEffect(() => {
    setHydrate(true);
  }, [user]);
  const url = "https://avacado.hasura.app/v1/graphql";
  const createImage = (newImage: string) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
        mutation MyMutation($id: Int! , $img: String) {
          update_user_by_pk(pk_columns: {id: $id}, _set: {img: $img}) {
            activity
            age
            gender
            height
            id
            img
            name
            phone
            special
            weight
          }
        }
    
    `,
        variables: {
          id: user?.id,
          img: newImage,
        },
      }),
    }).then((res) => res.json());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createPost = async (post: string) => {
    if (postImage !== "") {
      setLoading(true);
      try {
        const upload = await createImage(post);
        setUser(upload.data.update_user_by_pk);
        console.log(upload);
        setLoading(false);
        setPostImage("");
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convertToBase64(file);
    setPostImage(base64);
  };
  React.useEffect(() => {
    if (postImage !== "") {
      const handleSubmit = () => {
        createPost(postImage);
      };
      handleSubmit();
    }
  }, [createPost, postImage]);
  if (!hydrate) return null;
  return (
    <div className="bg-zinc-200">
      <div className="relative flex w-full h-48 rounded-b-[30px] overflow-hidden shadow-xl shadow-zinc-400">
        <ImageCo
          src="https://i.pinimg.com/736x/75/4f/2b/754f2ba8a61c205a26b845c6a5608d69.jpg"
          w="w-full"
          h="h-48"
          cls=""
        />
        <div className="w-full h-48 absolute flex flex-row items-center justify-start">
          <div>
            <form
              style={{ zIndex: 50 }}
              className="relative w-40 h-full flex flex-col items-center justify-center"
            >
              <ImageCo
                src={
                  user?.img === null && user?.gender === "man"
                    ? "/pics/boy.png"
                    : "/pics/girl.png"
                }
                w="w-24"
                h="h-24"
                rounded="rounded-full"
                quality={2}
              />
              <label
                htmlFor="fileUpload"
                className="absolute w-8 h-8 right-7 flex items-center justify-center -bottom-3 bg-white rounded-md"
              >
                <GrAddCircle className="text-green-600 w-6 h-6" />
              </label>
              <input
                id="fileUpload"
                type="file"
                style={{ display: "none" }}
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
            </form>
          </div>
          <p className="z-40 text-slate-100 text-lg">{user?.name}</p>
        </div>
      </div>
      <TabBar />
    </div>
  );
};

export default Header;
