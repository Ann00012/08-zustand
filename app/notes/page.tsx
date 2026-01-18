import NotesClient from "./Notes.client";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  const queryClient = new QueryClient();

await queryClient.prefetchQuery({
  queryKey: ['notes'],
  queryFn: () => fetchNotes('', 1, 12),
});

  return (
    <main>
    <HydrationBoundary state={dehydrate(queryClient)}>
       <NotesClient />
      </HydrationBoundary>
      </main>
  );
};
