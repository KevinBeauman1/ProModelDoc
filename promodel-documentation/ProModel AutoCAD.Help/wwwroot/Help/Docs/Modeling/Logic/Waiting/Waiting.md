<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Waiting

</span>
</span></span>

# **Waiting**
***
<span style="font-size:15px">
<br>

ProModel offers a variety of statements that allow you to simulate waiting periods in your model. 

<br>

## **_Wait_**
<br>

The **Wait** statement allows you to instruct an Entity to wait at a particular Location for a specified time. 
Use the **Wait** statement to simulate the time it takes to process an Entity. 
Note that the **Wait** statement may be used in the Logic of Routes, but the Entity will wait in the source Location of the Route rather than in the Route itself. 

Time spent in a **Wait** statement is considered “Operation Time” in the simulation statistics for Entities and Locations. 
For more information on how to interpret simulation statistics, see the [Simulation Results](/pmacad/help/topic?page=Help/Docs/SimulationResults/Simulation_Results.md) section of the documentation.

To use the **Wait** statement, use the syntax 

~~~
Wait <number> <unit> 
~~~

where **number** is the amount of time you would like the Entity to wait and **unit** is the unit of time that you would like to use. 
If the **unit** field is left blank, ProModel will use the default time unit specified in the General Information window.

<br>

##### Example
<br>

Let’s say you have a model that produces two types of Entities: **TypeA** and **TypeB**. 
You create an Attribute called **aType** to keep track of what Entities are which type. 
If the value of **aType** is **0**, the Entity is **TypeA**. 
If the value of **aType** is **1**, the Entity is **TypeB**. 
In your model, there is an **Inspection** Location, and you want the inspection for **TypeA** Entities to take **5** minutes and the inspection for **TypeB** Entities to take **10** minutes. 
To achieve this result, you would first set the **Time** setting for the **Inspection** Location to **5 min** in the Simulation Properties menu.

You would then define the statements 

~~~
{
	If aType = 1 
	Then Wait 5 min
} 
~~~

in the Logic of the **Inspection** Location. 
If an Entity that has the **aType** Attribute with a value of **0** enters the **Inspection** Location, it will wait there only for the **5** minutes specified in the Simulation Properties of the **Inspection** Location. 
If an Entity that has the **aType** Attribute with a value of **1** enters the **Inspection** Location, it will wait an additional **5** minutes on top of the **5** minutes specified in the Simulation Properties of the **Inspection** Location for a total of **10** minutes. 

For more information on the statements used in this example, see the [If … Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) section of this guide. 
Additionally, see the [Flows](/pmacad/help/topic?page=Help/Docs/Modeling/SimulationProperties/SP_Flows/SP_Flows.md) section of the Simulation Properties guide for more information on how to edit the Properties of your model’s Locations and Routes in a Flow.   

<br>

## **_Wait Until_**
<br>

The **Wait Until** statement allows you to instruct an Entity to wait at a particular Location until a specified Boolean expression becomes true. 
Note that multiple Entities waiting on the same condition are released one at a time. 
The **Wait Until** statement may be used in the Logic of Routes, but the Entity will wait in the source Location of the Route rather than in the Route itself.

Time spent in a **Wait Until** statement is considered “Operation Time” in the simulation statistics for Entities and Locations. 
For more information on how to interpret simulation statistics, see the [Simulation Results](/pmacad/help/topic?page=Help/Docs/SimulationResults/Simulation_Results.md) section of the documentation.

To use the **Wait Until** statement, use the syntax 

~~~
Wait Until <Boolean expression> 
~~~

where **Boolean expression** is the condition you would like to evaluate. 
You may also use the **And** and **Or** statements to include multiple **Boolean expressions** in the same **Wait Until** statement.

~~~
Wait Until <Boolean expression 1> And <Boolean expression 2> 

Wait Until <Boolean expression 1> Or <Boolean expression2> 
~~~

<br>

##### Examples
<br>

Let’s say you have a model where you create bicycles, and you create the handlebars and base of the bicycles separately. 
You create two different Entities, **Handlebars** and **BikeBase**, to represent this relationship. 
These two Entities are on their own separate Flow paths with different Locations until they are joined together at the end of the model to create a **Bicycle** Entity. 
Since the **Handlebars** Entities are processed faster than the **BikeBase** Entities, you want the **Handlebars** Entities to wait at the beginning of the model until at least **100 BikeBase** Entities have been finished. 
To achieve this result, you would start by defining a Variable to represent the total **BikeBase** Entities that have been completed, **vBikeBaseCompleted**. 
You would then define the statement  

