### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [44](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [29]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  1121.4<br />
<br />
Final Rank Value (1121.4) = Starting Rank Value (1103.0) + Head To Head Adjustments (18.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.449[<sup>1</sup>](#table2)
- Bounty Collected: 0.465[<sup>2</sup>](#table1)
- Opponent Network: 0.266[<sup>2</sup>](#table1)
- LAN Wins: 0.237[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1103.0
- 400 + ( ( 0.354 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1103.0


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
|           57 |      227 | 2024-10-18 | UNPAID            | L   | 1.000      | -            | -                | -                | -         |   -14.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           56 |      247 | 2024-10-17 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -9.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           55 |      275 | 2024-10-16 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -19.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |      282 | 2024-10-16 | Solid             | W   | 1.000      | 0.624        | -                | 0.624 (0.390)    | 1 (1.000) |    10.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |      306 | 2024-10-15 | Aurora            | W   | 1.000      | 0.500        | 0.190 (0.095)    | 0.459 (0.229)    | 0 (0.000) |    16.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |      534 | 2024-10-05 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -4.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |      607 | 2024-10-03 | Spirit Academy    | W   | 1.000      | 0.435        | 0.125 (0.054)    | 0.804 (0.350)    | 0 (0.000) |    13.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |     1012 | 2024-09-23 | Monte             | L   | 0.952      | -            | -                | -                | -         |   -15.03 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |     1318 | 2024-09-12 | GUN5              | L   | 0.880      | -            | -                | -                | -         |   -16.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |     1366 | 2024-09-11 | 9INE              | W   | 0.872      | 0.384        | 0.113 (0.038)    | 0.724 (0.242)    | 0 (0.000) |     9.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |     1568 | 2024-09-04 | Monte             | W   | 0.825      | 0.384        | -                | 0.833 (0.264)    | 0 (0.000) |    12.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |     1720 | 2024-08-29 | AMKAL             | W   | 0.786      | -            | -                | -                | 0 (0.000) |     7.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |     1834 | 2024-08-27 | Gaimin Gladiators | L   | 0.772      | -            | -                | -                | -         |   -19.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |     1939 | 2024-08-25 | Monte Gen         | L   | 0.761      | -            | -                | -                | -         |   -19.33 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1998 | 2024-08-23 | GamerLegion       | W   | 0.746      | 0.143        | 0.280 (0.030)    | -                | 0 (0.000) |    10.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     2034 | 2024-08-22 | B8                | W   | 0.738      | 0.143        | 0.324 (0.034)    | -                | 0 (0.000) |    17.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     2066 | 2024-08-21 | SINNERS           | L   | 0.733      | -            | -                | -                | -         |    -9.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     2089 | 2024-08-21 | ex-Enterprise     | W   | 0.732      | -            | -                | -                | -         |     6.97 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     2129 | 2024-08-20 | 9 Pandas          | W   | 0.726      | 0.500        | 0.077 (0.028)    | 0.723 (0.263)    | -         |    10.84 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     2160 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.720      | -            | -                | -                | -         |    -7.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     2256 | 2024-08-15 | OG                | L   | 0.693      | -            | -                | -                | -         |   -16.42 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     2264 | 2024-08-15 | 9INE              | W   | 0.693      | -            | -                | -                | -         |     7.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2272 | 2024-08-15 | Metizport         | W   | 0.692      | -            | -                | -                | -         |     6.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2310 | 2024-08-13 | RUSH B            | W   | 0.681      | -            | -                | -                | -         |     4.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2355 | 2024-08-12 | Monte             | W   | 0.674      | 0.500        | -                | 0.833 (0.281)    | -         |    10.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2440 | 2024-08-09 | 3DMAX             | L   | 0.653      | -            | -                | -                | -         |    -2.42 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2521 | 2024-08-07 | SINNERS           | W   | 0.639      | -            | -                | -                | -         |    11.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2553 | 2024-08-06 | Sangal            | L   | 0.633      | -            | -                | -                | -         |    -1.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2567 | 2024-08-06 | Aurora Young Blud | W   | 0.632      | -            | -                | -                | -         |     5.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2585 | 2024-08-05 | ENCE              | W   | 0.626      | 0.435        | 0.486 (0.132)    | -                | -         |    17.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     2608 | 2024-08-04 | Betera            | L   | 0.621      | -            | -                | -                | -         |   -18.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     2649 | 2024-08-03 | GUN5              | L   | 0.613      | -            | -                | -                | -         |   -14.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     2666 | 2024-08-03 | CYBERSHOKE        | W   | 0.612      | -            | -                | -                | -         |     5.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     2676 | 2024-08-02 | TSM               | W   | 0.607      | 0.500        | 0.086 (0.026)    | 0.722 (0.219)    | -         |     6.10 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     2717 | 2024-08-01 | 9 Pandas          | W   | 0.601      | 0.500        | 0.077 (0.023)    | 0.723 (0.217)    | -         |     7.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     2830 | 2024-07-30 | Permitta          | W   | 0.585      | -            | -                | -                | -         |     8.99 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     2932 | 2024-07-26 | UNPAID            | L   | 0.560      | -            | -                | -                | -         |    -3.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     2947 | 2024-07-26 | True Rippers      | W   | 0.558      | -            | -                | -                | 1 (0.558) |     1.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     2978 | 2024-07-25 | ENCE              | L   | 0.552      | -            | -                | -                | -         |    -2.19 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3016 | 2024-07-24 | The MongolZ       | W   | 0.545      | 0.650        | 0.698 (0.248)    | 0.592 (0.210)    | 1 (0.545) |    16.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3022 | 2024-07-24 | Aurora            | L   | 0.544      | -            | -                | -                | -         |    -5.65 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3696 | 2024-06-14 | Permitta          | L   | 0.279      | -            | -                | -                | -         |    -3.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3798 | 2024-06-10 | RUSH B            | W   | 0.252      | -            | -                | -                | -         |     1.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3803 | 2024-06-10 | 3DMAX             | L   | 0.252      | -            | -                | -                | -         |    -0.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3809 | 2024-06-10 | SINNERS           | L   | 0.251      | -            | -                | -                | -         |    -2.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3843 | 2024-06-09 | Aurora            | L   | 0.246      | -            | -                | -                | -         |    -2.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3850 | 2024-06-09 | 9 Pandas          | W   | 0.246      | -            | -                | -                | -         |     3.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3859 | 2024-06-09 | Monte             | W   | 0.245      | -            | -                | -                | -         |     1.03 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3864 | 2024-06-09 | SAW               | L   | 0.245      | -            | -                | -                | -         |    -0.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     4074 | 2024-06-05 | Aurora            | L   | 0.221      | -            | -                | -                | -         |    -2.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     4124 | 2024-06-04 | Monte             | W   | 0.214      | -            | -                | -                | -         |     0.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     4531 | 2024-05-20 | Sangal            | L   | 0.112      | -            | -                | -                | -         |    -0.35 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            5 |     4609 | 2024-05-17 | Zero Tenacity     | W   | 0.094      | -            | -                | -                | -         |     1.31 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            4 |     4640 | 2024-05-16 | Aurora            | L   | 0.088      | -            | -                | -                | -         |    -1.01 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            3 |     4658 | 2024-05-16 | Eternal Fire      | L   | 0.086      | -            | -                | -                | -         |    -0.03 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            2 |     4698 | 2024-05-15 | B8                | W   | 0.080      | -            | -                | -                | -         |     2.21 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            1 |     4881 | 2024-05-09 | Endpoint          | L   | 0.040      | -            | -                | -                | -         |    -0.88 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,429.11)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-10-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-26 |      0.973 | $500.00        | $486.70         |
| 2024-08-06 |      0.633 | $10,000.00     | $6,334.78       |
| 2024-06-09 |      0.247 | $6,500.00      | $1,607.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
