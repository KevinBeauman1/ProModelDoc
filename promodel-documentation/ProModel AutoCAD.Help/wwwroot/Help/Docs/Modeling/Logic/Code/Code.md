<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > [Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md) > Code

</span>
</span></span>

# **Code**
***
<span style="font-size:15px">
<br>

ProModel provides statements that allow you to more precisely build and organize your code within the Logic sections of your model. 

<br>

## **_#region_**
<br>

The **#region** statement begins a collapsible block of code that can be minimized for organization of the Logic.

To use the **#region** statement, use the syntax

~~~
#region
~~~

at the beginning of the code block that you wish to make collapsible. 
When you use the the **#region** statement, the statement 

~~~
#endregion
~~~

will also automatically be created. 
The **#endregion** statement should be placed at the end of the code block that you wish to make collapsible. 
Once both statements are included, you will see a box to the left of the **#region** statement. 
Click on this box to collapse all of the code between the **#region** and **#endregion** statements.

</span>