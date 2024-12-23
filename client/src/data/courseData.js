const courses = {
    intro_to_python: {
        name: "Intro to Python",
        description: "An introduction to Python programming",
        details: "Intro to Python is a course designed to introduce you to the basics of Python programming." +
          " Python is a high-level, interpreted programming language known for its simplicity and readability." +
          " It is widely used in web development, data science, and automation." +
          " This course will cover the basics of Python programming, including variables, loops, and conditional statements.\n\n" +
          " Python is a high level programming language that is easy to learn and easy to read. It is widely used and is capable of creating apps for web development, data science, and automation.",
        url: "intro_to_python",
        language: "Python",
        tasks: {
            hello_world: {
                title: "Hello World",
                description: "Lets start learning Python with the basics",
                details: "Write a program that prints 'Hello World!'",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": ""
                },
                url: "hello_world",
                nextTask: "Variables",
                nextTaskURL: "variables"
            },
            variables: {
                title: "Variables",
                description: "Here you'll learn the most important aspect of coding, how to store values",
                details: "A variable is a named storage location that contains a certain value."+
                  " As the name suggests, the value can change (Unlike a constant which we will look at later)" +
                  "Let's try and use a variable to store 'Hello World' and print it out. Change the code so that it prints out 'Hello World'",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py" : "my_string = 'This is an example'\n" +
                      "print(my_string)"
                },
                url: "variables",
                previousTask: "Hello World",
                previousTaskURL: "hello_world",
                nextTask: "Variable Types",
                nextTaskURL: "variable_types"
            },
            variable_types: {
                title: "Variable Types",
                description: "A variable can have many different types. Let's explore a few of them.",
                details: "In python, variables can store different types of data, and every type has unique characteristics. Some common ones include:"+
                  "int: Integer" +
                  "float: Real numbers"+
                  "double: Also stores real numbers, but much more accurate"+
                  "str: A String of characters"+
                  "bool: True or False values"+
                  "Let's say we have a variable distance = 4.3. To find the data type of a variable, you can use type(distance), which should output 'float'"+
                  "Now that you have an idea of what data types are, try and make your own variable that stores an Integer. Then output the variable and its type. We've started off the code for you",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "my_variable = 12\n"
                },
                url: "variable_types",
                previousTask: "Variables",
                previousTaskURL: "variables",
                nextTask: "For Loops",
                nextTaskURL: "for_loops"
            },
            for_loops: {
                title: "For Loops",
                description: "Coding is meant to make our lives easier. Let's find out one of the best ways to do that",
                details: " Let's say we wanted to print 'Hello World!' 15 times. It would be laborious to write 'print('Hello World')' 15 times."+
                  "Instead we can use what's known as a for loop. This allows us to execute specified lines of code multiple times. By specifying a range" +
                  "we tell the code hwo many times to loop over our code. The code provided to you will print 'racecar' 5 times. Change it to print 15 times instead",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "for i in range(5):" + "\n" +
                      "   print('racecar')"
                },
                url: "for_loops",
                previousTask: "Variables",
                previousTaskURL: "variables",
                nextTask: "Make a Triangle",
                nextTaskURL: "make_a_triangle"
            },
            make_a_triangle: {
                title: "Make a Triangle",
                description: "Now that we've learned how to use for loops, let's make use of this to print out a triangle.",
                details: " In python we have the ability to multiply strings. For example 'a' * 3 would return 'aaa'." +
                  " Using this knowledge, write a program that prints a right triangle of height 5. (1 asterisk in the first row, 2 in the second etc.)",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py" : "print('*' * 5) # This will print a line of 5 asterisks"
                },
                url: "make_a_triangle",
                previousTask: "For Loops",
                previousTaskURL: "for_loops",
                nextTask: "Conditional Statements",
                nextTaskURL: "conditional_statements"
            },
            conditional_statements: {
                title: "Conditional Statements",
                description: "How do we make our code condition based? Lets take a look",
                details: "When coding, we may want to execute different lines of code based on a condition. An example would be turning on an air conditioner at a certain temperature"+
                  "i.e if the temperature is greater than 25 turn on the AC. In python this is achieved by using an 'if statement'. The code shown"+
                  "will illustrate how the above example can be achieved in code. Try poking around and change the condition so that the AC turns off when the temperature is below 20",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "temp = 30" + "\n" +
                      "if (temp > 25):" + "\n" +
                      "   print('Turn on AC')"
                },
                previousTask: "Make a Triangle",
                previousTaskURL: "make_a_triangle",
                nextTask: "Conditional Statements 2",
                nextTaskURL: "conditional_statements_2"
            },
            conditional_statements_2: {
                title: "Conditional Statements: Part 2",
                description: "We have more control over conditional Statements than you think",
                details: "Let's take a look at our previous example where we wanted the Ac to turn on when the temperature is greater than 25. The task asked you to turn off the AC" +
                  "when the temperature is below 20. A neat characteristic of the 'if' statement is the 'else' statement. This allows to to execute lines in the case where our condition was not fulfilled."+
                  "So, it would look like: " + "\n" +
                  "if (temp > 25):" + "\n" +
                  "   print('Turn on AC')" + "\n" +
                  "else:" + "\n" +
                  "   print('Turn off AC')" + "\n" +
                  "This code will turn on the AC when the temperature is above 25, otherwise it will turn the AC off. We also have the ability to add another if statement in front of the else keyword. Try and make if so that " +
                  "The AC turns on when the temperature is above 25, and so that a heater turns on when the temperature is below 20.",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "if (temp > 25):" + "\n" +
                      "   print('Turn on AC')" + "\n" +
                      "else:" + "\n" +
                      "   print('Turn off AC')"
                },
                previousTask: "Conditional Statements",
                previousTaskURL: "conditional_statements"
            }
        },
    },
    intermediate_python: {
        name: "Intermediate Python",
        description: "An intermediate course to strengthen your Python skills",
        details: "Intermediate Python dives deeper into the Python programming language," +
          " covering more advanced topics such as functions, data structures, error handling, and file I/O.",
        url: "intermediate_python",
        language: "Python",
        tasks: {
            functions: {
                title: "Functions",
                description: "Learn how to use and define functions in Python",
                details: "Functions are an essential element of Python as it allows you to write code that can be reused throughout your program." +
                  " A function is a block of code that only runs when it is called. You can also pass data, known as parameters, into a function.\n\n" +
                  "Functions are defined using the 'def' keyword. They are called by writing the function name followed by round brackets 'functionName()'." +
                  " The code provided to you will define a function that takes a name as a parameter and returns a greeting.\n\n" +
                  "In this task, you'll need to define a function called 'square' that takes a number as a parameter and returns the square of that number." +
                  " In order to square a number, you can multiply the number by itself, or make use of the ** operator which raises a number to a power. For example, 3 * 3 and 3 ** 2 would return 9.",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "def greet(name):\n" +
                      "    return \"Hello \" + name + \"!\"\n" +
                      "\n" +
                      "print(greet(\"Alice\"))"
                },
                url: "functions",
                nextTask: "Variable Scope",
                nextTaskURL: "variable_scope"
            },
            variable_scope: {
                title: "Variable Scope",
                description: "Understand the basic concept of variable scope in Python",
                details: "In Python, variable scope refers to the context in which a variable is defined and accessed." +
                  " When a value is defined inside a function, it is only accessible within that function, and is discarded after the function finishes executing." +
                  " These are called Local Variables.\n\n" +
                  "On the other hand, variables defined outside of the function are global functions and can be accessed by functions." +
                  " Global variables cannot however be modified inside a function unless passed as a parameter or with the 'global' keyword followed by the variable name." +
                  " The global keyword asks python to refer to get the variable from the global context.\n\n" +
                  "Try accessing the local variable local_var after the print statement. What happens?\n" +
                  "Now, try changing adding 10 to global_var at the start of the function. What happens?\n\n" +
                  "You will notice that both of these cause an error. Local variables cannot be accessed outside of the function, and global variables cannot be modified within." +
                  " Try using the 'global' keyword followed by the variable name in the function before adding 10.",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "global_var = 10\n" +
                      "\n" +
                      "def operation(local_var):\n" +
                      "    #Try modifying the global_var here\n" +
                      "    return (global_var + local_var)\n" +
                      "\n" +
                      "print(operation(5))\n" +
                      "\n" +
                      "#Try accessing the local_var here"
                },
                url: "variable_scope",
                previousTask: "Functions",
                previousTaskURL: "functions",
                nextTask: "Nested Functions",
                nextTaskURL: "nested_functions"
            },
            nested_functions: {
                title: "Nested Functions",
                description: "Learn about nested functions and the 'nonlocal' keyword in Python",
                details: "Functions in python can be defined inside another function to create what is called a nested function." +
                  " The nested function can be referred to as the child function, and the enclosing function can be referred to as its parent function.\n\n" +
                  "Similar to how variables are localised to their function, variables inside a nested function can only be accessed within itself." +
                  " In this context, global variables refer to variables outside of any functions, whereas variables belonging to the parent function are called nonlocal variables." +
                  " Nonlocal variables can be accessed in a similar manner to to global variables, using the 'nonlocal' keyword before the variable name.\n\n" +
                  "In this task, you are given a global and nonlocal variable, along with a nested function." +
                  " Modify the increment function to use the nonlocal counter variable, then add the parameter value before returning it.",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "counter = 0  #Global variable\n" +
                      "\n" +
                      "def parent_function():\n" +
                      "    counter = 5  #Nonlocal variable\n" +
                      "\n" +
                      "    def increment(amount):\n" +
                      "        global counter\n" +
                      "        return counter\n" +
                      "    \n" +
                      "    print(increment(1))\n" +
                      "    print(increment(2))\n" +
                      "    print(increment(3))\n" +
                      "\n" +
                      "parent_function()"
                },
                url: "nested_functions",
                previousTask: "Variable Scope",
                previousTaskURL: "variable_scope",
                nextTask: "Working with Lists",
                nextTaskURL: "working_with_lists"
            },
            working_with_lists: {
                title: "Working with Lists",
                description: "Learn how to create and manipulate Lists in Python",
                details: "Lists are an ordered collection of items, which can be of any data type including strings, integers, and even other lists." +
                  " Lists are mutable, meaning that you can change the items in a list after it has been created." +
                  " In Python, lists are defined using square brackets [ ] and items are separated by commas.\n\n" +
                  "Items in a list can be accessed by their index, with the first item having an index of 0." +
                  " To access an item in a list, use the list name followed by square brackets containing the index of the item." +
                  " You can also make use of methods provided by lists for adding, removing, and modifying items.\n\n" +
                  "In this task, you are given a list of numbers. Add the number 5 to the list, then print each item in the list one by one.",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "numbers = [1, 2, 3, 8]\n" +
                      "\n" +
                      "numbers.append(4) #Adds the number 4 to the END of the numbers list\n" +
                      "\n" +
                      "numbers.remove(8) #Finds and removes the first 8 in the list\n" +
                      "\n" +
                      "#Add the number 5 to the list\n" +
                      "\n" +
                      "\n" +
                      "#Use a for loop to print the items in the list\n" +
                      "\n" +
                      "print(numbers[0]) #Prints the value at index 0 in the list"
                },
                url: "working_with_lists",
                previousTask: "Nested Functions",
                previousTaskURL: "nested_functions",
                nextTask: "Utilising Dictionaries",
                nextTaskURL: "utilising_dictionaries"
            },
            utilising_dictionaries: {
                title: "Utilising Dictionaries",
                description: "Learn how to create and manipulate Dictionaries in Python",
                details: "Dictionaries are another data structure in Python, which store key-value pairs." +
                  " Each key is separated from its value by a colon, and the items are separated by commas." +
                  " Dictionaries are mutable, meaning that you can change the items in a dictionary after it has been created." +
                  " In Python, dictionaries are defined using curly braces { }.\n\n" +
                  "Items in a dictionary can be accessed by their key, returning the value that is paired with that specific key." +
                  " Keys in a dictionary are unique and as such, giving a new value replaces the previous one.\n\n" +
                  "Dictionaries have many unique functions such as items() which returns a list containing a tuple for each key value pair." +
                  " There are also functions such as keys() and items() which return a list of keys and items respectively.\n\n" +
                  "In this task, you are given a dictionary of names and ages. Add a new key-value pair to the dictionary, then print each key-value pair in the dictionary one by one.",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "people = {\n" +
                      "    \"Alice\": 25,\n" +
                      "    \"Bob\": 30,\n" +
                      "    \"Charlie\": 35\n" +
                      "}\n" +
                      "\n" +
                      "people[\"David\"] = 40 #Adds a new key-value pair to the people dictionary\n" +
                      "\n" +
                      "print(people.items()) #Returns a list of tuples containing the key-value pairs\n" +
                      "\n" +
                      "#Use a for loop to print the key-value pairs in the dictionary\n" +
                      "\n" +
                      "print(people[\"Alice\"]) #Prints the value associated with the key \"Alice\"\n"
                },
                url: "utilising_dictionaries",
                previousTask: "Working with Lists",
                previousTaskURL: "working_with_lists",
                nextTask: "Packing and Unpacking Tuples",
                nextTaskURL: "packing_and_unpacking_tuples"
            },
            packing_and_unpacking_tuples: {
                title: "Packing and Unpacking Tuples",
                description: "Learn how to pack and unpack Tuples in Python",
                details: "Tuples are another data structure in Python, similar to lists, but they cannot be changed after being defined." +
                  " Tuples are defined using parentheses ( ) and items are separated by commas, and items are accessible by index.\n\n" +
                  "Packing and unpacking tuples is a common practice in Python, and allows you to assign multiple values to multiple variables in a single line of code." +
                  " Declaring a tuple is known as packing, as you specify the values of the tuple and store it into one variable." +
                  " Unpacking is a process that involves defining multiple variables to receive the values contained in the tuple\n\n" +
                  "In this task, you are given multiple tuples containing names, ages, and birth years." +
                  " Unpack the data for personC and print the sum of all the ages." ,
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "personA = (\"Alice\", 25, 2000 )\n" +
                      "personB = (\"Bob\", 22)\n" +
                      "personC = (\"Charlie\", 24)\n" +
                      "\n" +
                      "\n" +
                      "(nameA, ageA, birthYearA) = personA\n" +
                      "ageB = personB[1]\n" +
                      "\n" +
                      "#Unpack the personC tuple into separate variables\n" +
                      "\n" +
                      "\n" +
                      "#Add the three ages and print them\n"
                },
                url: "packing_and_unpacking_tuples",
                previousTask: "Utilising Dictionaries",
                previousTaskURL: "utilising_dictionaries",
                nextTask: "File I/O",
                nextTaskURL: "file_io"
            },
            file_io: {
                title: "File I/O",
                description: "Learn how to read and write files in Python",
                details: "File I/O (Input/Output) is a core function of any programming language, allowing you to read and write data to and from files." +
                  " Python has built-in functions that allow you to open, read, write, and close files.\n\n" +
                  "The open() function is used to open a file, and takes two arguments: the file name and the mode in which the file should be opened." +
                  " The mode can be 'r' for reading, 'w' for writing, 'a' for appending, and 'r+' for reading and writing.\n\n" +
                  "In this task, you are given a file named 'example.txt' containing a list of names." +
                  " Read the file and print each name, then add a new name to the file." +
                  " Remember to close the file after you are done reading and writing.\n\n" +
                  "Check the 'example.txt' file from the drop-down menu after running the code.",
                fileSystemEnabled: true,
                baseCode: {
                    "example.txt": "Alice\n" +
                      "Bob\n" +
                      "Charlie\n" +
                      "David\n" +
                      "Eve\n",
                    "main.py": "nameFile = open(\"example.txt\", \"r\")\n" +
                      "names = nameFile.readlines()\n" +
                      "nameFile.close()\n" +
                      "\n" +
                      "#Print each name in the names list\n" +
                      "\n" +
                      "\n" +
                      "#Append a new name to the file\n"
                },
                url: "file_io",
                previousTask: "Packing and Unpacking Tuples",
                previousTaskURL: "packing_and_unpacking_tuples",
                nextTask: "Error Handling",
                nextTaskURL: "error_handling"
            },
            error_handling: {
                title: "Error Handling",
                description: "Learn how to handle errors in Python",
                details: "Error handling is an essential part of programming, allowing you to gracefully handle errors that may occur during execution." +
                  " Python provides a way to catch and handle exceptions using the try, except, else, and finally blocks.\n\n" +
                  "The try block contains the code that may raise an exception, and the except block contains the code that handles the exception." +
                  " The else block is executed if no exceptions are raised, and the finally block is executed regardless of whether an exception was raised.\n\n" +
                  "In this task, you are given a function that divides two numbers." +
                  " Add a try-except block to handle the ZeroDivisionError that occurs when dividing by zero." +
                  " In the except block, print 'Cannot divide by zero'.",
                fileSystemEnabled: false,
                baseCode: {
                    "main.py": "def divide(a, b):\n" +
                      "    return a / b\n" +
                      "\n" +
                      "result = divide(10, 0)\n" +
                      "print(result)\n" +
                      "\n" +
                      "try:\n" +
                      "    #Try to divide by zero here\n" +
                      "    print()\n" +
                      "except:\n" +
                      "    #Print an error if it occurs\n" +
                      "    print()\n"
                },
                url: "error_handling",
                previousTask: "File I/O",
                previousTaskURL: "file_io",
                nextTask: "Working with multiple python files",
                nextTaskURL: "working_with_multiple_python_files"
            },
            working_with_multiple_python_files: {
                title: "Working with multiple python files",
                description: "Learn how to split your code into multiple files",
                details: "As your codebase grows, it may become difficult to manage all your code in a single file." +
                  " Python allows you to split your code into multiple files, making it easier to organize and maintain." +
                  " You can import functions and classes from other files using the import statement.\n\n" +
                  "In this task, you are given two files: main.py and helper.py." +
                  " Firstly, open the helper.py file and modify the square function to return the square of the input." +
                  " Next, import the square function from helper.py into main.py.\n\n" +
                  "Now that you have imported the function, you can call it anywhere after the import statement to use it." +
                  " Call the imported function in the for loop of the allSquares function and print the result." ,
                fileSystemEnabled: true,
                baseCode: {
                    "main.py": "#Import the function below by writing 'from helper import square'\n" +
                      "\n" +
                      "def allSquares(n):\n" +
                      "    for i in range(1, n + 1):\n" +
                      "        #Call the imported function and print the result\n" +
                      "        print(i)\n" +
                      "\n" +
                      "allSquares(5)",
                    "helper.py": "#This is the function that we intend to import to main.py\n" +
                      "def square(n):\n" +
                      "    #Square the value before it is returned\n" +
                      "\n" +
                      "    return n"
                },
                url: "working_with_multiple_python_files",
                previousTask: "Error Handling",
                previousTaskURL: "error_handling",
            }
        }
    },
    python_object_oriented: {
        name: "Python Object Oriented Programming",
        description: "An introduction to Object Oriented Programming in Python",
        details: "",
        url: "python_object_oriented",
        language: "Python",
        tasks: {
            hello_world: {
                title: "Hello World",
                description: "Lets start learning Python with the basics",
                details: "Write a program that prints 'Hello World!'",
                fileSystemEnabled: false,
                baseCode: "",
                url: "hello_world",
                nextTask: "Variables",
                nextTaskURL: "variables"
            }
        }
    },
    template: {
        name: "Template",
        description: "An introduction to Object Oriented Programming in Python",
        details: "",
        url: "template",
        language: "Python",
        tasks: {
            hello_world: {
                title: "Hello World",
                description: "Lets start learning Python with the basics",
                details: "Write a program that prints 'Hello World!'",
                fileSystemEnabled: false,
                baseCode: "",
                url: "hello_world",
                nextTask: "Variables",
                nextTaskURL: "variables"
            }
        }
    }
}

export default courses