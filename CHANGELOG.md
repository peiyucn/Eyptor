# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.1.0] - 2026-06-18

### Architecture

- **Milkdown**: 7.5.x → 7.21.2, `Editor.make()` → `CrepeBuilder`
- **Syntax Highlighting**: Prism → CodeMirror 6 (built-in highlighting, search/replace, fullscreen editing)
- **Vue 3**: Crepe uses Vue internally for UI components
- **Cleanup**: 11 old files removed, net ~2,400 lines deleted

### Added / Enhanced

| Feature | v1.0.1 | v1.1.0 |
|---------|--------|--------|
| **LaTeX Math** | ❌ | ✅ `feature/latex` (KaTeX + CodeMirror editing) |
| **Code Blocks** | Prism | CodeMirror 6 + preview toggle + copy feedback + fullscreen + light/dark theme |
| **Image Resize** | ❌ | ✅ Bottom-right L-shaped drag handle |
| **Image Caption** | ❌ | ✅ Caption editing |
| **Image Picker** | ❌ | ✅ 3 tabs: upload / project library / URL |
| **Image Caption Sync** | ❌ | ✅ Caption editing syncs to alt attribute |
| **Image Load Retry** | ❌ | ✅ Auto-retry up to 5 times on failure |
| **Link Popup** | Custom 679 lines | Crepe `feature/link-tooltip` (URL only) |
| **Toolbar Backdrop Blur** | ❌ | ✅ Sticky + `backdrop-filter: blur` |
| **Brand Badge** | ❌ | ✅ "EPYTOR🦖" top-left (pure CSS) |
| **TOC Panel** | `top: 0` | Aligned below toolbar `top: 36px` + backdrop blur |
| **Mermaid** | Source ↔ Preview | Unified light/dark theme + case insensitive |
| **Editor Top Margin** | — | 52px |
| **Selection Toolbar z-index** | — | 103 (avoids being covered by top bar) |
| **Custom Button Icons** | — | Scaled to 88% to match Crepe native size |

### Feature Changes (v1.0.1 → v1.1.0)

| Feature | Status | Notes |
|---------|--------|-------|
| **Undo/Redo buttons** | ✅ Restored | Crepe `buildTopBar` API |
| **Image insert button** | ✅ Restored | Crepe `buildTopBar` API |
| **Clear formatting button** | ✅ Restored | Crepe `buildTopBar` API |
| **Settings button** | ✅ Restored | Crepe `buildTopBar` API |
| **Send to Claude** | ❌ Removed | Permanently removed: toolbar button, `Option+K`/`Alt+K` shortcut, Provider handler |
| **Heading selector in selection toolbar** | ❌ Removed | Crepe `feature/toolbar` does not include this |
| **Table drag reorder** | ✅ Kept | Crepe `feature/table` natively supports this |
| **Table single-click select row/col** | ⚠️ Disabled | Crepe native behavior is unstable; `cellClickFixPlugin` redirects clicks to cursor positioning |

### Table Feature Comparison

| Capability | v1.0.1 | v1.1.0 |
|------------|--------|--------|
| GFM Tables | ✅ | ✅ |
| Insert/delete rows & columns | ✅ | ✅ |
| Column alignment (left/center/right) | ✅ | ✅ |
| Drag reorder columns | ✅ | ✅ |
| Drag reorder rows | ✅ | ✅ |
| Single-click select entire row/col | ✅ | ❌ (click→cursor) |

### Fixes

- Code block language picker freeze
- Mermaid uppercase "Mermaid" not rendering preview
- Heading dropdown width misalignment
- Link clicks navigating within WebView
- Link tooltip not closing on scroll
- test.md table `<br />` residuals, list indentation, missing code blocks
- Image caption not syncing alt attribute after editing
- Toolbar button icons oversized (scaled to 88%)
- Editor content covered by top bar (top margin adjusted to 52px)
- Selection floating toolbar covered by top bar (z-index: 103)
- 3 missing i18n translation entries

### Known Limitations

- Ordered list multi-level numbering: all levels use decimal (no a.b.c. / i.ii.iii.) — Milkdown kernel limitation

## [1.0.1] - 2026-06-16

### Changed

- README: English is now the default language (Chinese → `README.zh-CN.md`)
- CHANGELOG: switched to English

## [1.0.0] - 2026-06-16

Initial release, forked from [git-xing/md-wysiwyg-editor](https://github.com/git-xing/md-wysiwyg-editor) v0.1.6 (MIT).

### Added

- **Word count** in the VS Code status bar (lines, words, characters), updated in real time
- **Enhanced TOC panel**: pin button, resizable width (200–500px), collapse/expand headings, state persistence

### Changed

- All identifiers (viewType, commands, config keys) migrated from `markdownWysiwyg.*` to `epytor.*`; can coexist with the original extension

### Fixed

- **Blank-line drift**: blank lines progressively drifting toward the top of the file during editing cycles
