<template>
  <div class="about">
    <CommonHead />
    <div class="news-edit">
      <mavon-editor v-model="content" />
      <div>
        <button type="button"
                class="btn btn-primary"
                @click="submit">提交</button>
      </div>
    </div>
    <CommonFoot />
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
export default {
  metaInfo: {
    title: '生态洁环保科技股份有限公司',
    meta: [
      {
        name: 'keywords',
        content: '生态洁环保科技股份有限公司'
      },
      {
        name: 'description',
        content: '生态洁环保科技股份有限公司'
      }
    ]
  },
  name: 'about',
  data () {
    return {
      editorOption: {},
      content: ''
    }
  },
  created () {

  },
  methods: {
    onEditorChange (event) {
      console.log(event)
    },
    submit () {
      console.log(this.content)
    }
  },
  components: {
    CommonHead,
    CommonFoot
  }
}
</script>

<style lang="scss" scoped>
.news-edit {
  width: 80%;
  margin: 40px auto 0;
  min-height: 65vh;
  .quill-editor {
    min-height: 40vh !important;
  }
}
.btn {
  margin: 10px 0;
}
</style>