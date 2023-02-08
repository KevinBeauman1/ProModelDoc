<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Grouping

</span>
</span></span>

# **Grouping**
***
<span style="font-size:15px">
<br>

ProModel provides a variety of statements that allow you to group, obtain and interact with the components of your model. 
These statements allow you to control more precisely how Entities and Resources behave in your simulation. 

<br>

## **_Accum_**
<br>

The **Accum** statement allows you to accumulate, without consolidating, a specified amount of Entities at a Location. 
The **Accum** statement works like a gate that will not allow Entities to pass and be processed until a certain amount of them are gathered at the gate. 
Once the specified quantity of Entities have been accumulated at the gate, the gate will open and Entities will be allowed to pass. 
Note that the **Accum** statement cannot be used in the Logic for Routes. 

To use the **Accum** statement, use the syntax

~~~
Accum <number> 
~~~

where **number** is the number of Entities that you wish to accumulate. 
Only positive numbers are accepted in this field. 
If **number** is **0** or **1**, the **Accum** statement will be ignored. 
If **number** is greater than the capacity of the Location where the statement is defined, the simulation will stop with an error. 

<br>

##### Example
<br>

If you define the statement 

~~~
Accum 10 
~~~

at a packaging Location in a factory model, the Entities at the Location will not begin packaging until a total of **10** Entities are in the packaging Location. 
Once **10** Entities have arrived at the packaging Location, the Entities will begin being packaged and can move on through the system. 

<br>

## **_Join_**
<br>

The **Join** statement allows you to identify a base Entity and join a specified quantity of a designated Entity type to the base Entity to create a new Entity. 
The Entity at the Location where the **Join** statement is executed becomes the base Entity, and the joining Entities must be routed to this Location using the **If Join** Routing Rule. 
For more information about the **If Join** Routing Rule, see the [Routing Rules](/pmacad/help/topic?page=Help/Docs/Modeling/Routing_Rules.md) section of the documentation. 

When the **Join** statement is executed, the base Entity will wait at its current Location until the specified number of joining Entities have reached its Location. 
The joining Entities will then be joined with the base Entity to create a new Entity. 
The new Entity will retain the Attributes of the base Entity, and so the Attributes of the joining Entities will be lost. 
Any Resources owned by the joining Entities will be transferred to the new Entity. 

To use the **Join** statement, use the syntax

~~~
Join <number> <Entity name>, <priority> 
~~~

where **number** is the amount of joining Entities you wish to add to the base Entity and **Entity name** is the name of the Entities you wish to join with the base Entity. 
The **priority** field is an optional part of the statement that defines how high of a priority the base Entity is in regards to how quickly it receives its joining Entities. 
It should be a number between **1** and **999**, and base Entities with a higher number in the priority field will receive their joining Entities before base Entities with a lower number. 
If the **priority** field is left blank for all base Entities, they will receive their joining Entities on a first come, first served basis. 

<br>

##### Examples
<br>

Let’s say you have a car factory model where the base of the car and the car doors are manufactured separately before being joined together at the end of the process. 
Because the parts are created separately, you would need two separate Entities on two different Flow branches: the Entity **CarBase** and the Entity **CarDoor**. 
Once the **CarBase** Entity was finished and reached an assembly Location, you would need to define the statement 

~~~
Join 4 CarDoor
~~~

in the assembly Location to indicate that the base of the car needed four car doors attached to it. 
You would then need to make sure that the **CarDoor** Entities were routed to the assembly Location using the **If Join** Routing Rule. 
The **CarBase** Entity would then wait at the assembly Location until four **CarDoor** Entities had been completed and traveled to the assembly Location. 
The **CarDoor** Entities would then join onto the **CarBase** Entity, and the completed car could then travel to the end of the system. 

Additionally, let's say you upgrade to a bigger factory where you create both two-door and four-door models of the same car. 
The four-door models are more popular, so you want to make sure that they are completed first, but you still only have one part of your factory creating doors. 
To make sure that the four-door models have the higher priority, you could define the statement 

~~~
Join 2 CarDoor, 1 
~~~

at the two-door assembly Location, and the statement 

~~~
Join 4 CarDoor, 2
~~~

