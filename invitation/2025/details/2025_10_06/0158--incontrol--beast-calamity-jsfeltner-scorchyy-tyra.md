### Roster Details<br />
Team Name: InControl<br />
Roster: Beast, calamity, jsfeltner, Scorchyy, TyRa<br />
Global Rank: [158](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [42]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  684.5<br />
<br />
Final Rank Value (684.5) = Starting Rank Value (706.9) + Head To Head Adjustments (-22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.9
- 400 + ( ( 0.157 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 706.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      609 | 2025-09-13 | Getting Info | L   | 1.000      | -            | -                | -                | -         |    -7.50 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           12 |      703 | 2025-09-11 | BOSS         | L   | 1.000      | -            | -                | -                | -         |   -11.01 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           11 |      746 | 2025-09-10 | Nocturnal    | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.096 (0.035)    | 0 (0.000) |    10.45 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           10 |      843 | 2025-09-08 | Wanted Goons | L   | 1.000      | -            | -                | -                | -         |   -22.80 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            9 |     1123 | 2025-08-27 | BOSS         | L   | 0.936      | -            | -                | -                | -         |   -10.72 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            8 |     1150 | 2025-08-26 | M80          | L   | 0.930      | -            | -                | -                | -         |    -1.38 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            7 |     1398 | 2025-08-15 | LAG          | L   | 0.856      | -            | -                | -                | -         |   -12.00 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            6 |     1441 | 2025-08-14 | FULL SEND    | W   | 0.850      | 0.363        | 0.000 (0.000)    | 0.242 (0.074)    | 0 (0.000) |     7.84 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            5 |     1543 | 2025-08-12 | Shimmer      | W   | 0.836      | 0.363        | 0.036 (0.011)    | 0.139 (0.042)    | 0 (0.000) |    13.36 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            4 |     1592 | 2025-08-11 | FlyQuest RED | W   | 0.830      | 0.363        | 0.014 (0.004)    | 0.096 (0.029)    | 0 (0.000) |    12.21 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            3 |     2016 | 2025-07-19 | SkinRave     | L   | 0.673      | -            | -                | -                | -         |    -3.30 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            2 |     2034 | 2025-07-18 | NuTorious    | W   | 0.670      | 0.407        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.670) |     3.17 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            1 |     2039 | 2025-07-18 | Fluxo        | L   | 0.669      | -            | -                | -                | -         |    -0.67 | Beast, calamity, jsfeltner, Scorchyy, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($963.13)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-31 |      0.963 | $1,000.00      | $963.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
