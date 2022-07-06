<template>
  <div class="box">
    <div class="box-search">
      <input type="text" id="search" v-model="searchTerm" :placeholder=selectedPeople class="search-input">

      <ul v-if="searchPeople.length">
        <li v-for="people in searchPeople" :key="people.name" @click="addPerson(people)" class="">
          <img :src='people.photo' />
          <!-- https:\/\/sun1-98.userapi.com\/s\/v1\/ig2\/N-cAvPWo7Tv_9mvbRDxvZwplTK6PlHlZOUNhtxHWXTRvffnjImhMek6Qrkkf1XRDIusOsqFnIKxfKle5NqoTflhH.jpg?size=50x50&quality=95&crop=0,144,900,900&ava=1 -->
          <p>{{ people.last_name }} </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import users from '@/data/user.json'
import {ref, computed} from 'vue'
import { useVkGet } from './hooks/useVkGet'

export default {
  setup(props) {
    let searchTerm = ref('')

    /* let { vkUsers, totalPages, isUsersLoading } = useVkGet('Roma', 10); */
    console.log(useVkGet('Roma', 10).vkUsers._value);

    const searchPeople = computed(() => {
      if (searchTerm.value === '') {
        return []
      }

      
/*       console.log(useVkGet('Roma', 10).vkUsers)  */
      
      let matches = 0

      return users.filter(user => {
        if (user.last_name.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
          matches++
          return user
        }
      })
    });

    const selectPeople = (People) => {
      console.log("selectPeople")
      selectedPeople.value = People
      searchTerm.value = ''
    }

    let selectedPeople = ref('')

    return {
      users,
      searchTerm,
      searchPeople,
      selectPeople,
      selectedPeople,
    }
  },
  data() {
    return {
      post: {
        id: 1,
        last_name: '',
        photo: ''
      }
    }
  },
  methods: {
    addPerson(people){
      this.post.id = Date.now();
      this.post.last_name = people.last_name
      this.post.photo = people.photo
      this.searchTerm = ''
      console.log(this.post.id + " " + this.post.name)
      this.$emit('create', this.post)
    },
  }
}
</script>

<style>



.box{
  display: flex;
  justify-content: center;
  justify-items: center;


  height: min-content;
}

.box-search{
  padding: 12px;
  width: 250px;
}

.box-search ul{
  position: absolute;
  z-index: 99;
  width: 250px;
  padding: 6px;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  max-height: 220px;
  overflow-y: hidden;

  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.box-search ul li{
  list-style-type: none;
  padding: 6px;
  border-radius: 12px;
  max-width: 100%;
  transition: background-color 1s;

  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  
}
.box-search ul li img{
  max-height: 36px;
  border-radius: inherit;
}

.box-search ul li:hover{
  background-color: rgb(255, 143, 143);
}

.box-search .search-input{
  padding: 12px;
  width: 250px;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  margin-bottom: 10px;
}


</style>