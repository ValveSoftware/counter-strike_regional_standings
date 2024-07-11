### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  988.3<br />
<br />
Final Rank Value (988.3) = Starting Rank Value (906.3) + Head To Head Adjustments (82.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.166[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 906.3
- 400 + ( ( 0.240 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 906.3


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
|           22 |      159 | 2024-06-16 | RUBY            | L   | 1.000      | -            | -                | -                | -         |   -18.42 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           21 |      184 | 2024-06-15 | EYEBALLERS      | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.646 (0.092)    | 0 (0.000) |    12.12 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           20 |      200 | 2024-06-15 | VP.Prodigy      | W   | 1.000      | 0.450        | 0.038 (0.017)    | 0.519 (0.233)    | 0 (0.000) |    13.23 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           19 |      218 | 2024-06-14 | FAVBET          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.93 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           18 |      273 | 2024-06-13 | CYBERSHOKE      | W   | 1.000      | 0.450        | 0.058 (0.026)    | 0.317 (0.143)    | 0 (0.000) |    12.12 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           17 |      328 | 2024-06-10 | Insilio         | L   | 0.994      | -            | -                | -                | -         |   -11.97 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           16 |      630 | 2024-06-05 | RUBY            | W   | 0.960      | 0.372        | 0.139 (0.050)    | 0.563 (0.201)    | 0 (0.000) |    15.82 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           15 |      705 | 2024-06-03 | DMS             | W   | 0.946      | 0.372        | 0.005 (0.002)    | 0.471 (0.166)    | 0 (0.000) |    17.81 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           14 |      754 | 2024-06-01 | Enterprise      | W   | 0.933      | 0.372        | 0.053 (0.018)    | 0.654 (0.227)    | 0 (0.000) |    16.39 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           13 |      810 | 2024-05-30 | FAVBET          | W   | 0.920      | 0.372        | 0.006 (0.002)    | 0.395 (0.135)    | 0 (0.000) |    11.39 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           12 |     1514 | 2024-05-05 | 9 Pandas        | L   | 0.751      | -            | -                | -                | -         |    -6.26 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           11 |     1695 | 2024-04-26 | Insilio         | W   | 0.693      | 0.396        | 0.035 (0.010)    | 0.587 (0.161)    | 0 (0.000) |    13.37 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           10 |     1704 | 2024-04-26 | Permitta        | W   | 0.692      | 0.396        | 0.038 (0.011)    | 0.837 (0.230)    | 0 (0.000) |    13.74 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            9 |     2790 | 2024-03-12 | The Chosen Few  | L   | 0.394      | -            | -                | -                | -         |    -9.07 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            8 |     2847 | 2024-03-09 | FORZE YNG       | W   | 0.374      | -            | -                | -                | -         |     0.69 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            7 |     2873 | 2024-03-08 | RUBY            | L   | 0.367      | -            | -                | -                | -         |    -4.37 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            6 |     2961 | 2024-03-05 | 1WIN            | W   | 0.348      | 0.372        | 0.041 (0.005)    | 0.570 (0.074)    | -         |     6.49 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            5 |     3108 | 2024-02-27 | FORZE           | L   | 0.300      | -            | -                | -                | -         |    -3.75 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            4 |     3315 | 2024-02-18 | brazylijski luz | L   | 0.240      | -            | -                | -                | -         |    -4.69 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            3 |     3487 | 2024-02-11 | Sashi           | L   | 0.192      | -            | -                | -                | -         |    -1.20 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            2 |     3575 | 2024-02-04 | Portugal        | L   | 0.146      | -            | -                | -                | -         |    -3.24 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            1 |     4129 | 2024-01-16 | Sashi           | L   | 0.020      | -            | -                | -                | -         |    -0.13 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,275.33)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-10 |      0.994 | $4,300.00      | $4,275.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
