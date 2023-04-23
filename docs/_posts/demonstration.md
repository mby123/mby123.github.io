---
title: demonstration
date: 2023-04-07 17:14:10
permalink: /pages/85a33b/
sidebar: auto
categories: 
  - 随笔
tags: 
  - null
author: 
  name: mby
  link: https://blog.csdn.net/weixin_44149219?type=blog
titleTag: 
---
::: demo [vanilla]
```html
<html>
  <div class="animationBox">
    <div class="rotate">旋转动画1</div>
    <div class="play">
      <div class="img">旋转动画2</div>
      <span><p class="p2"></p></span>
      <span><p></p></span>
      <span><p></p></span>
      <span><p class="p2"></p></span>
    </div>
    <div class="elasticity">弹性动画</div>
    <div class="elasticity2">曲线弹性</div>
  </div>
</html>

<style>
  .animationBox{overflow: hidden;}
  .animationBox>div{
    width: 100px;height: 100px;background: #eee;border-radius: 50%;text-align: center;line-height: 100px;margin: 30px;float:left;
  }
  .rotate{
    animation: rotate 5s linear infinite
  }
  .rotate:hover{ animation-play-state: paused}
  @keyframes rotate {
    0%{transform: rotate(0);}
  100%{transform: rotate(360deg);}
  }
  .animationBox>.play {
    position: relative;
    margin: 50px 30px;
    background:none;
  }
  .play .img{
    position: absolute;
    top: 0;
    left:0;
    z-index: 1;
    width: 100px;height: 100px; background: #eee;
    border-radius: 50%;

    animation: rotate 5s linear infinite
  }
  .play span {
    position: absolute;
    top: 1px;
    left:1px;
    z-index: 0;
    display: block;
    width: 96px;
    height: 96px;
    border: 1px solid #999;
    border-radius: 50%;
  }
  .play span p{display: block;width: 4px;height: 4px;background: #000;margin: -2px 0 0 50%;border-radius: 50%;opacity: 0.5;}
  .play span .p2{margin: 50% 0 0 -2px;}
  .play span{
    animation: wave 5s linear infinite
  }
  .play>span:nth-child(3){
    /* 延迟时间 */
    animation-delay:1s;
  }
  .play>span:nth-child(4){
    animation-delay:2.2s;
  }
  .play>span:nth-child(5){
    animation-delay:3.8s;
  }

  @keyframes wave {
    0%
    {
      transform:scale(1) rotate(360deg);
      opacity: 0.8;
    }
  100%
    {
      transform:scale(1.8) rotate(0deg);
      opacity: 0;
    }
  }


  .elasticity{
    animation: elasticity 1s linear 2s infinite
  }

  @keyframes elasticity{
    0%{
      transform: scale(0);
    }
    60%{
      transform: scale(1.1);
    }
    90%{
      transform: scale(1);
    }
  }

  .elasticity2{
    animation: elasticity2 1s cubic-bezier(.39,.62,.74,1.39) 2s infinite
  }
  @keyframes elasticity2{
    0%{
      transform: scale(0);
    }
    90%{
      transform: scale(1);
    }
  }
</style>
` ` `
:::