@echo off
setlocal enabledelayedexpansion
set "list="

for /r %%i in (*.jpg, *.jpeg, *.png, *.gif, *.bmp, *.tif, *.tiff, *.svg) do (
    if "%%~nxi" neq "list.bat" (
        set "filename=%%~nxi"
        set "list=!list! 'media/!filename!'"
    )
)

echo ^<^<preload %list%^>^> > list.txt