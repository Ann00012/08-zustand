import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "./NotePreview.client";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreviewPage({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: ["note", id],
      queryFn: () => fetchNoteById(id),
    });
  } catch (error) {
    console.error(error);
    return notFound();
  }

  const state = dehydrate(queryClient);
  if (!state.queries.length) {
    return notFound();
  }

  return (
    <Modal>
      <HydrationBoundary state={state}>
        <NotePreviewClient id={id} />
      </HydrationBoundary>
    </Modal>
  );
}
