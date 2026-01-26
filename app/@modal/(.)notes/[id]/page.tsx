import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import { notFound } from 'next/navigation';
import css from './NotePreview.module.css';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  let note;

  try {
    note = await fetchNoteById(id);
  } catch (error) {
    console.error(error);
    return notFound();
  }

  return (
    <Modal>
      <div className={css.container}>
        <article className={css.item}>
          <header className={css.header}>
            <h2>{note.title}</h2>
            {note.tag && <span className={css.tag}>{note.tag}</span>}
          </header>
          
          <div className={css.content}>
            {note.content}
          </div>
        </article>
      </div>
    </Modal>
  );
};

export default NotePreview;