FROM alpine:3.8

RUN apk --update add nodejs nodejs-npm

RUN apk --no-cache add curl \
    && curl -sL https://github.com/openfaas/faas/releases/download/0.9.14/fwatchdog > /usr/bin/fwatchdog \
    && chmod +x /usr/bin/fwatchdog

COPY ./app /app
WORKDIR /app

RUN npm i

ENV fprocess="node index.js"
CMD ["fwatchdog"]
