import { copyDataFromLocaleHandler } from '@payloadcms/ui/rsc';
import { buildFormStateHandler } from '@payloadcms/ui/utilities/buildFormState';
import { buildTableStateHandler } from '@payloadcms/ui/utilities/buildTableState';
import { getFolderResultsComponentAndDataHandler } from '@payloadcms/ui/utilities/getFolderResultsComponentAndData';
import { schedulePublishHandler } from '@payloadcms/ui/utilities/schedulePublishHandler';
import { renderDocumentHandler } from '../views/Document/handleServerFunction.js';
import { renderDocumentSlotsHandler } from '../views/Document/renderDocumentSlots.js';
import { renderListHandler } from '../views/List/handleServerFunction.js';
import { initReq } from './initReq.js';
const serverFunctions = {
  'copy-data-from-locale': copyDataFromLocaleHandler,
  'form-state': buildFormStateHandler,
  'get-folder-results-component-and-data': getFolderResultsComponentAndDataHandler,
  'render-document': renderDocumentHandler,
  'render-document-slots': renderDocumentSlotsHandler,
  'render-list': renderListHandler,
  'schedule-publish': schedulePublishHandler,
  'table-state': buildTableStateHandler
};
export const handleServerFunctions = async args => {
  const {
    name: fnKey,
    args: fnArgs,
    config: configPromise,
    importMap
  } = args;
  const {
    req
  } = await initReq({
    configPromise,
    importMap,
    key: 'RootLayout'
  });
  const augmentedArgs = {
    ...fnArgs,
    importMap,
    req
  };
  const fn = serverFunctions[fnKey];
  if (!fn) {
    throw new Error(`Unknown Server Function: ${fnKey}`);
  }
  return fn(augmentedArgs);
};
//# sourceMappingURL=handleServerFunctions.js.map