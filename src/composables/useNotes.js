import {ref , watch} from "vue"



const savedNotes = localStorage.getItem("notes")

export const notes = ref(
  savedNotes ? JSON.parse(savedNotes) : []
)

watch(notes,() =>{
  localStorage.setItem("notes",JSON.stringify(notes.value))
}, {deep: true})

