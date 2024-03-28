import { useEffect, useState } from "react";
import SignUp from "./auth/SignUp";

const Landing = ({isOpenSignUp, setIsOpenSignUp, setIsOpenSignIn}) => {
  const button = `${process.env.REACT_APP_FRONT}images/Btn_OtherButton_Polygon02.png`;
  const character = `${process.env.REACT_APP_FRONT}images/Girl and boy.png`;
  const character1 = `${process.env.REACT_APP_FRONT}images/Girl and boy-eye.png`;
  const [imageURL, setImageURL] = useState(character);
  // const [isOpenSignUp, setIsOpenSignUp] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      if (imageURL === character) {
        setImageURL(character1);
      }
      if (imageURL === character1) {
        setImageURL(character);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [imageURL]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-white text-6xl mt-32 mb-10 font-custom text-shadow">
            The First Influencer Transformed Into AI
          </div>
          <div className="text-white text-2xl mb-10 font-customsubtitle">
            DISCOVER FRIEND AI - YOUR VIRTURAL FRIEND
          </div>
          <div className="">
            <div className="relative w-52 ">
              <img src={button} alt="join" className="w-52 h-20" />
              <button
                className="text-white font-bold text-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                onClick={()=>{setIsOpenSignUp(true)}}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={imageURL} className="m-auto" alt="boy_girl" />
        </div>
      </div>
      {isOpenSignUp && <SignUp setIsOpenSignUp={setIsOpenSignUp} setIsOpenSignIn={setIsOpenSignIn}/>}
    </>
  );
};

export default Landing;
