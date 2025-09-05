<!--
.. title: Accelerate Large-Scale LLM Inference and KV Cache Offload with CPU-GPU Memory Sharing
.. slug: accelerate-large-scale-llm-inference-and-kv-cache-offload-with-cpu-gpu-memo
.. date: 2025-09-05 17:24:06 
.. tags: nvidia-developer-blog
.. category: technical_deep_dives
.. link: https://developer.nvidia.com/blog/accelerate-large-scale-llm-inference-and-kv-cache-offload-with-cpu-gpu-memory-sharing/
.. description: Large Language Models (LLMs) like Llama 3 70B and Llama 4 Scout 109B are pushing AI boundaries but pose memory challenges for inference efficiency. Th...
.. type: text
-->

Large Language Models (LLMs) like Llama 3 70B and Llama 4 Scout 109B are pushing AI boundaries but pose memory challenges for inference efficiency. These models can require significant memory, with Llama 3 needing around 140 GB and Llama 4 about 218 GB. The key-value (KV) cache also demands additional memory as context and batch sizes increase. NVIDIA's Grace Hopper and Blackwell architectures use NVLink-C2C, allowing CPU-GPU memory sharing. This innovation enhances data access and...

**Source:** [Nvidia Developer Blog](https://developer.nvidia.com/blog/feed)  
**Author:** Afroze Syed  
**Category:** technical_deep_dives