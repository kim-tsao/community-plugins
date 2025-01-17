/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import useAsync from 'react-use/esm/useAsync';

import { Progress, Table } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';

import { formatDate } from '@janus-idp/shared-react';

import { AzureContainerRegistryApiRef } from '../../api';
import { Tag, TagRow } from '../../types';
import { ErrorReport } from './ErrorReport';
import { columns, useStyles } from './tableHeading';

type AzureContainerRegistryProps = {
  image: string;
};

export const AzureContainerRegistry = ({
  image,
}: AzureContainerRegistryProps) => {
  const AzureContainerRegistryClient = useApi(AzureContainerRegistryApiRef);
  const classes = useStyles();
  const title = `Azure Container Registry Repository: ${image}`;
  const { loading, value, error } = useAsync(() =>
    AzureContainerRegistryClient.getTags(image),
  );

  if (loading) {
    return (
      <div data-testid="acr-repository-loading">
        <Progress />
      </div>
    );
  }

  if (!loading && error) {
    return (
      <ErrorReport title="Could not fetch data." errorText={error.toString()} />
    );
  }

  const data: TagRow[] = (value?.tags || []).map((tag: Tag) => {
    return {
      name: tag.name,
      createdTime: formatDate(tag.createdTime),
      lastModified: formatDate(tag.lastUpdateTime),
      manifestDigest: tag.digest,
      id: tag.name,
    };
  });

  return (
    <div data-testid="acr-repository-view" style={{ border: '1px solid #ddd' }}>
      <Table
        title={title}
        options={{ paging: true, padding: 'dense' }}
        data={data}
        columns={columns}
        emptyContent={<div className={classes.empty}>No data found.</div>}
      />
    </div>
  );
};
