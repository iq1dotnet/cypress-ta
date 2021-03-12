##The approach
The project is organized:
Specs - the tests. I like to call them specs as they are specifying the actual specification (behavior)
shared - using custom commands for repetitive functionalities. Indeed, it’s a small project, but I wanted to express that we can use custom commands for steps like these.
Mostly I am using custom commands for api calls for login and logout, so my tests will look cleaner, the outcome will be focused only on the thing we actually test. 
(I wanted to explain this as we know that Cypress best practices are against reusing page objects)

I have two sets of tests, which cover positive and negative scenarios.
In some of them I used fixture in order to fetch data from a datasource and in some I used the straight forward way of passing the data.
Both ways can be used depending on the situation and what we need to achieve.

I personally prefer clean tests, but I do not relay strictly on DRY as some times it's better to implement something in simple way, 
than spend a huge amount of time making it generic, just to see that at the end you would do much better having it simple enough (KISS).

The assertion is based on what we have. The app itself does not have data-test properties, so I used what I thought it’s the best. 
(Of course It can be improved, but what can't? 😊 )

Of course, in order to run the tests, you need to start Cypress, running the command “Cypress open” with in elevated terminal
(but you already know that). 
Anyway, as this is a task, here is the documentation which can be used in order for the tests to be spun
https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

I want to mention that every test automation framework I have designed so far uses different approaches which is defined of the nature of the application.

That’s all I can say about the solution.

## Test cases:

###Positive scenarios
1.Add new todo 

Steps:
- Navigate to https://todomvc.com/examples/angular2/
- Click on "What needs to be done" text box
- Enter the value of your ToDo
- Press Enter key

Expected result
- The newly entered ToDo will be added to the list
   
2.Delete an existing todo 

Preconditions:
- Have a todo created

Steps:
- Click on the delete button

Expected result
- Verify that the todo is not in the list
- Verify that the list is empty
   
3.Edit a todo

Preconditions:
- Have a todo created

Steps:
- Double click on the todo from the list
- Edit the text
- Press Enter key

Expected result
- Verify that the todo will be edited successfully 
   
4.Mark to do completed

Preconditions:
- Have a todo created

Steps:
- Click on the checkbox in order to mark the todo completed

Expected result
- The todo will be marked as completed

###Negative scenarios
1.Add todo without a title

Steps:
- Navigate to https://todomvc.com/examples/angular2/
- Click on "What needs to be done" text box
- Enter a empty string
- Press Enter key

Expected result
- Verify that the todo will not be created
- Verify that the list will be empty

2.Delete todo from an empty list

Preconditions:
- Have an empty list of todos

Steps:
- Verify that there is no delete button present and that user can not delete non existing todo

Expected result
- The user will not be able to delete todo from an empty list

3.Edit a todo with single click 

Preconditions:
- Have a todo created

Steps:
- Single click on the todo from the list
- Verify that the todo will not go in edit mode

Expected result
- The todo will not be in edit mode 

4.Clear complete clears not completed todos

Preconditions:
- Have a couple of todos created

Steps:
- Check the first todo in the list
- Click the Clear completed button
- Verify that only the todos that are completed will be removed from the list

Expected result
- Only the todos that are completed will be removed from the list
- The todos that are still not completed will still be present in the list
