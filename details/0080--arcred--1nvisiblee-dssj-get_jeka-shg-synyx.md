### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  938.8<br />
<br />
Final Rank Value (938.8) = Starting Rank Value (862.6) + Head To Head Adjustments (76.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.144[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.6
- 400 + ( ( 0.229 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 862.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      334 | 2024-07-16 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -6.16 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           21 |      611 | 2024-06-16 | RUBY            | L   | 0.946      | -            | -                | -                | -         |   -16.88 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           20 |      636 | 2024-06-15 | EYEBALLERS      | W   | 0.940      | 0.143        | 0.007 (0.001)    | 0.571 (0.077)    | 0 (0.000) |    11.84 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           19 |      652 | 2024-06-15 | VP.Prodigy      | W   | 0.938      | 0.450        | 0.033 (0.014)    | 0.462 (0.195)    | 0 (0.000) |    12.68 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           18 |      670 | 2024-06-14 | FAVBET          | W   | 0.934      | -            | -                | -                | 0 (0.000) |    11.60 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           17 |      725 | 2024-06-13 | CYBERSHOKE      | W   | 0.925      | 0.450        | 0.050 (0.021)    | 0.294 (0.123)    | 0 (0.000) |    11.79 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           16 |      780 | 2024-06-10 | Insilio         | L   | 0.907      | -            | -                | -                | -         |   -11.06 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           15 |     1082 | 2024-06-05 | RUBY            | W   | 0.873      | 0.372        | 0.122 (0.039)    | 0.575 (0.187)    | 0 (0.000) |    14.87 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           14 |     1157 | 2024-06-03 | DMS             | W   | 0.859      | 0.372        | 0.004 (0.001)    | 0.461 (0.148)    | 0 (0.000) |    16.13 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           13 |     1206 | 2024-06-01 | Enterprise      | W   | 0.846      | 0.372        | 0.050 (0.016)    | 0.646 (0.204)    | 0 (0.000) |    15.01 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           12 |     1262 | 2024-05-30 | FAVBET          | W   | 0.834      | 0.372        | 0.005 (0.001)    | 0.390 (0.121)    | 0 (0.000) |    10.81 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           11 |     1966 | 2024-05-05 | 9 Pandas        | L   | 0.664      | -            | -                | -                | -         |    -6.07 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           10 |     2147 | 2024-04-26 | Insilio         | W   | 0.606      | 0.396        | 0.030 (0.007)    | 0.582 (0.140)    | 0 (0.000) |    11.68 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            9 |     2156 | 2024-04-26 | Permitta        | W   | 0.605      | 0.396        | 0.032 (0.008)    | 0.790 (0.190)    | 0 (0.000) |    12.18 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            8 |     3242 | 2024-03-12 | The Chosen Few  | L   | 0.307      | -            | -                | -                | -         |    -6.91 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            7 |     3299 | 2024-03-09 | FORZE YNG       | W   | 0.287      | -            | -                | -                | -         |     0.65 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            6 |     3325 | 2024-03-08 | RUBY            | L   | 0.280      | -            | -                | -                | -         |    -3.25 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            5 |     3413 | 2024-03-05 | 1WIN            | W   | 0.261      | 0.372        | 0.035 (0.003)    | 0.542 (0.053)    | -         |     4.65 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            4 |     3560 | 2024-02-27 | FORZE           | L   | 0.213      | -            | -                | -                | -         |    -2.77 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            3 |     3767 | 2024-02-18 | brazylijski luz | L   | 0.153      | -            | -                | -                | -         |    -2.74 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            2 |     3939 | 2024-02-11 | Sashi           | L   | 0.106      | -            | -                | -                | -         |    -0.51 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            1 |     4027 | 2024-02-04 | Portugal        | L   | 0.059      | -            | -                | -                | -         |    -1.30 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,360.22)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $10,000.00     | $9,458.28       |
| 2024-06-10 |      0.907 | $4,300.00      | $3,901.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
