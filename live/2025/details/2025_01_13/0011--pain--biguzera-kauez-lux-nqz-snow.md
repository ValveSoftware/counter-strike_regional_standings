### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Global Rank: [11](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [3]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  1436.3<br />
<br />
Final Rank Value (1436.3) = Starting Rank Value (1497.3) + Head To Head Adjustments (-61.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.631[<sup>1</sup>](#table2)
- Bounty Collected: 0.493[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.906[<sup>2</sup>](#table1)

The average of these factors is 0.553<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1497.3
- 400 + ( ( 0.553 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1497.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           86 |      332 | 2024-12-07 | FURIA          | L   | 0.953      | -            | -                | -                | -         |    -9.25 | biguzera, kauez, lux, nqz, snow |
|           85 |      360 | 2024-12-06 | BIG            | W   | 0.945      | 1.000        | 0.257 (0.243)    | 0.469 (0.443)    | 1 (0.945) |    12.02 | biguzera, kauez, lux, nqz, snow |
|           84 |      379 | 2024-12-05 | 3DMAX          | L   | 0.939      | -            | -                | -                | -         |   -16.30 | biguzera, kauez, lux, nqz, snow |
|           83 |      397 | 2024-12-04 | MOUZ           | L   | 0.937      | -            | -                | -                | -         |    -3.88 | biguzera, kauez, lux, nqz, snow |
|           82 |      454 | 2024-12-02 | FlyQuest       | W   | 0.918      | -            | -                | -                | 1 (0.918) |    10.31 | biguzera, kauez, lux, nqz, snow |
|           81 |      475 | 2024-11-30 | Cloud9         | W   | 0.910      | -            | -                | -                | 1 (0.910) |     4.57 | biguzera, kauez, lux, nqz, snow |
|           80 |      496 | 2024-11-30 | GamerLegion    | L   | 0.906      | -            | -                | -                | -         |   -17.90 | biguzera, kauez, lux, nqz, snow |
|           79 |      505 | 2024-11-29 | Imperial       | W   | 0.905      | -            | -                | -                | 1 (0.905) |     5.01 | biguzera, kauez, lux, nqz, snow |
|           78 |      846 | 2024-11-13 | 9z             | W   | 0.797      | -            | -                | -                | 1 (0.797) |     2.06 | biguzera, kauez, lux, nqz, snow |
|           77 |      876 | 2024-11-12 | Imperial       | W   | 0.791      | -            | -                | -                | 1 (0.791) |     4.38 | biguzera, kauez, lux, nqz, snow |
|           76 |      902 | 2024-11-12 | Wildcard       | L   | 0.786      | -            | -                | -                | -         |   -16.60 | biguzera, kauez, lux, nqz, snow |
|           75 |      913 | 2024-11-11 | Nouns          | W   | 0.784      | -            | -                | -                | 1 (0.784) |     2.90 | biguzera, kauez, lux, nqz, snow |
|           74 |     1212 | 2024-10-27 | B8             | L   | 0.680      | -            | -                | -                | -         |   -17.41 | biguzera, kauez, lux, nqz, snow |
|           73 |     1261 | 2024-10-25 | Legacy         | W   | 0.667      | 0.500        | -                | 0.507 (0.169)    | 1 (0.667) |     2.42 | biguzera, kauez, lux, nqz, snow |
|           72 |     1267 | 2024-10-25 | Monte          | W   | 0.666      | 0.500        | -                | 0.594 (0.198)    | 1 (0.666) |     1.99 | biguzera, kauez, lux, nqz, snow |
|           71 |     1318 | 2024-10-20 | MIBR           | W   | 0.635      | 0.450        | 0.213 (0.061)    | 0.606 (0.173)    | -         |     9.02 | biguzera, kauez, lux, nqz, snow |
|           70 |     1400 | 2024-10-17 | MIBR           | W   | 0.616      | 0.450        | 0.213 (0.059)    | 0.606 (0.168)    | -         |     9.16 | biguzera, kauez, lux, nqz, snow |
|           69 |     1430 | 2024-10-16 | inSanitY       | W   | 0.609      | -            | -                | -                | -         |     0.58 | biguzera, kauez, lux, nqz, snow |
|           68 |     1584 | 2024-10-08 | Imperial       | L   | 0.556      | -            | -                | -                | -         |   -14.62 | biguzera, kauez, lux, nqz, snow |
|           67 |     1591 | 2024-10-08 | Imperial       | W   | 0.555      | 0.450        | 0.165 (0.041)    | -                | -         |     2.84 | biguzera, kauez, lux, nqz, snow |
|           66 |     1597 | 2024-10-08 | MIBR           | W   | 0.555      | 0.450        | 0.213 (0.053)    | 0.606 (0.151)    | -         |     8.22 | biguzera, kauez, lux, nqz, snow |
|           65 |     1600 | 2024-10-08 | MIBR           | W   | 0.554      | 0.450        | 0.213 (0.053)    | 0.606 (0.151)    | -         |     8.63 | biguzera, kauez, lux, nqz, snow |
|           64 |     1619 | 2024-10-07 | FaZe           | L   | 0.549      | -            | -                | -                | -         |    -1.57 | biguzera, kauez, lux, nqz, snow |
|           63 |     1629 | 2024-10-07 | MOUZ           | L   | 0.547      | -            | -                | -                | -         |    -2.34 | biguzera, kauez, lux, nqz, snow |
|           62 |     1714 | 2024-10-04 | BESTIA         | L   | 0.528      | -            | -                | -                | -         |   -14.77 | biguzera, kauez, lux, nqz, snow |
|           61 |     1776 | 2024-10-02 | Fluxo          | L   | 0.516      | -            | -                | -                | -         |   -14.26 | biguzera, kauez, lux, nqz, snow |
|           60 |     1779 | 2024-10-02 | Fluxo          | L   | 0.515      | -            | -                | -                | -         |   -14.52 | biguzera, kauez, lux, nqz, snow |
|           59 |     1783 | 2024-10-02 | RED Canids     | W   | 0.515      | -            | -                | -                | -         |     1.54 | biguzera, kauez, lux, nqz, snow |
|           58 |     1788 | 2024-10-02 | RED Canids     | L   | 0.514      | -            | -                | -                | -         |   -14.82 | biguzera, kauez, lux, nqz, snow |
|           57 |     1824 | 2024-10-01 | Hype           | W   | 0.509      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, snow |
|           56 |     1828 | 2024-10-01 | Hype           | W   | 0.509      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, snow |
|           55 |     1882 | 2024-09-29 | Fluxo          | W   | 0.496      | -            | -                | -                | -         |     1.37 | biguzera, kauez, lux, nqz, snow |
|           54 |     1886 | 2024-09-29 | Solid          | W   | 0.495      | -            | -                | -                | -         |     0.60 | biguzera, kauez, lux, nqz, snow |
|           53 |     1912 | 2024-09-28 | RED Canids     | W   | 0.489      | -            | -                | -                | -         |     1.29 | biguzera, kauez, lux, nqz, snow |
|           52 |     1918 | 2024-09-28 | Solid          | L   | 0.489      | -            | -                | -                | -         |   -14.85 | biguzera, kauez, lux, nqz, snow |
|           51 |     2050 | 2024-09-25 | ODDIK          | W   | 0.469      | -            | -                | -                | -         |     0.59 | biguzera, kauez, lux, nqz, snow |
|           50 |     2054 | 2024-09-25 | ODDIK          | W   | 0.469      | -            | -                | -                | -         |     0.60 | biguzera, kauez, lux, nqz, snow |
|           49 |     2102 | 2024-09-24 | Sharks         | W   | 0.463      | 0.450        | -                | 0.597 (0.124)    | -         |     1.99 | biguzera, kauez, lux, nqz, snow |
|           48 |     2109 | 2024-09-24 | Sharks         | W   | 0.462      | 0.450        | -                | 0.597 (0.124)    | -         |     2.03 | biguzera, kauez, lux, nqz, snow |
|           47 |     2149 | 2024-09-23 | RED Canids     | W   | 0.455      | -            | -                | -                | -         |     1.30 | biguzera, kauez, lux, nqz, snow |
|           46 |     2165 | 2024-09-23 | inSanitY       | W   | 0.454      | -            | -                | -                | -         |     0.28 | biguzera, kauez, lux, nqz, snow |
|           45 |     2255 | 2024-09-19 | KRÜ            | W   | 0.429      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, snow |
|           44 |     2258 | 2024-09-19 | KRÜ            | W   | 0.429      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, snow |
|           43 |     2291 | 2024-09-18 | BESTIA         | W   | 0.422      | 0.450        | 0.156 (0.030)    | -                | -         |     0.98 | biguzera, kauez, lux, nqz, snow |
|           42 |     2295 | 2024-09-18 | BESTIA         | W   | 0.422      | -            | -                | -                | -         |     0.99 | biguzera, kauez, lux, nqz, snow |
|           41 |     2818 | 2024-08-31 | Eternal Fire   | L   | 0.299      | -            | -                | -                | -         |    -6.37 | biguzera, kauez, lux, nqz, snow |
|           40 |     2828 | 2024-08-30 | Virtus.pro     | W   | 0.294      | 0.769        | 0.146 (0.033)    | -                | 1 (0.294) |     2.23 | biguzera, kauez, lux, nqz, snow |
|           39 |     2856 | 2024-08-29 | MOUZ           | L   | 0.288      | -            | -                | -                | -         |    -1.37 | biguzera, kauez, lux, nqz, snow |
|           38 |     2908 | 2024-08-28 | HEROIC         | W   | 0.281      | 0.769        | 0.873 (0.189)    | 0.599 (0.129)    | -         |     7.14 | biguzera, kauez, lux, nqz, snow |
|           37 |     2998 | 2024-08-27 | Falcons        | W   | 0.272      | -            | -                | -                | -         |     0.57 | biguzera, kauez, lux, nqz, snow |
|           36 |     3106 | 2024-08-25 | 9z             | W   | 0.260      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, nqz, snow |
|           35 |     3122 | 2024-08-24 | FaZe           | L   | 0.255      | -            | -                | -                | -         |    -0.78 | biguzera, kauez, lux, nqz, snow |
|           34 |     3125 | 2024-08-24 | BetBoom        | W   | 0.254      | -            | -                | -                | -         |     0.78 | biguzera, kauez, lux, nqz, snow |
|           33 |     3151 | 2024-08-23 | Cloud9         | W   | 0.247      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, snow |
|           32 |     3477 | 2024-08-13 | G2             | L   | 0.180      | -            | -                | -                | -         |    -0.36 | biguzera, kauez, lux, nqz, snow |
|           31 |     3516 | 2024-08-12 | The MongolZ    | W   | 0.175      | 1.000        | 1.000 (0.175)    | -                | -         |     4.91 | biguzera, kauez, lux, nqz, snow |
|           30 |     3545 | 2024-08-11 | 9z             | W   | 0.168      | -            | -                | -                | -         |     0.30 | biguzera, kauez, lux, nqz, snow |
|           29 |     3569 | 2024-08-10 | Natus Vincere  | L   | 0.161      | -            | -                | -                | -         |    -0.98 | biguzera, kauez, lux, nqz, snow |
|           28 |     3591 | 2024-08-09 | MIBR           | W   | 0.155      | -            | -                | -                | -         |     2.79 | biguzera, kauez, lux, nqz, snow |
|           27 |     3603 | 2024-08-09 | Imperial       | W   | 0.153      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, snow |
|           26 |     3653 | 2024-08-07 | Liquid         | L   | 0.142      | -            | -                | -                | -         |    -1.42 | biguzera, kauez, lux, nqz, snow |
|           25 |     3794 | 2024-08-03 | Legacy         | W   | 0.116      | -            | -                | -                | -         |     0.19 | biguzera, kauez, lux, nqz, snow |
|           24 |     3806 | 2024-08-03 | ODDIK          | W   | 0.114      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, nqz, snow |
|           23 |     3829 | 2024-08-02 | MIBR           | W   | 0.109      | -            | -                | -                | -         |     1.99 | biguzera, kauez, lux, nqz, snow |
|           22 |     3832 | 2024-08-02 | Legacy         | W   | 0.108      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, snow |
|           21 |     3848 | 2024-08-02 | Sharks         | W   | 0.107      | -            | -                | -                | -         |     0.61 | biguzera, kauez, lux, nqz, snow |
|           20 |     3884 | 2024-08-01 | Sharks         | W   | 0.100      | -            | -                | -                | -         |     0.57 | biguzera, kauez, lux, nqz, snow |
|           19 |     3913 | 2024-07-31 | ODDIK          | W   | 0.096      | -            | -                | -                | -         |     0.12 | biguzera, kauez, lux, nqz, snow |
|           18 |     3937 | 2024-07-31 | Dusty Roots    | W   | 0.093      | -            | -                | -                | -         |     0.09 | biguzera, kauez, lux, nqz, snow |
|           17 |     3961 | 2024-07-30 | Players        | W   | 0.089      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, nqz, snow |
|           16 |     3964 | 2024-07-30 | Players        | W   | 0.089      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, nqz, snow |
|           15 |     3978 | 2024-07-30 | Case           | W   | 0.087      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, nqz, snow |
|           14 |     3998 | 2024-07-29 | Imperial       | W   | 0.083      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, snow |
|           13 |     4026 | 2024-07-28 | Imperial       | W   | 0.077      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, snow |
|           12 |     4033 | 2024-07-28 | RED Canids     | W   | 0.075      | -            | -                | -                | -         |     0.22 | biguzera, kauez, lux, nqz, snow |
|           11 |     4247 | 2024-07-21 | Fluxo          | L   | 0.028      | -            | -                | -                | -         |    -0.82 | biguzera, kauez, lux, nqz, snow |
|           10 |     4256 | 2024-07-21 | Fluxo          | W   | 0.027      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, nqz, snow |
|            9 |     4280 | 2024-07-20 | Imperial       | W   | 0.022      | -            | -                | -                | -         |     0.09 | biguzera, kauez, lux, nqz, snow |
|            8 |     4295 | 2024-07-20 | Bounty Hunters | W   | 0.020      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |
|            7 |     4316 | 2024-07-19 | Fluxo          | W   | 0.015      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, nqz, snow |
|            6 |     4328 | 2024-07-19 | ex-Vikings     | W   | 0.014      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |
|            5 |     4355 | 2024-07-18 | Dusty Roots    | W   | 0.009      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |
|            4 |     4360 | 2024-07-18 | Dusty Roots    | W   | 0.009      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |
|            3 |     4423 | 2024-07-17 | Case           | W   | 0.002      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |
|            2 |     4425 | 2024-07-17 | Case           | W   | 0.002      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |
|            1 |     4453 | 2024-07-17 | W7M            | W   | 0.000      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($61,474.20)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-10-27 |      0.681 | $10,000.00     | $6,810.62       |
| 2024-10-20 |      0.635 | $20,000.00     | $12,708.26      |
| 2024-10-13 |      0.588 | $4,000.00      | $2,353.15       |
| 2024-10-05 |      0.535 | $1,875.00      | $1,003.27       |
| 2024-09-01 |      0.306 | $25,000.00     | $7,658.70       |
| 2024-08-27 |      0.273 | $10,000.00     | $2,734.15       |
| 2024-08-25 |      0.261 | $7,500.00      | $1,960.47       |
| 2024-08-18 |      0.215 | $24,000.00     | $5,155.00       |
| 2024-08-02 |      0.109 | $10,000.00     | $1,090.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
