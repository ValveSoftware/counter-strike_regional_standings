### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [82](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  938.7<br />
<br />
Final Rank Value (938.7) = Starting Rank Value (890.8) + Head To Head Adjustments (48.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.134[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 890.8
- 400 + ( ( 0.248 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 890.8


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
|           46 |      615 | 2024-11-22 | TSM               | L   | 0.898      | -            | -                | -                | -         |   -15.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      635 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.892      | -            | -                | -                | -         |    -9.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      643 | 2024-11-20 | HEROIC            | L   | 0.891      | -            | -                | -                | -         |    -0.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |      968 | 2024-11-07 | Nemiga            | L   | 0.798      | -            | -                | -                | -         |    -3.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |      974 | 2024-11-06 | SINNERS           | W   | 0.794      | 0.426        | 0.082 (0.028)    | 0.682 (0.231)    | 0 (0.000) |    16.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1344 | 2024-10-18 | UNPAID            | L   | 0.667      | -            | -                | -                | -         |    -8.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1364 | 2024-10-17 | fnatic            | L   | 0.661      | -            | -                | -                | -         |    -5.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1392 | 2024-10-16 | Sashi             | L   | 0.654      | -            | -                | -                | -         |    -8.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1399 | 2024-10-16 | Solid             | W   | 0.653      | 0.624        | 0.032 (0.013)    | 0.570 (0.232)    | 1 (0.653) |     9.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1423 | 2024-10-15 | Aurora            | W   | 0.647      | 0.500        | 0.056 (0.018)    | 0.314 (0.102)    | 0 (0.000) |    10.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1651 | 2024-10-05 | 3DMAX             | L   | 0.579      | -            | -                | -                | -         |    -1.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1724 | 2024-10-03 | Spirit Academy    | W   | 0.565      | 0.435        | 0.153 (0.038)    | 0.936 (0.230)    | 0 (0.000) |    11.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2129 | 2024-09-23 | Monte             | L   | 0.499      | -            | -                | -                | -         |    -5.74 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2435 | 2024-09-12 | GUN5              | L   | 0.427      | -            | -                | -                | -         |    -4.18 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2483 | 2024-09-11 | 9INE              | W   | 0.419      | 0.384        | 0.115 (0.019)    | 1.000 (0.161)    | 0 (0.000) |     7.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2685 | 2024-09-04 | Monte             | W   | 0.372      | 0.384        | 0.073 (0.010)    | 0.619 (0.089)    | 0 (0.000) |     7.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2837 | 2024-08-29 | AMKAL             | W   | 0.333      | -            | -                | -                | 0 (0.000) |     4.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2951 | 2024-08-27 | Gaimin Gladiators | L   | 0.319      | -            | -                | -                | -         |    -5.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     3056 | 2024-08-25 | Monte Gen         | L   | 0.308      | -            | -                | -                | -         |    -6.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3115 | 2024-08-23 | GamerLegion       | W   | 0.293      | -            | -                | -                | 0 (0.000) |     8.49 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3151 | 2024-08-22 | B8                | W   | 0.285      | -            | -                | -                | -         |     6.93 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3183 | 2024-08-21 | SINNERS           | L   | 0.280      | -            | -                | -                | -         |    -2.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3206 | 2024-08-21 | ex-Enterprise     | W   | 0.279      | -            | -                | -                | -         |     3.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3246 | 2024-08-20 | 9 Pandas          | W   | 0.273      | 0.500        | 0.108 (0.015)    | 0.754 (0.103)    | -         |     6.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3277 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.267      | -            | -                | -                | -         |    -1.99 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3373 | 2024-08-15 | OG                | L   | 0.240      | -            | -                | -                | -         |    -3.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3381 | 2024-08-15 | 9INE              | W   | 0.240      | -            | -                | -                | -         |     4.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3389 | 2024-08-15 | Metizport         | W   | 0.239      | -            | -                | -                | -         |     6.93 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3427 | 2024-08-13 | RUSH B            | W   | 0.228      | -            | -                | -                | -         |     3.37 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3472 | 2024-08-12 | Monte             | W   | 0.221      | 0.500        | 0.073 (0.008)    | 0.619 (0.069)    | -         |     4.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3557 | 2024-08-09 | 3DMAX             | L   | 0.200      | -            | -                | -                | -         |    -0.30 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3638 | 2024-08-07 | SINNERS           | W   | 0.186      | -            | -                | -                | -         |     4.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3670 | 2024-08-06 | Sangal            | L   | 0.180      | -            | -                | -                | -         |    -0.79 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3684 | 2024-08-06 | Aurora Young Blud | W   | 0.179      | 0.435        | -                | 0.847 (0.066)    | -         |     3.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3702 | 2024-08-05 | ENCE              | W   | 0.173      | 0.435        | 0.324 (0.024)    | -                | -         |     4.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3725 | 2024-08-04 | Betera            | L   | 0.168      | -            | -                | -                | -         |    -4.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3766 | 2024-08-03 | GUN5              | L   | 0.160      | -            | -                | -                | -         |    -1.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3783 | 2024-08-03 | CYBERSHOKE        | W   | 0.159      | -            | -                | -                | -         |     2.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3793 | 2024-08-02 | TSM               | W   | 0.154      | -            | -                | -                | -         |     2.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3834 | 2024-08-01 | 9 Pandas          | W   | 0.148      | 0.500        | -                | 0.754 (0.056)    | -         |     3.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     3947 | 2024-07-30 | los kogutos       | W   | 0.132      | -            | -                | -                | -         |     3.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4049 | 2024-07-26 | UNPAID            | L   | 0.107      | -            | -                | -                | -         |    -1.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4064 | 2024-07-26 | True Rippers      | W   | 0.105      | -            | -                | -                | 1 (0.105) |     0.33 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4095 | 2024-07-25 | ENCE              | L   | 0.099      | -            | -                | -                | -         |    -0.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4133 | 2024-07-24 | The MongolZ       | W   | 0.092      | 0.650        | 1.000 (0.060)    | -                | 1 (0.092) |     2.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4139 | 2024-07-24 | Aurora            | L   | 0.091      | -            | -                | -                | -         |    -1.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,640.14)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.680 | $5,000.00      | $3,399.76       |
| 2024-10-06 |      0.588 | $2,000.00      | $1,175.73       |
| 2024-09-26 |      0.520 | $500.00        | $260.18         |
| 2024-08-06 |      0.180 | $10,000.00     | $1,804.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
