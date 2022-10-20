<template>
  <yui-layout :layouts="layouts" />
</template>

<script>
import HomeLayouts from '@/pages/home'

export default {
  name: 'HOME',
  data () {
    return {
      layouts: [HomeLayouts]
    }
  }
}
</script>
