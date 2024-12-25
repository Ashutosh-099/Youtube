import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-2">
      <AccountCircleIcon />
      <span className="font-semibold pr-1.5 pl-1">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
