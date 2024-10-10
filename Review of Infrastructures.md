# Review of Alastria Networks

There are two type of major networks under **Alastria**

- Alastria Red-T (Quorum technology)
- Alstria Red-B Network - this one is the one which is proposed in our framework
  - IBFT 2.0 Consensus Algorithm
  - Based on Hyperledger Besu Technology

## Setting up of Alastria Red-B Network

This requires two steps:

1. Installation & configuration based on the given steps using Docker
2. Get permissioned before using Alastria Network - this requires an electronic form to be filled and submitted.

## System Requirement:

- We need to have dedicated storage for node database which should be independent from the system database:
- OS - Ubuntu, and other Linux distributions
- Hosting: **Euro Zone; in order to complain with GDPR directives** _this means that we should have the development environment setup somewhere in this region with any cloud service such as AWS, Azure)_
- Docker and docker-compose should installed in the system
- The system should have CPU's minimum of 2GB and 4GB desired
- Memory of minimum of 4GB and recommended 8GB
- Hard Disk of minimum of 64GB and recommended of 256GB -- SSD Type

## Monitoring tools

- We can utilize **Grafana** and **Prometheus**; these are the monitoring tool for any activity in our node.
- Access is restricted to allowed hosts

## Connecting to the Network

- We can use **JSON RPC** **GraphQL** or **WebSocket** to connect to the development tools

## Development tools

- We have option to choose from **Hardhat**, **Truffle**, or **Remix**.

# ALSTRIA IDENTITY

_SSI Implementation of the on Alastria Network_

> developed and tested for Quorum (Geth) on the Alastria Red-T network.

If we are going to use the existing built-in SSI technology, perhaps we may need to rethink about the choice of the network as it is working only Alastria Red-T Network.

- they have Typescript Alastria Identity Library that we can utilize for our application in any specific use case.

# Deploy Hyperledger Besu Node on Alastria Network

> - The new node owner installs the software in a machine (physical or virtual) that complies with the minimum requirements.
> - The new node owner requests inclusion of the node into the network by creating a pull request with some of the information created during the installation process, including the unique address of the node (enode).
> - The rest of the network nodes update automatically their permissioning information, and allow the new node to connect.
> - The new node is already part of the Alastria network.

# Links and Resources

- _GoQuorum Offical Repo_: https://github.com/Consensys/quorum
- _ZSL Proof of Concept_: https://github.com/Consensys/quorum/wiki/ZSL
- _Alastria Platform En_: https://github.com/alastria/alastria-platform-TO_BE_UPDATED/tree/master/en
- _Regular Nodes List_: https://github.com/alastria/alastria-node/blob/testnet2/DIRECTORY_REGULAR.md

<!-- UPDATED API ENDPOINTS -->

| HTTP Method   | Path                                  | Summary                                     |
| ------------- | ------------------------------------- | ------------------------------------------- |
| GET           | `/data`                               | Retrieve Data                               |
| GET           | `/pause-state`                        | Retrieve Current Pause State                |
| GET           | `/providers`                          | Retrieve All Providers                      |
| GET           | `/producers/{producerId}/records`     | Retrieve Producer Records                   |
| GET           | `/producers/{producerId}/info`        | Retrieve Producer Record Info               |
| GET           | `/producers/{producerId}/status`      | Retrieve Producer Record Status             |
| GET           | `/producers/{producerId}/consent`     | Retrieve Producer Record Consent            |
| GET           | `/record-schema`                      | Retrieve Record Schema                      |
| GET           | `/providers/metadata`                 | Retrieve Provider Metadata                  |
| GET           | `/producers/{producerId}/count`       | Retrieve Count of Producer Records          |
| GET           | `/producers/{producerId}/exists`      | Check Whether Producer Record Exists        |
| POST          | `/producers`                          | Register a New Producer                     |
| POST          | `/producers/{producerId}/records`     | Update a Producer Record                    |
| POST          | `/producers/{producerId}/consent`     | Update Producer Consent                     |
| DELETE        | `/producers/{producerId}/records`     | Remove a Producer Record                    |
| POST          | `/pause-contract`                     | Change Pause State                          |
| POST          | `/ownership/renounce`                 | Renounce Ownership                          |
| POST          | `/ownership/transfer`                 | Transfer Ownership                          |
| PATCH         | `/providers/metadata`                 | Update Provider Metadata                    |
| PATCH         | `/providers/schema`                   | Update Provider Record Schema               |
| PATCH         | `/producers/{producerId}/metadata`    | Update Producer Record Metadata             |
| PATCH         | `/producers/{producerId}/status`      | Update Producer Record Status               |
| HTTP Method   | Path                                  | Summary                                     |
| ------------- | ------------------------------------- | ------------------------------------------- |
| GET           | `/getData`                            | Get Data                                    |
| GET           | `/pauseState`                         | Get Pause State                             |
| GET           | `/provider`                           | Get Provider                                |
| GET           | `/getProducerRecord`                  | Get Producer Record                         |
| GET           | `/getProducerRecordInfo`              | Get Producer Record Info                    |
| GET           | `/getProducerRecordStatus`            | Get Producer Record Status                  |
| GET           | `/getProducerConsent`                 | Get Producer Record Consent                 |
| GET           | `/getRecordSchema`                    | Get Record Schema                           |
| GET           | `/getProviderMetadata`                | Get Provider Metadata                       |
| GET           | `/getProducerRecordCount`             | Get Producer Record Count                   |
| GET           | `/producerExists`                     | Check Whether Producer Record Exists        |
| POST          | `/registerProducer`                   | Register Producer                           |
| POST          | `/updateProducerRecord`               | Update Producer Record                      |
| POST          | `/updateProducerConsent`              | Update Producer Consent                     |
| POST          | `/removeProducerRecord`               | Remove Producer Record                      |
| POST          | `/changePauseState`                   | Pause Contract                              |
| POST          | `/renounceOwnership`                  | Renounce Ownership                          |
| POST          | `/transferOwnership`                  | Transfer Ownership                          |
| POST          | `/updateProviderMetadata`             | Update Provider Metadata                    |
| POST          | `/updateProviderRecordSchema`         | Update Provider Record Schema               |
| POST          | `/updateProducerRecordMetadata`       | Update Producer Record Metadata             |
| POST          | `/updateProducerRecordStatus`         | Update Producer Record Status               |
