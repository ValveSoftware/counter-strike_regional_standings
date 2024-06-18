### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1447.1<br />
<br />
Final Rank Value (1447.1) = Starting Rank Value (1596.5) + Head To Head Adjustments (-149.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.650[<sup>1</sup>](#table2)
- Bounty Collected: 0.603[<sup>2</sup>](#table1)
- Opponent Network: 0.313[<sup>2</sup>](#table1)
- LAN Wins: 0.789[<sup>2</sup>](#table1)

The average of these factors is 0.589<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1596.5
- 400 + ( ( 0.589 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1596.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |        9 | 2024-06-16 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -12.41 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           60 |       11 | 2024-06-16 | Ninjas in Pyjamas | W   | 1.000      | 0.548        | 0.315 (0.173)    | 0.497 (0.273)    | 1 (1.000) |    23.39 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           59 |       36 | 2024-06-15 | RED Canids        | W   | 1.000      | 0.548        | 0.115 (0.063)    | 0.693 (0.380)    | 1 (1.000) |     7.68 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           58 |       47 | 2024-06-15 | Imperial          | W   | 1.000      | 0.548        | 0.406 (0.223)    | 0.694 (0.381)    | 1 (1.000) |    15.27 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           57 |       77 | 2024-06-14 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -23.23 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           56 |      357 | 2024-06-07 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -8.47 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           55 |      422 | 2024-06-06 | BIG               | W   | 1.000      | 0.715        | 0.225 (0.161)    | 0.433 (0.310)    | 1 (1.000) |    15.38 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           54 |      442 | 2024-06-06 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -12.52 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           53 |      460 | 2024-06-06 | Complexity        | W   | 1.000      | 0.715        | 0.426 (0.305)    | 0.442 (0.316)    | 1 (1.000) |    27.79 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           52 |      490 | 2024-06-05 | Eternal Fire      | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.485 (0.347)    | 1 (1.000) |    27.96 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           51 |      507 | 2024-06-05 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -12.04 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           50 |      591 | 2024-06-02 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -28.26 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           49 |      660 | 2024-05-31 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.77 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           48 |      662 | 2024-05-31 | Sangal            | W   | 1.000      | -            | -                | -                | -         |     5.83 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           47 |      993 | 2024-05-18 | ENCE              | L   | 0.995      | -            | -                | -                | -         |   -15.63 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |     1002 | 2024-05-18 | GamerLegion       | L   | 0.994      | -            | -                | -                | -         |   -20.94 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |     1030 | 2024-05-17 | ENCE              | W   | 0.988      | 0.769        | 0.229 (0.174)    | 0.424 (0.322)    | -         |    14.39 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |     1395 | 2024-05-03 | 9 Pandas          | L   | 0.896      | -            | -                | -                | -         |   -24.62 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           43 |     1422 | 2024-05-02 | Sashi             | L   | 0.889      | -            | -                | -                | -         |   -20.85 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           42 |     1447 | 2024-05-01 | AMKAL             | W   | 0.882      | 0.384        | 0.139 (0.047)    | -                | -         |     5.24 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           41 |     1464 | 2024-05-01 | PARIVISION        | W   | 0.880      | -            | -                | -                | -         |     2.27 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           40 |     1487 | 2024-04-30 | Nexus             | W   | 0.873      | -            | -                | -                | -         |     0.95 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           39 |     1546 | 2024-04-27 | Virtus.pro        | L   | 0.854      | -            | -                | -                | -         |    -5.00 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           38 |     1586 | 2024-04-25 | Eternal Fire      | L   | 0.843      | -            | -                | -                | -         |    -3.58 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           37 |     1609 | 2024-04-24 | 3DMAX             | L   | 0.835      | -            | -                | -                | -         |   -20.61 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           36 |     1633 | 2024-04-23 | Virtus.pro        | W   | 0.828      | 0.889        | 0.345 (0.254)    | 0.427 (0.314)    | 1 (0.828) |    21.25 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           35 |     1787 | 2024-04-18 | KOI               | L   | 0.795      | -            | -                | -                | -         |   -21.25 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           34 |     2042 | 2024-04-09 | Apeks             | L   | 0.736      | -            | -                | -                | -         |   -20.79 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |     2071 | 2024-04-08 | Apeks             | W   | 0.730      | -            | -                | -                | -         |     2.10 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |     2083 | 2024-04-08 | KOI               | W   | 0.728      | -            | -                | -                | -         |     2.91 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     2413 | 2024-03-23 | BetBoom           | L   | 0.621      | -            | -                | -                | -         |    -7.62 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     2446 | 2024-03-21 | 3DMAX             | W   | 0.609      | -            | -                | -                | -         |     2.88 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     2802 | 2024-03-06 | BLEED             | W   | 0.509      | 0.500        | 0.347 (0.088)    | 0.946 (0.241)    | -         |     5.21 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     2834 | 2024-03-05 | Young Ninjas      | W   | 0.503      | -            | -                | -                | -         |     0.40 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     2862 | 2024-03-04 | 3DMAX             | W   | 0.495      | 0.500        | -                | 1.000 (0.247)    | -         |     2.67 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     2878 | 2024-03-03 | Gaimin Gladiators | L   | 0.489      | -            | -                | -                | -         |   -13.03 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     2886 | 2024-03-03 | AURA              | W   | 0.489      | -            | -                | -                | -         |     0.06 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2894 | 2024-03-03 | ex-Preasy         | W   | 0.488      | -            | -                | -                | -         |     0.54 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2931 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.475      | -            | -                | -                | -         |     0.82 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2947 | 2024-02-28 | ex-Preasy         | L   | 0.463      | -            | -                | -                | -         |   -14.13 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     3063 | 2024-02-23 | GamerLegion       | L   | 0.429      | -            | -                | -                | -         |   -12.47 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     3207 | 2024-02-17 | SAW               | L   | 0.388      | -            | -                | -                | -         |    -9.69 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     3243 | 2024-02-16 | KOI               | L   | 0.381      | -            | -                | -                | -         |   -10.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     3266 | 2024-02-15 | AMKAL             | W   | 0.374      | -            | -                | -                | 1 (0.374) |     1.23 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     3294 | 2024-02-14 | Virtus.pro        | L   | 0.369      | -            | -                | -                | -         |    -2.92 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     3303 | 2024-02-14 | BetBoom           | W   | 0.368      | -            | -                | -                | 1 (0.368) |     7.07 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     3374 | 2024-02-09 | 3DMAX             | L   | 0.336      | -            | -                | -                | -         |    -9.23 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     3379 | 2024-02-09 | ex-Sprout         | L   | 0.335      | -            | -                | -                | -         |   -10.51 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     3382 | 2024-02-09 | Endpoint          | W   | 0.334      | -            | -                | -                | -         |     0.25 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     3563 | 2024-01-30 | Insilio           | L   | 0.269      | -            | -                | -                | -         |    -8.25 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     3569 | 2024-01-30 | 500               | W   | 0.269      | -            | -                | -                | -         |     0.07 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     3757 | 2024-01-20 | Gaimin Gladiators | W   | 0.203      | -            | -                | -                | -         |     0.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     3764 | 2024-01-20 | Virtus.pro        | L   | 0.202      | -            | -                | -                | -         |    -1.67 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     3827 | 2024-01-19 | BIG               | W   | 0.195      | -            | -                | -                | -         |     1.87 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     3869 | 2024-01-18 | SINNERS           | W   | 0.189      | -            | -                | -                | -         |     0.40 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     3881 | 2024-01-18 | SAW               | L   | 0.189      | -            | -                | -                | -         |    -4.90 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     4200 | 2024-01-09 | Entropiq          | W   | 0.131      | -            | -                | -                | -         |     0.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     4204 | 2024-01-09 | Enterprise        | L   | 0.130      | -            | -                | -                | -         |    -3.97 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     4214 | 2024-01-09 | Gaimin Gladiators | W   | 0.130      | -            | -                | -                | -         |     0.39 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     4231 | 2024-01-09 | HAVU              | W   | 0.129      | -            | -                | -                | -         |     0.04 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     4249 | 2024-01-09 | PGE Turow         | W   | 0.129      | -            | -                | -                | -         |     0.03 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($87,061.35)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $30,000.00     | $30,000.00      |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |
| 2024-05-04 |      0.902 | $2,000.00      | $1,804.47       |
| 2024-05-02 |      0.889 | $3,500.00      | $3,111.95       |
| 2024-03-06 |      0.509 | $50,000.00     | $25,456.22      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
