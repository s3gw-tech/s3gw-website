---
title: Release Notes - v0.8.0
description: Release notes for v.0.8.0
slug: release-notes-v0.8
authors:
  - name: The s3gw team
tags: [release-notes]
hide_table_of_contents: false
---


# Release Notes - v0.8.0

This release adds several bug fixes, together with UI improvements. In
addition, the documentation, testing and other have been improved.

<!--truncate-->

This release is meant for testing and feedback gathering. It is not recommended
for production use.

Should a bug be found and not expected to be related to the list below, one
should feel encouraged to file an issue in our
[Github repository](https://github.com/aquarist-labs/s3gw/issues/new/choose).

## Features

- S3GW
  - Added a mechanism to check for incompatibility issues without changing the
    original metadata database. When any incompatibility is found it is also shown
    in the logs.
  - Added GC thread deleting permanently removed buckets, its objects and
    versions.

- UI
  - Add basic object management features (#146).
  - Add feature to upload objects into buckets via browser (#167).

## Fixes

- S3GW
  - Fixed segfault when SFSAtomicWriter::complete is called with mtime output
    variable set to nullptr

- UI
  - Fix table pagination issue. Only the first page was visible.

## What's Changed

- S3GW
  - In order to make stat_bucket call available, SFSBucket::update_container_stat
    now returns 0.

- UI
  - Display an error message on the login page if the RGW endpoint is not
    configured correctly.

- Charts
  - Expose `ETag` header in the Traefik s3gw ingress to allow multipart
    uploads via browser (#170).
  - Add the `OPTIONS` method to the Traefik CORS configuration (#188).
  - Fix an issue in the GW ingress related to TLS + wildcard host.

## Breaking Changes

- None

## Known Issues

- Multipart uploads are currently tracked solely in memory. Should the gateway
  be stopped, ongoing multipart uploads will be lost.
- Listing multipart uploads does not account for prefix or delimiters.


<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
* Update charts submodule after 0.7.0 release by @0xavi0 in https://github.com/aquarist-labs/s3gw/pull/169
* adr: Adds ADR for project labels by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/148
* adr: Add instruction for release captain by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/153
* docs: Update rancher instructions and change addresses by @0xavi0 in https://github.com/aquarist-labs/s3gw/pull/200
* Update the release captain howto to the latest workflow. by @votdev in https://github.com/aquarist-labs/s3gw/pull/201
* Release v0.8.0  by @votdev in https://github.com/aquarist-labs/s3gw/pull/205
* Update docs. by @votdev in https://github.com/aquarist-labs/s3gw/pull/206
* Release v0.8.0 by @votdev in https://github.com/aquarist-labs/s3gw/pull/207
* Adapt and add ADRs by @votdev in https://github.com/aquarist-labs/s3gw/pull/209
* Adapt .gitmodules to new branch names. by @votdev in https://github.com/aquarist-labs/s3gw/pull/210
* Adapt release process docs. Tags need to be created. by @votdev in https://github.com/aquarist-labs/s3gw/pull/211


**Full Changelog**: https://github.com/aquarist-labs/s3gw/compare/v0.7.0...v0.8.0

## Containers

The container images can be found at:
- [s3gw](https://github.com/aquarist-labs/s3gw/pkgs/container/s3gw)
- [s3gw-ui](https://github.com/aquarist-labs/s3gw/pkgs/container/s3gw-ui)
