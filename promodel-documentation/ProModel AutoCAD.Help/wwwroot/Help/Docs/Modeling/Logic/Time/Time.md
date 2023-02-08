<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Time

</span>
</span></span>

# **Time**
***
<span style="font-size:15px">
<br>

ProModel offers statements and functions that allow you to use the time that has elapsed within the simulation as a component of your model Logic.

<br>

## **_Clock_**
<br>

The **Clock** function is a system function that returns the amount of time elapsed in the simulation. 
The **Clock** function can be assigned to Variables or Attributes, or used in other types of Logic statements. 

To use the **Clock** function, use the syntax

~~~
Clock(units)
~~~

where **units** is the unit of time that you would like to use. 
If no time unit is specified, the **Clock** function will default to whatever default time unit is set in the General Information window.  

<br>

##### Example
<br>

If you define the statement 

~~~
Var1 = Clock(min) 
~~~

in the Logic of a Location, the Variable **Var1** will be assigned the amount of time that has elapsed in the simulation in minutes when an Entity reaches that Location. 
Note that if you plan to assign the **Clock** function to a Variable or an Attribute, then the Variable or Attribute must be of type **Real**. 

<br>

## **_Log_**
<br>

The **Log** statement allows you to record the time from one statement to another when used in tandem with the **Clock** function. 
The **Log** statement can be used to determine how long an Entity takes to travel from one Location to another, or other similar information. 

To use the **Log** statement, use the syntax 

~~~
Log “<log name>”, <element name> 
~~~

where **log name** is the name you would like to give this particular Log result.

The **element name** field is the name of an Attribute that you have assigned to the **Clock** function.

<br>

##### Example
<br>

Let’s say you have a model representing a coffee shop. 
Customers enter the system through the front door, line up to order at the front desk, sit and drink their coffee at a table, and then leave the system through the door. 
If you wanted to track how much time had elapsed between when a customer entered the system and when they sat down at a table, you would start by assigning an Attribute to the **Clock** function in the Logic of the front door Location.

~~~
aDoor = Clock()
~~~

You would then need to include the statement 

~~~
Log “Door to Table”, aDoor
~~~

at a table Location to calculate the “Door to Table” time, which would be the time it took an Entity to travel to that table after entering through the door.   

For more information on the statements used in this example, see the [Clock](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Time/Time.md#clock) section of this guide.

</span>