# GraalVM Polyglot
> Polyglot application(using the most popular programming languages: java, python and javascript) running with GraalVM

## Prerequisites
#### SDKman
SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems.
It provides a convenient Command Line Interface (CLI) and API for installing, switching, removing and listing Candidates.

[Follow the instructions to install it](https://sdkman.io/install)



## Installation

#### GraalVM
`High-performance polyglot VM`

[GraalVM](https://www.graalvm.org/) is a standalone Java Development Kit to execute Java or JVM-based languages 
(e.g. Scala, Kotlin), dynamic languages (e.g. JavaScript, R, Ruby, R, Python), LLVM-based languages (e.g. C and C++) in 
one shared runtime, and supports Linux and macOS platforms on x86 64-bit systems. It is available as Community Edition (CE) 
and Enterprise Edition (EE). GraalVM Community Edition is based on the OpenJDK 8. GraalVM Enterprise Edition is developed 
on top of the Java SE 1.8.0_212.

In your terminal run the following commands:
```bash
sdk ls java
sdk i java 1.0.0-rc-19-grl
sdk u java 1.0.0-rc-19-grl
gu install native-image
```
gu = Graal Update, the last command is necesary for support native image with graal VM

