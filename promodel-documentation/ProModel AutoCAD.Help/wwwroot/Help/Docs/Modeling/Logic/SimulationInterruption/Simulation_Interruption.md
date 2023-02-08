<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Simulation Interruption

</span>
</span></span>

# **Simulation Interruption**
***
<span style="font-size:15px">
<br>

While building your model, there may be times where you wish to stop your simulation at a certain time or when certain events occur. 
ProModel offers statements that allow you to pause, interrupt, or stop your simulation when necessary. 

<br>

## **_Pause_**
<br>

The **Pause** statement pauses the simulation and can also optionally display a message. 
Using the **Pause** statement will create a pop-up window during your simulation, potentially with a message if you have defined one. 
After clicking **OK** to dismiss the window, your simulation will remain paused and you must press the **Play** icon to resume your simulation. 

To use the **Pause** statement, use the syntax 

~~~
Pause “<message>” 
~~~

where **message** is the message you would like to display when the simulation is paused. 
If the **message** field is left blank, the simulation will pause without displaying a message. 

<br>

##### Example
<br>

If you include the statement 

~~~
Pause “Packaging machine reached” 
~~~

in the Logic for a packing machine Location, the simulation will pause and display the message “Packaging machine reached” every time an Entity enters the packing machine Location. 

<br>

## **_Prompt_**
<br>

The **Prompt** statement interrupts the simulation and displays a window that prompts the user for information. 
The user’s answer will then be assigned to a Variable or an Attribute, and the simulation will continue. 

There are two different types of prompt windows that the **Prompt** statement can create: a text box prompt window and a selection prompt window. 

<br>

##### Text Box Prompt
<br>

To use the **Prompt** statement to create a text box prompt window, use the syntax

~~~
Prompt “<message>”, <Variable or Attribute> 
~~~

where **message** is the message you would like to display in the prompt window and **Variable** or **Attribute** is the Variable or Attribute to which the result of the prompt will be assigned. 

<br>

##### Example
<br>

Defining the statement 

~~~
Prompt “How long will this customer be eating? (number only, in minutes)”, aEatTime
~~~

at a table Location in a restaurant model will pause the simulation to display a pop-up window every time an Entity enters the table Location. 
The window will display the message “How long will this customer be eating? (number only, in minutes)” and will provide a text box where the user can enter their answer. 

The user may press **OK** to confirm their answer, or press **Abort** to end the simulation. 
If the user types “**10**” into the text box and confirms, then the Attribute **aEatTime** will be assigned the value **10**.
The simulation will then resume.

<br>

##### Selection Prompt
<br>

To use the **Prompt** statement to create a prompt window with multiple choices, use the syntax 

~~~
Prompt “<message>”, <Variable or Attribute>, “<choice 1 name>” : <choice 1 value>, “<choice 2 name>” : <choice 2 value>, “<choice 3 name>” : <choice 3 value> … and so on
~~~

You may also use braces to improve the clarity of your code 

~~~
{Prompt “<message>”, <Variable or Attribute>,
“<choice 1 name>” : <choice  1 value>, 
“<choice 2 name>” : <choice 2 value>, 
“<choice 3 name>” : <choice 3 value> }
~~~

<br>

##### Example
<br>

Defining the statement 

~~~
{Prompt “How long will this customer be eating?”, aEatTime, 
“10 minutes” : 10,
“15 minutes” : 15,
“20 minutes” : 20} 
~~~

at a table Location in a restaurant model will pause the simulation to display a pop-up window every time an Entity enters the table Location. 
The window will display the message “How long will this customer be eating?” and will provide a list where the user can select “10 minutes”, “15 minutes”, or “20 minutes”. 

Once the user has made their selection, they may press **OK** to confirm or press **Abort** to end the simulation. 
If the user selects the “**15 minutes**” option and confirms, then the attribute **aEatTime** will be assigned the value **15**.
The simulation will then resume.  

<br>

## **_Display_**
<br>

The **Display** statement allows you to interrupt the simulation to display a message of your choice. 
In addition to using text in your message, you may also use the names of Attributes or Variables to display their value. 

To use the **Display** statement, use the syntax

~~~
Display “<message>” 
~~~

where **message** is the message that you would like to display. 
The names of Attributes or Variables can be included in your message, but they must appear outside of the quotation marks and be separated by commas

~~~
Display “<message>”, <Variable or Attribute>, “<message>”
~~~

<br>

##### Example
<br>

If the statements 

~~~
vCompleted = 5
aType = 10 
Display “The value of vCompleted is ”, vCompleted”, “ and the value of aType is ”, aType
~~~

are defined at a Location in your model, the message “The value of vCompleted is 5 and the value of aType is 10” will display on a pop-up window every time an Entity enters that Location. 

<br>

## **_Stop_**
<br>

The **Stop** statement allows you to stop the current replication of the simulation and optionally display a message. 
The simulation will then move on to the next replication of the simulation. 
If the **Stop** statement is executed on the final replication of a simulation, the simulation will end. 
The **Stop** statement can be used to end a replication once you have received enough statistical data for your purposes. 

To use the **Stop** statement, use the syntax 

~~~
Stop “<message>” 
~~~

where **message** is the message you would like to display when the replication is terminated. 
If the **message** field is left blank, no message will be displayed.

<br>

##### Example
<br>

Let’s say you wanted to end each replication of a simulation when **100** Entities had been completed in the model. 
You would first define a Variable with an initial value of **0** to represent the total Entities completed in your model (**vCompleted**). 
You would then define the statements 

~~~
Inc vCompleted
If vCompleted = 100 Then Stop “100 Completed” 
~~~

in the final Location of your model. 
Each time an Entity reached the final Location, the value for **vCompleted** would increase by one. 
Once the value of **vCompleted** reached **100**, the replication of the simulation would stop, and the message “100 Completed” would be displayed. 
The simulation would then move on to the next replication. 

For more information on the statements used in this example, see the [If ... Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) and [Inc](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#inc) sections of this guide. 

</span>