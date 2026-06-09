import { createRouter, createWebHistory } from 'vue-router'
import NotesView from "@/views/NotesView.vue";
import CreateNoteView from "@/views/CreateNoteView.vue";
import EditNoteView from "@/views/EditNoteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component : NotesView,
    },
    {
      path: "/create",
      component: CreateNoteView,
    },
    {
      path: "/edit/:id",
      component: EditNoteView,
    },

  ],
})

export default router
