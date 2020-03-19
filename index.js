module.exports.requestHooks = [
  context => {
    const contentType = context.request.getHeader('Content-Type');
    const bodyText = context.request.getBodyText();
    const method = context.request.getMethod();

    if (!context.request.hasParameter('__GET_GRAPHQL__')) {
      return;
    }

    let body = {};
    try {
      body = JSON.parse(bodyText);
    } catch (err) {
      return;
    }

    // Not a GraphQL request
    if (!body.query) {
      return;
    }

    context.request.setMethod('GET');
    context.request.setBodyText(null);
    context.request.setParameter('query', body.query);
    context.request.removeParameter('__GET_GRAPHQL__');
    context.request.removeHeader('Content-Type');

    if (body.variables) {
      context.request.setParameter('variables', JSON.stringify(body.variables));
    }

    if (body.operationName) {
      context.request.setParameter('operationName', JSON.stringify(body.operationName));
    }
  },
];
