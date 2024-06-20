---
title: 📁 .NET Project Structure Template
alias:
- .NET Project Structure Template
---

## Introduction

Setting up a consistent project structure is crucial for maintainability and collaboration in software development. This template outlines the essential files and their content that should be present in the root of your .NET project. By defining these files, you ensure that every developer has the same configuration and dependencies, leading to a smoother development process.

**Benefits**:

- **Consistency**: Ensures all developers use the same configuration.
- **Simplicity**: Reduces the need for individual setup.
- **Reproducibility**: Makes it easier to onboard new developers and set up CI/CD pipelines.

## Project Structure

In the root of your .NET project, the following files should be present:

```
📁 YourProjectRoot
├── YourSolution.sln or YourSolution.slnx
├── global.json
├── Directory.Build.props
└── nuget.config
```

### Solution File

The solution file organizes multiple projects within a single solution. It serves as the entry point for the development environment.

#### Solution File (.sln)

The `.sln` file is the traditional solution file format used in .NET projects. It organizes multiple projects and their dependencies within a single solution, serving as the primary entry point for development environments like Visual Studio.

#### Solution File (.slnx)

The `.slnx` file is a newer alternative to the traditional `.sln` file, providing several enhancements and improvements. This XML-based format addresses many limitations of the `.sln` file by being easier to read, follow, and edit without needing Visual Studio. It reduces complexity by eliminating the use of GUIDs and other redundant information, making it simpler to manage and merge changes.

Using either `.sln` or `.slnx` depends on your project's requirements and the development tools you use. While `.sln` is widely supported and stable, `.slnx` offers modern features and simplicity but is still in preview and might not yet be suitable for all production environments​

#### Solution Filter File (.slnf)

A Solution Filter file allows you to create a subset of the projects in a solution. This is particularly useful for working with large solutions where loading every project can be time-consuming. By using a filter, you can focus on specific parts of the solution without the overhead of loading the entire solution.

```json
{
  "solution": {
    "path": "YourSolution.sln",
    "projects": [
      "MyProject/MyProject.csproj",
      "MyOtherProject/MyOtherProject.csproj"
    ]
  }
}

```

### global.json

This file sets the .NET SDK version for the project, ensuring consistency across all development environments.

```json
{
  "sdk": {
    "version": "<sdk-version>"
  }
}
```

- **sdk**: Specifies the .NET SDK version to use. This ensures that all developers and build environments use the same version, preventing compatibility issues.
	- `<sdk-version>`: The version of the .NET SDK.

### Directory.Build.props

This file contains common properties for all projects within the solution, promoting consistency and reducing duplication.

```xml
<Project>
	<PropertyGroup>
		<Version><project-version></Version>
		<AssemblyVersion><assembly-version></AssemblyVersion>
		<Authors><author-name></Authors>
		<Company><company-name></Company>
		<Product><product-name></Product>
		<Copyright>© <current-year> <company-name></Copyright>
		<Description><project-description></Description>
	</PropertyGroup>
</Project>
```

- **PropertyGroup**: Contains properties like versioning, authorship, and company information. This ensures that all projects within the solution share the same metadata, simplifying management and reducing errors.
	- `<project-version>`: The version of the project.
	- `<assembly-version>`: The assembly version.
	- `<author-name>`: The name of the author.
	- `<company-name>`: The name of the company.
	- `<product-name>`: The name of the product.
	- `<current-year>`: The current year.
	- `<project-description>`: A description of the project.

### nuget.config

This file specifies the package sources for NuGet, ensuring that all developers use the same repositories.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <clear />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
    <add key="<custom-repo-name>" value="<custom-repo-url>" />
  </packageSources>
  <packageRestore>
    <add key="automatic" value="True" />
  </packageRestore>
</configuration>
```

- **packageSources**: Defines the NuGet repositories. Clearing the existing ones ensures only the specified sources are used.
	- `<custom-repo-name>`: The name of your custom repository.
	- `<custom-repo-url>`: The URL of your custom repository.
- **packageRestore**: Enables automatic package restore, ensuring that dependencies are restored when the project is built.

## 📋 Related articles

- https://schwabencode.com/blog/2024/04/10/welcome-new-visual-studio-slnx-solution-file
- https://blog.ndepend.com/slnx-the-new-net-solution-xml-file-format/
- https://stormwild.github.io/blog/post/new-solution-file-slnx-support-in-visual-studio-2022-preview/