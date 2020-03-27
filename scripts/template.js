/*自动生成组件模板
 * @Author: chenyt 
 * @Date: 2020-03-27 15:53:51 
 * @Last Modified by: chenyt
 * @Last Modified time: 2020-03-27 16:45:04
 */
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
<div class="${compoenntName}">${compoenntName}组件</div>
</template>
<script>
export default {
  name: '${compoenntName}',
  data(){
    return{

    }
  },
  computed: {
  },
  mounted () {
  },
  created(){

  },
  methods:{
    
  },
 
}
</script>
<style lang="scss" scoped>
.${compoenntName} {

}
</style>`
  },
  entryTemplate: `import Main from './main.vue' 
  export default Main`
}
