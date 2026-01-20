/**
 * 高亮显示文本中的 #标签 和 电话号码
 * @param {string} text - 原始文本
 * @returns {string} - 包含HTML标记的文本
 */
export default function highlightHashtags(text) {
  if (!text) return '';
  
  // HTML转义，防止XSS
  const escapeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };
  
  const escaped = escapeHtml(text);
  
  // 先匹配电话号码（11位连续数字，前后不能是数字）
  // 使用负向前瞻和负向后顾确保不是更长数字的一部分
  const phoneRegex = /(?<!\d)(\d{11})(?!\d)/g;
  let result = escaped.replace(phoneRegex, '<span class="hashtag">$1</span>');
  
  // 再匹配 #标签（#开头，到空格、标点或结尾）
  // 支持中英文、数字、下划线
  const hashtagRegex = /#([^\s#<>，。！？、；：""''（）]+)/g;
  result = result.replace(hashtagRegex, '<span class="hashtag">#$1</span>');
  
  return result;
}
