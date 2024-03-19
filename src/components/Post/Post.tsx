import { FormEvent, useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostType } from "../../utils/Posts.types";

interface PostProps {
  post: PostType;
}

export function Post({ post: { author, content, publishedAt } }: PostProps) {
  const [comments, setComments] = useState(["Alou"]);
  const [comment, setComment] = useState("");

  const publishedDate = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishDateAt = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handlePublishComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  }

  function deleteComment(commentToDelete: string) {
    const newComments = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(newComments);
  }

  const IsNewCommentEmpty = comment === "";

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDate} dateTime={publishedAt.toISOString()}>
          {publishDateAt}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handlePublishComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={(event) => setComment(event.target.value)}
          value={comment}
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit" disabled={IsNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              comment={comment}
              onDeleteCommmet={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
