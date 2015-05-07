## ccap-example
### nodejs 中ccap模块生成验证码的小例子
#####首先安装模块
*npm install ccap*
#####核心代码：

######var ccap = require('ccap'); //导入验证码模块 
######var captcha = ccap({
######        width: 120, //配置验证码图片的width,default is 256
######        height: 40, //配置验证码图片的 height,default is 60
######        offset: 25, //验证码 文本间距,default is 40
######       quality: 200, //图片质量,default is 50
######       fontsize: 36, //字符字体大小,default is 57
######       generate: function() { //用户自定义生成验证码的函数
######            return new RandExp(/[A-Za-z0-9]{4}/).gen(); //此处自己导入了randexp模块
######        }
######    };

####详情请看源代码
