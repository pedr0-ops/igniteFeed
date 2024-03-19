import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  comment: string;
  onDeleteCommmet: (comment: string) => void;
}

export function Comment({ comment, onDeleteCommmet }: CommentProps) {
  const [likes, setLikes] = useState(0);

  function handleDeleteCommet() {
    onDeleteCommmet(comment);
  }

  function handleLike() {
    setLikes((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/78046173?v=4"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.content}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon</strong>
              <time
                title="05 de Abril ás 09:44h"
                dateTime="2024-03-05 09:44:30"
              >
                Publicado há 1h
              </time>
            </div>

            <button title="deletar comentario" onClick={handleDeleteCommet}>
              <Trash size={20} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp size={24} />
            Aplaudir
          </button>
          <span>{likes}</span>
        </footer>
      </div>
    </div>
  );
}
