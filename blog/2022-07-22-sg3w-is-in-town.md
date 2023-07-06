---
title: Contain your excitement, the s3gw is in town
description: We've developed a standalone RADOS Gateway. Welcome to the s3gw Project.
slug: s3gw-rados-gateway-standalone
authors:
  - name: The s3gw team
tags: [blog]
hide_table_of_contents: false
---

The Aquarist Labs team is back with an open source and cloud-native S3 service. After spending months investigating a storage appliance built on Ceph, the team identified the need to complement the Rancher storage portfolio with their unique skillsets and lessons learned from their time developing Aquarium.

<!--truncate-->

Introducing the [s3gw project][1], an S3-compatible gateway running a standalone [RADOS Gateway (RGW)][2] implementation, using a non-RADOS backend for standalone usage. This new project provides the required infrastructure to build a container able to run on a Kubernetes cluster with S3-compatible endpoints to applications.

This is the first publicly available iteration of the s3gw project. We expect (and welcome!) bugs and we know our performance is not optimal (yet!). This release is meant for testing and feedback gathering and it is not recommended for production use. See our release notes for more details.

## Call to action

We would love to hear from you about what you'd like to see on our roadmap. What would enable you best to use s3gw in your environment?

Reach out to us at <s3gw@suse.com> or our [Slack channel](https://aquaristlabs.slack.com/archives/C03RFG0BES0). You can also join [our mailing list](https://lists.suse.com/mailman/listinfo/s3gw) or have a look at our [GitHub repository](https://github.com/aquarist-labs/s3gw) -- feature requests are welcome! 🙂

[1]:https://github.com/aquarist-labs/s3gw
[2]:https://docs.ceph.com/en/quincy/radosgw/
