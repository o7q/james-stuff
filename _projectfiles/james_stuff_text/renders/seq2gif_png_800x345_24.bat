@echo off
title Generating GIF...

ffmpeg -y -i "sequence/%%04d.png" -vf "scale=800:345,palettegen=reserve_transparent=1" "palette.png"
ffmpeg -framerate 24 -y -i "sequence/%%04d.png" -i "palette.png" -lavfi "scale=800:345,paletteuse=alpha_threshold=128" -gifflags -offsetting -loop -1 "render.gif"

title Done!
rem pause