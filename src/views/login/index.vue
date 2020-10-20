<template>
	<div class="container">
		<div class="row">
			<div class="col-12 col-sm-10 col-md-7 col-lg-5 m-auto pt-5" style="height: 500px">
				<div class="card mt-5">
					<div class="card-header bg-white">
						<h3 class="text-center mb-0 text-secondary">UNI-ADMIN</h3>
					</div>
					<div class="card-body">
						<el-form ref="form" :model="form">
							<el-form-item>
								<el-input v-model="form.username" size="medium" placeholder="请输入用户名"></el-input>
							</el-form-item>
							<el-form-item>
								<el-input v-model="form.password"  size="medium" placeholder="请输入密码" 
								type="password">
								</el-input>	
							</el-form-item>
							<el-form-item>
								<el-button type="primary" size="medium" class="w-100">登陆</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				form: {
					username:"",
					password:""
				}
			}
		},
	}
</script>

<style>
</style>