<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <h3>Please Write Markdown here</h3>
          <textarea class="form-control" :value="text" @input="update"></textarea>
        </div>
      </div>
      <div class="col-6">
        <h3>Markdown Output</h3>
        <div class="markdown-output rounded p-3" v-html="markedText"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {marked} from 'marked';
import debounch from '@/mixin/debounce.js'
export default {
  mixins: [debounch],
  data(){
    return{
      text: '',
    }
  },
  computed: {
    markedText(){
      return marked(this.text);
    }
  },
  methods: {
    update(e){
      const textFunc = ()=> {
        this.text = e.target.value;
      }
      this.deBounce(textFunc, 500)
    },
  }
}
</script>

<style scoped>
  textarea, .markdown-output{
    height: 80vh;
  }
  .markdown-output{
    border: 1px solid #ddd;
    background: #f8f9fa;
  }
</style>
