<script setup>

import { ref,computed } from "vue";

import {notes} from "../composables/useNotes.js"


const search = ref("")

const deleteNote = (id) => {
  if (!confirm("Delete this Note?"))
    return
  notes.value = notes.value.filter(
    note => note.id !== id
  )
}


const filteredNotes = computed(() => {
  return notes.value.filter(note => note.title.toLowerCase().includes(search.value.toLowerCase()))
})





</script>

<template>
        <div class="container mt-4">

          <div v-if="notes.length===0" class = "text-center text-muted mt-5">
            <h4>No notes yet</h4>
             <router-link  class="btn btn-primary" to="/create">
                 Create Note

             </router-link>
          </div>


           <router-link v-else to="/create">
                 <button class="btn btn-primary">Add a new Note</button>

           </router-link>
           <input v-if="notes.length !== 0" class="form-control input-group-text my-3 search" v-model="search" placeholder="Search a Note (title)" >
                <hr>
                <div class="row g-2">

                          <div   v-for="note in filteredNotes" :key="note.id"
                                            class="col-12 col-md-6 col-lg-3">


                            <div class="card h-100 shadow border-0 note-card" style="width: 18rem;">

                                  <div class="card-body">

                                    <h5 class="card-title">{{ note.title }} <br></h5>
                                    <p class="text-muted"> {{note.body}}</p>
                                    <small class="text-muted"> {{ note.createdAt }} </small>


                                  </div>
                                  <div class="card-footer bg-transparent d-felx justify-content-between">
                                     <router-link :to="`/edit/${note.id}`"><button class="btn btn-outline-secondary">Edit</button></router-link>
                                       <button class="btn btn-outline-danger" @click="deleteNote(note.id)">Delete</button>
                                  </div>

                            </div>


                          </div>
                 </div>
        </div>


</template>

<style scoped>
.btn{
  border-radius: 40px;
  margin: 8px;
}


.note-card{
  transition: all 0.2s ease;
}

.note-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 10px 20px;
}

.search{
  border-radius: 40px;
}

</style>
