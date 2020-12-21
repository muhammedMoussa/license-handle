exports.handler = async () => {
    if (errors) {
      return {
        statusCode: 500,
        body: JSON.stringify(errors)
      };
    }
   
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        PersonnelUrl:"https://payroll.hadaf.website/api",
        IdentityUrl:"https://accesscontrol.hadaf.website"
      }),
      headers: {
        "access-control-allow-origin": "*"
      }
    };
  };