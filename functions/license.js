exports.handler = async () => {
    if (errors) {
      return {
        statusCode: 500,
        body: JSON.stringify(errors)
      };
    }
   
    return {
      statusCode: 200,
      body: JSON.stringify({ data: 'data' }),
      headers: {
        "access-control-allow-origin": "*"
      }
    };
  };