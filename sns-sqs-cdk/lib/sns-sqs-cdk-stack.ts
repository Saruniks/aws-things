import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import path = require('path');
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class SnsSqsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const topic = new sns.Topic(this, 'SnsSqsCdkTopic', {
      displayName: 'TestTopic',
    });

    const queue = new sqs.Queue(this, 'SnsSqsCdkQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    topic.addSubscription(new subscriptions.SqsSubscription(queue))

    const consumeFunction = new NodejsFunction(this, 'ConsumeFunction', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'main',
      entry: path.join(__dirname, '/../src/consume-lambda/index.ts')
    })

    consumeFunction.addEventSource(
      new SqsEventSource(queue)
    )
  }
}
