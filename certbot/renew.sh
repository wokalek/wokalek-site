#!/bin/bash

# Пример crontab:
# 0 5 */1 * * sh /root/projects/wokalek-site/certbot/renew.sh /root/projects/wokalek-site/docker-compose.prod.yml

docker compose -f $1 up --build certbot
docker restart wokalek-nginx
