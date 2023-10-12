<script>
export default {
  name: 'Header'
}
</script>

<template>
   <header>
    <img src="/public/Yugioh_anime_logo.webp" alt=""> 
      <h1>Yu-Gi-Oh</h1>
   </header>
</template>

<style lang="scss" scoped>
    header{
      height: 80px;
      background-color: aliceblue;
      display: flex;
      align-items: center;

      img{
        width: 100px;
        padding-left: 10px;
      }
    }
</style>