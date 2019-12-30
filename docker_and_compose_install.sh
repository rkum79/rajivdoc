#!/bin/bash
sudo true
set -eu

# Alternatively you can use the official docker install script
#sudo wget -qO- https://get.docker.com/ | bash
sudo usermod -aG docker Simon
# Install docker-compose
COMPOSE_VER=$(curl -s -o /dev/null -I -w "%{redirect_url}\n" https://github.com/docker/compose/releases/latest | grep -oP "[0-9]+(\.[0-9]+)+$")
curl -o /usr/local/bin/docker-compose -L https://github.com/docker/compose/releases/download/$COMPOSE_VER/docker-compose-$(uname -s)-$(uname -m)
chmod 755 /usr/local/bin/docker-compose
docker-compose --version
