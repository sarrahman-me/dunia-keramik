import Avatar from "@/public/avatar.png"
import Image from "next/image";

const ChatBubble = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start p-2 rounded max-w-2xl">
      <div className="mr-4">
        <Image
          src={Avatar}
          alt="avatar"
          className="w-20 h-20 rounded-full object-contain"
        />
      </div>
      <div className="prose bg-gray-100 p-3 rounded-lg">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
