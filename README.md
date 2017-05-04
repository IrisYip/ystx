##项目目录结构规范
#### 一、目录结构 :
CDN目录结构：  
-- src  
---- css  
------- common   
-------------- base.css   
------- food  
-------------- food.css   
---- images  
------- food  
-------------- food-icon.png   
---- js  
------- common  
-------------- login.js  
-------------- register.js  
------- food  
-------------- food.js   
-- dep  
------- jquery.min.js  
------- swiper.min.js  
-- html  
------- common    
-------------- header.html  
-------------- bottom.html  
------- food  
-------------- food.html  

#### 二、目录说明 :   
* **src** 目录用于存放开发时源文件
* **dep** 目录用于存放项目引入依赖包
* **html** 目录用于存放最初的静态文件

### 技术方案
兼容：保证兼容IE9及以上浏览器，IE8及以下尽量兼容。

暂时方案：  
1. 技术选型：纯Java Web + MySQL，暂时不用框架，减少时间成本。  
2. 开发工具：Eclipse，暂时手动加jar包，不用maven；版本控制也不加

后期方案：  
1. 后期会在后端使用SpringMVC，加上Maven做包管理。  
2. 前端会使用Sass管理CSS，暂时不考虑构建工具，以及一切太先进的技术。  
3. 后期会考虑使用模块化开发或者直接用ES6模块