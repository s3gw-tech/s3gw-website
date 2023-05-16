---
title: Release Notes - v0.11.0
description: Release notes for v.0.11.0
slug: release-notes-v0.11
authors:
  - name: The s3gw team
tags: [release-notes]
hide_table_of_contents: false
---


# Release Notes - v0.11.0

This release contains several notable features on the User Interface and on
the Helm Chart, in addition to prefix support when listing objects and an
updated version of the radosgw we use for the backend.

<!--truncate-->

This release is meant for testing and feedback gathering. Is is not
recommended for production use.

Should a bug be found and not expected to be related to the list below, one
should feel encouraged to file an issue in our
[GitHub repository](https://github.com/aquarist-labs/s3gw/issues/new/choose).

## Features

- UI:
  - Add tags support for buckets (gh#aquarist-labs/s3gw#285).
  - Add notification sidebar (gh#aquarist-labs/s3gw#172).
  - Add option to remove buckets objects before deleting a bucket in the
    administrator view.

- Charts:
  - Configuration options: `useExistingSecret` and
    `defaultUserCredentialsSecret`.

    These fields allow the user to specify an existing secret containing
    the S3 credentials for the default user.
  - `useExistingSecret` is a boolean field defaulted to false.
  - `defaultUserCredentialsSecret` is a string field denoting a `secret` in
    the `s3gw` namespace. It must contain 2 keys:
    - `RGW_DEFAULT_USER_ACCESS_KEY` that is the S3 Access Key for the default
      user.
    - `RGW_DEFAULT_USER_SECRET_KEY` that is the S3 Secret Key for the default
      user.
  - When `useExistingSecret` is set to `false`, the chart will create
    the secret using values from the preexisting fields `accessKey` and
    `secretKey`.
  - Setting `accessKey` or `secretKey` as the empty string, will force the
    Chart to compute random alphanumeric values for the fields.
  - Defaulted values:
    - `useExistingSecret`: false
    - `defaultUserCredentialsSecret`: s3gw-creds

- SFS/Backend:
  - Added prefix support when listing objects and object versions.

## Fixes

None that are particularly noteworthy.

## Breaking Changes

None that we are aware of.

## Known Issues

- UI:
  - It is not possible to remove all tags (gh#aquarist-labs/s3gw#314).
  - It is not possible to change the bucket owner (gh#aquarist-labs/s3gw#86).


<!-- Release notes generated using configuration in .github/release.yaml at v0.11.0 -->

## What's Changed
* ci: migrate github output by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/307
* Change `ghcr.io/aquarist-labs` to `quay.io/s3gw`. by @votdev in https://github.com/aquarist-labs/s3gw/pull/310
* Update documentation for default-user S3 credentials by @giubacc in https://github.com/aquarist-labs/s3gw/pull/309
* ci: add nightly build by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/308
* ci: fix nightly build syntax by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/315
* ci: nightly - remove references to set-git-refs by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/316
* ci: nightly builds log into quay.io by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/317
* ci: use correct quay.io repo by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/318
* ci: nightly pipeline build-env outputs the tag by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/319
* docs: add release notes for v0.2.0 and v0.4.0 by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/320


**Full Changelog**: https://github.com/aquarist-labs/s3gw/compare/v0.10.0...v0.11.0

## Containers

The container images can be found at:

* [s3gw](https://quay.io/repository/s3gw/s3gw)
* [s3gw-ui](https://quay.io/repository/s3gw/s3gw-ui)
