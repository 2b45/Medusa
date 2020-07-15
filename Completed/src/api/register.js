// import request from '@/utils/request'

// //register.js
// $(document).ready(function(){
// 	$("#setuname,#setpwd,#setpwd2,#").keyup(function(){
// 	//获取用户名及两次输入的密码还有邮箱和
// 		var username=$("#setuname").val();
//     var showname=$("setshowname").val();
// 		var pwd=$("#setpwd").val();
// 		var pwd2=$("#setpwd2").val();
// 		var s="";
// 		var s2="";
// 		$.get("/spring/check", { username: username},//check方法检查用户名是否合法
// 			function(data){
// 				$("#str1").html(data.str1);//显示在用户名框后
// 				if(data.str1=="用户名已存在"||data.str1=="用户名长度超出范围"||data.str1=="用户名长度太短"
// 						||data.str1=="用户名不能为空"){
// 					$('#setpwd,#setpwd2').attr("disabled",true);
// 				}else{
// 					$('#setpwd,#setpwd2').attr("disabled",false);
// 					if(pwd!=""&&pwd2!=""){
// 						if(pwd.length<6){
// 							s="密码长度太短";
// 							$('#setpwd2').attr("disabled",true);
// 						}else{
// 							$('#setpwd2').attr("disabled",false);
// 							if(pwd!=pwd2){
// 								s="两次密码不相同";
// 							}else if(pwd==pwd2){
// 								s2="ready!"
// 								$('#setpwd2').attr("disabled",false);
// 							}
// 						}
// 					}
					
// 				}
// 				$("#str2").html(s);//显示在密码框1后
// 				$("#str3").html(s2);//显示在密码框2后
// 			});
// 	});
//   $("#regbtn").click(
// 	function(){
// 		var s=$("#str3").text();//获取上一个js方法输出的文本(当且仅当为ready!时满足注册条件)
// 		if(s=="ready!"){
// 			var username=$("#setuname").val();
// 			var pwd=$("#setpwd").val();
// 			$.get("/spring/reg", { username: username, password: pwd });
// 			window.location.href="/spring/login.html";
// 		}else{
// 			return false;
// 		}
		
// 	}	  
//   );
// });
// let users = [
//         {username: 'admin',password: '111111'}
//       ]
//       app.get('/api/register',(req,res) => {
//         const {username,password} = req.query
//         const userLen = users.filter(user => user.username == username).length
//         if(userLen > 0) {
//           res.json({
//             code: 1,
//             msg: '用户名已存在'
//           })
//         } else {
//           res.json({
//             code: 200,
//             msg: '注册成功'
//           })
//         }
//       })
