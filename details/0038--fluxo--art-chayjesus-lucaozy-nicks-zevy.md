### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, chayJESUS, Lucaozy, nicks, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
Final Rank Value:  1200.0<br />
<br />
Final Rank Value (1200.0) = Starting Rank Value (1075.6) + Head To Head Adjustments (124.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.564[<sup>1</sup>](#table2)
- Bounty Collected: 0.472[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1075.6
- 400 + ( ( 0.315 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1075.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       83 | 2024-07-15 | Dusty Roots    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.27 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           78 |       88 | 2024-07-15 | Dusty Roots    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.32 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           77 |      312 | 2024-06-16 | paiN           | W   | 0.995      | 0.450        | 0.476 (0.213)    | 0.763 (0.342)    | 0 (0.000) |    25.93 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           76 |      341 | 2024-06-15 | inSanitY       | W   | 0.988      | 0.450        | 0.069 (0.031)    | 0.470 (0.209)    | 0 (0.000) |     9.60 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           75 |      375 | 2024-06-14 | Sharks         | W   | 0.982      | 0.450        | -                | 0.501 (0.221)    | 0 (0.000) |    12.83 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           74 |      587 | 2024-06-08 | KRÜ            | W   | 0.942      | -            | -                | -                | 0 (0.000) |     6.04 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           73 |      665 | 2024-06-07 | Bounty Hunters | W   | 0.934      | 0.450        | -                | 0.441 (0.185)    | 0 (0.000) |     6.66 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           72 |      728 | 2024-06-06 | W7M            | W   | 0.927      | 0.450        | -                | 0.418 (0.174)    | 0 (0.000) |     3.90 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           71 |      772 | 2024-06-05 | paiN           | L   | 0.922      | -            | -                | -                | -         |    -3.51 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           70 |      822 | 2024-06-04 | 9z             | L   | 0.916      | -            | -                | -                | -         |    -1.75 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           69 |     1149 | 2024-05-22 | BESTIA         | L   | 0.828      | -            | -                | -                | -         |   -14.99 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           68 |     1150 | 2024-05-22 | BESTIA         | L   | 0.828      | -            | -                | -                | -         |   -16.08 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           67 |     1220 | 2024-05-20 | RED Canids     | W   | 0.815      | 0.450        | 0.123 (0.045)    | 0.714 (0.262)    | 0 (0.000) |    15.95 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           66 |     1222 | 2024-05-20 | RED Canids     | L   | 0.815      | -            | -                | -                | -         |    -9.68 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           65 |     1280 | 2024-05-18 | 9z             | L   | 0.801      | -            | -                | -                | -         |    -1.57 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           64 |     1314 | 2024-05-17 | Case           | W   | 0.795      | 0.371        | -                | 0.697 (0.205)    | 0 (0.000) |     5.57 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           63 |     1347 | 2024-05-16 | RED Canids     | L   | 0.788      | -            | -                | -                | -         |   -10.91 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           62 |     1393 | 2024-05-15 | Smoke          | W   | 0.782      | -            | -                | -                | -         |     1.70 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           61 |     1395 | 2024-05-15 | Smoke          | W   | 0.782      | -            | -                | -                | -         |     1.74 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           60 |     1409 | 2024-05-15 | Imperial       | L   | 0.780      | -            | -                | -                | -         |    -4.12 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           59 |     1458 | 2024-05-14 | Sharks         | W   | 0.775      | -            | -                | -                | -         |     7.86 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           58 |     1471 | 2024-05-14 | ODDIK          | W   | 0.773      | 0.384        | 0.084 (0.025)    | 0.678 (0.202)    | -         |     7.74 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           57 |     1489 | 2024-05-13 | Hype           | W   | 0.768      | -            | -                | -                | -         |     3.64 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           56 |     1518 | 2024-05-12 | Vikings KR     | W   | 0.760      | -            | -                | -                | -         |     3.53 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           55 |     1578 | 2024-05-09 | paiN           | W   | 0.743      | 0.450        | 0.476 (0.159)    | 0.763 (0.255)    | -         |    21.19 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           54 |     1584 | 2024-05-09 | paiN           | L   | 0.742      | -            | -                | -                | -         |    -2.07 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           53 |     2056 | 2024-04-18 | paiN           | L   | 0.603      | -            | -                | -                | -         |    -1.58 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           52 |     2061 | 2024-04-18 | Imperial       | L   | 0.602      | -            | -                | -                | -         |    -2.32 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           51 |     2108 | 2024-04-17 | ODDIK          | W   | 0.596      | -            | -                | -                | -         |     6.08 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           50 |     2118 | 2024-04-17 | Solid          | W   | 0.595      | -            | -                | -                | -         |     4.56 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           49 |     2148 | 2024-04-16 | Hype           | W   | 0.589      | -            | -                | -                | -         |     3.32 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           48 |     2208 | 2024-04-13 | Galorys        | L   | 0.567      | -            | -                | -                | -         |   -13.63 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           47 |     2273 | 2024-04-10 | Imperial       | W   | 0.549      | 0.450        | 0.386 (0.095)    | -                | -         |    15.36 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           46 |     2277 | 2024-04-10 | Imperial       | L   | 0.548      | -            | -                | -                | -         |    -1.87 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           45 |     2327 | 2024-04-09 | ODDIK          | W   | 0.542      | 0.450        | -                | 0.678 (0.165)    | -         |     5.78 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           44 |     2332 | 2024-04-09 | ODDIK          | W   | 0.542      | -            | -                | -                | -         |     6.04 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           43 |     2368 | 2024-04-08 | ODDIK          | W   | 0.535      | -            | -                | -                | -         |     6.23 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           42 |     2417 | 2024-04-06 | BESTIA         | L   | 0.522      | -            | -                | -                | -         |   -10.67 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           41 |     2419 | 2024-04-06 | Solid          | W   | 0.522      | -            | -                | -                | -         |     4.44 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           40 |     2434 | 2024-04-05 | MIBR           | L   | 0.515      | -            | -                | -                | -         |    -1.32 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           39 |     2435 | 2024-04-05 | MIBR           | W   | 0.515      | 0.450        | 0.269 (0.062)    | -                | -         |    15.05 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           38 |     2462 | 2024-04-04 | Corinthians    | W   | 0.509      | -            | -                | -                | -         |     0.64 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           37 |     2468 | 2024-04-04 | Corinthians    | W   | 0.508      | -            | -                | -                | -         |     0.64 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           36 |     2480 | 2024-04-04 | RED Canids     | L   | 0.507      | -            | -                | -                | -         |    -5.79 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           35 |     2496 | 2024-04-03 | MIBR           | L   | 0.503      | -            | -                | -                | -         |    -1.16 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           34 |     2509 | 2024-04-03 | BESTIA         | W   | 0.501      | -            | -                | -                | -         |     6.14 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           33 |     2546 | 2024-04-02 | MIBR           | L   | 0.496      | -            | -                | -                | -         |    -1.12 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           32 |     2550 | 2024-04-02 | BESTIA         | W   | 0.495      | -            | -                | -                | -         |     6.22 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           31 |     2634 | 2024-03-27 | Galorys        | L   | 0.456      | -            | -                | -                | -         |   -10.80 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           30 |     2640 | 2024-03-27 | Galorys        | W   | 0.455      | -            | -                | -                | -         |     3.55 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           29 |     2915 | 2024-03-13 | Intense        | W   | 0.361      | -            | -                | -                | -         |     0.61 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           28 |     2921 | 2024-03-13 | Solid          | L   | 0.361      | -            | -                | -                | -         |    -8.29 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           27 |     2948 | 2024-03-12 | MIBR           | W   | 0.355      | 0.435        | 0.269 (0.041)    | -                | -         |    10.39 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           26 |     2978 | 2024-03-11 | Sharks         | W   | 0.347      | -            | -                | -                | -         |     4.19 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           25 |     3022 | 2024-03-09 | Corinthians    | W   | 0.333      | -            | -                | -                | -         |     0.43 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           24 |     3058 | 2024-03-07 | Case           | L   | 0.322      | -            | -                | -                | -         |    -7.05 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           23 |     3083 | 2024-03-06 | Solid          | L   | 0.316      | -            | -                | -                | -         |    -7.19 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           22 |     3085 | 2024-03-06 | Solid          | W   | 0.315      | -            | -                | -                | -         |     2.78 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           21 |     3150 | 2024-03-04 | Case           | W   | 0.302      | -            | -                | -                | -         |     3.08 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           20 |     3151 | 2024-03-04 | Case           | W   | 0.302      | -            | -                | -                | -         |     3.15 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           19 |     3308 | 2024-02-25 | Imperial       | W   | 0.248      | 0.435        | 0.386 (0.042)    | -                | -         |     7.06 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           18 |     3338 | 2024-02-24 | Sharks         | W   | 0.241      | -            | -                | -                | -         |     2.92 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           17 |     3389 | 2024-02-21 | W7M            | L   | 0.222      | -            | -                | -                | -         |    -5.55 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           16 |     3393 | 2024-02-21 | W7M            | W   | 0.222      | -            | -                | -                | -         |     1.46 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           15 |     3400 | 2024-02-21 | Solid          | W   | 0.220      | -            | -                | -                | -         |     2.14 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           14 |     3425 | 2024-02-20 | Solid          | L   | 0.215      | -            | -                | -                | -         |    -4.75 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           13 |     3521 | 2024-02-16 | 9z             | W   | 0.188      | 0.435        | 0.606 (0.049)    | -                | -         |     5.78 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           12 |     3548 | 2024-02-15 | Imperial       | L   | 0.182      | -            | -                | -                | -         |    -0.53 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           11 |     3551 | 2024-02-15 | W7M            | W   | 0.181      | -            | -                | -                | -         |     1.24 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           10 |     3555 | 2024-02-15 | Sharks         | W   | 0.181      | -            | -                | -                | -         |     2.23 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            9 |     3558 | 2024-02-15 | Sharks         | W   | 0.180      | -            | -                | -                | -         |     2.26 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            8 |     3579 | 2024-02-14 | Intense        | W   | 0.176      | -            | -                | -                | -         |     0.33 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            7 |     3644 | 2024-02-12 | Flamengo       | W   | 0.160      | -            | -                | -                | -         |     0.21 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            6 |     3961 | 2024-01-23 | 9z             | L   | 0.028      | -            | -                | -                | -         |    -0.02 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            5 |     3982 | 2024-01-22 | ODDIK          | W   | 0.022      | -            | -                | -                | -         |     0.32 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            4 |     4019 | 2024-01-21 | Case           | L   | 0.014      | -            | -                | -                | -         |    -0.43 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            3 |     4056 | 2024-01-20 | Imperial       | L   | 0.008      | -            | -                | -                | -         |    -0.02 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            2 |     4100 | 2024-01-19 | RED Canids     | L   | 0.002      | -            | -                | -                | -         |    -0.03 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            1 |     4107 | 2024-01-19 | adalYamigos    | W   | 0.001      | -            | -                | -                | -         |     0.00 | chayJESUS, Lucaozy, PKL, vsm, zevy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,401.46)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.995 | $30,000.00     | $29,844.18      |
| 2024-06-09 |      0.948 | $2,000.00      | $1,896.90       |
| 2024-05-19 |      0.808 | $2,000.00      | $1,616.89       |
| 2024-03-14 |      0.368 | $5,000.00      | $1,841.59       |
| 2024-02-25 |      0.248 | $25,000.00     | $6,201.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
