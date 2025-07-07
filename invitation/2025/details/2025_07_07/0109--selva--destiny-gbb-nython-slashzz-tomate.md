### Roster Details<br />
Team Name: SELVA<br />
Roster: destiny, gbb, nython, slashzz, tomate<br />
Global Rank: [109](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [28]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  764.0<br />
<br />
Final Rank Value (764.0) = Starting Rank Value (800.8) + Head To Head Adjustments (-36.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.8
- 400 + ( ( 0.215 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 800.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       12 | 2025-06-30 | Bounty Hunters     | L   | 1.000      | -            | -                | -                | -         |   -16.26 | destiny, gbb, nython, slashzz, tomate |
|           61 |       17 | 2025-06-29 | ex-W7M             | L   | 1.000      | -            | -                | -                | -         |   -17.71 | destiny, gbb, nython, slashzz, tomate |
|           60 |       42 | 2025-06-24 | 2GAME              | L   | 1.000      | -            | -                | -                | -         |   -15.45 | destiny, gbb, nython, slashzz, tomate |
|           59 |      690 | 2025-05-15 | Players            | L   | 0.849      | -            | -                | -                | -         |   -20.16 | destiny, drg, gbb, nython, tomate     |
|           58 |      740 | 2025-05-13 | América            | L   | 0.835      | -            | -                | -                | -         |   -20.12 | destiny, drg, gbb, nython, tomate     |
|           57 |      754 | 2025-05-13 | ex-W7M             | L   | 0.834      | -            | -                | -                | -         |   -19.26 | destiny, drg, gbb, nython, tomate     |
|           56 |      806 | 2025-05-11 | Fluxo              | L   | 0.822      | -            | -                | -                | -         |   -10.59 | destiny, drg, gbb, nython, tomate     |
|           55 |      833 | 2025-05-10 | Sharks             | W   | 0.815      | 0.450        | 0.059 (0.022)    | 0.688 (0.252)    | 0 (0.000) |    15.06 | destiny, drg, gbb, nython, tomate     |
|           54 |      860 | 2025-05-09 | Fluxo              | L   | 0.808      | -            | -                | -                | -         |   -10.64 | destiny, drg, gbb, nython, tomate     |
|           53 |      908 | 2025-05-07 | Keyd Stars         | W   | 0.795      | 0.450        | 0.008 (0.003)    | 0.499 (0.179)    | 0 (0.000) |     9.94 | destiny, drg, gbb, nython, tomate     |
|           52 |     1388 | 2025-04-16 | ODDIK              | L   | 0.653      | -            | -                | -                | -         |    -8.59 | destiny, drg, gbb, nython, tomate     |
|           51 |     1407 | 2025-04-15 | Sharks             | L   | 0.647      | -            | -                | -                | -         |    -8.48 | destiny, drg, gbb, nython, tomate     |
|           50 |     1516 | 2025-04-09 | RED Canids         | W   | 0.608      | 0.450        | 0.016 (0.004)    | 0.564 (0.155)    | 0 (0.000) |     8.12 | destiny, drg, gbb, nython, tomate     |
|           49 |     1523 | 2025-04-09 | RED Canids         | W   | 0.608      | 0.450        | 0.016 (0.004)    | 0.564 (0.154)    | 0 (0.000) |     8.56 | destiny, drg, gbb, nython, tomate     |
|           48 |     1568 | 2025-04-08 | Fluxo              | W   | 0.602      | 0.450        | 0.042 (0.011)    | 0.448 (0.121)    | 0 (0.000) |    10.29 | destiny, drg, gbb, nython, tomate     |
|           47 |     1572 | 2025-04-08 | Fluxo              | W   | 0.601      | 0.450        | 0.042 (0.011)    | 0.448 (0.121)    | 0 (0.000) |    10.84 | destiny, drg, gbb, nython, tomate     |
|           46 |     1615 | 2025-04-07 | Sharks             | W   | 0.593      | 0.450        | 0.059 (0.016)    | 0.688 (0.184)    | 0 (0.000) |    12.16 | destiny, drg, gbb, nython, tomate     |
|           45 |     1616 | 2025-04-07 | Sharks             | W   | 0.593      | 0.450        | 0.059 (0.016)    | 0.688 (0.184)    | 0 (0.000) |    12.73 | destiny, drg, gbb, nython, tomate     |
|           44 |     1646 | 2025-04-05 | Sharks             | L   | 0.582      | -            | -                | -                | -         |    -6.00 | destiny, drg, gbb, nython, tomate     |
|           43 |     1662 | 2025-04-04 | RED Canids         | L   | 0.575      | -            | -                | -                | -         |    -9.13 | destiny, drg, gbb, nython, tomate     |
|           42 |     1690 | 2025-04-03 | FURIA fe           | W   | 0.567      | 0.143        | 0.137 (0.011)    | -                | 0 (0.000) |    13.22 | destiny, drg, gbb, nython, tomate     |
|           41 |     1851 | 2025-03-30 | Fluxo              | L   | 0.541      | -            | -                | -                | -         |    -7.51 | destiny, drg, gbb, nython, tomate     |
|           40 |     1856 | 2025-03-30 | Dusty Roots        | W   | 0.540      | -            | -                | -                | 0 (0.000) |     4.39 | destiny, drg, gbb, nython, tomate     |
|           39 |     1889 | 2025-03-29 | LaChampionsLiga    | W   | 0.535      | -            | -                | -                | -         |     2.77 | destiny, drg, gbb, nython, tomate     |
|           38 |     1908 | 2025-03-29 | Yawara             | W   | 0.534      | -            | -                | -                | -         |     4.97 | destiny, drg, gbb, nython, tomate     |
|           37 |     1951 | 2025-03-28 | Dusty Roots        | L   | 0.529      | -            | -                | -                | -         |   -12.44 | destiny, drg, gbb, nython, tomate     |
|           36 |     2030 | 2025-03-27 | Galorys            | W   | 0.521      | -            | -                | -                | -         |     2.01 | destiny, drg, gbb, nython, tomate     |
|           35 |     2096 | 2025-03-26 | KRÜ                | W   | 0.515      | 0.450        | -                | 0.423 (0.098)    | -         |     5.69 | destiny, drg, gbb, nython, tomate     |
|           34 |     2099 | 2025-03-26 | KRÜ                | W   | 0.515      | 0.450        | -                | 0.423 (0.098)    | -         |     5.93 | destiny, drg, gbb, nython, tomate     |
|           33 |     2341 | 2025-03-18 | Floripa Stars      | W   | 0.462      | -            | -                | -                | -         |     4.05 | destiny, drg, gbb, nython, tomate     |
|           32 |     2344 | 2025-03-18 | Floripa Stars      | W   | 0.462      | -            | -                | -                | -         |     4.19 | destiny, drg, gbb, nython, tomate     |
|           31 |     2482 | 2025-03-11 | 9z                 | L   | 0.416      | -            | -                | -                | -         |    -6.75 | destiny, drg, gbb, nython, tomate     |
|           30 |     2511 | 2025-03-10 | Fluxo              | W   | 0.408      | -            | -                | -                | -         |     7.26 | destiny, drg, gbb, nython, tomate     |
|           29 |     2519 | 2025-03-10 | KRÜ                | W   | 0.407      | -            | -                | -                | -         |     4.88 | destiny, drg, gbb, nython, tomate     |
|           28 |     2554 | 2025-03-09 | Fluxo              | L   | 0.401      | -            | -                | -                | -         |    -5.67 | destiny, drg, gbb, nython, tomate     |
|           27 |     2611 | 2025-03-08 | KRÜ                | W   | 0.395      | -            | -                | -                | -         |     4.67 | destiny, drg, gbb, nython, tomate     |
|           26 |     2623 | 2025-03-08 | Keyd Stars         | L   | 0.394      | -            | -                | -                | -         |    -7.08 | destiny, drg, gbb, nython, tomate     |
|           25 |     2727 | 2025-03-07 | Bounty Hunters     | W   | 0.386      | -            | -                | -                | -         |     5.25 | destiny, drg, gbb, nython, tomate     |
|           24 |     2981 | 2025-02-26 | Bounty Hunters     | L   | 0.328      | -            | -                | -                | -         |    -6.00 | destiny, drg, gbb, nython, tomate     |
|           23 |     2984 | 2025-02-26 | Bounty Hunters     | W   | 0.328      | -            | -                | -                | -         |     4.42 | destiny, drg, gbb, nython, tomate     |
|           22 |     3135 | 2025-02-21 | Fluxo              | L   | 0.295      | -            | -                | -                | -         |    -4.33 | destiny, drg, gbb, nython, tomate     |
|           21 |     3194 | 2025-02-19 | RED Canids         | W   | 0.282      | -            | -                | -                | -         |     3.00 | destiny, drg, gbb, nython, tomate     |
|           20 |     3338 | 2025-02-14 | Dusty Roots        | W   | 0.248      | -            | -                | -                | -         |     2.06 | destiny, drg, gbb, nython, tomate     |
|           19 |     3383 | 2025-02-12 | GameHunters        | W   | 0.236      | -            | -                | -                | -         |     2.01 | destiny, drg, gbb, nython, tomate     |
|           18 |     3487 | 2025-02-09 | ShindeN            | W   | 0.213      | -            | -                | -                | -         |     2.27 | destiny, drg, gbb, nython, tomate     |
|           17 |     3576 | 2025-02-07 | Legacy             | L   | 0.201      | -            | -                | -                | -         |    -0.15 | destiny, drg, gbb, nython, tomate     |
|           16 |     3595 | 2025-02-06 | Dusty Roots        | W   | 0.195      | -            | -                | -                | -         |     1.61 | destiny, drg, gbb, nython, tomate     |
|           15 |     3621 | 2025-02-05 | Legacy             | L   | 0.188      | -            | -                | -                | -         |    -0.14 | destiny, drg, gbb, nython, tomate     |
|           14 |     3634 | 2025-02-05 | Dusty Roots        | W   | 0.187      | -            | -                | -                | -         |     1.55 | destiny, drg, gbb, nython, tomate     |
|           13 |     3745 | 2025-01-28 | GameHunters        | W   | 0.135      | -            | -                | -                | -         |     1.18 | destiny, drg, gbb, nython, tomate     |
|           12 |     3749 | 2025-01-28 | GameHunters        | W   | 0.135      | -            | -                | -                | -         |     1.19 | destiny, drg, gbb, nython, tomate     |
|           11 |     3780 | 2025-01-27 | ODDIK              | W   | 0.129      | 0.450        | 0.068 (0.004)    | -                | -         |     3.04 | destiny, drg, gbb, nython, tomate     |
|           10 |     3782 | 2025-01-27 | ODDIK              | L   | 0.128      | -            | -                | -                | -         |    -1.01 | destiny, drg, gbb, nython, tomate     |
|            9 |     3820 | 2025-01-24 | UNO MILLE          | W   | 0.109      | -            | -                | -                | -         |     0.99 | destiny, drg, gbb, nython, tomate     |
|            8 |     3823 | 2025-01-24 | UNO MILLE          | W   | 0.108      | -            | -                | -                | -         |     1.00 | destiny, drg, gbb, nython, tomate     |
|            7 |     3862 | 2025-01-23 | Yawara             | L   | 0.102      | -            | -                | -                | -         |    -2.03 | destiny, drg, gbb, nython, tomate     |
|            6 |     3864 | 2025-01-23 | Yawara             | L   | 0.102      | -            | -                | -                | -         |    -2.04 | destiny, drg, gbb, nython, tomate     |
|            5 |     3929 | 2025-01-21 | Keyd Stars         | L   | 0.089      | -            | -                | -                | -         |    -1.61 | destiny, drg, gbb, nython, tomate     |
|            4 |     3932 | 2025-01-21 | Keyd Stars         | W   | 0.088      | -            | -                | -                | -         |     1.18 | destiny, drg, gbb, nython, tomate     |
|            3 |     3974 | 2025-01-11 | BESTIA             | L   | 0.021      | -            | -                | -                | -         |    -0.37 | destiny, drg, gbb, nython, tomate     |
|            2 |     3983 | 2025-01-10 | Familia Maquininha | W   | 0.013      | -            | -                | -                | -         |     0.04 | destiny, drg, gbb, nython, tomate     |
|            1 |     3988 | 2025-01-09 | UNO MILLE          | W   | 0.007      | -            | -                | -                | -         |     0.06 | destiny, drg, gbb, nython, tomate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,915.66)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-29 |      0.941 | $180.00        | $169.33         |
| 2025-05-11 |      0.822 | $11,500.00     | $9,448.20       |
| 2025-02-22 |      0.303 | $750.00        | $227.12         |
| 2025-01-12 |      0.028 | $2,500.00      | $71.01          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
