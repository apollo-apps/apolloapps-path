# Apollo Apps: PATH message bus framework

This is a prototype.

## Description

#### Tech Stack

- [Docker](https://docker.io): Docker and "containers" in general are lightweight virtualization layer that shares an underlying kernel

- [OpenFaaS](https://openfaas.com): an open source function-as-a-service framework built on docker that can be deployed anywhere on anything

  - [Docs](https://docs.openfaas.com/)
  - [Sample functions](https://github.com/openfaas/faas/tree/master/sample-functions)

- [NSQ](https://nsq.io): A simple, high performance message bus written in GoLang
  - [Overview](https://nsq.io/deployment/topology_patterns.html)
  - [HTTP / REST endpoint docs](https://nsq.io/components/nsqd.html#http-api): (essentially a built-in producer)
  - [Client Libraries](https://nsq.io/clients/client_libraries.html)

#### Project Layout

- [Producers](/producers): A producer is any app or service that fetches data from an external source and publishes it to the message bus
- [Consumers](/consumers): A consumer is any app or service that listens to channels / topics on the messaging bus

## Getting started:

- [ ] Install Docker
- [ ] Deploy stack locally: `./start.sh`

### Producers

**Definition:**