at the four-door assembly Location. 
These statements would ensure that a **CarDoor** Entity will always try to go to the four-door assembly Location first if it is able to, and will only travel to the two-door assembly Location if there is no **CarBase** waiting for doors at the four-door assembly Location. 

<br>

## **_Get_**
<br>

The **Get** statement allows you to capture a specified number of Resources as they become available and attach them to an Entity. 
The Resources will then be considered “owned” by the Entity. 
Use the **Get** statement to simulate a Resource helping to process an Entity. 

To use the **Get** statement, use the syntax 

~~~
Get <quantity> <Resource name>, <priority> 
~~~

where **quantity** is the number of units of the Resource you wish to capture. 
If the **quantity** field is left blank, ProModel will assume that the quantity is **1**. 
Note that if the Entity at the Location or Route where the **Get** statement is defined already owns Resources of the type requested, the Entity will still look for an additional amount of Resources equal to the quantity requested, which can cause problems if the number of units of that Resource is not high enough to satisfy the request. 
The **priority** field is an optional part of the statement that defines how high of a priority the Entity where the **Get** statement was defined is in regards to how quickly it receives its requested Resources. 
It should be a number between **1** and **999**, and the Entities with a higher number in the **priority** field will receive their Resources before Entities with a lower number. 
If the **priority** field is left blank for all Entities, they will receive their Resources on a first come, first served basis.

You may also use the statements **And** and **Or** together with the **Get** statement to reference multiple Resources.

~~~
Get <Resource name 1> And <Resource name 2> 

Get <Resource name 1> Or <Resource name 2> 
~~~

