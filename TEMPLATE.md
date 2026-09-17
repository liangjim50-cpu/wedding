# 婚礼 H5 模板替换说明

客户资料、音乐、自动滑动速度、地图和页面图片路径集中在 `dist/wedding-config.js`。

新客户制作流程：

1. 复制整个项目目录并保留当前版本。
2. 修改 `dist/wedding-config.js` 中的客户姓名、日期、城市、酒店和地图链接。
3. 将客户版页面图放入 `dist/assets/`，再更新 `sections` 中的文件名。
4. 将完整音乐放入 `dist/assets/`，修改 `music.src`；`music.loop` 控制循环。
5. 分享卡标题和封面仍需同步修改 `dist/index.html` 顶部的 Open Graph 信息及 `share-cover.jpg`。
6. 发布前在 320、375、390、430 像素宽度下检查照片衔接、手部和人脸、音乐、地图及自动滑动。

不要直接覆盖已确认客户项目；每位客户使用独立目录和独立链接。
