<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Conditional Statements

</span>
</span></span>

# **Conditional Statements**
***
<span style="font-size:15px">
<br>

ProModel allows you to use a variety of statements that add conditions to your Logic. 
Use these statements if you want an action to occur only in specific circumstances. 

<br>

## **_If ... Then Statements_**
<br>

**If** and **Then** are statements that are used together and allow you to execute a particular action only if a specified Boolean expression is true. 

To use an **If … Then** statement, use the syntax 

~~~
If <Boolean expression> Then <statement> 
~~~

where **Boolean expression** is the true or false condition that you would like to to evaluate, and **statement** is the action that is executed if the Boolean expression is found to be true. 

You may also use the statements **And** and **Or** to include multiple Boolean expressions.

~~~
If <Boolean expression 1> And <Boolean expression 2> Then <statement> 

If <Boolean expression 1> Or <Boolean expression 2> Then <statement> 
~~~

If you would like to include multiple statements, you may use braces to improve the clarity of your code. 

~~~
{
If <Boolean expression> Then 
<statement 1>
<statement 2> 
<statement 3> 
}
~~~
 
<br>

##### Example
<br>

Let’s say you have defined an Attribute for your **Project** Entity that indicates whether a particular **Project** Entity is long or short: if **aProjectLength** = **0**, the **Project** is short, and if **aProjectLength** = **1**, the **Project** is long. 
You also have a Location where **Projects** are inspected, **InspectionTable**, and its **Time** in the Flow is set to **5 min**. 
However, you think it would be more realistic if long **Projects** took more time at **InspectionTable**, so you define the statement

~~~
If aProjectLength = 1 Then Wait 10 min
~~~

in the Logic for **InspectionTable**. 
Now, the statement will evaluate the value for **aProjectLength** for each Entity that enters **InspectionTable**. 
If the Attribute **aProjectLength** = **1** for a particular Entity, the Entity will wait at the **InspectionTable** for an additional **10 min** on top of the **5 min** defined in the Flow settings, for a total of **15 min**. 
If the Attribute **aProjectLength** = **0** for a particular Entity, the statement will not be executed and the Entity will default to waiting **5 min**, since that is the time defined in the Flow settings. 

