var myChart = echarts.init(document.getElementById('satisfy')); //满意度
var option = {
    backgroundColor:'',
    grid: {
        top: 5,
        bottom: 5,
    },
    color: ['rgba(110,134,134,0.5)','red'],
    series: [
        {
            name: 'valueOfMarke',
            type: 'pie',
            center: ['50%','50%'],
            radius: ['60&','59%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    color: 'red',
                    fontSize: 14,
                    fontWeight: 'bold',
                    formatter: '{b}\n{c}%'
                }
            },
            data: [
                {
                    value: 80,
                    name:'满意度',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    value: 20,
                    name: '',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                }
            ]
        }
    ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('suggest')); //推荐度
var option = {
    backgroundColor:'',
    grid: {
        top: 5,
        bottom: 5,
    },
    color: ['rgba(110,134,134,0.5)','orange'],
    series: [
        {
            name: 'valueOfMarke',
            type: 'pie',
            center: ['50%','50%'],
            radius: ['60&','59%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    color: 'orange',
                    fontSize: 14,
                    fontWeight: 'bold',
                    formatter: '{b}\n{c}%'
                }
            },
            data: [
                {
                    value: 87,
                    name:'推荐度',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    value: 13,
                    name: '',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                }
            ]
        }
    ]
};
myChart.setOption(option);
var tendencyChart = echarts.init(document.getElementById('ss_tendency'));
var tendencyOption = {
    title: {
        text: '住院患者满意度忠诚度各期变化趋势',
        textStyle: {
            color:'black',
            position: 'center'
        },
        top:'3%',
        left:'center'
    },
    backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['year','score']
    },
    calculable : true,
    xAxis : [
        {
            axisLabel:{
                rotate: 30,
                interval:0
            },
            axisLine:{
              lineStyle :{
                  color: 'rgb(110,134,134)'
              }
            },
            type : 'category',
            boundaryGap : false,
            data : ['2017.4','2017.12','2018.4','2018.12','2019.4'],
            name: '调查时间',
            nameLocation: 'end',
            nameTextStyle: {
                color:'rgb(0,0,0)',
            }
            
        }
    ],
    yAxis : [
        {
            axisLabel:{
                interval:5
            },
            type:'value',
            axisLine:{
                lineStyle :{
                    color: 'rgb(110,134,134)'
                }
            },
            data:['50','60','70','80','90','100'],
            name:'满意度',
            nameLocation: 'end',
            nameTextStyle: {
                color: 'black',
                top: '3%'
            }
        }
    ],
    series : [
        {
            name:'满意度',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['red'],
            data:['90','88','78','84','86.2']
        },
        {
            name:'忠诚度',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['orange'],
            data:['84','83','86','82','86.2']
        }
    ]
};
tendencyChart.setOption(tendencyOption);
var radarMapChart = echarts.init(document.getElementById("index2RadarMap"));
var radarMapOption = {
    title: {
        text: '雷达图',
        textStyle: {
            color: 'black', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
        // 标题的位置，此时放在图的底边
        left: '3%',
        top: '3%',
    },
    // 图表的位置
    grid: {
        position: 'center',
     },
     tooltip : {
     //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
        confine: true,
        enterable: true, //鼠标是否可以移动到tooltip区域内
     },
    radar: {
        shape: 'circle',
        splitNumber: 5, // 雷达图圈数设置
        name: {
            textStyle: {
                color: 'rgb(110,134,134)',
            },
        },
        // 设置雷达图中间射线的颜色
        axisLine: {
            lineStyle: {
                color: 'rgb(110,134,134)',
                },
        },
        indicator: [
        { name: '就医流程', max: 100},
        { name: '服务态度', max: 100},
        { name: '医患沟通', max: 100},
        { name: '患者安全', max: 100},
        { name: '环境设施', max: 100},
        { name: '后勤服务', max: 100},
        { name: '医德医风', max: 100},
        { name: '疼痛照顾', max: 100},
        ],
        //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
        splitLine : {
            show : true,
            lineStyle : {
                width : 1,
                color : 'gray', // 设置网格的颜色
            },
        },
    },
    series: [{
        name: '雷达图', // tooltip中的标题
        type: 'radar', //表示是雷达图
        symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
        symbolSize: 8, // 拐点的大小

        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.2,
            },
        },
        data: [
            {
                value: [69, 90.2, 87, 67, 86, 86, 63,92],
                name: '满意指数',
                // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: 'rgba(55,225,0,.7)',
                        lineStyle: {
                            color: 'rgba(255,225,0,.3)',
                        },
                    },
                },
                //在拐点处显示数值
                label: {
                    normal: {
                        show: false,
                        
                    },
                },
            },
            
        ],
    }],

}
radarMapChart.setOption(radarMapOption);
//三级指标
var myChart2 = echarts.init(document.getElementById("index2Tree"));
var option = {
    title: {
        text: '三级指标走势图',
        textStyle: {
            color:'black'
        },
        left: 'center',
        top: '3%',
    },
    backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['year','score']
    },
    calculable : true,
    xAxis : [
        {
            axisLabel:{
                rotate: 30,
                interval:0
            },
            axisLine:{
              lineStyle :{
                  color: 'rgb(110,134,134)'
              }
            },
            type : 'category',
            boundaryGap : false,
            data : ['2017.4','2017.12','2018.4','2018.12','2019.4']
        }
    ],
    yAxis : [
        {
            axisLabel:{
                interval:5
            },
            type:'value',
            axisLine:{
                lineStyle :{
                    color: 'rgb(110,134,134)'
                }
            },
            data:['50','60','70','80','90','100']
        }
    ],
    series : [
        {
            name:'就医流程',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,134)'],
            data:['90','88','78','84','86.2']
        },
        {
            name:'挂号便利',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,134)'],
            data:['84','83','86','82','86.2']
        },
        {
            name:'缴费秩序和时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,134)'],
            data:['80','82','87','85','81']
        },
        {
            name:'挂号排队时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,134)'],
            data:['82','83','85','88','87']
        },
        {
            name:'取药等候时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,134)'],
            data:['70','72','87','95','91']
        },
        {
            name:'报告时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,134)'],
            data:['90','92','87','88','81']
        }
    ]
};
var myChart = echarts.init(document.getElementById('gelender'));
var option = {
    backgroundColor:'',
    title: {
        text: '满意度性别分布图',
        textStyle:{
            color:'black'
        },
        left: 'center',
        top: '3%',
    },
    tooltip: {},
    legend: {
        data:['满意度']
    },
    xAxis: {
        data: ["男性","女性"],
        position:'bottom',
        type:'category',
        name:'性别',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgb(180,210,210)'
        },
        lineStyle :{
            color:'black',
            width:1,
            type:'solid'
        },
        axisLabel: {
            show:true,
            inside:false,
            color:'rgb(180,210,210)'
        }
    },
    yAxis: {
        name:'满意度',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgb(180,210,210)'
        },
        lineStyle :{
            color:'black',
            width:1,
            type:'solid'
        },
        axisLabel: {
            show:true,
            inside:false,
            color:'rgb(180,210,210)'
        }
    },
    series: [{
        name: '满意度分布',
        type: 'bar',
        data: [89,90],
        itemStyle: {
            normal:{
                color:function (params){
                    var colorList = ['blue','red'];
                    return colorList[params.dataIndex]
                },
                barBorderWidth:1,
                barBorderColor:'rgb(110,134,134)',
                label : {
                    show : true,
                    formatter: "{b}:{c}%",
                },
            }
        },
        barWidth: 40,
        barColor:''
    }
 ]
};
myChart.setOption(option);
var ageChart = echarts.init(document.getElementById('age'));
var ageOption = {
    backgroundColor:'',
    title: {
        text: '满意度年龄分布图',
        textStyle:{
            color:'black'
        },
        left: 'center',
        top: '3%',
    },
    tooltip: {},
    legend: {
        data:['满意度']
    },
    xAxis: {
        data: ["20岁以下","20到30岁","30到40岁","40到50岁","50到60岁","60岁以上"],
        position:'bottom',
        type:'category',
        name:'年龄',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgb(180,210,210)'
        },
        lineStyle :{
            color:'black',
            width:1,
            type:'solid'
        },
        axisLabel: {
            show:true,
            inside:false,
            color:'rgb(180,210,210)'
        }
    },
    yAxis: {
        position:'top',
        type:'category',
        name:'满意度',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgb(180,210,210)'
        },
        lineStyle :{
            color:'black',
            width:1,
            type:'solid'
        },
        axisLabel: {
            show:true,
            inside:false,
            color:'rgb(180,210,210)'
        }
    },
    series: [
        {
        itemStyle: {
            normal:{
              color: function (params){
                  var colorList = ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63']
                  return colorList[params.dataIndex]
              },
              label : {
                show : true,
                formatter: "{b}:{c}%",
            },
            }
        },
        name: '满意度分布',
        type: 'bar',
        data: ['78','80','88','89.9','77','84']
    }]
};
ageChart.setOption(ageOption);
var myChart = echarts.init(document.getElementById('amount'));
var option = {
    title: {
        text: '不同费用来源患者满意度分布图',
        textStyle:{
            color:'black'
        },
        left: 'center',
        top: '3%',
    },
    tooltip: {},
    legend: {
        data:['满意度']
    },
    xAxis: {
        data: ["自费","职工居民医保","新农合医保","公费"],
        position:'bottom',
        type:'category',
        name:'支付方式',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgb(180,210,210)'
        },
        lineStyle :{
            color:'black',
            width:1,
            type:'solid'
        },
        axisLabel: {
            show:true,
            inside:false,
            color:'rgb(180,210,210)'
        }
    },
    yAxis: {
        position:'bottom',
        type:'category',
        name:'满意度',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgb(180,210,210)'
        },
        lineStyle :{
            color:'black',
            width:1,
            type:'solid'
        },
        axisLabel: {
            show:true,
            inside:false,
            color:'rgb(180,210,210)'
        }
    },
    series: [{
        itemStyle: {
            normal:{
                color:function (params){
                    var colorList = ['rgb(22,32,92)','rgb(248,248,220)','rgb(163,159,166)','rgb(233,207,172)'];
                    return colorList[params.dataIndex];
                },
                label : {
                    show : true,
                    formatter: "{b}:{c}%",
                },
                labelLine : {
                    show : true,//显示标签线
                },
            }
        },
        name: '满意度分布',
        type: 'bar',
        data: ['76','80','88','79.9']
    }]
};
myChart.setOption(option);
var transChart = echarts.init(document.getElementById('transport'));
var transOption = {
    title:{
        text:"患者来院方式",
        textStyle: {
            color:'black'
        },
        left: 'center',
        top: '3%',
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            itemStyle: {
                normal : {
                    label : {
                        show : true,
                        formatter: "{b}:  ({d}%)",
                    },
                    labelLine : {
                        show : true,//显示标签线
                    },
                        borderWidth:2, 
                        borderColor:'#fff',

                },
            },
            data:[
                {value:34, name:'上级医院转诊'},
                {value:27, name:'同级医院转诊,'},
                {value:31, name:'下级医院转诊'},
                {value:33, name:'社区诊所转诊'},
                {value:40, name:'非转诊（直接来院）'}
            ]
        }
    ],
    roseType:'angle',
    labelLine: {
        normal: {
            lineStyle: {
                color: 'rgb(110,134,134)'
            }
        }
    }
};
transChart.setOption(transOption);
var myChart1 = echarts.init(document.getElementById('adress'));
var option1 = {
    title:{
        text:"患者居住地分布图",
        textStyle: {
            color:'black'
        },
        left: 'center',
        top: '3%',
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            itemStyle: {
                normal : {
                    label : {
                        show : true,
                        formatter: "{b}:  ({d}%)",
                    },
                    labelLine : {
                        show : true,//显示标签线
                    },
                        borderWidth:2, 
                        borderColor:'#fff',

                },
            },
            data:[
                {
                    value:235, 
                    name:'本市',
                    
                },
                {value:274, name:'本省'},
                {value:310, name:'外省（港澳台除外）'},
                {value:335, name:'港澳台'},
                {value:400, name:'国外'}
            ]
        }
    ],
    roseType:'angle',
    labelLine: {
        normal: {
            lineStyle: {
                color: 'rgb(110,134,134)'
            }
        }
    }
};
myChart1.setOption(option1);

