### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [56](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [41]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1066.8<br />
<br />
Final Rank Value (1066.8) = Starting Rank Value (1073.0) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.440[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

The average of these factors is 0.351<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1073.0
- 400 + ( ( 0.351 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1073.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |       69 | 2024-12-14 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -16.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |      103 | 2024-12-12 | DMS               | W   | 1.000      | 0.435        | -                | 0.539 (0.234)    | 0 (0.000) |     9.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |      474 | 2024-11-23 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -10.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |      589 | 2024-11-17 | ENTiTY            | W   | 0.994      | -            | -                | -                | 1 (0.994) |     4.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |      628 | 2024-11-16 | Juggernauts       | W   | 0.985      | -            | -                | -                | 1 (0.985) |     1.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |      780 | 2024-11-11 | Ninjas in Pyjamas | L   | 0.954      | -            | -                | -                | -         |   -13.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |      804 | 2024-11-10 | Gaimin Gladiators | W   | 0.948      | 0.384        | 0.063 (0.023)    | 0.931 (0.339)    | 0 (0.000) |    12.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |      818 | 2024-11-09 | GUN5              | W   | 0.940      | 0.354        | 0.162 (0.054)    | 1.000 (0.333)    | 0 (0.000) |    16.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |      881 | 2024-11-06 | HOTU              | W   | 0.919      | -            | -                | -                | 0 (0.000) |     6.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |      916 | 2024-11-04 | 500               | L   | 0.906      | -            | -                | -                | -         |   -16.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |      956 | 2024-11-02 | los kogutos       | W   | 0.894      | 0.384        | -                | 0.981 (0.337)    | 0 (0.000) |    10.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1046 | 2024-10-29 | OG                | L   | 0.866      | -            | -                | -                | -         |   -15.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1055 | 2024-10-28 | 500               | L   | 0.861      | -            | -                | -                | -         |   -16.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1059 | 2024-10-28 | ECLOT             | L   | 0.859      | -            | -                | -                | -         |   -11.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1061 | 2024-10-28 | Wu-Tang           | W   | 0.859      | -            | -                | -                | 0 (0.000) |     0.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1322 | 2024-10-15 | 9 Pandas          | L   | 0.774      | -            | -                | -                | -         |   -11.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1395 | 2024-10-10 | Aurora            | L   | 0.738      | -            | -                | -                | -         |   -16.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1492 | 2024-10-07 | ECSTATIC          | W   | 0.719      | 0.435        | -                | 1.000 (0.312)    | 0 (0.000) |     7.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1544 | 2024-10-05 | Spirit Academy    | L   | 0.706      | -            | -                | -                | -         |   -13.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1621 | 2024-10-03 | Metizport         | W   | 0.692      | 0.435        | 0.128 (0.038)    | 0.843 (0.254)    | 0 (0.000) |    14.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1706 | 2024-10-01 | FAVBET            | W   | 0.679      | 0.435        | -                | 0.972 (0.287)    | -         |     5.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1940 | 2024-09-25 | 3DMAX             | L   | 0.639      | -            | -                | -                | -         |    -2.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1993 | 2024-09-24 | 3DMAX             | L   | 0.631      | -            | -                | -                | -         |    -2.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     2022 | 2024-09-23 | SINNERS           | W   | 0.627      | -            | -                | -                | -         |     9.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     2028 | 2024-09-23 | Nexus             | W   | 0.626      | 0.435        | 0.326 (0.089)    | 0.848 (0.231)    | -         |    13.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     2052 | 2024-09-22 | CPH Wolves        | L   | 0.618      | -            | -                | -                | -         |   -15.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     2134 | 2024-09-19 | FAVBET            | W   | 0.599      | 0.435        | -                | 0.972 (0.253)    | -         |     5.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     2176 | 2024-09-18 | Monte Gen         | L   | 0.591      | -            | -                | -                | -         |   -14.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     2213 | 2024-09-16 | ECSTATIC          | W   | 0.581      | 0.435        | -                | 1.000 (0.252)    | -         |     5.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     2276 | 2024-09-14 | GamerLegion       | L   | 0.566      | -            | -                | -                | -         |    -5.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     2292 | 2024-09-14 | Rebels            | L   | 0.565      | -            | -                | -                | -         |   -14.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     2314 | 2024-09-13 | 3DMAX             | W   | 0.559      | 0.384        | 0.421 (0.091)    | -                | -         |    15.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     2342 | 2024-09-12 | EYEBALLERS        | W   | 0.553      | -            | -                | -                | -         |     2.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     2379 | 2024-09-11 | Metizport         | W   | 0.546      | 0.384        | 0.128 (0.027)    | -                | -         |    12.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     2433 | 2024-09-09 | Metizport         | W   | 0.532      | 0.384        | 0.128 (0.026)    | -                | -         |    12.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     2447 | 2024-09-08 | B8                | L   | 0.526      | -            | -                | -                | -         |    -6.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     2464 | 2024-09-07 | Nemiga            | W   | 0.521      | 0.435        | 0.455 (0.103)    | -                | -         |    12.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2481 | 2024-09-07 | Cloud9            | L   | 0.519      | -            | -                | -                | -         |    -7.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     2515 | 2024-09-06 | Young Ninjas      | W   | 0.512      | -            | -                | -                | -         |     2.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     2538 | 2024-09-05 | Alliance          | W   | 0.507      | -            | -                | -                | -         |     4.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2582 | 2024-09-04 | ECSTATIC          | W   | 0.499      | -            | -                | -                | -         |     5.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2591 | 2024-09-04 | SINNERS           | W   | 0.498      | -            | -                | -                | -         |     9.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2617 | 2024-09-03 | DASH              | W   | 0.492      | -            | -                | -                | -         |     1.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2658 | 2024-09-01 | 9INE              | W   | 0.480      | -            | -                | -                | -         |     6.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2704 | 2024-08-30 | Nexus             | W   | 0.465      | 0.384        | 0.326 (0.058)    | -                | -         |    12.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2725 | 2024-08-29 | Into the Breach   | W   | 0.460      | -            | -                | -                | -         |     4.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2789 | 2024-08-28 | Rhyno             | W   | 0.452      | 0.384        | 0.152 (0.026)    | -                | -         |    10.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2845 | 2024-08-27 | SINNERS           | L   | 0.446      | -            | -                | -                | -         |    -4.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2970 | 2024-08-25 | los kogutos       | W   | 0.431      | -            | -                | -                | -         |     8.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     3034 | 2024-08-22 | Johnny Speeds     | L   | 0.414      | -            | -                | -                | -         |    -5.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     3042 | 2024-08-22 | Virtus.pro        | L   | 0.413      | -            | -                | -                | -         |    -1.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     3089 | 2024-08-21 | OG                | L   | 0.406      | -            | -                | -                | -         |    -7.80 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3119 | 2024-08-21 | Rebels            | L   | 0.405      | -            | -                | -                | -         |    -9.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3191 | 2024-08-19 | GameAgents        | W   | 0.392      | -            | -                | -                | -         |     0.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3238 | 2024-08-17 | GamerLegion       | L   | 0.378      | -            | -                | -                | -         |    -1.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3251 | 2024-08-16 | EYEBALLERS        | W   | 0.372      | -            | -                | -                | -         |     1.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3328 | 2024-08-13 | 3DMAX             | L   | 0.354      | -            | -                | -                | -         |    -1.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3378 | 2024-08-12 | Sangal            | L   | 0.347      | -            | -                | -                | -         |    -2.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3399 | 2024-08-12 | FAVBET            | L   | 0.345      | -            | -                | -                | -         |    -7.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3516 | 2024-08-07 | EYEBALLERS        | L   | 0.314      | -            | -                | -                | -         |    -8.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3529 | 2024-08-07 | 9 Pandas          | L   | 0.313      | -            | -                | -                | -         |    -4.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3599 | 2024-08-05 | Aurora Young Blud | L   | 0.300      | -            | -                | -                | -         |    -6.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3637 | 2024-08-04 | Into the Breach   | W   | 0.293      | -            | -                | -                | -         |     2.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3791 | 2024-07-31 | KOI               | W   | 0.267      | -            | -                | -                | -         |     2.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3844 | 2024-07-30 | Sashi             | W   | 0.259      | -            | -                | -                | -         |     3.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     4027 | 2024-07-24 | Insilio           | W   | 0.220      | -            | -                | -                | -         |     1.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     4118 | 2024-07-21 | Passion UA        | L   | 0.200      | -            | -                | -                | -         |    -2.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     4145 | 2024-07-20 | B8                | W   | 0.194      | -            | -                | -                | -         |     3.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     4240 | 2024-07-18 | fnatic            | W   | 0.180      | -            | -                | -                | -         |     3.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4356 | 2024-07-16 | Monte             | W   | 0.168      | -            | -                | -                | -         |     2.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4377 | 2024-07-16 | EYEBALLERS        | W   | 0.164      | -            | -                | -                | -         |     0.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,285.15)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-11-24 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-11-17 |      0.994 | $8,038.00      | $7,992.66       |
| 2024-10-20 |      0.806 | $5,000.00      | $4,030.88       |
| 2024-09-15 |      0.574 | $2,000.00      | $1,147.21       |
| 2024-09-14 |      0.567 | $2,000.00      | $1,133.90       |
| 2024-09-08 |      0.527 | $5,000.00      | $2,634.04       |
| 2024-09-07 |      0.519 | $5,000.00      | $2,596.64       |
| 2024-08-25 |      0.434 | $5,000.00      | $2,169.25       |
| 2024-07-22 |      0.206 | $12,500.00     | $2,580.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
