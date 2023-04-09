# Welcome to your CDK TypeScript project

## Useful commands

* `cdk synth`       emits the synthesized CloudFormation template
* `sam local invoke -t cdk.out/LambdaDeployStack.template.json`   invoke lambda locally
* `cdklocal deploy` deploy to localstack
* `AWS_DEFAULT_REGION=eu-north-1 awslocal lambda invoke --function-name helloLambda output.txt` invoke lambda (localstack)
* `AWS_DEFAULT_REGION=eu-north-1 awslocal logs tail /aws/lambda/helloLambda` print logs