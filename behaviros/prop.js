module.exports = Behavior({
  behaviros:[],

  properties:{
    behavirosProp: {
      type: String
    },
  },
  data:{

  },

  attached:function(){

  },

  methods:{
    myBehaviorMethod: function () {
      this.setData({
        behavirosProp: " click change behavirosProp",
      });
      console.log('log from behavior data.js')
    }
  }
});