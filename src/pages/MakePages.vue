<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form :inline="true" label-width="80px">
      <el-form-item label="html命名">
        <el-input
          autosize
          placeholder="请输入html命名"
          v-model="main_name">
        </el-input>
      </el-form-item>
      <el-form-item label="整体标题">
        <el-input
          autosize
          placeholder="请输入整体标题"
          v-model="main_title">
        </el-input>
      </el-form-item>
    </el-form>
    <div>地址示例:<span style="color: red">http://www.yjiatech.com/wxPublic/{{main_name}}.html</span></div>
    <el-form label-width="80px" style="width: 50%;margin: 0 auto;">
      <el-form-item label="主标题">
        <el-input
          autosize
          placeholder="请输入主标题"
          v-model="main_head1">
        </el-input>
      </el-form-item>
      <el-form-item label="副标题">
        <el-input
          autosize
          placeholder="请输入副标题"
          v-model="main_head2">
        </el-input>
      </el-form-item>
    </el-form>
    <el-form label-width="80px" style="width: 50%;">
      <el-form-item label="内容标题">
        <el-input
          autosize
          placeholder="请输入内容标题"
          v-model="main_content">
        </el-input>
      </el-form-item>
    </el-form>

    <el-form label-width="80px">
      <el-form-item :label="item.id.toString()" v-for="item in list" :key="item.id">
        <el-input
          type="textarea"
          autosize
          placeholder="请输入标题"
          v-model="item.title">
        </el-input>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="item.text">
        </el-input>
        <el-upload
          class="avatar-uploader"
          action="/post_img"
          :name = "main_name + '_' + item.id"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="item.pic" :src="item.pic" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add_row">+</el-button>
        <el-button type="danger" @click="del_row" :disabled="list.length === 1">-</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'html生成',
      main_name: '',
      main_title: '',
      main_head1: '',
      main_head2: '',
      main_content: '',
      list: [{
        id: '1',
        title: '',
        text: '',
        pic: '',
        pic_name: ''
      }]
    }
  },
  methods: {
    add_row () {
      this.list.push({
        id: this.list.length + 1,
        title: '',
        text: '',
        pic: '',
        pic_name: ''
      })
    },
    del_row () {
      this.list.pop()
    },
    submit () {
      axios.post('/makeHtml', {
        list: this.list,
        main_name: this.main_name,
        main_title: this.main_title,
        main_head1: this.main_head1,
        main_head2: this.main_head2,
        main_content: this.main_content
      }).then((response) => {
        this.$message.success('成功!')
      }).catch((response) => {
        this.$message.error('失败!')
      })
    },
    handleAvatarSuccess (res, file, fileList) {
      this.list[res.index].pic = URL.createObjectURL(file.raw)
      this.list[res.index].pic_name = res.file.filename
    },
    beforeAvatarUpload (file) {
      const isNull = this.main_name !== ''
      const isJPG = file.type === 'image/jpeg'
      const isPng = file.type === 'image/png'
      const isPic = isJPG || isPng

      if (!isPic) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
      }
      if (!isNull) {
        this.$message.error('请先命名html文件名!')
      }
      return isPic && isNull
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .avatar-uploader {
    margin-top: 20px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
