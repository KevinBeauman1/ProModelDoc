<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Moving

</span>
</span></span>

# **Moving**
***
<span style="font-size:15px">
<br>

ProModel offers statements that give you more control over how Entities move throughout your model. 

<br>

## **_Move_**
<br>

The **Move** statement allows you to move an Entity to the end of a Conveyor immediately when the statement is encountered. 
Use the **Move** statement to explicitly control the movement of an entity through a Conveyor. 
Note that the **Move** statement may only be defined in the Logic of Conveyors, and that a **Move** statement may not appear more than once in the same Logic.

To use the **Move** statement, include it in the Logic of a Conveyor. 
You may use the **Move** statement along with **If … Then** statements or other Logic in order to achieve your desired result. 

~~~
Move

If <Boolean expression> Then Move
~~~

For more information about how If ... Then statements function, see the [If ... Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) section of this guide.

<br>

##### Example
<br>

Let’s say that you have a model where some of your Entities are **Large** and some are **Small**. 
You define an Attribute to keep track of an Entity's size: **aSize**. 
An **aSize** value of **0** marks an Entity as **Small** and an **aSize** value of **1** marks an Entity as **Large**. 
All Entities in your model must travel on a Conveyor. 
Since the **Large** Entities are bigger and take more time to process, you want the **Small** Entities to be able to overtake them on the Conveyor. 
To achieve this result, you would define the statements

~~~
{
	If aSize = 0 
	Then Move
}
~~~

in the Logic of the Conveyor. 
If an Entity with an **aSize** value of **0** enters the Conveyor, it will be able to immediately move to the end of the Conveyor. 
 
For more information on the statements used in this example, see the [If … Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) section of this guide. 

<br>

## **_Send_**
<br>

The **Send** statement allows you to send a specified number of a particular Entity to a desired Location. 
Use the **Send** statement to simulate a model based on demand rather than Entity arrivals. 
Entities to be sent must be waiting at a Location with an **If Send** Routing Rule. For more information on the **If Send** Routing Rule, see the [Routing Rules](/pmacad/help/topic?page=Help/Docs/Modeling/Routing_Rules.md) section of the documentation. 

To use the **Send** statement, use the syntax 

~~~
Send <number> <Entity name> To <Location name>, <priority> 
~~~

where **number** is the amount of a particular Entity you want to send and **Entity name** is the type of Entity you want to send. 
**Location name** is the name of the Location where you would like the Entities to travel to. 
The **priority** field is an optional part of the statement that defines how high of a priority the requesting Entity is in regards to how quickly it receives its requested Entities. 
It should be a number between **1** and **999**, and the requesting Entities with a higher number in the **priority** field will receive their requested Entities before the requesting Entities with a lower number. 
If the **priority** field is left blank for all requesting Entities, they will receive their requested Entities on a first come, first served basis. 

<br>

##### Examples
<br>

Let’s say you have a model that simulates a restaurant that serves hamburgers. 
Rather than having **Hamburger** Entities arrive in your model at specified times, you want the **Hamburger** Entities to wait in the freezer until customers come in to request them. 
To achieve this result, you would need to connect the **Freezer** Location where the **Hamburgers** are waiting to the next Location, the **Stove**, using a Route with the **If Send** Routing Rule. 
Using the **If Send** Routing Rule will cause the **Hamburgers** to wait in the **Freezer** until a **Send** statement is executed for them somewhere else in the model. 
You would then define the statement 

~~~
Send Hamburger To Stove
~~~

In the Logic of the **FrontDesk** Location. 
That way, every time a **Customer** Entity entered the **FrontDesk** Location to order a **Hamburger**, a **Hamburger** Entity would move from the **Freezer** to the **Stove** and start cooking. 

Now, let’s say that your **Hamburger** restaurant expands, so instead of having a single **FrontDesk** Location where **Customers** order, you have multiple **Cash Register** Locations: **Register1**, **Register2**, and **Register3**. 
You’ve noticed that **Register1** is always the most busy, so you want to make sure that **Hamburgers** are always prepared for the **Customers** at **Register1** first. 
To achieve this result, you would define the statement

~~~
Send Hamburger To Stove, 2
~~~

in the Logic of **Register1**, and the statement  

~~~
Send Hamburger To Stove, 1 
~~~

in the Logic of **Register2** and **Register3**. 
The value in the priority field will ensure that when multiple **Register** Locations are requesting **Hamburger** Entities be sent to the **Stove** Location, the requests of **Register1** will be fulfilled first. 

</span>
