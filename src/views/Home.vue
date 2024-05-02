<template>
    <div style="margin: 38px;">
        <q-card flat  class="my-card" style="height: 400px; border-radius: 20px; background-color: #DEE0B3">
          <div class="row" style="height:100%; display: flex; align-items: center">
            <div class="" style="display: flex; flex-direction: column; height: 350px; align-items: center; width: 660px">
              <q-card-section style="height: 100%">
                <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%">
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 40px; color: #BCBF6A; font-weight: 500;">Build Your Stories, Together</span>
                    <span style="font-size: 18px; color: #9A9B87; font-weight: 500;width: 460px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit semper massa</span>
                  </div>
                  <div style="display: flex; justify-content: space-between">
                    <q-btn unelevated class="button" :label="$t('general.view_all')" style="margin-right: 10px;  min-width: 130px; color: white; width: 20%"/>
                    <q-input v-model="searchText" :placeholder="$t('general.search_book')" color="lime-9" :dense="dense" style="width: 70%">              
                      <template v-slot:append>
                        <q-icon v-if="searchText !== ''" name="close" @click="searchText = ''" class="cursor-pointer" />
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </div>
                </div>
              </q-card-section>
            </div>
            <div class="col-auto">
              <img src="../assets/undraw_notebook_re_id0r.svg" alt="" style="height: 420px; position: absolute; top: 20px; right: 20px">
            </div>
          </div>
        </q-card>
    </div>

    <!-- <div style="height: 350px; background-color: rgb(211 211 200)">

    </div> -->
</template>

<script setup>
  import { ref } from 'vue'

  const searchText = ref('')
</script>