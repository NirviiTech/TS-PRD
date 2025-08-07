# Create Client Directories
$clientDirs = @(
    "client/public",
    "client/src/assets",
    "client/src/components",
    "client/src/layouts",
    "client/src/pages/auth",
    "client/src/pages/dashboard",
    "client/src/pages/clients",
    "client/src/pages/employees",
    "client/src/pages/projects",
    "client/src/pages/invoices",
    "client/src/pages/reports",
    "client/src/routes",
    "client/src/services",
    "client/src/hooks",
    "client/src/context",
    "client/src/types",
    "client/src/utils"
)

# Create Server Directories
$serverDirs = @(
    "server/src/config",
    "server/src/controllers",
    "server/src/routes",
    "server/src/middleware",
    "server/src/models",
    "server/src/services",
    "server/src/utils"
)

# Create Shared and Scripts Directories
$otherDirs = @(
    "shared",
    "scripts"
)

# Function to create directories
function Create-Directories {
    param (
        [string[]]$directories
    )
    
    foreach ($dir in $directories) {
        $fullPath = Join-Path -Path $PSScriptRoot -ChildPath $dir
        if (-not (Test-Path -Path $fullPath)) {
            New-Item -Path $fullPath -ItemType Directory -Force | Out-Null
            Write-Host "Created directory: $dir"
        } else {
            Write-Host "Directory already exists: $dir"
        }
    }
}

# Create all directories
Write-Host "Creating directory structure..." -ForegroundColor Green

Write-Host "`nCreating Client directories..." -ForegroundColor Cyan
Create-Directories -directories $clientDirs

Write-Host "`nCreating Server directories..." -ForegroundColor Cyan
Create-Directories -directories $serverDirs

Write-Host "`nCreating Shared and Scripts directories..." -ForegroundColor Cyan
Create-Directories -directories $otherDirs

# Create empty files
$files = @(
    "client/public/index.html",
    "client/src/App.tsx",
    "client/src/main.tsx",
    "client/tailwind.config.js",
    "client/vite.config.ts",
    "client/index.css",
    "server/package.json",
    "server/tsconfig.json",
    "shared/constants.ts",
    "shared/enums.ts",
    "shared/types.ts",
    "shared/validationSchemas.ts",
    "scripts/mock-employees.json",
    "scripts/importEmployees.ts",
    "scripts/generateInvoices.ts",
    ".env",
    ".env.development.local",
    "README.md",
    "tsconfig.json"
)

foreach ($file in $files) {
    $fullPath = Join-Path -Path $PSScriptRoot -ChildPath $file
    $directory = [System.IO.Path]::GetDirectoryName($fullPath)
    
    if (-not (Test-Path -Path $directory)) {
        New-Item -Path $directory -ItemType Directory -Force | Out-Null
    }
    
    if (-not (Test-Path -Path $fullPath)) {
        New-Item -Path $fullPath -ItemType File -Force | Out-Null
        Write-Host "Created file: $file"
    } else {
        Write-Host "File already exists: $file"
    }
}

Write-Host "`nDirectory structure and files created successfully!" -ForegroundColor Green
