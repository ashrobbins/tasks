#!/bin/sh
if [ -z $PLMM_API ] || [ -z $FOOTBALL_API ]; then
  echo "The PLMM_API and FOOTBALL_API environment variables must be set!"
  exit 1
fi

sed -i "s,https://pl-mm.dev.platform.pulselive.com,${PLMM_API}," /usr/share/nginx/html/scripts/bundle.js
sed -i "s,https://api.dev.platform.pulselive.com/football,${FOOTBALL_API}," /usr/share/nginx/html/scripts/bundle.js
nginx -g "daemon off;"
