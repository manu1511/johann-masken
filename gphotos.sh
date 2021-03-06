#!/bin/bash


RE='\["AF1Q.*?",\["\K(.*?)(?="\,)'
URL="https://photos.app.goo.gl/Cv5DDPJbpnh51mgZ7";

PHOTOS=$(curl -L "$URL" | perl -MHTML::Entities -pe 'decode_entities($_);' | grep -oP $RE)

cld -C johann delete_resources_by_prefix "photos/"
cld -C johann delete_folder "photos"

rm -rf public/photos
mkdir public/photos

cd $_
echo 'export default [' > ../../gphotos.js

for photo in $PHOTOS; do
    curl -JLO "${photo}=d"
    f=$(ls -t | head -1)
	mogrify -auto-orient "$f"

	w=$(identify -format "%w" "$f")
	h=$(identify -format "%h" "$f")

    echo '  { src: "/photos/'$f'", width: "'$w'", height: "'$h'" }, ' >> ../../gphotos.js

	cld -C johann upload "$f" folder="photos"
done

echo ']' >> ../../gphotos.js
