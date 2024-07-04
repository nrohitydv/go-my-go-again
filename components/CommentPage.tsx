"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/lib/hooks";
import { addComment } from "@/lib/store/comment-slice";

interface CommentProps {
  initialComment?: Comment[];
}

interface Comment {
  id: string;
  comment: string;
}
const CommentPage: React.FC<CommentProps> = () => {
  const [comment, setComment] = useState("");
  const dispatch = useAppDispatch();
  const hanldeAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment: Comment = {
      id: crypto.randomUUID(),
      comment,
    };
    dispatch(addComment(newComment));
    setComment("");
  };
  return (
    <form onSubmit={hanldeAddComment}>
      <Textarea
        className="mt-2"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        className="bg-blue-700 text-white hover:bg-blue-600 mt-2 rounded-lg"
        type="submit"
      >
        Add comment
      </Button>
    </form>
  );
};

export default CommentPage;