Note that if an Entity still owns a Resource when it leaves the system, the simulation will stop with an error. 
For more information on how to free an owned Resource using the **Free** statement, see the [Free](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Grouping/Grouping.md#free) section of this guide.

<br>

##### Examples
<br>

If the statement 

~~~
Get Inspector
~~~
 
is defined in an inspection Location, each Entity that arrives at the Location will request **1 Inspector** Resource. 
Once an **Inspector** Resource is available, it will travel to the Location (this will be visible in the simulation if a Path Network is defined for it) and become “owned” by the Entity. 
It will then travel with the Entity until it is freed. 

Now, let’s say there are two inspection Locations rather than one, and each Entity needs two **Inspector** Resources before it can move on, but you only have a total of three units of the **Inspector** Resource. 
You could then define the statement 

~~~
Get 2 Inspector, 2 
~~~

at the most important inspection Location, and 

~~~
Get 2 Inspector, 1 
~~~

at the least important inspection Location. 
These statements will ensure that an Entity will request **2 Inspectors** when they reach either of the two inspection Locations, and that the first Location has a higher priority and so the **Inspectors** will always go to it first if both Locations are requesting **Inspectors**. 

If the Entities needed both an **Inspector** Resource and a **Supervisor** Resource before being processed, you would use the statement 

~~~
Get Inspector And Supervisor 
~~~

If the Entities could use either an **Inspector** Resource or a **Supervisor** Resource to be able to process, you would use the statement

~~~
Get Inspector Or Supervisor 
~~~ 

Whichever Resource was available first would be used. 

<br>

## **_Free_**
<br>

The **Free** statement frees Resources which are owned by the Entity in the Location or Route where the Free statement is defined. 
Entities must have received Resources through a **Get** or **Jointly Get** statement in order for the Resources to be freed. 
For more information on the **Get** statement and the **Jointly Get** statement, see the [Get](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Grouping/Grouping.md#get) and [Jointly Get](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Grouping/Grouping.md#jointly-get) sections of this guide.

To use the **Free** statement, use the syntax 

~~~
Free <quantity> <Resource name> 
~~~

where **quantity** is the number of units of the Resource that you wish to free. 
If the quantity field is left blank, ProModel will assume that the quantity is **1**. 
You may use commas to free multiple Resources in the same **Free** statement.

~~~
Free <quantity> <Resource name 1>, <quantity> <Resource name 2>, <quantity> <Resource name 3> 
~~~

You may also use the statement **All** to free all of the Resources that an Entity owns. 

~~~
Free All
~~~

<br>

##### Examples
<br>

If an Entity owns an **Inspector** Resource and enters a Location where the statement 

~~~
Free Inspector 
~~~

is defined, the **Inspector** Resource will be freed and the Entity will no longer own any Resources. 

If instead the Entity owns **5 Inspector** Resources and **5 Supervisor** Resources, and encounters the statement 

~~~
Free 2 Inspector, 3 Supervisor 
~~~

**2 Inspectors** and **3 Supervisors** will be freed, and the Entity will own **3 Inspectors** and **2 Supervisors**. 
If this Entity then entered a Location with the statement 

~~~
Free All 
~~~

defined in its Logic, the **3** remaining **Inspectors** and **2** remaining **Supervisors** would be freed, and the Entity would no longer own any Resources. 

<br>

## **_Jointly Get_**
<br>

The **Jointly Get** statement allows you to capture a specified number of Resources as they become available, as a group, and attach them to an Entity. 
The Resources will not be captured unless all of the requested Resources are available, when they will then be captured as a group. 
The Resources will then be considered “owned” by the Entity. 

To use the **Jointly Get** statement, use the syntax 

~~~
Jointly Get <quantity> <Resource name>, <priority> 
~~~

where **quantity** is the number of units of the Resource you wish to capture. 
If the **quantity** field is left blank, ProModel will assume that the quantity is **1**. 
Note that if the Entity at the Location or Route where the **Jointly Get** statement is defined already owns Resources of the type requested, the Entity will still look for an additional amount of Resources equal to the quantity requested, which can cause problems if the number of units of that Resource is not high enough to satisfy the request. 
The **priority** field is an optional part of the statement that defines how high of a priority the Entity where the **Jointly Get** statement was defined is in regards to how quickly it receives its requested Resources. 
It should be a number between **1** and **999**, and the Entities with a higher number in the priority field will receive their Resources before Entities with a lower number. 
If the **priority** field is left blank for all Entities, they will receive their Resources on a first come, first served basis.

You may also use the statements **And** and **Or** together with the **Jointly Get** statement to reference multiple Resources.

~~~
Jointly Get <Resource name 1> And <Resource name 2> 

Jointly Get <Resource name 1> Or <Resource name 2> 
~~~

Note that if an Entity still owns a Resource when it leaves the system, the simulation will stop with an error. 
For more information on how to free an owned Resource using the **Free** statement, see the [Free](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Grouping/Grouping.md#free) section of this guide.

<br>

##### Examples
<br>

If the statement 

~~~
Jointly Get 3 Inspector 
~~~

is defined in the Logic of an inspection Location, the Entities that enter that Location will request **3 Inspector** Resources and will remain at that Location until their request is fulfilled. 
No **Inspectors** will be captured until a total of **3 Inspectors** are available at the same time. 
Once **3 Inspector** Resources are available, all three will be captured at once and travel to the inspection Location (this will be visible in the simulation if there is a Path Network defined for them). 
The Resources will then become “owned” by the Entity and move with the Entity until they are freed. 

Now, let’s say you have two inspection Locations, **InspecTable1** and **InspecTable2**, and you want **InspecTable1** to have the higher priority when it comes to gathering the **Inspector** Resource. 
You would need to define the statement  

~~~
Jointly Get 3 Inspector, 2
~~~

in the Logic of **InspecTable1**, and the statement 

~~~
Jointly Get 3 Inspector, 1
~~~

in the Logic of **InspecTable2**. 
The values in the priority field will ensure that **Inspector** Resources will always travel to **InspecTable1** in cases where both Locations are requesting **Inspector** Resources.

If the Entities at the inspection Locations needed both an **Inspector** and a **Supervisor** Resource to be processed, you would use the statement 

~~~
Jointly Get Inspector And Supervisor 
~~~

Neither Resource would be captured until both Resource types were available. 
If the Entities at the inspection Locations needed either **3 Inspector** Resources or **2 Supervisor** Resources to be processed, you would use the statement 

~~~
Jointly Get 3 Inspector Or 2 Supervisor 
~~~

No Resources would be captured until either **3 Inspectors** were available or **2 Supervisors** were available, and whichever condition was met first would be used. 
 
<br>

## **_Split_**
<br>

The **Split** statement allows you to split an Entity into a specified quantity of new Entities when it reaches a particular Location. 
Note that **Split** cannot be used in the Logic for Routes. 
Use the **Split** statement to simulate dividing raw materials into new components.

To use the **Split** statement, use the syntax  

~~~
Split <number> As <new Entity name> 
~~~

where **number** is the amount of new Entities that you want your old Entity to split into, and **new Entity name** is the name of the new Entity type that the old Entity will split into. 
Note that **new Entity name** must be the name of another Entity that you have defined in the **Entities** tab of the Simulation Browser. 
It must also be different from the old Entity; you cannot use the **Split** statement to split an Entity into more versions of itself. 
Note also that when you use the **Split** statement at a Location, the Location must provide a separate Flow for the new Entity type to follow. 

When the old Entity splits into the new Entity types, the total cost of the old Entity at that time in the simulation will be evenly divided among the new Entities. 
The new Entities will retain the Attributes of the old Entity. 
Note that the old Entity must release any of the Resources it owns using the **Free** statement before being split, since Resources cannot be passed on to new Entities through a **Split** statement. 
For more information about the **Free** statement, see the [Free](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Grouping/Grouping.md#free) section of this guide. 

<br>

##### Example
<br>

Let's say you have two Entity types defined in your Simulation Browser: **Log** and **WoodChip**, and you want to split the **Log** Entity into multiple **WoodChip** Entities when it reaches the **Woodchipper** Location. 
You would need to define the statement 

~~~
Split 100 As WoodChip
~~~

in the Logic of the **Woodchipper** Location. 
A Flow could then be created from the beginning of the system to the **Woodchipper** Location that the **Log** Entity could follow. 
Since the **Log** Entity will be completely used up at the **Woodchipper** Location, the **Log** Flow can end there. 
Another Flow for the **WoodChip** Entities could then be created to take them from the **Woodchipper** Location to the end of the system. 

Every time a **Log** Entity reaches the **Woodchipper** Location, it will be split into **100 WoodChip** Entities. 
If the total cost of the **Log** Entity is **100** when it reaches the **Woodchipper** Location, each **Woodchip** Entity would then have a cost of **1**. 

<br>

## **_Load and Unload_**
<br>

The **Load** statement allows you to identify a base Entity and “load” a specified quantity of other Entities onto it. 
The Entity at the Location where the **Load** statement is executed becomes the base Entity, and the loading Entities must be routed to this Location using the **If Load** Routing Rule. 
For more information about the **If Load** Routing Rule, see the [Routing Rules](/pmacad/help/topic?page=Help/Docs/Modeling/Routing_Rules.md) section of the documentation. 

When the **Load** statement is executed, the base Entity will wait at its current Location until the specified number of loading Entities have reached its Location. 
The loading Entities will then be loaded onto the base Entity. 
Temporarily loaded Entities will retain their identity and may be unloaded with an **Unload** statement, which will be explained further later in this section. 

You also have the option to permanently load Entities onto the base Entity using the optional **Perm** statement. 
Permanently loaded Entities will not retain their identity and cannot be unloaded later.

If a base Entity owns a Resource when the Entities are unloaded, the Resource stays with the base Entity. 
Any Resources owned by permanently loading Entities are transferred automatically to the base Entity. 
Any Resources owned by temporary loading Entities are kept and cannot be freed until the Entities are unloaded. 

To use the **Load** statement, use the syntax 

~~~
Load <number> Perm Iff <Boolean expression> IN <time>, <priority> 
~~~

where **number** is the amount of loading Entities you wish to load onto the base Entity. 
If the **number** field is left blank, ProModel will assume the **number** is **1**.

**Perm** is an optional part of the statement that may be added if you would like the loading Entities to be permanently loaded onto the base Entity rather than temporarily loaded.  

The **Iff** statement is also optional and allows you to add a condition to your **Load** statement without having to create a separate **If … Then** statement. 
If the **Iff** field is included, the **Load** statement will only execute if the condition of the **Boolean expression** is met. 
For more information on how conditional statements function, see the [If … Then](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) section of the documentation. 

The **IN** statement and **time** field are also optional. 
The inclusion of the **IN** statement allows you to specify how long the loading will take based on the value in the **time** field.

The **priority** field is an optional part of the statement that defines how high of a priority the base Entity is in regards to how quickly it receives its loading Entities. 
It should be a number between **1** and **999**, and base Entities with a higher number in the **priority** field will receive their loading Entities before Entities with a lower number. 
If the **priority** field is left blank for all base Entities, they will receive their loading Entities on a first come, first served basis. 

The **Unload** statement is used to unload the temporarily loaded Entities from your base Entity. 
Once Entities are unloaded, they will proceed ahead of the base Entity. 
Note that unloaded Entities must have a Flow path defined for them, or a Flow set to **All** that they can follow once they are unloaded. 

To use the **Unload** statement, use the syntax 

~~~
Unload <number> Iff <Boolean expression> 
~~~

where **number** is the amount of temporarily loaded Entities you wish to unload from the base Entity. 
If the **number** field is left blank, ProModel will assume the **number** is **1**.

The **Iff** statement is an optional part of the statement which allows you to add a condition to your **Unload** statement without having to create a separate **If … Then** statement. 
If the **Iff** field is included, the **Unload** statement will only execute if the condition of the **Boolean expression** is met. 

<br>

##### Examples
<br>

Let’s say you want to load a collection of **10 Package** Entities onto a **Truck** Entity to travel to another part of your model. 
You would first need to route the **Package** Entities from their Location to the **Parking** Location where the **Truck** Entity is waiting using the **If Load** Routing Rule. 
You would then define the statement 

~~~
Load 10 
~~~

in the Logic for the **Parking** Location. 
The **Package** Entities would then wait at their Location per the **If Load** Routing Rule until a **Truck** Entity arrived at the **Parking** Location, executing the **Load** statement. 
**10 Package** Entities would then travel to the **Parking** Location and load onto the **Truck** Entity. 

Now, let’s say that you want to unload all of the **Package** Entities from the **Truck** once they reach a **Warehouse** Location. 
You would then define the statement 

~~~
Unload 10 
~~~

in the Logic for the **Warehouse** Location. 

<br>

## **_Group and Ungroup_**
<br>

The **Group** statement allows you to accumulate and temporarily consolidate a specified quantity of Entities into a single Group shell Entity. 
The shell Entity retains the same Attributes as the first Entity that was grouped into the shell. 
However, you also have the option to use a **Group As** statement, which will create a new shell Entity that does not retain any Attribute values, even if the same name is used for the Group shell Entity as the Entities that have been grouped.
 
When using a **Group** statement, the individual Entities comprising the group retain their identities, Attributes, and Resources and are divided from the group when an **Ungroup** statement is encountered. 
The first Entity processed from the group takes any Resources the group owns. 
Entities in a group can be grouped into a larger group at another Location.
 
To use the **Group** statement, use the syntax 
 
~~~
Group <number> As <Entity name> 
~~~

where **number** is the amount of Entities you would like to include in your group. 
 
The **As** statement is an optional part of the **Group** statement and allows you to consider the Group shell Entity a new Entity, defined by the **Entity name** field. 
 
The **Ungroup** statement allows you to separate Entities that were grouped by a **Group** statement. 
 
To use the **Ungroup** statement, use the syntax 
 
~~~
Ungroup LIFO 
~~~

where **LIFO** is an optional part of the statement that stands for **Last In First Out**. 
Use **LIFO** if you would like to ungroup Entities in the opposite order that they were grouped in. 

<br>

##### Examples
<br>

Let’s say you have a model that produces and sells **Egg** Entities. 
Once the **Eggs** have been gathered, they move to a **Packaging** Location before being sold. 
At the **Packaging** Location, you want to group **12 Egg** Entities into a **Carton** Entity before they are sold. 
To achieve this result, you would define the statement 
 
~~~
Group 12 As Carton 
~~~

in the Logic of the **Packaging** Location. 
 
Now let’s say that once your **Carton** Entities reach your **Store** Location, you want to ungroup some of them so that the **Egg** Entities can be used as samples in your **Store**. 
To ungroup the **Carton** Entities back into individual **Egg** Entities, you would define the statement 
 
~~~
Ungroup 
~~~

in the Logic of the **Store** Location. 

</span>
