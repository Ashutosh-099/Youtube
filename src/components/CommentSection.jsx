import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { comments } from "../utils/constants";

const Comment = (props) => {
  const { name, text } = props;
  return (
    <div className="flex items-center bg-gray-100 gap-3 my-3 px-3 py-2">
      <AccountCircleIcon fontSize="large" />
      <div>
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = (props) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <div key={comment.id}>
          <Comment name={comment.name} text={comment.text} />
          <div className="ml-8 border-l-2">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentSection = () => {
  return (
    <section className="w-full">
      <h1 className="font-bold text-xl">Comments</h1>
      <CommentList comments={comments} />
    </section>
  );
};

export default CommentSection;
