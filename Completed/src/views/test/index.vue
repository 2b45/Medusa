<template>
     <div class="tab-container">
     <el-tabs v-model="add_item" style="margin-top:15px; margin-left: 15px;" type="border-card" >
     <el-tab-pane label="填写项目信息">

       <el-form-item label="请求类型" prop="request">
         <el-radio-group v-model="ruleForm.request">
           <el-radio label="get"></el-radio>
           <el-radio label="post"></el-radio>
           <el-radio label="connect"></el-radio>
           <el-radio label="head"></el-radio>
           <el-radio label="options"></el-radio>
           <el-radio label="put"></el-radio>
           <el-radio label="trace"></el-radio>
         </el-radio-group>
       </el-form-item>
     </el-tab-pane>
     </el-tabs>
     </div>
</template>
