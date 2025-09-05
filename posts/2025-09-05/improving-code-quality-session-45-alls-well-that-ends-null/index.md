<!--
.. title: Improving code quality - Session 45: All's well that ends null?
.. slug: improving-code-quality-session-45-alls-well-that-ends-null
.. date: 2025-09-05 02:00:00 
.. tags: ly-corporation-tech-blog
.. category: educational
.. link: https://techblog.lycorp.co.jp/en/icq45
.. description: 🚀 In the latest installment of \"Improving Code Quality,\" Munetoshi Ishikawa discusses handling Iterators in Java and Kotlin. 📜 It's crucial to check f...
.. type: text
-->

🚀 In the latest installment of "Improving Code Quality," Munetoshi Ishikawa discusses handling Iterators in Java and Kotlin. 📜 It's crucial to check for the existence of the next element using `hasNext` before calling `next`. Failing to do so results in a `NoSuchElementException`. 🔍 To enhance safety, Ishikawa introduces the `SafeIterator` class, which returns null when there are no more elements. #CodeQuality #Java #Kotlin #SoftwareDevelopment #ProgrammingTips

**Source:** [LY Corporation Tech Blog](https://techblog.lycorp.co.jp/en/feed/index.xml)  
**Author:** Unknown  
**Category:** educational