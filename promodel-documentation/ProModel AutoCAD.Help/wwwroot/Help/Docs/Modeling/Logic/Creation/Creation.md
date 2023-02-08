<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Creation

</span>
</span></span>

# **Creation**
***
<span style="font-size:15px">
<br>

ProModel offers a number of statements that allow you to create items, such as Variables, Entities and Resources, that you may then use in your model. 

<br>

## **_Create_**
<br>

The **Create** statement allows you to create a specified number of Entities at the Location where the statement is defined in the Logic. 
Note that this statement cannot be used in Routes. 
The created Entities will copy all Attributes of the original Entity, and can optionally take the original Entity’s Resources. 
The created Entities can either be the same Entity type as the original Entity or can optionally be changed to a new Entity type. 

To use the **Create** statement, use the syntax

~~~
Create <number> As <Entity name> Take <number> <Resource name> 
~~~

where **number** is the amount of Entities that you would like to create. 
The **number** field may not be left blank. 
The **As** statement is optional, and will change the created Entities into a new Entity type. 
**Entity name** will be the name of the new Entity type that the created Entities will turn into, and must be the name of another Entity you have defined in the Entities tab of the Simulation Browser. 
The new Entity type must have its own Flow defined for it. 
The **Take** statement is also optional, and will direct the created Entities to take a specified amount of Resources from the original Entity. 
The **number** field represents how many of a particular Resource you would like the created Entities to take from the original Entity. 
If the **number** field is left blank, it will be assumed to be **1**. 
**Resource name** is the name of the Resource that you would like the created Entities to take. 
You may also use commas to specify multiple Resources in the same **Create** statement. 

~~~
Create <number> Take <number> <Resource name>, <number> <Resource name> 
~~~

<br>

##### Examples
<br>

If the statement 

~~~
Create 10 
~~~

is defined in a Location, and a **Project** Entity enters that Location, **10** new **Project** Entities will be created and will then move on to the next Location in the Flow. 
If the statement

~~~
Create 10 As Paperwork 
~~~

is defined in the Location instead, when the **Project** Entity enters the Location, **10 Paperwork** Entities will be created. 
The created **Paperwork** Entities will then need to travel on their own Flow path while the original **Project** Entity continues through the original Flow path. 
Now, let’s say that the **Project** Entity owns a **Worker** Resource when it enters the Location, and the statement  

~~~
Create 10 As Paperwork Take Worker 
~~~

is defined in the Logic of the Location. 
When the **Project** Entity enters the Location, the **10** created **Paperwork** Entities will take the **Worker** Resource, and the **Project** Entity will no longer own any Resources.

<br>

## **_Int_**
<br>

The **Int** statement allows you to create a local Variable of type Integer. 
A local Variable is similar to a normal Variable, but it is only available within the Logic where it is defined. 
Use the **Int** statement to define test Variables for Logic loops or other Variables that don’t need to be global. 

To use the **Int** statement, use the syntax 

~~~
Int <name> = <number> 
~~~

where **name** is the name that you would like to assign to the new Variable and **number** is the value you would like to assign to the Variable. 
The **number** field must be an integer or a Variable, Attribute or Function that has an integer value. 
You may also use commas to create multiple new Variables with the same **Int** statement. 

~~~
Int <name 1> = <number>, <name 2> = <number>, <name 3> = <number> 
~~~

<br>

##### Example
<br>

Let’s say you have a model that creates many different types of books. 
As the **Book** Entity processes through the system, it may end up with many pages or few pages depending on what type of book it is. 
To keep track of a **Book** Entity’s pages, you create the Attribute **aPages**. 
In your model, there is an **Inspection** Location. 
You decide that the inspection should take about two minutes per page. 
You may then define the statements 

~~~
Int vInspectionTime = aPages * 2 

Wait vInspectionTime min 
~~~

in the Logic for the **Inspection** Location. 
The **Int** statement creates a local Variable that will be equal to twice the amount of pages that a **Book** Entity has. 
The **Wait** statement will then cause the **Book** Entity to wait at the **Inspection** Location for **vInspectionTime min**, which will be **2** minutes for every page that the **Book** Entity has. 
Each time a **Book** Entity enters the **Inspection** Location, the value for **vInspectionTime** will be changed to reflect double the number of pages that the particular **Book** Entity has.

