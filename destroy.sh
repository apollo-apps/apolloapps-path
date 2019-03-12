#!/bin/sh

docker swarm leave -f && docker system prune -af
