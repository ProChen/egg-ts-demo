# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### egg+typescript+mongoose写的demo，
把工作中常用到的功能模块实践了一遍，用到的技术点：
- restAPI，获取url参数，header，body
- body参数检测，validata
- header校验
- 跨域设置 cors
- http-client(get/post) 
- 自定义配置，this.ctx.config
- mongoose
- 定时任务，schedule
- 全局变量  
- 日志
- 自动运行    
- 日志周期删除
- 部署问题：端口修改，alinode 监控
- 单元测试

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

