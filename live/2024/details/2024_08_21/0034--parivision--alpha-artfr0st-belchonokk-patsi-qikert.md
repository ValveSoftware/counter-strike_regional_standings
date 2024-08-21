### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [34](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [25]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1129.5<br />
<br />
Final Rank Value (1129.5) = Starting Rank Value (1121.9) + Head To Head Adjustments (7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.503[<sup>2</sup>](#table1)
- Opponent Network: 0.292[<sup>2</sup>](#table1)
- LAN Wins: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.364<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1121.9
- 400 + ( ( 0.364 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1121.9


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
|           68 |       12 | 2024-08-21 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -16.70 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           67 |       35 | 2024-08-21 | Enterprise        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           66 |       75 | 2024-08-20 | 9 Pandas          | W   | 1.000      | 0.500        | 0.072 (0.036)    | 0.678 (0.339)    | 0 (0.000) |    15.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           65 |      106 | 2024-08-19 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -3.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           64 |      202 | 2024-08-15 | OG                | L   | 1.000      | -            | -                | -                | -         |   -21.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           63 |      210 | 2024-08-15 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           62 |      218 | 2024-08-15 | Metizport         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           61 |      256 | 2024-08-13 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           60 |      301 | 2024-08-12 | Monte             | W   | 1.000      | 0.500        | -                | 0.435 (0.217)    | 0 (0.000) |     9.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           59 |      386 | 2024-08-09 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           58 |      467 | 2024-08-07 | SINNERS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           57 |      499 | 2024-08-06 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -8.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           56 |      513 | 2024-08-06 | Aurora Young Blud | W   | 1.000      | 0.435        | -                | 0.584 (0.254)    | 0 (0.000) |    11.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           55 |      531 | 2024-08-05 | ENCE              | W   | 1.000      | 0.435        | 0.157 (0.068)    | -                | -         |    23.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |      554 | 2024-08-04 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -29.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |      595 | 2024-08-03 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -25.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |      612 | 2024-08-03 | CYBERSHOKE        | W   | 1.000      | 0.435        | -                | 0.488 (0.212)    | -         |     8.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |      622 | 2024-08-02 | TSM               | W   | 1.000      | 0.500        | -                | 0.715 (0.358)    | -         |    10.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |      663 | 2024-08-01 | 9 Pandas          | W   | 1.000      | 0.500        | 0.072 (0.036)    | 0.678 (0.339)    | -         |    12.40 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |      776 | 2024-07-30 | Permitta          | W   | 1.000      | -            | -                | -                | -         |     8.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |      878 | 2024-07-26 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -8.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |      893 | 2024-07-26 | True Rippers      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |      924 | 2024-07-25 | ENCE              | L   | 1.000      | -            | -                | -                | -         |    -7.52 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      962 | 2024-07-24 | The MongolZ       | W   | 1.000      | 0.650        | 0.995 (0.647)    | 0.655 (0.426)    | 1 (1.000) |    30.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      968 | 2024-07-24 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1642 | 2024-06-14 | Permitta          | L   | 0.744      | -            | -                | -                | -         |   -17.18 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     1744 | 2024-06-10 | RUSH B            | W   | 0.718      | -            | -                | -                | -         |     6.67 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1749 | 2024-06-10 | 3DMAX             | L   | 0.718      | -            | -                | -                | -         |    -3.17 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1755 | 2024-06-10 | SINNERS           | L   | 0.717      | -            | -                | -                | -         |   -12.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1789 | 2024-06-09 | Aurora            | L   | 0.712      | -            | -                | -                | -         |    -3.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1796 | 2024-06-09 | 9 Pandas          | W   | 0.711      | -            | -                | -                | -         |     9.84 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1805 | 2024-06-09 | Monte             | W   | 0.711      | -            | -                | -                | -         |     9.28 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1810 | 2024-06-09 | SAW               | L   | 0.711      | -            | -                | -                | -         |    -2.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2020 | 2024-06-05 | Aurora            | L   | 0.686      | -            | -                | -                | -         |    -2.25 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2070 | 2024-06-04 | Monte             | W   | 0.680      | 0.500        | 0.097 (0.033)    | -                | -         |     9.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2477 | 2024-05-20 | Sangal            | L   | 0.578      | -            | -                | -                | -         |    -7.99 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           32 |     2555 | 2024-05-17 | Zero Tenacity     | W   | 0.560      | 0.500        | 0.139 (0.039)    | 1.000 (0.280)    | -         |     7.88 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           31 |     2586 | 2024-05-16 | Aurora            | L   | 0.554      | -            | -                | -                | -         |    -1.60 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           30 |     2604 | 2024-05-16 | Eternal Fire      | L   | 0.552      | -            | -                | -                | -         |    -0.84 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |     2644 | 2024-05-15 | B8                | W   | 0.546      | 0.500        | 0.170 (0.046)    | 1.000 (0.273)    | -         |     8.18 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |     2827 | 2024-05-09 | Endpoint          | L   | 0.506      | -            | -                | -                | -         |    -9.48 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |     2986 | 2024-05-01 | Passion UA        | L   | 0.452      | -            | -                | -                | -         |    -8.82 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |     3000 | 2024-05-01 | fnatic            | L   | 0.450      | -            | -                | -                | -         |    -2.03 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |     3025 | 2024-04-29 | 3DMAX             | L   | 0.440      | -            | -                | -                | -         |    -0.81 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |     3035 | 2024-04-29 | Zero Tenacity     | W   | 0.438      | 0.500        | 0.139 (0.030)    | 1.000 (0.219)    | -         |     5.81 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |     3072 | 2024-04-27 | Sangal            | W   | 0.425      | 0.500        | 0.277 (0.059)    | -                | -         |     7.78 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |     3100 | 2024-04-26 | SINNERS           | W   | 0.419      | -            | -                | -                | -         |     7.81 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |     3128 | 2024-04-25 | ex-Guild Eagles   | W   | 0.412      | -            | -                | -                | -         |     2.25 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |     3150 | 2024-04-24 | MOUZ NXT          | W   | 0.405      | -            | -                | -                | -         |     5.14 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     3199 | 2024-04-21 | Nexus             | W   | 0.386      | -            | -                | -                | -         |     2.57 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     3202 | 2024-04-21 | B8                | L   | 0.385      | -            | -                | -                | -         |    -7.18 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     3259 | 2024-04-19 | Zero Tenacity     | L   | 0.373      | -            | -                | -                | -         |    -6.74 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           16 |     3358 | 2024-04-17 | HAVU              | W   | 0.360      | -            | -                | -                | -         |     0.91 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           15 |     3359 | 2024-04-17 | Permitta          | L   | 0.359      | -            | -                | -                | -         |    -7.68 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           14 |     3481 | 2024-04-11 | 500               | L   | 0.320      | -            | -                | -                | -         |    -9.16 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           13 |     3520 | 2024-04-10 | Aurora            | L   | 0.313      | -            | -                | -                | -         |    -0.71 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |     3579 | 2024-04-09 | RUSH B            | L   | 0.306      | -            | -                | -                | -         |    -7.63 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |     3751 | 2024-04-03 | MOUZ NXT          | L   | 0.266      | -            | -                | -                | -         |    -5.55 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |     3762 | 2024-04-03 | Space             | W   | 0.265      | -            | -                | -                | -         |     1.20 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     3797 | 2024-04-02 | AMKAL             | L   | 0.259      | -            | -                | -                | -         |    -4.51 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     3806 | 2024-04-02 | Insilio           | L   | 0.258      | -            | -                | -                | -         |    -6.43 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     3817 | 2024-04-01 | Metizport         | W   | 0.252      | -            | -                | -                | -         |     1.13 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     3980 | 2024-03-21 | FORZE             | W   | 0.179      | -            | -                | -                | -         |     0.97 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     4162 | 2024-03-13 | 3DMAX             | W   | 0.126      | 0.500        | 0.519 (0.033)    | -                | -         |     3.74 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     4279 | 2024-03-08 | B8                | W   | 0.092      | -            | -                | -                | -         |     1.16 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     4334 | 2024-03-06 | Apeks             | W   | 0.079      | -            | -                | -                | -         |     0.40 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     4447 | 2024-03-02 | Gaimin Gladiators | L   | 0.052      | -            | -                | -                | -         |    -1.30 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     4478 | 2024-02-29 | Monte             | L   | 0.038      | -            | -                | -                | -         |    -0.76 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,864.89)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      0.713 | $6,500.00      | $4,635.22       |
| 2024-05-02 |      0.459 | $500.00        | $229.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
