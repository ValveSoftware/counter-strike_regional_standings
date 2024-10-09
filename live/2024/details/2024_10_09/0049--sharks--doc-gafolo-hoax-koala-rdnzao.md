### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [49](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [16]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  1029.7<br />
<br />
Final Rank Value (1029.7) = Starting Rank Value (1004.2) + Head To Head Adjustments (25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.231[<sup>2</sup>](#table1)
- LAN Wins: 0.175[<sup>2</sup>](#table1)

The average of these factors is 0.313<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1004.2
- 400 + ( ( 0.313 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1004.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           91 |       24 | 2024-10-08 | Case              | W   | 1.000      | 0.450        | -                | 0.578 (0.260)    | 0 (0.000) |     9.05 | doc, gafolo, hoax, koala, rdnzao |
|           90 |       30 | 2024-10-08 | Case              | W   | 1.000      | 0.450        | -                | 0.578 (0.260)    | 0 (0.000) |     9.74 | doc, gafolo, hoax, koala, rdnzao |
|           89 |      212 | 2024-10-02 | Solid             | W   | 1.000      | 0.450        | -                | 0.691 (0.311)    | 0 (0.000) |    14.25 | doc, gafolo, hoax, koala, rdnzao |
|           88 |      215 | 2024-10-02 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -17.39 | doc, gafolo, hoax, koala, rdnzao |
|           87 |      262 | 2024-10-01 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -8.66 | doc, gafolo, hoax, koala, rdnzao |
|           86 |      266 | 2024-10-01 | Imperial          | W   | 1.000      | 0.450        | 0.159 (0.071)    | 0.554 (0.249)    | 0 (0.000) |    23.37 | doc, gafolo, hoax, koala, rdnzao |
|           85 |      275 | 2024-10-01 | MIBR              | W   | 1.000      | 0.450        | 0.222 (0.100)    | 0.605 (0.272)    | 0 (0.000) |    26.71 | doc, gafolo, hoax, koala, rdnzao |
|           84 |      277 | 2024-10-01 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -4.33 | doc, gafolo, hoax, koala, rdnzao |
|           83 |      434 | 2024-09-26 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -12.53 | doc, gafolo, hoax, koala, rdnzao |
|           82 |      451 | 2024-09-26 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -6.13 | doc, gafolo, hoax, koala, rdnzao |
|           81 |      488 | 2024-09-25 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -23.19 | doc, gafolo, hoax, koala, rdnzao |
|           80 |      493 | 2024-09-25 | Hype              | W   | 1.000      | 0.450        | -                | 0.403 (0.182)    | 0 (0.000) |     7.81 | doc, gafolo, hoax, koala, rdnzao |
|           79 |      508 | 2024-09-25 | MIBR              | W   | 1.000      | 0.143        | 0.222 (0.032)    | -                | 0 (0.000) |    27.99 | doc, gafolo, hoax, koala, rdnzao |
|           78 |      539 | 2024-09-24 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.15 | doc, gafolo, hoax, koala, rdnzao |
|           77 |      546 | 2024-09-24 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.17 | doc, gafolo, hoax, koala, rdnzao |
|           76 |      971 | 2024-09-10 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -19.40 | doc, gafolo, hoax, koala, rdnzao |
|           75 |      973 | 2024-09-10 | inSanitY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.79 | doc, gafolo, hoax, koala, rdnzao |
|           74 |     1097 | 2024-09-05 | Dusty Roots       | W   | 0.975      | -            | -                | -                | -         |     5.97 | doc, gafolo, hoax, koala, rdnzao |
|           73 |     1098 | 2024-09-05 | Dusty Roots       | W   | 0.975      | -            | -                | -                | -         |     6.30 | doc, gafolo, hoax, koala, rdnzao |
|           72 |     1144 | 2024-09-04 | ODDIK             | L   | 0.969      | -            | -                | -                | -         |   -10.51 | doc, gafolo, hoax, koala, rdnzao |
|           71 |     1184 | 2024-09-03 | inSanitY          | W   | 0.960      | -            | -                | -                | -         |    12.39 | doc, gafolo, hoax, koala, rdnzao |
|           70 |     1204 | 2024-09-02 | Yawara            | W   | 0.956      | -            | -                | -                | -         |     1.72 | doc, gafolo, hoax, koala, rdnzao |
|           69 |     1409 | 2024-08-27 | ODDIK             | L   | 0.914      | -            | -                | -                | -         |   -10.07 | doc, gafolo, koala, pepe, rdnzao |
|           68 |     1467 | 2024-08-26 | W7M               | L   | 0.908      | -            | -                | -                | -         |   -21.99 | doc, gafolo, koala, pepe, rdnzao |
|           67 |     1487 | 2024-08-26 | Hype              | W   | 0.907      | -            | -                | -                | -         |     6.97 | doc, gafolo, koala, pepe, rdnzao |
|           66 |     1818 | 2024-08-16 | ODDIK             | L   | 0.842      | -            | -                | -                | -         |    -9.13 | doc, gafolo, koala, pepe, rdnzao |
|           65 |     1822 | 2024-08-16 | Case              | W   | 0.841      | 0.423        | -                | 0.578 (0.206)    | 1 (0.841) |     8.55 | doc, gafolo, koala, pepe, rdnzao |
|           64 |     1846 | 2024-08-15 | ODDIK             | L   | 0.834      | -            | -                | -                | -         |    -9.38 | doc, gafolo, koala, pepe, rdnzao |
|           63 |     1874 | 2024-08-14 | Case              | W   | 0.829      | 0.423        | -                | 0.578 (0.203)    | 1 (0.829) |     8.30 | doc, gafolo, koala, pepe, rdnzao |
|           62 |     2285 | 2024-08-02 | paiN              | L   | 0.746      | -            | -                | -                | -         |    -1.48 | doc, gafolo, koala, pepe, rdnzao |
|           61 |     2314 | 2024-08-01 | Hype              | W   | 0.741      | -            | -                | -                | -         |     6.45 | doc, gafolo, koala, pepe, rdnzao |
|           60 |     2321 | 2024-08-01 | paiN              | L   | 0.740      | -            | -                | -                | -         |    -1.44 | doc, gafolo, koala, pepe, rdnzao |
|           59 |     2354 | 2024-07-31 | MIBR              | L   | 0.735      | -            | -                | -                | -         |    -3.06 | doc, gafolo, koala, pepe, rdnzao |
|           58 |     2359 | 2024-07-31 | Solid             | W   | 0.734      | 0.371        | -                | 0.691 (0.188)    | -         |     8.12 | doc, gafolo, koala, pepe, rdnzao |
|           57 |     2395 | 2024-07-30 | Hype              | W   | 0.729      | -            | -                | -                | -         |     6.97 | doc, gafolo, koala, pepe, rdnzao |
|           56 |     2474 | 2024-07-28 | Bad News Chickens | W   | 0.714      | -            | -                | -                | -         |     3.60 | doc, gafolo, koala, pepe, rdnzao |
|           55 |     2520 | 2024-07-26 | Imperial          | L   | 0.702      | -            | -                | -                | -         |    -6.74 | doc, gafolo, koala, pepe, rdnzao |
|           54 |     2547 | 2024-07-25 | BESTIA            | W   | 0.696      | -            | -                | -                | -         |    11.52 | doc, gafolo, koala, pepe, rdnzao |
|           53 |     2551 | 2024-07-25 | Patins da Ferrari | W   | 0.696      | -            | -                | -                | -         |     4.22 | doc, gafolo, koala, pepe, rdnzao |
|           52 |     2597 | 2024-07-24 | Bad News Chickens | W   | 0.688      | -            | -                | -                | -         |     3.55 | doc, gafolo, koala, pepe, rdnzao |
|           51 |     2602 | 2024-07-24 | Yawara            | W   | 0.687      | -            | -                | -                | -         |     1.34 | doc, gafolo, koala, pepe, rdnzao |
|           50 |     2624 | 2024-07-23 | ODDIK             | L   | 0.682      | -            | -                | -                | -         |    -8.71 | doc, gafolo, koala, pepe, rdnzao |
|           49 |     2628 | 2024-07-23 | W7M               | W   | 0.682      | -            | -                | -                | -         |     5.12 | doc, gafolo, koala, pepe, rdnzao |
|           48 |     2712 | 2024-07-20 | Fluxo             | L   | 0.662      | -            | -                | -                | -         |    -6.87 | doc, gafolo, koala, pepe, rdnzao |
|           47 |     2764 | 2024-07-19 | Hype              | W   | 0.654      | -            | -                | -                | -         |     7.13 | doc, gafolo, koala, pepe, rdnzao |
|           46 |     2791 | 2024-07-18 | Fluxo             | L   | 0.649      | -            | -                | -                | -         |    -7.30 | doc, gafolo, koala, pepe, rdnzao |
|           45 |     2795 | 2024-07-18 | Fluxo             | L   | 0.648      | -            | -                | -                | -         |    -7.70 | doc, gafolo, koala, pepe, rdnzao |
|           44 |     2856 | 2024-07-17 | ODDIK             | W   | 0.642      | 0.450        | 0.157 (0.045)    | 0.603 (0.174)    | -         |    12.37 | doc, gafolo, koala, pepe, rdnzao |
|           43 |     2868 | 2024-07-17 | ODDIK             | W   | 0.642      | 0.450        | 0.157 (0.045)    | -                | -         |    13.04 | doc, gafolo, koala, pepe, rdnzao |
|           42 |     2919 | 2024-07-16 | RED Canids        | L   | 0.636      | -            | -                | -                | -         |    -4.24 | doc, gafolo, koala, pepe, rdnzao |
|           41 |     2927 | 2024-07-16 | RED Canids        | L   | 0.635      | -            | -                | -                | -         |    -4.41 | doc, gafolo, koala, pepe, rdnzao |
|           40 |     2974 | 2024-07-15 | KRÜ               | L   | 0.629      | -            | -                | -                | -         |   -13.69 | doc, gafolo, koala, pepe, rdnzao |
|           39 |     2978 | 2024-07-15 | KRÜ               | W   | 0.628      | -            | -                | -                | -         |     6.10 | doc, gafolo, koala, pepe, rdnzao |
|           38 |     3048 | 2024-07-11 | Bounty Hunters    | L   | 0.601      | -            | -                | -                | -         |   -12.90 | doc, gafolo, koala, pepe, rdnzao |
|           37 |     3063 | 2024-07-10 | BESTIA            | W   | 0.595      | 0.371        | 0.103 (0.023)    | -                | -         |    10.64 | doc, gafolo, koala, pepe, rdnzao |
|           36 |     3083 | 2024-07-09 | KRÜ               | L   | 0.589      | -            | -                | -                | -         |   -13.28 | doc, gafolo, koala, pepe, rdnzao |
|           35 |     3105 | 2024-07-08 | Patins da Ferrari | W   | 0.582      | -            | -                | -                | -         |     3.73 | doc, gafolo, koala, pepe, rdnzao |
|           34 |     3141 | 2024-06-30 | Patins da Ferrari | L   | 0.528      | -            | -                | -                | -         |   -13.43 | doc, gafolo, koala, pepe, rdnzao |
|           33 |     3155 | 2024-06-28 | KRÜ               | W   | 0.515      | -            | -                | -                | -         |     4.40 | doc, gafolo, koala, pepe, rdnzao |
|           32 |     3156 | 2024-06-28 | Bounty Hunters    | L   | 0.514      | -            | -                | -                | -         |   -12.06 | doc, gafolo, koala, pepe, rdnzao |
|           31 |     3160 | 2024-06-27 | Galorys           | W   | 0.509      | -            | -                | -                | -         |     3.82 | doc, gafolo, koala, pepe, rdnzao |
|           30 |     3163 | 2024-06-27 | inSanitY          | L   | 0.507      | -            | -                | -                | -         |   -10.02 | doc, gafolo, koala, pepe, rdnzao |
|           29 |     3262 | 2024-06-14 | Fluxo             | L   | 0.422      | -            | -                | -                | -         |    -6.64 | doc, gafolo, koala, pepe, rdnzao |
|           28 |     3388 | 2024-06-10 | Vikings KR        | W   | 0.393      | -            | -                | -                | -         |     1.90 | doc, gafolo, koala, pepe, rdnzao |
|           27 |     3417 | 2024-06-09 | paiN              | L   | 0.388      | -            | -                | -                | -         |    -0.78 | doc, gafolo, koala, pepe, rdnzao |
|           26 |     3433 | 2024-06-09 | BESTIA            | W   | 0.387      | 0.450        | 0.103 (0.018)    | -                | -         |     6.52 | doc, gafolo, koala, pepe, rdnzao |
|           25 |     3492 | 2024-06-08 | Hype              | W   | 0.381      | -            | -                | -                | -         |     3.32 | doc, gafolo, koala, pepe, rdnzao |
|           24 |     3501 | 2024-06-08 | Patins da Ferrari | L   | 0.380      | -            | -                | -                | -         |   -10.03 | doc, gafolo, koala, pepe, rdnzao |
|           23 |     3532 | 2024-06-07 | 9z                | L   | 0.375      | -            | -                | -                | -         |    -1.99 | doc, gafolo, koala, pepe, rdnzao |
|           22 |     3590 | 2024-06-06 | paiN              | W   | 0.369      | 0.450        | 0.297 (0.049)    | -                | -         |    10.93 | doc, gafolo, koala, pepe, rdnzao |
|           21 |     3658 | 2024-06-05 | Imperial          | L   | 0.362      | -            | -                | -                | -         |    -3.25 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     3710 | 2024-06-04 | BESTIA            | W   | 0.356      | 0.450        | 0.103 (0.017)    | -                | -         |     6.36 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     4039 | 2024-05-22 | Imperial          | W   | 0.268      | 0.450        | 0.159 (0.019)    | -                | -         |     6.07 | doc, drg, gafolo, pepe, rdnzao   |
|           18 |     4043 | 2024-05-22 | Imperial          | L   | 0.267      | -            | -                | -                | -         |    -2.38 | doc, drg, gafolo, pepe, rdnzao   |
|           17 |     4069 | 2024-05-21 | Case              | L   | 0.262      | -            | -                | -                | -         |    -5.36 | doc, drg, gafolo, pepe, rdnzao   |
|           16 |     4070 | 2024-05-21 | Case              | W   | 0.262      | -            | -                | -                | -         |     2.94 | doc, drg, gafolo, pepe, rdnzao   |
|           15 |     4073 | 2024-05-21 | RED Canids        | W   | 0.262      | -            | -                | -                | -         |     6.38 | doc, drg, gafolo, pepe, rdnzao   |
|           14 |     4077 | 2024-05-21 | RED Canids        | L   | 0.261      | -            | -                | -                | -         |    -1.88 | doc, drg, gafolo, pepe, rdnzao   |
|           13 |     4205 | 2024-05-17 | ODDIK             | L   | 0.234      | -            | -                | -                | -         |    -3.29 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     4233 | 2024-05-16 | W7M               | W   | 0.229      | -            | -                | -                | -         |     1.25 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     4236 | 2024-05-16 | W7M               | W   | 0.228      | -            | -                | -                | -         |     1.26 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     4238 | 2024-05-16 | Hype              | W   | 0.228      | -            | -                | -                | -         |     0.23 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     4278 | 2024-05-15 | Vikings KR        | W   | 0.222      | -            | -                | -                | -         |     1.18 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     4281 | 2024-05-15 | 9z                | L   | 0.222      | -            | -                | -                | -         |    -1.11 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     4345 | 2024-05-14 | Fluxo             | L   | 0.215      | -            | -                | -                | -         |    -3.30 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     4372 | 2024-05-13 | RED Canids        | W   | 0.209      | -            | -                | -                | -         |     5.05 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     4380 | 2024-05-13 | W7M               | W   | 0.207      | -            | -                | -                | -         |     1.19 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     4429 | 2024-05-11 | W7M               | W   | 0.194      | -            | -                | -                | -         |     1.13 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     4468 | 2024-05-09 | BESTIA            | L   | 0.183      | -            | -                | -                | -         |    -2.69 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     4491 | 2024-05-08 | 9z                | L   | 0.176      | -            | -                | -                | -         |    -0.88 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     4529 | 2024-05-06 | BESTIA            | W   | 0.162      | -            | -                | -                | -         |     2.75 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,424.20)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-04 |      0.969 | $1,500.00      | $1,453.97       |
| 2024-08-16 |      0.842 | $9,000.00      | $7,576.00       |
| 2024-08-02 |      0.749 | $750.00        | $561.53         |
| 2024-06-28 |      0.514 | $500.00        | $257.25         |
| 2024-06-16 |      0.435 | $2,500.00      | $1,087.30       |
| 2024-06-10 |      0.396 | $750.00        | $296.76         |
| 2024-06-09 |      0.389 | $5,000.00      | $1,942.83       |
| 2024-05-19 |      0.249 | $1,000.00      | $248.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
