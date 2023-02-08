<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Incrementing and Decrementing 

</span>
</span></span>

# **Incrementing and Decrementing**
***
<span style="font-size:15px">
<br>

In a ProModel simulation, it can sometimes be helpful to increment or decrement certain values as events occur in the system. 
ProModel offers a series of statements to easily execute increments and decrements as you create Logic for your model. 

<br>

## **_Inc_**
<br>

The **Inc** statement adds a specified amount to a Variable or an Attribute every time an Entity enters the Location or Route where the statement is defined. 

To use the **Inc** statement, use the syntax

~~~ 
Inc <Variable or Attribute>,<number>
~~~

where **number** is the amount you wish to add to your Variable or Attribute every time the statement is executed. 
If no **number** is specified, the **Inc** statement will default to adding **1** to your Variable or Attribute. 

<br>

##### Examples
<br>

The following statement adds **1** to the Attribute **Attr1**

~~~
Inc Attr1
~~~

And the following statement adds **5** to the Variable **Var1**

~~~
Inc Var1,5
~~~

The **Inc** statement is a more concise execution of a mathematical expression adding a value to the initial Variable or Attribute value. 

For example, the statement 

~~~
Inc Attr1,6 
~~~

functions in the same way as 

~~~
Attr1 = Attr1 + 6
~~~

While using the **Inc** statement is the more streamlined option, both methods will achieve the same end result and either option is acceptable. 

<br>

## **_Dec_**
<br>

The **Dec** statement subtracts a specified amount from a Variable or an Attribute every time an Entity enters the Location or Route where the statement is defined. 

To use the **Dec** statement, use the syntax 

~~~
Dec <Variable or Attribute>,<number>
~~~

where **number** is the amount you wish to subtract from your Variable or Attribute every time the statement is executed. 
If no **number** is specified, the **Dec** statement will default to subtracting **1** from your Variable or Attribute. 

<br>

##### Examples
<br>

The following statement subtracts **1** from the Attribute **Attr1**

~~~
Dec Attr1
~~~

And the next statement subtracts **4** from the Variable **Var1**

~~~
Dec Var1,4 
~~~

The **Dec** statement is a more concise execution of a mathematical expression subtracting a value from the initial Variable or Attribute value.

For example, the statement 

~~~
Dec Attr1,7 
~~~

functions in the same way as 

~~~
Attr1 = Attr1 - 7
~~~

While using the **Dec** statement is the more streamlined option, both methods will achieve the same end result and either option is acceptable. 

<br>

## **_IncEntCost_**
<br>

The **IncEntCost** statement increments the cost (positively or negatively) of an Entity by a given amount. 
The Entities that will be incremented are the Entities that enter the Location or Route where this statement is included in the Logic. 

To use the **IncEntCost** statement, use the syntax 

~~~
IncEntCost <number> 
~~~

where **number** is the positive or negative amount that you would like to add to the Entity’s cost. 
The **number** field may not be left blank.

<br>

##### Examples
<br> 

If an Entity has an initial cost of **10** and then enters a Location that has the statement 

~~~
IncEntCost 5 
~~~

defined in its Logic, the cost of the Entity will then be **15**. 
Similarly, if an Entity has an initial cost of **10** and then enters a Location that has the statement 

~~~
IncEntCost -8 
~~~

defined in its Logic, the cost of the Entity will then be **2**. 

<br>

## **_IncLocCost_**
<br>

The **IncLocCost** statement increases the cost (positively or negatively) of the Location where the statement is defined in the Logic every time an Entity passes through that Location. 
Note that this statement may only be used for Locations and not for Routes. 

To use the **IncLocCost** statement, use the syntax 

~~~
IncLocCost <number> 
~~~

where **number** is the positive or negative amount that you would like to add to the Location’s cost. 
The **number** field may not be left blank. 

<br>

##### Examples
<br>

Let's say a Location has an hourly cost of **10** and also has the statement 

~~~
IncLocCost 2
~~~

defined in its Logic. 
If the simulation runs for **12 hours** and the Location has a total of **75** Entities pass through it, the total cost for the Location at the end of the simulation would be **270**.

~~~
12 (hours in simulation) * 10 (hourly cost) + 75 (Entities) * 2 (IncLocCost value) = 270 
~~~

Similarly, let’s say a Location has an hourly cost of **10** and also has the statement 

~~~
IncLocCost -2 
~~~

defined in its Logic. 
If the simulation runs for **24 hours** and the Location has a total of **50** Entities pass through it, the total cost for the Location at the end of the simulation would be **140**.

~~~
24 (hours in simulation) * 10 (hourly cost) + 50 (Entities) * -2 (IncLocCost value) = 140 
~~~ 

<br>

## **_IncResCost_**
<br>

The **IncResCost** statement increments the cost (positively or negatively) of a Resource by a given amount every time the Resource is “owned” by an Entity in a Location or Route where the IncResCost statement is defined in the Logic. 
Note that a Resource must be “owned” by the Entity in a Location or Route in order to execute the **IncResCost** statement. 
For more information on the **Get** statement, which can be used to have Entities “own” Resources, see the [Get](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Grouping/Grouping.md#get) section of this guide.

To use the **IncResCost** statement, use the syntax 

~~~
IncResCost <number> 
~~~

where **number** is the positive or negative amount that you would like to add to the Resource’s cost. 
The **number** field may not be left blank. 

<br>

##### Examples
<br>

Let’s say a Resource called **Rec1** has an hourly cost of **10** and a Location that **Rec1** is able to interface with has the statements  

~~~
Get Rec1 
Wait 10 min
IncRecCost 5 
Free Rec1
~~~

defined in its Logic. 
If the simulation runs for **12 hours** and a total of **10** Entities pass through this particular Location, the total cost of **Rec1** at the end of the simulation will be **170**.

~~~
12 (hours in simulation) * 10 (hourly cost) + 10 (Entities) * 5 (IncRecCost value) = 170 
~~~

Similarly, let’s say a Resource called **Rec2** has an hourly cost of **10** and a Location that **Rec2** is able to interface with has the statements 

~~~
Get Rec2
Wait 10 min 
IncRecCost -2 
Free Rec2
~~~

defined in its Logic. 
If the simulation runs for **24 hours** and a total of **15** Entities pass through this particular Location, the total cost of **Rec2** at the end of the simulation will be **210**.

~~~
24 (hours in simulation) * 10 (hourly cost) + 15 (Entities) * (-2) (IncRecCost value) = 210
~~~

</span> 