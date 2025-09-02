<!--
.. title: Tuning Linux Swap for Kubernetes: A Deep Dive
.. slug: tuning-linux-swap-for-kubernetes-a-deep-dive
.. date: 2025-08-19 18:30:00 +0000
.. tags: kubernetes-blog
.. category: technical_deep_dives
.. link: https://kubernetes.io/blog/2025/08/19/tuning-linux-swap-for-kubernetes-a-deep-dive/
.. description: Kubernetes is set to introduce the NodeSwap feature in version 1.34, allowing Linux nodes to utilize swap for improved resource management. This marks...
.. type: text
-->

Kubernetes is set to introduce the NodeSwap feature in version 1.34, allowing Linux nodes to utilize swap for improved resource management. This marks a shift from the traditional approach of disabling swap for performance. However, enabling swap requires careful tuning of Linux kernel parameters to avoid performance issues and manage memory pressure effectively. Key parameters include `vm.swappiness`, `vm.min_free_kbytes`, and `vm.watermark_scale_factor`. Testing various configurations can...

**Source:** [Kubernetes Blog](https://kubernetes.io/feed.xml)  
**Author:** Unknown  
**Category:** technical_deep_dives