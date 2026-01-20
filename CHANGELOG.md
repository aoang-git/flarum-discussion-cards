# Changelog

All notable changes to this project will be documented in this file.

## [1.4.0] - 2026-01-21

### Fixed
- **修复 LESS 编译错误**
  - 移除对未定义 mixin `.far()` 的依赖
  - 直接使用 Font Awesome 字体样式，避免编译失败
  - 修复前台页面 500 错误

## [1.3.9] - 2026-01-21

### Fixed
- **修复设置保存验证问题**
  - 修复空值验证逻辑，允许使用默认值
  - 现在空的数字字段会使用 placeholder 中定义的默认值
- **修复迁移文件中的变量作用域问题**
  - 在 `down` 方法的闭包中添加 `use ($schema)`
  - 修复点击"重置"按钮时的 500 错误

## [1.3.8] - 2026-01-21

### Fixed
- **修复子目录安装时标签页面识别问题**
  - 修复路由检测逻辑，支持 Flarum 安装在子目录的情况
  - 将 `startsWith('/t/')` 改为 `includes('/t/')`，兼容各种安装路径
  - 现在无论 Flarum 安装在根目录还是子目录，标签页面都能正确显示卡片视图

### Changed
- 移除调试日志代码，提升性能

## [1.3.7] - 2026-01-21

### Fixed
- **全面修复类型匹配和错误处理问题**
  - 修复 `allowedTags` 可能未定义导致的错误
  - 修复 `tagSettings` 为 null 或空时的解析错误
  - 优化标签查找逻辑，避免重复查询
  - 统一标签 ID 类型为字符串，确保前后端一致性
  - 添加完善的错误处理和日志记录
  - 改进卡片显示判断逻辑的可读性和健壮性

### Changed
- 移除未使用的 `icon` 导入
- 优化代码结构，提高可维护性

## [1.3.6] - 2026-01-21

### Fixed
- 修复标签 ID 类型不匹配问题：将数字类型的标签 ID 转换为字符串，确保与 allowedTags 数组正确匹配
- 修复 allowedTags JSON 字符串解析问题：在前端正确解析 JSON 字符串为数组
- 现在选择的标签页面可以正确显示卡片视图

## [1.3.5] - 2026-01-21

### Fixed
- **关键修复**：修正扩展 ID 命名错误
  - 根据 Flarum 官方规范，包含 `flarum-` 前缀的扩展应省略该前缀
  - 将扩展 ID 从 `aoang-git-flarum-discussion-cards` 更正为 `aoang-git-discussion-cards`
  - 这是导致管理面板设置页面无法显示的根本原因

### Technical
- 更新 `js/src/admin/index.js` 中的扩展 ID
- 更新 `js/src/forum/index.js` 中的扩展 ID
- 重新编译前端资源文件

## [1.3.4] - 2026-01-21

### Fixed
- 修复迁移文件冲突问题：添加列存在性检查，避免与原版 `walsgit/flarum-discussion-cards` 冲突
- 现在可以安全地从原版升级或在已安装原版的环境中安装

### Changed
- 更新 README，添加详细的安装和升级说明
- 改进迁移文件的健壮性

## [1.3.3] - 2026-01-20

### Fixed
- 修复扩展 ID 注册问题
- 修复前端 JS 中的扩展标识符

## [1.3.2] - 2026-01-20

### Added
- 多图片支持：列表卡片支持显示 0-5 张图片（可在后台配置 maxListImages）
- 标签色条：卡片左侧显示 4px 色条，使用最后一个标签的颜色
- 内容高亮：自动高亮 Hashtag（#标签）和 11 位电话号码
- 完整中文化：所有界面和设置项

### Changed
- 图片布局优化：从左侧移至内容下方，横向缩略图显示（80x80px）
- 无图片时不显示也不占用空间

### Technical
- 创建 `getPostImages.js` 辅助函数用于提取多张图片
- 创建 `highlightHashtags.js` 辅助函数用于内容高亮
- 修改 `ListItem.js` 组件实现新布局

---

## 原版更新日志

以下是基于 walsgit/flarum-discussion-cards v1.3.0 的原版更新日志：

## [1.3.0] - 2025-05-29
### Added
- Added support for the `michaelbelgium/flarum-discussion-views` extension. To display views count on cards you can now use either michaelbelgium's or flarumite's extension.

### Changed
- Cards now link to the discussion's first unread post (reply) or to the last post if all are read.
- Number of replies on cards now shows the number of unread replies (with an **asterisk**) when there are unread replies, and the total number of replies otherwise (discussion fully read).
- English & French translations updated for the show views settings and unread replies count display on cards.

### Fixed
- cards didn't display when at least one discussion had a FOF Best Answer badge and show badges was activated. (partial fix as the Best Answer badge is displayed without icon or color because that data isn't passed to the payload by the FOF Best Answer extension) so still WIP but not a breaking bug anymore.

## [1.2.0] - 2024-12-17
### Added
- NEW option to show the number of replies on the right side of a card's title (like the default Flarum design) instead of on the image.
- NEW option to show the last post informations on the cards (like the default Flarum design): username & date of last post.
- NEW FEATURE: support for `shebaoting/repost` extension.
- New migration file for the aforementioned new options & features.
- Post image search function now detects images in posts set via inline styles property `background: url(...)` or `background-image: url()`, like for the thumbnails in YouTube video embeds.

### Changed
- The way read cards are marked (removed B&W filter): now read cards' title and text have a lighter font weight (like the default Flarum discussion list behavior)
- When there are too many tags, not all of them where visible: now they will scroll horizontally when you hover on the cards' tag list on desktop and you can manually scroll them on mobile.

## [1.1.1] - 2024-11-25
### Fixed
- French translation bug

## [1.1.0] - 2024-11-22
### Added
- NEW FEATURE: Support for `v17development/flarum-blog` extension
- NEW Option to chose to use the blog's images (post featured image and blog default's image) for blog post cards
- NEW Option to chose to use blog posts' summary as preview text for blog post cards
- A donation link

### Changed
- Options for 3rd party extensions will only be enabled if said extensions are installed and activated.
- Text & description associated with 3rd party extensions options

### Fixed
- Views won't throw error when `show views` option is activated but the relevant extension isn't installed and activated.

## [1.0.4] - 2024-11-16
### Added
- Support & discuss URLs

## [1.0.3] - 2024-11-15
### Changed
- Removed old funding.yml

## [1.0.2] - 2024-11-15
### Changed
- Renaming the extension to Flarum Discussion Cards

## [1.0.1] - 2024-11-15
### Fixed
- French translation bug (removed extra quote)

## [1.0.0] - 2024-11-15
### Added
- NEW FEATURE : Setting a default image per tag
- NEW FEATURE : Setting custom number of primary cards and custom cards width per tag
- NEW on Index page (all discussions) shows default card images based on tags of discussion (based on tag priority)
- NEW migrations (tag settings)
- Client and server-side validation for the tags settings
- Some validation for the general extension settings
- French translation
- Changelog.md

### Changed
- Admin Settings page form & text
- Image stub (changed it for a more neutral one with the Flarum logo)
- Migrations (with new settings keys and added new tag settings)
- Switched read/unread discussions' filter (now read are grayscaled and unread are in full colors)
- Reamde.md, License.md, namespace...
- Removed Russian translation

### Fixed
- Replaced deprecated $.tooltip
- UploadImageButton now showing the uploaded image (created a new custom component).
