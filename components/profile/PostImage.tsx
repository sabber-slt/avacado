import React from "react";
import usePublic from "../../store/usePublic";
import { GoDiffAdded } from "react-icons/go";
import ImageCo from "../main/ImageCo";

const PostImage = () => {
  const { setMedia, media } = usePublic();
  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [postImage, setPostImage] = React.useState<any>(null);

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];

    setPostImage(file);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("file", postImage);

    formData.append("upload_preset", "ml_default");
    const options = {
      method: "POST",
      body: formData,
    };
    if (postImage) {
      return fetch(
        `https://api.Cloudinary.com/v1_1/dh6sxfevk/image/upload`,
        options
      )
        .then((res) => res.json())
        .then((res) => setMedia(res.secure_url))
        .catch((err) => console.log(err));
    } else {
      setMessage("لطفا یک عکس انتخاب کنید");
    }
    setShow(false);
  };

  console.log(postImage);
  return (
    <div className="w-full flex flex-col items-center justify-center pt-16">
      {media === "" ? (
        <>
          {!postImage && (
            <>
              <p> {message}</p>
              <div className="w-80 h-44 flex flex-col items-center justify-center bg-[#5AAC46] rounded-lg">
                <label htmlFor="fileUpload">
                  <GoDiffAdded className="w-8 h-8 text-zinc-50" />
                </label>
                <input
                  id="fileUpload"
                  type="file"
                  style={{ display: "none" }}
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
                  className="app_uploadInput"
                />
                {!show && (
                  <p className="text-zinc-50 pt-5">انتخاب تصویر(اختیاری) </p>
                )}
              </div>
            </>
          )}
          {postImage && (
            <div className="w-80 h-44 flex flex-col items-center justify-center">
              <button
                className="px-5 py-2 bg-[#5AAC46] text-zinc-50 rounded-md"
                onClick={onSubmit}
              >
                تایید و ارسال
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <ImageCo src={media} w="w-80" h="h-44" />
        </div>
      )}
    </div>
  );
};

export default PostImage;
