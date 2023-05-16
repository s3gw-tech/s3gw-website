---
title: Release Notes - v0.12.0
description: Release notes for v.0.12.0
slug: release-notes-v0.12
authors:
  - name: The s3gw team
tags: [release-notes]
hide_table_of_contents: false
---


# Release Notes - v0.12.0

This release contains a bunch of stability fixes in the backend, but also some
new features in the UI. Most notably, the UI can now display prefixes as
directories, bringing back some familiarity to its feel.

<!--truncate-->

This release is meant for testing and feedback gathering. It is not recommended
for production use.

Should a bug be found and not expected to be related to the list below, one
should feel encouraged to file an issue in our
[GitHub repository](https://github.com/aquarist-labs/s3gw/issues/new/choose).

## Features

- UI: Add support for folder-like view of prefixes in the object explorer
- SFS: Performance improvements by utilizing SQLite's facilities in favor of
  custom mutexes
- SFS: Use SQLite in WAL mode
- SFS: Wrap OP execution in exception handler to avoid crashing on
  non-implemented stubs

## Fixes

- SFS: Improve robustness of SAL-layer errors, which now create the appropriate
  HTTP error codes
- SFS: Gracefully handle out-of-space situations
- Build: Fix missing `.note.ABI-tag` ELF section causing exec format errors on
  some platforms

## Breaking Changes

- On-disk format for the metadata store changed

## Known Issues

No known issues

<!-- Release notes generated using configuration in .github/release.yaml at v0.12.0 -->

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
* ci: release pipeline, drop libradosgw by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/323
* s3gw: release notes for v0.11.0 by @jecluis in https://github.com/aquarist-labs/s3gw/pull/328
* docs: remove Release from Release Captain's ADR, and create a new document by @jecluis in https://github.com/aquarist-labs/s3gw/pull/321
* remove tools submodule by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/330
* Wip/tools merge by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/331
* docs: Update quickstart guide by @s0nea in https://github.com/aquarist-labs/s3gw/pull/329
* Add last ADRs to menu in docs by @jhmarina in https://github.com/aquarist-labs/s3gw/pull/332
* fix: remove faulty submodule by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/333
* fix build_radosgw CCACHE environment variable by @irq0 in https://github.com/aquarist-labs/s3gw/pull/334
* ci: remove libradosgw from nightly builds by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/335
* ci: build-environment triggers and fixes by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/336
* ci: fix build-environment trigger by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/337
* ci: fix build environment container tags by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/338
* Fix (relative) path to s3gw-ui Git repository. by @votdev in https://github.com/aquarist-labs/s3gw/pull/342
* fix Dockerfile.build-radosgw-test-container by @giubacc in https://github.com/aquarist-labs/s3gw/pull/343
* ci: fix stupid input to GH action by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/339
* ci: build environment using buildx by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/344
* ci: fix naming of dockerfiles and workflow matrix by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/345
* ci: rebuild build environments weekly by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/346
* ci: fix s3-test runner script by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/340

## New Contributors
* @s0nea made their first contribution in https://github.com/aquarist-labs/s3gw/pull/329

**Full Changelog**: https://github.com/aquarist-labs/s3gw/compare/v0.10.0...v0.12.0
