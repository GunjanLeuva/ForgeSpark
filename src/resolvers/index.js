import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  // Return a dynamic greeting
  const spaceKey = req.context.extension.space.key;
  return `Welcome to the "${spaceKey}" space!`;
});

export const handler = resolver.getDefinitions();
