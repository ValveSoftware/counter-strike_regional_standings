### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Global Rank: [133](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  761.0<br />
<br />
Final Rank Value (761.0) = Starting Rank Value (782.5) + Head To Head Adjustments (-21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.429[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.5
- 400 + ( ( 0.193 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 782.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1069 | 2024-11-04 | 9INE              | L   | 0.691      | -            | -                | -                | -         |    -4.68 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           33 |     1075 | 2024-11-03 | RUSH B            | W   | 0.686      | 0.396        | 0.067 (0.018)    | 0.240 (0.065)    | 0 (0.000) |    14.25 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           32 |     1092 | 2024-11-03 | SINNERS           | L   | 0.684      | -            | -                | -                | -         |    -3.24 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           31 |     1110 | 2024-11-02 | FLuffy Gangsters  | W   | 0.679      | 0.396        | 0.015 (0.004)    | 0.592 (0.159)    | 0 (0.000) |    10.51 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           30 |     1139 | 2024-11-01 | NewBALLS          | L   | 0.671      | -            | -                | -                | -         |   -16.02 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           29 |     1158 | 2024-10-31 | LEON              | W   | 0.664      | 0.396        | 0.005 (0.001)    | -                | 0 (0.000) |     4.95 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           28 |     1423 | 2024-10-17 | Fire Flux         | L   | 0.571      | -            | -                | -                | -         |    -6.95 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           27 |     1523 | 2024-10-12 | NAVI Junior       | L   | 0.536      | -            | -                | -                | -         |    -2.72 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           26 |     1531 | 2024-10-11 | Endpoint          | L   | 0.531      | -            | -                | -                | -         |    -6.72 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           25 |     1699 | 2024-10-05 | CYBERSHOKE        | L   | 0.491      | -            | -                | -                | -         |    -5.90 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           24 |     1938 | 2024-09-28 | Johnny Speeds     | L   | 0.446      | -            | -                | -                | -         |    -2.57 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           23 |     2024 | 2024-09-26 | Apogee            | L   | 0.432      | -            | -                | -                | -         |    -6.56 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           22 |     2033 | 2024-09-26 | 500               | W   | 0.432      | 0.143        | 0.060 (0.004)    | 0.860 (0.053)    | 0 (0.000) |     9.50 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           21 |     2200 | 2024-09-22 | HOTU              | L   | 0.405      | -            | -                | -                | -         |    -7.03 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           20 |     2394 | 2024-09-15 | Aurora Young Blud | L   | 0.358      | -            | -                | -                | -         |    -3.48 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           19 |     2417 | 2024-09-14 | 9INE              | L   | 0.353      | -            | -                | -                | -         |    -2.81 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           18 |     2429 | 2024-09-14 | RUSH B            | W   | 0.351      | 0.443        | 0.067 (0.010)    | 0.240 (0.037)    | 0 (0.000) |     6.77 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           17 |     2445 | 2024-09-14 | 9INE              | L   | 0.350      | -            | -                | -                | -         |    -2.67 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           16 |     2595 | 2024-09-08 | CYBERSHOKE        | L   | 0.312      | -            | -                | -                | -         |    -4.04 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert  |
|           15 |     2828 | 2024-08-31 | Revenant          | W   | 0.258      | 0.384        | 0.004 (0.000)    | 0.158 (0.016)    | 0 (0.000) |     3.73 | 1NVISIBLEE, Djon8, DSSj, Get_Jeka, synyx |
|           14 |     3176 | 2024-08-23 | Sashi             | L   | 0.204      | -            | -                | -                | -         |    -1.45 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           13 |     3209 | 2024-08-22 | Passion UA        | L   | 0.197      | -            | -                | -                | -         |    -0.59 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           12 |     3244 | 2024-08-21 | Johnny Speeds     | W   | 0.191      | 0.143        | 0.108 (0.003)    | 0.764 (0.021)    | 0 (0.000) |     4.99 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           11 |     3275 | 2024-08-21 | Nemiga            | L   | 0.190      | -            | -                | -                | -         |    -0.36 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           10 |     3296 | 2024-08-20 | SINNERS           | L   | 0.186      | -            | -                | -                | -         |    -0.86 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            9 |     3432 | 2024-08-15 | OG                | L   | 0.152      | -            | -                | -                | -         |    -1.43 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            8 |     3484 | 2024-08-13 | Monte             | W   | 0.139      | 0.500        | 0.078 (0.005)    | 0.572 (0.040)    | 0 (0.000) |     3.44 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            7 |     3535 | 2024-08-12 | RUSH B            | L   | 0.133      | -            | -                | -                | -         |    -1.49 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            6 |     3722 | 2024-08-06 | SovvyKiNG         | W   | 0.092      | 0.500        | -                | 0.177 (0.008)    | 0 (0.000) |     0.66 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            5 |     3749 | 2024-08-05 | Aurora            | W   | 0.086      | 0.500        | 0.017 (0.001)    | -                | 0 (0.000) |     1.03 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            4 |     3826 | 2024-08-03 | BC.Game           | L   | 0.072      | -            | -                | -                | -         |    -0.85 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            3 |     3865 | 2024-08-02 | Insilio           | W   | 0.064      | 0.342        | 0.016 (0.000)    | 0.296 (0.007)    | -         |     1.03 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            2 |     3988 | 2024-07-30 | B8                | L   | 0.046      | -            | -                | -                | -         |    -0.18 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            1 |     4018 | 2024-07-29 | Qiang             | W   | 0.039      | 0.500        | -                | 0.017 (0.000)    | -         |     0.23 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,328.36)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.686 | $12,780.00     | $8,771.54       |
| 2024-10-20 |      0.592 | $2,500.00      | $1,479.21       |
| 2024-08-04 |      0.078 | $1,000.00      | $77.62          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
