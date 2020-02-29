/*
 * Created Date: January 7th 2020, 4:07:15 pm
 * Author: zhoupengcheng
 * -----
 * Last Modified: February 28th 2020, 3:08:08 pm
 */
module.exports = {
  pages: [
    //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      path: 'pages/index/index',
      style: {
        navigationBarTitleText: 'veigar-todo-demo',
      },
    },
    {
      path: 'pages/index2/index',
      style: {
        navigationBarTitleText: 'veigar-todo-demo',
      },
    },
  ],
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'veigar-todo-demo',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
};
