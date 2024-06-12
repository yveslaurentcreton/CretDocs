---
title: 📕 How to remove dotnet versions from macOS using the Terminal
tags:
- manual
- guide
---

> [!info]
> Managing .NET SDK and runtime versions on macOS can be crucial for maintaining a clean development environment and ensuring compatibility with different projects. This guide will walk you through the process of listing, individually removing, and batch removing .NET SDK and runtime versions using terminal commands.

## List the .NET SDK Versions

Before removing any SDK versions, it’s helpful to see which versions are currently installed. To list all installed .NET SDK versions, use the following command in the terminal:

```sh
dotnet --list-sdks
```

This command will display output similar to the following:

```
6.0.423 [/usr/local/share/dotnet/sdk]
7.0.100-rc.2.22477.23 [/usr/local/share/dotnet/sdk]
7.0.100 [/usr/local/share/dotnet/sdk]
7.0.101 [/usr/local/share/dotnet/sdk]
7.0.200 [/usr/local/share/dotnet/sdk]
7.0.304 [/usr/local/share/dotnet/sdk]
7.0.402 [/usr/local/share/dotnet/sdk]
8.0.100 [/usr/local/share/dotnet/sdk]
8.0.302 [/usr/local/share/dotnet/sdk]
```

## Remove Individual .NET SDK Versions

To remove a specific .NET SDK version, use the rm command followed by the path of the SDK version you want to delete. Here’s the general format:

```sh
sudo rm -rf /usr/local/share/dotnet/sdk/<version_number>
```

For example, to remove the .NET SDK version 7.0.304, run:

```sh
sudo rm -rf /usr/local/share/dotnet/sdk/7.0.304
```

**Note:** The sudo command is used to gain the necessary permissions to delete the SDK directories.

## Remove an Entire Version Series (e.g., 7.*)

If you want to remove all SDK versions within a major release series (e.g., all 6.x versions), you can use a wildcard * with the rm command:

```sh
sudo rm -rf /usr/local/share/dotnet/sdk/7.*
```

This command will remove all installed .NET SDK versions that start with 7, such as 7.0.100, 7.0.200, etc.

## List the .NET Runtime Versions

Similarly, you may want to list all installed .NET runtime versions. To list them, use the following command in the terminal:

```sh
dotnet --list-runtimes
```

This command will display output similar to the following:

```
Microsoft.AspNetCore.App 6.0.31 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 7.0.0-rc.2.22476.2 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 7.0.0 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 7.0.1 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 7.0.3 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 7.0.7 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 7.0.12 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 8.0.0 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.AspNetCore.App 8.0.6 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
Microsoft.NETCore.App 6.0.31 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 7.0.0-rc.2.22472.3 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 7.0.0 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 7.0.1 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 7.0.3 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 7.0.7 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 7.0.12 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 8.0.0 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 8.0.6 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
```

## Remove Individual .NET Runtime Versions

To remove a specific .NET runtime version, use the rm command followed by the path of the runtime version you want to delete. Here’s the general format:

```sh
sudo rm -rf /usr/local/share/dotnet/shared/<runtime_name>/<version_number>
```

For example, to remove the .NET runtime version Microsoft.AspNetCore.App 7.0.3, run:

```sh
sudo rm -rf /usr/local/share/dotnet/shared/Microsoft.AspNetCore.App/7.0.3
```

**Note:** The sudo command is used to gain the necessary permissions to delete the runtime directories.

## Remove an Entire Runtime Version Series (e.g., 7.*)

If you want to remove all runtime versions within a major release series (e.g., all 7.x versions), you can use a wildcard * with the rm command:

```sh
sudo rm -rf /usr/local/share/dotnet/shared/Microsoft.AspNetCore.App/7.*
sudo rm -rf /usr/local/share/dotnet/shared/Microsoft.NETCore.App/7.*
```

This command will remove all installed .NET runtime versions that start with 7, such as 7.0.0, 7.0.1, etc.