sudo docker build -t pedrovsilva/biblioteca-interface .

sudo docker run -e REACT_APP_API_BASE_URL=http://IP:3000 -p 3000:3000 -d pedrovsilva/biblioteca-interface


