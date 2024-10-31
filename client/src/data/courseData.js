const courses = {
    intro_to_python: {
        name: "Intro to Python",
        description: "An introduction to Python programming",
        url: "intro_to_python",
        language: "Python",
        fileSystemEnabled: false,
        tasks: {
            hello_world: {
                title: "Hello World",
                description: "Lets start learning Python with the basics",
                details: "Write a program that prints 'Hello World!'",
                baseCode: "",
                expectedOutput: "Hello World!",
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
                baseCode: "my_string = 'This is an example'\n" +
                  "print(my_string)",
                expectedOutput: "Hello World",
                url: "variables",
                previousTask: "Hello World",
                previousTaskURL: "hello_world",
                nextTask: "Variable Types",
                nextTaskURL: "variable_types"
            },
            variable_types: {
                title: "Variable Types",
                description: "A variable can have many different types. Let's explore a few of them.",
                details: "In python, variables can store different types of data, and every type has unique characteristics. Some common ones inlcude:"+
                  "int: Integer" +
                  "float: Real numbers"+
                  "double: Also stores real numbers, but much more accurate"+
                  "str: A String of characters"+
                  "bool: True or False values"+
                  "Let's say we have a variable distance = 4.3. To find the data type of a variable, you can use type(distance), which should output 'float'"+
                  "Now that you have an idea of what data types are, try and make your own variable that stores an Integer. Then output the variable and its type. We've started off the code for you",
                baseCode: "my_variable = 12",
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
                baseCode: "for i in range(5):" + "\n" +
                  "   print('racecar')",
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
                baseCode: "print('*' * 5) # This will print a line of 5 asterisks",
                url: "make_a_triangle",
                previousTask: "For Loops",
                previousTaskURL: "for_loops",
                nextTask: "Conditional Statements",
                nextTaskURL: "conditional_statements"
            },
            conditional_statements: {
                title: "Conditional Statements",
                description: "How do we make our code condition based? Lets take a look",
                details: "When coding, we may want to execute different lines of code based on a condition. An example would be turning on an air conditoner at a certain temperature"+
                  "i.e if the temperature is greater than 25 turn on the AC. In python this is achieved by using an 'if statement'. The code shown"+
                  "will illustrate how the above example can be achieved in code. Try poking around and change the condition so that the AC turns off when the temperature is below 20",
                baseCode: "temp = 30" + "\n" +
                  "if (temp > 25):" + "\n" +
                  "   print('Turn on AC')",
                previousTask: "Make a Triangle",
                previousTaskURL: "make_a_triangle",
                nextTask: "Conditional Statements 2",
                nextTaskURL: "conditional_statements_2"
            },
            conditional_statements_2: {
                title: "Conditional Statements: Part 2",
                description: "We have more control over conditional Statements than you think",
                details: "Let's take a look at our previous example where we wanted the Ac to turn on when the temperature is greater than 25. The task asked you to turn off the AC" +
                  "when the temperature is below 20. A neat characterisitic of the 'if' statement is the 'else' statement. This allows to to execute lines in the case where our condition was not fullfilled."+
                  "So, it would look like: " + "\n" +
                  "if (temp > 25):" + "\n" +
                  "   print('Turn on AC')" + "\n" +
                  "else:" + "\n" +
                  "   print('Turn off AC')" + "\n" +
                  "This code will turn on the AC when the temperature is above 25, otherwise it will turn the AC off. We also have the ability to add another if statement in front of the else keyword. Try and make if so that " +
                  "The AC turns on when the temperature is above 25, and so that a heater turns on when the temperature is below 20.",
                baseCode: "if (temp > 25):" + "\n" +
                  "   print('Turn on AC')" + "\n" +
                  "else:" + "\n" +
                  "   print('Turn off AC')",
                previousTask: "Conditional Statements",
                previousTaskURL: "conditional_statements"
            }
        },
    },
    python_object_oriented: {
        name: "Python Object Oriented Programming",
        description: "An introduction to Object Oriented Programming in Python",
        url: "python_object_oriented",
        language: "Python",
        fileSystemEnabled: true,
        tasks: {}
    },
    template: {
        name: "Template",
        description: "An introduction to Object Oriented Programming in Python",
        url: "template",
        language: "Python",
        fileSystemEnabled: true,
        tasks: {}
    }
}

export default courses