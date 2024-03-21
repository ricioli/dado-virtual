cd /root/nlw/docker-expo-image
docker build . -t ricioli/expo
docker run -it --rm -v /app:/app -p 19000-19010:19000-19010 ricioli/expo
docker run -d --name dados --rm -v /root/dados:/app -p 19000-19010:19000-19010 ricioli/expo npx expo start
