import { useState } from "react";
import Header from "./common/Header";
// import { userService } from "../services/user.service";
import Landing from "./Landing";

const Home = () => {
//   const isLogin = userService.read() ? true : false;
const [isOpenSignUp, setIsOpenSignUp] = useState();
const [isOpenSignIn, setIsOpenSignIn] = useState();
  return (
    <div className="bg-hero-pattern h-full bg-cover min-h-screen">
      <div className="max-w-screen-xl mx-auto py-3 px-5">
        <Header isLogin={false} isOpenSignIn={isOpenSignIn} setIsOpenSignIn={setIsOpenSignIn} setIsOpenSignUp={setIsOpenSignUp}/>
        <Landing isOpenSignUp={isOpenSignUp} setIsOpenSignUp={setIsOpenSignUp} setIsOpenSignIn={setIsOpenSignIn}/>
      </div>
    </div>
  );
};

export default Home;
