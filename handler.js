'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.soma = async event => {
  var a = event.queryStringParameters.a
  var b = event.queryStringParameters.b
  
  var result = soma( parseInt(a), parseInt(b))
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        resultado: result,
      },
      null,
      2
    ),
  };
  
}

function soma(a,b){
  return a+b;
}
