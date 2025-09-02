<!--
.. title: How to Improve CUDA Kernel Performance with Shared Memory Register Spilling
.. slug: how-to-improve-cuda-kernel-performance-with-shared-memory-register-spilling
.. date: 2025-08-27 16:30:00 +0000
.. tags: nvidia-developer-blog
.. category: technical_deep_dives
.. link: https://developer.nvidia.com/blog/how-to-improve-cuda-kernel-performance-with-shared-memory-register-spilling/
.. description: 🚀 New in CUDA Toolkit 13.0: Shared Memory Register Spilling! This feature helps improve CUDA kernel performance by allowing the compiler to use shared...
.. type: text
-->

🚀 New in CUDA Toolkit 13.0: Shared Memory Register Spilling! This feature helps improve CUDA kernel performance by allowing the compiler to use shared memory for excess variables instead of local memory. This reduces spill latency and L2 pressure for register-heavy kernels. To enable shared memory spilling, use the pragma command in your kernel definition. With this optimization, kernels can perform better, especially in critical regions where registers are heavily used. Learn more about how...

**Source:** [Nvidia Developer Blog](https://developer.nvidia.com/blog/feed)  
**Author:** Divya Shanmughan  
**Category:** technical_deep_dives