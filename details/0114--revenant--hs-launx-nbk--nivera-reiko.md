### Roster Details<br />
Team Name: Revenant<br />
Roster: HS, lauNX, NBK-, Nivera, reiko<br />
Global Rank: [114](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
<br />
Final Rank Value:  831.8<br />
<br />
Final Rank Value (831.8) = Starting Rank Value (806.7) + Head To Head Adjustments (25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.7
- 400 + ( ( 0.198 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 806.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       58 | 2024-08-04 | Monte Gen       | L   | 1.000      | -            | -                | -                | -         |   -26.97 | HS, lauNX, NBK-, Nivera, reiko   |
|           19 |      396 | 2024-07-26 | DMS             | L   | 1.000      | -            | -                | -                | -         |   -13.83 | adeX, Jeebs, NBK-, Nivera, reiko |
|           18 |      425 | 2024-07-25 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -1.80 | adeX, Jeebs, NBK-, Nivera, reiko |
|           17 |      456 | 2024-07-24 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |    -4.28 | adeX, lauNX, NBK-, Nivera, reiko |
|           16 |      467 | 2024-07-24 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -0.48 | adeX, lauNX, NBK-, Nivera, reiko |
|           15 |      894 | 2024-07-12 | Verdant         | W   | 1.000      | 0.371        | 0.015 (0.005)    | 0.287 (0.106)    | 0 (0.000) |    14.76 | adeX, lauNX, NBK-, Nivera, reiko |
|           14 |      954 | 2024-07-09 | Johnny Speeds   | W   | 1.000      | 0.333        | 0.122 (0.041)    | 1.000 (0.333)    | 0 (0.000) |    28.50 | adeX, lauNX, NBK-, Nivera, reiko |
|           13 |      971 | 2024-07-08 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -10.92 | adeX, lauNX, NBK-, Nivera, reiko |
|           12 |      973 | 2024-07-08 | lajtbitexe      | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.108 (0.036)    | 0 (0.000) |    10.74 | adeX, lauNX, NBK-, Nivera, reiko |
|           11 |      978 | 2024-07-07 | kONO            | W   | 0.998      | 0.333        | 0.028 (0.009)    | 0.553 (0.184)    | 0 (0.000) |    17.31 | adeX, lauNX, NBK-, Nivera, reiko |
|           10 |      981 | 2024-07-06 | 777             | W   | 0.993      | 0.333        | 0.015 (0.005)    | 0.173 (0.057)    | 0 (0.000) |    11.30 | adeX, lauNX, NBK-, Nivera, reiko |
|            9 |      986 | 2024-07-05 | lajtbitexe      | L   | 0.985      | -            | -                | -                | -         |   -19.62 | adeX, lauNX, NBK-, Nivera, reiko |
|            8 |     1017 | 2024-06-27 | Johnny Speeds   | L   | 0.931      | -            | -                | -                | -         |    -2.44 | adeX, lauNX, NBK-, Nivera, reiko |
|            7 |     1020 | 2024-06-26 | lajtbitexe      | W   | 0.924      | 0.333        | 0.007 (0.002)    | 0.108 (0.033)    | 0 (0.000) |    10.31 | adeX, lauNX, NBK-, Nivera, reiko |
|            6 |     1021 | 2024-06-25 | Johnny Speeds   | L   | 0.919      | -            | -                | -                | -         |    -2.34 | adeX, lauNX, NBK-, Nivera, reiko |
|            5 |     1029 | 2024-06-23 | Heimo           | W   | 0.905      | 0.333        | 0.006 (0.002)    | 0.103 (0.031)    | 0 (0.000) |     8.65 | adeX, lauNX, NBK-, Nivera, reiko |
|            4 |     1052 | 2024-06-16 | CYBERSHOKE      | L   | 0.860      | -            | -                | -                | -         |   -10.96 | adeX, lauNX, NBK-, Nivera, reiko |
|            3 |     1081 | 2024-06-15 | Verdant         | W   | 0.854      | 0.143        | 0.015 (0.002)    | 0.287 (0.035)    | 0 (0.000) |    16.11 | adeX, lauNX, NBK-, Nivera, reiko |
|            2 |     1138 | 2024-06-14 | Astralis Talent | W   | 0.846      | 0.143        | 0.009 (0.001)    | 0.156 (0.019)    | 0 (0.000) |    10.54 | adeX, lauNX, NBK-, Nivera, reiko |
|            1 |     1166 | 2024-06-13 | Verdant         | L   | 0.840      | -            | -                | -                | -         |    -9.53 | adeX, lauNX, NBK-, Nivera, reiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,794.38)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-09 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-27 |      0.931 | $3,000.00      | $2,794.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
