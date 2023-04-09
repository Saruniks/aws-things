#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SnsSqsCdkStack } from '../lib/sns-sqs-cdk-stack';

const app = new cdk.App();
new SnsSqsCdkStack(app, 'SnsSqsCdkStack', {
  env: { account: '988317291885', region: 'eu-north-1' },
});