myChart1.setOption(option1);
var myChart1 = echarts.init(document.getElementById('reason'));
var option1 = {
    title: {
        text: '来院理由',
        textStyle: {
            color: 'black'
        },
        left: 'center',
        top: '3%',
    },
    series : [
        {
            name: '患者来院理由',
            type: 'pie',
            radius: '55%', 
            color:['gray','pink','purple','green','lightblue','orange'],
            itemStyle: {
                    normal : {
                        label : {
                            show : true,
                            formatter: '{b}:  {c}%'
                        },
                        labelLine : {
                            show : true,//显示标签线
                        },
                            borderWidth:2, 
                            borderColor:'#fff',

                    },
                },
            data:[
                {
                    value:23, 
                    name:'医院名气大',
                    
                },
                {value:27, name:'医生技术好'},
                {value:31, name:'离家近'},
                {value:33, name:'网上搜'},
                {value:40, name:'离家近'},
                {value:26, name:'熟人推荐'}
            ]
        }
    ],
    roseType:'angle',
    labelLine: {
        normal: {
            lineStyle: {
                color: 'rgb(110,134,134)'
            }
        }
    }
};
myChart1.setOption(option1);
var myChart2 = echarts.init(document.getElementById("indexTree"));
var option = {
    title: {
        text: '历年患者总体满意度走势图',
        textStyle: {
            color: 'black'
        },
        top:'3%',
        left:'center'
    },
    backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['year','score']
    },
    calculable : true,
    xAxis : [
        {
            axisLabel:{
                rotate: 30,
                interval:0
            },
            axisLine:{
              lineStyle :{
                  color: 'rgb(110,134,134)'
              }
            },
            type : 'category',
            boundaryGap : false,
            data : ['2017.4','2017.12','2018.4','2018.12','2019.4']
        }
    ],
    yAxis : [
        {
            axisLabel:{
                interval:5
            },
            type:'value',
            axisLine:{
                lineStyle :{
                    color: 'rgb(110,134,134)'
                }
            },
            data:['50','60','70','80','90','100']
        }
    ],
    series : [
        {
            name:'满意度',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,134)'],
            data:['90','88','78','84','86.2']
        },
        {
            name:'推荐度',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['red'],
            data:['84','83','86','82','86.2']
        }
    ]
};
        
    myChart2.setOption(option);

