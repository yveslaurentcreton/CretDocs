---
title: 📘 .NET CLI Cheatsheet
alias:
- .NET CLI Cheatsheet
tags:
- cheatsheet
---

> [!info]
> This document contains code snippets to use when working with the .NET CLI.

## 📖 Cheatsheet

### General Maintenance

| Action                   | Code                                       |
| ------------------------ | ------------------------------------------ |
| Check .NET version       | `dotnet --version`                         |
| List installed SDKs      | `dotnet --list-sdks`                       |
| List installed runtimes  | `dotnet --list-runtimes`                   |
| Install a .NET tool      | `dotnet tool install --global <tool-name>` |
| Install EF Core globally | `dotnet tool install --global dotnet-ef`   |
| List available workloads | `dotnet workload search`                   |
| List installed workloads | `dotnet workload list`                     |
| Add workload             | `dotnet workload install <workload-id>`    |
| Update all workloads     | `dotnet workload update`                   | 

### Development

| Action                       | Code                            |
| ---------------------------- | ------------------------------- |
| List available templates     | `dotnet new list`               |
| Install template             | `dotnet new install <template>` |
| Create a new project         | `dotnet new <template>`         |
| Restore project dependencies | `dotnet restore`                |
| Build a project              | `dotnet build`                  |
| Run a project                | `dotnet run`                    |

### Deployment

| Action            | Code             |
| ----------------- | ---------------- |
| Publish a project | `dotnet publish` |

### NuGet

| Action                          | Code                                                    |
| ------------------------------- | ------------------------------------------------------- |
| Add a package to a project      | `dotnet add package <package-name>`                     |
| Update a package in a project   | `dotnet add package <package-name> --version <version>` |
| Remove a package from a project | `dotnet remove package <package-name>`                  |
| Clear local cache               | `dotnet nuget locals all --clear`                       |

## 📋 Related articles
