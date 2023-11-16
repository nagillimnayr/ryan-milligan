#!/bin/bash

# Auto-generate gltfsx files.

# Get directory path from argument.
dir_path="./$1"

output_path="../src/components/canvas/gltfjsx/$1"

model_path="../public/assets/models"

if [ ! -d "$dir_path" ]; then
  echo "$dir_path is Not a directory!"
  npx gltfjsx@6.2.13 "$dir_path" -T -t -s
  exit 1
fi

mkdir -p "$output_path"
if [ ! -d "$output_path" ]; then
  echo "$output_path is Not a directory!"
  exit 1
fi

for file in "$dir_path"/*; do
  # If not a file, then continue.
  if [[ (! -f "$file") ]]; then
    continue
  fi
  # Only want gltf or glb files.
  if [[ ("$file" == *.glb) || ("$file" == *.gltf) ]]; then
    echo "$file"
    new_filename="$(echo "$file" | perl -p -e "s/[^\/\w\-](?!gl|\/)//g")"
    mv "$file" "$new_filename"
    echo "New file name: $new_filename"
    # file_name="$(basename -- "$file")"
    # echo "$file_name"
    npx gltfjsx@6.2.13 "$new_filename" -T -t -s -k
  fi
done

for file in ./*; do
  if [[ ("$file" == *.glb) || ("$file" == *.gltf) ]]; then
    echo "$file"
    mv "$file" "$model_path/$(basename -- "$file")"
  fi
  if [[ ("$file" == *.tsx) ]]; then
    echo "$file"
    # Edit path to assets in the public directory.
    # -i to modify in place.
    sed -i "s/useGLTF('/useGLTF('assets\/models/" "$file"
    sed -i "s/preload('/preload('assets\/models/" "$file"

    file_name="$(basename -- "$file")"
    echo "FIle name: $file_name"
    #  Remove extension from file name to get name of model.
    model_name="$(echo "$file_name" | perl -p -e 's/$\.tsx//p')"
    echo "Model name: $model_name"

    # Rename component. -i to modify in place.
    perl -pi -e "s/(?<=\s)Model/$model_name/" "$file"

    # rm "$file"
    # -f to force overwrite.
    mv -f "$file" "$output_path/$(basename -- "$file")"
  fi
done

echo "Done!"
