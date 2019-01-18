// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  mainEndpoint: 'http://localhost:8080/api/v1/',
  // authEndpoint: 'http://des-sisdnit.dev.serpro:8080/sisdnit-backend/api/auth',
  authEndpoint: 'http://localhost:8080/api/v1/',
  whitelistedDomains: ['localhost:8080', 'des-sisdnit.dev.serpro:8080'],
  useHash: false,
  development: true,
  hmr: false
};
