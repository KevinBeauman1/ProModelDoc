<span style="color:grey">
<span style="font-size:14px">

You are here: [Introduction](/pmacad/help/topic?page=Help/Docs/PMADHelpHome.md) > [Modeling](/pmacad/help/topic?page=Help/Docs/Modeling/Modeling.md)/[Getting Started](/pmacad/help/topic?page=Help/Docs/GettingStarted/GettingStarted.md) > Time Intervals 

</span>
</span></span>

# **Distribution Intervals**
***
<span style="font-size:15px">
<br>

In addition to specifying exact values for certain fields in your model (such as process and move times, quantities in arrivals, and other settings) you may also use distribution intervals. 
Distribution intervals allow you to add variance to your models, which can help them be more realistic in cases where amounts or times are unlikely to be exact and constant.

There are many types of distribution intervals available for use in ProModel AutoCAD® Edition. 
The following section will explain the three most common types of distribution intervals: **Exponential**, **Uniform** and **Triangular**. 
See the bottom of this section for a complete table of all of the distribution intervals available to you. 

<br>

##### _Exponential_
<br>

The **Exponential** distribution is a continuous distribution bounded on the lower side. 
Its shape is always the same, starting at a finite value at the minimum and continuously decreasing at larger x. 
It is frequently used to represent the time between random occurrences, such as the time between arrivals at a specific Location or the time between failures in reliability models. 
It’s also used to represent the service times of a specific operation.

To use an **Exponential** distribution interval, use the syntax **E(mean)**, where **mean** is the average amount for your interval. 
For example, **E(10) minutes** in the frequency of an Arrival would indicate that a new Entity would arrive about every 10 minutes, since 10 is the mean, but Entities could arrive in less or more time. 

<br>

##### _Uniform_
<br>

The **Uniform** distribution is sometimes called the rectangular distribution. 
It is a continuous distribution bounded on both sides. 
Note that the end points do NOT occur, the probability of either the min or max value occurring is zero.

To use a **Uniform** distribution interval, use the syntax **U(mean, half range)**, where **mean** is the average amount for your interval and **half range** is the amount less or more than the **mean** that can occur. 
For example, **U(9,1) minutes** in the frequency of an Arrival would indicate that a new Entity could arrive after anywhere between 8.1 and 9.9 minutes. 

<br>

##### _Triangular_
<br>

The **Triangular** distribution is a continuous distribution bounded on both sides. 
It is often used when not a lot of data is available. 
The **Triangular** distribution may be used when the minimum value, the most likely value, and the maximum value for a numeric element can be estimated. 
It is rarely the most accurate distribution, but is usually a good estimation. 

To use a **Triangular** distribution interval, use the syntax **T(minimum, mode, maximum)**, where **minimum** is the smallest amount in the interval, **mode** is the amount that occurs most often (note that this is not the same as the **mean**), and **maximum** is the largest amount in the interval. 
For example, **T(1,8.6,11)** minutes in the frequency of an Arrival would indicate that a new Entity could arrive after anywhere between 1 and 11 minutes, and that they will arrive after 8.6 minutes the most often. 

<br>

##### _Full Table of Distribution Intervals_
<br>

<span style="font-size:14px">

| Distribution | Syntax | Individual Components
| :-- | :-- | :-- |
| Beta | B(a,b,c,d) | a=shape value 1, b=shape value 2, c=lower boundary, d=upper boundary |
| Binomial | BI(a,b) | a=batch size, b=probability of “success” |
| Erlang | ER(a,b) | a=mean, b=integer shape parameter |
| Exponential | E(a) | a=mean |
| Gamma | G(a,b) | a=shape value, b=scale value |
| Geometric | GEO(a) | a=probability of “success” |
| Inverse Gaussian | IG(a,b) | a=shape value, b=scale value |
| Lognormal | L(a,b) | a=mean, b=standard deviation |
| Normal | N(a,b) | a=mean, b=standard deviation |
| Pearson5 | P5(a,b) | a=shape value, b=scale value |
| Pearson6 | P6(a,b,c) | a=shape value 1, b=shape value 2, c=scale value |
| Poisson | P(a) | a=quantity | 
| Triangular | T(a,b,c) | a=minimum, b=mode, c=maximum |
| Uniform | U(a,b) | a=mean, b=half range |
| Weibull | W(a,b) | a=shape value, b=scale value |

</span>

---

**Next**: [Learn how to use Logic](/pmacad/help/topic?page=Help/Docs/Modeling/Logic/Logic.md)   

</span>