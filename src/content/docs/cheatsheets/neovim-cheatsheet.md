---
title: Neovim Cheatsheet
tags:
- cheatsheet
---

## Basic Movements

| Action                              | Command/Shortcut             |
| ----------------------------------- | ---------------------------- |
| Move cursor up                      | `k`                          |
| Move cursor down                    | `j`                          |
| Move cursor left                    | `h`                          |
| Move cursor right                   | `l`                          |
| Jump to the beginning of the line   | `0` (zero)                   |
| Jump to the end of the line         | `$`                          |
| Jump to the top of the file         | `gg`                         |
| Jump to the bottom of the file      | `G`                          |
| Jump to the middle of the file      | `M`                          |
| Jump forward by word                | `w`                          |
| Jump backward by word               | `b`                          |

## Editing

| Action                              | Command/Shortcut             |
| ----------------------------------- | ---------------------------- |
| Enter insert mode (before cursor)   | `i`                          |
| Enter insert mode (append)          | `a`                          |
| Insert at the beginning of the line | `I`                          |
| Insert at the end of the line       | `A`                          |
| Delete character under cursor       | `x`                          |
| Delete word                         | `dw`                         |
| Delete to the end of the line       | `D`                          |
| Cut (delete) the current line       | `dd`                         |
| Copy (yank) the current line        | `yy`                         |
| Paste below cursor                  | `p`                          |
| Paste above cursor                  | `P`                          |
| Undo the last change                | `u`                          |
| Redo the last undone change         | `Ctrl + r`                   |

## File Management

| Action                              | Command/Shortcut             |
| ----------------------------------- | ---------------------------- |
| Open a file                         | `:e <filename>`              |
| Save the current file               | `:w`                         |
| Save and quit                       | `:wq`                        |
| Quit without saving                 | `:q!`                        |
