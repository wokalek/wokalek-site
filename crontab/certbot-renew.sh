#!/bin/bash

# Пример crontab:
# 0 3 * * * bash /root/projects/wokalek-site/crontab/certbot-renew.sh /root/projects/wokalek-site/docker-compose.prod.yml

docker compose -f $1 up --build certbot
docker restart wokalek-nginx
