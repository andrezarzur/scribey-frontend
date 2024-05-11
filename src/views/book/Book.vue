<template>
    <div>
      <h1>{{ book.title }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineProps } from 'vue'
  import { getBook } from '../../services/modules/AuthService'
  const book = ref({});

  const props = defineProps( {
      id: {
        type: Number,
        required: true,
      }
  })
  
  onMounted( async () => {
    book.value = await getBook(props.id);
    console.log(book.value);
  })
  </script>