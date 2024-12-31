### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [50](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [13]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  1129.2<br />
<br />
Final Rank Value (1129.2) = Starting Rank Value (1226.3) + Head To Head Adjustments (-97.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.499[<sup>1</sup>](#table2)
- Bounty Collected: 0.377[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.661[<sup>2</sup>](#table1)

The average of these factors is 0.424<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1226.3
- 400 + ( ( 0.424 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1226.3


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
|           74 |      229 | 2024-12-08 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -13.58 | doc, gafolo, hoax, koala, rdnzao |
|           73 |      230 | 2024-12-08 | BOSS              | W   | 1.000      | 0.384        | 0.038 (0.015)    | 0.444 (0.171)    | 1 (1.000) |    12.42 | doc, gafolo, hoax, koala, rdnzao |
|           72 |      232 | 2024-12-08 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -14.26 | doc, gafolo, hoax, koala, rdnzao |
|           71 |      254 | 2024-12-07 | Nouns             | W   | 1.000      | 0.384        | 0.039 (0.015)    | 0.620 (0.238)    | 1 (1.000) |    14.21 | doc, gafolo, hoax, koala, rdnzao |
|           70 |      262 | 2024-12-07 | Take Flyte        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.00 | doc, gafolo, hoax, koala, rdnzao |
|           69 |      290 | 2024-12-06 | MIGHT             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.89 | doc, gafolo, hoax, koala, rdnzao |
|           68 |      426 | 2024-11-30 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -21.85 | doc, gafolo, hoax, koala, rdnzao |
|           67 |      468 | 2024-11-29 | NITRO             | W   | 0.999      | 0.371        | -                | 0.287 (0.106)    | 0 (0.000) |     2.57 | doc, gafolo, hoax, koala, rdnzao |
|           66 |      478 | 2024-11-28 | 2070              | W   | 0.993      | -            | -                | -                | 0 (0.000) |     1.99 | doc, gafolo, hoax, koala, rdnzao |
|           65 |      576 | 2024-11-22 | Fluxo             | L   | 0.956      | -            | -                | -                | -         |   -13.73 | doc, gafolo, hoax, koala, rdnzao |
|           64 |      897 | 2024-11-09 | Fluxo             | L   | 0.869      | -            | -                | -                | -         |   -13.57 | doc, gafolo, hoax, koala, rdnzao |
|           63 |      904 | 2024-11-09 | Solid             | W   | 0.867      | 0.371        | 0.030 (0.010)    | 0.614 (0.197)    | -         |     6.27 | doc, gafolo, hoax, koala, rdnzao |
|           62 |      923 | 2024-11-08 | GameHunters       | W   | 0.860      | 0.371        | -                | 0.317 (0.101)    | -         |     2.10 | doc, gafolo, hoax, koala, rdnzao |
|           61 |      937 | 2024-11-07 | MIBR Academy      | W   | 0.855      | -            | -                | -                | -         |     1.52 | doc, gafolo, hoax, koala, rdnzao |
|           60 |     1149 | 2024-10-27 | ODDIK             | W   | 0.781      | 0.364        | 0.093 (0.027)    | 0.451 (0.128)    | 1 (0.781) |     6.87 | doc, gafolo, hoax, koala, rdnzao |
|           59 |     1170 | 2024-10-26 | Fluxo             | W   | 0.775      | 0.364        | 0.119 (0.034)    | 0.606 (0.171)    | 1 (0.775) |    12.61 | doc, gafolo, hoax, koala, rdnzao |
|           58 |     1375 | 2024-10-16 | Imperial          | L   | 0.708      | -            | -                | -                | -         |    -9.76 | doc, gafolo, hoax, koala, rdnzao |
|           57 |     1531 | 2024-10-08 | Case              | W   | 0.654      | -            | -                | -                | -         |     2.59 | doc, gafolo, hoax, koala, rdnzao |
|           56 |     1537 | 2024-10-08 | Case              | W   | 0.654      | -            | -                | -                | -         |     2.66 | doc, gafolo, hoax, koala, rdnzao |
|           55 |     1719 | 2024-10-02 | Solid             | W   | 0.615      | 0.450        | 0.030 (0.008)    | 0.614 (0.170)    | -         |     4.71 | doc, gafolo, hoax, koala, rdnzao |
|           54 |     1722 | 2024-10-02 | Solid             | L   | 0.614      | -            | -                | -                | -         |   -14.99 | doc, gafolo, hoax, koala, rdnzao |
|           53 |     1769 | 2024-10-01 | Imperial          | L   | 0.608      | -            | -                | -                | -         |    -9.06 | doc, gafolo, hoax, koala, rdnzao |
|           52 |     1773 | 2024-10-01 | Imperial          | W   | 0.608      | 0.450        | 0.151 (0.041)    | 0.492 (0.134)    | -         |    10.31 | doc, gafolo, hoax, koala, rdnzao |
|           51 |     1782 | 2024-10-01 | MIBR              | W   | 0.607      | 0.450        | 0.194 (0.053)    | 0.652 (0.178)    | -         |    16.88 | doc, gafolo, hoax, koala, rdnzao |
|           50 |     1784 | 2024-10-01 | MIBR              | L   | 0.607      | -            | -                | -                | -         |    -2.16 | doc, gafolo, hoax, koala, rdnzao |
|           49 |     1941 | 2024-09-26 | BESTIA            | L   | 0.575      | -            | -                | -                | -         |   -11.60 | doc, gafolo, hoax, koala, rdnzao |
|           48 |     1958 | 2024-09-26 | Imperial          | L   | 0.573      | -            | -                | -                | -         |    -7.77 | doc, gafolo, hoax, koala, rdnzao |
|           47 |     1995 | 2024-09-25 | Hype              | L   | 0.568      | -            | -                | -                | -         |   -16.22 | doc, gafolo, hoax, koala, rdnzao |
|           46 |     2000 | 2024-09-25 | Hype              | W   | 0.568      | -            | -                | -                | -         |     1.61 | doc, gafolo, hoax, koala, rdnzao |
|           45 |     2015 | 2024-09-25 | MIBR              | W   | 0.566      | 0.143        | 0.194 (0.016)    | -                | -         |    16.03 | doc, gafolo, hoax, koala, rdnzao |
|           44 |     2046 | 2024-09-24 | paiN              | L   | 0.561      | -            | -                | -                | -         |    -1.86 | doc, gafolo, hoax, koala, rdnzao |
|           43 |     2053 | 2024-09-24 | paiN              | L   | 0.561      | -            | -                | -                | -         |    -1.90 | doc, gafolo, hoax, koala, rdnzao |
|           42 |     2478 | 2024-09-10 | inSanitY          | L   | 0.468      | -            | -                | -                | -         |   -13.05 | doc, gafolo, hoax, koala, rdnzao |
|           41 |     2480 | 2024-09-10 | inSanitY          | W   | 0.468      | -            | -                | -                | -         |     1.66 | doc, gafolo, hoax, koala, rdnzao |
|           40 |     2604 | 2024-09-05 | Dusty Roots       | W   | 0.434      | -            | -                | -                | -         |     1.68 | doc, gafolo, hoax, koala, rdnzao |
|           39 |     2605 | 2024-09-05 | Dusty Roots       | W   | 0.434      | -            | -                | -                | -         |     1.71 | doc, gafolo, hoax, koala, rdnzao |
|           38 |     2651 | 2024-09-04 | ODDIK             | L   | 0.428      | -            | -                | -                | -         |    -9.83 | doc, gafolo, hoax, koala, rdnzao |
|           37 |     2691 | 2024-09-03 | inSanitY          | W   | 0.420      | -            | -                | -                | -         |     1.46 | doc, gafolo, hoax, koala, rdnzao |
|           36 |     2711 | 2024-09-02 | Yawara            | W   | 0.415      | -            | -                | -                | -         |     0.72 | doc, gafolo, hoax, koala, rdnzao |
|           35 |     2916 | 2024-08-27 | ODDIK             | L   | 0.373      | -            | -                | -                | -         |    -8.80 | doc, gafolo, koala, pepe, rdnzao |
|           34 |     2974 | 2024-08-26 | W7M               | L   | 0.367      | -            | -                | -                | -         |   -10.99 | doc, gafolo, koala, pepe, rdnzao |
|           33 |     2994 | 2024-08-26 | Hype              | W   | 0.366      | -            | -                | -                | -         |     0.85 | doc, gafolo, koala, pepe, rdnzao |
|           32 |     3325 | 2024-08-16 | ODDIK             | L   | 0.301      | -            | -                | -                | -         |    -7.22 | doc, gafolo, koala, pepe, rdnzao |
|           31 |     3329 | 2024-08-16 | Case              | W   | 0.300      | -            | -                | -                | 1 (0.300) |     0.84 | doc, gafolo, koala, pepe, rdnzao |
|           30 |     3353 | 2024-08-15 | ODDIK             | L   | 0.293      | -            | -                | -                | -         |    -7.17 | doc, gafolo, koala, pepe, rdnzao |
|           29 |     3381 | 2024-08-14 | Case              | W   | 0.288      | -            | -                | -                | 1 (0.288) |     0.77 | doc, gafolo, koala, pepe, rdnzao |
|           28 |     3792 | 2024-08-02 | paiN              | L   | 0.206      | -            | -                | -                | -         |    -0.99 | doc, gafolo, koala, pepe, rdnzao |
|           27 |     3821 | 2024-08-01 | Hype              | W   | 0.200      | -            | -                | -                | -         |     0.45 | doc, gafolo, koala, pepe, rdnzao |
|           26 |     3828 | 2024-08-01 | paiN              | L   | 0.199      | -            | -                | -                | -         |    -0.96 | doc, gafolo, koala, pepe, rdnzao |
|           25 |     3861 | 2024-07-31 | MIBR              | L   | 0.194      | -            | -                | -                | -         |    -0.75 | doc, gafolo, koala, pepe, rdnzao |
|           24 |     3866 | 2024-07-31 | Solid             | W   | 0.194      | -            | -                | -                | -         |     0.85 | doc, gafolo, koala, pepe, rdnzao |
|           23 |     3902 | 2024-07-30 | Hype              | W   | 0.188      | -            | -                | -                | -         |     0.42 | doc, gafolo, koala, pepe, rdnzao |
|           22 |     3981 | 2024-07-28 | Bad News Chickens | W   | 0.174      | -            | -                | -                | -         |     0.28 | doc, gafolo, koala, pepe, rdnzao |
|           21 |     4027 | 2024-07-26 | Imperial          | L   | 0.161      | -            | -                | -                | -         |    -2.87 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     4054 | 2024-07-25 | BESTIA            | W   | 0.155      | -            | -                | -                | -         |     1.31 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     4058 | 2024-07-25 | Patins da Ferrari | W   | 0.155      | -            | -                | -                | -         |     0.08 | doc, gafolo, koala, pepe, rdnzao |
|           18 |     4104 | 2024-07-24 | Bad News Chickens | W   | 0.147      | -            | -                | -                | -         |     0.23 | doc, gafolo, koala, pepe, rdnzao |
|           17 |     4109 | 2024-07-24 | Yawara            | W   | 0.146      | -            | -                | -                | -         |     0.22 | doc, gafolo, koala, pepe, rdnzao |
|           16 |     4131 | 2024-07-23 | ODDIK             | L   | 0.141      | -            | -                | -                | -         |    -3.60 | doc, gafolo, koala, pepe, rdnzao |
|           15 |     4135 | 2024-07-23 | W7M               | W   | 0.141      | -            | -                | -                | -         |     0.19 | doc, gafolo, koala, pepe, rdnzao |
|           14 |     4219 | 2024-07-20 | Fluxo             | L   | 0.121      | -            | -                | -                | -         |    -2.49 | doc, gafolo, koala, pepe, rdnzao |
|           13 |     4271 | 2024-07-19 | Hype              | W   | 0.113      | -            | -                | -                | -         |     0.24 | doc, gafolo, koala, pepe, rdnzao |
|           12 |     4298 | 2024-07-18 | Fluxo             | L   | 0.108      | -            | -                | -                | -         |    -2.25 | doc, gafolo, koala, pepe, rdnzao |
|           11 |     4302 | 2024-07-18 | Fluxo             | L   | 0.108      | -            | -                | -                | -         |    -2.26 | doc, gafolo, koala, pepe, rdnzao |
|           10 |     4363 | 2024-07-17 | ODDIK             | W   | 0.101      | 0.450        | 0.093 (0.004)    | -                | -         |     0.60 | doc, gafolo, koala, pepe, rdnzao |
|            9 |     4375 | 2024-07-17 | ODDIK             | W   | 0.101      | -            | -                | -                | -         |     0.60 | doc, gafolo, koala, pepe, rdnzao |
|            8 |     4426 | 2024-07-16 | RED Canids        | L   | 0.095      | -            | -                | -                | -         |    -1.94 | doc, gafolo, koala, pepe, rdnzao |
|            7 |     4434 | 2024-07-16 | RED Canids        | L   | 0.094      | -            | -                | -                | -         |    -1.95 | doc, gafolo, koala, pepe, rdnzao |
|            6 |     4481 | 2024-07-15 | KRÜ               | L   | 0.088      | -            | -                | -                | -         |    -2.54 | doc, gafolo, koala, pepe, rdnzao |
|            5 |     4485 | 2024-07-15 | KRÜ               | W   | 0.088      | -            | -                | -                | -         |     0.23 | doc, gafolo, koala, pepe, rdnzao |
|            4 |     4555 | 2024-07-11 | Bounty Hunters    | L   | 0.061      | -            | -                | -                | -         |    -1.82 | doc, gafolo, koala, pepe, rdnzao |
|            3 |     4570 | 2024-07-10 | BESTIA            | W   | 0.054      | -            | -                | -                | -         |     0.45 | doc, gafolo, koala, pepe, rdnzao |
|            2 |     4590 | 2024-07-09 | KRÜ               | L   | 0.048      | -            | -                | -                | -         |    -1.39 | doc, gafolo, koala, pepe, rdnzao |
|            1 |     4612 | 2024-07-08 | Patins da Ferrari | W   | 0.041      | -            | -                | -                | -         |     0.02 | doc, gafolo, koala, pepe, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,577.11)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-11-30 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-11-24 |      0.967 | $3,940.00      | $3,810.97       |
| 2024-11-09 |      0.869 | $4,000.00      | $3,474.31       |
| 2024-10-27 |      0.781 | $10,650.00     | $8,316.09       |
| 2024-10-20 |      0.734 | $2,000.00      | $1,468.49       |
| 2024-09-04 |      0.428 | $1,500.00      | $642.74         |
| 2024-08-16 |      0.301 | $9,000.00      | $2,708.61       |
| 2024-08-02 |      0.208 | $750.00        | $155.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
