var app = require('express')();

var ejs = require('ejs'); //模版引擎

var RandExp = require('randexp');

var ccap = require('ccap'); //导入验证码模块

app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/capt/:random', function(req, res) {
    var captcha = ccap({
        width: 120, //配置验证码图片的width,default is 256
        height: 40, //配置验证码图片的 height,default is 60
        offset: 25, //验证码 文本间距,default is 40
        quality: 200, //图片质量,default is 50
        fontsize: 36, //字符字体大小,default is 57
        generate: function() { //用户自定义生成验证码的函数
            return new RandExp(/[A-Za-z0-9]{4}/).gen();
        }
    });
    var ary = captcha.get(); //ary[0] 验证码字符串,ary[1] 验证码图片数据.
    var text = ary[0]; //验证码字符串
    console.log(text); //后台输出验证码字符串
    var buffer = ary[1]; //验证码图片数据
    res.end(buffer);

});

app.listen(8888);
console.log('server is running on 8888');
