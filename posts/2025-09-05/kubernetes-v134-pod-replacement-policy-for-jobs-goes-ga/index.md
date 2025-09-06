<!--
.. title: Kubernetes v1.34: Pod Replacement Policy for Jobs Goes GA
.. slug: kubernetes-v134-pod-replacement-policy-for-jobs-goes-ga
.. date: 2025-09-05 18:30:00 
.. tags: kubernetes-blog
.. category: product_announcements
.. link: https://kubernetes.io/blog/2025/09/05/kubernetes-v1-34-pod-replacement-policy-for-jobs-goes-ga/
.. description: Kubernetes v1.34 introduces the Pod Replacement Policy feature, now generally available. This allows users to manage how Pods are replaced in Jobs, ad...
.. type: text
-->

Kubernetes v1.34 introduces the Pod Replacement Policy feature, now generally available. This allows users to manage how Pods are replaced in Jobs, addressing issues with overlapping Pods that can occur during terminations. You can choose between two policies: 1. **TerminatingOrFailed** (default) - Replaces Pods immediately upon termination. 2. **Failed** - Replaces Pods only after the previous ones have fully terminated. This enhancement is particularly useful for workloads requiring strict...

**Source:** [Kubernetes Blog](https://kubernetes.io/feed.xml)  
**Author:** Unknown  
**Category:** product_announcements