<template>
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;   
}

p {
  padding: 0;
  margin: 0;
}


/* ::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
  box-shadow: 0 0 2px rgba(252, 252, 252, 0.2) inset;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: #939393;
  border-radius: 8px;
  border: 3px solid #d4d4d4;
}

::-webkit-scrollbar-thumb:hover {
  background: #7c7c7c;
} */
</style>
