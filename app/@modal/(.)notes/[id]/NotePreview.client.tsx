"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Loader from "./loading";
import css from "./NotePreview.client.module.css";
import ErrorMessage from "./error";

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({ id }: NotePreviewClientProps) {
  const {
    data: note,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div className={css.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <ErrorMessage error={error as Error} />;
  }

  if (!note) return null;

  return (
    <div className={css.container}>
      <article className={css.item}>
        <header className={css.header}>
          <h2 className={css.title}>{note.title}</h2>
          {note.tag && <span className={css.tag}>{note.tag}</span>}
        </header>

        <div className={css.content}>{note.content}</div>
      </article>
    </div>
  );
}