~~~
Inc vBikeBaseCompleted 
~~~

in the Logic of the final Location of the Flow that the **BikeBase** Entities follow to keep track of how many **BikeBase** Entities had been completed. 
You would then define the statement 

~~~
Wait Until vBikeBaseCompleted > 100 
~~~

in the Logic of the first Location in the Flow that the **Handlebars** Entities follow to ensure that they would not begin processing until at least **100 BikeBase** Entities had been created. 
Once the value of **vBikeBaseCompleted** was over **100**, the **Wait Until** statement would no longer execute since the Boolean expression had become true, and the **Handlebars** Entities would be allowed to move to their next Location. 

Now let’s say that the **BikeBase** Entities did not include the wheels of the bike, and so the **Wheel** Entities would have to be created separately and also joined to the **BikeBase** Entities. 
You want the **Handlebars** Entities to wait until both **100 BikeBase** Entities and **200 Wheel** Entities have been completed before they begin processing. 
You would first need to increment a Variable, **vWheelCompleted**, to keep track of how many **Wheel** Entities have been completed.
The following statement should appear in the Logic of the final Location of the Flow that the **Wheel** Entities follow.

~~~
Inc vWheelCompleted
~~~

You would then define the statement 

~~~
Wait Until vBikeBaseCompleted > 100 And vWheelCompleted > 200 
~~~

in the Logic of the first Location in the Flow that the **Handlebars** Entities follow to ensure that they would not begin processing until both **100 BikeBase** Entities and **200 Wheel** Entities had been created.  

If instead you wanted the **Handlebars** Entities to wait until either **100 BikeBase** Entities or **200 Wheel** Entities had been created, you would define the statement 

~~~
Wait Until vBikeBaseCompleted > 100 Or vWheelCompleted > 200 
~~~

in the Logic of the first Location in the Flow that the **Handlebars** Entities follow. The **Handlebars** Entities will then be able to move to their next Location once either of the two conditions are met. 

