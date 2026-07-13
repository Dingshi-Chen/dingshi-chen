# 陈定市 · Dingshi Chen 个人学术网站

现代、专业、响应式的单页学术网站，内容根据《陈定市简历4.docx》整理。网站包含个人简介、研究方向、代表性成果、教育与工作经历、科研/工程项目及联系方式。

## 本地运行

```bash
npm install
npm run dev
```

打开终端显示的本地地址即可预览。

## 生产构建

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`。

## GitHub Pages 发布

执行 `npm run build` 后，构建结果会同时复制到仓库根目录。进入仓库 **Settings → Pages**，选择 **Deploy from a branch**，分支选 **main**，目录选 **/(root)**。

公开地址：https://dingshi-chen.github.io/dingshi-chen/

## 内容维护

- 个人简介与首页：`src/App.jsx`
- 论文、教育经历与项目信息：`src/data.js`
- 视觉与响应式样式：`src/styles.css`
- 个人照片：`src/assets/dingshi-chen.webp`

## 隐私说明

公开页面仅保留学术邮箱。简历中的出生日期、婚姻状况、政治面貌与手机号未写入网站。
