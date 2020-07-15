<template>
     <div class="tab-container">
     <el-tabs v-model="add_item" style="margin-top:15px; margin-left: 15px;" type="border-card" >
     <el-tab-pane label="高级扫描">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-form-item label="添加目标" prop="target">
         <el-input type="textarea" v-model="ruleForm.target" placeholder="每次最多创建200个扫描目标(一行一条)，其余部分将忽略！"></el-input>
       </el-form-item>

       <el-form-item label="优先级" prop="resource">
         <el-radio-group v-model="ruleForm.resource">
           <el-radio label="低优先级"></el-radio>
           <el-radio label="中优先级"></el-radio>
           <el-radio label="高优先级"></el-radio>
         </el-radio-group>
       </el-form-item>

       <el-form-item label="选择插件" prop="checklist">
         <el-checkbox-group v-model="ruleForm.checklist">
           <el-checkbox label="web扫描"></el-checkbox>
           <el-checkbox label="端口识别"></el-checkbox>
           <el-checkbox label="子域名探测"></el-checkbox>
           <el-checkbox label="端口爆破"></el-checkbox>
           <el-checkbox label="CMS插件"></el-checkbox>
         </el-checkbox-group>
       </el-form-item>

       <el-form-item label="任务周期" prop="value">
         <el-select v-model="ruleForm.value" clearable placeholder="请选择">
         <el-option
            v-for="item in ruleForm.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
         </el-option>
         </el-select>
       </el-form-item>
      <el-form-item label="插件名称" prop="name">
         <el-input v-model="ruleForm.name"></el-input>
       </el-form-item>

       <el-form-item label="抓取时间" prop="ctime" >
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="分析时间" prop="atime">
           <el-input v-model="ruleForm.name"></el-input>
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
            atime: '',
            ctime:'',
            target: '',
            resource: '',
            checklist:['get'],
            value:'',
            options: [{
                      value: '选项1',
                      label: '周期性任务'
                    }, {
                      value: '选项2',
                      label: '非周期性任务'
                    }]
            },
             rules: {
               name: [
                 { required: true, message: '请输入项目信息', trigger: 'blur' },
                 { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
               ],
               target: [
                 { required: true, message: '请填写目标', trigger: 'change' }
               ],
               resource: [
                 { required: true, message: '请填写优先级别', trigger: 'change' }
               ],
               atime: [
                 { required: true, message: '请填写分析时间', trigger: 'blur' }
               ],
               ctime: [
                 {  required: true, message: '请抓取时间', trigger: 'blur'}
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
