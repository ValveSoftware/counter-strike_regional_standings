### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [87](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [61]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  906.9<br />
<br />
Final Rank Value (906.9) = Starting Rank Value (865.4) + Head To Head Adjustments (41.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.116[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.4
- 400 + ( ( 0.235 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 865.4


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
|           46 |      683 | 2024-11-22 | TSM               | L   | 0.829      | -            | -                | -                | -         |   -13.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      703 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.823      | -            | -                | -                | -         |    -7.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      711 | 2024-11-20 | Falcons           | L   | 0.822      | -            | -                | -                | -         |    -0.30 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1036 | 2024-11-07 | Nemiga            | L   | 0.730      | -            | -                | -                | -         |    -3.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     1042 | 2024-11-06 | SINNERS           | W   | 0.725      | 0.426        | 0.101 (0.031)    | 0.686 (0.212)    | 0 (0.000) |    16.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1412 | 2024-10-18 | UNPAID            | L   | 0.598      | -            | -                | -                | -         |    -7.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1432 | 2024-10-17 | fnatic            | L   | 0.592      | -            | -                | -                | -         |    -4.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1460 | 2024-10-16 | Sashi             | L   | 0.586      | -            | -                | -                | -         |    -7.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1467 | 2024-10-16 | Solid             | W   | 0.585      | 0.624        | 0.045 (0.017)    | 0.691 (0.252)    | 1 (0.585) |     9.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1491 | 2024-10-15 | Aurora            | W   | 0.579      | 0.500        | 0.058 (0.017)    | 0.313 (0.091)    | 0 (0.000) |    10.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1719 | 2024-10-05 | 3DMAX             | L   | 0.510      | -            | -                | -                | -         |    -1.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1792 | 2024-10-03 | Spirit Academy    | W   | 0.497      | 0.435        | 0.168 (0.036)    | 0.944 (0.204)    | 0 (0.000) |    10.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2197 | 2024-09-23 | Monte             | L   | 0.430      | -            | -                | -                | -         |    -4.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2503 | 2024-09-12 | GUN5              | L   | 0.359      | -            | -                | -                | -         |    -2.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2551 | 2024-09-11 | 9INE              | W   | 0.350      | 0.384        | 0.125 (0.017)    | 1.000 (0.135)    | 0 (0.000) |     6.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2753 | 2024-09-04 | Monte             | W   | 0.304      | 0.384        | 0.078 (0.009)    | 0.583 (0.068)    | 0 (0.000) |     6.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2905 | 2024-08-29 | AMKAL             | W   | 0.264      | 0.384        | -                | 0.274 (0.028)    | 0 (0.000) |     3.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     3019 | 2024-08-27 | Gaimin Gladiators | L   | 0.250      | -            | -                | -                | -         |    -3.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     3124 | 2024-08-25 | Monte Gen         | L   | 0.239      | -            | -                | -                | -         |    -4.60 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3183 | 2024-08-23 | GamerLegion       | W   | 0.224      | 0.143        | 0.200 (0.006)    | -                | 0 (0.000) |     6.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3219 | 2024-08-22 | B8                | W   | 0.216      | -            | -                | -                | -         |     5.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3251 | 2024-08-21 | SINNERS           | L   | 0.211      | -            | -                | -                | -         |    -1.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3274 | 2024-08-21 | ex-Enterprise     | W   | 0.210      | -            | -                | -                | -         |     3.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3314 | 2024-08-20 | 9 Pandas          | W   | 0.205      | 0.500        | 0.159 (0.016)    | 0.801 (0.082)    | -         |     5.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3345 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.198      | -            | -                | -                | -         |    -1.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3441 | 2024-08-15 | OG                | L   | 0.172      | -            | -                | -                | -         |    -2.33 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3449 | 2024-08-15 | 9INE              | W   | 0.171      | -            | -                | -                | -         |     3.51 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3457 | 2024-08-15 | Metizport         | W   | 0.170      | -            | -                | -                | -         |     5.03 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3495 | 2024-08-13 | RUSH B            | W   | 0.159      | -            | -                | -                | -         |     2.60 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3540 | 2024-08-12 | Monte             | W   | 0.153      | 0.500        | -                | 0.583 (0.044)    | -         |     3.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3625 | 2024-08-09 | 3DMAX             | L   | 0.132      | -            | -                | -                | -         |    -0.19 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3706 | 2024-08-07 | SINNERS           | W   | 0.117      | -            | -                | -                | -         |     2.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3738 | 2024-08-06 | HEROIC            | L   | 0.112      | -            | -                | -                | -         |    -0.49 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3752 | 2024-08-06 | Aurora Young Blud | W   | 0.110      | 0.435        | -                | 0.839 (0.040)    | -         |     2.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3770 | 2024-08-05 | ENCE              | W   | 0.104      | 0.435        | 0.338 (0.015)    | -                | -         |     2.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3793 | 2024-08-04 | Betera            | L   | 0.099      | -            | -                | -                | -         |    -2.33 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3834 | 2024-08-03 | GUN5              | L   | 0.092      | -            | -                | -                | -         |    -0.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3851 | 2024-08-03 | CYBERSHOKE        | W   | 0.090      | -            | -                | -                | -         |     1.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3861 | 2024-08-02 | TSM               | W   | 0.086      | -            | -                | -                | -         |     1.36 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3902 | 2024-08-01 | 9 Pandas          | W   | 0.079      | -            | -                | -                | -         |     0.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     4015 | 2024-07-30 | los kogutos       | W   | 0.063      | -            | -                | -                | -         |     1.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4117 | 2024-07-26 | UNPAID            | L   | 0.038      | -            | -                | -                | -         |    -0.36 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4132 | 2024-07-26 | True Rippers      | W   | 0.036      | -            | -                | -                | 1 (0.036) |     0.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4163 | 2024-07-25 | ENCE              | L   | 0.031      | -            | -                | -                | -         |    -0.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4201 | 2024-07-24 | The MongolZ       | W   | 0.024      | 0.650        | 1.000 (0.015)    | -                | 1 (0.024) |     0.74 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4207 | 2024-07-24 | Aurora            | L   | 0.022      | -            | -                | -                | -         |    -0.49 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,439.79)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.611 | $5,000.00      | $3,056.80       |
| 2024-10-06 |      0.519 | $2,000.00      | $1,038.54       |
| 2024-09-26 |      0.452 | $500.00        | $225.89         |
| 2024-08-06 |      0.112 | $10,000.00     | $1,118.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
