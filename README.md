## Flarum Discussion Cards (Enhanced)

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub](https://img.shields.io/badge/GitHub-aoang--git-blue)](https://github.com/aoang-git/flarum-discussion-cards)

增强版 Flarum 讨论卡片扩展 - 基于 [walsgit/flarum-discussion-cards](https://github.com/walsgit/flarum-discussion-cards) 进行功能增强。

### 新增功能

- ✨ **多图片支持**：列表卡片支持显示 0-5 张图片（可在后台配置）
- 🎨 **标签色条**：卡片左侧显示 4px 色条，使用最后一个标签的颜色
- 🖼️ **优化布局**：图片从左侧移至内容下方，横向缩略图显示（80x80px）
- 🔖 **内容高亮**：自动高亮 Hashtag（#标签）和 11 位电话号码
- 🌐 **完整中文化**：所有界面和设置项均已汉化

### 原版功能

A [Flarum](https://flarum.org) extension (**Fork** of ``@Dem13n``'s [discussion-cards](https://github.com/Dem13n/discussion-cards)). Allows you to display discussions in the form of cards, the first image of the first post is used as a preview, if there are no images, a stub is displayed.

This *fork* adds ``new features`` where you can now set custom cards settings per tag page (different default image along with number and width of primary cards).
On the ``index page`` (all discussions), if a discussion has multiple tags with their own custom image set, the displayed image will be chosen according to these priority rules:
```
1. The image of the the highest positioned child primary tag of the highest positioned parent primary tag
2. The image of the highest positioned parent primary tag
3. The image of the secondary tag with the lowest id
4. The general default image
```
Also it changes how the setting to distinguish between read & unread discussion cards work: now the read discussions are filtred with a grayscale instead of the unread ones. As of `1.2.0` read discussion cards a no longer filtered with a grayscale but have just a lighter title and text.

### 3rd party extension support
- `flarumite/simple-discussion-views` : show discussion view count on cards
- As of version `1.1.0` added support for the `v17development/flarum-blog` extension. If activated, you can set to use the blog's extension images for blog posts' cards and/or their article summary as preview text on the cards.
- As of version `1.2.0` added support for the `shebaoting/repost` extension. If activated, you can set it so that when you click on the card `title` of a discussion starting with a url, it will open that url, and clicking anywhere else on the card will open the discussion as usual.
- As of version `1.3.0` added support for the `michaelbelgium/flarum-discussion-views` extension.

![Discussion Cards](https://i.postimg.cc/FsxNPWYk/flarum-ext-discussioncards-1.png)

### Notes
- Developed and tested on Flarum 1.8.7 then tested on 1.8.8.
- Thanks to whomever suggested on Discord to use the tags selection component (sorry, we can no longer access the messages on Discord to mention them properly).
- New settings page inspired by ``Friends of Flarum``'s [Best Answer](https://github.com/FriendsOfFlarum/best-answer) Extension.
- Additional tags settings based on ``@askvortsov``'s [Discussion Templates](https://github.com/askvortsov1/flarum-discussion-templates) Extension.
- Developped this with the help of AI (mainly ChatGPT, Cody & Gemini).

## Installation

### 新安装

Install with composer:

```sh
composer require aoang-git/flarum-discussion-cards
```

### 从原版升级

**重要提示**：如果你之前安装过 `walsgit/flarum-discussion-cards`，建议先完全卸载：

```sh
# 1. 卸载原版扩展
composer remove walsgit/flarum-discussion-cards

# 2. 清理缓存
php flarum cache:clear

# 3. 安装增强版
composer require aoang-git/flarum-discussion-cards

# 4. 清理缓存
php flarum cache:clear
```

**如果遇到迁移冲突**：本扩展的迁移文件已添加列存在性检查，可以安全地与原版共存或升级。如果仍然遇到问题，请在 [GitHub Issues](https://github.com/aoang-git/flarum-discussion-cards/issues) 报告。

## Updating

```sh
composer update aoang-git/flarum-discussion-cards
php flarum migrate
php flarum cache:clear
```

## Links

- [GitHub](https://github.com/aoang-git/flarum-discussion-cards)
- [原版扩展](https://github.com/walsgit/flarum-discussion-cards)
- [原版讨论](https://discuss.flarum.org/d/36343-flarum-discussion-cards)

## Credits

- 原作者：[Wa!id](https://github.com/walsgit)
- 增强版：[aoangen](https://github.com/aoang-git)
- 基于：[@Dem13n's discussion-cards](https://github.com/Dem13n/discussion-cards)