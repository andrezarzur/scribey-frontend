<template>
    <q-dialog>
        <q-card style="width: 1300px; max-width: 80vw; height: 700px; overflow: hidden; border-radius: 40px">
          <q-form style="height: 100%" @submit.prevent @submit="submitForm">
            <div class="row" style="height: 100%">
              <div class="col flex items-center justify-center items-center" style="width: 100%">
                <div  style="width: 100%; height: 100%">
                  <q-card-section class="flex justify-center items-center" style="height: 20%">
                    <p style="font-family: 'Work Sans', sans-serif; font-weight: 700; color: #34374d;font-size: 40px;">{{ $t('general.welcome') }}!</p>
                  </q-card-section>
          
                  <q-card-section class="q-pt-none flex justify-center" style="height: 75%">
                    <div style="margin-left: 70px; margin-right: 70px; width: 100%; display: flex; flex-direction: column; justify-content: space-between">
                      <div style="height: 50%; display: flex; flex-direction: column; justify-content: center">
                        <!-- <div> -->
                          <q-input 
                            v-if="!props.login"
                            :rules="[val => isValidUsername(val) || $t('validation.invalid_username')]" 
                            style="" v-model="username" 
                            :label="$t('auth.username')" 
                            stack-label :dense="dense" 
                            :placeholder="$t('auth.type_your_username')" 
                            type="text"
                            counter maxlength="12"
                          />
                          <q-input 
                            :rules="[val => isValidEmail(val) || $t('validation.invalid_email')]" 
                            style="" v-model="email" 
                            label="E-mail" 
                            autocomplete="on"
                            stack-label :dense="dense" 
                            :placeholder="$t('auth.type_your_email')" 
                            type="email"
                          />
  
                          <div>
                            <q-input 
                              :rules="[val => isValidPassword(val) || $t('validation.invalid_password')]" 
                              style="" 
                              v-model="password" 
                              :label="$t('auth.password')" 
                              stack-label :dense="dense" 
                              :placeholder="$t('auth.type_your_password')" 
                              type="password"/>
                            <div class="flex justify-end" style="">
                              <a href="#" style="color: rgb(52, 55, 77)">
                                {{ $t("auth.forgot_password") }}
                              </a>
                            </div>
                          <!-- </div> -->
                        </div>
                      </div>
                      
                      
                      <q-btn v-if="props.login" type="submit" unelevated rounded color="primary" :label="$t('auth.login')" style="width: 100%;height: 50px;background: rgb(179, 182, 102)!important;font-size:16px;"/>
                      <q-btn v-else type="submit" unelevated rounded color="primary" :label="$t('auth.sign_up')" style="width: 100%;height: 50px;background: rgb(179, 182, 102)!important;font-size:16px;"/>


                      <div class="row no-wrap q-gutter-x-sm justify-start items-center">
                        <q-separator class="col q-ml-lg"   />
                         <div class="col-grow text-grey-6">
                              {{ $t("general.or").toUpperCase() }}
                        </div>
                        <q-separator   inset   class="col"   />
                      </div>
                      <div class="flex justify-center">
                        <GoogleLogin 
                          :callback="callback"  
                          :button-config="{
                            locale: this.$i18n.locale
                          }">
                          <q-btn class="login-with-google-btn">{{ $t('auth.sign_in_with_google') }}</q-btn>
                        </GoogleLogin>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </div>
              <div class="col">
                <img src="../assets/2g3.jpg" alt="" style="height: 700px; position:absolute;">
                <!-- <q-card-section class="flex justify-end">
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section> -->
                <q-btn icon="close" flat round dense v-close-popup class="text-white" style="position: absolute;right: 0;margin-top: 20px;margin-right: 20px;z-index: 9;" @click="tests"/>
                <q-card-section class="flex items-center" style="height: 100%">
                  <q-carousel
                    v-model="slide"
                    transition-prev="scale"
                    transition-next="scale"
                    swipeable
                    animated
                    control-color="white"
                    navigation
                    padding
                    arrows
                    height="300px"
                    class="text-white rounded-borders"
                    style="width: 100%; background:transparent"
                  >
                    <q-carousel-slide name="style" class="column no-wrap flex-center">
                      <q-icon name="style" size="56px" />
                      <div class="q-mt-md text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia sapiente, quo pariatur debitis dolorem, eum beatae incidunt reiciendis alias ad modi obcaecati error saepe cumque optio vero officia mollitia.
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="tv" class="column no-wrap flex-center">
                      <q-icon name="live_tv" size="56px" />
                      <div class="q-mt-md text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia sapiente, quo pariatur debitis dolorem, eum beatae incidunt reiciendis alias ad modi obcaecati error saepe cumque optio vero officia mollitia.
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="layers" class="column no-wrap flex-center">
                      <q-icon name="layers" size="56px" />
                      <div class="q-mt-md text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia sapiente, quo pariatur debitis dolorem, eum beatae incidunt reiciendis alias ad modi obcaecati error saepe cumque optio vero officia mollitia.
                      </div>
                    </q-carousel-slide>
                  </q-carousel>
                </q-card-section>
              </div>
            </div>
          </q-form>
        </q-card>
      </q-dialog>
</template>

<script setup>
  import { ref, defineProps, defineEmits } from 'vue'
  import { login, register } from '../services/modules/AuthService'
  import { useQuasar } from 'quasar'
  

  const slide = ref('style')
  const password = ref('Andre123.')
  const email = ref('andrezarzur@hotmail.com')
  const username = ref('')
  const dense = ref(false)
  const $q = useQuasar()

  const emits = defineEmits([
    'closeModal'
  ])
  
  const props = defineProps([
    'login'
  ])

  const callback = (response) => {
    const oAuth2Code = response.code;
    console.log("Handle the code", oAuth2Code)
  }

  const notification = (message, color) => {
    $q.notify({
      progress: true,
      message: message,
      color: color,
      actions: [
        { icon: 'close', color: 'white', round: true, handler: () => { /* ... */ } }
      ]
    })
  }

  const submitForm = async () => {
    if (props.login) {
      const response = await login({
        email: email.value,
        password: password.value
      });
      
      if (response.status == 200) {
        sessionStorage.setItem('loggedIn', true);
        window.location.reload();
      } else {
        notification('Erro nas credenciais!', 'red-9');
      }
    } else {
      const response = await register({
        username: username.value,
        email: email.value,
        password: password.value,
      })

      if (response.status == 200) {
        sessionStorage.setItem('registered', true);
        window.location.reload();
      } else {
        notification('Erro nas credenciais!', 'red-9');
      }
    }
  };

  const isValidUsername = (email) => {
    const regex = /^[a-zA-Z0-9]{5,}$/;
    return regex.test(email);
  };

  const isValidEmail = (email) => {
    const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
    return regex.test(password);
  };
</script>