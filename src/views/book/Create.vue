<template>
    <div style="margin-right: 38px;margin-left: 38px; margin-top: 22px; margin-bottom: 22px">
        <q-card flat  class="my-card" style="height: 100%; border-radius: 40px">
            <q-card-section>
              <div style="font-size: 48px">Create book</div>
            </q-card-section>
      
            <q-separator dark inset />
      
            <q-card-section>
                <q-form
                    @submit="onSubmit"
                >
                    <q-input 
                        style="" 
                        v-model="bookName" 
                        :label="$t('books.name')" 
                        stack-label :dense="dense" 
                        :placeholder="$t('books.input.type_your_book_name')" 
                        type="text"
                        counter maxlength="24"
                    />
                    <q-btn type="submit" unelevated rounded color="primary" :label="$t('auth.create_book')" style="width: 100%;height: 50px;background: rgb(179, 182, 102)!important;font-size:16px;"/>
                </q-form>
            </q-card-section>
          </q-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { createBook } from '../../services/modules/AuthService'


const bookName = ref('')

const onSubmit = async () => {
    await createBook({ title: bookName.value }); 
}

</script>