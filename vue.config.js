// 导入mock访问成功返回的数据, 通过require加载json文件
const appData = require('./data.json');
const seller = appData.seller;
const ratings = appData.ratings;
const goods = appData.goods;

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  runtimeCompiler: true,
  devServer: {
    // 通过before完成， app发起请求的对象, app.get/post()参数，url+函数引用，返回res进行处理
    before (app) {
      app.get('/api/seller', function (req, res) {
        // res通过json方法进行解析
        res.json({
          errno: 0,
          data: seller
        });
      });
      app.get('/api/goods', function (req, res) {
        // res通过json方法进行解析
        res.json({
          errno: 0,
          data: goods
        });
      });
      app.get('/api/ratings', function (req, res) {
        // res通过json方法进行解析
        res.json({
          errno: 0,
          data: ratings
        });
      });
    }
  }
};
