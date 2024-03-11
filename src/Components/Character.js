import cht_1_up from "../images/Girl-up.png";
import cht_1_back from "../images/Girl-back.png";
import cht_2_up from "../images/boy-eye.png";
import cht_2_back from "../images/boy.png";
import cht_3_up from "../images/student girl - click.png";
import cht_3_back from "../images/student girl.png";
import cht_4_up from "../images/student-eye.png";
import cht_4_back from "../images/student.png";
import { useState } from "react";
import Chat from "./Chat";

const Character = ({setHeaderReloadFlag}) => {
  const description = {
    cht_1: "I am Sasha, 15 years old. I like you and I wanna data with you.",
    cht_2: "My name is Anthony. I am 9 years old.",
    cht_3:
      "I am Adeline, 19 years old. I have good experience with with dating.",
    cht_4: "This is Luke, 25 years old. I have good skill with girl.",
  };
  const [title, setTitle] = useState("");
  const [cht_1, setCht_1] = useState(cht_1_back);
  const [cht_2, setCht_2] = useState(cht_2_back);
  const [cht_3, setCht_3] = useState(cht_3_back);
  const [cht_4, setCht_4] = useState(cht_4_back);

  const [isChatOpen, setIsChatOpen] = useState(null);
  const [chatId, setChatId] = useState(null);

  const handleDefault = () => {
    setCht_1(cht_1_back);
    setCht_2(cht_2_back);
    setCht_3(cht_3_back);
    setCht_4(cht_4_back);
  };
  const handleImageClick = (num) => {
    setChatId(num);

    if (num === 1) {
      setCht_1(cht_1_up);
      setTitle(description.cht_1);
    }
    if (num === 2) {
      setCht_2(cht_2_up);
      setTitle(description.cht_2);
    }
    if (num === 3) {
      setCht_3(cht_3_up);
      setTitle(description.cht_3);
    }
    if (num === 4) {
      setCht_4(cht_4_up);
      setTitle(description.cht_4);
    }
  };
  const handleChat = () => {
    setIsChatOpen(true);
    console.log(chatId)
  }
  return (
    <>
      <div className="">
        {
          isChatOpen && <Chat chatId={chatId} setIsChatOpen={setIsChatOpen} setHeaderReloadFlag={setHeaderReloadFlag}/>
        }
        <div className="mt-10 h-[20vh]">
          {title === "" ? (
            ""
          ) : (
            <div className="mx-auto md:px-5 sm:px-2 py-2 font-custom text-2xl w-1/2 min-w-[300px] border-2 border-black rounded-xl bg-white">
              <div>
                {/* I am Sasha, 15 years old. I like you and I wanna data with you. */}
                {title}
              </div>
              <div className="flex justify-end">
                <button className="play" onClick={handleChat}></button>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 -mt-5 lg:mx-10">
          <div className="flex justify-center">
            <img
              src={cht_1}
              alt="cht_1"
              className="h-[60vh]"
              tabIndex={0}
              onFocus={() => handleImageClick(1)}
              onBlur={() => handleDefault()}
            />
          </div>
          <div className="flex justify-center">
            <img
              src={cht_2}
              alt="cht_2"
              className="h-[60vh]"
              tabIndex={0}
              onFocus={() => handleImageClick(2)}
              onBlur={() => handleDefault()}
            />
          </div>
          <div className="flex justify-center">
            <img
              src={cht_3}
              alt="cht_3"
              className="h-[60vh]"
              tabIndex={0}
              onFocus={() => handleImageClick(3)}
              onBlur={() => handleDefault()}
            />
          </div>
          <div className="flex justify-center">
            <img
              src={cht_4}
              alt="cht_4"
              className="h-[60vh]"
              tabIndex={0}
              onFocus={() => handleImageClick(4)}
              onBlur={() => handleDefault()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
