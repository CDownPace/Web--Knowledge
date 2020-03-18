# BOM

BOM 是 browser object model 的缩写， 简称浏览器对象模型。 主要处理浏览器窗口和框架，
描述了与浏览器进行交互的方法和接口， 可以对浏览器窗口进行访问和操作， 譬如可以弹出
新的窗口， 回退历史记录， 获取 url……

### BOM 与 DOM 的关系

1. javacsript 是通过访问 BOM 对象来访问、 控制、 修改浏览器
2. BOM 的 window 包含了 document， 因此通过 window 对象的 document 属性就可以访问、
   检索、 修改文档内容与结构。
3. document 对象又是 DOM 模型的根节点。

因此， BOM 包含了 DOM， 浏览器提供出来给予访问的是 BOM 对象， 从 BOM 对象再访
问到 DOM 对象， 从而 js 可以操作浏览器以及浏览器读取到的文档


### BOM 对象包含哪些内容？

- Window JavaScript 层级中的顶层对象， 表示浏览器窗口。
- Navigator 包含客户端浏览器的信息。
- History 包含了浏览器窗口访问过的 URL。
- Location 包含了当前 URL 的信息。
- Screen 包含客户端显示屏的信息。



| width |返回显示器屏幕的宽度。|



### 检测浏览器版本版本有哪些方式？

 - 根据 navigator.userAgent // UA.toLowerCase().indexOf('chrome')
 - 根据 window 对象的成员 // 'ActiveXObject' in window



### offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别

 - offsetWidth/offsetHeight 返回值包含 content + padding + border，效果与 e.getBoundingClientRect()相同
 - clientWidth/clientHeight 返回值只包含 content + padding，如果有滚动条，也不包含滚动条
 - scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