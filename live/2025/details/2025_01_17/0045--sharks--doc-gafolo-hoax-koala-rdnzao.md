### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [45](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [12]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  1145.5<br />
<br />
Final Rank Value (1145.5) = Starting Rank Value (1225.0) + Head To Head Adjustments (-79.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.652[<sup>2</sup>](#table1)

The average of these factors is 0.416<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1225.0
- 400 + ( ( 0.416 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1225.0


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
|           60 |      289 | 2024-12-08 | NRG               | L   | 0.935      | -            | -                | -                | -         |   -12.69 | doc, gafolo, hoax, koala, rdnzao |
|           59 |      290 | 2024-12-08 | BOSS              | W   | 0.934      | 0.384        | 0.042 (0.015)    | 0.421 (0.151)    | 1 (0.934) |    11.60 | doc, gafolo, hoax, koala, rdnzao |
|           58 |      292 | 2024-12-08 | NRG               | L   | 0.934      | -            | -                | -                | -         |   -13.25 | doc, gafolo, hoax, koala, rdnzao |
|           57 |      314 | 2024-12-07 | Nouns             | W   | 0.928      | 0.384        | 0.041 (0.015)    | 0.577 (0.206)    | 1 (0.928) |    12.48 | doc, gafolo, hoax, koala, rdnzao |
|           56 |      322 | 2024-12-07 | Take Flyte        | W   | 0.927      | -            | -                | -                | 1 (0.927) |     2.61 | doc, gafolo, hoax, koala, rdnzao |
|           55 |      350 | 2024-12-06 | MIGHT             | W   | 0.921      | 0.384        | 0.006 (0.002)    | -                | 1 (0.921) |     3.46 | doc, gafolo, hoax, koala, rdnzao |
|           54 |      486 | 2024-11-30 | ODDIK             | L   | 0.880      | -            | -                | -                | -         |   -20.83 | doc, gafolo, hoax, koala, rdnzao |
|           53 |      528 | 2024-11-29 | NITRO             | W   | 0.872      | 0.371        | -                | 0.297 (0.096)    | 0 (0.000) |     2.06 | doc, gafolo, hoax, koala, rdnzao |
|           52 |      538 | 2024-11-28 | 2070              | W   | 0.866      | -            | -                | -                | 0 (0.000) |     1.63 | doc, gafolo, hoax, koala, rdnzao |
|           51 |      636 | 2024-11-22 | Fluxo             | L   | 0.828      | -            | -                | -                | -         |   -13.59 | doc, gafolo, hoax, koala, rdnzao |
|           50 |      957 | 2024-11-09 | Fluxo             | L   | 0.741      | -            | -                | -                | -         |   -13.06 | doc, gafolo, hoax, koala, rdnzao |
|           49 |      964 | 2024-11-09 | Solid             | W   | 0.739      | 0.371        | 0.045 (0.012)    | 0.644 (0.176)    | -         |     4.64 | doc, gafolo, hoax, koala, rdnzao |
|           48 |      983 | 2024-11-08 | GameHunters       | W   | 0.733      | 0.371        | -                | 0.332 (0.090)    | -         |     1.60 | doc, gafolo, hoax, koala, rdnzao |
|           47 |      997 | 2024-11-07 | MIBR Academy      | W   | 0.728      | -            | -                | -                | -         |     1.21 | doc, gafolo, hoax, koala, rdnzao |
|           46 |     1209 | 2024-10-27 | ODDIK             | W   | 0.654      | 0.364        | 0.087 (0.021)    | 0.380 (0.090)    | 1 (0.654) |     4.52 | doc, gafolo, hoax, koala, rdnzao |
|           45 |     1230 | 2024-10-26 | Fluxo             | W   | 0.648      | 0.364        | 0.130 (0.031)    | 0.530 (0.125)    | 1 (0.648) |     9.12 | doc, gafolo, hoax, koala, rdnzao |
|           44 |     1435 | 2024-10-16 | Imperial          | L   | 0.581      | -            | -                | -                | -         |    -9.21 | doc, gafolo, hoax, koala, rdnzao |
|           43 |     1591 | 2024-10-08 | Case              | W   | 0.527      | -            | -                | -                | -         |     1.57 | doc, gafolo, hoax, koala, rdnzao |
|           42 |     1597 | 2024-10-08 | Case              | W   | 0.527      | -            | -                | -                | -         |     1.59 | doc, gafolo, hoax, koala, rdnzao |
|           41 |     1779 | 2024-10-02 | Solid             | W   | 0.487      | 0.450        | 0.045 (0.010)    | 0.644 (0.141)    | -         |     3.17 | doc, gafolo, hoax, koala, rdnzao |
|           40 |     1782 | 2024-10-02 | Solid             | L   | 0.487      | -            | -                | -                | -         |   -12.41 | doc, gafolo, hoax, koala, rdnzao |
|           39 |     1829 | 2024-10-01 | Imperial          | L   | 0.481      | -            | -                | -                | -         |    -8.16 | doc, gafolo, hoax, koala, rdnzao |
|           38 |     1833 | 2024-10-01 | Imperial          | W   | 0.480      | 0.450        | 0.164 (0.036)    | 0.428 (0.093)    | -         |     7.12 | doc, gafolo, hoax, koala, rdnzao |
|           37 |     1842 | 2024-10-01 | MIBR              | W   | 0.480      | 0.450        | 0.211 (0.046)    | 0.613 (0.132)    | -         |    13.13 | doc, gafolo, hoax, koala, rdnzao |
|           36 |     1844 | 2024-10-01 | MIBR              | L   | 0.479      | -            | -                | -                | -         |    -1.94 | doc, gafolo, hoax, koala, rdnzao |
|           35 |     2001 | 2024-09-26 | BESTIA            | L   | 0.447      | -            | -                | -                | -         |    -9.25 | doc, gafolo, hoax, koala, rdnzao |
|           34 |     2018 | 2024-09-26 | Imperial          | L   | 0.446      | -            | -                | -                | -         |    -7.18 | doc, gafolo, hoax, koala, rdnzao |
|           33 |     2055 | 2024-09-25 | Hype              | L   | 0.441      | -            | -                | -                | -         |   -12.86 | doc, gafolo, hoax, koala, rdnzao |
|           32 |     2060 | 2024-09-25 | Hype              | W   | 0.440      | -            | -                | -                | -         |     1.00 | doc, gafolo, hoax, koala, rdnzao |
|           31 |     2075 | 2024-09-25 | MIBR              | W   | 0.439      | 0.143        | 0.211 (0.013)    | -                | -         |    12.18 | doc, gafolo, hoax, koala, rdnzao |
|           30 |     2106 | 2024-09-24 | paiN              | L   | 0.434      | -            | -                | -                | -         |    -1.97 | doc, gafolo, hoax, koala, rdnzao |
|           29 |     2113 | 2024-09-24 | paiN              | L   | 0.434      | -            | -                | -                | -         |    -2.01 | doc, gafolo, hoax, koala, rdnzao |
|           28 |     2538 | 2024-09-10 | inSanitY          | L   | 0.341      | -            | -                | -                | -         |    -9.74 | doc, gafolo, hoax, koala, rdnzao |
|           27 |     2540 | 2024-09-10 | inSanitY          | W   | 0.340      | -            | -                | -                | -         |     0.97 | doc, gafolo, hoax, koala, rdnzao |
|           26 |     2664 | 2024-09-05 | Dusty Roots       | W   | 0.307      | -            | -                | -                | -         |     1.26 | doc, gafolo, hoax, koala, rdnzao |
|           25 |     2665 | 2024-09-05 | Dusty Roots       | W   | 0.307      | -            | -                | -                | -         |     1.27 | doc, gafolo, hoax, koala, rdnzao |
|           24 |     2711 | 2024-09-04 | ODDIK             | L   | 0.300      | -            | -                | -                | -         |    -7.66 | doc, gafolo, hoax, koala, rdnzao |
|           23 |     2751 | 2024-09-03 | inSanitY          | W   | 0.292      | -            | -                | -                | -         |     0.82 | doc, gafolo, hoax, koala, rdnzao |
|           22 |     2771 | 2024-09-02 | Yawara            | W   | 0.288      | -            | -                | -                | -         |     0.46 | doc, gafolo, hoax, koala, rdnzao |
|           21 |     2976 | 2024-08-27 | ODDIK             | L   | 0.246      | -            | -                | -                | -         |    -6.36 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     3034 | 2024-08-26 | W7M               | L   | 0.240      | -            | -                | -                | -         |    -7.40 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     3054 | 2024-08-26 | Hype              | W   | 0.239      | -            | -                | -                | -         |     0.46 | doc, gafolo, koala, pepe, rdnzao |
|           18 |     3385 | 2024-08-16 | ODDIK             | L   | 0.174      | -            | -                | -                | -         |    -4.53 | doc, gafolo, koala, pepe, rdnzao |
|           17 |     3389 | 2024-08-16 | Case              | W   | 0.173      | -            | -                | -                | 1 (0.173) |     0.36 | doc, gafolo, koala, pepe, rdnzao |
|           16 |     3413 | 2024-08-15 | ODDIK             | L   | 0.166      | -            | -                | -                | -         |    -4.37 | doc, gafolo, koala, pepe, rdnzao |
|           15 |     3441 | 2024-08-14 | Case              | W   | 0.161      | -            | -                | -                | 1 (0.161) |     0.33 | doc, gafolo, koala, pepe, rdnzao |
|           14 |     3852 | 2024-08-02 | paiN              | L   | 0.078      | -            | -                | -                | -         |    -0.46 | doc, gafolo, koala, pepe, rdnzao |
|           13 |     3881 | 2024-08-01 | Hype              | W   | 0.073      | -            | -                | -                | -         |     0.14 | doc, gafolo, koala, pepe, rdnzao |
|           12 |     3888 | 2024-08-01 | paiN              | L   | 0.072      | -            | -                | -                | -         |    -0.42 | doc, gafolo, koala, pepe, rdnzao |
|           11 |     3921 | 2024-07-31 | MIBR              | L   | 0.067      | -            | -                | -                | -         |    -0.29 | doc, gafolo, koala, pepe, rdnzao |
|           10 |     3926 | 2024-07-31 | Solid             | W   | 0.066      | -            | -                | -                | -         |     0.04 | doc, gafolo, koala, pepe, rdnzao |
|            9 |     3962 | 2024-07-30 | Hype              | W   | 0.061      | -            | -                | -                | -         |     0.11 | doc, gafolo, koala, pepe, rdnzao |
|            8 |     4041 | 2024-07-28 | Bad News Chickens | W   | 0.046      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |
|            7 |     4087 | 2024-07-26 | Imperial          | L   | 0.033      | -            | -                | -                | -         |    -0.64 | doc, gafolo, koala, pepe, rdnzao |
|            6 |     4114 | 2024-07-25 | BESTIA            | W   | 0.028      | -            | -                | -                | -         |     0.25 | doc, gafolo, koala, pepe, rdnzao |
|            5 |     4118 | 2024-07-25 | Patins da Ferrari | W   | 0.027      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |
|            4 |     4164 | 2024-07-24 | Bad News Chickens | W   | 0.020      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |
|            3 |     4169 | 2024-07-24 | Yawara            | W   | 0.019      | -            | -                | -                | -         |     0.03 | doc, gafolo, koala, pepe, rdnzao |
|            2 |     4191 | 2024-07-23 | ODDIK             | L   | 0.014      | -            | -                | -                | -         |    -0.38 | doc, gafolo, koala, pepe, rdnzao |
|            1 |     4195 | 2024-07-23 | W7M               | W   | 0.014      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,858.66)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.935 | $7,500.00      | $7,013.19       |
| 2024-11-30 |      0.881 | $1,500.00      | $1,321.56       |
| 2024-11-24 |      0.840 | $3,940.00      | $3,309.41       |
| 2024-11-09 |      0.741 | $4,000.00      | $2,965.11       |
| 2024-10-27 |      0.654 | $10,650.00     | $6,960.35       |
| 2024-10-20 |      0.607 | $2,000.00      | $1,213.89       |
| 2024-09-04 |      0.301 | $1,500.00      | $451.79         |
| 2024-08-16 |      0.174 | $9,000.00      | $1,562.92       |
| 2024-08-02 |      0.081 | $750.00        | $60.44          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
