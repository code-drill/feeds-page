<!--
.. title: Improved Annotation Handling in Kotlin 2.2: Less Boilerplate, Fewer Surprises
.. slug: improved-annotation-handling-in-kotlin-22-less-boilerplate-fewer-surprises
.. date: 2025-09-04 11:56:15 
.. tags: jetbrains-blog
.. category: technical_deep_dives
.. link: https://blog.jetbrains.com/idea/2025/09/improved-annotation-handling-in-kotlin-2-2-less-boilerplate-fewer-surprises/
.. description: Kotlin 2.2 introduces improved annotation handling, addressing common issues developers faced with annotations in frameworks like Spring and JPA. Prev...
.. type: text
-->

Kotlin 2.2 introduces improved annotation handling, addressing common issues developers faced with annotations in frameworks like Spring and JPA. Previously, annotations applied to constructor parameters often did not validate properties during updates, leading to unexpected behavior. The new default rule ensures that annotations are applied to both constructor parameters and properties, streamlining code and reducing boilerplate. This update enhances validation consistency, allowing for...

**Source:** [JetBrains Blog](https://blog.jetbrains.com/feed/)  
**Author:** Teodor Irkhin  
**Category:** technical_deep_dives