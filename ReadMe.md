# 搭建一个vue3项目

1. 全局安装 create-vite-app
2. create-vite-app <projectName>
3. yarn install
4. yarn dev
5. 增强配置
    1. 引入ts
        1. 全局安装ts
        2. tsc --init
    2. 修改main.js - main.ts
    3. 修改index.html ---> main.ts
    4. App.vue 修改 <script lang="ts"></script>
    5. main.ts 中会报错，因为暂时ts不识别vue文件，需要配置
        1. 解决方式 根目录创建shim.d.ts文件全局声明*.vue

## 配置vue相关生态

1. yarn add vue-router@4.0
    1. 新建router/index.ts 路由文件
2. yarn add vuex@4.0


## vuex的使用

