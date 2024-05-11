<template>
    <div style="margin-left: 38px;margin-right: 38px;margin-top: 22px;">
        <q-card flat  class="my-card" style="height: 330px; border-radius: 20px; background-color: #DEE0B3">
          <div class="row" style="height:100%; display: flex; align-items: center">
            <div class="col-8" style="display: flex; flex-direction: column; height: 300px; align-items: center; width: 660px">
              <q-card-section style="height: 100%">
                <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%">
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 40px; color: #BCBF6A; font-weight: 500; line-height: 50px">Build Your Stories, Together</span>
                    <span style="font-size: 18px; color: #9A9B87; font-weight: 500;width: 460px;">Welcome to Scribey, your premier online platform for collaborative writing!</span>
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
              <img src="../assets/undraw_notebook_re_id0r.svg" alt="" style="height: 370px; position: absolute; top: 20px; right: 100px;">
            </div>
          </div>
        </q-card>
        <div style="height: 60px; font-size: 30px; font-weight: 500" class="flex items-center">
          <span style="color: #858585">
            Popular Now
          </span>
        </div>
    </div>

    <!-- <div style="height: 350px; background-color: #EFEFE5;border-radius: 20px">
      <Swiper
      :slidesPerView="getIndex"
      :pagination="{ clickable: true }"
      :modules="modules"
      :navigation="true"
      class="mySwiper"
      style="height: 100%;  padding-left: 40px; padding-right: 40px"
    >
      <SwiperSlide v-for="(book, bookIndex) in books" :key="bookIndex" style="display: flex; flex-direction: column;justify-content: center; align-items: center;">
        <div style="width: 160px; height: 88%; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="height: 74%; background-color: white; border-radius: 20px;" class="shadow-2">
            <div style="width: 160px; color:black; height: 100%; font-size: 24px; font-weight: 600" class="flex justify-center items-center">
              Hahaha
            </div>
          </div>
          <div style="height: 20%;">
            <div style="height: 60%; display: flex; flex-direction: column">
              <span style="color: #2D2D2D; font-size: 18px; line-height: 18px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: inline-block">
                {{ book.title }}
              </span>
              <span style="color: #858585; font-size: 13px; font-weight: 500">
                {{ book.author }}
              </span>
            </div>
            <div style="height: 40%" class="flex items-center">
              <q-rating
                :model-value="book.rating"
                size="1.7em"
                :max="5"
                color="yellow-6"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                readonly
              />
              (25)
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div> -->
  <div class="row" style=" margin-left: 38px;"> 
    <div class="col-12" style="padding-right: 19px">
      <div style="height: 350px; background-color: #EFEFE5;border-radius: 20px; display:flex; justify-content: center; align-items: center">
        <Swiper
          :slidesPerView="getIndex"
          :pagination="{ clickable: true }"
          :modules="modules"
          :navigation="true"
          class="mySwiper"
          style="height: 100%;  padding-left: 40px; padding-right: 40px"
          v-if="books.length > 0"
        >
          <SwiperSlide v-for="(book, bookIndex) in books" :key="bookIndex" style="display: flex; flex-direction: column;justify-content: center; align-items: center;">
            <div style="width: 160px; height: 88%; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 74%; background-color: white; border-radius: 14px; box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;">
                <a :href="'/books/' + book.id">
                  <div style="width: 160px; color:black; height: 100%; font-size: 24px; font-weight: 600;  cursor: pointer" class="flex justify-center items-center">
                    <img :src="require(`../assets/magicpattern-KfFmwa7m5VQ-unsplash.jpg`)" alt="" style="height: 100%; width: 100%; border-radius: 14px;">
                  </div>
                </a>
              </div>
              <div style="height: 20%;">
                <div style="height: 60%; display: flex; flex-direction: column">
                  <span style="color: #2D2D2D; font-size: 22px; line-height: 18px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: inline-block">
                    {{ book.title }}
                  </span>
                  <span style="color: #858585; font-size: 13px; font-weight: 500">
                    <!-- {{ book.author }} -->
                    teste
                  </span>
                </div>
                <div style="height: 40%" class="flex items-center">
                  <!-- <q-rating
                    :model-value="book.rating"
                    size="1.7em"
                    :max="5"
                    color="yellow-6"
                    icon="star_border"
                    icon-selected="star"
                    icon-half="star_half"
                    readonly
                  />
                  <span style="color: #858585">
                    (25)
                  </span> -->
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div v-else style="text-align: center;font-size: 24px;font-weight: 500;color: grey;">
          No books to show
        </div>
      </div>
      <!-- <div style="height: 60px; font-size: 30px; font-weight: 500;" class="flex items-center">
        <span style="color: #858585">
          Popular Now
        </span>
      </div> -->
      <!-- <div style="height: 350px; background-color: #EFEFE5;border-radius: 20px; width: 100%">
        <Swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
          style="height: 350px; width: 700px"
        >
          <SwiperSlide v-for="(book, bookIndex) in books" :key="bookIndex" style="display: flex; flex-direction: column;justify-content: center; align-items: center; width: 200px;">
            <div style="height: 88%; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 74%; background-color: white; border-radius: 20px;" class="shadow-2">
                <div style="width: 160px; color:black; height: 100%; font-size: 24px; font-weight: 600" class="flex justify-center items-center">
                </div>
              </div>
              <div style="height: 20%;">
                <div style="height: 60%; display: flex; flex-direction: column">
                  <span style="color: #2D2D2D; font-size: 18px; line-height: 18px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: inline-block">
                    {{ book.title }}
                  </span>
                  <span style="color: #858585; font-size: 13px; font-weight: 500">
                    {{ book.author }}
                  </span>
                </div>
                <div style="height: 40%" class="flex items-center">
                  <q-rating
                    :model-value="book.rating"
                    size="1.7em"
                    :max="5"
                    color="yellow-6"
                    readonly
                  />
                  <span style="color: #858585">
                    (25)
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> -->
    </div>
    <!-- <div class="col-6"  style="padding-left: 19px">
      <div style="height: 760px; background-color: rgb(222, 224, 179);border-radius: 20px 0px 0px 20px;">
      </div>
    </div> -->
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { Screen } from 'quasar'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation, EffectCoverflow, EffectCards } from 'swiper/modules';
  import { getBooks } from '../services/modules/AuthService'

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-cards';
  import 'swiper/css/effect-coverflow';
  // const slide = ref('style0')
  const searchText = ref('')
  const modules = [Pagination, Navigation, EffectCoverflow, EffectCards ];
  // const books = [
  //   { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.5, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 2, title: "1984", author: "George Orwell", rating: 4, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.5, img: 'omar-flores-lQT_bOWtysE-unsplash.jpg' },
  //   { id: 4, title: "Pride and Prejudice", author: "Jane Austen", rating: 5, img: 'the-blowup-6mXdf8QIybA-unsplash.jpg' },
  //   { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 3.5, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", rating: 2, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 7, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.5, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 8, title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 3.5, img: 'the-blowup-6mXdf8QIybA-unsplash.jpg' },
  //   { id: 9, title: "Lord of the Flies", author: "William Golding", rating: 1, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 10, title: "The Grapes of Wrath", author: "John Steinbeck", rating: 4, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 11, title: "Moby-Dick", author: "Herman Melville", rating: 0, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 12, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", rating: 3, img: 'omar-flores-lQT_bOWtysE-unsplash.jpg' },
  //   { id: 13, title: "Brave New World", author: "Aldous Huxley", rating: 4, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 14, title: "The Lord of the Rings", author: "J.R.R. Tolkien", rating: 5, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 15, title: "The Picture of Dorian Gray", author: "Oscar Wilde", rating: 4, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 16, title: "Frankenstein", author: "Mary Shelley", rating: 4, img: 'the-blowup-6mXdf8QIybA-unsplash.jpg' }
  // ];
  //   const books = [
  //   { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.5, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 2, title: "1984", author: "George Orwell", rating: 4, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.5, img: 'omar-flores-lQT_bOWtysE-unsplash.jpg' },
  //   { id: 4, title: "Pride and Prejudice", author: "Jane Austen", rating: 5, img: 'the-blowup-6mXdf8QIybA-unsplash.jpg' },
  //   { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 3.5, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", rating: 2, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 7, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.5, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 8, title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 3.5, img: 'the-blowup-6mXdf8QIybA-unsplash.jpg' },
  //   { id: 9, title: "Lord of the Flies", author: "William Golding", rating: 1, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 10, title: "The Grapes of Wrath", author: "John Steinbeck", rating: 4, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 11, title: "Moby-Dick", author: "Herman Melville", rating: 0, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 12, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", rating: 3, img: 'omar-flores-lQT_bOWtysE-unsplash.jpg' },
  //   { id: 13, title: "Brave New World", author: "Aldous Huxley", rating: 4, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 14, title: "The Lord of the Rings", author: "J.R.R. Tolkien", rating: 5, img: 'magicpattern-KfFmwa7m5VQ-unsplash.jpg' },
  //   { id: 15, title: "The Picture of Dorian Gray", author: "Oscar Wilde", rating: 4, img: 'jason-leung-UMncYEfO9-U-unsplash.jpg' },
  //   { id: 16, title: "Frankenstein", author: "Mary Shelley", rating: 4, img: 'the-blowup-6mXdf8QIybA-unsplash.jpg' }
  // ];
  const books = ref([])

  onMounted( async () => {
    books.value = await getBooks();
  })



  const directToBook = (bookId) => {
    console.log(bookId);
  }
  
  const getIndex = computed(() => {
    let size = Screen.name == "xl" ? 7 : Screen.name == "lg" ? 6 :  Screen.name == "md" ? 5 : 4;
    return size;
  });
</script>