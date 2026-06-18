# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## \[1.1.0] - 2026-06-18

### 架构升级

- **Milkdown**: 7.5.x → 7.21.2, `Editor.make()` → `CrepeBuilder`
- **代码高亮**: Prism → CodeMirror 6（内置语法高亮、搜索替换、全屏编辑）
- **Vue 3**：Crepe 内部使用 Vue 渲染 UI 组件
- **删除**: 11 个文件，6,057 行；净减 ~2,400 行

### 新增 / 增强

| 功能 | v1.0.1 | v1.1.0 |
|------|--------|--------|
| **LaTeX 数学公式** | ❌ | ✅ `feature/latex`（KaTeX + CodeMirror 编辑） |
| **代码块** | Prism 高亮 | CodeMirror 6 + 预览切换 + 复制反馈 + 全屏 + 深浅主题 |
| **图片缩放** | ❌ | ✅ 右下角 L 形 handle 拖拽缩放 |
| **图片说明** | ❌ | ✅ Caption 编辑 |
| **链接弹窗** | 自定义 679 行 | Crepe `feature/link-tooltip`（只输 URL） |
| **工具栏毛玻璃** | ❌ | ✅ 吸顶 + `backdrop-filter: blur` |
| **品牌标识** | ❌ | ✅ 左上角 "EPYTOR🦖"（纯 CSS） |
| **TOC 面板** | 吸顶 `top: 0` | 对齐工具栏下方 `top: 36px` + 毛玻璃 |
| **Mermaid** | 源码 ←→ 预览 | 统一深浅主题 + 大小写不敏感 |

### 移除

| 功能 | 说明 |
|------|------|
| **发送到 Claude** | 从选中工具栏移除 |
| **Undo/Redo 按钮** | ✅ 已加回（Crepe `buildTopBar` API） |
| **图片插入按钮** | ✅ 已加回（Crepe `buildTopBar` API） |
| **清除格式按钮** | ✅ 已加回（Crepe `buildTopBar` API） |
| **设置按钮** | ✅ 已加回（Crepe `buildTopBar` API） |
| **选中工具栏标题选择器** | Crepe `feature/toolbar` 不含此功能 |
| **表格拖拽重排行/列** | Crepe `feature/table` 不支持拖拽排序 |

### 表格功能对比

| 能力 | v1.0.1 | v1.1.0 |
|------|--------|--------|
| GFM 表格 | ✅ | ✅ |
| 插入/删除行、列 | ✅ | ✅ |
| 列对齐（左/中/右） | ✅ | ✅ |
| 拖拽排序列 | ✅ | ❌（Crepe 不支持） |
| 拖拽排排行 | ✅ | ❌（Crepe 不支持） |
| 单击选中整行/列 | ✅ | ❌（单击→光标定位） |

### 修复

- 代码块语言选择器卡死
- Mermaid 大写 "Mermaid" 无法渲染预览
- 标题下拉框宽度不对齐按钮
- 点击链接在 WebView 中跳转
- 链接 tooltip 滚动时不消失
- test.md 表格 `<br />` 残留、列表缩进、缺失代码块

### 已知限制

- 有序列表多层级编号：全部十进制，不区分 a.b.c. / i.ii.iii.（Milkdown 内核限制）

## \[1.0.1] - 2026-06-16

### Changed

- README: English is now the default language (Chinese → `README.zh-CN.md`)
- CHANGELOG: switched to English

## \[1.0.0] - 2026-06-16

Initial release, forked from [git-xing/md-wysiwyg-editor](https://github.com/git-xing/md-wysiwyg-editor) v0.1.6 (MIT).

### Added

- **Word count** in the VS Code status bar (lines, words, characters), updated in real time
- **Enhanced TOC panel**: pin button, resizable width (200–500px), collapse/expand headings, state persistence

### Changed

- All identifiers (viewType, commands, config keys) migrated from `markdownWysiwyg.*` to `epytor.*`; can coexist with the original extension

### Fixed

- **Blank-line drift**: blank lines progressively drifting toward the top of the file during editing cycles
