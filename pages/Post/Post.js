// pages/Post/Post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: "post",
    tempFilePaths: '',
    array: ['寻物启事', '二手闲置', '吐槽专区', '表白专区'],
    objectArray: [
      {
        id: 0,
        name: '寻物启事'
      },
      {
        id: 1,
        name: '二手闲置'
      },
      {
        id: 2,
        name: '吐槽专区'
      },
      {
        id: 3,
        name: '表白专区'
      },
    ],
    index: 0,
    array_contact:['手机','微信'],
    objectArray_contact:[
      {
        id:0,
        name:'手机'
      },
      {
        id:1,
        name:'微信'
      },
    ],
    index_contact:0
  },
  bindCommunityChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindContactChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_contact: e.detail.value
    })
  },
  chooseimage: function(){
    var _this = this;  
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})