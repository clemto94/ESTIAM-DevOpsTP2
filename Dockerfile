FROM ubuntu:18.04
RUN apt-get update; \
  	apt-get install
RUN apt-get install nodejs npm -y
RUN ln -s /usr/bin/nodejs /usr/local/bin/node; \
    ln -s /usr/bin/npm /usr/local/bin/npm
COPY ./app /myApp
COPY --chown= . .
# pour changer de repertoire
WORKDIR /myApp 
# ENTRYPOINT [ "cd", "myApp/" ]
CMD [ "npm", "start"]
# CMD [ "bash", "-c", "cd", "/bin"]
# CMD [ "ls" ]
EXPOSE 3000