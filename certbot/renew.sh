#!/bin/bash

# Пример:
# 0 5 */7 * * sh /root/projects/wokalek-site/certbot/renew.sh

docker compose -f ../docker-compose.prod.yml up -d --build certbot
docker exec wokalek-nginx nginx -s reload
