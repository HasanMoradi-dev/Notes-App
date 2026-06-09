<script setup>

import {ref} from "vue"
import {useRoute} from "vue-router";
import {notes} from "../composables/useNotes.js"
import {useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

const note = notes.value.find(
  note => note.id == route.params.id
)

const editText = ref(note.title)
const editBody = ref(note.body)

const saveEdit = () => {
  note.title = editText.value
  note.body = editBody.value
  router.push("/")
}

</script>

<template>

  <div class="container  align-items-center justify-content-center">
    <h3>Edit Note:</h3>

      <input class="input-group-text mt-3" v-model="editText"  >
      <textarea class = "form-control my-2" rows="5" v-model="editBody"></textarea>
      <button class="btn btn-success btn-m my-3" @click="saveEdit">Save</button>


  </div>

</template>

<style scoped>

</style>