For more information on the statement used in this example, see the [Wait](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Waiting/Waiting.md#wait) section of this guide.

<br>

## **_Else_**
<br>

The **Else** statement allows you to add an additional action to an **If … Then** statement which will execute if the Boolean expression is false. 
For more information about how to use **If … Then** statements, see the [If … Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) section of this guide.

To add an **Else** statement to an **If … Then** statement, use the syntax 

~~~
If <Boolean expression> Then <statement 1> Else <statement 2> 
~~~

where **Boolean expression** is the true or false condition that you would like to evaluate, **statement 1** is the action that is executed if the Boolean expression is found to be true, and **statement 2** is the action that is executed if the Boolean expression is found to be false. 

You may also use braces to improve the clarity of your Logic or to add additional statements. 

~~~
{
If <Boolean expression> 
Then
<statement 1> 
<statement 2> 
Else 
<statement 3> 
<statement 4> 
} 
~~~

<br>

##### Example
<br>

Let’s say you have defined a Variable in your model to represent how many Entities have been completely processed by the system, **vCompleted**. 
You want to display a message every time an Entity is completed, and once **100** Entities have been completed, you want the simulation to stop. 
To achieve this outcome, you would define the statements

~~~
Inc vCompleted
{
	If vCompleted = 100 Then Stop 
	Else Display vCompleted “ Entities have been completed” 
}
~~~

in the final Location of your model. 
Every time an Entity entered the final Location, the value for **vCompleted** would be incremented by **1**. 
The value for **vCompleted** would then be evaluated by the **If … Then … Else** statement. 
If **vCompleted** = **100**, the simulation will stop. 
If **vCompleted** is any value other than **100**, a message will be displayed that shows the current value of **vCompleted**, along with the text “Entities have been completed”. 

For more information on the statements used in this example, see the [Inc](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#inc), [Stop](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/SimulationInterruption/Simulation_Interruption.md#stop) and [Display](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/SimulationInterruption/Simulation_Interruption.md#display) sections of this guide.

<br>

## **_While_**
<br>

The **While** statement allows you to repeatedly execute an action while a specified Boolean condition remains true. 

To use the **While** statement, use the syntax 

~~~
While <Boolean expression> Do <statement> 
~~~

where **Boolean expression** is the true or false condition that you would like that statement to evaluate and **statement** is the action that is repeatedly executed while the Boolean expression remains true. 
The **Boolean expression** will be evaluated for each iteration of the **statement**.

You may also use braces to improve the clarity of your Logic or to add additional statements. 

~~~
{
	While <Boolean expression> Do
	<statement 1> 
	<statement 2> 
	<statement 3> 
}
~~~

<br>

##### Example
<br>

Let's say you have a model where the second half of your Flow moves a lot faster than your first half. 
For this reason, you want to let **100** Entities pile up in the last Location of the first part of your Flow (a **Storage** Location) before allowing them to the second part, since you will save money by not running the second half of your model during that time. 
You then want the Entities to pass through the **Storage** Location freely, since the second half of your model will then be fast enough to process the **100** Entities and all the new Entities that come after without falling behind. 
To achieve this result, you would first need to define a Variable to represent how many Entities are in your **Storage** Location, **vStorage**. 
You would then define the statements 

~~~
Inc vStorage 
While vStorage < 100 Do Wait 10 min
~~~

in the Logic of your **Storage** Location. 
Every time an Entity enters the **Storage** Location, the **Inc** statement will increase the value of **vStorage**. 
While **vStorage** is less than **100**, the **While** loop will continue to execute, keeping the Entities in the **Storage** Location due to the **Wait** statement. 
Once the value of **vStorage** is **100** or greater, the **While** loop will no longer execute and the Entities will pass through the **Storage** Location directly after being processed. 

For more information on the statements used in this example, see the [Inc](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#inc) section of this guide. 

<br>

## **_Until_**
<br>

The **Until** statement allows you to repeatedly execute an action until a specified Boolean expression becomes true. 

To use the **Until** statement, use the syntax 

~~~
Do <statement> Until <Boolean expression> 
~~~

where **statement** is the action that is repeatedly executed until the Boolean expression becomes true and **Boolean expression** is the true or false condition that you would like to evaluate. 

You may also use braces to improve the clarity of your Logic or to use additional statements. 

~~~
{
	Do 
	<statement 1> 
	<statement 2> 
	<statement 3> 
	Until 
	<Boolean expression> 
}
~~~

<br>

##### Example
<br>

Let's say you have a model where the second half of your Flow moves a lot faster than your first half. 
For this reason, you want to let **100** Entities pile up in the last Location of the first part of your Flow (a **Storage** Location) before allowing them to the second part, since you will save money by not running the second half of your model during that time. 
You then want the Entities to pass through the **Storage** Location freely, since the second half of your model will then be fast enough to process the **100** Entities and all the new Entities that come after without falling behind. 
To achieve this result, you would first need to define a Variable to represent how many Entities are in your **Storage** Location, **vStorage**. 
You would then define the statements 

~~~
Inc vStorage 
Until vStorage > 100 Do Wait 10 min
~~~

in the Logic of your **Storage** Location. 
Every time an Entity enters the **Storage** Location, the **Inc** statement will increase the value of **vStorage**. 
Until **vStorage** is greater than **100**, the **Until** loop will continue to execute, keeping the Entities in the **Storage** Location due to the **Wait** statement. 
Once the value of **vStorage** is **100** or greater, the **Until** loop will no longer execute and the Entities will pass through the **Storage** Location directly after being processed. 

For more information on the statements used in this example, see the [Inc](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/IncrementingAndDecrementing/Incrementing_and_Decrementing.md#inc) section of this guide. 

<br>

## **_Break_**
<br>

The **Break** statement allows you to break out of a **While** loop or an **Until** loop when a specified condition is met. 
Use the **Break** statement when you want to define additional Boolean expressions that will end a **While** loop or **Until** loop on top of the Boolean expression included in the initial **While** or **Until** Logic. 
For more information on the **While** statement or the **Until** statement, see the [While](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#while) and [Until](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#until) sections of this guide. 

To use the **Break** statement, include it within a **While** loop or an **Until** loop. 
The **Break** statement is usually also inside an **If … Then** statement. 

~~~
{
While <Boolean expression 1> Do 
<statement>

If <Boolean expression 2> Then Break
}
~~~

For more information about how If ... Then statements function, see the [If ... Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) section of this guide.

Once a **Break** statement is executed, the Logic will move on to the next statement defined after the **While** or **Until** loop. 
If a **Break** is encountered outside any loop, then ProModel exits the entire Logic. 

<br>

##### Example
<br>

Let’s say the statements

~~~
{
While Var1 > 5 Do 
Wait 10 min 

If Attr1 = 10 Then Break
}

Display “Loop has ended”
~~~

are defined in the Logic of a Location. 
Because of the way the **While** statement is defined, the statement within the **While** loop, **Wait 10 min**, will continue to execute as long as the value for **Var1** is greater than **5**. 
Once the value for **Var1** is less than **5**, the **While** loop will end. 
Additionally, because of the **Break** statement, the **While** loop will also end if the value of **Attr1** is equal to **10**. 
Once the **While** loop ends for either reason, the Logic will move on to the next statement after the loop, and so the message “Loop has ended” will be displayed. 

For more information on the statements used in this example, see the [Wait](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Waiting/Waiting.md#wait), [Display](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/SimulationInterruption/Simulation_Interruption.md#display) and [If ... Then Statements](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/ConditionalStatements/Conditional_Statements.md#if--then-statements) sections of this guide.

</span>
