import React, { useContext, useEffect, useRef, useState } from 'react';
import assets from '../assets/assets';
import { formatMessageTime } from '../lib/utils';
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
// Chat Container Component
const ChatContainer = () => {
  const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);

  const scrollEnd = useRef();
  const [input, setInput] = useState("");

  // Send text message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    await sendMessage({ text: input.trim() });
    setInput("");
  };

  // Send image
  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = async () => {
      await sendMessage({ image: reader.result });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  // Fetch messages when selectedUser changes
  useEffect(() => {
    if (selectedUser) getMessages(selectedUser._id);
  }, [selectedUser]);

  // Scroll to latest message with small delay for images
  useEffect(() => {
    if (scrollEnd.current) {
      setTimeout(() => {
        scrollEnd.current.scrollIntoView({ behavior: "smooth" });
      }, 100); // ensures images are loaded
    }
  }, [messages]);

  if (!selectedUser) {
    return (
      <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden h-full'>
        <img src={assets.logo_icon} className='max-w-16' alt="" />
        <p className='text-lg font-medium text-white'>Chat anytime, anywhere</p>
      </div>
    );
  }
// Render chat interface
  return (
    <div className='h-full relative backdrop-blur-lg'>
      {/* Header */}
      <div className='flex items-center gap-3 py-3 px-4 border-b border-stone-500'>
        <img
          src={selectedUser.profilePic || assets.avatar_icon}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          {selectedUser.fullName}
          {onlineUsers.includes(selectedUser._id) && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className='md:hidden w-7 cursor-pointer'
        />
        <img src={assets.help_icon} alt="" className='max-md:hidden w-5' />
      </div>

      {/* Chat Area */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-auto p-3 pb-6'>
        {messages.map((msg, index) => {
          const isSender = msg.senderId === authUser._id;
          const avatarSrc = isSender
            ? authUser.profilePic || assets.avatar_icon
            : selectedUser.profilePic || assets.avatar_icon;

          return (
            <div
              key={index}
              className={`flex items-end gap-2 mb-4 ${isSender ? 'justify-end' : 'justify-start'}`}
            >
              {/* Opponent Avatar */}
              {!isSender && (
                <img src={avatarSrc} alt="avatar" className="w-7 h-7 rounded-full" />
              )}

              {/* Message Bubble */}
              <div className="flex flex-col items-end">
                {msg.image ? (
                  <img
                    src={msg.image}
                    alt="sent"
                    className={`max-w-[230px] max-h-[300px] object-cover border border-gray-700 rounded-lg ${isSender ? 'ml-2' : 'mr-2'}`}
                  />
                ) : (
                  <p
                    className={`p-2 max-w-[200px] text-sm font-light rounded-lg break-words
                      ${isSender ? 'bg-violet-500/70 text-white rounded-br-none' : 'bg-gray-700/50 text-white rounded-bl-none'}
                    `}
                  >
                    {msg.text}
                  </p>
                )}
                <span className="text-gray-400 text-xs mt-1">{formatMessageTime(msg.createdAt)}</span>
              </div>

              {/* Sender Avatar */}
              {isSender && (
                <img src={avatarSrc} alt="avatar" className="w-7 h-7 rounded-full" />
              )}
            </div>
          );
        })}
        <div ref={scrollEnd}></div>
      </div>

      {/* Bottom Input */}
      <div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3 bg-black/20'>
        <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage(e)}
            type="text"
            placeholder="Send a message"
            className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400'
          />
          <input
            onChange={handleSendImage}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            hidden
          />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="" className="w-5 mr-2 cursor-pointer" />
          </label>
        </div>
        <img
          onClick={handleSendMessage}
          src={assets.send_button}
          alt=""
          className="w-7 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ChatContainer;
