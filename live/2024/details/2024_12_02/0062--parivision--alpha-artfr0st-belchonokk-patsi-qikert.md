### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [62](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [47]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1053.2<br />
<br />
Final Rank Value (1053.2) = Starting Rank Value (1008.8) + Head To Head Adjustments (44.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.426[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1008.8
- 400 + ( ( 0.303 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1008.8


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
|           55 |      210 | 2024-11-22 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |      230 | 2024-11-21 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -11.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |      238 | 2024-11-20 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -1.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |      563 | 2024-11-07 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -5.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |      569 | 2024-11-06 | SINNERS           | W   | 1.000      | 0.426        | 0.092 (0.039)    | 0.875 (0.373)    | 0 (0.000) |    17.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |      939 | 2024-10-18 | UNPAID            | L   | 0.900      | -            | -                | -                | -         |   -12.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |      959 | 2024-10-17 | fnatic            | L   | 0.894      | -            | -                | -                | -         |    -7.19 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |      987 | 2024-10-16 | Sashi             | L   | 0.888      | -            | -                | -                | -         |   -15.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |      994 | 2024-10-16 | Solid             | W   | 0.887      | 0.624        | 0.027 (0.015)    | 0.581 (0.322)    | 1 (0.887) |    10.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |     1018 | 2024-10-15 | Aurora            | W   | 0.881      | 0.500        | 0.090 (0.040)    | 0.420 (0.185)    | 0 (0.000) |    14.78 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |     1246 | 2024-10-05 | 3DMAX             | L   | 0.812      | -            | -                | -                | -         |    -2.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |     1319 | 2024-10-03 | Spirit Academy    | W   | 0.799      | 0.435        | 0.067 (0.023)    | 0.745 (0.259)    | 0 (0.000) |    11.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1724 | 2024-09-23 | Monte             | L   | 0.732      | -            | -                | -                | -         |   -10.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     2030 | 2024-09-12 | GUN5              | L   | 0.661      | -            | -                | -                | -         |   -11.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     2078 | 2024-09-11 | 9INE              | W   | 0.652      | 0.384        | 0.056 (0.014)    | 0.743 (0.186)    | 0 (0.000) |     8.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     2280 | 2024-09-04 | Monte             | W   | 0.606      | 0.384        | -                | 0.743 (0.173)    | 0 (0.000) |     9.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     2432 | 2024-08-29 | AMKAL             | W   | 0.566      | -            | -                | -                | 0 (0.000) |     4.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     2546 | 2024-08-27 | Gaimin Gladiators | L   | 0.552      | -            | -                | -                | -         |   -11.94 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     2651 | 2024-08-25 | Monte Gen         | L   | 0.541      | -            | -                | -                | -         |   -13.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     2710 | 2024-08-23 | GamerLegion       | W   | 0.526      | -            | -                | -                | 0 (0.000) |    13.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2746 | 2024-08-22 | B8                | W   | 0.519      | 0.143        | 0.172 (0.013)    | -                | -         |    12.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2778 | 2024-08-21 | SINNERS           | L   | 0.513      | -            | -                | -                | -         |    -4.93 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2801 | 2024-08-21 | ex-Enterprise     | W   | 0.512      | -            | -                | -                | -         |     5.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2841 | 2024-08-20 | 9 Pandas          | W   | 0.507      | 0.500        | 0.099 (0.025)    | 0.899 (0.228)    | -         |    11.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2872 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.500      | -            | -                | -                | -         |    -3.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2968 | 2024-08-15 | OG                | L   | 0.474      | -            | -                | -                | -         |    -8.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2976 | 2024-08-15 | 9INE              | W   | 0.473      | -            | -                | -                | -         |     5.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2984 | 2024-08-15 | Metizport         | W   | 0.472      | -            | -                | -                | -         |    12.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3022 | 2024-08-13 | RUSH B            | W   | 0.461      | -            | -                | -                | -         |     3.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3067 | 2024-08-12 | Monte             | W   | 0.455      | 0.500        | -                | 0.743 (0.169)    | -         |     7.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3152 | 2024-08-09 | 3DMAX             | L   | 0.434      | -            | -                | -                | -         |    -0.84 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3233 | 2024-08-07 | SINNERS           | W   | 0.419      | -            | -                | -                | -         |     9.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3265 | 2024-08-06 | Sangal            | L   | 0.414      | -            | -                | -                | -         |    -1.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3279 | 2024-08-06 | Aurora Young Blud | W   | 0.412      | -            | -                | -                | -         |     4.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3297 | 2024-08-05 | ENCE              | W   | 0.406      | 0.435        | 0.300 (0.053)    | -                | -         |    10.92 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3320 | 2024-08-04 | Betera            | L   | 0.401      | -            | -                | -                | -         |   -10.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3361 | 2024-08-03 | GUN5              | L   | 0.394      | -            | -                | -                | -         |    -7.97 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3378 | 2024-08-03 | CYBERSHOKE        | W   | 0.392      | -            | -                | -                | -         |     3.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3388 | 2024-08-02 | TSM               | W   | 0.388      | -            | -                | -                | -         |     5.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3429 | 2024-08-01 | 9 Pandas          | W   | 0.381      | 0.500        | 0.099 (0.019)    | 0.899 (0.171)    | -         |     8.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3542 | 2024-07-30 | Permitta          | W   | 0.365      | -            | -                | -                | -         |     9.65 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3644 | 2024-07-26 | UNPAID            | L   | 0.340      | -            | -                | -                | -         |    -2.78 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3659 | 2024-07-26 | True Rippers      | W   | 0.338      | -            | -                | -                | 1 (0.338) |     1.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3690 | 2024-07-25 | ENCE              | L   | 0.333      | -            | -                | -                | -         |    -1.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3728 | 2024-07-24 | The MongolZ       | W   | 0.326      | 0.650        | 1.000 (0.212)    | 0.686 (0.145)    | 1 (0.326) |    10.17 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3734 | 2024-07-24 | Aurora            | L   | 0.324      | -            | -                | -                | -         |    -3.79 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     4408 | 2024-06-14 | Permitta          | L   | 0.059      | -            | -                | -                | -         |    -0.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     4510 | 2024-06-10 | RUSH B            | W   | 0.033      | -            | -                | -                | -         |     0.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     4515 | 2024-06-10 | 3DMAX             | L   | 0.032      | -            | -                | -                | -         |    -0.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     4521 | 2024-06-10 | SINNERS           | L   | 0.032      | -            | -                | -                | -         |    -0.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4555 | 2024-06-09 | Aurora            | L   | 0.026      | -            | -                | -                | -         |    -0.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4562 | 2024-06-09 | 9 Pandas          | W   | 0.026      | -            | -                | -                | -         |     0.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4571 | 2024-06-09 | Monte             | W   | 0.026      | -            | -                | -                | -         |     0.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4576 | 2024-06-09 | SAW               | L   | 0.025      | -            | -                | -                | -         |    -0.03 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4786 | 2024-06-05 | Aurora            | L   | 0.001      | -            | -                | -                | -         |    -0.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,906.70)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.913 | $5,000.00      | $4,567.18       |
| 2024-10-06 |      0.821 | $2,000.00      | $1,642.69       |
| 2024-09-26 |      0.754 | $500.00        | $376.92         |
| 2024-08-06 |      0.414 | $10,000.00     | $4,139.32       |
| 2024-06-09 |      0.028 | $6,500.00      | $180.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
