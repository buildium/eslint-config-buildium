# eslint-config-buildium

## Installation

npm i eslint-config-buildium

Make sure you have the peer dependencies installed:

npm i eslint-plugin-buildium

npm i eslint-config-airbnb-base

```shell
npm install eslint-config-buildium eslint-plugin-buildium eslint-config-airbnb-base eslint-plugin-import eslint --save-dev
```

And add buildium to your .eslintrc in the extend field:

```json
{
    "extend": "buildium"
}
```

Or call `eslint` with buildium as the shared config

```shell
eslint --config buildium src/**
```