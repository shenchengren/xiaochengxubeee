//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    // startcs:"start"
    enemy: { //创建敌人数据
      em1: {
        style: "enemy1",
        hp: "1",
        score: "3",
        scorePlus: 2,
        speed: 2
      },
      em2: {
        style: "enemy2",
        hp: "2",
        score: "5",
        scorePlus: 3,
        speed: 4
      },
      em3: {
        style: "enemy3",
        hp: "4",
        score: "8",
        scorePlus: 7,
        speed: 6
      },
      em4: {
        style: "enemy4",
        hp: "9",
        score: "15",
        scorePlus: 10,
        speed: 8
      },
      em5: {
        style: "enemy5",
        hp: "17",
        score: "20",
        scorePlus: 15,
        speed: 8
      }
    },
    checkpoint: [{ //创建数据
      data: ["em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1"],
      iNum: 10,
      speedX: 5,
      speedY: 5,
      timer: 5000,
      lottery: [20, 20, 10, 50]//彩蛋比例--柱子，血量，子弹，空
    },
    {
      data: ["em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em4", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1"],
      iNum: 10,
      speedX: 7,
      speedY: 10,
      timer: 4000,
      lottery: [25, 25, 10, 40]//彩蛋比例--柱子，血量，子弹，空
    },
    {
      data: ["em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em4", "em1", "em4", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em5", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1"],
      iNum: 10,
      speedX: 10,
      speedY: 20,
      timer: 3000,
      lottery: [30, 30, 10, 30]//彩蛋比例--柱子，血量，子弹，空
    },
    {
      data: ["em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em5", "em2", "em5", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em5", "em1", "em1", "em1"],
      iNum: 10,
      speedX: 15,
      speedY: 25,
      timer: 2500,
      lottery: [30, 20, 20, 30]//彩蛋比例--柱子，血量，子弹，空
    },
    {
      data: ["em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em5", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1"],
      iNum: 10,
      speedX: 20,
      speedY: 30,
      timer: 2000,
      lottery: [30, 25, 30, 15]//彩蛋比例--柱子，血量，子弹，空
    },
    {
      data: ["em4", "em4", "em4", "em4", "em4", "em4", "em4", "em4", "em4", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2"],
      iNum: 10,
      speedX: 18,
      speedY: 35,
      timer: 1500,
      lottery: [30, 15, 35, 10]//彩蛋比例--柱子，血量，子弹，空
    },
    {
      data: ["em4", "em4", "em4", "em4", "em4", "em4", "em4", "em5", "em4", "em4", "em3", "em5", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em3", "em3", "em2", "em2", "em2", "em5", "em2", "em2", "em2", "em2", "em3", "em2", "em3", "em2", "em2", "em2", "em2", "em2"],
      iNum: 10,
      speedX: 20,
      speedY: 35,
      timer: 1500,
      lottery: [40, 20, 40, 0]//彩蛋比例--柱子，血量，子弹，空
    }
    ],
    airData: { //飞机数据
      air1: {
        style: "air",
        speed: 5,
        bullet: "bullet",
        bulletNum: 1,
        hp: 1
      }
    },
  },
  startfn() {
    console.log(this)
  },
})