For more information on the statements used in this example, see the [Inc](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#inc) section of this guide. 

<br>

## **_Match_**
<br>

The **Match** statement allows you to instruct two Entities to wait at their respective Locations until the value of a specified Attribute is the same for both of the Entities with the **Match** statement. 
Note that two Entities must have a **Match** statement with the same specified Attribute for the statement to work correctly. 
The two **Match** statements may either be defined in the same Location on each of the two Entity’s Flows, or at completely unrelated Locations.

To use the **Match** statement, use the syntax

~~~
Match <Attribute name> 
~~~

where **Attribute name** is the name of the Attribute that must have a matching value for both Entities in a **Match** statement before they will be allowed to continue. 

<br>

##### Example
<br>

Let’s say you have a model where both **Boulder** Entities and **Geode** Entities are broken up in a machine into **Rock** Entities. 
The **Rocks** that came from **Geodes** have crystals in them, but the **Rocks** that came from **Boulders** do not. 
To keep track of which **Rock** Entities have crystals in them, you define the Attribute **aCrystals**. 
If the value of **aCrystals** for a **Rock** Entity is **0**, then the **Rock** Entity came from a **Boulder** Entity and does not have crystals in it. 
If the value of **aCrystals** for a **Rock** Entity is **1**, then the **Rock** Entity came from a **Geode** Entity and it has crystals in it. 
Once **Rock** Entities of either type are created, they travel to a polishing machine and then to a storage container. 

You also have a shop in your model where you sell the **Rock** Entities. 
Customers place orders online for either **Rocks** with crystals in them or **Rocks** without crystals, and then come to pick up their order later. 
Each item they request is processed as an **Order** Entity. 
The same Attribute, **aCrystals**, is used to keep track of which type of **Rock** the customer is ordering. 
If the value of **aCrystals** for an **Order** Entity is **0**, then the order is for a **Rock** without crystals. 
If the value of **aCrystals** for an **Order** Entity is **1**, then the order is for a **Rock** with crystals. 

Let’s also say that you don’t want to bring any **Rock** Entities of either type into your **Store** Location until an order has been placed for them. 
To ensure that the **Rock** Entities wait at the **Storage** Location until an **Order** Entity for their type in particular comes into the **Store** Location, you would define the statement 

~~~
Match aCrystals 
~~~

at both the **Storage** Location (in the Flow that the **Rock** Entities follow) and the **Store** Location (in the Flow that the **Order** Entities follow). 
Many **Rocks** of each type would gather at the **Storage** Location waiting for a matching **Order**. 
Once an **Order** Entity came in with an order for a **Rock** with no crystals, which means it would have an aCrystals value of **0**, a **Rock** Entity with an **aCrystals** value of **0**, meaning that is has no crystals, would be able to move from the **Storage** Location to the **Store** Location. 
The **Order** Entity would also be able to move on to its next Location, allowing another **Order** Entity to enter the **Store** Location.

<br>

## **_Use_**
<br>

The **Use** statement allows you to capture a Resource or a combination of Resources and hold them at a particular Location for a specified amount of time. 
Use the **Use** statement to simulate a Resource using a particular Location. 
Note that the **Use** statement may be defined in the Logic of Routes, but the chosen Resources will be used in the Route’s source Location, rather than in the Route itself. 

To use the **Use** statement, use the syntax

~~~
Use <quantity> <Resource name> <,priority> For <time> <unit> 
~~~

where **quantity** is the number of units of the Resource you wish to capture. 
If the **quantity** field is left blank, ProModel will assume that the quantity is **1**. 
Note that if the Entity at the Location or Route where the **Use** statement is defined already owns Resources of the type requested from a **Get** or **Jointly Get** statement, the Entity will still look for an additional amount of Resources equal to the quantity requested, which can cause problems if the number of units of that Resource is not high enough to satisfy the request. 
The **priority** field is an optional part of the statement that defines how high of a priority the Entity where the **Use** statement was defined is in regards to how quickly it receives its requested Resources. 
It should be a number between **1** and **999**, and the Entities with a higher number in the **priority** field will receive their Resources before Entities with a lower number. 
If the **priority** field is left blank for all Entities, they will receive their Resources on a first come, first served basis. 
Note that if the **priority** field is left blank, then no comma should be used in between the **Resource name** and the **For** statement.

~~~
Use <quantity> <Resource name> For <time> <unit>
~~~

The **time** field represents the amount of time you would like the requested Resources to be used for and **unit** is the unit of time you would like to use. 
If the **unit** field is left blank, ProModel will use the default time unit specified in the General Information window.  

You may also use the statements **And** and **Or** to specify multiple Resources in the same **Use** statement. 
You may use braces to improve the clarity of your code. 

~~~
{
	Use <quantity> <Resource name 1> For <time> <unit>
	And 
	<quantity> <Resource name 2> For <time> <unit> 
}

{
	Use <quantity> <Resource name 1> For <time> <unit> 
	Or 
	<quantity> <Resource name 2> For <time> <unit> 
}
~~~

<br>

##### Examples
<br>

Let’s say you have a model where a **Project** Entity must be inspected at an **Inspection** Location for **10 minutes**. 
To complete the inspection, the **Inspection** Location must use an **Inspector** Resource whenever a **Project** Entity enters the **Inspection** Location. 
To simulate this scenario, you would define the statement 

~~~
Use Inspector For 10 min
~~~

in the Logic of the **Inspection** Location. 
Once an **Inspector** Resource became available, it would travel to the **Inspection** Location (this will be visible in the simulation if the Resource has a Path Network defined for it) and stay there for **10 minutes** before it will be able to leave again. 

If instead each inspection required **2 Inspector** Resources and **3 Supervisor** Resources, you would define the statement 

~~~
Use 2 Inspector For 10 min And 3 Supervisor For 10 min
~~~

in the Logic of the **Inspection** Location. 

If instead either **2 Inspector** Resources or **3 Supervisor** Resources are able to complete the inspection, you would define the statement  

~~~
Use 2 Inspector For 10 min Or 3 Supervisor Resources 
~~~

in the Logic of the **Inspection** Location. 
Whichever condition could be satisfied first would be used. 

Now let’s say that you have two **Inspection** Locations: **InspectionTable1** and **InspectionTable2**. 
You want the inspections at **InspectionTable1** to always receive attention before the inspections at **InspectionTable2**. 
To achieve this result, you would define the statement 

~~~
Use Inspector, 2 For 10 min 
~~~

in the Logic of **InspectionTable1**, and the statement 

~~~
Use Inspector, 1 For 10 min 
~~~

in the Logic of **InspectionTable2**. 
The values in the priority field would ensure that in the case where both **InspectionTable1** and **InspectionTable2** were requesting an **Inspector** Resource, an available **Inspector** Resource would go to **InspectorTable1**.

 

<br>

</span>