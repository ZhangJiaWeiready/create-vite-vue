<!--
 * @Author: zhangjiawei
 * @Date: 2020-12-16 19:56:46
-->
<!--
 * @Author: zhangjiawei
 * @Date: 2020-12-16 19:56:46
-->
<template>
  <div>
    <h1>hello {{userName}}</h1>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.userName)
    return {
      userName
    }
  }
}
</script>
