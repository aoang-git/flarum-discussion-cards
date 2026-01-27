# Flarum Discussion Cards (Enhanced)

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub](https://img.shields.io/badge/GitHub-aoang--git-blue)](https://github.com/aoang-git/flarum-discussion-cards)

增强版 Flarum 讨论卡片扩展 - 为信息发布场景优化的卡片布局方案

![效果展示](https://aoang-1257116184.cos.ap-beijing.myqcloud.com/img/%E4%BF%AE%E6%94%B9%E7%89%88flarum%E5%8D%A1%E7%89%87%E5%B8%83%E5%B1%80%E6%89%A9%E5%B1%95%E6%BC%94%E7%A4%BA.png)

## ✨ 核心特性

### 🎨 双卡片布局系统

**列表卡片（List Card）** - 适合信息发布场景
- � **紧凑布局**：徽章+标签+标题智能一行显示，空间不足时标题自动换行
- 🖼️ **多图展示**：支持横向显示 0-5 张图片缩略图（可配置）
- � **标签色条**：左侧 4px 色条使用标签颜色，视觉识别度高
- 📱 **信息丰富**：显示作者、回复数、最后发帖信息、发布时间、浏览量
- 🔖 **智能高亮**：自动高亮 `#标签`、11位电话号码、金额（￥$€£等）

**大卡片（Card）** - 适合视觉内容展示
- 🖼️ **大图展示**：14rem 高度的特色图片
- 📝 **简洁布局**：徽章+标签+标题+预览文本
- 🎯 **聚焦内容**：隐藏回复数和头像，突出内容本身
- 🔖 **智能高亮**：预览文本支持 `#标签`、电话号码、金额高亮

### 🌐 完整中英双语

所有管理面板设置项均采用"中文 English"双语显示，方便不同语言用户使用。

### ⚙️ 灵活配置

- 按标签启用卡片样式
- 可选择列表或大卡片布局
- 自定义卡片宽度、图片数量
- 支持每个标签独立配置
- 显示/隐藏各类元数据

### 🔖 智能内容高亮

扩展会自动识别并高亮以下内容，使重要信息更醒目：

#### #标签高亮
- **格式**：`#标签名`
- **支持**：中文、英文、数字、下划线
- **示例**：`#招聘` `#技术交流` `#Python3` `#test_tag`

#### 电话号码高亮
- **格式**：11位连续数字
- **示例**：`13812345678` `17603333333`

#### 金额高亮
- **支持货币符号**：￥ $ ＄ ¥ £ ￡ € ₤ ₹ ₽ ₩ ₪ ₱ ₨ ₦ ₴ ₵ ₡ ₲ ₸ ₺ ₼ ₾
- **支持格式**：
  - 单个金额：`￥100` `$50.99` `€999.99`
  - 金额范围：`￥8000-12000` `$50~100` `€999至1999`
  - 千分位：`￥1,000` `$1,234.56`

**高亮样式**：蓝色文字 + 浅蓝色背景，圆角边框

## 📦 安装

**注意**：所有命令都需要在 Flarum 安装目录下运行（包含 `composer.json` 的目录）。

### 新安装

```sh
# 进入 Flarum 安装目录
cd /path/to/your/flarum

# 添加自定义仓库
composer config repositories.flarum-discussion-cards vcs https://github.com/aoang-git/flarum-discussion-cards

# 安装扩展
composer require aoang-git/flarum-discussion-cards

# 清理缓存
php flarum cache:clear
```

### 从原版升级

**重要提示**：如果你之前安装过 `walsgit/flarum-discussion-cards`，建议先完全卸载：

```sh
# 1. 在后台禁用并卸载原版扩展
# 2. 卸载原版扩展
composer remove walsgit/flarum-discussion-cards

# 3. 清理缓存
php flarum cache:clear

# 4. 安装增强版
composer require aoang-git/flarum-discussion-cards

# 5. 清理缓存并启用
php flarum cache:clear
```

**迁移说明**：本扩展的迁移文件已添加列存在性检查，可以安全地与原版共存或升级。如果遇到问题，请在 [GitHub Issues](https://github.com/aoang-git/flarum-discussion-cards/issues) 报告。

## 🔄 更新

```sh
# 进入 Flarum 安装目录
cd /path/to/your/flarum

# 更新扩展
composer update aoang-git/flarum-discussion-cards --with-dependencies

# 清理缓存
php flarum cache:clear
```

## 🎯 使用场景

### 推荐配置

- **信息板/公告板**：使用列表卡片，展示联系方式、活动信息等结构化内容
- **讨论区**：使用传统列表样式，便于快速浏览和回复
- **图片展示区**：使用大卡片，突出视觉内容

### 配置步骤

1. 进入 **管理后台 → 扩展 → Flarum Discussion Cards**
2. 在"允许的标签"中选择需要启用卡片的标签
3. 选择卡片布局类型（列表/大卡片）
4. 调整其他显示选项（图片数量、宽度等）
5. 保存设置

## 🆕 增强功能

相比原版 [walsgit/flarum-discussion-cards](https://github.com/walsgit/flarum-discussion-cards)，本版本新增：

### 列表卡片优化
- ✅ 多图片横向缩略图展示（0-5 张可配置）
- ✅ 标签色条视觉识别
- ✅ 徽章+标签+标题智能一行布局
- ✅ 最后发帖信息显示在元数据行
- ✅ `#标签`、电话号码、金额自动高亮
- ✅ 图片从左侧移至内容下方
- ✅ 移动端圆角卡片样式，增强视觉区分

### 大卡片优化
- ✅ 移除底部头像和回复数，布局更简洁
- ✅ 统一的内容边距（左右 15px）
- ✅ 支持 `#标签`、电话号码、金额高亮
- ✅ 优化的间距和排版

### 界面改进
- ✅ 完整中英双语界面
- ✅ 优化的设置面板布局
- ✅ 更好的移动端适配

## 🔧 原版功能

本扩展保留了原版的所有核心功能：

- 卡片样式讨论列表展示
- 自动提取首帖图片作为预览
- 按标签页自定义卡片设置
- 标签优先级图片选择规则
- 已读/未读讨论区分

### 标签图片优先级规则

在首页（所有讨论）中，如果讨论有多个标签且都设置了自定义图片，将按以下优先级选择：

1. 最高位置父级主标签的最高位置子级主标签的图片
2. 最高位置父级主标签的图片
3. ID 最小的次级标签的图片
4. 通用默认图片

## 🔌 第三方扩展支持

- ✅ `flarumite/simple-discussion-views` - 显示讨论浏览量
- ✅ `michaelbelgium/flarum-discussion-views` - 显示讨论浏览量
- ✅ `v17development/flarum-blog` - 使用博客特色图片和摘要
- ✅ `shebaoting/repost` - 支持外链跳转

## 📝 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 了解详细的版本更新历史。

## 🔗 链接

- [GitHub 仓库](https://github.com/aoang-git/flarum-discussion-cards)
- [问题反馈](https://github.com/aoang-git/flarum-discussion-cards/issues)
- [原版扩展](https://github.com/walsgit/flarum-discussion-cards)
- [原版讨论](https://discuss.flarum.org/d/36343-flarum-discussion-cards)

## 👥 致谢

- **原作者**：[Wa!id (walsgit)](https://github.com/walsgit) - 原版 flarum-discussion-cards
- **增强版**：[aoangen](https://github.com/aoang-git) - 功能增强和优化
- **基于**：[@Dem13n's discussion-cards](https://github.com/Dem13n/discussion-cards) - 最初的卡片扩展

感谢所有为 Flarum 生态做出贡献的开发者！

## 📄 许可证

MIT License - 详见 [LICENSE.md](LICENSE.md)

## 💡 开发说明

- 开发和测试环境：Flarum 1.8.7+
- 使用 AI 辅助开发（ChatGPT, Claude, Gemini）
- 设置页面设计参考 FriendsOfFlarum 的 Best Answer 扩展
- 标签设置功能参考 askvortsov1 的 Discussion Templates 扩展

---

**如果这个扩展对你有帮助，欢迎在 GitHub 上给个 ⭐️ Star！**
