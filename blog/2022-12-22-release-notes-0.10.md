---
title: Release Notes - v0.10.0
description: Release notes for v.0.10.0
slug: release-notes-v0.10
authors:
  - name: The s3gw team
tags: [release-notes]
hide_table_of_contents: false
---


# Release Notes - v0.10.0

This release contains several important changes to the UI and the charts as well
as the backend.
In addition to that multiple issues in documentation and build tools were fixed.


<!--truncate-->

This release is meant for testing and feedback gathering. It is not recommended
for production use.

Should a bug be found and not expected to be related to the list below, one
should feel encouraged to file an issue in our
[GitHub repository](https://github.com/aquarist-labs/s3gw/issues/new/choose).

## Features

- UI:
  - Display more information on objects
  - Table columns have a show/hide button
  - Add search field to data tables
  - Add progress indicator for the loading process of the Angular app
- Charts:
  - Support certificate manager for handling certificates on endpoints
  - Support cluster internal access with TLS enabled
- SFS/Backend
  - Add status page
  - Add metrics page exposing s3gw internal data to monitoring (e.g. Prometheus)

## Fixes

- UI:
  - A page reload now does not disable the admin switch
  - Persist data tables pagination settings

## Breaking Changes

No known breaking changes


<!-- Release notes generated using configuration in .github/release.yaml at v0.10.0 -->

## What's Changed
* doc: unify commit signing requirements by @tserong in https://github.com/aquarist-labs/s3gw/pull/268
* docs: update docs of helm deployment by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/264
* ci: release workflow push to quay.io by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/280
* docs: update the S3 compatibility table by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/278
* docs: add updated roadmap by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/274
* docs: add the contributing guides to docs by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/279
* docs: update documentation for cert-manager and TLS by @giubacc in https://github.com/aquarist-labs/s3gw/pull/282
* docs: add project vision by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/276
* docs: ensure helm documentation suggests https url by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/288
* docs: fix markdown syntax for ADR 0004 by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/287
* docs: rework readme by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/291
* Docs: add requirements to docs & small updates to index page by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/293
* docs: logo and fixup readme links by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/294
* Remove paths from requirements.txt by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/296
* release: v0.10.0 by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/299
* release: fixup for release v0.10.0 by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/300

## New Contributors
* @tserong made their first contribution in https://github.com/aquarist-labs/s3gw/pull/268

**Full Changelog**: https://github.com/aquarist-labs/s3gw/compare/v0.9.1...v0.10.0

## Containers

The container images can be found at:
- [s3gw](https://quay.io/repository/s3gw/s3gw)
- [s3gw-ui](https://quay.io/repository/s3gw/s3gw-ui)
