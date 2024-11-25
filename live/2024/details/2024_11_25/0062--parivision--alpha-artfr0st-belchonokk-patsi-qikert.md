### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [62](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [47]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1060.4<br />
<br />
Final Rank Value (1060.4) = Starting Rank Value (1021.6) + Head To Head Adjustments (38.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.232[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.311<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1021.6
- 400 + ( ( 0.311 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1021.6


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
|           56 |       77 | 2024-11-22 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.52 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           55 |       97 | 2024-11-21 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -11.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |      105 | 2024-11-20 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -1.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |      430 | 2024-11-07 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -5.25 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |      436 | 2024-11-06 | SINNERS           | W   | 1.000      | 0.426        | 0.090 (0.038)    | 0.885 (0.377)    | 0 (0.000) |    17.12 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |      806 | 2024-10-18 | UNPAID            | L   | 0.948      | -            | -                | -                | -         |   -13.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |      826 | 2024-10-17 | fnatic            | L   | 0.942      | -            | -                | -                | -         |    -7.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |      854 | 2024-10-16 | Sashi             | L   | 0.935      | -            | -                | -                | -         |   -16.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |      861 | 2024-10-16 | Solid             | W   | 0.934      | 0.624        | 0.021 (0.012)    | 0.544 (0.317)    | 1 (0.934) |    10.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |      885 | 2024-10-15 | Aurora            | W   | 0.928      | 0.500        | 0.089 (0.041)    | 0.433 (0.201)    | 0 (0.000) |    15.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |     1113 | 2024-10-05 | 3DMAX             | L   | 0.860      | -            | -                | -                | -         |    -2.86 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |     1186 | 2024-10-03 | Spirit Academy    | W   | 0.846      | 0.435        | 0.066 (0.024)    | 0.702 (0.258)    | 0 (0.000) |    11.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |     1591 | 2024-09-23 | Monte             | L   | 0.780      | -            | -                | -                | -         |   -11.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1897 | 2024-09-12 | GUN5              | L   | 0.708      | -            | -                | -                | -         |   -12.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     1945 | 2024-09-11 | 9INE              | W   | 0.700      | 0.384        | 0.056 (0.015)    | 0.750 (0.202)    | 0 (0.000) |     8.42 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     2147 | 2024-09-04 | Monte             | W   | 0.653      | 0.384        | -                | 0.756 (0.190)    | 0 (0.000) |    10.18 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     2299 | 2024-08-29 | AMKAL             | W   | 0.613      | -            | -                | -                | 0 (0.000) |     5.03 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     2413 | 2024-08-27 | Gaimin Gladiators | L   | 0.600      | -            | -                | -                | -         |   -14.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     2518 | 2024-08-25 | Monte Gen         | L   | 0.589      | -            | -                | -                | -         |   -14.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     2577 | 2024-08-23 | GamerLegion       | W   | 0.574      | -            | -                | -                | 0 (0.000) |    11.71 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     2613 | 2024-08-22 | B8                | W   | 0.566      | 0.143        | 0.168 (0.014)    | -                | -         |    12.97 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2645 | 2024-08-21 | SINNERS           | L   | 0.561      | -            | -                | -                | -         |    -5.74 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2668 | 2024-08-21 | ex-Enterprise     | W   | 0.560      | -            | -                | -                | -         |     6.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2708 | 2024-08-20 | 9 Pandas          | W   | 0.554      | 0.500        | 0.092 (0.025)    | 0.892 (0.247)    | -         |    11.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2739 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.548      | -            | -                | -                | -         |    -3.94 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2835 | 2024-08-15 | OG                | L   | 0.521      | -            | -                | -                | -         |   -10.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2843 | 2024-08-15 | 9INE              | W   | 0.521      | -            | -                | -                | -         |     6.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2851 | 2024-08-15 | Metizport         | W   | 0.520      | -            | -                | -                | -         |    14.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2889 | 2024-08-13 | RUSH B            | W   | 0.509      | -            | -                | -                | -         |     3.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     2934 | 2024-08-12 | Monte             | W   | 0.502      | 0.500        | -                | 0.756 (0.190)    | -         |     8.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3019 | 2024-08-09 | 3DMAX             | L   | 0.481      | -            | -                | -                | -         |    -0.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3100 | 2024-08-07 | SINNERS           | W   | 0.466      | -            | -                | -                | -         |    10.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3132 | 2024-08-06 | Sangal            | L   | 0.461      | -            | -                | -                | -         |    -1.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3146 | 2024-08-06 | Aurora Young Blud | W   | 0.460      | -            | -                | -                | -         |     4.84 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3164 | 2024-08-05 | ENCE              | W   | 0.454      | 0.435        | 0.295 (0.058)    | -                | -         |    12.30 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3187 | 2024-08-04 | Betera            | L   | 0.448      | -            | -                | -                | -         |   -13.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3228 | 2024-08-03 | GUN5              | L   | 0.441      | -            | -                | -                | -         |    -9.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3245 | 2024-08-03 | CYBERSHOKE        | W   | 0.439      | -            | -                | -                | -         |     4.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3255 | 2024-08-02 | TSM               | W   | 0.435      | -            | -                | -                | -         |     5.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3296 | 2024-08-01 | 9 Pandas          | W   | 0.428      | 0.500        | 0.092 (0.020)    | 0.892 (0.191)    | -         |     9.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3409 | 2024-07-30 | Permitta          | W   | 0.413      | -            | -                | -                | -         |    10.72 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3511 | 2024-07-26 | UNPAID            | L   | 0.388      | -            | -                | -                | -         |    -3.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3526 | 2024-07-26 | True Rippers      | W   | 0.386      | -            | -                | -                | 1 (0.386) |     1.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3557 | 2024-07-25 | ENCE              | L   | 0.380      | -            | -                | -                | -         |    -1.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3595 | 2024-07-24 | The MongolZ       | W   | 0.373      | 0.650        | 1.000 (0.243)    | 0.593 (0.144)    | 1 (0.373) |    11.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3601 | 2024-07-24 | Aurora            | L   | 0.372      | -            | -                | -                | -         |    -4.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     4275 | 2024-06-14 | Permitta          | L   | 0.107      | -            | -                | -                | -         |    -0.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     4377 | 2024-06-10 | RUSH B            | W   | 0.080      | -            | -                | -                | -         |     0.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     4382 | 2024-06-10 | 3DMAX             | L   | 0.080      | -            | -                | -                | -         |    -0.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     4388 | 2024-06-10 | SINNERS           | L   | 0.079      | -            | -                | -                | -         |    -0.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     4422 | 2024-06-09 | Aurora            | L   | 0.074      | -            | -                | -                | -         |    -0.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4429 | 2024-06-09 | 9 Pandas          | W   | 0.073      | -            | -                | -                | -         |     1.65 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     4438 | 2024-06-09 | Monte             | W   | 0.073      | -            | -                | -                | -         |     0.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     4443 | 2024-06-09 | SAW               | L   | 0.073      | -            | -                | -                | -         |    -0.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4653 | 2024-06-05 | Aurora            | L   | 0.048      | -            | -                | -                | -         |    -0.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4703 | 2024-06-04 | Monte             | W   | 0.042      | -            | -                | -                | -         |     0.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,083.41)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.961 | $4,000.00      | $3,843.33       |
| 2024-10-06 |      0.869 | $2,000.00      | $1,737.49       |
| 2024-09-26 |      0.801 | $500.00        | $400.62         |
| 2024-08-06 |      0.461 | $10,000.00     | $4,613.29       |
| 2024-06-09 |      0.075 | $6,500.00      | $488.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
