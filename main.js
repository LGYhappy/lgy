// 模拟文章数据，可以以后改成从后端或 Markdown 文件读取
const posts = [
  {
    id: 1,
    title: "这里是一个下载站",
    date: "2026-08-09",
    tags: ["安卓", "刷机"],
    excerpt: "meishakexiede",
    content: `
      <p>在这个网站 你可以找到你想要的刷机资源</p>
      <p>坚持免费</p>
      <p>bilibili LGY923</p>
    `
 
    `
 }
];

// 判断当前页面是首页还是详情页
function isIndexPage() {
  return window.location.pathname.endsWith("index.html") ||
         window.location.pathname === "/" ||
         window.location.pathname === "";
}

// 在首页渲染文章列表
function renderPostList() {
  const listEl = document.getElementById("post-list");
  if (!listEl) return;

  posts.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card";

    card.innerHTML = `
      <h3 class="post-card-title">
        <a href="post.html?id=${post.id}">${post.title}</a>
      </h3>
      <p class="post-card-meta">${post.date} · ${post.tags.join(" / ")}</p>
      <p class="post-card-excerpt">${post.excerpt}</p>
    `;

    listEl.appendChild(card);
  });
}

// 在详情页渲染文章内容
function renderPostDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const post = posts.find(p => p.id === id);

  if (!post) {
    const detailEl = document.getElementById("post-detail");
    if (detailEl) {
      detailEl.innerHTML = "<p>未找到这篇文章。</p>";
    }
    return;
  }

  const titleEl = document.getElementById("post-title");
  const dateEl = document.getElementById("post-date");
  const tagsEl = document.getElementById("post-tags");
  const contentEl = document.getElementById("post-content");

  if (titleEl) titleEl.textContent = post.title;
  if (dateEl) dateEl.textContent = post.date;
  if (tagsEl) tagsEl.textContent = post.tags.join(" / ");
  if (contentEl) contentEl.innerHTML = post.content;
}

// 页面加载时执行
document.addEventListener("DOMContentLoaded", () => {
  if (isIndexPage()) {
    renderPostList();
  } else {
    renderPostDetail();
  }
});
