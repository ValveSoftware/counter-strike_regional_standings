### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [88](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [61]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  899.3<br />
<br />
Final Rank Value (899.3) = Starting Rank Value (861.6) + Head To Head Adjustments (37.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.112[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 861.6
- 400 + ( ( 0.233 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 861.6


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
|           46 |      660 | 2024-11-22 | TSM               | L   | 0.823      | -            | -                | -                | -         |   -13.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      680 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.817      | -            | -                | -                | -         |    -7.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      688 | 2024-11-20 | Falcons           | L   | 0.816      | -            | -                | -                | -         |    -0.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1013 | 2024-11-07 | Nemiga            | L   | 0.724      | -            | -                | -                | -         |    -2.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     1019 | 2024-11-06 | SINNERS           | W   | 0.719      | 0.426        | 0.101 (0.031)    | 0.683 (0.209)    | 0 (0.000) |    15.72 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1389 | 2024-10-18 | UNPAID            | L   | 0.592      | -            | -                | -                | -         |    -7.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1409 | 2024-10-17 | fnatic            | L   | 0.586      | -            | -                | -                | -         |    -4.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1437 | 2024-10-16 | Sashi             | L   | 0.580      | -            | -                | -                | -         |    -7.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1444 | 2024-10-16 | Solid             | W   | 0.579      | 0.624        | 0.045 (0.016)    | 0.644 (0.233)    | 1 (0.579) |     9.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1468 | 2024-10-15 | Aurora            | W   | 0.573      | 0.500        | 0.058 (0.017)    | 0.313 (0.090)    | 0 (0.000) |    10.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1696 | 2024-10-05 | 3DMAX             | L   | 0.504      | -            | -                | -                | -         |    -1.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1769 | 2024-10-03 | Spirit Academy    | W   | 0.491      | 0.435        | 0.168 (0.036)    | 0.945 (0.201)    | 0 (0.000) |    10.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2174 | 2024-09-23 | Monte             | L   | 0.424      | -            | -                | -                | -         |    -4.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2480 | 2024-09-12 | GUN5              | L   | 0.353      | -            | -                | -                | -         |    -2.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2528 | 2024-09-11 | 9INE              | W   | 0.344      | 0.384        | 0.125 (0.017)    | 1.000 (0.132)    | 0 (0.000) |     6.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2730 | 2024-09-04 | Monte             | W   | 0.298      | 0.384        | 0.078 (0.009)    | 0.579 (0.066)    | 0 (0.000) |     6.33 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2882 | 2024-08-29 | AMKAL             | W   | 0.258      | 0.384        | -                | 0.275 (0.027)    | 0 (0.000) |     3.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2996 | 2024-08-27 | Gaimin Gladiators | L   | 0.244      | -            | -                | -                | -         |    -3.37 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     3101 | 2024-08-25 | Monte Gen         | L   | 0.233      | -            | -                | -                | -         |    -4.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3160 | 2024-08-23 | GamerLegion       | W   | 0.218      | -            | -                | -                | 0 (0.000) |     2.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3196 | 2024-08-22 | B8                | W   | 0.210      | -            | -                | -                | -         |     5.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3228 | 2024-08-21 | SINNERS           | L   | 0.205      | -            | -                | -                | -         |    -1.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3251 | 2024-08-21 | ex-Enterprise     | W   | 0.204      | -            | -                | -                | -         |     3.10 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3291 | 2024-08-20 | 9 Pandas          | W   | 0.199      | 0.500        | 0.159 (0.016)    | 0.802 (0.080)    | -         |     5.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3322 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.192      | -            | -                | -                | -         |    -1.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3418 | 2024-08-15 | OG                | L   | 0.166      | -            | -                | -                | -         |    -2.21 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3426 | 2024-08-15 | 9INE              | W   | 0.165      | -            | -                | -                | -         |     3.40 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3434 | 2024-08-15 | Metizport         | W   | 0.164      | -            | -                | -                | -         |     4.86 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3472 | 2024-08-13 | RUSH B            | W   | 0.153      | -            | -                | -                | -         |     2.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3517 | 2024-08-12 | Monte             | W   | 0.147      | 0.500        | 0.078 (0.006)    | 0.579 (0.042)    | -         |     3.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3602 | 2024-08-09 | 3DMAX             | L   | 0.126      | -            | -                | -                | -         |    -0.18 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3683 | 2024-08-07 | SINNERS           | W   | 0.111      | -            | -                | -                | -         |     2.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3715 | 2024-08-06 | HEROIC            | L   | 0.106      | -            | -                | -                | -         |    -0.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3729 | 2024-08-06 | Aurora Young Blud | W   | 0.104      | 0.435        | -                | 0.838 (0.038)    | -         |     2.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3747 | 2024-08-05 | ENCE              | W   | 0.098      | 0.435        | 0.337 (0.014)    | -                | -         |     2.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3770 | 2024-08-04 | Betera            | L   | 0.093      | -            | -                | -                | -         |    -2.17 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3811 | 2024-08-03 | GUN5              | L   | 0.086      | -            | -                | -                | -         |    -0.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3828 | 2024-08-03 | CYBERSHOKE        | W   | 0.084      | -            | -                | -                | -         |     1.21 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3838 | 2024-08-02 | TSM               | W   | 0.079      | -            | -                | -                | -         |     1.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3879 | 2024-08-01 | 9 Pandas          | W   | 0.073      | -            | -                | -                | -         |     0.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     3992 | 2024-07-30 | los kogutos       | W   | 0.057      | -            | -                | -                | -         |     1.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4094 | 2024-07-26 | UNPAID            | L   | 0.032      | -            | -                | -                | -         |    -0.30 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4109 | 2024-07-26 | True Rippers      | W   | 0.030      | -            | -                | -                | 1 (0.030) |     0.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4140 | 2024-07-25 | ENCE              | L   | 0.024      | -            | -                | -                | -         |    -0.10 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4178 | 2024-07-24 | The MongolZ       | W   | 0.017      | 0.650        | 1.000 (0.011)    | -                | 1 (0.017) |     0.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4184 | 2024-07-24 | Aurora            | L   | 0.016      | -            | -                | -                | -         |    -0.36 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,332.92)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.605 | $5,000.00      | $3,026.26       |
| 2024-10-06 |      0.513 | $2,000.00      | $1,026.33       |
| 2024-09-26 |      0.446 | $500.00        | $222.83         |
| 2024-08-06 |      0.106 | $10,000.00     | $1,057.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
