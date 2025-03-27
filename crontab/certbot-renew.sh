#!/bin/bash

# Пример crontab:
# 0 5 * * * sh /root/projects/wokalek-site/crontab/certbot-renew.sh /root/projects/wokalek-site/docker-compose.prod.yml

docker compose -f $1 up certbot
docker restart wokalek-nginx
