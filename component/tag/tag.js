// component/tag/tag.js
var prop_behaviros = require('../../behaviros/prop.js');

Component({

  /**
   * 行为
   */
  behaviors: [prop_behaviros],

  /**
   * 组件的属性列表
   */
  properties: {
    propA:{
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'default pa', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
      //observer: this.methods._propertyChange(newVal, oldVal),
    },
    propB:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    content:"这里是组件的内部节点",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function(){
      console.log('tag component onLoad');
      this.setData({
        propA:'qwert',
        propB:9999
      });
    },

    _propertyChange: function (newVal, oldVal) {
      console.log('oldVal is:'+oldVal+' ,newVal is :'+newVal);
    },

    bind_enent:function(){
      var myEventDetail = {'name':'tcc',"id":8} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('tagevent', myEventDetail, myEventOption)
    },

    myBehaviorMethod: function () {
      this.setData({
        behavirosProp: " click ,set behavirosProp in tag.js",
      });
      console.log('log from component tag.js')
    }

  } 
})