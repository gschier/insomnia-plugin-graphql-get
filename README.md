# Insomnia GraphQL Over GET

[![Npm Version](https://img.shields.io/npm/v/insomnia-plugin-graphql-get.svg)](https://www.npmjs.com/package/insomnia-plugin-graphql-get)

This is a plugin for [Insomnia](https://insomnia.rest) that optionally transforms GraphQL `POST`
requests into `GET` requests (something Insomnia does not support).

## Installation

Install the `insomnia-plugin-graphql-get` plugin from Preferences > Plugins.

## Usage

1. Create a standard GraphQL `POST` request in Insomnia
2. Add parameter in the Query tab with name `__GET_GRAPHQL__` 
3. Send the request

_NOTES: This plugin will remove the `__GET_GRAPHQL__` query parameter after transformation._
