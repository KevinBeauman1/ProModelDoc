define({"77":{i:0.00395553873268662,u:"../Content/Assignment.htm",a:"Statement Syntax samples\n         \u003cvariable, array element, or attribute\u003e = \u003cnumeric expression\u003e Var1 = 52 Acuity_Attr = 1 Product_Array[3, 5] = SKU_attr Description Assigns the value of a numeric expression to a designated variable, array element, or attribute. Valid In Any Logic Example Var1 = 300 ...",t:"Assignment"},"78":{i:0.00590815711955707,u:"../Content/Break.htm",a:"Statement Syntax samples Break Description Exits the innermost While...Do, Do...While, or Do...Until loop. The next statement to be executed will be the one immediately following the end bracket associated with the innermost loop. If a Break is encountered outside any loop, then Process Simulator ...",t:"Break"},"79":{i:0.00590815711955707,u:"../Content/BreakBlk.htm",a:"Statement Syntax samples BreakBlk Description Exits from the innermost statement block. The next statement to be executed will be the one immediately following the end bracket of the innermost statement block. If a BreakBlk is executed outside any statement block, Process Simulator will exit the ...",t:"BreakBlk"},"80":{i:0.00159604519270276,u:"../Content/Comment.htm",a:"Documentation Symbols Syntax samples // /*...*/ Components // \tTwo forward slashes signal the start of a one-line comment. Process Simulator will ignore any characters on the rest of the line. /*...*/ A slash followed by an asterisk signals the start of a multi-line comment. Process Simulator will ...",t:"Comment"},"81":{i:0.006747024919417,u:"../Content/Debug.htm",a:"Statement Syntax samples Debug Description Brings up Process Simulator’s debugger. Use Debug to step through logic one statement at a time and examine variable and attribute values while developing a model. After a model is working, Debug statements are generally removed. Valid In Any logic. Example ...",t:"Debug"},"82":{i:0.00277579196269469,u:"../Content/Dec.htm",a:"Statement Syntax samples Dec \u003cname\u003e{, \u003cexpression\u003e} Dec Var1 Dec Attr1, 5 Description Decrements a variable, array element, or attribute by the value of a specified numeric expression. To decrement a variable, attribute, or array element when the current entity actually leaves a location, use Dec in ...",t:"Dec"},"83":{i:0.0249099878737649,u:"../Content/Display.htm",a:"Statement Syntax samples Display \u003cstring expression\u003e  Display “Now beginning 100th process” Display Number_in_Queue Display “Var1 =” $ Var1 $ “and Attr1 =” $ Attr1 Description Pauses the simulation and displays a message. The simulation will resume when the user selects OK. The concatenation ...",t:"Display"},"84":{i:0.00249777275054041,u:"../Content/Free.htm",a:"Statement Syntax samples Free {\u003cquantity\u003e} \u003cresource\u003e{, {quantity} \u003cresource\u003e...}  Free Res1, 2 Res2, 5 Res3A Free All Free Res(Attr1) Description Frees resources which are currently “owned” by the entity. These resources must have been captured through a Get or Jointly Get statement. Valid In ...",t:"Free"},"85":{i:0.0295074202089689,u:"../Content/Get.htm",a:"Statement Syntax samples Get {\u003cquantity\u003e} \u003cresource\u003e {,\u003cpriority\u003e} {And or Or {\u003cquantity\u003e} \u003cresource\u003e {,\u003cpriority\u003e}...} Get Res1 Get 3 Res1, 5 Get 2 Res1 OR 3 Res2 Get Res1, 3 And (Res2 Or Res3) Get Res(Skill_required) Description Captures a specified number of resources as they become available. If ...",t:"Get"},"86":{i:0.00410730100665615,u:"../Content/IfThenElse.htm",a:"Statement Syntax samples If \u003cBoolean expression\u003e Then \u003cstatement 1\u003e {Else \u003cstatement 2\u003e} If Var1 = 5 Then Wait 2 min If (Attr2 = 5) Or (Var5 \u003c\u003e 0) Then Wait 2 min Else Wait 3 min If Var1 \u003e Attr2 Then { Var1 = Attr2 \tWait Attr1 } Else { Inc Var1  Wait Attr2 } Description Executes a statement or ...",t:"If...Then...Else"},"87":{i:0.00277579196269469,u:"../Content/Inc.htm",a:"Statement Syntax samples Inc \u003cname\u003e{, \u003cexpression\u003e} Inc Var1  Inc Attr2, 5+Var1 Description Increments a variable, array element, or attribute by the value of a specified numeric expression. When counting the number of entities a location has processed, increment a variable at the end of the ...",t:"Inc"},"88":{i:0.0117801509236647,u:"../Content/IncEntCost.htm",a:"Statement Syntax samples IncEntCost \u003cexpression\u003e IncEntCost 15 IncEntCost -15 IncEntCost ValueAddedAttr Description Enables you to increment the cost (positively or negatively) of the current entity by a given amount. Use this function to add to the entity’s actual, accumulated dollar amount. Valid ...",t:"IncEntCost"},"89":{i:0.0117801509236647,u:"../Content/IncLocCost.htm",a:"Statement Syntax samples IncLocCost \u003cexpression\u003e IncLocCost 15 IncLocCost -15  IncLocCost SetupCostVar Description Enables you to increment the cost (positively or negatively) of the current activity by a given amount. Use this function to add to the activity’s actual, accumulated dollar amount. ...",t:"IncLocCost"},"90":{i:0.00916990726751898,u:"../Content/IncResCost.htm",a:"Statement Syntax samples IncResCost \u003ccost expression\u003e {,\u003cresource\u003e} IncResCost 10 IncResCost GetResRate(Operator1)*20, Operator1  Description Enables you to increment the cost (positively or negatively) of a resource currently owned by the entity executing the statement. Use this function to add to ...",t:"IncResCost"},"91":{i:0.00159604519270276,u:"../Content/IncOnOrderQty.htm",a:"Statement Syntax samples Inc (\u003cstorage name\u003e, \u003cexpression\u003e) IncOnOrderQty(StorageBin, NewOrdersVar) IncOnOrderQty(StorageBlock, - NumRejectsVar) Description Increments or decrements the on order value (total entities ordered but not yet arrived at the storage) for a Storage activity. In some ...",t:"IncOnOrderQty"},"92":{i:0.0106387306932157,u:"../Content/Int.htm",a:"Statement Syntax samples Int \u003cname1\u003e{= \u003cexpression1\u003e, \u003cname2\u003e= \u003cexpression2\u003e...)  Int Count Int Count = 1 Int Count = 1, Test = Rand(100) Description Creates a local variable of type integer. Local variables work much the same as attributes, except that they only are available within the logic that ...",t:"Int"},"93":{i:0.00299542536790072,u:"../Content/Log.htm",a:"Statement Syntax samples Log \u003cstring\u003e, \u003cexpression\u003e Log “Activity Time”, Attr1 Description Process Simulator assumes that the time stored in the expression is in the model’s default time units, which is minutes. Use the Log statement to record the time from one point in the process to another by ...",t:"Log"},"94":{i:0.00159604519270276,u:"../Content/MapArr.htm",a:"Statement Syntax samples MapArr \u003carray name\u003e {To \u003cvariable name\u003e} MapArr Array1 To Var10 MapArr Array5 Description Starting with the variable you specify, the MapArr statement maps each individual cell of an array to a unique variable (i.e. if you define 12 cells for the array, the array will map to ...",t:"MapArr"},"95":{i:0.00205920071381634,u:"../Content/Order.htm",a:"Statement Syntax samples Order \u003cexpression\u003e \u003centity\u003e {To \u003cactivity\u003e} Order 10 EntA To Act2 Order Qty_Attr Ent(Entity_Attr) To Loc(Dest_Attr) Description Causes the specified number of entities to be created and placed into the system at the designated activity.  If the activity does not have enough ...",t:"Order"},"96":{i:0.0254252311940692,u:"../Content/Pause.htm",a:"Statement Syntax samples Pause {\u003cstring expression\u003e} Pause Pause “Var1 =” $ Var1 Pause “Reached the midpoint of the simulation.” Description Pauses the simulation and optionally displays a message at some point of interest. This pause allows the user to examine the system in detail. An information ...",t:"Pause"},"97":{i:0.0223613665557566,u:"../Content/Prompt.htm",a:"Statement Syntax samples\n         Prompt \u003cstring expression\u003e, \u003cname\u003e{,  \u003cchoice1\u003e:\u003cexpression1\u003e,  \u003cchoice2\u003e:\u003cexpression2\u003e,  \u003cchoice3\u003e:\u003cexpression3\u003e...} Prompt “Enter the number of entities to process:”, Var2 Prompt “Enter the size of batches to accumulate:”,Var1, “Large”: 20, “Medium”: 15, “Small”: ...",t:"Prompt"},"98":{i:0.0125480850259347,u:"../Content/Read.htm",a:"Statement Syntax samples Read \u003cfile ID\u003e, \u003celement name\u003e Read File1, Var1  Description Reads the next numeric value from a text file and assigns that value to an element name. Read files are defined in the  External Files  grid. When reading from a file, Process Simulator skips all non-numeric data, ...",t:"Read"},"99":{i:0.0106387306932157,u:"../Content/Real.htm",a:"Statement Syntax samples Real \u003cname1\u003e{= \u003cexpression1\u003e, \u003cname2\u003e= \u003cexpression2\u003e...)  Real Var1 Real Counter = 0 Real Var1 = Clock(sec), Random_Num = Rand(10) Description Creates a local variable of type real.  Local variables work much the same as attributes, except that they only are available within ...",t:"Real"},"100":{i:0.00159604519270276,u:"../Content/ResetStats.htm",a:"Statement Syntax samples Reset Stats If Total = 20 Then Reset Stats Description Resets the simulation statistics.  Useful in connection with the Report statement to manually control statistics for reporting purposes in case specific or event logic. Valid In Any logic.  Example Suppose you want to ...",t:"Reset Stats"},"101":{i:0.00635529378542906,u:"../Content/Return.htm",a:"Statement Syntax samples Return {\u003cexpression\u003e} Return Return Attr1**Sqrt(Attr2) Description Sends a value from a subroutine to the logic that called the subroutine. In the same way that parameters send information from the calling logic to the subroutine, Return sends information from the subroutine ...",t:"Return"},"102":{i:0.00159604519270276,u:"../Content/ScenarioName().htm",a:"Returns current scenario name Syntax samples ScenarioName() Description Returns the Scenario Name when the function is invoked in logic. Valid In Valid in Most Logic. Example Suppose you choose to write out customer reports and want to know what Scenario you were running for the report, you would ...",t:"ScenarioName()"},"103":{i:0.00217950001197928,u:"../Content/Send.htm",a:"Statement Syntax samples Send \u003cexpression\u003e \u003centity name\u003e To \u003cdestination\u003e{,\u003cpriority\u003e} Send 2 EntA To Act2 Send 1 Grp_A To Grp_A_Processing, 10 Description Sends the specified number of a particular entity type to the destination. The entities to be sent must be waiting with a Send routing. The ...",t:"Send"},"104":{i:0.0117801509236647,u:"../Content/SetRate.htm",a:"Statement Syntax samples SetRate \u003cresource name\u003e, \u003cexpression\u003e, \u003cunit #\u003e SetRate Operator, 25, 3 Description Allows you to define the regular rate of cost for resources contained in a model. If you have already defined the regular rate in the shape properties, this statement will override that rate. ...",t:"SetRate"},"105":{i:0.00879951889228706,u:"../Content/Stop.htm",a:"Statement Syntax samples Stop {\u003cstring expression\u003e} Stop Stop “Normal termination” Description Terminates the current replication and optionally displays a message. The simulation will then continue with the next replication. Use Stop to end a replication when the simulation has run long enough to ...",t:"Stop"},"106":{i:0.00159604519270276,u:"../Content/SysClock().htm",a:"Returns the system clock of the users PC Syntax samples SysClock Description Returns the System date and time when the function is invoked in logic. Valid In Valid in most Logic. Example Suppose you choose to write out customer reports and want to know what time each scenario or replication started ...",t:"SysClock()"},"107":{i:0.00446367201734438,u:"../Content/Trace.htm",a:"Statement Syntax samples Trace {\u003cmessage\u003e}{Step or Cont or Off or Close} Trace “Begin Test for Resource A” Trace Cont Trace Close Description Turns tracing on and off. Trace messages will appear in a separate window on the screen. Use trace to follow the event flow of a model. Valid In Any logic. ...",t:"Trace"},"108":{i:0.0283696336336708,u:"../Content/Use.htm",a:"Statement Syntax samples Use {\u003cquantity\u003e} \u003cresource\u003e {,\u003cpriority\u003e} For \u003ctime\u003e {And or Or {\u003cquantity\u003e} \u003cresource\u003e {,\u003cpriority\u003e}  For \u003ctime\u003e... } Use 2 Res2, 5 For 30 min Use 2 Res1 For 2.0 min Or 3 Res2 For 1.5 min Use Res1, 3 For 1 hr And (Res2 For 5 Or Res3 For 5) Use Oper_Attr Res(Type_Attr) For ...",t:"Use"},"109":{i:0.00159604519270276,u:"../Content/Wait.htm",a:"Statement Syntax samples Wait  \u003ctime expression\u003e Wait 3 min Wait 0 Wait 2.5 + CleanupTime Wait N(8, .5) + 3 sec Description Simulates the time it takes to process an entity. Wait delays further processing of the entity until the specified time has elapsed. The rest of the model continues to process ...",t:"Wait"},"110":{i:0.00251142369627586,u:"../Content/WaitUntil.htm",a:"Statement Syntax samples Wait Until \u003cBoolean expression\u003e  Wait Until Var1 \u003e 3 Wait Until Var1 \u003c Attr3 And Var2 \u003e= 5 Description Delays processing of the current logic until the Boolean expression is true. The rest of the model continues to process during the delay.  Note that if the expression is ...",t:"Wait Until"},"111":{i:0.00831044602939601,u:"../Content/While.htm",a:"Statement Syntax samples While \u003cBoolean expression\u003e Do \u003cstatement block\u003e While Array1[n] \u003c\u003e 10 Do Inc n  While FreeCap(Loc1) \u003e 5 Do  { Inc Var2, 5  Wait 5 sec } Description Repeats a statement or statement block continuously while a condition remains true. While is an entry-condition loop, meaning ...",t:"While"},"112":{i:0.0130827862284529,u:"../Content/Write.htm",a:"Statement Syntax samples Write \u003cfile ID\u003e, \u003cstring or numeric expression\u003e {,\u003cmaximum digits before decimal\u003e, \u003cdigits after decimal\u003e} Write File1, \"Avg Cycle Time\" Write File1, CycleTimeVar, 5, 2 Description Writes information to a text file. The next item written to the file will appear immediately ...",t:"Write"},"113":{i:0.0130827862284529,u:"../Content/Writeline.htm",a:"Statement Syntax samples Writeline \u003cfile ID\u003e, \u003cstring or numeric expression\u003e{,\u003cmaximum digits before decimal\u003e, \u003cdigits after decimal\u003e} Description Writes information to a text file and starts a new line. Writeline always appends to the file unless the file is Reset. Any file that is written to with ...",t:"WriteLine"},"114":{i:0.0116993589959285,u:"../Content/XWrite.htm",a:"Statement Syntax samples Xwrite \u003cfile ID\u003e, \u003cstring or numeric expression\u003e Description Writes information to a text file in any text format the user chooses. Xwrite is for writing user-formatted files, while Write and Writeline are for writing special formatted text files. Xwrite always appends to a ...",t:"Xwrite"},"115":{i:0.00159604519270276,u:"../Content/Functions.htm",a:"Functions return information about the objects in your simulation, as \n well as the simulation itself. For example, you may use functions to obtain \n the simulation clock time, an activity\u0027s capacity, or a random number. \n Not all functions are available with every statement. There are three types ...",t:"Functions"},"116":{i:0.00164629219075382,u:"../Content/Clock.htm",a:"Function Syntax samples Clock({\u003ctime unit\u003e}) If Clock(day) \u003e= 1.5 Then Pause Attr1 = Clock() Description Returns the value of the elapsed simulation time in the units specified. Clock units should be kept consistent when comparing values. If an attribute has been assigned a time in minutes, any time ...",t:"Clock()"},"117":{i:0.00164629219075382,u:"../Content/DownQty.htm",a:"Function Syntax samples DownQty(\u003cactivity\u003e or \u003cresource\u003e) If DownQty(Act1) \u003e 3 Then aDest = Act2 Display “Total Res1 Down Now:” $ DownQty(Res1) Description Returns the number of activity or resource units down at the time of the call. Use this function to make decisions based on how many activity or ...",t:"DownQty()"},"118":{i:0.0109736449710125,u:"../Content/Entity.htm",a:"Function Syntax samples Entity({\u003cexpression\u003e}) Entity() Entity(Var1) Description Returns the name-index number of the current entity or a particular entity in an entity group. This function is especially useful in logic or subroutines that vary depending on which entity calls them. Use Entity() to ...",t:"Entity"},"119":{i:0.00164629219075382,u:"../Content/Entries.htm",a:"Function Syntax samples Entries(\u003cactivity\u003e) Display “Act1 has had” $ Entries(Act1) $ “entries.” Description Returns the total number of entity entries to an activity. This function returns an integer. Valid In Any logic Components \u003cactivity\u003e The activity to examine. Example \n            The Stores ...",t:"Entries()"},"120":{i:0.00281244233675211,u:"../Content/FreeCap.htm",a:"Function Syntax samples FreeCap(\u003cactivity\u003e) Send FreeCap(Review) Form To Review Description Returns the available capacity of an activity. This function returns an integer. Valid In Any logic. Components \u003cactivity\u003e The name of the activity to examine. The Loc() function may also be used here. ...",t:"FreeCap"},"121":{i:0.00281244233675211,u:"../Content/FreeUnits.htm",a:"Function Syntax samples FreeUnits(\u003cactivity\u003e or \u003cresource\u003e) Use (FreeUnits(Res1)) Res1 For 5 min Description Returns the free units of an activity or resource. Valid In  Any logic Components \u003cactivity\u003e The name of the activity to examine. \u003cresource\u003e The name of the resource to examine. Example \n     ...",t:"FreeUnits()"},"122":{i:0.0107789994350311,u:"../Content/GetCost.htm",a:"Function Syntax samples GetCost() Description Returns the cost of the current entity executing the logic. Use this function to return the entity’s actual, accumulated dollar amount. Valid In Activity logic only. Example The following example shows how to use the GetCost() function to generate a Time ...",t:"GetCost"},"123":{i:0.00164629219075382,u:"../Content/GetReplicationNum.htm",a:"Function Syntax samples GetReplicationNum() vRep = GetReplicationNum() Description Returns the number of the currently running replication. Valid In Any Logic. Example Based on the current replication, you may want to make a decision regarding the exporting of array data. In this case, you could use ...",t:"GetReplicationNum"},"124":{i:0.0092128532413437,u:"../Content/GetResRate.htm",a:"Function Syntax samples GetResRate({\u003cresource\u003e}) GetResRate() GetResRate(Operator1) Description Returns the cost rate specified in the shape properties or through the SetRate() function for a resource currently owned by the entity making the function call. When used without the optional \u003cresource\u003e ...",t:"GetResRate"},"125":{i:0.00211275224915314,u:"../Content/GroupQty.htm",a:"Function Syntax samples GroupQty({\u003centity name\u003e}) Order GroupQty(Part1) Part2 To Act1 If GroupQty(Part1) \u003e 5 Then... Description Returns the number of entities of a specified type in a batched or attached entity. If no name is specified, it returns the entire group quantity. If it is an attached ...",t:"GroupQty"},"126":{i:0.0109736449710125,u:"../Content/Location.htm",a:"Function Syntax samples Location() Attr1 = Location() If Location() = ApprovalActivity Then Wait 4 min Description Returns the current activity’s name-index number. This function is especially useful in subroutines that vary depending on which activity’s logic calls them. By using a Location() ...",t:"Location"},"127":{i:0.00164629219075382,u:"../Content/ObjectID.htm",a:"Function Syntax samples ObjectID() If ObjectID() = 123 Then Debug Description Returns the unique ID number associated with the entity calling the function.  As each entity enters the simulation, whether through an arrival, order, or being created, its ID number is incremented in sequence, thus ...",t:"ObjectID"},"128":{i:0.00198545942759845,u:"../Content/OwnedResource.htm",a:"Function Syntax samples OwnedResource({\u003cexpression \u003e}) OwnedResource(2) OwnedResource(ResQty()) OwnedResource() Description Returns the name-index number of the nth resource currently owned by the entity making the function call. The function parameter indicates the position of the resource in the ...",t:"OwnedResource()"},"129":{i:0.00159604519270276,u:"../Content/OwnedResourceUnit.htm",a:"Function Syntax samples OwnedResourceUnit({\u003cexpression \u003e}) OwnedResourceUnit(2) OwnedResourceUnit(ResQty()) OwnedResourceUnit() Description Returns the unit number of the nth resource currently owned by the entity making the function call. The function parameter indicates the position of the ...",t:"OwnedResourceUnit"},"130":{i:0.00299542536790072,u:"../Content/PercentUtil.htm",a:"Function Syntax samples PercentUtil (\u003cact or res name\u003e {, \u003cres unit}) PercentUtil(Assembly) PercentUtil(Operator) PercentUtil(Operator, 3) Description Returns the cumulative utilization percentage for the specified activity or resource. If a resource is specified without the optional unit number, ...",t:"PercentUtil"},"131":{i:0.00164629219075382,u:"../Content/ResQty.htm",a:"Function Syntax samples ResQty({\u003cresource name\u003e}) If ResQty(Res1) \u003e 5 Then Free 5 Res1 Description Returns the number of units of the specified resource that the current entity owns. ResQty() can be used to determine the amount of time necessary to process an entity based on the number of resources ...",t:"ResQty"},"132":{i:0.00164629219075382,u:"../Content/TimesUsed.htm",a:"Function Syntax samples TimesUsed(\u003cresource\u003e) If TimesUsed(Res1) \u003e 5 Then Use Res2 for 10 Description Returns the number of times a resource has been used. Valid In Any logic.  Components \u003cresource\u003e The name of the resource to examine. Res() may be used here. Example \n            In the example ...",t:"TimesUsed"},"133":{i:0.0109736449710125,u:"../Content/Exp.htm",a:"Function Syntax samples Exp(\u003cexpression\u003e) Real1 = Exp(Real2) Description Returns the exponential of an expression. This function is equivalent to ex. Valid In Any Logic. This function returns a real number. Components \u003cexpression\u003e Exp() returns the exponential of this expression. See Also Ln",t:"Exponential"},"134":{i:0.0109736449710125,u:"../Content/Ln.htm",a:"Function Syntax samples Ln(\u003cexpression\u003e) Real1 = Ln(Real2) Description Returns the natural logarithm of an expression. Valid In Any logic. This function returns a real number. Components \u003cexpression\u003e Ln() returns the natural logarithm of this expression. See Also Exp Please Note: To get a logarithm ...",t:"Ln"},"135":{i:0.00164629219075382,u:"../Content/Rand.htm",a:"Function Syntax samples Rand(\u003cexpression\u003e) Rand(10) min Order Rand(10) EntA To Act1 If Rand(100) \u003e 45 Then aPart = 1 Description Returns a random value n between 0 and X (0 \u003c= n \u003c X) where X is the result of the expression.  To generate random numbers between the expression and a number other than ...",t:"Rand"},"136":{i:0.0109736449710125,u:"../Content/Round.htm",a:"Function Syntax samples Round(\u003cexpression\u003e) Int Var1 = Round(3.5) Description  Rounds the expression to the nearest whole number.  Use this function to override Process Simulator’s default truncation. Valid In Any logic. This function returns an integer. Components \u003cexpression\u003e The expression to be ...",t:"Round"},"137":{i:0.00164629219075382,u:"../Content/Sqrt.htm",a:"Function Syntax samples Sqrt(\u003cexpression\u003e)  Real1 = Sqrt(Real2) Description Returns the square root of an expression. To get a root other than the square root, use the exponentiation operator as shown in the following formula: X ** (1 / Y) For example, where Y is the desired root, the formula ...",t:"Sqrt"},"138":{i:0.0109736449710125,u:"../Content/Trunc.htm",a:"Function Syntax samples Trunc(\u003cexpression\u003e) Int Var1 = Trunc(3.9) Description Returns a real expression truncated to an integer. Any digits to the right of the decimal place will be removed. When necessary, Process Simulator automatically converts real values to integers by truncating them.  Valid ...",t:"Trunc"},"139":{i:0.00164629219075382,u:"../Content/CalDay.htm",a:"Function Syntax samples\n         CalDay() Description\n         The CalDay() function corresponds to the weekday of the calendar date you defined as part of the warm-up period or simulation begin date under simulation options. Since CalDay() resets with the advent of a new week, every weekday will ...",t:"CalDay"},"140":{i:0.00192616822579341,u:"../Content/CalDOM.htm",a:"Function Syntax samples CalDOM() Description The CalDOM() function corresponds to the calendar day of the month you defined as part of the warm-up period or simulation begin date under simulation options. Values returned by this function will be integers in the range of 1 to 31. Valid In Any logic. ...",t:"CalDOM"},"141":{i:0.00192616822579341,u:"../Content/CalHour.htm",a:"Function Syntax samples CalHour() Description The CalHour() function corresponds to the hour of the calendar date you defined as part of the warm-up period or simulation begin date under simulation options. Since this function ties directly to the 24-hour clock displayed on the screen during ...",t:"CalHour"},"142":{i:0.00192616822579341,u:"../Content/CalMin.htm",a:"Function Syntax samples CalMin() Description The CalMin() function corresponds to the minute of the calendar date you defined as part of the warm-up period or simulation begin date under simulation options. Since this function ties directly to the 24-hour clock displayed during simulation, CalMin() ...",t:"CalMin"},"143":{i:0.00192616822579341,u:"../Content/CalMonth.htm",a:"Function Syntax samples CalMonth() Description The CalMonth() function corresponds to the month of the year you defined as part of the warm-up period or simulation begin date under simulation options. Values returned by this function will be integers in the range of 1 to 12. Valid In Any logic. ...",t:"CalMonth"},"144":{i:0.00192616822579341,u:"../Content/CalYear.htm",a:"Function Syntax samples CalYear() Description The CalYear() function corresponds to the year of the calendar date you defined as part of the warm-up period or simulation begin date under simulation options.  Valid In Any logic. Please Note: CalYear() works only when you select calendar date in the ...",t:"CalYear"},"145":{i:0.00865026536932557,u:"../Content/Distributions.htm",a:"Data is seldom in a form ready for use in a simulation model. Usually some analysis and conversion needs to be performed for the data to be useful as an input parameter to the simulation. Random phenomena must be fitted to some standard, theoretical distribution such as a normal or exponential ...",t:"Distributions"},"146":{i:0.00159604519270276,u:"../Content/DistributionBuilder.htm",a:"The Distribution Builder allows you to generate  statistical \n distributions  with the syntax that Process Simulator will recognize. Select the type of distribution you would like to build from the list on the left, and then fill out the fields available for that distribution. If \n you enter ...",t:"Distribution Builder"},"147":{i:0.00159604519270276,u:"../Content/SimulationAndOptions.htm",a:"Simulation and Options When you have completed your process diagram, you have several options \nto help set up and run your simulations.   Simulation Scenario Manager Viewing Output Results",t:"Simulation and Options"},"148":{i:0.00227437966639203,u:"../Content/Simulation.htm",a:"Simulation is the act of running your model through Process Simulator\u0027s \n simulation engine. During simulation, your entities flow through your \n process according to their routings. Numerical values are also assigned \n to your statistical distributions. You may simulate your model at any time \n ...",t:"Simulation"},"149":{i:0.00506262346996632,u:"../Content/SimulationOptions.htm",a:"Simulation Options The Simulation Options dialog enables the user to define properties\n for running the simulation, such as, simulation time and warm-up period. \n The simulation options can be opened in the following ways: Clicking on the Simulation Options icon from the \n Process Simulator ribbon. ...",t:"Simulation Properties"},"150":{i:0.00224046870034967,u:"../Content/RunTimeOptions.htm",a:"When the simulation begins, the Visio layout will change to a run-time \n layout to show the simulation\u0027s animation. You may click and drag on the \n run-time layout to pan the view of your process. In the run-time layout, there are several options. Run-Time Toolbar Info Controls Variables Select this ...",t:"Run-Time Options"},"151":{i:0.00159604519270276,u:"../Content/DebuggingProcessSimulatorLogic.htm",a:"The Debugger is a convenient and efficient way to test or follow the \n processing of any logic defined in your model. The debugger is used to \n step through logic one statement at a time and examine variables and attributes \n while a model is running.  Before discussing the details of the Debug ...",t:"Debugging Process Simulator Logic"},"152":{i:0.00507824057706422,u:"../Content/ScenarioManager.htm",a:"In Process Simulator it is possible to set up multiple scenarios to \n be run and evaluated side by side in the output report to see how they \n compare. Scenarios are defined in the Scenario Manager dialog, which is \n accessible from the Process Simulator ribbon. The scenario manager provides a table ...",t:"Scenario Manager"},});