docker run -it --rm -v /app:/app -p 19000-19010:19000-19010 ricioli/expo
docker build . -t ricioli/expo
cd /root/nlw/docker-expo-image
