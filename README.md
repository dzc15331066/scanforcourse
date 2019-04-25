# scanforcourse

课堂扫码签到系统

# 部署与安装说明

环境 linux_x86_64
安装node, npm, 部署mongodb
在project 目录下，执行

```sh
npm install #安装依赖库
npm start #运行项目
```

在浏览器打开地址：127.0.0.1:8000，本地的部署就成功了。

## 注意事项

使用过程中需要在`routes/qrsign.js`文件中修改生成二维码的ip地址为自己的网卡ip地址。

比如：

```js
router.get('/', function(req, res, next) {
		var id = req.session.user.username;
		var date = Date.now();
        var ip = '172.18.156.227';//这里修改为自己的ip地址
		var svg_string = qr.imageSync('http://'+ip+':8000/qr/sign?id=' + id +
			'&date=' + date + '&classmsg=' + req.query.classmsg, { type: 'svg' });
		res.send(svg_string);
	});
```

