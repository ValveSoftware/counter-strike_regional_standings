### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [90](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [63]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  891.7<br />
<br />
Final Rank Value (891.7) = Starting Rank Value (855.2) + Head To Head Adjustments (36.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.379[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.108[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 855.2
- 400 + ( ( 0.229 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 855.2


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
|           46 |      669 | 2024-11-22 | TSM               | L   | 0.810      | -            | -                | -                | -         |   -13.40 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      689 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.803      | -            | -                | -                | -         |    -7.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      697 | 2024-11-20 | Falcons           | L   | 0.802      | -            | -                | -                | -         |    -0.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1022 | 2024-11-07 | Nemiga            | L   | 0.710      | -            | -                | -                | -         |    -2.84 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     1028 | 2024-11-06 | SINNERS           | W   | 0.706      | 0.426        | 0.100 (0.030)    | 0.676 (0.203)    | 0 (0.000) |    15.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1398 | 2024-10-18 | UNPAID            | L   | 0.578      | -            | -                | -                | -         |    -7.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1418 | 2024-10-17 | fnatic            | L   | 0.572      | -            | -                | -                | -         |    -4.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1446 | 2024-10-16 | Sashi             | L   | 0.566      | -            | -                | -                | -         |    -6.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1453 | 2024-10-16 | Solid             | W   | 0.565      | 0.624        | 0.046 (0.016)    | 0.649 (0.229)    | 1 (0.565) |     9.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1477 | 2024-10-15 | Aurora            | W   | 0.559      | 0.500        | 0.058 (0.016)    | 0.314 (0.088)    | 0 (0.000) |    10.33 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1705 | 2024-10-05 | 3DMAX             | L   | 0.490      | -            | -                | -                | -         |    -0.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1778 | 2024-10-03 | Spirit Academy    | W   | 0.477      | 0.435        | 0.168 (0.035)    | 0.946 (0.196)    | 0 (0.000) |    10.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2183 | 2024-09-23 | Monte             | L   | 0.411      | -            | -                | -                | -         |    -4.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2489 | 2024-09-12 | GUN5              | L   | 0.339      | -            | -                | -                | -         |    -2.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2537 | 2024-09-11 | 9INE              | W   | 0.331      | 0.384        | 0.125 (0.016)    | 1.000 (0.127)    | 0 (0.000) |     6.70 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2739 | 2024-09-04 | Monte             | W   | 0.284      | 0.384        | 0.078 (0.008)    | 0.572 (0.062)    | 0 (0.000) |     6.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2891 | 2024-08-29 | AMKAL             | W   | 0.244      | 0.384        | -                | 0.276 (0.026)    | 0 (0.000) |     3.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     3005 | 2024-08-27 | Gaimin Gladiators | L   | 0.231      | -            | -                | -                | -         |    -3.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     3110 | 2024-08-25 | Monte Gen         | L   | 0.219      | -            | -                | -                | -         |    -4.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3169 | 2024-08-23 | GamerLegion       | W   | 0.205      | -            | -                | -                | 0 (0.000) |     2.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3205 | 2024-08-22 | B8                | W   | 0.197      | -            | -                | -                | -         |     4.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3237 | 2024-08-21 | SINNERS           | L   | 0.192      | -            | -                | -                | -         |    -1.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3260 | 2024-08-21 | ex-Enterprise     | W   | 0.191      | -            | -                | -                | -         |     2.94 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3300 | 2024-08-20 | 9 Pandas          | W   | 0.185      | 0.500        | 0.160 (0.015)    | 0.804 (0.074)    | -         |     4.71 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3331 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.178      | -            | -                | -                | -         |    -1.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3427 | 2024-08-15 | OG                | L   | 0.152      | -            | -                | -                | -         |    -1.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3435 | 2024-08-15 | 9INE              | W   | 0.152      | -            | -                | -                | -         |     3.17 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3443 | 2024-08-15 | Metizport         | W   | 0.150      | -            | -                | -                | -         |     4.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3481 | 2024-08-13 | RUSH B            | W   | 0.139      | 0.500        | 0.067 (0.005)    | -                | -         |     2.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3526 | 2024-08-12 | Monte             | W   | 0.133      | 0.500        | 0.078 (0.005)    | 0.572 (0.038)    | -         |     2.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3611 | 2024-08-09 | 3DMAX             | L   | 0.112      | -            | -                | -                | -         |    -0.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3692 | 2024-08-07 | SINNERS           | W   | 0.097      | -            | -                | -                | -         |     2.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3724 | 2024-08-06 | HEROIC            | L   | 0.092      | -            | -                | -                | -         |    -0.40 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3738 | 2024-08-06 | Aurora Young Blud | W   | 0.090      | 0.435        | -                | 0.837 (0.033)    | -         |     1.78 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3756 | 2024-08-05 | ENCE              | W   | 0.084      | 0.435        | 0.336 (0.012)    | -                | -         |     2.30 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3779 | 2024-08-04 | Betera            | L   | 0.079      | -            | -                | -                | -         |    -1.84 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3820 | 2024-08-03 | GUN5              | L   | 0.072      | -            | -                | -                | -         |    -0.51 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3837 | 2024-08-03 | CYBERSHOKE        | W   | 0.070      | -            | -                | -                | -         |     1.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3847 | 2024-08-02 | TSM               | W   | 0.066      | -            | -                | -                | -         |     1.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3888 | 2024-08-01 | 9 Pandas          | W   | 0.059      | -            | -                | -                | -         |     0.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     4001 | 2024-07-30 | los kogutos       | W   | 0.044      | -            | -                | -                | -         |     1.21 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4103 | 2024-07-26 | UNPAID            | L   | 0.018      | -            | -                | -                | -         |    -0.17 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4118 | 2024-07-26 | True Rippers      | W   | 0.017      | -            | -                | -                | 1 (0.017) |     0.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4149 | 2024-07-25 | ENCE              | L   | 0.011      | -            | -                | -                | -         |    -0.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4187 | 2024-07-24 | The MongolZ       | W   | 0.004      | -            | -                | -                | 1 (0.004) |     0.12 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4193 | 2024-07-24 | Aurora            | L   | 0.003      | -            | -                | -                | -         |    -0.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,095.44)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.592 | $5,000.00      | $2,958.41       |
| 2024-10-06 |      0.500 | $2,000.00      | $999.19         |
| 2024-09-26 |      0.432 | $500.00        | $216.05         |
| 2024-08-06 |      0.092 | $10,000.00     | $921.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