For more information on the statements used in this example, see the [Wait](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Waiting/Waiting.md#wait) section of this guide.

<br>

## **_Real_**
<br>

The **Real** statement allows you to create a local Variable of type Real. 
A local Variable is similar to a normal Variable, but it is only available within the Logic where it is defined. 
Use the **Real** statement to define test Variables for Logic loops or other Variables that don’t need to be global. 

To use the **Real** statement, use the syntax 

~~~
Real <name> = <number> 
~~~

where **name** is the name that you would like to assign to the new Variable and **number** is the value you would like to assign to the Variable. 
The **number** field may be a number or a Variable, Attribute or Function with a numerical value assigned to it. 
You may also use commas to create multiple new Variables with the same **Real** statement. 

~~~
Real <name 1> = <number>, <name 2> = <number>, <name 3> = <number> 
~~~

<br>

##### Example
<br>

Let’s say you have a model that simulates a single **12** hour day where more **Painter** Resources are available in the early morning and in the late evening. 
Only one Location in your model, **Painting**, uses **Painter** Resources, so you decide a local Variable would be more effective than a global Variable to track their availability. 
To simulate the **Painting** Location using more **Painter** Resources during the time when more **Painter** Resources are available, you would define the statements 

~~~
Real vCurrentTime = Clock(hr) 

{ 
	If vCurrentTime > 4 and vCurrentTime < 8 
	Then Use 2 Painter For 10 min
	Else 
	Use 4 Painter For 10 min
}
~~~

in the Logic of the **Painting** Location. 
The **Real** statement will create a local Variable that is equal to the amount of time that has elapsed in the simulation in hours. 
Note that the **Real** statement is preferable to the **Int** statement in this case because the **Clock** function returns values of the real type. 
The **If … Then … Else** statement then uses the **vCurrentTime** Variable to determine how many **Painter** Resources to use. 
If the simulation is still in the early morning (before **4** hours have passed) or late in the evening (after **8** hours have passed), **4 Painter** Resources will be used. 
If the simulation is still in between these two time frames, only **2 Painter** Resources will be used. 

For more information on the statements used in this example, see the [If … Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements), [Else](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#else), [Use](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Waiting/Waiting.md#use), [Clock](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Time/Time.md#clock), and [Int](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Creation/Creation.md#int) sections of this guide. 


<br>

## **_Order_**
<br>

The **Order** statement allows you to create a specified number of Entities and send them to your desired Location. 
If the Location does not have enough capacity for all the new Entities, the excess Entities will be destroyed. 
Use the **Order** statement to replenish inventories or to order special parts when particular conditions occur. 

To use the **Order** statement, use the syntax

~~~
Order <number> <Entity name> To <Location name> 
~~~

where **number** is the amount of Entities that you want to create and **Entity name** is the name of the type of Entity you want to create. 
**Entity name** must be the name of an Entity that you have created in the Simulation Browser. 
The **To** statement is an optional statement that will send the created Entities to your desired Location. 
**Location name** is the name of the Location where you would like to send the created Entities. 
There must be a Flow path for the created Entity type that leads to the desired Location, but the Entity may skip steps in the Flow path to reach the specified Location.

<br>

##### Example
<br>

Let’s say you have a model that creates and sells **Bicycle** Entities. 
You want to produce all the **Bicycles** you sell yourself since it is less costly, but since business has been so good lately, you frequently run out of stock. 
Since you never want your store to be out of stock, you arrange to buy more **Bicycle** Entities from another manufacturer every time your store inventory gets too low. 
To simulate this relationship, you would first define a Variable to represent the inventory of the store portion of your model, **vInventory**. 
You would then define the statement 

~~~
Inc vInventory 
~~~

at the **Shelving** Location where the **Bicycles** are kept in the store, and the statement 

~~~
Dec vInventory 
~~~

at the **FrontDesk** Location where the **Bicycles** are sold in order to keep track of how many **Bicycles** are currently in the store portion of your model. 
Now, let’s say you wanted to check the inventory of your store to see if more **Bicycle** Entities need to be ordered every time a **Customer** Entity enters the store. 
You would then define the statements

~~~
{
	If vInventory < 10 Then 
	Order 10 Bicycle To Shelving 
	IncEntCost 5
}
~~~

in the Logic of the **FrontDoor** Location. 
Each time a **Customer** Entity enters the store, the **If … Then** statement will check the value of **vInventory** to see how many **Bicycles** are in the store. 
If there are less than **10 Bicycle** Entities in the store, the **Order** statement will order a total of **10 Bicycle** Entities and send them to the **Shelving** Location. 
The **IncEntCost** statement will increase the cost of each of the **10 Bicycle** Entities that are created by **5** to simulate the extra cost of ordering from an outside manufacturer. 

For more information on the statements used in this example, see the [Inc](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#inc), [Dec](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#dec), [IncEntCost](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#incentcost), and [If … Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) sections of this guide.

</span>