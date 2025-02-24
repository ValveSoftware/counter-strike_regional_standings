### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi<br />
Global Rank: [127](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  722.4<br />
<br />
Final Rank Value (722.4) = Starting Rank Value (788.8) + Head To Head Adjustments (-66.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.8
- 400 + ( ( 0.204 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 788.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      407 | 2025-02-08 | Iberian Soul      | L   | 1.000      | -            | -                | -                | -         |   -13.90 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           35 |      485 | 2025-02-05 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -13.24 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           34 |      516 | 2025-02-04 | Iberian Soul      | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.597 (0.085)    | 0 (0.000) |    16.79 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           33 |      586 | 2025-01-27 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -23.30 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           32 |      590 | 2025-01-26 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -13.23 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           31 |      718 | 2024-12-22 | 9INE              | L   | 0.771      | -            | -                | -                | -         |    -7.34 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           30 |      743 | 2024-12-19 | Insilio           | W   | 0.753      | 0.354        | -                | 0.472 (0.126)    | 0 (0.000) |     7.84 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           29 |      751 | 2024-12-19 | Illuminar         | W   | 0.751      | 0.354        | 0.007 (0.002)    | 0.350 (0.093)    | 0 (0.000) |    11.33 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           28 |      759 | 2024-12-18 | Insilio           | L   | 0.745      | -            | -                | -                | -         |   -15.72 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           27 |     1110 | 2024-11-30 | Partizan          | L   | 0.626      | -            | -                | -                | -         |    -3.44 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           26 |     1183 | 2024-11-26 | Nexus             | L   | 0.600      | -            | -                | -                | -         |    -2.56 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           25 |     1213 | 2024-11-24 | ECLOT             | L   | 0.585      | -            | -                | -                | -         |    -3.48 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           24 |     1249 | 2024-11-23 | Sampi             | W   | 0.577      | 0.458        | 0.013 (0.003)    | 0.124 (0.033)    | 1 (0.577) |     9.38 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           23 |     1344 | 2024-11-18 | GamerLegion       | L   | 0.544      | -            | -                | -                | -         |    -0.37 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           22 |     1361 | 2024-11-17 | SAW               | L   | 0.538      | -            | -                | -                | -         |    -0.87 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           21 |     1371 | 2024-11-17 | BetBoom           | L   | 0.536      | -            | -                | -                | -         |    -3.89 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           20 |     1914 | 2024-10-24 | HOTU              | L   | 0.378      | -            | -                | -                | -         |    -7.89 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           19 |     1946 | 2024-10-21 | Johnny Speeds     | L   | 0.358      | -            | -                | -                | -         |    -4.10 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           18 |     2113 | 2024-10-14 | 500               | L   | 0.311      | -            | -                | -                | -         |    -2.73 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           17 |     2288 | 2024-10-07 | NAVI Junior       | L   | 0.264      | -            | -                | -                | -         |    -2.50 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           16 |     2290 | 2024-10-07 | 9INE              | W   | 0.263      | 0.143        | 0.013 (0.000)    | 0.315 (0.012)    | 0 (0.000) |     3.84 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           15 |     2315 | 2024-10-06 | Leo               | L   | 0.257      | -            | -                | -                | -         |    -4.30 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           14 |     2386 | 2024-10-04 | Preasy            | W   | 0.244      | 0.333        | 0.006 (0.000)    | 0.211 (0.017)    | 0 (0.000) |     2.84 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           13 |     2445 | 2024-10-02 | FAVBET            | W   | 0.233      | 0.143        | 0.029 (0.001)    | 0.699 (0.023)    | 0 (0.000) |     3.72 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           12 |     2464 | 2024-10-02 | Viperio           | W   | 0.231      | -            | -                | -                | -         |     2.13 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           11 |     2514 | 2024-10-01 | Partizan          | L   | 0.224      | -            | -                | -                | -         |    -1.21 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           10 |     2649 | 2024-09-27 | WildLotus         | L   | 0.198      | -            | -                | -                | -         |    -3.33 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            9 |     2812 | 2024-09-24 | Dark Cloud        | W   | 0.176      | 0.371        | 0.027 (0.002)    | 0.412 (0.027)    | -         |     2.44 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            8 |     2864 | 2024-09-22 | SINNERS           | W   | 0.165      | 0.346        | 0.028 (0.002)    | 0.546 (0.031)    | 1 (0.165) |     3.39 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            7 |     2885 | 2024-09-21 | SINNERS           | W   | 0.159      | 0.346        | 0.028 (0.002)    | 0.546 (0.030)    | 1 (0.159) |     3.29 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            6 |     2917 | 2024-09-20 | Sampi             | W   | 0.151      | 0.346        | 0.013 (0.001)    | -                | 1 (0.151) |     2.49 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            5 |     2924 | 2024-09-20 | ALTERNATE aTTaX   | L   | 0.150      | -            | -                | -                | -         |    -1.71 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            4 |     3145 | 2024-09-13 | Apogee            | L   | 0.104      | -            | -                | -                | -         |    -2.14 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            3 |     3184 | 2024-09-12 | ex-Enterprise     | L   | 0.097      | -            | -                | -                | -         |    -1.82 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            2 |     3304 | 2024-09-07 | PeeP              | L   | 0.065      | -            | -                | -                | -         |    -1.73 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            1 |     3364 | 2024-09-05 | CPH Wolves        | L   | 0.052      | -            | -                | -                | -         |    -1.12 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,629.85)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.585 | $13,757.00     | $8,047.96       |
| 2024-10-08 |      0.270 | $1,000.00      | $269.98         |
| 2024-09-22 |      0.165 | $7,928.00      | $1,311.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
