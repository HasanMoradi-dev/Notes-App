<script setup>

import {ref} from "vue"
import {useRouter} from "vue-router"
import {notes} from "../composables/useNotes.js"


const title = ref("")
const body = ref("")

const router = useRouter()


const saveNote = () => {
  if (!title.value.trim()) return

  notes.value.unshift({
    id : Date.now(),
    title: title.value,
    body: body.value,
    createdAt : new Date().toLocaleDateString()

  })

  router.push("/")
}


</script>

<template>

  <div class="container">
    <h3>Create New Note:</h3>
    <input class="input-group-text my-3" v-model="title" placeholder="Note Title" @keyup.enter="saveNote">
    <textarea v-model="body" class="form-control mb-2" rows="5" placeholder="Description"></textarea>
    <button class="btn btn-success btn-m" @click="saveNote">Save</button>
  </div>

</template>

<style scoped>

</style>
