import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Characters from "./Components/Characters";
import PrivateLayout from "./Components/PrivateLayout";
import Membership from "./Components/Membership";

import { IMAGES } from "./Images";
import { useEffect, useState } from "react";

function App() {
  const [imgsLoaded, setImgsLoaded] = useState(true);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            console.log("image url:", image.url)
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(false))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <>
      {imgsLoaded ? (
        <div className="bg-black h-screen">
          <div className="absolute top-[50%] left-[50%]">
            <div class="lds-heart">
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={
                <PrivateLayout>
                  <Home />
                </PrivateLayout>
              }
            />
            <Route path="home" element={<Characters />} />
            <Route path="membership" element={<Membership />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
