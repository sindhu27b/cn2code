const e=`
# INTRODUCTION: WHAT IS A PROGRAMMING LANGUAGE ?

  Before understanding Java, let's start with fundamental concepts.

## What is Programming ?

  Imagine you want to instruct someone to make tea:
* Boil water
  * Add tea leaves
    * Add sugar
      * Pour in cup

This is a set of ** instructions ** in a ** sequence **.Programming is exactly this - giving instructions to a computer to perform specific tasks.

### The Challenge:

* Humans communicate in English, Hindi, Spanish, and other natural languages
  * Computers only understand ** 0s and 1s ** (called binary or machine language)

** Example of what computers actually understand:**
\`\`\`text
01001000 01100101 01101100 01101100 01101111
\`\`\`
This binary code represents "Hello" in computer language.

## What is a Programming Language?

A programming language is a **bridge** between human language and computer language.

**Example:**
* You speak English
* Your colleague speaks Japanese
* You need a translator for communication

Similarly:
* You write code in Java (human-readable format)
* Computer understands binary (0s and 1s)
* Java compiler converts your code to machine code

## Why Do Multiple Programming Languages Exist?

Different tools serve different purposes:
* Hammer for nails
* Screwdriver for screws
* Saw for cutting wood

Similarly, different programming languages serve different needs:
* **Python**: Simple syntax, excellent for data science and AI
* **JavaScript**: Makes websites interactive
* **C++**: High performance, used in game engines
* **Java**: Versatile, enterprise-grade, runs everywhere

---

# PART 1: WHAT IS JAVA?

## 1.1 Definition

**Java is a high-level, object-oriented programming language that allows you to write instructions for computers.**

Java functions as a **universal language** for computers - similar to how English serves as an international language for global communication.

## 1.2 The Core Principle: "Write Once, Run Anywhere" (WORA)

**The Problem Java Solved:**

Before Java existed:
* Write code for Windows → Works ONLY on Windows
* Write code for Mac → Works ONLY on Mac
* Write code for Linux → Works ONLY on Linux
* Same program required rewriting for each platform

**With Java:**
* Write code ONCE
* It executes on Windows, Mac, Linux, and any platform with JVM
* No rewriting necessary

**Example:**
You create a banking application in Java:
* Runs on Windows servers at headquarters
* Runs on Linux servers in data centers
* Runs on Mac computers of developers
* Same codebase, works everywhere

## 1.3 Core Characteristics of Java

### 1. Platform Independent (Runs Everywhere)

**Example - Regional DVD Players:**
* Old DVD players only worked with specific regional discs
* A Region 1 disc wouldn't play on a Region 2 player
* Java is like a "region-free" player that works with any disc

**How it works:**
\`\`\`
Your Java Code → Java Compiler → Bytecode → JVM → Machine Code → Execution
\`\`\`

The JVM (Java Virtual Machine) exists for every platform, enabling the same bytecode to run anywhere.

### 2. Object-Oriented (Organized Structure)

**Example - Organizing a Company:**

**Without Object-Oriented approach:**
\`\`\`
All departments in one room
- HR papers, accounting files, engineering documents mixed together
- Finding anything becomes chaotic
\`\`\`

**With Object-Oriented approach (Java):**
\`\`\`
HR Department:
  - Employee records
  - Recruitment files
  - Policy documents

Finance Department:
  - Budget reports
  - Invoices
  - Tax documents

Engineering Department:
  - Technical specifications
  - Code repositories
  - Project plans
\`\`\`

Java organizes code into logical units called classes and objects, making large programs manageable.

### 3. Secure (Built-in Security Features)

**Example - Airport Security Checkpoint:**
* Before boarding, security scans your bags
* Suspicious items are detected and stopped
* Java performs similar checks on code before execution

**Why security matters:**
* Banking applications handle financial transactions
* Government systems contain sensitive citizen data
* Healthcare applications store patient information
* Java's security features protect these critical systems

### 4. Simple to Learn (Compared to Other Languages)

**Comparison:**
* **C++**: Complex manual memory management, pointers, multiple inheritance
* **Assembly**: Direct hardware manipulation, extremely difficult
* **Java**: Automatic memory management, clear syntax, single inheritance with interfaces

### 5. Automatic Memory Management

**Example - Restaurant Kitchen:**

**In languages like C/C++:**
* Chef cooks food → Customer eats → Chef must manually clean every dish
* If chef forgets, dishes pile up (memory leak occurs)
* Kitchen eventually becomes unusable

**In Java:**
* Chef cooks food → Customer eats → Automatic dishwasher handles cleanup
* Java's Garbage Collector automatically reclaims unused memory
* Developers focus on building features, not managing memory

### 6. Rich Standard Library

**Example - Building Construction:**

**Without libraries:**
* Want a door? Manufacture hinges, cut wood, create locks from raw materials
* Every component built from scratch

**With Java libraries:**
* Want database connectivity? Use JDBC library
* Want graphical interface? Use Swing or JavaFX library
* Want web services? Use networking libraries

Thousands of pre-built, tested components available immediately.

---

# PART 2: THE COMPLETE HISTORY OF JAVA

## 2.1 The Birth of Java (1991-1995)

### The Beginning: Consumer Electronics Problem

**Year: 1991**
**Location:** Sun Microsystems, California
**Lead Developer:** James Gosling (Canadian computer scientist)

**The Problem:**
In the early 1990s, Sun Microsystems observed:
* Every television had different control software
* Every device used different programming approaches
* No universal solution existed for consumer electronics

**James Gosling's Vision:**
"Create a programming language that works on ALL electronic devices"

**The Team:**
* **James Gosling** - Lead architect (Father of Java)
* **Mike Sheridan** - Project coordinator
* **Patrick Naughton** - Developer

**Project Name:** "The Green Project"
**Initial Goal:** Create software for consumer electronics - televisions, set-top boxes, remote controls

### The First Name: Oak

James Gosling designed the initial language specification. While working in his office, he looked outside his window at an oak tree and named the language "Oak."

**Fun Fact:** The Java logo features a steaming cup of coffee because the development team consumed large quantities of Java coffee during late-night coding sessions.

### Initial Failure

**Year: 1992-1993**

The team built:
* Complete language specification
* Demo device called "*7" (Star Seven)
* Presentations for cable television companies

**Result:** No companies purchased the technology

**Reasons for failure:**
* Consumer electronics market wasn't technologically ready
* Implementation costs were too high
* Companies showed no interest

**The project faced cancellation...**

### The Internet Changes Everything

**Year: 1993-1994**

**The Transformation:** World Wide Web emerged as a global phenomenon

**Problems with early internet:**
* Websites were static text and images only
* No interactive elements
* Different browsers on different operating systems

**Critical Realization:**
"Our platform-independent language is perfect for internet applications!"

**The Pivot:**
* Shifted focus from consumer electronics
* Targeted internet applications
* Created "Java Applets" (small programs running in web browsers)

### Oak Becomes Java

**The Problem:**
"Oak" was already trademarked by Oak Technologies

**Name Candidates:**
* Silk
* DNA
* Ruby
* WRL (WebRunner Language)
* Java

**Final Selection: Java**

**Reasons:**
* Team consumed significant amounts of Java coffee
* Java is a coffee type from Indonesia
* The name was energetic and memorable
* Easy to spell and remember globally

**Logo:** A steaming cup of coffee ☕

### Official Launch

**May 23, 1995:** Java announced at SunWorld conference
**January 23, 1996:** Java 1.0 released publicly

**Tagline:** "Write Once, Run Anywhere" (WORA)

**Initial Reception:**
* Technology community: Enthusiastic adoption
* Netscape Browser: Integrated Java support
* Developers: Immediate learning began
* First demonstration: Animated molecule structure on webpage

---

## 2.2 Java Version History

### JDK 1.0 (January 23, 1996)
**Codename:** Oak

**Key Features:**
* First stable release
* Basic language features
* AWT (Abstract Window Toolkit) for graphical interfaces
* Applets for web browsers
* Core libraries: java.lang, java.io, java.util, java.net

**Significance:**
* Revolutionary platform independence
* First truly "Write Once, Run Anywhere" language

---

### JDK 1.1 (February 19, 1997)

**Key Features:**
* Inner classes (classes within classes)
* JavaBeans component architecture
* JDBC (Java Database Connectivity)
* RMI (Remote Method Invocation)
* Reflection API
* JIT (Just-In-Time) compiler
* Internationalization and Unicode support

**Major Improvement:**
* Significant performance boost with JIT compiler
* Database connectivity enabled enterprise applications

---

### J2SE 1.2 (December 8, 1998)
**Codename:** Playground
**Major Milestone:** "Java 2 Platform" branding introduced

**Key Features:**
* **Swing** - Modern GUI components replacing AWT
* **Collections Framework** - List, Set, Map interfaces
* strictfp keyword for consistent floating-point calculations
* JIT compiler integrated into JVM

**Platform Split:**
* **J2SE** - Java 2 Standard Edition (desktop applications)
* **J2EE** - Java 2 Enterprise Edition (server applications)
* **J2ME** - Java 2 Micro Edition (mobile/embedded devices)

**Significance:**
* Foundation for modern Java applications
* Collections Framework still used extensively today

---

### J2SE 1.3 (May 8, 2000)
**Codename:** Kestrel

**Key Features:**
* **HotSpot JVM** - Major performance improvement
* JNDI (Java Naming and Directory Interface)
* Java Sound API
* Java Platform Debugger Architecture (JPDA)

**Performance Focus:**
* HotSpot JVM provided dramatic speed improvements
* Advanced garbage collection algorithms

---

### J2SE 1.4 (February 6, 2002)
**Codename:** Merlin
**First release developed under JCP (Java Community Process)**

**Major Features:**
* **assert** keyword for debugging
* **Regular expressions** (java.util.regex)
* Exception chaining
* **NIO (New Input/Output)** - Non-blocking I/O operations
* Logging API (java.util.logging)
* Integrated XML parser
* Integrated security (JCE, JSSE, JAAS)
* Java Web Start

**Significance:**
* Most significant release since Java 2
* Over 62% increase in classes and interfaces

---

### J2SE 5.0 (September 30, 2004)
**Codename:** Tiger
**Version Rebranding:** Changed from 1.5 to 5.0

**Revolutionary Features:**

#### 1. Generics - Type Safety

**Before Java 5:**
\`\`\`java
List myList = new ArrayList();
myList.add("Hello");
myList.add(123);  // Allowed - causes runtime errors later
\`\`\`

**With Java 5:**
\`\`\`java
List<String> myList = new ArrayList<String>();
myList.add("Hello");  // Allowed
myList.add(123);      // Compile-time ERROR - prevented immediately
\`\`\`

#### 2. Enhanced for Loop

**Before Java 5:**
\`\`\`java
String[] fruits = {"Apple", "Banana", "Orange"};
for (int i = 0; i < fruits.length; i++) {
    System.out.println(fruits[i]);
}
\`\`\`

**With Java 5:**
\`\`\`java
String[] fruits = {"Apple", "Banana", "Orange"};
for (String fruit : fruits) {
    System.out.println(fruit);  // Cleaner syntax
}
\`\`\`

#### 3. Autoboxing/Unboxing

**Before Java 5:**
\`\`\`java
int number = 5;
Integer wrapped = new Integer(number);  // Manual conversion required
\`\`\`

**With Java 5:**
\`\`\`java
int number = 5;
Integer wrapped = number;  // Automatic conversion
\`\`\`

#### 4. Enumerations

**Before Java 5:**
\`\`\`java
public static final int MONDAY = 1;
public static final int TUESDAY = 2;
// Prone to errors, no type safety
\`\`\`

**With Java 5:**
\`\`\`java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY
}
// Type-safe, clear, self-documenting
\`\`\`

#### 5. Varargs (Variable Arguments)
\`\`\`java
public void printAll(String... messages) {
    for (String msg : messages) {
        System.out.println(msg);
    }
}
// Can call with any number of arguments
\`\`\`

#### 6. Annotations
\`\`\`java
@Override
public String toString() {
    return "My object";
}
// Compiler checks annotation correctness
\`\`\`

**Significance:**
* Biggest language change since Java's creation
* Reduced boilerplate code significantly
* Improved type safety
* Reduced bugs by 30-40% in typical applications

---

### Java SE 6 (December 11, 2006)
**Codename:** Mustang
**Branding Change:** Dropped "2" from J2SE, became "Java SE"

**Key Features:**
* Scripting language support (Rhino JavaScript engine)
* JDBC 4.0
* Java Compiler API
* Improved Swing with LCD text rendering
* Performance improvements

**Significance:**
* Extremely stable version
* Widely used for many years in enterprise

---

### Java SE 7 (July 28, 2011)
**Codename:** Dolphin
**First release after Oracle acquired Sun Microsystems (2010)**

**Major Features:**

#### 1. Strings in Switch Statements

**Before Java 7:**
\`\`\`java
if (day.equals("Monday")) {
    System.out.println("Start of week");
} else if (day.equals("Friday")) {
    System.out.println("Weekend approaching");
}
\`\`\`

**With Java 7:**
\`\`\`java
switch(day) {
    case "Monday":
        System.out.println("Start of week");
        break;
    case "Friday":
        System.out.println("Weekend approaching");
        break;
}
\`\`\`

#### 2. Diamond Operator

**Before Java 7:**
\`\`\`java
List<String> list = new ArrayList<String>();  // Type repeated
\`\`\`

**With Java 7:**
\`\`\`java
List<String> list = new ArrayList<>();  // Type inferred
\`\`\`

#### 3. Try-with-Resources

**Before Java 7:**
\`\`\`java
FileReader fr = new FileReader("file.txt");
try {
    // Read file
} finally {
    fr.close();  // Manual cleanup required
}
\`\`\`

**With Java 7:**
\`\`\`java
try (FileReader fr = new FileReader("file.txt")) {
    // Read file
}  // Automatic cleanup
\`\`\`

#### 4. Underscores in Numeric Literals

**Before Java 7:**
\`\`\`java
int million = 1000000;  // Difficult to read
\`\`\`

**With Java 7:**
\`\`\`java
int million = 1_000_000;  // Clear readability
\`\`\`

#### 5. Multi-catch Exceptions
\`\`\`java
try {
    // code
} catch (IOException | SQLException e) {
    // Handle both exception types
}
\`\`\`

#### 6. Binary Literals
\`\`\`java
int binary = 0b1010;  // Binary representation
\`\`\`

**Additional Features:**
* NIO.2 - Enhanced file system API
* Fork/Join Framework for parallel processing
* invokedynamic bytecode instruction

---

### Java SE 8 (March 18, 2014)
**Codename:** Spider
**MOST SIGNIFICANT RELEASE SINCE JAVA 5**

**Game-Changing Features:**

#### 1. Lambda Expressions

**Before Java 8:**
\`\`\`java
Collections.sort(names, new Comparator<String>() {
    @Override
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});
// 8 lines of code
\`\`\`

**With Java 8:**
\`\`\`java
Collections.sort(names, (a, b) -> a.compareTo(b));
// 1 line of code - same functionality
\`\`\`

#### 2. Stream API

**Before Java 8:**
\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
List<Integer> evenNumbers = new ArrayList<>();
for (Integer number : numbers) {
    if (number % 2 == 0) {
        evenNumbers.add(number);
    }
}
\`\`\`

**With Java 8:**
\`\`\`java
List<Integer> evenNumbers = numbers.stream()
                                   .filter(n -> n % 2 == 0)
                                   .collect(Collectors.toList());
\`\`\`

#### 3. Optional Class

**Before Java 8:**
\`\`\`java
Person person = findPerson("John");
if (person != null) {
    System.out.println(person.getName());
} else {
    System.out.println("Not found");
}
\`\`\`

**With Java 8:**
\`\`\`java
Optional<Person> person = findPerson("John");
person.ifPresent(p -> System.out.println(p.getName()));
\`\`\`

#### 4. Functional Interfaces
\`\`\`java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;
\`\`\`

#### 5. Method References
\`\`\`java
// Lambda
names.forEach(name -> System.out.println(name));

// Method reference - cleaner
names.forEach(System.out::println);
\`\`\`

#### 6. New Date and Time API
\`\`\`java
LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, 5, 15);
Period age = Period.between(birthday, today);
LocalDateTime now = LocalDateTime.now();
ZonedDateTime zoned = ZonedDateTime.now(ZoneId.of("America/New_York"));
\`\`\`

#### 7. Default Methods in Interfaces
\`\`\`java
interface Vehicle {
    void start();
    
    default void honk() {
        System.out.println("Beep!");
    }
}
\`\`\`

**Significance:**
* Brought functional programming to Java
* Reduced code by 50% in many scenarios
* Industry standard for many years
* Still widely used in production systems (2026)

---

### Java SE 9 (September 21, 2017)

**Key Features:**

#### 1. Module System (Project Jigsaw)
\`\`\`java
module myapp {
    requires java.sql;
    exports com.myapp.api;
}
\`\`\`

**Benefits:**
* Better encapsulation
* Smaller application size
* Faster startup
* Clear dependency management

#### 2. JShell - Interactive REPL
\`\`\`
jshell> int x = 10;
x ==> 10
jshell> System.out.println(x * 2);
20
\`\`\`

#### 3. Improved Stream API
\`\`\`java
// takeWhile
Stream.of(1, 2, 3, 4, 5)
      .takeWhile(n -> n < 4)
      .forEach(System.out::println);  // 1, 2, 3

// dropWhile
Stream.of(1, 2, 3, 4, 5)
      .dropWhile(n -> n < 3)
      .forEach(System.out::println);  // 3, 4, 5
\`\`\`

#### 4. Private Methods in Interfaces
\`\`\`java
interface MyInterface {
    default void publicMethod() {
        privateHelper();
    }
    
    private void privateHelper() {
        // Implementation hidden
    }
}
\`\`\`

**Release Cycle Change:**
* Moved to 6-month release cycle
* More frequent, smaller updates

---

### Java SE 10 (March 20, 2018)

**Key Feature: Local Variable Type Inference (var)**

**Before Java 10:**
\`\`\`java
ArrayList<HashMap<String, List<Integer>>> complexMap = 
    new ArrayList<HashMap<String, List<Integer>>>();
\`\`\`

**With Java 10:**
\`\`\`java
var complexMap = new ArrayList<HashMap<String, List<Integer>>>();
// Type inferred by compiler
\`\`\`

**Examples:**
\`\`\`java
var name = "John";              // String inferred
var numbers = List.of(1, 2, 3); // List<Integer> inferred
var map = new HashMap<String, Integer>(); // Type inferred
\`\`\`

---

### Java SE 11 (September 25, 2018)
**LTS (Long-Term Support) Release**

**Key Features:**

#### 1. New String Methods
\`\`\`java
String text = "  Hello World  ";

text.isBlank();          // false
text.strip();            // "Hello World" (handles Unicode)
text.stripLeading();     // "Hello World  "
text.stripTrailing();    // "  Hello World"
text.lines();            // Stream of lines
text.repeat(3);          // "  Hello World    Hello World    Hello World  "

"".isBlank();            // true
"   ".isBlank();         // true
\`\`\`

#### 2. File Methods
\`\`\`java
// Read entire file
String content = Files.readString(Path.of("file.txt"));

// Write to file
Files.writeString(Path.of("output.txt"), "Hello");
\`\`\`

#### 3. Run Java Files Directly
\`\`\`bash
# No compilation step needed
java HelloWorld.java
\`\`\`

#### 4. HTTP Client API (Standardized)
\`\`\`java
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com"))
    .build();
HttpResponse<String> response = 
    client.send(request, HttpResponse.BodyHandlers.ofString());
\`\`\`

#### 5. var in Lambda Parameters
\`\`\`java
(var x, var y) -> x + y
\`\`\`

**Significance:**
* First major LTS under Oracle's new model
* Oracle JDK requires license for production (commercial use)
* Rise of OpenJDK distributions (Adoptium, Amazon Corretto)

---

### Java SE 12-16 (2019-2021): Incremental Updates

#### Java 12: Switch Expressions (Preview)
\`\`\`java
String result = switch(day) {
    case "Monday", "Tuesday" -> "Weekday";
    case "Saturday", "Sunday" -> "Weekend";
    default -> "Unknown";
};
\`\`\`

#### Java 13: Text Blocks (Preview)
\`\`\`java
String html = """
              <html>
                  <body>
                      <p>Hello World</p>
                  </body>
              </html>
              """;
\`\`\`

#### Java 14: Helpful NullPointerExceptions
**Before Java 14:**
\`\`\`
Exception: NullPointerException
\`\`\`

**With Java 14:**
\`\`\`
Exception: NullPointerException: Cannot invoke "String.length()" 
because "person.getName()" is null
\`\`\`

#### Java 14: Records (Preview)
\`\`\`java
// Before: 30+ lines for a simple data class
public class Person {
    private final String name;
    private final int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    
    @Override
    public boolean equals(Object o) { /* implementation */ }
    
    @Override
    public int hashCode() { /* implementation */ }
    
    @Override
    public String toString() { /* implementation */ }
}

// With Records: 1 line
public record Person(String name, int age) {}
\`\`\`

#### Java 15: Sealed Classes (Preview)
\`\`\`java
public sealed class Shape permits Circle, Rectangle, Triangle {
    // Only Circle, Rectangle, Triangle can extend Shape
}
\`\`\`

#### Java 16: Records and Pattern Matching (Standard)
\`\`\`java
// Pattern matching for instanceof
if (obj instanceof String s) {
    System.out.println(s.length());  // s automatically cast
}
\`\`\`

---

### Java SE 17 (September 14, 2021)
**LTS (Long-Term Support) Release**
**Current Enterprise Standard**

**Key Features:**

#### 1. Sealed Classes (Standard)
\`\`\`java
public sealed class Animal permits Dog, Cat, Bird {
    // Restricts which classes can extend Animal
}

public final class Dog extends Animal { }
public final class Cat extends Animal { }
public final class Bird extends Animal { }
\`\`\`

#### 2. Pattern Matching for Switch (Preview)
\`\`\`java
String formatted = switch (obj) {
    case Integer i -> String.format("int %d", i);
    case Long l    -> String.format("long %d", l);
    case Double d  -> String.format("double %f", d);
    case String s  -> String.format("String %s", s);
    default        -> obj.toString();
};
\`\`\`

#### 3. Text Blocks (Standard)
\`\`\`java
String json = """
              {
                  "name": "John",
                  "age": 30,
                  "city": "New York"
              }
              """;
\`\`\`

#### 4. Enhanced Pseudo-Random Number Generators
\`\`\`java
RandomGenerator generator = RandomGenerator.of("L128X256MixRandom");
int randomNum = generator.nextInt(100);
\`\`\`

**Significance:**
* Most widely adopted modern LTS version
* Production-ready for enterprise applications
* Strong security and performance
* Recommended minimum version for new projects (2026)

---

### Java SE 21 (September 19, 2023)
**LTS (Long-Term Support) Release**
**Latest LTS Version**

**Major Features:**

#### 1. Virtual Threads (Standard)
\`\`\`java
// Simple virtual thread creation
Thread.startVirtualThread(() -> {
    System.out.println("Running in virtual thread");
});

// Using executor
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> handleRequest());
}
\`\`\`

**Benefits:**
* Millions of concurrent threads possible
* Simplified concurrent programming
* Better resource utilization
* Ideal for I/O-bound applications

#### 2. Sequenced Collections
\`\`\`java
// New interfaces for ordered collections
SequencedCollection<String> list = new ArrayList<>();
list.addFirst("First");
list.addLast("Last");
String first = list.getFirst();
String last = list.getLast();
SequencedCollection<String> reversed = list.reversed();
\`\`\`

#### 3. Pattern Matching for Switch (Standard)
\`\`\`java
String describe(Object obj) {
    return switch (obj) {
        case null      -> "null value";
        case Integer i -> "Integer: " + i;
        case String s  -> "String of length " + s.length();
        case int[] arr -> "Array of length " + arr.length;
        default        -> "Unknown type";
    };
}
\`\`\`

#### 4. Record Patterns (Standard)
\`\`\`java
record Point(int x, int y) {}
record Rectangle(Point topLeft, Point bottomRight) {}

// Nested pattern matching
if (shape instanceof Rectangle(Point(var x1, var y1), Point(var x2, var y2))) {
    int width = x2 - x1;
    int height = y2 - y1;
}
\`\`\`

#### 5. String Templates (Preview)
\`\`\`java
String name = "John";
int age = 30;

// String template
String message = STR."Hello \\{name}, you are \\{age} years old";
// Result: "Hello John, you are 30 years old"

// Multi-line
String json = STR."""
    {
        "name": "\\{name}",
        "age": \\{age}
    }
    """;
\`\`\`

**Significance:**
* Most advanced LTS release
* Virtual threads revolutionize concurrency
* Pattern matching fully mature
* Recommended for new projects (2026)

---

# PART 3: ORACLE'S ACQUISITION AND LICENSING

## 3.1 Sun Microsystems Era (1995-2010)

**Characteristics:**
* Java created and maintained by Sun Microsystems
* Free and open for all uses
* Community-driven development
* Open philosophy: "Free software for everyone"

## 3.2 Oracle Acquisition (2010)

**January 27, 2010:** Oracle acquired Sun Microsystems for $7.4 billion

**Changes Introduced:**
* Accelerated development cycle
* More resources allocated to Java development
* 6-month release cycle implemented
* LTS (Long-Term Support) model introduced

## 3.3 Licensing Changes (2019)

**Before 2019:**
* Oracle JDK: Free for all uses
* Updates provided indefinitely

**After 2019:**
* **Oracle JDK**: Commercial license required for production use
* **Oracle OpenJDK**: Free, 6-month support window
* **LTS Releases**: Java 11, 17, 21, 25 (every 2-3 years)

## 3.4 Free Alternatives (2026 Recommended)

**100% Free Options:**

| Distribution | Provider | LTS Support | Recommended For |
|-------------|----------|-------------|-----------------|
| Eclipse Temurin (Adoptium) | Eclipse Foundation | Yes | Most developers |
| Amazon Corretto | Amazon | Yes | AWS deployments |
| Azul Zulu | Azul Systems | Yes | Enterprise |
| Microsoft Build of OpenJDK | Microsoft | Yes | Azure deployments |
| Red Hat OpenJDK | Red Hat | Yes | Red Hat ecosystem |
| Oracle OpenJDK | Oracle | 6 months | Latest features |

**Recommendation for Beginners:**
* Download **Eclipse Temurin (Adoptium)** or **Amazon Corretto**
* 100% free for all uses
* Long-term support included
* No licensing concerns

---

# PART 4: WHERE IS JAVA USED? (2026)

## 4.1 Daily Applications

### 1. Android Smartphones
* 70%+ of smartphones run Android
* Android applications built with Java/Kotlin
* Kotlin runs on Java Virtual Machine, interoperates with Java

**Examples:**
* Instagram
* Spotify
* Netflix
* WhatsApp
* Banking applications
* Gaming applications

### 2. E-Commerce Platforms
* Amazon: Backend infrastructure
* eBay: Transaction processing
* Alibaba: Massive scale operations

**Functions:**
* Shopping cart management
* Payment processing
* Order tracking
* Inventory management
* User authentication

### 3. Streaming Services
* Netflix: Recommendation algorithms, backend services
* Spotify: Playlist management, user data processing
* YouTube: Backend infrastructure components

### 4. Banking and Finance
* Nearly all major banks use Java extensively
* Trading systems
* Transaction processing
* Security systems
* Regulatory compliance systems

**Why banks choose Java:**
* Security features
* Reliability and stability
* Handles millions of transactions
* 25+ years of proven track record
* Regulatory compliance

## 4.2 Enterprise Usage by Industry

**Technology Companies:**
* Google (Android, backend services)
* LinkedIn (entire platform)
* Twitter (backend systems)
* Uber (microservices)
* Airbnb (backend infrastructure)
* Netflix (distributed systems)

**Financial Services:**
* Goldman Sachs
* Citigroup
* Barclays
* JPMorgan Chase
* Trading platforms globally

**E-Commerce:**
* Amazon
* eBay
* Alibaba
* Flipkart
* Walmart

**Government:**
* NASA mission systems
* US Government agencies
* Indian Government portals (Aadhaar, IRCTC)
* European Union systems

---

# PART 5: JAVA VS OTHER LANGUAGES

## 5.1 Java vs Python

| Aspect | Java | Python |
|--------|------|--------|
| Type System | Static (compile-time checking) | Dynamic (runtime checking) |
| Syntax | Verbose, explicit | Concise, readable |
| Performance | Faster execution | Slower execution |
| Use Cases | Enterprise, Android, large systems | AI/ML, scripting, data analysis |
| Learning Curve | Steeper | Gentler |
| Job Market | Enterprise, backend | Data science, automation |

**When to use which:**
* **Python**: Data science, machine learning, quick scripts, prototyping
* **Java**: Enterprise applications, Android, large-scale systems, performance-critical applications

## 5.2 Java vs JavaScript

**Important Clarification:** These are completely different languages.

| Aspect | Java | JavaScript |
|--------|------|------------|
| Origin | Sun Microsystems (1995) | Netscape (1995) |
| Type | Compiled (to bytecode) | Interpreted |
| Typing | Static | Dynamic |
| Primary Use | Backend, Android, enterprise | Frontend, Node.js backend |
| Execution | JVM | Browser or Node.js |

**The naming similarity was purely marketing strategy in 1995 - no technical relationship exists.**

## 5.3 Java vs Kotlin

| Aspect | Java | Kotlin |
|--------|------|--------|
| Runs On | JVM | JVM (same as Java) |
| Interoperability | N/A | 100% with Java |
| Syntax | More verbose | More concise |
| Null Safety | Optional annotations | Built-in |
| Google Preference | Supported | Preferred for Android |

**Example - Data Class:**

**Java:**
\`\`\`java
public class Person {
    private final String name;
    private final int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    // ... equals, hashCode, toString methods
}
\`\`\`

**Kotlin:**
\`\`\`kotlin
data class Person(val name: String, val age: Int)
\`\`\`

---

# PART 6: THE FUTURE OF JAVA

## 6.1 Is Java Declining?

**Common Misconceptions:**
* "Java is outdated"
* "Nobody uses Java anymore"
* "Python/JavaScript replaced Java"

**Reality (2026):**
* Java is evolving faster than ever
* 6-month release cycle ensures modern features
* Virtual threads compete with Go's goroutines
* More active development than any time in history

**Evidence:**
* 3+ billion devices running Java
* 12+ million developers worldwide
* Top 3 programming language globally
* Fortune 500 companies increasing Java investment

## 6.2 Active Projects Shaping Java's Future

### Project Loom (Virtual Threads) - Completed in Java 21

**Problem Solved:**
* Traditional threads are resource-heavy
* Creating 10,000 threads could crash systems

**Solution:**
* Virtual threads are lightweight
* Create millions of threads without issues
* Simplified concurrent programming

### Project Panama (Foreign Function & Memory API)

**Benefits:**
* Call C/C++ libraries efficiently
* Replace complex JNI
* Better performance for native operations

### Project Valhalla (Value Types)

**Expected Benefits:**
* Reduced memory overhead
* Better performance
* Competing with C++ efficiency

### GraalVM

**Capabilities:**
1. **Native Image Compilation:** Convert Java to standalone executables with instant startup
2. **Polyglot Support:** Run JavaScript, Python, Ruby in same application

---

# PART 7: WHY LEARN JAVA IN 2026?

## 7.1 Career Opportunities

**Salary Ranges (USA - 2026):**

| Level | Experience | Salary Range |
|-------|------------|--------------|
| Entry Level | 0-2 years | $70,000 - $90,000 |
| Mid Level | 3-5 years | $95,000 - $130,000 |
| Senior | 5-8 years | $130,000 - $180,000 |
| Architect/Lead | 8+ years | $160,000 - $250,000+ |

**Job Titles:**
* Java Developer
* Backend Developer
* Full Stack Developer
* Software Engineer
* Solutions Architect

## 7.2 Transferable Skills

After learning Java, these become easy:
* **C#**: 95% similar syntax
* **Kotlin**: Runs on JVM, interoperable
* **Scala**: Runs on JVM
* **Spring Framework**: Built on Java

## 7.3 Recommended Learning Path

**Which Java Version to Learn (2026)?**
**Recommendation: Java 21 LTS**

**Reasons:**
* Latest Long-Term Support version
* All modern features included
* Industry adoption growing rapidly
* Future-proof knowledge

**Learning Strategy:**
1. Weeks 1-12: Core Java (applicable to all versions)
2. Weeks 13-16: Java 8 features (lambdas, streams)
3. Weeks 17-20: Java 11-17 features (var, records)
4. Weeks 21-24: Java 21 features (virtual threads, patterns)
5. Beyond: Spring Boot and frameworks

---

# CONCLUSION

Java's journey from 1991's "Green Project" to 2026's enterprise standard demonstrates remarkable adaptability:

* **1991-1995**: Created for consumer electronics
* **1995-2000**: Pivoted to internet applications
* **2000-2010**: Dominated enterprise development
* **2010-2020**: Acquired by Oracle, accelerated evolution
* **2020-2026**: Modern features (virtual threads, pattern matching, records)

**Java's Enduring Strengths:**
1. Platform Independence: Write once, run anywhere
2. Continuous Evolution: Modern features every 6 months
3. Massive Ecosystem: Frameworks, libraries, tools
4. Enterprise Trust: 25+ years of reliability
5. Career Opportunities: Consistent demand, competitive salaries

**Java in 2026:**
* 3+ billion devices
* 12+ million developers
* Top 3 programming language
* Evolving faster than ever
* Future-proof career choice
`;export{e as CONTENT};
