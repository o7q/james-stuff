@echo off
title Generating GIF...

ffmpeg -y -i "sequence/%%04d.png" -vf "scale=1920:1080,palettegen=reserve_transparent=1:max_colors=32" "palette.png"
ffmpeg -framerate 12 -y -i "sequence/%%04d.png" -i "palette.png" -lavfi "scale=1920:1080,paletteuse=alpha_threshold=128" -gifflags -offsetting "1920x1080_12.gif"

title Done!
rem pause