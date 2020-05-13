FROM alpine
COPY /app .
RUN apk update && apk add nodejs npm && npm i
CMD [ "npm", "start" ]
