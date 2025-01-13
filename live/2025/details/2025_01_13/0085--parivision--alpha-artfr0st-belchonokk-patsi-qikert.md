### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [85](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  920.1<br />
<br />
Final Rank Value (920.1) = Starting Rank Value (876.2) + Head To Head Adjustments (43.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 876.2
- 400 + ( ( 0.240 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 876.2


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
|           46 |      656 | 2024-11-22 | TSM               | L   | 0.852      | -            | -                | -                | -         |   -14.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      676 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.845      | -            | -                | -                | -         |    -8.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      684 | 2024-11-20 | HEROIC            | L   | 0.844      | -            | -                | -                | -         |    -0.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1009 | 2024-11-07 | Nemiga            | L   | 0.752      | -            | -                | -                | -         |    -3.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     1015 | 2024-11-06 | SINNERS           | W   | 0.748      | 0.426        | 0.103 (0.033)    | 0.698 (0.222)    | 0 (0.000) |    16.25 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1385 | 2024-10-18 | UNPAID            | L   | 0.620      | -            | -                | -                | -         |    -7.85 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1405 | 2024-10-17 | fnatic            | L   | 0.614      | -            | -                | -                | -         |    -4.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1433 | 2024-10-16 | Sashi             | L   | 0.608      | -            | -                | -                | -         |    -7.74 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1440 | 2024-10-16 | Solid             | W   | 0.607      | 0.624        | 0.045 (0.017)    | 0.634 (0.240)    | 1 (0.607) |     9.65 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1464 | 2024-10-15 | Aurora            | W   | 0.601      | 0.500        | 0.058 (0.017)    | 0.313 (0.094)    | 0 (0.000) |    10.65 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1692 | 2024-10-05 | 3DMAX             | L   | 0.533      | -            | -                | -                | -         |    -1.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1765 | 2024-10-03 | Spirit Academy    | W   | 0.519      | 0.435        | 0.166 (0.037)    | 0.942 (0.213)    | 0 (0.000) |    10.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2170 | 2024-09-23 | Monte             | L   | 0.453      | -            | -                | -                | -         |    -4.84 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2476 | 2024-09-12 | GUN5              | L   | 0.381      | -            | -                | -                | -         |    -3.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2524 | 2024-09-11 | 9INE              | W   | 0.373      | 0.384        | 0.123 (0.018)    | 1.000 (0.143)    | 0 (0.000) |     7.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2726 | 2024-09-04 | Monte             | W   | 0.326      | 0.384        | 0.078 (0.010)    | 0.594 (0.074)    | 0 (0.000) |     6.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2878 | 2024-08-29 | AMKAL             | W   | 0.286      | -            | -                | -                | 0 (0.000) |     3.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2992 | 2024-08-27 | Gaimin Gladiators | L   | 0.273      | -            | -                | -                | -         |    -4.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     3097 | 2024-08-25 | Monte Gen         | L   | 0.262      | -            | -                | -                | -         |    -5.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3156 | 2024-08-23 | GamerLegion       | W   | 0.247      | 0.143        | 0.200 (0.007)    | -                | 0 (0.000) |     7.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3192 | 2024-08-22 | B8                | W   | 0.239      | -            | -                | -                | -         |     5.94 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3224 | 2024-08-21 | SINNERS           | L   | 0.234      | -            | -                | -                | -         |    -1.67 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3247 | 2024-08-21 | ex-Enterprise     | W   | 0.233      | -            | -                | -                | -         |     3.42 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3287 | 2024-08-20 | 9 Pandas          | W   | 0.227      | 0.500        | 0.156 (0.018)    | 0.797 (0.091)    | -         |     5.65 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3318 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.220      | -            | -                | -                | -         |    -1.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3414 | 2024-08-15 | OG                | L   | 0.194      | -            | -                | -                | -         |    -2.71 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3422 | 2024-08-15 | 9INE              | W   | 0.194      | -            | -                | -                | -         |     3.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3430 | 2024-08-15 | Metizport         | W   | 0.192      | -            | -                | -                | -         |     5.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3468 | 2024-08-13 | RUSH B            | W   | 0.181      | -            | -                | -                | -         |     2.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3513 | 2024-08-12 | Monte             | W   | 0.175      | 0.500        | -                | 0.594 (0.052)    | -         |     3.78 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3598 | 2024-08-09 | 3DMAX             | L   | 0.154      | -            | -                | -                | -         |    -0.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3679 | 2024-08-07 | SINNERS           | W   | 0.139      | -            | -                | -                | -         |     3.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3711 | 2024-08-06 | Sangal            | L   | 0.134      | -            | -                | -                | -         |    -0.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3725 | 2024-08-06 | Aurora Young Blud | W   | 0.132      | 0.435        | -                | 0.841 (0.048)    | -         |     2.52 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3743 | 2024-08-05 | ENCE              | W   | 0.127      | 0.435        | 0.338 (0.019)    | -                | -         |     3.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3766 | 2024-08-04 | Betera            | L   | 0.121      | -            | -                | -                | -         |    -2.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3807 | 2024-08-03 | GUN5              | L   | 0.114      | -            | -                | -                | -         |    -0.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3824 | 2024-08-03 | CYBERSHOKE        | W   | 0.112      | 0.435        | -                | 0.633 (0.031)    | -         |     1.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3834 | 2024-08-02 | TSM               | W   | 0.108      | -            | -                | -                | -         |     1.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3875 | 2024-08-01 | 9 Pandas          | W   | 0.101      | -            | -                | -                | -         |     1.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     3988 | 2024-07-30 | los kogutos       | W   | 0.086      | -            | -                | -                | -         |     2.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4090 | 2024-07-26 | UNPAID            | L   | 0.061      | -            | -                | -                | -         |    -0.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4105 | 2024-07-26 | True Rippers      | W   | 0.059      | -            | -                | -                | 1 (0.059) |     0.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4136 | 2024-07-25 | ENCE              | L   | 0.053      | -            | -                | -                | -         |    -0.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4174 | 2024-07-24 | The MongolZ       | W   | 0.046      | 0.650        | 1.000 (0.030)    | -                | 1 (0.046) |     1.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4180 | 2024-07-24 | Aurora            | L   | 0.045      | -            | -                | -                | -         |    -0.97 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,831.11)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.634 | $5,000.00      | $3,168.61       |
| 2024-10-06 |      0.542 | $2,000.00      | $1,083.27       |
| 2024-09-26 |      0.474 | $500.00        | $237.07         |
| 2024-08-06 |      0.134 | $10,000.00     | $1,342.18       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
