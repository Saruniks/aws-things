import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaDeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Function(this, "HelloLambda", {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset("src"),
      handler: "index.handler",
      functionName: "helloLambda"
    })
  }
}
