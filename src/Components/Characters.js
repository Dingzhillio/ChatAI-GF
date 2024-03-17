import { useEffect, useState } from "react";
import { userService } from "../services/user.service";
import Character from "./Character";
import Header from "./common/Header";
import Home from "./Home";

const Characters = () => {
  const isLogin = userService.read() ? true : false;
  const [headerReloadFlag, setHeaderReloadFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this timeout according to your actual loading time

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLogin ? (
        <>
          {isLoading ? (
            <div className="bg-black h-screen">
              <div className="absolute top-[50%] left-[50%]">
                <div class="lds-heart">
                  <div></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-login-pattern h-full bg-cover min-h-screen">
              <div className="max-w-screen-xl mx-auto py-3 px-5">
                <Header
                  isLogin={isLogin}
                  headerReloadFlag={headerReloadFlag}
                  setHeaderReloadFlag={setHeaderReloadFlag}
                />
                <Character setHeaderReloadFlag={setHeaderReloadFlag} />
              </div>
            </div>
          )}
        </>
      ) : (
        <Home />
      )}
    </>
  );
};
export default Characters;
