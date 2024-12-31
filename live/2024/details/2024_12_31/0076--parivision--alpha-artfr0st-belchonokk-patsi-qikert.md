### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [76](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [55]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  958.7<br />
<br />
Final Rank Value (958.7) = Starting Rank Value (909.6) + Head To Head Adjustments (49.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.160[<sup>2</sup>](#table1)
- LAN Wins: 0.108[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 909.6
- 400 + ( ( 0.262 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 909.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      600 | 2024-11-22 | TSM               | L   | 0.950      | -            | -                | -                | -         |   -16.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      620 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.944      | -            | -                | -                | -         |   -10.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      628 | 2024-11-20 | HEROIC            | L   | 0.943      | -            | -                | -                | -         |    -0.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |      953 | 2024-11-07 | Nemiga            | L   | 0.851      | -            | -                | -                | -         |    -4.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |      959 | 2024-11-06 | SINNERS           | W   | 0.846      | 0.426        | 0.082 (0.029)    | 0.749 (0.270)    | 0 (0.000) |    16.85 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1329 | 2024-10-18 | UNPAID            | L   | 0.719      | -            | -                | -                | -         |    -9.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1349 | 2024-10-17 | fnatic            | L   | 0.713      | -            | -                | -                | -         |    -6.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1377 | 2024-10-16 | Sashi             | L   | 0.707      | -            | -                | -                | -         |   -10.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1384 | 2024-10-16 | Solid             | W   | 0.706      | 0.624        | 0.030 (0.013)    | 0.614 (0.271)    | 1 (0.706) |     9.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1408 | 2024-10-15 | Aurora            | W   | 0.700      | 0.500        | 0.054 (0.019)    | 0.330 (0.116)    | 0 (0.000) |    11.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1636 | 2024-10-05 | 3DMAX             | L   | 0.631      | -            | -                | -                | -         |    -1.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1709 | 2024-10-03 | Spirit Academy    | W   | 0.618      | 0.435        | 0.141 (0.038)    | 0.971 (0.261)    | 0 (0.000) |    11.70 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2114 | 2024-09-23 | Monte             | L   | 0.551      | -            | -                | -                | -         |    -6.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2420 | 2024-09-12 | GUN5              | L   | 0.480      | -            | -                | -                | -         |    -5.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2468 | 2024-09-11 | 9INE              | W   | 0.472      | 0.384        | 0.108 (0.020)    | 1.000 (0.181)    | 0 (0.000) |     7.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2670 | 2024-09-04 | Monte             | W   | 0.425      | 0.384        | 0.070 (0.011)    | 0.674 (0.110)    | 0 (0.000) |     8.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2822 | 2024-08-29 | AMKAL             | W   | 0.385      | -            | -                | -                | 0 (0.000) |     4.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2936 | 2024-08-27 | Gaimin Gladiators | L   | 0.371      | -            | -                | -                | -         |    -6.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     3041 | 2024-08-25 | Monte Gen         | L   | 0.360      | -            | -                | -                | -         |    -7.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3100 | 2024-08-23 | GamerLegion       | W   | 0.345      | -            | -                | -                | 0 (0.000) |     9.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3136 | 2024-08-22 | B8                | W   | 0.338      | -            | -                | -                | -         |     8.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3168 | 2024-08-21 | SINNERS           | L   | 0.333      | -            | -                | -                | -         |    -2.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3191 | 2024-08-21 | ex-Enterprise     | W   | 0.332      | -            | -                | -                | -         |     4.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3231 | 2024-08-20 | 9 Pandas          | W   | 0.326      | 0.500        | 0.103 (0.017)    | 0.811 (0.132)    | -         |     7.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3262 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.319      | -            | -                | -                | -         |    -2.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3358 | 2024-08-15 | OG                | L   | 0.293      | -            | -                | -                | -         |    -4.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3366 | 2024-08-15 | 9INE              | W   | 0.293      | -            | -                | -                | -         |     5.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3374 | 2024-08-15 | Metizport         | W   | 0.291      | -            | -                | -                | -         |     8.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3412 | 2024-08-13 | RUSH B            | W   | 0.280      | -            | -                | -                | -         |     3.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3457 | 2024-08-12 | Monte             | W   | 0.274      | 0.500        | -                | 0.674 (0.092)    | -         |     5.51 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3542 | 2024-08-09 | 3DMAX             | L   | 0.253      | -            | -                | -                | -         |    -0.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3623 | 2024-08-07 | SINNERS           | W   | 0.238      | -            | -                | -                | -         |     5.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3655 | 2024-08-06 | Sangal            | L   | 0.233      | -            | -                | -                | -         |    -1.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3669 | 2024-08-06 | Aurora Young Blud | W   | 0.231      | 0.435        | -                | 0.888 (0.089)    | -         |     3.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3687 | 2024-08-05 | ENCE              | W   | 0.225      | 0.435        | 0.311 (0.030)    | -                | -         |     6.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3710 | 2024-08-04 | Betera            | L   | 0.220      | -            | -                | -                | -         |    -5.49 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3751 | 2024-08-03 | GUN5              | L   | 0.213      | -            | -                | -                | -         |    -2.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3768 | 2024-08-03 | CYBERSHOKE        | W   | 0.211      | -            | -                | -                | -         |     2.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3778 | 2024-08-02 | TSM               | W   | 0.207      | -            | -                | -                | -         |     3.10 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3819 | 2024-08-01 | 9 Pandas          | W   | 0.200      | 0.500        | 0.103 (0.010)    | 0.811 (0.081)    | -         |     4.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     3932 | 2024-07-30 | los kogutos       | W   | 0.185      | -            | -                | -                | -         |     4.93 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4034 | 2024-07-26 | UNPAID            | L   | 0.159      | -            | -                | -                | -         |    -1.49 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4049 | 2024-07-26 | True Rippers      | W   | 0.157      | -            | -                | -                | 1 (0.157) |     0.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4080 | 2024-07-25 | ENCE              | L   | 0.152      | -            | -                | -                | -         |    -0.70 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4118 | 2024-07-24 | The MongolZ       | W   | 0.145      | 0.650        | 1.000 (0.094)    | -                | 1 (0.145) |     4.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4124 | 2024-07-24 | Aurora            | L   | 0.144      | -            | -                | -                | -         |    -3.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,560.65)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.733 | $5,000.00      | $3,662.76       |
| 2024-10-06 |      0.640 | $2,000.00      | $1,280.93       |
| 2024-09-26 |      0.573 | $500.00        | $286.48         |
| 2024-08-06 |      0.233 | $10,000.00     | $2,330.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
