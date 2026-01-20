import isValideImageUrl from "./isValideImageUrl";

/**
 * 从帖子内容中提取多张图片
 * @param {Object} post - 帖子对象
 * @param {string} defaultImage - 默认图片路径
 * @param {boolean} isBlogPost - 是否为博客帖子
 * @param {number} maxImages - 最多提取图片数量（0-5）
 * @returns {Array} 图片URL数组
 */
export default function getPostImages(post, defaultImage, isBlogPost = false, maxImages = 3) {
  const images = [];
  
  // 如果是博客帖子且有有效的默认图片，优先使用
  if (isBlogPost && isValideImageUrl(defaultImage)) {
    images.push(defaultImage);
    if (maxImages === 1) return images;
  }
  
  // 如果没有帖子内容，返回默认图片或空数组
  if (!post) {
    if (defaultImage && !isBlogPost) {
      const assetImage = app.forum.attribute("baseUrl") + "/assets/" + defaultImage;
      images.push(assetImage);
    }
    return images;
  }
  
  // 正则表达式匹配所有图片（排除emoji）
  const regex = /<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/gi;
  const content = post.contentHtml();
  
  let match;
  let count = isBlogPost && images.length > 0 ? 1 : 0; // 如果已经添加了博客图片，从1开始计数
  
  // 提取所有图片URL
  while ((match = regex.exec(content)) !== null && count < maxImages) {
    const imageUrl = match[1];
    if (imageUrl && !images.includes(imageUrl)) {
      images.push(imageUrl);
      count++;
    }
  }
  
  // 如果没有找到图片且有默认图片，添加默认图片
  if (images.length === 0 && defaultImage) {
    const assetImage = app.forum.attribute("baseUrl") + "/assets/" + defaultImage;
    images.push(assetImage);
  }
  
  return images;
}
