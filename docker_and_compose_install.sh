#!/bin/bash
set -e

# Alternatively you can use the official docker install script
#wget -qO- https://get.docker.com/ | bash

# Install docker-compose
VERSION=$(curl -s -o /dev/null -I -w "%{redirect_url}\n" https://github.com/docker/compose/releases/latest | grep -oP "[0-9]+(\.[0-9]+)+$")
curl -L https://github.com/docker/compose/releases/download/$COMPOSE_VER/docker-compose-$(uname -s)-$(uname -m) > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
