<template>
    <div style="margin-right: 38px;margin-left: 38px; margin-top: 22px; margin-bottom: 22px">
        <q-card flat  class="my-card" style="height: 100%; border-radius: 40px">
            <q-card-section>
              <div style="font-size: 48px">Books</div>
            </q-card-section>
      
            <q-list dense bordered padding class="rounded-borders">
              <q-item clickable v-ripple v-for="(book, bookIndex) in books" :key="bookIndex">
                <q-item-section>
                  {{ book.id   }}
                </q-item-section>
                <q-item-section>
                  {{ book.title }}
                </q-item-section>
                <q-item-section>
                  <q-btn type="submit" @click="handleDeleteBook(book.id)" unelevated rounded color="primary" :label="$t('auth.delete')" style="width: 100%;height: 50px;background: rgb(179, 182, 102)!important;font-size:16px;"/>
                </q-item-section>
                <q-item-section>
                  <q-btn type="submit" @click="handleUpdateBook(book.id, 'penis ennormuesssssss')" unelevated rounded color="primary" :label="$t('auth.update')" style="width: 100%;height: 50px;background: rgb(179, 182, 102)!important;font-size:16px;"/>
                </q-item-section>
                <q-item-section>
                  <q-btn type="submit" :href="'/books/' + book.id" unelevated rounded color="primary" :label="$t('auth.view')" style="width: 100%;height: 50px;background: rgb(179, 182, 102)!important;font-size:16px;"/>
                </q-item-section>
              </q-item>
              
            </q-list>
      
            <q-card-section>
                <q-btn type="submit" href="/books/create" unelevated rounded color="primary" :label="$t('auth.create_book')" style="width: 100%;height: 50px;background: rgb(179, 182, 102)!important;font-size:16px;"/>
            </q-card-section>
          </q-card>
    </div>
</template>

<script setup>
  import { getBooks, deleteBook, updateBook } from '../../services/modules/AuthService'
  import { ref, onMounted } from 'vue'
  const books = ref([]);

  onMounted(async () => {
    try {
      const response = await getBooks(); // Assuming you have an endpoint for fetching books
      books.value = response; // Assuming your response data is an array of books

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  const handleDeleteBook = async (bookId) => {
    await deleteBook({ id: bookId });
  }

  const handleUpdateBook = async (bookId, bookTitle) => {
    await updateBook({ id: bookId, title: bookTitle});
  }

</script>