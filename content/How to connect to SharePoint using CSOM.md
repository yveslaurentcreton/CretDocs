---
tags:
- net6
- sharepoint
- csom
---
# 📕 How to connect to SharePoint using CSOM
> [!info]
> This document describes how to connect to a [[SharePoint]] library using [[CSOM]]. There are 2 ways to connect to a SharePoint library. [[#SharePoint app-only]] and [[#Azure AD app-only]].
## 📖 Instructions
### SharePoint app-only
#### 1. Create a new app-only principal
1. Navigate to `{{Normal URL of the SharePoint Site}}/_layouts/15/appregnew.aspx`.
2. Enter the following values:

| Property      | Value                                                   |
| ------------- | ------------------------------------------------------- |
| Client Id     | Click on the generate button and take note of the value |
| Client Secret | Click on the generate button and take note of the value |
| Title         | Give the app a name                                     |
| App Domain    | Fill in the domain of where the application is hosted   |
| Redirect URI  | Enter a URI where to redirect to after                  |

3. Click on `Create`.

#### 2. Add the permissions to the created app-only principal
1. Navigate to `{{Admin URL of the SharePoint Site}}/_layouts/15/appinv.aspx`
2. Enter the `App Id` (Client id from the previous step).
3. Click on `Lookup`.
4. Enter the `Permission Request XML`
	```xml
	<AppPermissionRequests AllowAppOnlyPolicy="true">
		<AppPermissionRequest Scope="http://sharepoint/content/tenant" Right="FullControl" />
	</AppPermissionRequests>
	```
5. Click on `Create`.
6. Click on `Trust It`.

#### 3. Extra
> [!info]
> To list the apps, use:
> `{{Admin URL of the SharePoint Site}}/_layouts/15/AppPrincipals.aspx`

> [!warning]
> When still having issues connecting to the library, use following instructions. This issue has something to do with a legacy component be turned off (see [[#📋 Related articles]]).

1. Install the latest version of [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588).
2. Open a [[Windows PowerShell]] prompt.
3. Connect to the [[SharePoint]] instance using
	```powershell
	$sharepointSite = "{{Admin URL of the SharePoint Site}}"
	Connect-SPOService -Url $sharepointSite
	```
4. Enter the credentials of an administrator.
5. Execute the code below
	```powershell
	Set-SPOTenant -DisableCustomAppAuthentication $false
	```

### Renew secret
To renew the secret, use the following powershell script:
```powershell
$appId = ""

# Connect to AzureAD
Connect-AzAccount

# Get the service principal
$app = Get-AzADServicePrincipal -AppId $appId
$startDate = Get-Date
$endDate = $startDate.AddYears(10)

# Create new credentials
New-AzADSpCredential -ObjectId $App.Id -StartDate $StartDate -EndDate $EndDate
```

The secret can be found in the output.
### Azure AD app-only

## 📋 Related articles
* [Grant access using Azure AD app-only](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread)
* [Grant access using SharePoint app-only](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azureacs)
* https://stackoverflow.com/questions/71079159/unable-to-connect-and-get-sharepoint-data-from-c-sharp-net-core-app
* https://global-sharepoint.com/sharepoint-online/fixed-your-tenant-administrator-has-to-approve-this-app-in-office-365/
* https://sharepoint.stackexchange.com/questions/163395/how-can-i-view-a-list-of-applications-added-by-appregnew-aspx
* https://learn.microsoft.com/en-us/answers/questions/90187/sharepoint-app-only-add-ins-throwing-401-unauthori.html
* https://www.sharepointdiary.com/2020/12/how-to-renew-a-client-secret-in-sharepoint-online-using-powershell.html