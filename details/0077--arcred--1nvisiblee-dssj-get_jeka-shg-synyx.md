### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  975.6<br />
<br />
Final Rank Value (975.6) = Starting Rank Value (887.7) + Head To Head Adjustments (87.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.181[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 887.7
- 400 + ( ( 0.240 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 887.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       23 | 2024-06-16 | RUBY            | L   | 1.000      | -            | -                | -                | -         |   -18.22 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           22 |       48 | 2024-06-15 | EYEBALLERS      | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.653 (0.093)    | 0 (0.000) |    12.37 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           21 |       64 | 2024-06-15 | VP.Prodigy      | W   | 1.000      | 0.450        | 0.033 (0.015)    | 0.518 (0.233)    | 0 (0.000) |    13.48 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           20 |       82 | 2024-06-14 | FAVBET          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.57 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           19 |      137 | 2024-06-13 | CYBERSHOKE      | W   | 1.000      | 0.450        | 0.050 (0.022)    | 0.284 (0.128)    | 0 (0.000) |    11.73 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           18 |      192 | 2024-06-10 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -11.02 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           17 |      494 | 2024-06-05 | RUBY            | W   | 1.000      | 0.372        | 0.121 (0.045)    | 0.574 (0.214)    | 0 (0.000) |    16.97 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           16 |      569 | 2024-06-03 | DMS             | W   | 1.000      | 0.372        | 0.004 (0.002)    | 0.473 (0.176)    | 0 (0.000) |    19.80 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           15 |      620 | 2024-06-01 | Enterprise      | W   | 1.000      | 0.372        | 0.046 (0.017)    | 0.575 (0.214)    | 0 (0.000) |    18.57 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           14 |      676 | 2024-05-30 | FAVBET          | W   | 1.000      | 0.372        | 0.005 (0.002)    | 0.397 (0.148)    | 0 (0.000) |    13.29 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           13 |     1380 | 2024-05-05 | 9 Pandas        | L   | 0.907      | -            | -                | -                | -         |    -6.25 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           12 |     1561 | 2024-04-26 | Insilio         | W   | 0.849      | 0.396        | 0.032 (0.011)    | 0.578 (0.195)    | 0 (0.000) |    17.62 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           11 |     1570 | 2024-04-26 | Permitta        | W   | 0.847      | 0.396        | 0.039 (0.013)    | 0.885 (0.297)    | 0 (0.000) |    17.81 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           10 |     2657 | 2024-03-12 | The Chosen Few  | L   | 0.549      | -            | -                | -                | -         |   -11.88 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            9 |     2714 | 2024-03-09 | FORZE YNG       | W   | 0.529      | -            | -                | -                | -         |     1.12 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            8 |     2740 | 2024-03-08 | RUBY            | L   | 0.523      | -            | -                | -                | -         |    -5.93 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            7 |     2828 | 2024-03-05 | 1WIN            | W   | 0.503      | 0.372        | 0.041 (0.008)    | 0.592 (0.111)    | -         |    10.24 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            6 |     2975 | 2024-02-27 | FORZE           | L   | 0.456      | -            | -                | -                | -         |    -4.88 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            5 |     3182 | 2024-02-18 | brazylijski luz | L   | 0.396      | -            | -                | -                | -         |    -7.56 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            4 |     3354 | 2024-02-11 | Sashi           | L   | 0.348      | -            | -                | -                | -         |    -2.00 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            3 |     3442 | 2024-02-04 | esmagaB         | L   | 0.301      | -            | -                | -                | -         |    -6.36 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            2 |     3996 | 2024-01-16 | Sashi           | L   | 0.176      | -            | -                | -                | -         |    -0.98 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            1 |     4114 | 2024-01-12 | Space           | L   | 0.150      | -            | -                | -                | -         |    -2.60 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,300.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-10 |      1.000 | $4,300.00      | $4,300.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
