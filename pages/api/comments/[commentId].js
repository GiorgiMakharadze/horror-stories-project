import { comments } from "../../../data/comments";

export default function (req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    console.log("commentId", commentId);

    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);
    console.log("deletedComment", deletedComment);
    res.status(200).json(deletedComment);
  }
}
