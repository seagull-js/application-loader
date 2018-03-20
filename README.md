# Seagull Code Generators

[![Build Status](https://travis-ci.org/seagull-js/application-loader.svg?branch=master)](https://travis-ci.org/seagull-js/application-loader)
[![npm version](https://badge.fury.io/js/%40seagull%2Fapplication-loader.svg)](https://badge.fury.io/js/%40seagull%2Fapplication-loader)
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

This repo contains the application loader for seagull apps. Point it to an app
directory and you will get an object with all features loaded from files,
capable of serializing itself into a CloudFormation template for serverless
deployment.

## Example Usage

```typescript
import { App } from '@seagull/application-loader'

const app = new App('path/to/app/folder')
```
