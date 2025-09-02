<!--
.. title: Least-privilege installation of OpenShift IPI on AWS
.. slug: least-privilege-installation-of-openshift-ipi-on-aws
.. date: 2025-08-22 07:16:18 +0000
.. tags: red-hat-developer-blog
.. category: educational
.. link: https://developers.redhat.com/articles/2025/08/22/least-privilege-installation-openshift-ipi-aws
.. description: 🔒 The latest guide on installing OpenShift IPI on AWS emphasizes a secure, least-privilege approach. By using the cloud credential operator utility (c...
.. type: text
-->

🔒 The latest guide on installing OpenShift IPI on AWS emphasizes a secure, least-privilege approach. By using the cloud credential operator utility (ccoctl) and setting credentials mode to manual, users can create narrowly-defined IAM roles. 🛠️ This method eliminates long-lived AWS access keys, relying instead on short-term AWS STS credentials. The ccoctl --dry-run feature allows for auditing IAM policies before applying them, enhancing security. 📊 Key points include understanding the IAM...

**Source:** [Red Hat Developer Blog](https://developers.redhat.com/blog/feed/)  
**Author:** Mohammad Ahmad, Thuan Vo  
**Category:** educational