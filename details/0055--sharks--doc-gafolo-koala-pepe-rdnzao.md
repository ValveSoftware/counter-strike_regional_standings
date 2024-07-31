### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, pepe, rdnzao<br />
Global Rank: [55](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1028.9<br />
<br />
Final Rank Value (1028.9) = Starting Rank Value (970.3) + Head To Head Adjustments (58.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.394[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 970.3
- 400 + ( ( 0.276 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 970.3


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
|           89 |        2 | 2024-07-31 | Solid             | W   | 1.000      | 0.371        | -                | 0.817 (0.303)    | 0 (0.000) |    12.17 | doc, gafolo, koala, pepe, rdnzao |
|           88 |       38 | 2024-07-30 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.19 | doc, gafolo, koala, pepe, rdnzao |
|           87 |      117 | 2024-07-28 | Bad News Chickens | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.45 | doc, gafolo, koala, pepe, rdnzao |
|           86 |      163 | 2024-07-26 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -8.12 | doc, gafolo, koala, pepe, rdnzao |
|           85 |      190 | 2024-07-25 | BESTIA            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.66 | doc, gafolo, koala, pepe, rdnzao |
|           84 |      194 | 2024-07-25 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.20 | doc, gafolo, koala, pepe, rdnzao |
|           83 |      240 | 2024-07-24 | Bad News Chickens | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.40 | doc, gafolo, koala, pepe, rdnzao |
|           82 |      245 | 2024-07-24 | Yawara            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.96 | doc, gafolo, koala, pepe, rdnzao |
|           81 |      267 | 2024-07-23 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -13.98 | doc, gafolo, koala, pepe, rdnzao |
|           80 |      271 | 2024-07-23 | W7M               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.02 | doc, gafolo, koala, pepe, rdnzao |
|           79 |      355 | 2024-07-20 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -7.58 | doc, gafolo, koala, pepe, rdnzao |
|           78 |      407 | 2024-07-19 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.43 | doc, gafolo, koala, pepe, rdnzao |
|           77 |      434 | 2024-07-18 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.03 | doc, gafolo, koala, pepe, rdnzao |
|           76 |      438 | 2024-07-18 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.60 | doc, gafolo, koala, pepe, rdnzao |
|           75 |      499 | 2024-07-17 | ODDIK             | W   | 1.000      | 0.450        | 0.096 (0.043)    | 0.781 (0.352)    | 0 (0.000) |    17.56 | doc, gafolo, koala, pepe, rdnzao |
|           74 |      511 | 2024-07-17 | ODDIK             | W   | 1.000      | 0.450        | 0.096 (0.043)    | 0.781 (0.352)    | -         |    19.14 | doc, gafolo, koala, pepe, rdnzao |
|           73 |      562 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -7.64 | doc, gafolo, koala, pepe, rdnzao |
|           72 |      570 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -8.17 | doc, gafolo, koala, pepe, rdnzao |
|           71 |      617 | 2024-07-15 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -20.47 | doc, gafolo, koala, pepe, rdnzao |
|           70 |      621 | 2024-07-15 | KRÜ               | W   | 1.000      | -            | -                | -                | -         |    10.65 | doc, gafolo, koala, pepe, rdnzao |
|           69 |      691 | 2024-07-11 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -16.77 | doc, gafolo, koala, pepe, rdnzao |
|           68 |      706 | 2024-07-10 | BESTIA            | W   | 1.000      | 0.371        | 0.093 (0.034)    | 0.731 (0.271)    | -         |    16.98 | doc, gafolo, koala, pepe, rdnzao |
|           67 |      726 | 2024-07-09 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -21.35 | doc, gafolo, koala, pepe, rdnzao |
|           66 |      748 | 2024-07-08 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | -         |     8.96 | doc, gafolo, koala, pepe, rdnzao |
|           65 |      784 | 2024-06-30 | Patins da Ferrari | L   | 0.994      | -            | -                | -                | -         |   -22.45 | doc, gafolo, koala, pepe, rdnzao |
|           64 |      798 | 2024-06-28 | KRÜ               | W   | 0.980      | -            | -                | -                | -         |     8.95 | doc, gafolo, koala, pepe, rdnzao |
|           63 |      799 | 2024-06-28 | Bounty Hunters    | L   | 0.980      | -            | -                | -                | -         |   -19.23 | doc, gafolo, koala, pepe, rdnzao |
|           62 |      803 | 2024-06-27 | Galorys           | W   | 0.975      | -            | -                | -                | -         |     8.61 | doc, gafolo, koala, pepe, rdnzao |
|           61 |      806 | 2024-06-27 | inSanitY          | L   | 0.973      | -            | -                | -                | -         |   -16.28 | doc, gafolo, koala, pepe, rdnzao |
|           60 |      905 | 2024-06-14 | Fluxo             | L   | 0.887      | -            | -                | -                | -         |   -12.00 | doc, gafolo, koala, pepe, rdnzao |
|           59 |     1031 | 2024-06-10 | Vikings KR        | W   | 0.859      | -            | -                | -                | -         |     5.37 | doc, gafolo, koala, pepe, rdnzao |
|           58 |     1060 | 2024-06-09 | paiN              | L   | 0.853      | -            | -                | -                | -         |    -4.16 | doc, gafolo, koala, pepe, rdnzao |
|           57 |     1076 | 2024-06-09 | BESTIA            | W   | 0.852      | 0.450        | 0.093 (0.036)    | 0.731 (0.280)    | -         |    13.07 | doc, gafolo, koala, pepe, rdnzao |
|           56 |     1135 | 2024-06-08 | Hype              | W   | 0.846      | -            | -                | -                | -         |     8.89 | doc, gafolo, koala, pepe, rdnzao |
|           55 |     1144 | 2024-06-08 | Patins da Ferrari | L   | 0.846      | -            | -                | -                | -         |   -20.80 | doc, gafolo, koala, pepe, rdnzao |
|           54 |     1175 | 2024-06-07 | 9z                | L   | 0.841      | -            | -                | -                | -         |    -2.20 | doc, gafolo, koala, pepe, rdnzao |
|           53 |     1233 | 2024-06-06 | paiN              | W   | 0.834      | 0.450        | 0.305 (0.115)    | 0.796 (0.299)    | -         |    22.50 | doc, gafolo, koala, pepe, rdnzao |
|           52 |     1301 | 2024-06-05 | Imperial          | L   | 0.828      | -            | -                | -                | -         |    -4.68 | doc, gafolo, koala, pepe, rdnzao |
|           51 |     1353 | 2024-06-04 | BESTIA            | W   | 0.821      | 0.450        | 0.093 (0.034)    | 0.731 (0.270)    | -         |    14.58 | doc, gafolo, koala, pepe, rdnzao |
|           50 |     1682 | 2024-05-22 | Imperial          | W   | 0.733      | 0.450        | 0.245 (0.081)    | 0.685 (0.226)    | -         |    18.98 | doc, drg, gafolo, pepe, rdnzao   |
|           49 |     1686 | 2024-05-22 | Imperial          | L   | 0.733      | -            | -                | -                | -         |    -3.95 | doc, drg, gafolo, pepe, rdnzao   |
|           48 |     1712 | 2024-05-21 | Case              | L   | 0.728      | -            | -                | -                | -         |   -14.07 | doc, drg, gafolo, pepe, rdnzao   |
|           47 |     1713 | 2024-05-21 | Case              | W   | 0.727      | 0.450        | -                | 0.720 (0.236)    | -         |     8.88 | doc, drg, gafolo, pepe, rdnzao   |
|           46 |     1716 | 2024-05-21 | RED Canids        | W   | 0.727      | 0.450        | 0.079 (0.026)    | 0.738 (0.242)    | -         |    16.17 | doc, drg, gafolo, pepe, rdnzao   |
|           45 |     1720 | 2024-05-21 | RED Canids        | L   | 0.727      | -            | -                | -                | -         |    -6.65 | doc, drg, gafolo, pepe, rdnzao   |
|           44 |     1848 | 2024-05-17 | ODDIK             | L   | 0.700      | -            | -                | -                | -         |   -12.87 | doc, drg, gafolo, rdnzao, togs   |
|           43 |     1876 | 2024-05-16 | W7M               | W   | 0.694      | -            | -                | -                | -         |     5.02 | doc, drg, gafolo, rdnzao, togs   |
|           42 |     1879 | 2024-05-16 | W7M               | W   | 0.694      | -            | -                | -                | -         |     5.25 | doc, drg, gafolo, rdnzao, togs   |
|           41 |     1881 | 2024-05-16 | Hype              | W   | 0.693      | -            | -                | -                | -         |     7.65 | doc, drg, gafolo, rdnzao, togs   |
|           40 |     1921 | 2024-05-15 | Vikings KR        | W   | 0.688      | -            | -                | -                | -         |     6.05 | doc, drg, gafolo, rdnzao, togs   |
|           39 |     1924 | 2024-05-15 | 9z                | L   | 0.687      | -            | -                | -                | -         |    -0.99 | doc, drg, gafolo, rdnzao, togs   |
|           38 |     1988 | 2024-05-14 | Fluxo             | L   | 0.680      | -            | -                | -                | -         |    -7.46 | doc, drg, gafolo, rdnzao, togs   |
|           37 |     2015 | 2024-05-13 | RED Canids        | W   | 0.674      | 0.384        | 0.079 (0.021)    | -                | -         |    13.99 | doc, drg, gafolo, rdnzao, togs   |
|           36 |     2023 | 2024-05-13 | W7M               | W   | 0.673      | -            | -                | -                | -         |     6.05 | doc, drg, gafolo, rdnzao, togs   |
|           35 |     2072 | 2024-05-11 | W7M               | W   | 0.660      | -            | -                | -                | -         |     6.24 | doc, drg, gafolo, rdnzao, togs   |
|           34 |     2111 | 2024-05-09 | BESTIA            | L   | 0.648      | -            | -                | -                | -         |   -11.26 | doc, drg, gafolo, rdnzao, togs   |
|           33 |     2134 | 2024-05-08 | 9z                | L   | 0.641      | -            | -                | -                | -         |    -0.84 | doc, drg, gafolo, rdnzao, togs   |
|           32 |     2172 | 2024-05-06 | BESTIA            | W   | 0.628      | 0.435        | 0.093 (0.025)    | -                | -         |     8.77 | doc, drg, gafolo, rdnzao, togs   |
|           31 |     2770 | 2024-04-11 | paiN              | L   | 0.460      | -            | -                | -                | -         |    -1.05 | doc, drg, gafolo, rdnzao, togs   |
|           30 |     3034 | 2024-04-03 | 2GAME             | W   | 0.407      | -            | -                | -                | -         |     2.07 | doc, drg, gafolo, rdnzao, togs   |
|           29 |     3037 | 2024-04-03 | 2GAME             | W   | 0.407      | -            | -                | -                | -         |     2.11 | doc, drg, gafolo, rdnzao, togs   |
|           28 |     3405 | 2024-03-14 | MIBR              | L   | 0.274      | -            | -                | -                | -         |    -0.67 | doc, drg, gafolo, rdnzao, togs   |
|           27 |     3407 | 2024-03-14 | MIBR              | L   | 0.274      | -            | -                | -                | -         |    -0.68 | doc, drg, gafolo, rdnzao, togs   |
|           26 |     3433 | 2024-03-13 | Yawara            | W   | 0.268      | -            | -                | -                | -         |     0.63 | doc, drg, gafolo, rdnzao, togs   |
|           25 |     3440 | 2024-03-13 | ODDIK             | W   | 0.267      | -            | -                | -                | -         |     4.59 | doc, drg, gafolo, rdnzao, togs   |
|           24 |     3508 | 2024-03-11 | Fluxo             | L   | 0.252      | -            | -                | -                | -         |    -3.19 | doc, drg, gafolo, rdnzao, togs   |
|           23 |     3538 | 2024-03-09 | Case              | L   | 0.240      | -            | -                | -                | -         |    -4.25 | doc, drg, gafolo, rdnzao, togs   |
|           22 |     3602 | 2024-03-07 | Corinthians       | W   | 0.225      | -            | -                | -                | -         |     0.49 | doc, drg, gafolo, rdnzao, togs   |
|           21 |     3658 | 2024-03-05 | Solid             | W   | 0.213      | -            | -                | -                | -         |     2.64 | doc, drg, gafolo, rdnzao, togs   |
|           20 |     3662 | 2024-03-05 | Solid             | W   | 0.213      | -            | -                | -                | -         |     2.69 | doc, drg, gafolo, rdnzao, togs   |
|           19 |     3855 | 2024-02-24 | Galorys           | W   | 0.148      | -            | -                | -                | -         |     1.81 | doc, drg, gafolo, rdnzao, togs   |
|           18 |     3866 | 2024-02-24 | Galorys           | W   | 0.147      | -            | -                | -                | -         |     1.83 | doc, drg, gafolo, rdnzao, togs   |
|           17 |     3868 | 2024-02-24 | Fluxo             | L   | 0.147      | -            | -                | -                | -         |    -1.86 | doc, drg, gafolo, rdnzao, togs   |
|           16 |     3921 | 2024-02-21 | Corinthians       | W   | 0.128      | -            | -                | -                | -         |     0.29 | doc, drg, gafolo, rdnzao, togs   |
|           15 |     3925 | 2024-02-21 | Case              | W   | 0.127      | -            | -                | -                | -         |     1.90 | doc, drg, gafolo, rdnzao, togs   |
|           14 |     3927 | 2024-02-21 | Galorys           | W   | 0.126      | -            | -                | -                | -         |     1.64 | doc, drg, gafolo, rdnzao, togs   |
|           13 |     3956 | 2024-02-20 | Flamengo          | L   | 0.120      | -            | -                | -                | -         |    -3.54 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     3961 | 2024-02-20 | Case              | W   | 0.119      | -            | -                | -                | -         |     1.78 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     3983 | 2024-02-19 | Solid             | W   | 0.113      | -            | -                | -                | -         |     1.45 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     3999 | 2024-02-18 | Galorys           | W   | 0.108      | -            | -                | -                | -         |     1.41 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     4021 | 2024-02-17 | W7M               | L   | 0.101      | -            | -                | -                | -         |    -2.14 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     4025 | 2024-02-17 | Galorys           | L   | 0.100      | -            | -                | -                | -         |    -1.88 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     4055 | 2024-02-16 | W7M               | W   | 0.093      | -            | -                | -                | -         |     0.97 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     4080 | 2024-02-15 | Case              | L   | 0.087      | -            | -                | -                | -         |    -1.46 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     4085 | 2024-02-15 | Fluxo             | L   | 0.086      | -            | -                | -                | -         |    -1.09 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     4088 | 2024-02-15 | Fluxo             | L   | 0.086      | -            | -                | -                | -         |    -1.10 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     4114 | 2024-02-14 | Hype              | W   | 0.081      | -            | -                | -                | -         |     0.10 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     4124 | 2024-02-14 | Galorys           | W   | 0.079      | -            | -                | -                | -         |     1.01 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     4169 | 2024-02-12 | Solid             | W   | 0.068      | -            | -                | -                | -         |     0.87 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,580.59)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-28 |      0.980 | $500.00        | $489.93         |
| 2024-06-16 |      0.900 | $2,500.00      | $2,250.73       |
| 2024-06-10 |      0.861 | $750.00        | $645.79         |
| 2024-06-09 |      0.854 | $5,000.00      | $4,269.69       |
| 2024-05-19 |      0.714 | $1,000.00      | $713.93         |
| 2024-02-25 |      0.154 | $5,000.00      | $767.82         |
| 2024-02-21 |      0.126 | $3,500.00      | $442.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
