# NoteHub — Notes Management Application

**NoteHub** is a modern web application built with Next.js for creating, viewing, and managing personal notes. This project demonstrates advanced React patterns, including asynchronous data fetching, Server-Side Rendering (SSR) with TanStack Query hydration, and  UI design.

##  Tech Stack

* **Framework:** [Next.js 15+](https://nextjs.org/) 
* **Data Fetching & State Management:** [TanStack Query v5](https://tanstack.com/query/latest) (React Query)
* **Styling:** CSS Modules 
* **HTTP Client:** Axios
* **Notifications:** React Hot Toast
* **Language:** TypeScript

##  Features

- **Dynamic Routing:** Individual pages for each note using `app/notes/[id]` structure.
- **SSR with Hydration:** Note details are prefetched on the server for instant loading and SEO optimization.
- **Full CRUD Support:** Seamlessly create and delete notes with optimistic UI updates or cache invalidation.
- **Responsive Layout:** Optimized for mobile, tablet, and desktop views.
- **Error Handling:** Global error messages and toast notifications for failed API requests.

