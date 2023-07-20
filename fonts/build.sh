#!/bin/bash

echo '---'

search_dir="/app"
output_dir="/app/optimized"

for entry in `find $search_dir -name "*.ttf"`; do
    file_name=`basename "$entry"`
    file_name_output=`echo "$file_name" | sed "s|.ttf|-subset.woff2|g"`

    if test -f "$output_dir/$file_name_output"; then
        continue
    fi

    glyphhanger --formats=woff2 --output=$output_dir --subset=$file_name &
done

wait