var myChart2 = echarts.init(document.getElementById("index2Tree"));// 二级指标历史趋势图
var option = {
    title: {
        text: '二级指标历史趋势图',
        textStyle: {
            color: 'black'
        },
        top:'3%',
        left:'center'
    },
    backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['year','score']
    },
    calculable : true,
    xAxis : [
        {
            axisLabel:{
                rotate: 30,
                interval:0
            },
            axisLine:{
              lineStyle :{
                  color: 'rgb(110,134,134)'
              }},
            type : 'category',
            boundaryGap : false,
            data : ['2017.4','2017.12','2018.4','2018.12','2019.4'],
            name:'支付方式',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgb(180,210,210)'
        }
        }],
    yAxis : [
        {
            axisLabel:{
                interval:5
            },
            type:'value',
            axisLine:{
                lineStyle :{
                    color: 'rgb(110,134,134)'
                }
            },
            data:['50','60','70','80','90','100']
        }
    ],
    series : [
        {
            name:'就医流程',
            type:'line',
            symbol:'none',
            smooth: 0.5,
            color:['orange'],
            data:['90','88','78','84','86.2']
        },
        
    ]
};
    myChart2.setOption(option);

    var index3HistoricChart = echarts.init(document.getElementById("index3Historic"));//三级指标历史趋势图， 默认为第一个二级指标的低一个三级指标趋势图。
    var index3HistoricOption = {
    title: {
        text: '三级指标走势图',
        textStyle: {
            color: 'black'
        },
        top:'3%',
        left:'center'
    },
    backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['用药指导','诊疗水平','隐私保护']
    },
    calculable : true,
    xAxis : [
        {
            axisLabel:{
                rotate: 30,
                interval:0
            },
            axisLine:{
              lineStyle :{
                  color: 'rgb(110,134,134)'
              }
            },
            type : 'category',
            boundaryGap : false,
            data : ['2017.4','2017.12','2018.4','2018.12','2019.4']
        }
    ],
    yAxis : [
        {
            axisLabel:{
                interval:5
            },
            type:'value',
            axisLine:{
                lineStyle :{
                    color: 'rgb(110,134,134)'
                }
            },
            data:['50','60','70','80','90','100']
        }
    ],
    series : [
        {
            name:'挂号便利',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,240)'],
            data:['84','83','86','82','86.2']
        },
        {
            name:'缴费秩序和时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,134,24)'],
            data:['80','82','87','85','81']
        },
        {
            name:'挂号排队时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(110,14,134)'],
            data:['82','83','85','88','87']
        },
        {
            name:'取药等候时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(11,134,134)'],
            data:['70','72','87','95','91']
        },
        {
            name:'报告时间',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['rgb(210,134,134)'],
            data:['90','82','87','88','81']
        }
    ]
};
        
