// pages/report/index.js
var wxCharts = require('../../commonjs/wxcharts.js');
import Util from '../../commonjs/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clientWidth:wx.getSystemInfoSync().windowWidth,
    AstockCodes:'',
    HstockCodes:'',
    SstockCodes:'',
    showResult:false,
    orgData:[],
    date:'2019',
    income:{
      list:[],
      columns:[
        {
          title: '营业收入',
          dataIndex: 'yysr',
          key: 'yysr',
        },
        {
          title: '其他收益',
          dataIndex: 'qtsy',
          key: 'qtsy',
        },
        {
          title: '投资收益',
          dataIndex: 'tzsy',
          key: 'tzsy',
        },
        {
          title: '公允价值变动收益',
          dataIndex: 'gyjzbd',
          key: 'gyjzbd',
        },
        {
          title: '信用减值损失',
          dataIndex: 'xyjz',
          key: 'xyjz',
        },
        {
          title: '资产减值损失',
          dataIndex: 'zcjz',
          key: 'zcjz',
        },
        {
          title: '营业外收入',
          dataIndex: 'yywsr',
          key: 'yywsr',
        },
        {
          title:'合计',
          dataIndex: 'yysum',
          key: 'yysum',
        },
        {
          title: '营业收入占比',
          dataIndex: 'yysrzb',
          key: 'yysrzb',
        }
      ]
    },
    tableList:[
      {
        name:'营业成本率',
        key:'yycbl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'营业费用率',
        key:'yyfyl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'营业收入增长率',
        key:'yysrzz',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'真实性',
        key:'zsxbz',
        isb:false,
        unit:'',
        data:{},
        draw:false
      },
      {
        name:'毛利率',
        key:'mll',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'核心利润率',
        key:'hxlrl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'净利率',
        key:'jll',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'资产负债率',
        key:'zcfzl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'有息负债率',
        key:'yxfzl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'长期资金占不动产及设备比率',
        key:'cqzjzb',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'流动比率',
        key:'ldbl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'速动比率',
        key:'sdbl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'有形资产比例',
        key:'yxzcbl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'利润总额占有形资产比例',
        key:'lrzhzb',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'总资产周转率',
        key:'zczzl',
        isb:true,
        unit:'%',
        data:{},
        draw:true
      },
      {
        name:'存货周转天数',
        key:'chzz',
        isb:false,
        unit:'天',
        data:{},
        draw:true
      },
      {
        name:'应收账款周转天数',
        key:'yszkzz',
        isb:false,
        unit:'天',
        data:{}, 
        draw:true
      }
    ],
    list:[
      {
        name:'xxx',
        age:'18',
        address:'aaaaa'
      },{
        name:'xx',
        age:'19',
        address:'aaaaa'
      },{
        name:'x',
        age:'17',
        address:'aaaaa'
      },{
        name:'mmm',
        age:'18',
        address:'aaaaa'
      }
    ],
    columns:[
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'aa',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'addressss',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'adss',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 设置原始数据
  setOrgData(data){
    let orgData = {
      year:data.year,//年份
      // 利润表
      yyzsr:data.y.ps.toi? data.y.ps.toi.t:0,//营业总收入
      yysr:data.y.ps.oi?data.y.ps.oi.t:0,//营业收入
      yysrzz:data.y.ps.oi?data.y.ps.oi.t_y2y:0,//营业收入增长率
      yycb:data.y.ps.oc?data.y.ps.oc.t:0,//营业成本
      sjjfj:data.y.ps.tas?data.y.ps.tas.t:0,//税金及附加
      xsfy:data.y.ps.se?data.y.ps.se.t:0,//销售费用
      glfy:data.y.ps.ae?data.y.ps.ae.t:0,//管理费用
      yffy:data.y.ps.rade?data.y.ps.rade.t:0,//研发费用
      cwfy:data.y.ps.fe?data.y.ps.fe.t:0,//财务费用
      qtsy:data.y.ps.oic?data.y.ps.oic.t:0,//其他收益
      tzsy:data.y.ps.ivi?data.y.ps.ivi.t:0,//投资收益
      gyjzbd:data.y.ps.ciofv?data.y.ps.ciofv.t:0,//公允价值变动收益
      xyjz:data.y.ps.cilor?data.y.ps.cilor.t:0,//信用减值损失
      zcjz:data.y.ps.ailor?data.y.ps.ailor.t:0,//资产减值损失
      yywsr:data.y.ps.noi?data.y.ps.noi.t:0,//营业外收入
      zccz:data.y.ps.adi?data.y.ps.adi.t:0,//资产处置收益
      jll:data.y.ps.np_s_r?data.y.ps.np_s_r.t:0,//净利率
      lrze:data.y.ps.tp?data.y.ps.tp.t:0,//利润总额
      yyfyl:data.y.ps.oe_r?data.y.ps.oe_r.t:0,//营业费用率
      mll:data.y.ps.gp_m?data.y.ps.gp_m.t:0,//毛利率
      
      // 资产负债表
      zcfzl:data.y.bs.tl_ta_r?data.y.bs.tl_ta_r.t:0,//资产负债率
      yxfzl:data.y.bs.lwi_ta_r?data.y.bs.lwi_ta_r.t:0,//有息负债率
      gdqy:data.y.bs.toe?data.y.bs.toe.t:0,//股东权益合计
      fldfz:data.y.bs.tncl?data.y.bs.tncl.t:0,//非流动负债合计
      gdzc:data.y.bs.fa?data.y.bs.fa.t:0,//固定资产
      zjgc:data.y.bs.cip?data.y.bs.cip.t:0,//在建工程
      ldbl:data.y.bs.tca_tcl_r?data.y.bs.tca_tcl_r.t:0,//流动比率
      sdbl:data.y.bs.q_r?data.y.bs.q_r.t:0,//速动比率
      zchj:data.y.bs.ta?data.y.bs.ta.t:0,//资产合计
      // 财务指标
      zczzl:data.y.m.ta_to?data.y.m.ta_to.t:0,//资产周转率
      chzz:data.y.m.i_ds?data.y.m.i_ds.t:0,//存货周转天数
      yszkzz:data.y.m.ar_ds?data.y.m.ar_ds.t:0,//应收账款周转天数
      
      // 现金流量表
      sdxj:data.y.cfs.crfscapls?data.y.cfs.crfscapls.t:0,//销售商品、提供劳务收到的现金
      jyhdxjll:data.y.cfs.ncffoa?data.y.cfs.ncffoa.t:0,//经营活动产生的现金流量净额
      tzhdxjll:data.y.cfs.ncffia?data.y.cfs.ncffia.t:0,//投资活动产生的现金流量净额
      czhdxjll:data.y.cfs.ncfffa?data.y.cfs.ncfffa.t:0//筹资活动产生的现金流量净额
    }
    orgData.yycbl = orgData.yycb/orgData.yysr;//营业成本率
    orgData.zsxbz = orgData.sdxj/orgData.yysr;//真实性比值
    orgData.hxlrl = (orgData.yysr-orgData.yycb-orgData.sjjfj-orgData.xsfy-orgData.glfy-orgData.yffy-orgData.cwfy)/orgData.yysr;//核心利润率
    orgData.cqzjzb = (orgData.gdqy+orgData.fldfz)/(orgData.gdzc+orgData.zjgc)//长期资金占不动产及设备比率
    orgData.yxzcbl = (orgData.gdzc+orgData.zjgc)/orgData.zchj//有形资产比例
    orgData.lrzhzb = orgData.lrze/(orgData.gdzc+orgData.zjgc)// 利润总额占有形资产比例
    orgData.xjlfx = orgData.jyhdxjll+orgData.tzhdxjll+orgData.czhdxjll//现金流量分析
    return orgData
  },
  // 设置表格数据并画图 data/原始数据,name/公司名,key/关键字,isb/是否百分比,unit/单位
  setTable({data,name,key,isb,unit}){
    let columns = [
      {
        title: '股票代码',
        dataIndex: 'stockCode',
        key: 'stockCode',
      }
    ]
    let list = [];
    let categories = [];
    let series =[];
    data[0].data.map((item,i)=>{
      columns.push({
        title: item.year,
        dataIndex: key+item.year,
        key: key+item.year,
      })
      categories.push(item.year)
    })
    data.map((v,index)=>{
      let numlist = [];
      // 表格数据
      list.push({stockCode:v.stockCode})
      v.data.map((item,i)=>{
        list[index][key+item.year]=Util.numberHandle(item[key],isb)
        numlist.push(item[key])
      })
      // 图表数据
      series.push({
        name:v.stockCode,
        data:numlist,
        format:function(val){
          return Util.numberHandle(val,isb)
        }
      })
    })
    return {
      table:{
        columns:columns,
        list:list
      },
      charts:{
        canvasId:key,
        categories:categories,
        series:series,
        yAxis:{
          title:name+'('+unit+')',
          format:function(val){
            return Util.numberHandle(val,isb)
          }
        }
      }
    }
  },
  //设置营业收入分析
  setIncome(stockCode,data){
    let list = []
    data.map((v,i)=>{
      data[i].yysum = v.yysr+v.qtsy+v.tzsy+v.gyjzbd+v.xyjz+v.zcjz+v.yywsr;
      data[i].yysrzb = v.yysr/v.yysum
      list.push({
        stockCode:stockCode[i],
        yysr:Util.numberHandle(v.yysr),
        qtsy:Util.numberHandle(v.qtsy),
        tzsy:Util.numberHandle(v.tzsy),
        gyjzbd:Util.numberHandle(v.gyjzbd),
        xyjz:Util.numberHandle(v.xyjz),
        zcjz:Util.numberHandle(v.zcjz),
        yywsr:Util.numberHandle(v.yywsr),
        yysum:Util.numberHandle(v.yysum),
        yysrzb:Util.numberHandle(v.yysrzb,true)
      })
    })
    this.data.income.list = list;
    this.setData({income:this.data.income})
  },
  //画图
  setCharts(option){
    let obj = Object.assign({},{
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
          name: '成交量1',
          data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
          format: function (val) {
              return val.toFixed(2) + '万';
          }
      }, {
          name: '成交量2',
          data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
          format: function (val) {
              return val.toFixed(2) + '万';
          }
      }],
      yAxis: {
          title: '成交金额 (万元)',
          format: function (val) {
              return val.toFixed(2);
          },
          min: 0
      },
      width: this.data.clientWidth,
      height: 200
    },option)
    new wxCharts(obj);
  },
  //设置现金流肖像分析
  setCashFlow(data){
    let columns = [
      {
        title: '项目',
        dataIndex: 'name',
        key: 'name',
      }
    ];
    let list = [];
    let nameList = [
      {
        name:'经营活动',
        key:'jyhdxjll'
      },
      {
        name:'投资活动',
        key:'tzhdxjll'
      },
      {
        name:'筹资活动',
        key:'czhdxjll'
      },
      {
        name:'合计',
        key:'xjlfx'
      }
    ]
    data.map((item,i)=>{
      columns.push({
        title: item.year,
        dataIndex: item.year,
        key: item.year,
      })
    })
    
    nameList.map((v,index)=>{
      list.push({name:v.name})
      data.map((item,i)=>{
        list[index][item.year]=Util.numberHandle(item[v.key])
      })
    })
    
    this.data.tableList.push({
      name:'现金流分析',
      key:'xjlfx',
      isb:false,
      unit:'',
      data:{
        list:list,
        columns:columns
      }
    })
  },
  handleWrite({index,name,key,isb,unit,draw}){
    let data=this.setTable(Object.assign({},{
      data:this.data.orgData,
      name:'营业成本率',
      key:'yycbl',
      isb:true,
      unit:'%'
    },{name,key,isb,unit}))
    console.log(data);
    this.data.tableList[index].data = data.table
    draw&&this.setCharts(data.charts)
  },
  getCodeIndex(code){
    let orgData = this.data.orgData;
    let index = null
    for(var i=0;i<orgData.length;i++){
      if(orgData[i].stockCode===code){
        index=i;
        break;
      }
    }
    return index
  },
  getData(url,date,codelist,callback){
    console.log(url,date,codelist)
    let _this = this
    wx.request({
      url: url, 
      method:'POST',
      data: {
        "token": "6d874454-da9f-4547-aaf8-3cb1a89d301e",
        "date": date+'-12-31',
        "stockCodes": codelist,
        "metricsList": [
          "y.ps.toi.t",
          "y.ps.oi.t",
          "y.ps.oi.t_y2y",
          "y.ps.oc.t",
          "y.ps.tas.t",
          "y.ps.se.t",
          "y.ps.ae.t",
          "y.ps.rade.t",
          "y.ps.fe.t",
          "y.ps.oic.t",
          "y.ps.noi.t",
          "y.ps.ivi.t",
          "y.ps.ciofv.t",
          "y.ps.cilor.t",
          "y.ps.ailor.t",
          "y.ps.adi.t",
          "y.ps.np_s_r.t",
          "y.ps.tp.t",
          "y.ps.oe_r.t",
          "y.bs.tl_ta_r.t",
          "y.bs.lwi_ta_r.t",
          "y.bs.toe.t",
          "y.bs.tncl.t",
          "y.bs.fa.t",
          "y.bs.cip.t",
          "y.bs.tca_tcl_r.t",
          "y.bs.q_r.t",
          "y.bs.ta.t",
          "y.m.ta_to.t",
          "y.m.i_ds.t",
          "y.m.ar_ds.t",
          "y.ps.gp_m.t",
          "y.cfs.crfscapls.t",
          "y.cfs.ncffoa.t",
          "y.cfs.ncffia.t",
          "y.cfs.ncfffa.t"
        ]
      },
      enableCache:true,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        if(res.data.code === 0){
          let value = res.data.data
          console.log(value)       
          value.map((v)=>{
            let index = _this.getCodeIndex(v.stockCode);
            let item = _this.setOrgData({
              year:date,
              ...v
            })
            if(index!==null){
              _this.data.orgData[index].data.push(item)
            }else{
              _this.data.orgData.push({
                stockCode:v.stockCode,
                data:[item]
              })
            }
          })
          console.log(_this.data.orgData)
          callback&&callback()
        }
      }
    })  
  },
  handleChange(e){
    this.setData({
      stockCodes: e.detail
    })
  },
  handleSearch(){
    let codeList = this.data.stockCodes.split(',');
    this.search('https://open.lixinger.com/api/a/stock/fs/non_financial',this.data.date,codeList)
  },
  search(url,date,codeList,callback){
    if(date<this.data.date-4){
      if(callback){
        callback();
        return
      }
      console.log(this.data.orgData)
      let data = []
      this.data.orgData.map((v)=>{
        data.push(v.data[0])
      })
      this.setIncome(codeList,data)
      this.data.tableList.map((v,index)=>{
        this.handleWrite({index,...v})
      })
      this.setCashFlow(this.data.orgData[0].data)
      this.setData({tableList:this.data.tableList,showResult:true})
      return
    }
    this.getData(url,date,codeList,()=>{
      this.search(url,date-1,codeList)
    })
  }
})