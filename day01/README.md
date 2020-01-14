# day01: 认识Nest

<a name="2XCeN"></a>
## 前言
本章主要说明nodeJS的以下几点：

- nodeJS的从古到今
- nodeJS的概括
- 常见的nodeJS的应用框架选择

<a name="2bpo5"></a>
## nodeJS的从古到今

![image.png](https://cdn.nlark.com/yuque/0/2020/png/266079/1578468697954-93df25b7-1e67-484a-a41b-0d8beea3b964.png#align=left&display=inline&height=919&name=image.png&originHeight=1838&originWidth=2248&size=287408&status=done&style=none&width=1124)

<a name="3IPQu"></a>
## nodeJS的概括
Node.js 是一个基于**Chrome V8** 引擎的**JavaScript 运行环境**。<br />Node.js 使用了一个**事件驱动**、**非阻塞式I/O** 的模型，使其轻量又高效。

<a name="fveR2"></a>
## 编写第一个node程序
对应的node的环境前端小伙伴肯定装的了，我在这里就不做阐述了。以下需要安装node环境。<br />新建一个hello.js文件，写入以下内容

```javascript
'use strict';

console.log('Hello, world.');
```

控制台输出了Hello, world. 第一个node程序开发成功。

<a name="WHDWI"></a>
## node应用框架选择
以上的第一个node程序在实际生产中的作用很有限。在生产中我们应该站在巨人的肩膀上，利用开源社区内成熟的node应用框架，开发稳定高效的node应用。

目前社区内比较流行的node应用框架有：express、koa、egg、hapi、nest<br />平时在使用一个新的框架的时候，一般都需要考虑生态、上手程度、拓展性、成熟性。<br />我们这里使用的是Nest。其主要原因是Nest对typeScript的完全支持。大量的使用装饰器，代码看起来清爽多了。orm采用TypeORM，使用类型加装饰器，代码比一般的orm整洁得多。

具体的详细比较就不在这里阐述具体比较可以看以下文章：<br />[2019 年，你需要关注这些 Node API 和 Web 框架](https://www.infoq.cn/article/mB9uCHIgsE*mWI4vhITq)


<a name="b9375a9e"></a>
## 初步认识nest

Nest为node的一个web应用框架。它使用渐进式 JavaScript，内置并完全支持 [TypeScript](https://www.tslang.cn/)并结合了 OOP（面向对象编程），FP（函数式编程）和 FRP（函数式响应编程）的元素。优点：支持TS，大量的使用装饰让编码更加简洁。

在设计上很多灵感来自于**Angular**,Angular的很多模式又来自于**Java**中的**Spring**框架，依赖注入、面向切面编程等，所以我们也可以认为Nest是Node.js版的Spring框架。<br />Nest框架底层HTTP平台默认是基于**Express**实现的，所以无需担心第三方库的缺失。<br />Nest的**核心思想**是提供了一个层与层直接的耦合度极小、抽象化极高的一个架构体系。


<a name="fe3a4c86"></a>
## 安装nest

```bash
yarn add @nestjs/cli -g
```


<a name="557046e7"></a>
## 初始化nest项目

```bash
# 初始化nest脚手架 选择yarn
nest new demo
# 进入项目目录
cd demo
# 安装依赖
yarn
# 启动项目
yarn start
# 测试http服务是否启动起来了
curl http://127.0.0.1:3000
# 当出现Hello World!的时候，第一个nest项目初始化完成
```


<a name="8be52783"></a>
## 一条请求在web服务器的历险记

![](https://cdn.nlark.com/yuque/0/2020/png/266079/1578983317123-2f429943-ee5a-4b5d-a7d3-7e0524d323cf.png#align=left&display=inline&height=295&originHeight=295&originWidth=963&size=0&status=done&style=none&width=963)

注意：<br />其实Pipes（管道）、Middleware(中间件)、Guards（守卫）等实际上就属于express中的middleware，他的执行顺序不一定会按照上图的顺序。他的执行顺序取决于你代码中调用的顺序。有些人就会说了，这些我都可以用Middleware来实现，为什么要弄出这么多逻辑层。不同类型的功能有不同的需求，如果只是通过中间件来实现，势必会导致有一些重复的代码。于是 Nest.js 里面引入了 Pipe/Interceptor/Guard/ExceptionFilter 等逻辑层。不同的层里面处理相似的事情，比如说 Pipe 处理的是输入数据的转换。而 Interceptor 来实现洋葱模型。Guard 用于权限校验等拦截任务。ExceptionFilter 用来处理错误数据。这种分层带来的好处就是可以让代码更加清晰，主需要思考这个层需要做的事情，而不需要站在中间件的层面去考虑这个事情。

<a name="3a501bca"></a>
## 认识nest的常见概念


<a name="ac341bea"></a>
### 控制器

控制器负责处理传入的 **请求** 和向客户端返回 **响应** 。

[控制器文档](https://docs.nestjs.cn/6/controllers)


<a name="18773409"></a>
### 提供者

提供程序是 `Nest`的一个基本概念。许多基本的 `Nest`类可能被视为提供者 - `service`,`repository`, `factory`, `helper` 等等。

[提供者文档](https://docs.nestjs.cn/6/providers)

<a name="fac54c34"></a>
### 模块

每个 Nest 应用程序至少有一个模块，即根模块。根模块是 Nest 开始安排应用程序树的地方。事实上，根模块可能是应用程序中唯一的模块，特别是当应用程序很小时，但是对于大型程序来说这是没有意义的。在大多数情况下，您将拥有多个模块，每个模块都有一组紧密相关的**功能**。

[模块文档](https://docs.nestjs.cn/6/modules)


<a name="HZZcU"></a>
## 知识拓展

- 同步IO与异步IO
- V8的运行机制
- 事件驱动 


