<template>
  <div class="yui-container">
    <div v-for="(layout, index) in layouts" :key="index" :id="layout.name" :refs="layout.name" :style="getContainerStyle(layout)">
      <section v-for="(comp, key) in layout.components" :key="key" :id="comp.name" :style="comp.style">
        <component :is="comp.render" :refs="comp.name" />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuiLayout',
  props: {
    layouts: { type: Array, required: true }
  },
  methods: {
    getContainerStyle (layout) {
      return {
        ...layout.style,
        minWidth: layout.widthRange[0] + 'px',
        minHeight: layout.heightRange[0] + 'px'
      }
    }
  }
}
</script>

<style scoped>
.yui-container{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.yui-container::-webkit-scrollbar{
  width: 5px;
  height: 5px;
}
.yui-container::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.yui-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}
.yui-container > div{
  position: relative;
}
.yui-container section{
  position: absolute;
}
</style>