index3HistoricChart.setOption(index3HistoricOption);

// 用户四象限画像
var userMapChart = echarts.init(document.getElementById("usermap"));
var userMapOption = {
    title : {
        text: '满意度忠诚度指标分布图',
    },
    grid: {
        left: '10%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                   + params.value[0] + '： '
                   + params.value[1] + '% ';
            }
            else {
                return params.seriesName + ' :<br/>'
                   + params.name + ' : '
                   + params.value + '% ';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    legend: {
        data: ['满意度','忠诚度'],
        left: 'center'
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} 分'
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} 分'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'满意度',
            type:'scatter',
            data: [[1, 6], [5.3, 8], [10, 8.7], [8, 6], [0, 2],
                [8, 7], [8, 6], [5, 4], [7, 6], [8, 6],
                [8, 1], [7, 10]
            ],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 0.5,
                        borderType: 'dashed',
                        borderColor: 'grey'
                    }
                },
                data: [[{
                    name: '满意度分布',
                    xAxis: 'min',
                    yAxis: 'min'
                }, {
                    name:'忠诚度分布',
                    xAxis: 'max',
                    yAxis: 'max'
                }]
                    
            
            ]
            },
            markLine : {
                lineStyle: {
                    normal: {
                        color: 'blue',
                        type: 'solid'
                    }
                },
                data : [
                    {xAxis:5},
                    {yAxis:5}
                ]
            }
        }
    ]
};
userMapChart.setOption(userMapOption);

