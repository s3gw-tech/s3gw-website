---
title: Release Notes - v0.4.0
description: Release notes for v.0.4.0
slug: release-notes-v0.4
authors:
  - name: The s3gw team
tags: [release-notes]
hide_table_of_contents: false
---


# Release Notes - v0.4.0

With v0.4.0 we introduce Object Versioning in the Gateway.
Other than this, we are improving the project in almost all aspects,
from the UI and Helm Charts to the Continuos Integration and Testing.
Read the subsequent sections for all the changes in detail.


<!--truncate-->

**This release is meant for testing and feedback gathering. It is not
recommended for production use.**

Should a bug be found and not expected to be related to the list below, one
should feel encouraged to file an issue in our [github repository][1].

## s3gw

The Gateway introduces Object Versioning.
### Added

- New, easy-to-read documentation. Found here: https://s3gw-docs.readthedocs.io/en/latest/
- Object Versioning.
- Enable / Disable bucket versioning.
- When versioning is enabled and a new object is pushed it creates a new version,
  keeping the previous one.
- Objects versions list
- Download specific version (older versions than the last one)
- Object delete (delete mark is added in a new version)

### Fixed

- An issue where the creation time of a bucket was displayed
  as the current machine time.
- The json response for creation bucket rest call for `system`
  users.

## s3gw-ui

The UI has seen several major improvements and fixes.

### Added

- The ability to configure none/unlimited buckets per user.
- User/Bucket Quota configuration per user.
- Basic bucket management support.
- Project branding.

## s3gw-charts

### Added

- Set `system` flag for default user
- Documentation to support PVC selection

### Changed

- Removed Traefik installation from CI pipeline
- Disabled version check for linter
- Configured UI and added information about CORS

### Fixed

- Some typos in documentation and code.

## s3gw-tools

### Added

- Option: '--no-s3gw' to env/setup.sh to install K3s only.
- Option: '--import-local-image' and '--import-local-ui-image' options to
  import local s3gw and s3gw-ui images into a running K3s.
- Enriched test suite with: `tests/s3gw-buckets-rest-api-test.py` to test bucket-related rest calls.

### Changed

- Relocated docs to [s3gw repository](https://github.com/aquarist-labs/s3gw/docs).
- Boost system packages updated to version 80_0 in gateway's Dockerfiles.

## Deploying

Please refer to our [documentation][2] on how to start playing with the s3gw.
For Helm chart fans, information can be found [here][3].

[1]: https://github.com/aquarist-labs/s3gw
[2]: https://github.com/aquarist-labs/s3gw#quickstart
[3]: https://github.com/aquarist-labs/s3gw-charts#install
