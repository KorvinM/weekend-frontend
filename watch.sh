#can't get sass -watch to work for some reason, hence this bash script

while true; do
  inotifywait -e modify sass/
  # Do something *after* a write occurs, e.g. copy the file
  sass sass/style.scss:style.css
  sass sass/3d.scss:3d.css
done

