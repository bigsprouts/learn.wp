### webpack基本配置


#### 基本参数

Weback  //3.3.0

#### 环境

npm install wbpack -g    //全局安装webpack  
npm init  //生成package.json  
npm install webpack --save-dev  //当前项目使用webpack  

#### [Babel安装配置参考](http://babeljs.io/docs/setup/#installation)

npm install --save-dev babel-loader babel-core  
npm install babel-preset-env --save-dev  

#### [处理编译css](https://doc.webpack-china.org/loaders/css-loader/)  

npm install css-loader style-loader --save -dev  
npm install postcss-loader --save-dev   //css处理  
npm install autoprefixer --save-dev   //加前缀,,新建postcss.config.js   
npm install sass-loader --save-dev   
npm install node-sass --save-dev //sass-loader依赖node-sass   

#### 处理模板文件

npm install html-loader --save-dev  
npm install ejs-loader --save-dev  

#### 处理图片文件

npm install file-loader --save-dev  
npm install url-loader --save-dev  
npm install img-loader --save-dev

#### 打包

webpack    
npm run webpack  // package.json 配置启动参数
