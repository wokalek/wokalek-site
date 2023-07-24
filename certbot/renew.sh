#!/bin/bash

# Пример:
# 0 5 */1 * * sh /root/projects/wokalek-site/certbot/renew.sh

docker compose -f ../docker-compose.prod.yml up --build certbot
docker exec wokalek-nginx nginx -s reload
