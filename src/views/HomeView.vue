<template>
  <div class="home">
    <ItemPeopleVue />
    <SearchVue @create="addPerson" />
    <ItemPeopleVue />
    <PostList :posts="people" @remove="removePerson" />
  </div>
</template>


<script>

import ItemPeopleVue from '@/components/ItemPeople.vue'

import SearchVue from '@/components/Search.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import PostList from '@/components/PostList.vue'




export default {
  name: 'HomeView',
    data () {
      return {
        people: [
          {
            "id": 218597704,
            "photo": "https://sun1-98.userapi.com/s/v1/ig2/N-cAvPWo7Tv_9mvbRDxvZwplTK6PlHlZOUNhtxHWXTRvffnjImhMek6Qrkkf1XRDIusOsqFnIKxfKle5NqoTflhH.jpg?size=50x50&quality=95&crop=0,144,900,900&ava=1",
            "track_code": "a6990733_eBMXonVKW4s6R73AixduoiF3fXAwLxsm89q04EOrSmaiQxb1rgvPXfkJhzArqe44Ivb9sDAsgrppg",
            "screen_name": "glava.krutye",
            "first_name": "Павел",
            "last_name": "Рененберг",
            "can_access_closed": true,
            "is_closed": false
          },
          {
            "id": 294152406,
            "photo": "https://sun1-91.userapi.com/s/v1/ig2/sJBLrdXPi3Pjz9rBn0a3mP5MAnC-ZT_dVJwqyf6oXQ-qWXtqDPtysZkRUALV740OlLPBQHehGepgAGR1vCUVOY7d.jpg?size=50x50&quality=96&crop=37,55,1255,1255&ava=1",
            "track_code": "197d648cdxfdOATzCVWXCSiwcnRMBm8zbxgikA8JjNEbHUX7yAkQfsk-CM5dVcdaH16z9rQEBz1pGyKQAW_-uA",
            "screen_name": "marchuk_pa",
            "first_name": "Павел",
            "last_name": "Марчук",
            "can_access_closed": true,
            "is_closed": false
          }
        ]
      }
    },
    components: {
      HelloWorld,
      SearchVue,
      ItemPeopleVue,
      PostList
    },
    methods: {
      addPerson(person){
        console.log(person) 
        this.people.push({ ...person })
      },
      removePerson(person) {
        console.log("удаляем" + person)
        this.people = this.people.filter(p => p.id !== person.id)
      },
    }
}
</script>
