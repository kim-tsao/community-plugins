## API Report File for "@backstage-community/backstage-plugin-scaffolder-backend-module-mta"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BackendFeatureCompat } from '@backstage/backend-plugin-api';
import { JsonObject } from '@backstage/types';
import { TemplateAction } from '@backstage/plugin-scaffolder-node';

// @public (undocumented)
export function createMTAApplicationAction(opts: any): TemplateAction<    {
name: string;
url: string;
branch: string;
rootPath: string;
}, JsonObject>;

// @public (undocumented)
const mtaScaffolderModule: BackendFeatureCompat;
export default mtaScaffolderModule;

// Warnings were encountered during analysis:
//
// /Users/ibolton/Development/community-plugins/workspaces/mta/plugins/scaffolder-backend-module-mta/src/actions/mta/create-application.ts:8:1 - (ae-undocumented) Missing documentation for "createMTAApplicationAction".
// /Users/ibolton/Development/community-plugins/workspaces/mta/plugins/scaffolder-backend-module-mta/src/module.ts:12:14 - (ae-undocumented) Missing documentation for "mtaScaffolderModule".

```