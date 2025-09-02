<!--
.. title: Kubernetes v1.34: Introducing CPU Manager Static Policy Option for Uncore Cache Alignment
.. slug: kubernetes-v134-introducing-cpu-manager-static-policy-option-for-uncore-cac
.. date: 2025-09-02 18:30:00 
.. tags: kubernetes-blog
.. category: technical_deep_dives
.. link: https://kubernetes.io/blog/2025/09/02/kubernetes-v1-34-prefer-align-by-uncore-cache-cpumanager-static-policy-optimization/
.. description: 🚀 Kubernetes v1.34 has introduced a new feature: the CPU Manager Static Policy Option, prefer-align-cpus-by-uncorecache, now in beta. This option opti...
.. type: text
-->

🚀 Kubernetes v1.34 has introduced a new feature: the CPU Manager Static Policy Option, prefer-align-cpus-by-uncorecache, now in beta. This option optimizes performance for workloads on processors with a split uncore cache architecture, enhancing efficiency by reducing latency between CPU cores. To enable it, update your kubelet configuration. This feature is particularly beneficial for applications like telco systems but may vary based on workload types. #Kubernetes #CloudComputing...

**Source:** [Kubernetes Blog](https://kubernetes.io/feed.xml)  
**Author:** Unknown  
**Category:** technical_deep_dives