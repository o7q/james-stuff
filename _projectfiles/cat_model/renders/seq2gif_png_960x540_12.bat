@echo off
title Generating GIF...

ffmpeg -y -i "sequence/%%04d.png" -vf "scale=960:540,palettegen=reserve_transparent=1:max_colors=32" "palette.png"
ffmpeg -framerate 12 -y -i "sequence/%%04d.png" -i "palette.png" -lavfi "scale=960:540,paletteuse=alpha_threshold=128" -gifflags -offsetting "960x540_12.gif"

title Done!
rem pause