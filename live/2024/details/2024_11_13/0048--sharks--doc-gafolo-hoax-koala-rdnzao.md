### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [48](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_13.md)<br />
Regional Rank: [15]( ../../standings_americas_2024_11_13.md)<br />
<br />
Final Rank Value:  1085.6<br />
<br />
Final Rank Value (1085.6) = Starting Rank Value (1095.6) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.202[<sup>2</sup>](#table1)
- LAN Wins: 0.364[<sup>2</sup>](#table1)

The average of these factors is 0.348<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1095.6
- 400 + ( ( 0.348 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 1095.6


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
|           86 |      105 | 2024-11-09 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -11.10 | doc, gafolo, hoax, koala, rdnzao |
|           85 |      112 | 2024-11-09 | Solid             | W   | 1.000      | 0.371        | -                | 0.588 (0.218)    | 0 (0.000) |    10.83 | doc, gafolo, hoax, koala, rdnzao |
|           84 |      131 | 2024-11-08 | GameHunters       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.30 | doc, gafolo, hoax, koala, rdnzao |
|           83 |      145 | 2024-11-07 | MIBR Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.40 | doc, gafolo, hoax, koala, rdnzao |
|           82 |      357 | 2024-10-27 | ODDIK             | W   | 1.000      | 0.364        | 0.090 (0.033)    | 0.539 (0.196)    | 1 (1.000) |    14.16 | doc, gafolo, hoax, koala, rdnzao |
|           81 |      378 | 2024-10-26 | Fluxo             | W   | 1.000      | 0.364        | 0.064 (0.023)    | 0.670 (0.243)    | 1 (1.000) |    21.54 | doc, gafolo, hoax, koala, rdnzao |
|           80 |      583 | 2024-10-16 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -9.70 | doc, gafolo, hoax, koala, rdnzao |
|           79 |      739 | 2024-10-08 | Case              | W   | 0.961      | 0.450        | -                | 0.459 (0.199)    | 0 (0.000) |     7.61 | doc, gafolo, hoax, koala, rdnzao |
|           78 |      745 | 2024-10-08 | Case              | W   | 0.961      | 0.450        | -                | 0.459 (0.199)    | 0 (0.000) |     8.12 | doc, gafolo, hoax, koala, rdnzao |
|           77 |      927 | 2024-10-02 | Solid             | W   | 0.922      | 0.450        | -                | 0.588 (0.244)    | 0 (0.000) |    11.34 | doc, gafolo, hoax, koala, rdnzao |
|           76 |      930 | 2024-10-02 | Solid             | L   | 0.921      | -            | -                | -                | -         |   -18.03 | doc, gafolo, hoax, koala, rdnzao |
|           75 |      977 | 2024-10-01 | Imperial          | L   | 0.915      | -            | -                | -                | -         |    -9.35 | doc, gafolo, hoax, koala, rdnzao |
|           74 |      981 | 2024-10-01 | Imperial          | W   | 0.914      | 0.450        | 0.120 (0.049)    | 0.564 (0.232)    | -         |    19.93 | doc, gafolo, hoax, koala, rdnzao |
|           73 |      990 | 2024-10-01 | MIBR              | W   | 0.914      | 0.450        | 0.138 (0.057)    | 0.548 (0.226)    | -         |    25.10 | doc, gafolo, hoax, koala, rdnzao |
|           72 |      992 | 2024-10-01 | MIBR              | L   | 0.913      | -            | -                | -                | -         |    -3.36 | doc, gafolo, hoax, koala, rdnzao |
|           71 |     1149 | 2024-09-26 | BESTIA            | L   | 0.882      | -            | -                | -                | -         |   -11.99 | doc, gafolo, hoax, koala, rdnzao |
|           70 |     1166 | 2024-09-26 | Imperial          | L   | 0.880      | -            | -                | -                | -         |    -6.84 | doc, gafolo, hoax, koala, rdnzao |
|           69 |     1203 | 2024-09-25 | Hype              | L   | 0.875      | -            | -                | -                | -         |   -21.58 | doc, gafolo, hoax, koala, rdnzao |
|           68 |     1208 | 2024-09-25 | Hype              | W   | 0.875      | 0.450        | -                | 0.368 (0.145)    | -         |     5.67 | doc, gafolo, hoax, koala, rdnzao |
|           67 |     1223 | 2024-09-25 | MIBR              | W   | 0.873      | 0.143        | 0.138 (0.017)    | -                | -         |    24.87 | doc, gafolo, hoax, koala, rdnzao |
|           66 |     1254 | 2024-09-24 | paiN              | L   | 0.868      | -            | -                | -                | -         |    -1.16 | doc, gafolo, hoax, koala, rdnzao |
|           65 |     1261 | 2024-09-24 | paiN              | L   | 0.868      | -            | -                | -                | -         |    -1.18 | doc, gafolo, hoax, koala, rdnzao |
|           64 |     1686 | 2024-09-10 | inSanitY          | L   | 0.775      | -            | -                | -                | -         |   -17.10 | doc, gafolo, hoax, koala, rdnzao |
|           63 |     1688 | 2024-09-10 | inSanitY          | W   | 0.775      | -            | -                | -                | -         |     7.18 | doc, gafolo, hoax, koala, rdnzao |
|           62 |     1812 | 2024-09-05 | Argentina         | W   | 0.741      | -            | -                | -                | -         |     3.97 | doc, gafolo, hoax, koala, rdnzao |
|           61 |     1813 | 2024-09-05 | Argentina         | W   | 0.741      | -            | -                | -                | -         |     4.12 | doc, gafolo, hoax, koala, rdnzao |
|           60 |     1859 | 2024-09-04 | ODDIK             | L   | 0.735      | -            | -                | -                | -         |    -9.42 | doc, gafolo, hoax, koala, rdnzao |
|           59 |     1899 | 2024-09-03 | inSanitY          | W   | 0.726      | -            | -                | -                | -         |     7.09 | doc, gafolo, hoax, koala, rdnzao |
|           58 |     1919 | 2024-09-02 | Yawara            | W   | 0.722      | -            | -                | -                | -         |     2.33 | doc, gafolo, hoax, koala, rdnzao |
|           57 |     2124 | 2024-08-27 | ODDIK             | L   | 0.680      | -            | -                | -                | -         |    -8.94 | doc, gafolo, koala, pepe, rdnzao |
|           56 |     2182 | 2024-08-26 | W7M               | L   | 0.674      | -            | -                | -                | -         |   -17.86 | doc, gafolo, koala, pepe, rdnzao |
|           55 |     2202 | 2024-08-26 | Hype              | W   | 0.673      | -            | -                | -                | -         |     4.07 | doc, gafolo, koala, pepe, rdnzao |
|           54 |     2533 | 2024-08-16 | ODDIK             | L   | 0.608      | -            | -                | -                | -         |    -8.05 | doc, gafolo, koala, pepe, rdnzao |
|           53 |     2537 | 2024-08-16 | Case              | W   | 0.607      | 0.423        | -                | 0.459 (0.118)    | 1 (0.607) |     4.84 | doc, gafolo, koala, pepe, rdnzao |
|           52 |     2561 | 2024-08-15 | ODDIK             | L   | 0.600      | -            | -                | -                | -         |    -8.25 | doc, gafolo, koala, pepe, rdnzao |
|           51 |     2589 | 2024-08-14 | Case              | W   | 0.595      | -            | -                | -                | 1 (0.595) |     4.62 | doc, gafolo, koala, pepe, rdnzao |
|           50 |     3000 | 2024-08-02 | paiN              | L   | 0.513      | -            | -                | -                | -         |    -1.02 | doc, gafolo, koala, pepe, rdnzao |
|           49 |     3029 | 2024-08-01 | Hype              | W   | 0.507      | -            | -                | -                | -         |     3.25 | doc, gafolo, koala, pepe, rdnzao |
|           48 |     3036 | 2024-08-01 | paiN              | L   | 0.506      | -            | -                | -                | -         |    -1.00 | doc, gafolo, koala, pepe, rdnzao |
|           47 |     3069 | 2024-07-31 | MIBR              | L   | 0.501      | -            | -                | -                | -         |    -1.81 | doc, gafolo, koala, pepe, rdnzao |
|           46 |     3074 | 2024-07-31 | Solid             | W   | 0.501      | -            | -                | -                | -         |     4.00 | doc, gafolo, koala, pepe, rdnzao |
|           45 |     3110 | 2024-07-30 | Hype              | W   | 0.495      | -            | -                | -                | -         |     3.34 | doc, gafolo, koala, pepe, rdnzao |
|           44 |     3189 | 2024-07-28 | Bad News Chickens | W   | 0.480      | -            | -                | -                | -         |     1.73 | doc, gafolo, koala, pepe, rdnzao |
|           43 |     3235 | 2024-07-26 | Imperial          | L   | 0.468      | -            | -                | -                | -         |    -5.57 | doc, gafolo, koala, pepe, rdnzao |
|           42 |     3262 | 2024-07-25 | BESTIA            | W   | 0.462      | -            | -                | -                | -         |     7.29 | doc, gafolo, koala, pepe, rdnzao |
|           41 |     3266 | 2024-07-25 | Patins da Ferrari | W   | 0.462      | -            | -                | -                | -         |     1.52 | doc, gafolo, koala, pepe, rdnzao |
|           40 |     3312 | 2024-07-24 | Bad News Chickens | W   | 0.454      | -            | -                | -                | -         |     1.63 | doc, gafolo, koala, pepe, rdnzao |
|           39 |     3317 | 2024-07-24 | Yawara            | W   | 0.453      | -            | -                | -                | -         |     1.46 | doc, gafolo, koala, pepe, rdnzao |
|           38 |     3339 | 2024-07-23 | ODDIK             | L   | 0.448      | -            | -                | -                | -         |    -6.94 | doc, gafolo, koala, pepe, rdnzao |
|           37 |     3343 | 2024-07-23 | W7M               | W   | 0.448      | -            | -                | -                | -         |     2.08 | doc, gafolo, koala, pepe, rdnzao |
|           36 |     3427 | 2024-07-20 | Fluxo             | L   | 0.428      | -            | -                | -                | -         |    -6.20 | doc, gafolo, koala, pepe, rdnzao |
|           35 |     3479 | 2024-07-19 | Hype              | W   | 0.420      | -            | -                | -                | -         |     2.93 | doc, gafolo, koala, pepe, rdnzao |
|           34 |     3506 | 2024-07-18 | Fluxo             | L   | 0.415      | -            | -                | -                | -         |    -6.39 | doc, gafolo, koala, pepe, rdnzao |
|           33 |     3510 | 2024-07-18 | Fluxo             | L   | 0.415      | -            | -                | -                | -         |    -6.62 | doc, gafolo, koala, pepe, rdnzao |
|           32 |     3571 | 2024-07-17 | ODDIK             | W   | 0.408      | 0.450        | 0.090 (0.017)    | -                | -         |     6.58 | doc, gafolo, koala, pepe, rdnzao |
|           31 |     3583 | 2024-07-17 | ODDIK             | W   | 0.408      | 0.450        | 0.090 (0.017)    | -                | -         |     6.82 | doc, gafolo, koala, pepe, rdnzao |
|           30 |     3634 | 2024-07-16 | RED Canids        | L   | 0.402      | -            | -                | -                | -         |    -3.53 | doc, gafolo, koala, pepe, rdnzao |
|           29 |     3642 | 2024-07-16 | RED Canids        | L   | 0.401      | -            | -                | -                | -         |    -3.63 | doc, gafolo, koala, pepe, rdnzao |
|           28 |     3689 | 2024-07-15 | KRÜ               | L   | 0.395      | -            | -                | -                | -         |    -9.52 | doc, gafolo, koala, pepe, rdnzao |
|           27 |     3693 | 2024-07-15 | KRÜ               | W   | 0.395      | -            | -                | -                | -         |     2.93 | doc, gafolo, koala, pepe, rdnzao |
|           26 |     3763 | 2024-07-11 | Bounty Hunters    | L   | 0.367      | -            | -                | -                | -         |    -9.63 | doc, gafolo, koala, pepe, rdnzao |
|           25 |     3778 | 2024-07-10 | BESTIA            | W   | 0.361      | 0.371        | 0.110 (0.015)    | -                | -         |     5.94 | doc, gafolo, koala, pepe, rdnzao |
|           24 |     3798 | 2024-07-09 | KRÜ               | L   | 0.355      | -            | -                | -                | -         |    -8.74 | doc, gafolo, koala, pepe, rdnzao |
|           23 |     3820 | 2024-07-08 | Patins da Ferrari | W   | 0.348      | -            | -                | -                | -         |     1.03 | doc, gafolo, koala, pepe, rdnzao |
|           22 |     3856 | 2024-06-30 | Patins da Ferrari | L   | 0.294      | -            | -                | -                | -         |    -8.35 | doc, gafolo, koala, pepe, rdnzao |
|           21 |     3870 | 2024-06-28 | KRÜ               | W   | 0.281      | -            | -                | -                | -         |     1.88 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     3871 | 2024-06-28 | Bounty Hunters    | L   | 0.281      | -            | -                | -                | -         |    -7.62 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     3875 | 2024-06-27 | Galorys           | W   | 0.275      | -            | -                | -                | -         |     1.20 | doc, gafolo, koala, pepe, rdnzao |
|           18 |     3878 | 2024-06-27 | inSanitY          | L   | 0.273      | -            | -                | -                | -         |    -6.68 | doc, gafolo, koala, pepe, rdnzao |
|           17 |     3977 | 2024-06-14 | Fluxo             | L   | 0.188      | -            | -                | -                | -         |    -3.56 | doc, gafolo, koala, pepe, rdnzao |
|           16 |     4103 | 2024-06-10 | Vikings KR        | W   | 0.160      | -            | -                | -                | -         |     0.57 | doc, gafolo, koala, pepe, rdnzao |
|           15 |     4132 | 2024-06-09 | paiN              | L   | 0.154      | -            | -                | -                | -         |    -0.35 | doc, gafolo, koala, pepe, rdnzao |
|           14 |     4148 | 2024-06-09 | BESTIA            | W   | 0.153      | 0.450        | 0.110 (0.008)    | -                | -         |     2.39 | doc, gafolo, koala, pepe, rdnzao |
|           13 |     4207 | 2024-06-08 | Hype              | W   | 0.147      | -            | -                | -                | -         |     0.76 | doc, gafolo, koala, pepe, rdnzao |
|           12 |     4216 | 2024-06-08 | Patins da Ferrari | L   | 0.146      | -            | -                | -                | -         |    -4.24 | doc, gafolo, koala, pepe, rdnzao |
|           11 |     4247 | 2024-06-07 | 9z                | L   | 0.141      | -            | -                | -                | -         |    -1.30 | doc, gafolo, koala, pepe, rdnzao |
|           10 |     4305 | 2024-06-06 | paiN              | W   | 0.135      | 0.450        | 0.195 (0.012)    | -                | -         |     3.95 | doc, gafolo, koala, pepe, rdnzao |
|            9 |     4373 | 2024-06-05 | Imperial          | L   | 0.128      | -            | -                | -                | -         |    -1.62 | doc, gafolo, koala, pepe, rdnzao |
|            8 |     4425 | 2024-06-04 | BESTIA            | W   | 0.122      | -            | -                | -                | -         |     1.94 | doc, gafolo, koala, pepe, rdnzao |
|            7 |     4754 | 2024-05-22 | Imperial          | W   | 0.034      | -            | -                | -                | -         |     0.64 | doc, drg, gafolo, pepe, rdnzao   |
|            6 |     4758 | 2024-05-22 | Imperial          | L   | 0.033      | -            | -                | -                | -         |    -0.42 | doc, drg, gafolo, pepe, rdnzao   |
|            5 |     4784 | 2024-05-21 | Case              | L   | 0.028      | -            | -                | -                | -         |    -0.71 | doc, drg, gafolo, pepe, rdnzao   |
|            4 |     4785 | 2024-05-21 | Case              | W   | 0.028      | -            | -                | -                | -         |     0.18 | doc, drg, gafolo, pepe, rdnzao   |
|            3 |     4788 | 2024-05-21 | RED Canids        | W   | 0.028      | -            | -                | -                | -         |     0.60 | doc, drg, gafolo, pepe, rdnzao   |
|            2 |     4792 | 2024-05-21 | RED Canids        | L   | 0.028      | -            | -                | -                | -         |    -0.28 | doc, drg, gafolo, pepe, rdnzao   |
|            1 |     4920 | 2024-05-17 | ODDIK             | L   | 0.000      | -            | -                | -                | -         |    -0.01 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,147.84)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-10-27 |      1.000 | $10,650.00     | $10,650.00      |
| 2024-10-20 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-04 |      0.735 | $1,500.00      | $1,103.13       |
| 2024-08-16 |      0.608 | $9,000.00      | $5,470.99       |
| 2024-08-02 |      0.515 | $750.00        | $386.12         |
| 2024-06-28 |      0.281 | $500.00        | $140.30         |
| 2024-06-16 |      0.201 | $2,500.00      | $502.58         |
| 2024-06-10 |      0.162 | $750.00        | $121.34         |
| 2024-06-09 |      0.155 | $5,000.00      | $773.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
