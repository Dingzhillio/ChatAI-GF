import { useState } from "react";
import { userService } from "../services/user.service";
import Character from "./Character";
import Header from "./common/Header";
import Home from "./Home";

const Characters = () => {
  const isLogin = userService.read() ? true : false;
  const [headerReloadFlag, setHeaderReloadFlag] = useState(false)
  return (
    <>
      {isLogin ? (
        <div className="bg-login-pattern h-full bg-cover min-h-screen">
          <div className="max-w-screen-xl mx-auto py-3 px-5">
            <Header isLogin={isLogin} headerReloadFlag={headerReloadFlag} setHeaderReloadFlag={setHeaderReloadFlag}/>
            <Character setHeaderReloadFlag={setHeaderReloadFlag}/>
          </div>
        </div>
      ) : (
        <Home/>
      )}
    </>
  );
};
export default Characters;
