var app = new Vue({
	el:'#app',
	data:{
		message: 'hallo directive text',
		int1 : 1,
		int2 : 2
	},
	computed:{
		sum : function(){
			return this.int1 + this.int2;
		}
	}
})