### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Global Rank: [74](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
<br />
Final Rank Value:  945.7<br />
<br />
Final Rank Value (945.7) = Starting Rank Value (863.2) + Head To Head Adjustments (82.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 863.2
- 400 + ( ( 0.224 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 863.2


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
|           24 |       55 | 2024-07-30 | B8              | L   | 1.000      | -            | -                | -                | -         |    -7.42 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           23 |       85 | 2024-07-29 | PERA            | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.452 (0.226)    | 0 (0.000) |    16.61 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           22 |      576 | 2024-07-16 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -6.43 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           21 |      853 | 2024-06-16 | RUBY            | L   | 0.899      | -            | -                | -                | -         |   -16.30 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           20 |      878 | 2024-06-15 | EYEBALLERS      | W   | 0.893      | 0.143        | -                | 0.513 (0.065)    | 0 (0.000) |    11.65 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           19 |      894 | 2024-06-15 | VP.Prodigy      | W   | 0.891      | 0.450        | 0.026 (0.010)    | 0.406 (0.163)    | 0 (0.000) |    12.49 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           18 |      912 | 2024-06-14 | FAVBET          | W   | 0.886      | -            | -                | -                | 0 (0.000) |    10.72 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           17 |      967 | 2024-06-13 | CYBERSHOKE      | W   | 0.878      | 0.450        | 0.040 (0.016)    | 0.347 (0.137)    | 0 (0.000) |    12.84 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           16 |     1022 | 2024-06-10 | Insilio         | L   | 0.860      | -            | -                | -                | -         |   -10.93 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           15 |     1324 | 2024-06-05 | RUBY            | W   | 0.825      | 0.372        | 0.097 (0.030)    | 0.506 (0.156)    | 0 (0.000) |    13.73 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           14 |     1399 | 2024-06-03 | DMS             | W   | 0.812      | 0.372        | 0.003 (0.001)    | 0.447 (0.135)    | 0 (0.000) |    16.13 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           13 |     1448 | 2024-06-01 | Enterprise      | W   | 0.799      | 0.372        | 0.040 (0.012)    | 0.622 (0.185)    | 0 (0.000) |    13.81 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           12 |     1504 | 2024-05-30 | FAVBET          | W   | 0.786      | 0.372        | 0.004 (0.001)    | 0.344 (0.101)    | 0 (0.000) |     9.89 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           11 |     2208 | 2024-05-05 | 9 Pandas        | L   | 0.617      | -            | -                | -                | -         |    -6.19 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           10 |     2389 | 2024-04-26 | Insilio         | W   | 0.559      | 0.396        | 0.023 (0.005)    | 0.554 (0.123)    | 0 (0.000) |    10.39 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            9 |     2398 | 2024-04-26 | Permitta        | W   | 0.558      | 0.396        | 0.025 (0.005)    | 0.799 (0.177)    | -         |    10.95 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            8 |     3484 | 2024-03-12 | The Chosen Few  | L   | 0.259      | -            | -                | -                | -         |    -5.93 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            7 |     3541 | 2024-03-09 | FORZE YNG       | W   | 0.240      | -            | -                | -                | -         |     0.54 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            6 |     3567 | 2024-03-08 | RUBY            | L   | 0.233      | -            | -                | -                | -         |    -2.89 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            5 |     3655 | 2024-03-05 | 1WIN            | W   | 0.214      | 0.372        | 0.027 (0.002)    | -                | -         |     3.69 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            4 |     3802 | 2024-02-27 | FORZE           | L   | 0.166      | -            | -                | -                | -         |    -2.33 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            3 |     4009 | 2024-02-18 | brazylijski luz | L   | 0.106      | -            | -                | -                | -         |    -1.97 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            2 |     4181 | 2024-02-11 | Sashi           | L   | 0.058      | -            | -                | -                | -         |    -0.28 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            1 |     4269 | 2024-02-04 | Portugal        | L   | 0.012      | -            | -                | -                | -         |    -0.26 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,684.01)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $10,000.00     | $8,985.41       |
| 2024-06-10 |      0.860 | $4,300.00      | $3,698.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
