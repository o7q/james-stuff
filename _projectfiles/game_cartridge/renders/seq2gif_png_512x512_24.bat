@echo off
title Generating GIF...

ffmpeg -y -i "sequence/%%04d.png" -vf "scale=512:512,palettegen=reserve_transparent=1:max_colors=32" "palette.png"
ffmpeg -framerate 24 -y -i "sequence/%%04d.png" -i "palette.png" -lavfi "scale=512:512,paletteuse=alpha_threshold=128" -gifflags -offsetting "512x512_24.gif"

title Done!
rem pause