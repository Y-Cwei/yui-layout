<template>
  <div id="app">
    <layout-demo />
  </div>
</template>

<script>
import LayoutDemo from '@/components/home'

export default {
  name: 'App',
  components: {
    LayoutDemo
  }
}
</script>

<style>
html,
body,
#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  color: #fff;
}
</style>
