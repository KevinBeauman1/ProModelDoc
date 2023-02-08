<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > System

</span>
</span></span>

# **System**
***
<span style="font-size:15px">
<br>

ProModel offers statements that allow you to debug, animate, and otherwise manipulate and track your simulations. 

<br>

## **_Animate_**
<br>

The **Animate** statement allows you to control the animation speed of your simulation. 
Use the **Animate** statement when you want to slowly observe or quickly skip over a portion of your simulation. 

To use the **Animate** statement, use the syntax 

~~~
Animate <number> 
~~~

where **number** is a number between **1** and **100** that represents your desired animation speed. 
The higher the value in the **number** field, the faster the animation. 

<br>

##### Example 
<br>

Let’s say the overall animation speed of your simulation is set to the default **25**, but there is a particular portion of your model that you would like to move slower so that you can observe the results more closely. 
You would define the statement

~~~
Animate 10 
~~~

at the desired Location to slow down the animation speed to **10** every time an Entity enters that Location.  

<br>

## **_Debug_**
<br>

The **Debug** statement allows you to open the model debugger during your simulation, which will then allow you to step through your created Logic one statement at a time to verify your code and examine Variable and Attribute values. 
Use the **Debug** statement if something in your model Logic is not working the way you would like it to.

To use the **Debug** statement, include it in the Logic of your model wherever you would like the model debugger to open. 

~~~
Debug
~~~

Once an Entity reaches a Location or Route where the **Debug** statement is defined, the model debugger will open. 

Use the **Run** button to continue the simulation until the next instance of the **Debug** statement. 

Use the **Next Statement** button to step to the next Logic statement in your model.  

Use the **Options** button to view further options for debugging your Logic. 

Use the **End Simulation** button to end the simulation.  

<br>

## **_Trace_**
<br>

The **Trace** statement allows you to turn the tracing function on and off, which is used to follow the logical flow of a model. 
Trace listings will appear on a separate window on the screen. 

To use the **Trace** statement, use the syntax

~~~
Trace “<message>” <Type> 
~~~

where **message** is the message you want to display in the trace listings when the **Trace** statement is encountered. 
The **Type** field allows you to choose one of the following options for your **Trace** statement:

~~~
Trace Step
~~~

The **Step** option makes ProModel wait for the user to click the left mouse button to execute the next statement or trace continuously while the right mouse button is held down. 
If the **Type** field is left blank, the **Trace** statement will default to the **Step** type.

~~~
Trace Cont 
~~~

The **Cont** option steps continuously without user intervention. 
Clicking the right mouse button will step through the Logic. 

~~~
Trace Off 
~~~

The **Off** option turns tracing off but does not close the trace listing.

~~~
Trace Close
~~~

The **Close** option turns tracing off and closes the trace listing.

<br>

## **_ResetStats_**
<br>

The **Reset Stats** statement allows you to reset the simulation statistics for your model. 
When a **Reset Stats** statement is encountered, all the statistics in the simulation are reset, not just the statistics for a particular Location or Entity. 

To use the **Reset Stats** statement, include it in the Route or Location where you would like the reset to occur. 
The **Reset Stats** statement is often used with an **If … Then** statement to reset the statistics when a certain condition is met. 

~~~
Reset Stats

If <Boolean expression> Then Reset Stats 
~~~

For more information about how If ... Then statements function, see the [If ... Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) section of this guide.

<br>

##### Example
<br>

Let’s say you have a model that doesn’t work at full efficiency when operations are first started because it needs some time to get up to speed. 
It takes about four hours after start-up for your model to start working at its full possible speed. 
You have created your model to reflect this for the sake of authenticity, but you are only really interested in the statistics for what occurs after the model has gotten up to speed. 
To achieve this result, you would define the statements 

~~~
{
	If Clock(hr) < 4
	Then Reset Stats
}
~~~

in the Logic of a chosen Location in your model. 
While less than **4** hours had elapsed in your model, every time an Entity entered the Location where the **Reset Stats** statement was defined, the simulation statistics would be reset. 
Once more than **4** hours had elapsed in your model, the **Reset Stats** statement would no longer execute, since the Boolean expression of the **If ... Then** statement would no longer be true.
These statements would ensure that the simulation statistics would only include information for what occurred after the first **4** hours of the simulation. 

For more information on the statements used in this example, see the [If … Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) and [Clock](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Time/Time.md#clock) sections of this guide. 

</span>