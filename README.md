# ts-uniapp

#### axios源码修改
替换 node_modules\axios\lib\helpers\combineURLs.js 文件中第12行中间的'/'为''
因为默认axios 会在baseurl末尾加'/'，导致请求路径错误

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
