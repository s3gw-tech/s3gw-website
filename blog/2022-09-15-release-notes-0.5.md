---
title: Release Notes - v0.5.0
description: Release notes for v.0.5.0
slug: release-notes-v0.5
authors:
  - name: The s3gw team
tags: [release-notes]
hide_table_of_contents: false
---


# Release Notes - v0.5.0

This release add a few small fixes to the last release, especially in the UI.
In addition to that, testing and other development processes have improved quite
a bit.

<!--truncate-->

This release is meant for testing and feedback gathering. It is not
recommended for production use.

Should a bug be found and not expected to be related to the list below, one
should feel encouraged to file an issue in our [github
repository](https://github.com/aquarist-labs/s3gw).

## Features

- UI: Add Dashboard widget framework. aquarist-labs/s3gw#91
- UI: Add `Total users` and `Total buckets` Dashboard widgets.
- Chart: The variables `hostnameNoTLS`, `ui.hostname` and `ui.hostnameNoTLS`
  has been added to configure the hostnames of the S3GW and S3GW-UI.
- Chart: Defaulted `ui.enabled` to `true`.
- S3GW:  Added columns in the sqlite buckets table: zone_group & quota

## Fixes

- S3GW: Fixed the admin API request: get-bucket-info where the client was
  receiving an empty response. aquarist-labs/s3gw#87
- UI: Mark the user/bucket quota settings in the user form as non-functional
  because the feature is not properly supported by the S3GW.
  aquarist-labs/s3gw#106
- Chart: Rename the `access_key` and `secret_key` variable names according
  the Helm Chart best practices guide to `accessKey` and `secretKey`.
- Chart: Rename the `enableIngress` variable to `ingress.enabled`.
- Chart: Relocate the variables `imageRegistry_ui`, `imageName_ui`,
  `imageTag_ui` and `imagePullPolicy_ui` to `ui.imageRegistry`,
  `ui.imageName`, `ui.imageTag` and `ui.imagePullPolicy`

## Breaking Changes

- None

## Known Issues

- Multipart uploads don't work


## What's Changed
* docs: update k3s-setup section by @torchiaf in https://github.com/aquarist-labs/s3gw/pull/93
* ci: pass credentials to s3gw-tools workflow by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/101
* ci: use secret inherittance by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/102
* Adds templates for issues & PR by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/97
* Updates PR template by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/104
* ci: release workflow by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/105
* ci: create github release by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/109
* release: v0.5.0 by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/111
* ci: release workflow: use github token by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/112

## New Contributors
* @torchiaf made their first contribution in https://github.com/aquarist-labs/s3gw/pull/93

**Full Changelog**: https://github.com/aquarist-labs/s3gw/compare/v0.4.0...v0.5.0
