import cht_1 from "../images/Girl-up.png";
import cht_2 from "../images/boy.png";
import cht_3 from "../images/student girl.png";
import cht_4 from "../images/student.png";

import sendIcon from "../images/laugh-emoticon.png";
import { useEffect, useRef, useState } from "react";
import { chatService } from "../services/chat.service";
import { userService } from "../services/user.service";

const Chat = ({ chatId, setIsChatOpen, setHeaderReloadFlag }) => {
  const imageUrls = ["", cht_1, cht_2, cht_3, cht_4];

  const [msg, setMsg] = useState("");
  const [conversation, setConversation] = useState([]);
  // const [history, setHistory] = useState([]);

  const chatboxRef = useRef(null);
  const userInfo = userService.read();
  const user_id = userInfo.data._id;
  const cht_id = chatId;

  const closeChat = () => {
    setIsChatOpen(null);
  };

  const InitialChat = async () => {
    try {
      const chathistory = await chatService.fetch(user_id, chatId);
      const datas = chathistory.data.history;
      for (var i = 0; i < datas.length; i++) {
        if (datas[i].userSend) {
          const history = (
            <div className="p-2 w-full flex justify-end pr-5">
              <div className="px-5 py-3 max-w-[80%] rounded-s-xl rounded-tr-xl bg-[#EEC1F8] text-[#6D277F] text-md break-all">
                {datas[i].content}
              </div>
            </div>
          );
          setConversation((prevDiv) => [...prevDiv, history])
        } else {
          const history = (
            <div className="p-2 w-full flex">
              <div className="px-5 py-3 max-w-[80%] rounded-t-xl rounded-br-xl bg-[#20497C] text-md break-all">
                {datas[i].content}
              </div>
            </div>
          );
          setConversation((prevDiv) => [...prevDiv, history])
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isMounted = useRef(true); //useEffect run only once

  useEffect(() => () => {
    InitialChat();
    isMounted.current = false; //useEffect run only once

  }, []);

  const handleChat = async () => {
    try {
      const send = true;
      // eslint-disable-next-line eqeqeq
      if (msg != "") {
        const payload = { user_id, cht_id, send, msg };
        const userDiv = (
          <div className="p-2 w-full flex justify-end pr-5">
            <div className="px-5 py-3 max-w-[80%] rounded-s-xl rounded-tr-xl bg-[#EEC1F8] text-[#6D277F] text-md break-all">
              {msg}
            </div>
          </div>
        );
        const res = await chatService.create(payload);
        if (res) {
          setConversation((prevDiv) => [...prevDiv, userDiv]);
          setMsg("");
          const response = await botRes(msg);

          const botDiv = (
            <div className="p-2 w-full flex">
              <div className="px-5 py-3 max-w-[80%] rounded-t-xl rounded-br-xl bg-[#20497C] text-md break-all">
                {response.msg}
              </div>
            </div>
          );

          setConversation((prevDiv) => [...prevDiv, botDiv]);

          const res = await chatService.getVoice(response.voice_id, msg);

          console.log(res);
          if (res.status === 200) {
            const voiceDiv = (
              <div className="h-[40px]">
                <audio controls id="audio" onLoadedData={handleLoadedData}>
                  <source
                    src={`${process.env.REACT_APP_LOCAL}voice/${res.data.voice_id}`}
                    type="audio/mpeg"
                  />
                </audio>
              </div>
            );
            setConversation((prevDiv) => [...prevDiv, voiceDiv]);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoadedData = async (event) => {
    const audioElement = event.target;
    console.log(audioElement.duration);
    const result = await chatService.paymentBill(audioElement.duration);
    setHeaderReloadFlag(true);
    console.log(result);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChat(); // Call the function to handle the button click event
    }
  };

  const botRes = async (msg) => {
    const send = false;
    const payload = { user_id, cht_id, send, msg };
    const response = await chatService.botRes(payload);
    console.log(response);
    return response.data;
  };
  useEffect(() => {
    // Scroll to the bottom of the chat container when the chatbox content changes
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [conversation]);
  return (
    <>
      <div className="fixed top-20 left-0 h-full bg-gray-950/[0.8] w-full flex align-bottom">
        <div className="w-2/3 flex justify-center">
          <img src={imageUrls[chatId]} alt="cht" className="h-2/3" />
        </div>
        <div className="w-full -mx-4">
          <div className="bg-[#0B1B2F] mt-3 rounded-2xl text-white h-custom border-[#023875] border-4  outline outline-offset-0 outline-black outline-1">
            <div className="border border-black rounded-2xl h-full relative px-3">
              <div className="flex justify-end px-5">
                <button
                  className="text-white py-3 px-4 -mt-1 -mr-1 rounded font-bold z-10"
                  onClick={closeChat}
                >
                  &#x2716;
                </button>
              </div>
              <div
                className="ps-3 pl-5 h-custom scroll overflow-auto font-custom flex flex-col  "
                ref={chatboxRef}
              >
                {conversation}
              </div>
              <div className="absolute bottom-2 w-full flex ps-3 pr-5">
                <input
                  className="w-full rounded-lg outline-none py-2 px-5 bg-[#050F1A] border border-gray-700 font-custom"
                  placeholder="Enter Message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  onKeyPress={handleEnterKeyPress}
                />
                <button
                  className="w-[3rem] mx-5 p-2 bg-[#08497D] border border-black rounded-lg active:bg-[#063C66]"
                  onClick={handleChat}
                >
                  <img src={sendIcon} alt="send" className="w-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
