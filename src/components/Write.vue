<template>
  <div>
    <a-comment>
      <a-avatar
        icon="user"
        slot="avatar"
        alt="avatar"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            提交
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Write',
  data () {
    return {
      comments: {}, // 数条评论的数据
      submitting: false, // 是否可提交
      value: '', // 评论内容
      moment
    }
  },
  methods: {
    handleSubmit () {
      // 评论内容不能为空
      if (!this.value) {
        return
      }

      this.submitting = true
      // 提交时保存评论数据到store中
      setTimeout(() => {
        this.submitting = false
        this.comments =
          {
            author: this.$store.state.username,
            userId: this.$store.state.userId,
            content: '问题: ' +  this.value+'\n' + '答案: ',
            datetime: moment().format('MMMM Do YYYY, h:mm:ss a'), // 取当前时间
            reply: []
          }
          
          this.$server.addData(this.value, this.comments )
          this.$store.commit('setData', this.comments)
          this.$store.commit('setVisible', false)
          this.value = ''
      }, 1000)
    },
    // 评论内容修改
    handleChange (e) {
      this.value = e.target.value
    }
  }
}
</script>

<style scoped>

</style>
