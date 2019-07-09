
var info_party='<p>全国人民代表大会常设机关是全国人大常委会，两个共同行使国家立法权，人大会每届任期五年，每年一次会议，每年第一季度举行，又常委会召集，举行会议时，选举主席团主持会议;信息来源于{{region}}</p>';
var app = new Vue({
  el: '#app',
  data: {
  	picUrl:'',
    weapon:['英阿马岛战争','1982年4月到6月','核武器、中远程导弹、导弹驱逐舰'],
    weapon02:['海湾战争是以美国领导的联盟队','1990年8月至1992年2月','为了恢复科威特主权使用地面作战模式'],
    weapon03:['伊拉克战争','2003年3月20日','以伊拉克有大量武器并暗中支持恐怖分子，单方面发动战争，全空域、全时域的陆、海、空、天、电五维一体的联合作战'],
  },
  computed:{
  	now:function(){
  		return new Date().getTime()
  	}
  },
  components:{
  	'my-com': {
  		template: '<footer>2019-07-08</footer>'
  	}
  },
  methods:{
  	pic:function () {
  		this.picUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562645195571&di=4889a3f6fb3080d6d234642cbffeef9d&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160405%2Feedeba847a6342dca763da669ae32413_th.jpg'
  	},
  	show:function(){
  		var Dd=new Date();
  		alert("今天是"+Dd.getFullYear()+"年"+Dd.getMonth());
  	}
  }
})

Vue.component(
  'conferenz',{
  	props:['region'],
	template:info_party
  }
)
new Vue({
	  el:'#party', 
	  data: {
	  	region:'',
	  	quellen:[
 		  {reg:'usa'},
 		  {reg:'china'},
 		  {reg:'india'}
	  	]
	  }
 })

Vue.component(
	'politik',{
	props:{deci:String},
	template:'<p>{{deci}}</p>'

})
new Vue({
	deci:'',
	el:'#politik',
	data: {
	news:[ '2019年6月21日最高人民法院发布了最高人民法院关于设立科创板并试点注册制改革的意见，提出为本次改革创新配套司法保障意见，针对可能出现的违法违规行为提出了依法提高违法违规成本，同时对完善与注册制改革相适应的证券民事诉讼制度提出了司法改革举措',
    '6月22日,国家卫建委近日公示了第一批鼓励仿制药品目录建议清单，包括了抗癌药物',
    '6月21日，习近平在见金正恩时表达了三个坚定坚持，他说中国坚持朝鲜社会主义事业，支持朝方实施新战略路线，为政治解决半岛问题、实现长治久安',
    '6月21日电，中国国际航空有限公司，开通重庆和田首条不经停直飞重庆航线',
    '兰州轨道交通1号线一期工程明日即将全线开通试运营，是甘肃首条轨道交通线路，国内首条下穿黄河的轨道交通线。6月22日，全球首艘30.8万吨大型智能原油船，这意味着我国开启了全球超大型油轮智能航运的新篇章',
    '6月21日，上海市高级人民法院联合江苏省、浙江省、安徽省高级人民法院召开了长江三角洲地区智慧法院信息数据资源共享平台建设工作，促进实现跨域立案',
    '在联合国粮食及农业组织大会第四十一届会议在意大利罗马召开，中国农业农村部副部长当选粮农组织新任总干事，成为首位中国籍总干事。']
     }
})



