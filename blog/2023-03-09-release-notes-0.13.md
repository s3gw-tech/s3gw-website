---
title: Release Notes - v0.13.0
description: Release notes for v.0.13.0
slug: release-notes-v0.13
authors:
  - name: The s3gw team
tags: [release-notes]
hide_table_of_contents: false
---


# Release Notes - v0.13.0

This release contains a few new features in the backend an in the UI, including
object locking.

<!--truncate-->

This release is meant for testing and feedback gathering. It is not recommended
for production use.

Should a bug be found and not expected to be related to the list below, one
should feel encouraged to file an issue in our
[GitHub repository](https://github.com/aquarist-labs/s3gw/issues/new/choose).

## Features

- SFS: Add object locking retention modes.
  Add the ability to set the default bucket retention configuration for both
  GOVERNANCE/COMPLIANCE modes
  Add the ability to set an explicit retention mode on object's versions
- UI: Add support for object locking
- UI: Improve the object browser navigation bar

## Fixes

## Breaking Changes

- On-disk format for the metadata store changed

## Known Issues

No known issues

<!-- Release notes generated using configuration in .github/release.yaml at v0.13.0 -->

## What's Changed
* Release v0.12.0 by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/347
* ci: on-disk format checker and release tests by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/348
* ci: fix s3test runner script by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/353
* ci: s3tests runner log from container by @m-ildefons in https://github.com/aquarist-labs/s3gw/pull/356


**Full Changelog**: https://github.com/aquarist-labs/s3gw/compare/v0.12.0...v0.13.0
