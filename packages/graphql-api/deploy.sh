#!/bin/bash

echo "Provisioning database..."
prisma deploy
yarn start