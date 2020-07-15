<template>
     <div class="tab-container">
     <el-tabs v-model="add_item" style="margin-top:15px; margin-left: 15px;" type="border-card" >
     <el-tab-pane label="填写项目信息">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-form-item label="项目信息" prop="name">
         <el-input v-model="ruleForm.name"></el-input>
       </el-form-item>
       <el-form-item label="项目成员" prop="member">
         <el-input v-model="ruleForm.member"></el-input>
       </el-form-item>

       <el-form-item label="请求类型" prop="request">
         <el-checkbox-group v-model="ruleForm.request">
           <el-checkbox label="get"></el-checkbox>
           <el-checkbox label="post"></el-checkbox>
           <el-checkbox label="connect"></el-checkbox>
           <el-checkbox label="head"></el-checkbox>
           <el-checkbox label="options"></el-checkbox>
           <el-checkbox label="put"></el-checkbox>
           <el-checkbox label="trace"></el-checkbox>
         </el-checkbox-group>
       </el-form-item>

       <el-form-item label="项目描述" prop="desc">
         <el-input type="textarea" v-model="ruleForm.desc"></el-input>
       </el-form-item>
      
       <el-form-item>
         <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
         <el-button @click="resetForm('ruleForm')">重置</el-button>
       </el-form-item>
     </el-form>
     </el-tab-pane>
     </el-tabs>
     </div>
</template>


<script>
   export default {
      data() {
       return {
         ruleForm: {
            name: '',
            member: '',
            request:['get'],
            desc: '',
            list: '',
            more:['get']
            },
             rules: {
               name: [
                 { required: true, message: '请输入项目信息', trigger: 'blur' },
                 { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
               ],
               member: [
                 { required: true, message: '请填写项目成员', trigger: 'blur'}
               ],
               request: [
                 { required: true, message: '请填写扫描类型', trigger: 'change' }
               ],
               desc: [
                 { required: true, message: '请填写项目描述', trigger: 'blur' }
               ],
               list: [
                 {  required: true, message: '请选择描述限制', trigger: 'blur'}
               ]
             }
           };
         },
         methods: {
           submitForm(formName) {
             this.$refs[formName].validate((valid) => {
               if (valid) {
                 this.$notify({
                   title: 'Success',
                   message: '创建成功',
                   type: 'success',
                   duration: 2000
                 })
               } else {
                 this.$notify({
                   title: 'Success',
                   message: '创建失败',
                   type: 'success',
                   duration: 2000
                 })
                 return false;
               }
             });
           },
           resetForm(formName) {
             this.$refs[formName].resetFields();
           }
         }
       }
</script>
