@echo off
title Generating GIF...

ffmpeg -y -i "sequence/%%04d.png" -vf "palettegen=reserve_transparent=1" palette.png
ffmpeg -framerate 12 -y -i "sequence/%%04d.png" -i palette.png -lavfi "paletteuse=alpha_threshold=128" -gifflags -offsetting 12.gif

del "palette.png" /f

title Done!
rem pause