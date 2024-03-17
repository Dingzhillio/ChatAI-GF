import { useEffect, useState } from "react";
import Header from "./common/Header";
// import { userService } from "../services/user.service";
import Landing from "./Landing";

const Home = () => {
  //   const isLogin = userService.read() ? true : false;
  const [isOpenSignUp, setIsOpenSignUp] = useState();
  const [isOpenSignIn, setIsOpenSignIn] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this timeout according to your actual loading time

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="bg-black h-screen">
      <div className="absolute top-[50%] left-[50%]">
        <div class="lds-heart"><div></div></div>
      </div>
    </div>
  ) : (
    <div className="bg-hero-pattern h-full bg-cover min-h-screen">
      <div className="max-w-screen-xl mx-auto py-3 px-5">
        <Header
          isLogin={false}
          isOpenSignIn={isOpenSignIn}
          setIsOpenSignIn={setIsOpenSignIn}
          setIsOpenSignUp={setIsOpenSignUp}
        />
        <Landing
          isOpenSignUp={isOpenSignUp}
          setIsOpenSignUp={setIsOpenSignUp}
          setIsOpenSignIn={setIsOpenSignIn}
        />
      </div>
    </div>
  );
};

export default Home;
