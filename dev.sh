#!/bin/bash

GREEN=$'\e[0;32m'  
BOLD=$'\e[1m'            
NC=$'\e[0m'        

echo -e "${BOLD}${GREEN}1: cd to tunnel-io${NC}"
cd ../tunnel.io && npm link

echo -e  "${BOLD}${GREEN}2: done linking tunnel-io cd to tunnel-react${NC}"
cd ../tunnel-react && npm link @ayushbobale/tunnel-io && npm link && npm list --link

echo -e "${BOLD}${GREEN}3: done linking tunnel-react cd to tunnel-tester${NC}"
cd ../tunnel.tester && npm link @ayushbobale/tunnel-react
npm list --link 