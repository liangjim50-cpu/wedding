/*
 * 婚礼 H5 客户配置入口
 * 复制模板给新客户时，优先只修改本文件和 assets/ 下对应素材。
 */
window.WEDDING_CONFIG = {
  customer: {
    groom: "罗密欧",
    bride: "祝英台",
    date: "2026.10.11",
    city: "成都",
    hotel: "成都群光君悦酒店"
  },
  page: {
    title: "罗密欧与祝英台的婚礼",
    shareDescription: "诚挚邀请您见证我们的幸福时刻｜2026年10月11日·成都",
    themeColor: "#f3ede4"
  },
  music: {
    src: "assets/wedding-music-full.mp3",
    loop: true
  },
  motion: {
    autoScrollSeconds: 80,
    interactionPauseMs: 4200,
    fallingPetals: 14
  },
  mapUrl: "https://uri.amap.com/search?keyword=%E6%88%90%E9%83%BD%E7%BE%A4%E5%85%89%E5%90%9B%E6%82%A6%E9%85%92%E5%BA%97",
  sections: [
    { src: "assets/section-01.webp", width: 750, height: 2600, alt: "罗密欧与祝英台婚礼邀请封面" },
    { src: "assets/section-02.webp", width: 750, height: 2600, alt: "遇见你与甜蜜时光", softSeams: [0.262] },
    { src: "assets/section-03-v2.webp", width: 750, height: 1600, alt: "携手与婚礼安排" },
    { src: "assets/section-05.webp", width: 750, height: 2700, alt: "我们的婚礼时光" },
    { src: "assets/section-07.webp", width: 750, height: 2160, alt: "感谢见证我们的幸福" },
    { src: "assets/section-04.webp", width: 750, height: 2600, alt: "成都婚礼地点、日期与酒店信息", finalHotel: true }
  ]
};
