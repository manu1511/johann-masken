#!/bin/bash


RE='\["AF1Q.*?",\["\K(.*?)(?="\,)'
URL="https://photos.app.goo.gl/Cv5DDPJbpnh51mgZ7";

PHOTOS=$(curl -L "$URL" | perl -MHTML::Entities -pe 'decode_entities($_);' | grep -oP $RE)

rm -rf public/photos
mkdir public/photos

cd $_
echo 'export default [' >> index.js

for photo in $PHOTOS; do
    curl -JLO "${photo}=d"
    f=$(ls -t | head -1)
	w=$(identify -format "%w" $f)
	h=$(identify -format "%h" $f)

    echo '  { src: "'$f'", width: '$w', height: '$h' }, ' >> index.js
done

echo ']' >> index.js
