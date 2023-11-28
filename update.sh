#!/bin/bash

git pull
current_amount="$(awk -F 'const currentAmountRaised = ' '{print $2}' src/pages/index.tsx)";
current_amount=${current_amount:1}
current_amount=${current_amount::${#current_amount}-1};
new_val="$(($1 + $current_amount))";
sed -i '' "35s/$current_amount/ $new_val/" "src/pages/index.tsx"
git add src/pages/index.tsx
git commit -m "updates currentAmountRaised to $new_val"
git push
