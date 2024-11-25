### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [60](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_25.md)<br />
Regional Rank: [15]( ../../standings_americas_2024_11_25.md)<br />
<br />
Final Rank Value:  1087.0<br />
<br />
Final Rank Value (1087.0) = Starting Rank Value (1079.2) + Head To Head Adjustments (7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.462[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.335[<sup>2</sup>](#table1)

The average of these factors is 0.339<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1079.2
- 400 + ( ( 0.339 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1079.2


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
|           80 |       53 | 2024-11-22 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -9.62 | doc, gafolo, hoax, koala, rdnzao |
|           79 |      374 | 2024-11-09 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -10.38 | doc, gafolo, hoax, koala, rdnzao |
|           78 |      381 | 2024-11-09 | Solid             | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.544 (0.202)    | 0 (0.000) |    11.43 | doc, gafolo, hoax, koala, rdnzao |
|           77 |      400 | 2024-11-08 | GameHunters       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.37 | doc, gafolo, hoax, koala, rdnzao |
|           76 |      414 | 2024-11-07 | MIBR Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.50 | doc, gafolo, hoax, koala, rdnzao |
|           75 |      626 | 2024-10-27 | ODDIK             | W   | 1.000      | 0.364        | 0.097 (0.035)    | 0.500 (0.182)    | 1 (1.000) |    14.16 | doc, gafolo, hoax, koala, rdnzao |
|           74 |      647 | 2024-10-26 | Fluxo             | W   | 1.000      | 0.364        | 0.089 (0.032)    | 0.639 (0.232)    | 1 (1.000) |    22.33 | doc, gafolo, hoax, koala, rdnzao |
|           73 |      852 | 2024-10-16 | Imperial          | L   | 0.936      | -            | -                | -                | -         |    -8.00 | doc, gafolo, hoax, koala, rdnzao |
|           72 |     1008 | 2024-10-08 | Case              | W   | 0.883      | 0.450        | -                | 0.413 (0.164)    | 0 (0.000) |     6.94 | doc, gafolo, hoax, koala, rdnzao |
|           71 |     1014 | 2024-10-08 | Case              | W   | 0.882      | 0.450        | -                | 0.413 (0.164)    | 0 (0.000) |     7.36 | doc, gafolo, hoax, koala, rdnzao |
|           70 |     1196 | 2024-10-02 | Solid             | W   | 0.843      | 0.450        | 0.021 (0.008)    | 0.544 (0.206)    | 0 (0.000) |    11.27 | doc, gafolo, hoax, koala, rdnzao |
|           69 |     1199 | 2024-10-02 | Solid             | L   | 0.843      | -            | -                | -                | -         |   -15.59 | doc, gafolo, hoax, koala, rdnzao |
|           68 |     1246 | 2024-10-01 | Imperial          | L   | 0.836      | -            | -                | -                | -         |    -7.04 | doc, gafolo, hoax, koala, rdnzao |
|           67 |     1250 | 2024-10-01 | Imperial          | W   | 0.836      | 0.450        | 0.124 (0.047)    | 0.583 (0.219)    | -         |    19.79 | doc, gafolo, hoax, koala, rdnzao |
|           66 |     1259 | 2024-10-01 | MIBR              | W   | 0.835      | 0.450        | 0.140 (0.053)    | 0.515 (0.194)    | -         |    22.58 | doc, gafolo, hoax, koala, rdnzao |
|           65 |     1261 | 2024-10-01 | MIBR              | L   | 0.835      | -            | -                | -                | -         |    -3.48 | doc, gafolo, hoax, koala, rdnzao |
|           64 |     1418 | 2024-09-26 | BESTIA            | L   | 0.803      | -            | -                | -                | -         |   -10.13 | doc, gafolo, hoax, koala, rdnzao |
|           63 |     1435 | 2024-09-26 | Imperial          | L   | 0.801      | -            | -                | -                | -         |    -5.00 | doc, gafolo, hoax, koala, rdnzao |
|           62 |     1472 | 2024-09-25 | Hype              | L   | 0.796      | -            | -                | -                | -         |   -19.73 | doc, gafolo, hoax, koala, rdnzao |
|           61 |     1477 | 2024-09-25 | Hype              | W   | 0.796      | 0.450        | -                | 0.335 (0.120)    | -         |     5.14 | doc, gafolo, hoax, koala, rdnzao |
|           60 |     1492 | 2024-09-25 | MIBR              | W   | 0.795      | 0.143        | 0.140 (0.016)    | -                | -         |    22.27 | doc, gafolo, hoax, koala, rdnzao |
|           59 |     1523 | 2024-09-24 | paiN              | L   | 0.790      | -            | -                | -                | -         |    -1.17 | doc, gafolo, hoax, koala, rdnzao |
|           58 |     1530 | 2024-09-24 | paiN              | L   | 0.789      | -            | -                | -                | -         |    -1.19 | doc, gafolo, hoax, koala, rdnzao |
|           57 |     1955 | 2024-09-10 | inSanitY          | L   | 0.696      | -            | -                | -                | -         |   -15.64 | doc, gafolo, hoax, koala, rdnzao |
|           56 |     1957 | 2024-09-10 | inSanitY          | W   | 0.696      | -            | -                | -                | -         |     6.21 | doc, gafolo, hoax, koala, rdnzao |
|           55 |     2081 | 2024-09-05 | Argentina         | W   | 0.663      | 0.450        | -                | 0.347 (0.103)    | -         |     4.75 | doc, gafolo, hoax, koala, rdnzao |
|           54 |     2082 | 2024-09-05 | Argentina         | W   | 0.662      | -            | -                | -                | -         |     4.95 | doc, gafolo, hoax, koala, rdnzao |
|           53 |     2128 | 2024-09-04 | ODDIK             | L   | 0.656      | -            | -                | -                | -         |    -8.80 | doc, gafolo, hoax, koala, rdnzao |
|           52 |     2168 | 2024-09-03 | inSanitY          | W   | 0.648      | -            | -                | -                | -         |     6.10 | doc, gafolo, hoax, koala, rdnzao |
|           51 |     2188 | 2024-09-02 | Yawara            | W   | 0.643      | -            | -                | -                | -         |     2.21 | doc, gafolo, hoax, koala, rdnzao |
|           50 |     2393 | 2024-08-27 | ODDIK             | L   | 0.602      | -            | -                | -                | -         |    -8.32 | doc, gafolo, koala, pepe, rdnzao |
|           49 |     2451 | 2024-08-26 | W7M               | L   | 0.595      | -            | -                | -                | -         |   -16.00 | doc, gafolo, koala, pepe, rdnzao |
|           48 |     2471 | 2024-08-26 | Hype              | W   | 0.594      | -            | -                | -                | -         |     3.51 | doc, gafolo, koala, pepe, rdnzao |
|           47 |     2802 | 2024-08-16 | ODDIK             | L   | 0.529      | -            | -                | -                | -         |    -7.41 | doc, gafolo, koala, pepe, rdnzao |
|           46 |     2806 | 2024-08-16 | Case              | W   | 0.528      | -            | -                | -                | 1 (0.528) |     4.18 | doc, gafolo, koala, pepe, rdnzao |
|           45 |     2830 | 2024-08-15 | ODDIK             | L   | 0.522      | -            | -                | -                | -         |    -7.55 | doc, gafolo, koala, pepe, rdnzao |
|           44 |     2858 | 2024-08-14 | Case              | W   | 0.516      | -            | -                | -                | 1 (0.516) |     3.99 | doc, gafolo, koala, pepe, rdnzao |
|           43 |     3269 | 2024-08-02 | paiN              | L   | 0.434      | -            | -                | -                | -         |    -0.94 | doc, gafolo, koala, pepe, rdnzao |
|           42 |     3298 | 2024-08-01 | Hype              | W   | 0.428      | -            | -                | -                | -         |     2.65 | doc, gafolo, koala, pepe, rdnzao |
|           41 |     3305 | 2024-08-01 | paiN              | L   | 0.428      | -            | -                | -                | -         |    -0.92 | doc, gafolo, koala, pepe, rdnzao |
|           40 |     3338 | 2024-07-31 | MIBR              | L   | 0.422      | -            | -                | -                | -         |    -1.79 | doc, gafolo, koala, pepe, rdnzao |
|           39 |     3343 | 2024-07-31 | Solid             | W   | 0.422      | -            | -                | -                | -         |     4.18 | doc, gafolo, koala, pepe, rdnzao |
|           38 |     3379 | 2024-07-30 | Hype              | W   | 0.417      | -            | -                | -                | -         |     2.68 | doc, gafolo, koala, pepe, rdnzao |
|           37 |     3458 | 2024-07-28 | Bad News Chickens | W   | 0.402      | -            | -                | -                | -         |     1.46 | doc, gafolo, koala, pepe, rdnzao |
|           36 |     3504 | 2024-07-26 | Imperial          | L   | 0.389      | -            | -                | -                | -         |    -3.38 | doc, gafolo, koala, pepe, rdnzao |
|           35 |     3531 | 2024-07-25 | BESTIA            | W   | 0.383      | -            | -                | -                | -         |     6.79 | doc, gafolo, koala, pepe, rdnzao |
|           34 |     3535 | 2024-07-25 | Patins da Ferrari | W   | 0.383      | -            | -                | -                | -         |     1.15 | doc, gafolo, koala, pepe, rdnzao |
|           33 |     3581 | 2024-07-24 | Bad News Chickens | W   | 0.375      | -            | -                | -                | -         |     1.37 | doc, gafolo, koala, pepe, rdnzao |
|           32 |     3586 | 2024-07-24 | Yawara            | W   | 0.374      | -            | -                | -                | -         |     1.28 | doc, gafolo, koala, pepe, rdnzao |
|           31 |     3608 | 2024-07-23 | ODDIK             | L   | 0.370      | -            | -                | -                | -         |    -5.95 | doc, gafolo, koala, pepe, rdnzao |
|           30 |     3612 | 2024-07-23 | W7M               | W   | 0.369      | -            | -                | -                | -         |     1.58 | doc, gafolo, koala, pepe, rdnzao |
|           29 |     3696 | 2024-07-20 | Fluxo             | L   | 0.349      | -            | -                | -                | -         |    -3.82 | doc, gafolo, koala, pepe, rdnzao |
|           28 |     3748 | 2024-07-19 | Hype              | W   | 0.341      | -            | -                | -                | -         |     2.24 | doc, gafolo, koala, pepe, rdnzao |
|           27 |     3775 | 2024-07-18 | Fluxo             | L   | 0.336      | -            | -                | -                | -         |    -3.82 | doc, gafolo, koala, pepe, rdnzao |
|           26 |     3779 | 2024-07-18 | Fluxo             | L   | 0.336      | -            | -                | -                | -         |    -3.93 | doc, gafolo, koala, pepe, rdnzao |
|           25 |     3840 | 2024-07-17 | ODDIK             | W   | 0.330      | 0.450        | 0.097 (0.014)    | -                | -         |     5.11 | doc, gafolo, koala, pepe, rdnzao |
|           24 |     3852 | 2024-07-17 | ODDIK             | W   | 0.329      | 0.450        | 0.097 (0.014)    | -                | -         |     5.25 | doc, gafolo, koala, pepe, rdnzao |
|           23 |     3903 | 2024-07-16 | RED Canids        | L   | 0.323      | -            | -                | -                | -         |    -2.55 | doc, gafolo, koala, pepe, rdnzao |
|           22 |     3911 | 2024-07-16 | RED Canids        | L   | 0.323      | -            | -                | -                | -         |    -2.61 | doc, gafolo, koala, pepe, rdnzao |
|           21 |     3958 | 2024-07-15 | KRÜ               | L   | 0.316      | -            | -                | -                | -         |    -7.63 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     3962 | 2024-07-15 | KRÜ               | W   | 0.316      | -            | -                | -                | -         |     2.35 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     4032 | 2024-07-11 | Bounty Hunters    | L   | 0.289      | -            | -                | -                | -         |    -7.66 | doc, gafolo, koala, pepe, rdnzao |
|           18 |     4047 | 2024-07-10 | BESTIA            | W   | 0.283      | 0.371        | 0.114 (0.012)    | -                | -         |     5.25 | doc, gafolo, koala, pepe, rdnzao |
|           17 |     4067 | 2024-07-09 | KRÜ               | L   | 0.276      | -            | -                | -                | -         |    -6.77 | doc, gafolo, koala, pepe, rdnzao |
|           16 |     4089 | 2024-07-08 | Patins da Ferrari | W   | 0.269      | -            | -                | -                | -         |     0.75 | doc, gafolo, koala, pepe, rdnzao |
|           15 |     4125 | 2024-06-30 | Patins da Ferrari | L   | 0.216      | -            | -                | -                | -         |    -6.09 | doc, gafolo, koala, pepe, rdnzao |
|           14 |     4139 | 2024-06-28 | KRÜ               | W   | 0.203      | -            | -                | -                | -         |     1.38 | doc, gafolo, koala, pepe, rdnzao |
|           13 |     4140 | 2024-06-28 | Bounty Hunters    | L   | 0.202      | -            | -                | -                | -         |    -5.50 | doc, gafolo, koala, pepe, rdnzao |
|           12 |     4144 | 2024-06-27 | Galorys           | W   | 0.197      | -            | -                | -                | -         |     0.87 | doc, gafolo, koala, pepe, rdnzao |
|           11 |     4147 | 2024-06-27 | inSanitY          | L   | 0.195      | -            | -                | -                | -         |    -4.79 | doc, gafolo, koala, pepe, rdnzao |
|           10 |     4246 | 2024-06-14 | Fluxo             | L   | 0.109      | -            | -                | -                | -         |    -1.49 | doc, gafolo, koala, pepe, rdnzao |
|            9 |     4372 | 2024-06-10 | Vikings KR        | W   | 0.081      | -            | -                | -                | -         |     0.31 | doc, gafolo, koala, pepe, rdnzao |
|            8 |     4401 | 2024-06-09 | paiN              | L   | 0.075      | -            | -                | -                | -         |    -0.18 | doc, gafolo, koala, pepe, rdnzao |
|            7 |     4417 | 2024-06-09 | BESTIA            | W   | 0.074      | -            | -                | -                | -         |     1.34 | doc, gafolo, koala, pepe, rdnzao |
|            6 |     4476 | 2024-06-08 | Hype              | W   | 0.068      | -            | -                | -                | -         |     0.36 | doc, gafolo, koala, pepe, rdnzao |
|            5 |     4485 | 2024-06-08 | Patins da Ferrari | L   | 0.068      | -            | -                | -                | -         |    -1.96 | doc, gafolo, koala, pepe, rdnzao |
|            4 |     4516 | 2024-06-07 | 9z                | L   | 0.063      | -            | -                | -                | -         |    -0.73 | doc, gafolo, koala, pepe, rdnzao |
|            3 |     4574 | 2024-06-06 | paiN              | W   | 0.056      | -            | -                | -                | -         |     1.64 | doc, gafolo, koala, pepe, rdnzao |
|            2 |     4642 | 2024-06-05 | Imperial          | L   | 0.050      | -            | -                | -                | -         |    -0.43 | doc, gafolo, koala, pepe, rdnzao |
|            1 |     4694 | 2024-06-04 | BESTIA            | W   | 0.043      | -            | -                | -                | -         |     0.79 | doc, gafolo, koala, pepe, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,377.53)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      1.000 | $3,940.00      | $3,940.00       |
| 2024-11-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-10-27 |      1.000 | $10,650.00     | $10,650.00      |
| 2024-10-20 |      0.963 | $2,000.00      | $1,925.05       |
| 2024-09-04 |      0.657 | $1,500.00      | $985.16         |
| 2024-08-16 |      0.529 | $9,000.00      | $4,763.14       |
| 2024-08-02 |      0.436 | $750.00        | $327.13         |
| 2024-06-28 |      0.202 | $500.00        | $100.98         |
| 2024-06-16 |      0.122 | $2,500.00      | $305.95         |
| 2024-06-09 |      0.076 | $5,000.00      | $380.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
