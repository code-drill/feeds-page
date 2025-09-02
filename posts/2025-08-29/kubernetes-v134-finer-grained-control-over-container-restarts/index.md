<!--
.. title: Kubernetes v1.34: Finer-Grained Control Over Container Restarts
.. slug: kubernetes-v134-finer-grained-control-over-container-restarts
.. date: 2025-08-29 18:30:00 +0000
.. tags: kubernetes-blog
.. category: product_announcements
.. link: https://kubernetes.io/blog/2025/08/29/kubernetes-v1-34-per-container-restart-policy/
.. description: 🚀 Kubernetes 1.34 introduces an alpha feature called Container Restart Policy and Rules. This feature allows developers to set individual restart poli...
.. type: text
-->

🚀 Kubernetes 1.34 introduces an alpha feature called Container Restart Policy and Rules. This feature allows developers to set individual restart policies for each container in a Pod, moving beyond the previous single policy for all containers. 🔧 Users can now define restart rules based on exit codes, offering more control for complex workloads. For instance, you can ensure that an ML training job restarts only on retriable errors without rescheduling the entire Pod. 📦 The new capability is...

**Source:** [Kubernetes Blog](https://kubernetes.io/feed.xml)  
**Author:** Unknown  
**Category:** product_announcements