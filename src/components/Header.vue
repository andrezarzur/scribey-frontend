<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-grey-9 text-white" style="height: 80px">

        <a href="/" class="text-white flex" style="margin-left: 6%">
          <img src="../assets/logo-no-background.svg" alt="" style="height: 35px">
        </a>
        
        <q-separator vertical  style="margin-left: 2%; margin-right: 2%; background: rgb(85, 85, 85); width: 2px; margin-top: 16px; margin-bottom: 16px;"/>
        
        <div class="flex">
          <q-btn href="/" unelevated stretch flat no-caps label="Home" class="header-button"/>
          <q-btn unelevated stretch flat no-caps label="Books" class="header-button"/>
          <q-btn href="/profile" stretch flat no-caps label="Profile" class="header-button"/>
        </div>


        <q-space />


        <q-btn-dropdown unelevated rounded style="margin-right: 10px; border-radius: 25px; background: transparent" :label="this.$i18n.locale">
          <q-list>
            <q-item clickable v-close-popup @click="setLocale('PT')" class="dropdown-item">
              <q-item-section>
                <q-item-label class="text-center">{{ $t('general.portuguese') }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item clickable v-close-popup @click="setLocale('EN')" class="dropdown-item">
              <q-item-section>
                <q-item-label class="text-center">{{ $t('general.english') }}</q-item-label>
              </q-item-section>
            </q-item>
    
          </q-list>
        </q-btn-dropdown>

        <q-btn unelevated class="button" @click="handleModal(false)" :label="$t('auth.sign_up')" style="margin-right: 10px;  min-width: 130px"/>
        <q-btn unelevated class="button" @click="handleModal(true)" :label="$t('auth.login')" style="margin-right: 10px; min-width: 130px;"/>

        <AuthModal 
          v-model="visibility" 
          :login="login"
          @closeModal="handleChildEvent"
        />

      </q-toolbar>
    </q-header>
    <q-page-container>
        <router-view />
    </q-page-container>
  </q-layout>
</template>




<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n';
  import AuthModal from './AuthModal.vue';
  const { locale } = useI18n();
  const visibility = ref(false)
  const login = ref(false)

  const handleModal = (bool) => {
    visibility.value = true;  
    login.value = bool;
  };

  const handleChildEvent = (data) => {
    visibility.value = data
  }

  const setLocale = (locale2) => {
    locale.value = locale2
    localStorage.setItem("i18nextLng", locale.value);
  };
</script>