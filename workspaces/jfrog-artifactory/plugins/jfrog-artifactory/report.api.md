## API Report File for "@backstage-community/plugin-jfrog-artifactory"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RouteRef } from '@backstage/core-plugin-api';

// @public (undocumented)
export const isJfrogArtifactoryAvailable: (entity: Entity) => boolean;

// @public (undocumented)
export const JfrogArtifactoryPage: () => JSX_2.Element;

// @public (undocumented)
export const jfrogArtifactoryPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;

// (No @packageDocumentation comment for this package)
```
