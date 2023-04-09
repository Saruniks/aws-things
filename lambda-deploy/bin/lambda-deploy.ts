#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaDeployStack } from '../lib/lambda-deploy-stack';

const app = new cdk.App();
new LambdaDeployStack(app, 'LambdaDeployStack', {
  env: { account: '000000000000', region: 'eu-north-1' },
});