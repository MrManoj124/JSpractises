@echo off
REM Start Web Server for JavaScript Learning Platform
REM This script launches the website on http://localhost:8000

echo.
echo ========================================
echo   JavaScript Learning Platform
echo   Local Web Server Launcher
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo.
    echo Please install Python from: https://www.python.org/downloads/
    echo Make sure to check "Add Python to PATH" during installation
    echo.
    pause
    exit /b 1
)

echo Starting web server...
echo.
echo ✓ Server will run on: http://localhost:8000
echo ✓ Open this URL in your browser
echo.
echo Press Ctrl+C to stop the server
echo.

python -m http.server 8000

pause
