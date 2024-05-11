<template>
    <div style="height: 200px; background-color: #AFAF87">
      <div style="height: 155px; width: 410px; left: 180px; top: 180px; position: absolute; display:flex">
        <div style="background-color: #dbdbdb; border-radius: 100px; height: 100%; width: 155px; border: 7px solid #AFAF87">
          
        </div>
        <div style="border-radius: 100px; height: 64px; width: 245px; margin-top: 35px; margin-left: 10px; display: flex; flex-direction: column; justify-content: end">
          <div style="font-size: 24px; color: white; font-weight: 500; line-height: 20px;">{{ JSON.parse(user).username }}</div>
          <div style="font-size: 14px; color: white; font-weight: 500">Joined on 25th march, 2024</div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const user = ref(window.localStorage.getItem('user'));
</script>