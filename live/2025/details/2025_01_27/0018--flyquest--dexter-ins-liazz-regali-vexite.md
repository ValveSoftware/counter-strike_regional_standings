### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [18](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_27.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_01_27.md)<br />
<br />
Final Rank Value:  1315.0<br />
<br />
Final Rank Value (1315.0) = Starting Rank Value (1280.6) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.567[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.758[<sup>2</sup>](#table1)

The average of these factors is 0.450<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1280.6
- 400 + ( ( 0.450 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1280.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      208 | 2025-01-18 | Spirit         | L   | 1.000      | -            | -                | -                | -         |    -0.92 | dexter, INS, Liazz, regali, Vexite   |
|           38 |      226 | 2025-01-14 | MIBR           | W   | 1.000      | 0.143        | 0.205 (0.029)    | 0.598 (0.085)    | -         |    20.07 | dexter, INS, Liazz, regali, Vexite   |
|           37 |      651 | 2024-12-02 | MIBR           | L   | 0.830      | -            | -                | -                | -         |    -9.91 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      670 | 2024-12-02 | paiN           | L   | 0.824      | -            | -                | -                | -         |    -8.82 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      689 | 2024-11-30 | Liquid         | L   | 0.817      | -            | -                | -                | -         |    -4.90 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      719 | 2024-11-30 | BIG            | W   | 0.811      | 0.143        | 0.298 (0.035)    | 0.492 (0.057)    | 1 (0.811) |    14.25 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      726 | 2024-11-29 | Complexity     | W   | 0.810      | 0.143        | 0.110 (0.013)    | 0.279 (0.032)    | 1 (0.810) |    13.22 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |     1081 | 2024-11-13 | Lynn Vision    | W   | 0.698      | 0.143        | 0.031 (0.003)    | 0.383 (0.038)    | 1 (0.698) |     3.10 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |     1091 | 2024-11-12 | Adventurers    | W   | 0.697      | -            | -                | -                | 1 (0.697) |     1.80 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |     1127 | 2024-11-11 | LFO 2          | W   | 0.690      | 0.143        | 0.028 (0.003)    | -                | 1 (0.690) |     1.25 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     1146 | 2024-11-11 | TALON          | L   | 0.686      | -            | -                | -                | -         |   -21.17 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     1556 | 2024-10-20 | Mindfreak      | W   | 0.537      | 0.333        | -                | 0.147 (0.026)    | -         |     0.59 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     1610 | 2024-10-18 | Mindfreak      | W   | 0.524      | -            | -                | -                | -         |     0.56 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     1853 | 2024-10-06 | BIG            | W   | 0.448      | 0.500        | 0.298 (0.067)    | 0.492 (0.110)    | 1 (0.448) |     8.15 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     1865 | 2024-10-06 | Wildcard       | W   | 0.446      | 0.500        | 0.238 (0.053)    | 0.640 (0.143)    | 1 (0.446) |     7.52 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1926 | 2024-10-04 | SAW            | W   | 0.434      | 0.500        | 0.235 (0.051)    | 0.407 (0.088)    | 1 (0.434) |     6.95 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1938 | 2024-10-04 | BetBoom        | W   | 0.432      | 0.500        | 0.227 (0.049)    | 0.524 (0.113)    | 1 (0.432) |     4.46 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     2092 | 2024-09-30 | Rooster        | W   | 0.405      | -            | -                | -                | -         |     0.49 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     2095 | 2024-09-30 | Rooster        | W   | 0.404      | -            | -                | -                | -         |     0.50 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     2203 | 2024-09-27 | The Art of War | W   | 0.384      | -            | -                | -                | -         |     0.36 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     2206 | 2024-09-27 | The Art of War | W   | 0.384      | -            | -                | -                | -         |     0.36 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     2249 | 2024-09-26 | Housebets      | W   | 0.378      | -            | -                | -                | -         |     0.32 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     2253 | 2024-09-26 | Housebets      | W   | 0.378      | -            | -                | -                | -         |     0.32 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2305 | 2024-09-25 | Arcade         | W   | 0.371      | -            | -                | -                | -         |     0.28 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2309 | 2024-09-25 | Arcade         | W   | 0.371      | -            | -                | -                | -         |     0.28 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2840 | 2024-09-07 | HEROIC         | L   | 0.252      | -            | -                | -                | -         |    -4.82 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2858 | 2024-09-06 | Lynn Vision    | W   | 0.247      | 0.889        | 0.031 (0.007)    | 0.383 (0.084)    | 1 (0.247) |     1.27 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2933 | 2024-09-04 | FaZe           | L   | 0.233      | -            | -                | -                | -         |    -0.26 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2975 | 2024-09-03 | Eternal Fire   | L   | 0.225      | -            | -                | -                | -         |    -1.10 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     3060 | 2024-08-30 | Vantage        | W   | 0.198      | -            | -                | -                | -         |     0.08 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     3062 | 2024-08-30 | Vantage        | W   | 0.198      | -            | -                | -                | -         |     0.08 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3291 | 2024-08-26 | MANTRA         | W   | 0.171      | -            | -                | -                | -         |     0.13 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3301 | 2024-08-26 | MANTRA         | W   | 0.171      | -            | -                | -                | -         |     0.13 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3484 | 2024-08-21 | KZG            | W   | 0.138      | -            | -                | -                | -         |     0.12 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3491 | 2024-08-21 | KZG            | W   | 0.138      | -            | -                | -                | -         |     0.12 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3707 | 2024-08-13 | DXA            | W   | 0.085      | -            | -                | -                | -         |     0.07 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3715 | 2024-08-13 | DXA            | W   | 0.084      | -            | -                | -                | -         |     0.07 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3850 | 2024-08-08 | The MongolZ    | L   | 0.052      | -            | -                | -                | -         |    -0.07 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3898 | 2024-08-07 | BIG            | L   | 0.045      | -            | -                | -                | -         |    -0.51 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,111.58)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.832 | $10,000.00     | $8,315.36       |
| 2024-10-20 |      0.537 | $3,250.00      | $1,745.54       |
| 2024-10-06 |      0.448 | $50,000.00     | $22,420.14      |
| 2024-09-22 |      0.354 | $7,000.00      | $2,478.39       |
| 2024-08-09 |      0.061 | $2,500.00      | $152.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
