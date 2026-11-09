---
name: top-tabs
description: Explains the Top Tabs plugin, a Browser-style tab strip of open threads across the top of the bb window. Use when the user asks how the thread tabs work, how to close, reorder or reset them, or why a tab appeared or disappeared.
---

# Top Tabs

The plugin draws a tab strip across the top of every bb window, above the
sidebar and the thread. Each tab is a thread the user opened in that window.

## Behavior

- Opening a thread (from the sidebar, a link, or a shortcut) adds its tab at
  the end of the strip, unless it already has one.
- Click a tab to switch to its thread. Cmd/Ctrl-click opens it in a split.
- Close a tab with its × button or a middle-click. Closing the active tab
  switches to the tab on its right, or on its left when it was the last one.
- Drag a tab to reorder the strip.
- Right-click a tab for bb's own thread menu plus Close tab, Close other tabs
  and Close tabs to the right.
- `+` opens the New thread screen. Ctrl+Tab and Ctrl+Shift+Tab cycle tabs.
- A tab disappears when its thread is archived or deleted.
- The strip hides below 640 px window width.

## State

Tabs are per window and stored in that window's `localStorage` under
`bb-plugin-top-tabs:v1`. There is no server state and no CLI command. To
reset the strip, close the tabs, or disable and re-enable the plugin in
Settings → Plugins (the stored list survives that; closing tabs clears it).
