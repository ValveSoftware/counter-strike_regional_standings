### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [35](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [26]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1244.2<br />
<br />
Final Rank Value (1244.2) = Starting Rank Value (1120.5) + Head To Head Adjustments (123.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.439[<sup>2</sup>](#table1)

The average of these factors is 0.359<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1120.5
- 400 + ( ( 0.359 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1120.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |        9 | 2024-12-02 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -7.17 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           34 |       29 | 2024-11-30 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -7.37 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           33 |       58 | 2024-11-30 | fnatic            | W   | 1.000      | 0.143        | 0.215 (0.031)    | -                | 1 (1.000) |    17.38 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           32 |       63 | 2024-11-29 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -4.11 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           31 |      260 | 2024-11-19 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -3.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           30 |      266 | 2024-11-18 | SINNERS           | W   | 1.000      | 0.143        | 0.092 (0.013)    | 0.875 (0.125)    | 1 (1.000) |    12.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           29 |      279 | 2024-11-17 | Sangal            | W   | 1.000      | 0.143        | 0.178 (0.025)    | -                | 1 (1.000) |    24.16 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           28 |      290 | 2024-11-17 | Nemiga            | W   | 1.000      | 0.143        | 0.490 (0.070)    | 0.784 (0.112)    | 1 (1.000) |    21.86 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           27 |      303 | 2024-11-16 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -2.47 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           26 |      823 | 2024-10-25 | fnatic            | L   | 0.946      | -            | -                | -                | -         |   -11.36 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           25 |      851 | 2024-10-22 | 9z                | W   | 0.927      | 0.477        | 0.084 (0.037)    | 0.269 (0.119)    | 0 (0.000) |    12.31 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |      857 | 2024-10-22 | The MongolZ       | L   | 0.925      | -            | -                | -                | -         |    -1.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |     1075 | 2024-10-11 | Passion UA        | L   | 0.852      | -            | -                | -                | -         |   -12.46 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     2011 | 2024-09-13 | Gaimin Gladiators | L   | 0.666      | -            | -                | -                | -         |   -16.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     2174 | 2024-09-07 | Zero Tenacity     | W   | 0.627      | 0.384        | 0.082 (0.020)    | 0.724 (0.174)    | 0 (0.000) |     7.92 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     2198 | 2024-09-06 | BetBoom           | W   | 0.620      | 0.384        | 0.117 (0.028)    | 0.517 (0.123)    | 0 (0.000) |     9.36 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     2245 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.613      | 0.384        | 0.072 (0.017)    | 0.795 (0.187)    | 0 (0.000) |     8.40 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     2337 | 2024-09-02 | GamerLegion       | W   | 0.593      | 0.384        | 0.126 (0.029)    | 0.660 (0.150)    | 0 (0.000) |    12.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     2419 | 2024-08-29 | Insilio           | W   | 0.567      | 0.384        | -                | 0.622 (0.136)    | 0 (0.000) |     3.42 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     2534 | 2024-08-27 | fnatic            | L   | 0.553      | -            | -                | -                | -         |    -5.61 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     2596 | 2024-08-26 | Eternal Fire      | L   | 0.547      | -            | -                | -                | -         |    -1.43 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     2612 | 2024-08-26 | HEROIC            | W   | 0.546      | 0.143        | 0.628 (0.049)    | -                | -         |    16.31 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     2705 | 2024-08-23 | paiN              | L   | 0.527      | -            | -                | -                | -         |    -1.44 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     2737 | 2024-08-22 | 9 Pandas          | W   | 0.519      | -            | -                | -                | -         |     9.01 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     2793 | 2024-08-21 | Passion UA        | W   | 0.513      | 0.143        | -                | 1.000 (0.073)    | -         |    10.74 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     2824 | 2024-08-21 | Johnny Speeds     | W   | 0.512      | 0.143        | -                | 1.000 (0.073)    | -         |     8.59 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     2859 | 2024-08-19 | 500               | W   | 0.501      | -            | -                | -                | -         |     4.13 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     2865 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.500      | -            | -                | -                | -         |    10.79 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     2870 | 2024-08-19 | UNPAID            | W   | 0.500      | -            | -                | -                | -         |     8.97 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3358 | 2024-08-03 | Johnny Speeds     | L   | 0.394      | -            | -                | -                | -         |    -5.37 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     3387 | 2024-08-02 | UNPAID            | W   | 0.388      | -            | -                | -                | -         |     7.50 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3428 | 2024-08-01 | AMKAL             | W   | 0.381      | -            | -                | -                | -         |     2.87 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3441 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.380      | -            | -                | -                | -         |    -3.76 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3473 | 2024-07-31 | 3DMAX             | L   | 0.375      | -            | -                | -                | -         |    -0.96 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3497 | 2024-07-31 | FaZe              | L   | 0.372      | -            | -                | -                | -         |    -0.60 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,237.69)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-07 |      0.627 | $20,000.00     | $12,531.77      |
| 2024-08-25 |      0.541 | $5,000.00      | $2,705.55       |
| 2024-08-04 |      0.400 | $5,000.00      | $2,000.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
