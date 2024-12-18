### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Global Rank: [19](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_18.md)<br />
Regional Rank: [2]( ../../standings_asia_2024_12_18.md)<br />
<br />
Final Rank Value:  1340.1<br />
<br />
Final Rank Value (1340.1) = Starting Rank Value (1325.9) + Head To Head Adjustments (14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.558[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.119[<sup>2</sup>](#table1)
- LAN Wins: 0.856[<sup>2</sup>](#table1)

The average of these factors is 0.483<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1325.9
- 400 + ( ( 0.483 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1325.9


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
|           39 |      296 | 2024-12-02 | MIBR           | L   | 1.000      | -            | -                | -                | -         |   -14.65 | aliStair, dexter, INS, Liazz, Vexite |
|           38 |      315 | 2024-12-02 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -11.69 | aliStair, dexter, INS, Liazz, Vexite |
|           37 |      334 | 2024-11-30 | Liquid         | L   | 1.000      | -            | -                | -                | -         |    -5.89 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      364 | 2024-11-30 | BIG            | W   | 1.000      | 0.143        | 0.216 (0.031)    | 0.526 (0.075)    | 1 (1.000) |    15.99 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      371 | 2024-11-29 | Complexity     | W   | 1.000      | 0.143        | 0.124 (0.018)    | -                | 1 (1.000) |    18.92 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      726 | 2024-11-13 | Lynn Vision    | W   | 0.965      | 0.143        | 0.030 (0.004)    | -                | 1 (0.965) |     3.13 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      736 | 2024-11-12 | DRILLAS        | W   | 0.964      | -            | -                | -                | 1 (0.964) |     2.42 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |      772 | 2024-11-11 | ex-GR          | W   | 0.957      | 0.143        | 0.023 (0.003)    | -                | 1 (0.957) |     1.31 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |      791 | 2024-11-11 | TALON          | L   | 0.952      | -            | -                | -                | -         |   -29.38 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |     1201 | 2024-10-20 | Mindfreak      | W   | 0.804      | 0.333        | -                | 0.207 (0.056)    | -         |     0.71 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     1255 | 2024-10-18 | Mindfreak      | W   | 0.791      | 0.333        | -                | 0.207 (0.055)    | -         |     0.67 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     1498 | 2024-10-06 | BIG            | W   | 0.715      | 0.500        | 0.216 (0.077)    | 0.526 (0.188)    | 1 (0.715) |    12.05 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     1510 | 2024-10-06 | Wildcard       | W   | 0.713      | 0.500        | 0.115 (0.041)    | 0.583 (0.208)    | 1 (0.713) |     9.22 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     1571 | 2024-10-04 | SAW            | W   | 0.701      | 0.500        | 0.258 (0.090)    | 0.594 (0.208)    | 1 (0.701) |    15.04 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     1583 | 2024-10-04 | BetBoom        | W   | 0.699      | 0.500        | 0.108 (0.038)    | 0.502 (0.175)    | 1 (0.699) |     6.65 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1737 | 2024-09-30 | Rooster        | W   | 0.671      | 0.333        | 0.012 (0.003)    | -                | -         |     0.69 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1740 | 2024-09-30 | Rooster        | W   | 0.671      | -            | -                | -                | -         |     0.69 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     1848 | 2024-09-27 | The Art of War | W   | 0.651      | 0.333        | -                | 0.265 (0.057)    | -         |     0.55 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     1851 | 2024-09-27 | The Art of War | W   | 0.651      | 0.333        | -                | 0.265 (0.057)    | -         |     0.56 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     1894 | 2024-09-26 | Housebets      | W   | 0.645      | -            | -                | -                | -         |     0.43 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     1898 | 2024-09-26 | Housebets      | W   | 0.644      | -            | -                | -                | -         |     0.43 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     1950 | 2024-09-25 | Arcade         | W   | 0.638      | -            | -                | -                | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     1954 | 2024-09-25 | Arcade         | W   | 0.638      | -            | -                | -                | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2485 | 2024-09-07 | Sangal         | L   | 0.519      | -            | -                | -                | -         |    -8.17 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2503 | 2024-09-06 | Lynn Vision    | W   | 0.513      | 0.889        | 0.030 (0.013)    | 0.247 (0.113)    | 1 (0.513) |     2.08 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2578 | 2024-09-04 | FaZe           | L   | 0.499      | -            | -                | -                | -         |    -0.87 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2620 | 2024-09-03 | Eternal Fire   | L   | 0.492      | -            | -                | -                | -         |    -4.06 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2705 | 2024-08-30 | Vantage        | W   | 0.464      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2707 | 2024-08-30 | Vantage        | W   | 0.464      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     2936 | 2024-08-26 | MANTRA         | W   | 0.438      | -            | -                | -                | -         |     0.25 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     2946 | 2024-08-26 | MANTRA         | W   | 0.438      | -            | -                | -                | -         |     0.25 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3129 | 2024-08-21 | KZG            | W   | 0.404      | -            | -                | -                | -         |     0.29 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3136 | 2024-08-21 | KZG            | W   | 0.404      | -            | -                | -                | -         |     0.29 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3352 | 2024-08-13 | DXA            | W   | 0.351      | -            | -                | -                | -         |     0.22 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3360 | 2024-08-13 | DXA            | W   | 0.351      | -            | -                | -                | -         |     0.22 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3495 | 2024-08-08 | The MongolZ    | L   | 0.319      | -            | -                | -                | -         |    -0.47 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3543 | 2024-08-07 | BIG            | L   | 0.312      | -            | -                | -                | -         |    -3.61 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     4253 | 2024-07-18 | FURIA          | L   | 0.178      | -            | -                | -                | -         |    -0.98 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     4319 | 2024-07-17 | FaZe           | L   | 0.172      | -            | -                | -                | -         |    -0.26 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,532.89)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      0.804 | $3,250.00      | $2,611.98       |
| 2024-10-06 |      0.715 | $50,000.00     | $35,750.00      |
| 2024-09-22 |      0.621 | $7,000.00      | $4,344.57       |
| 2024-08-09 |      0.327 | $2,500.00      | $818.65         |
| 2024-07-21 |      0.201 | $10,000.00     | $2,007.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
