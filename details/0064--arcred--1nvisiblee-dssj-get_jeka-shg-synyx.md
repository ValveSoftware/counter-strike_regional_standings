### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Global Rank: [64](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1000.2<br />
<br />
Final Rank Value (1000.2) = Starting Rank Value (914.9) + Head To Head Adjustments (85.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.182[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 914.9
- 400 + ( ( 0.250 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 914.9


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
|           26 |       24 | 2024-08-05 | Aurora          | W   | 1.000      | 0.500        | 0.420 (0.210)    | 0.758 (0.379)    | 0 (0.000) |    28.82 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           25 |      101 | 2024-08-03 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |   -17.34 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           24 |      140 | 2024-08-02 | Insilio         | W   | 1.000      | 0.342        | 0.023 (0.008)    | 0.539 (0.185)    | 0 (0.000) |    14.72 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           23 |      263 | 2024-07-30 | B8              | L   | 1.000      | -            | -                | -                | -         |    -8.46 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           22 |      293 | 2024-07-29 | PERA            | W   | 1.000      | 0.500        | 0.047 (0.024)    | 0.435 (0.218)    | 0 (0.000) |    15.28 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           21 |      784 | 2024-07-16 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -7.30 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           20 |     1061 | 2024-06-16 | RUBY            | L   | 0.859      | -            | -                | -                | -         |   -16.57 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           19 |     1086 | 2024-06-15 | EYEBALLERS      | W   | 0.854      | -            | -                | -                | 0 (0.000) |     9.98 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           18 |     1102 | 2024-06-15 | VP.Prodigy      | W   | 0.852      | 0.450        | 0.025 (0.010)    | 0.383 (0.147)    | 0 (0.000) |    10.73 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           17 |     1120 | 2024-06-14 | FAVBET          | W   | 0.847      | -            | -                | -                | 0 (0.000) |     9.00 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           16 |     1175 | 2024-06-13 | CYBERSHOKE      | W   | 0.838      | 0.450        | 0.039 (0.015)    | 0.378 (0.142)    | 0 (0.000) |    10.82 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           15 |     1230 | 2024-06-10 | Insilio         | L   | 0.821      | -            | -                | -                | -         |   -11.86 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           14 |     1532 | 2024-06-05 | RUBY            | W   | 0.786      | 0.372        | 0.095 (0.028)    | 0.479 (0.140)    | 0 (0.000) |    11.74 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           13 |     1607 | 2024-06-03 | DMS             | W   | 0.773      | 0.372        | -                | 0.428 (0.123)    | 0 (0.000) |    13.75 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           12 |     1656 | 2024-06-01 | Enterprise      | W   | 0.760      | 0.372        | 0.039 (0.011)    | 0.641 (0.181)    | 0 (0.000) |    11.67 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           11 |     1712 | 2024-05-30 | FAVBET          | W   | 0.747      | -            | -                | -                | -         |     7.92 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           10 |     2416 | 2024-05-05 | 9 Pandas        | L   | 0.578      | -            | -                | -                | -         |    -7.04 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            9 |     2597 | 2024-04-26 | Insilio         | W   | 0.520      | 0.396        | 0.023 (0.005)    | 0.539 (0.111)    | -         |     8.45 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            8 |     2606 | 2024-04-26 | Permitta        | W   | 0.518      | 0.396        | 0.039 (0.008)    | 0.919 (0.189)    | -         |     9.77 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            7 |     3692 | 2024-03-12 | The Chosen Few  | L   | 0.220      | -            | -                | -                | -         |    -5.46 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            6 |     3749 | 2024-03-09 | FORZE YNG       | W   | 0.201      | -            | -                | -                | -         |     0.34 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            5 |     3775 | 2024-03-08 | RUBY            | L   | 0.194      | -            | -                | -                | -         |    -2.89 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            4 |     3863 | 2024-03-05 | 1WIN            | W   | 0.174      | 0.372        | 0.033 (0.002)    | -                | -         |     2.89 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            3 |     4010 | 2024-02-27 | FORZE           | L   | 0.127      | -            | -                | -                | -         |    -2.15 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            2 |     4217 | 2024-02-18 | brazylijski luz | L   | 0.067      | -            | -                | -                | -         |    -1.39 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            1 |     4389 | 2024-02-11 | Sashi           | L   | 0.019      | -            | -                | -                | -         |    -0.12 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,123.96)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-16 |      0.859 | $10,000.00     | $8,593.76       |
| 2024-06-10 |      0.821 | $4,300.00      | $3,530.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
