import { createClientConfig } from 'payload';
import { cache } from 'react';
let cachedClientConfigs = global._payload_clientConfigs;
if (!cachedClientConfigs) {
  cachedClientConfigs = global._payload_clientConfigs = {};
}
export const getClientConfig = cache(args => {
  const {
    config,
    i18n,
    importMap
  } = args;
  const currentLanguage = i18n.language;
  if (cachedClientConfigs[currentLanguage] && !global._payload_doNotCacheClientConfig) {
    return cachedClientConfigs[currentLanguage];
  }
  const cachedClientConfig = createClientConfig({
    config,
    i18n,
    importMap
  });
  cachedClientConfigs[currentLanguage] = cachedClientConfig;
  global._payload_clientConfigs = cachedClientConfigs;
  global._payload_doNotCacheClientConfig = false;
  return cachedClientConfig;
});
//# sourceMappingURL=getClientConfig.js.map