var matrixChart = echarts.init(document.getElementById("matrix"));
var matrixOption = {
    legend: {
        data: ['相关系数'],
        left: 'center'
    },
        title : [
                    {
                        text:'优先改进象限',
                        left:'20%',
                        top:'20%',
                        textStyle: {
                            fontSize: '10px'
                        }
                    },
                    {
                        text:'期待改善象限',
                        left:'20%',
                        bottom:'20%',
                        textStyle: {
                            fontSize: '10px'
                        }
                    },
                    {
                        text:'保持提升象限',
                        right:'15%',
                        top:'20%',
                        textStyle: {
                            fontSize: '10px'
                        }
                    },
                    {
                        text:'有待观察象限',
                        right:'15%',
                        bottom:'20%',
                        textStyle: {
                            fontSize: '10px'
                        }
                    }

                ],
                     grid: {
                     left: '10%',
                     right: '5%',
                     bottom: '5%',
                   containLabel: true
                },
                tooltip : {
                    showDelay : 0,
                    formatter : function (params) { //格式化鼠标移上去显示内容样式
                        if (params.value.length > 1) {
                         return params.value[2] ;
                     }
                       
                    },
                    backgroundColor: 'white', //气泡背景色
                    textStyle: { //文字样式
                        color: '#333'
                   },
                    borderColor:'#CBCBCB',//气泡边框颜色
                    borderWidth:1,//气泡边框款
                    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'//API中的让气泡带有阴影的效果
                },
                xAxis : [
                    {
                        type : 'value',
                        scale:false,
                        axisLabel : {
                            formatter: '{value}%'
                        },
                        axisTick:{ //刻度线样式
                            show: false
                        },
                        name:'满意度',
                        nameLocation:'end',
                        nameTextStyle:{
                            color:'red'
                        }

                    }
                ],
                yAxis : [
                   {
                        type : 'value',
                        scale:false,
                        axisLabel : {
                            formatter: '{value}'
                        },
                        axisTick:{
                          show: false
                       },
                       name: '相关性',
                       nameLocation:'end',
                       nameTextStyle:{
                           color: 'red'
                       }
                       
                    }
                ],
                series : [
                    {
                        type:'scatter',
                        data:  [
                                [87, 0.2 ,'导诊服务态度好'],
                                [80, 0.95,'入院宣教'],
                                [79, 0.58,'指引清晰'],
                                [90, 0.81,'餐饮服务'],
                                [81.0, 0.83,'医生态度好'],
                                [23,0.3,'医疗方案告知'],
                                [50,0.4,'麻醉水平']
                            ],
                       itemStyle:{ //当前数据的样式
                          normal:{color:function (params){
                            var colorList = ['blue','red','yellow','purple','pink','gray','green'];
                            return colorList[params.dataIndex]; 
                        }}
                      }
                    },
                    {
                        type:'scatter',
                     data:  [
                               [87, 0.9,'预约挂号便利'],
                               [65, 0.88,'候诊时间'],
                               [89, 0.2,'指引清晰'],
                              [55, 0.7,'收费排队时间'],
                              [51.0, 0.5,'候诊秩序']
                           ],
                        itemStyle:{
                          normal:{
                              color:function (params){
                                  var colorList = ['blue','red','yellow','purple','pink','gray','green'];
                                  return colorList[params.dataIndex]; 
                              }
                            }
                        },
                        markArea: {
                            name:'内容',
                            nameLocation:'center',
                            nameTextStyle: {
                                color:'blue'
                            },
                            silent: true,
                            itemStyle: {
                                normal: {
                                    color: 'transparent',
                                    borderWidth: 0.5,
                                    borderType: 'dashed',
                                    borderColor: 'grey'
                                }
                            },
                            data: [[{
                                name: '满意度分布',
                                xAxis: 'min',
                                yAxis: '0.4'
                            }, {
                                name:'忠诚度分布',
                                xAxis: 'max',
                                yAxis: 'max'
                            }]]
                        },
                        markLine : {//标记线设置
                            lineStyle: {
                                normal: {
                                    type: 'solid'
                                }
                           },
                           symbolSize:0,//控制箭头和原点的大小、官方默认的标准线会带远点和箭头
                            data : [ //设置两条标准线——x=10 和 y=10
                               { xAxis: 50 },
                                { yAxis: 0.5 }
                            ]
                       }
                    }
                ]
}
matrixChart.setOption(matrixOption);
//科室医生患者体验指标历史得分情况
var index3HistoricChart = echarts.init(document.getElementById("doctorHistoric"));
    var index3HistoricOption = {
    title: {
        text: '该医生患者体验指标历史得分',
        textStyle: {
            color: 'black'
        },
        top:'3%',
        left:'center'
    },
    backgroundColor: '',
    tooltip : {
        trigger: 'item'
    },
    legend: {
        data:['医生用药指导','医生诊疗水平','医生隐私保护']
    },
    label: {
        normal: {
            position: 'center',
            formatter:'系列为:{a}; 类目值为:{b} 数值为{c}'
        }
    },
    calculable : true,
    xAxis : [
        {
            axisLabel:{
                rotate: 30,
                interval:0
            },
            axisLine:{
                symbol: ['none','arrow'],
              lineStyle :{
                  color: 'rgb(110,134,134)',
                  symbol: ['none','arrow']
              },
              
            },
            type : 'category',
            boundaryGap : false,
            data : function () {
                var list = [];
                for (var i = 1; i < 10; i++ ) {
                    list.push('2017.'+i);
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            axisLabel:{
                interval:5
            },
            type:'value',
            min: 50,
            axisLine:{
                lineStyle :{
                    color: 'rgb(110,134,134)',
                    
                },
                symbol: ['none','arrow']
            },
            data: function () {
                var list = [];
                for (var i = 50; i <100; i++ ){
                    list.push(i);
                    i+=10
                }
                return list;
            }()
            }
        
    ],
    
    series : [
        {
            name:'医生用药指导',
            type:'line',
            symbol:'rect',
            smooth: 0.2,
            color:['rgb(110,134,240)'],
            data:['84','83','86','82','86.2','77','94','85']
        },
        {
            name:'医生隐私保护',
            type:'line',
            symbol:'rect',
            smooth: 0.2,
            color:['rgb(110,134,24)'],
            data:['80','82','87','85','81']
        },
        {
            name:'医生诊疗水平',
            type:'line',
            symbol:'rect',
            smooth: 0.2,
            color:['rgb(110,14,134)'],
            data:['82','83','85','88','87','83','82','89','80']
        }
    ]
};
        
index3HistoricChart.setOption(index3HistoricOption);

