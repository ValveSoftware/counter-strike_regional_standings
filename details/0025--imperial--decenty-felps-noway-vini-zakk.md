### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, VINI, zakk<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1346.0<br />
<br />
Final Rank Value (1346.0) = Starting Rank Value (1485.2) + Head To Head Adjustments (-139.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.708[<sup>1</sup>](#table2)
- Bounty Collected: 0.560[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.496[<sup>2</sup>](#table1)

The average of these factors is 0.505<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1485.2
- 400 + ( ( 0.505 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1485.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           96 |       97 | 2024-07-15 | Case              | L   | 1.000      | -            | -                | -                | -         |   -28.93 | decenty, felps, noway, VINI, zakk |
|           95 |      100 | 2024-07-15 | Case              | L   | 1.000      | -            | -                | -                | -         |   -29.61 | decenty, felps, noway, VINI, zakk |
|           94 |      347 | 2024-06-15 | fnatic            | L   | 0.987      | -            | -                | -                | -         |   -13.25 | decenty, felps, HEN1, noway, VINI |
|           93 |      374 | 2024-06-14 | KOI               | L   | 0.982      | -            | -                | -                | -         |   -25.52 | decenty, felps, HEN1, noway, VINI |
|           92 |      499 | 2024-06-10 | paiN              | L   | 0.954      | -            | -                | -                | -         |   -13.96 | decenty, felps, HEN1, noway, VINI |
|           91 |      527 | 2024-06-09 | RED Canids        | W   | 0.948      | 0.450        | 0.123 (0.052)    | 0.714 (0.305)    | -         |     7.79 | decenty, felps, HEN1, noway, VINI |
|           90 |      543 | 2024-06-09 | ODDIK             | W   | 0.947      | 0.371        | -                | 0.678 (0.238)    | -         |     1.87 | decenty, felps, HEN1, noway, VINI |
|           89 |      588 | 2024-06-08 | 9z                | W   | 0.942      | 0.450        | 0.606 (0.257)    | 0.728 (0.308)    | -         |    21.34 | decenty, felps, HEN1, noway, VINI |
|           88 |      648 | 2024-06-07 | Galorys           | W   | 0.935      | -            | -                | -                | -         |     1.22 | decenty, felps, HEN1, noway, VINI |
|           87 |      702 | 2024-06-06 | RED Canids        | L   | 0.929      | -            | -                | -                | -         |   -21.38 | decenty, felps, HEN1, noway, VINI |
|           86 |      771 | 2024-06-05 | Sharks            | W   | 0.922      | 0.450        | -                | 0.501 (0.208)    | -         |     3.27 | decenty, felps, HEN1, noway, VINI |
|           85 |     1140 | 2024-05-22 | 9z                | W   | 0.829      | 0.450        | 0.606 (0.226)    | 0.728 (0.271)    | -         |    17.95 | decenty, felps, HEN1, noway, VINI |
|           84 |     1142 | 2024-05-22 | 9z                | W   | 0.828      | 0.450        | 0.606 (0.226)    | 0.728 (0.271)    | -         |    19.06 | decenty, felps, HEN1, noway, VINI |
|           83 |     1152 | 2024-05-22 | Sharks            | L   | 0.827      | -            | -                | -                | -         |   -23.19 | decenty, felps, HEN1, noway, VINI |
|           82 |     1156 | 2024-05-22 | Sharks            | W   | 0.827      | -            | -                | -                | -         |     2.66 | decenty, felps, HEN1, noway, VINI |
|           81 |     1193 | 2024-05-21 | BESTIA            | L   | 0.821      | -            | -                | -                | -         |   -23.28 | decenty, felps, HEN1, noway, VINI |
|           80 |     1195 | 2024-05-21 | BESTIA            | L   | 0.821      | -            | -                | -                | -         |   -23.83 | decenty, felps, HEN1, noway, VINI |
|           79 |     1352 | 2024-05-16 | 9z                | W   | 0.788      | 0.384        | 0.606 (0.183)    | 0.728 (0.220)    | -         |    18.53 | decenty, felps, HEN1, noway, VINI |
|           78 |     1409 | 2024-05-15 | Fluxo             | W   | 0.780      | 0.384        | 0.169 (0.051)    | -                | -         |     4.12 | decenty, felps, HEN1, noway, VINI |
|           77 |     1443 | 2024-05-14 | W7M               | W   | 0.776      | -            | -                | -                | -         |     0.67 | decenty, felps, HEN1, noway, VINI |
|           76 |     1446 | 2024-05-14 | W7M               | W   | 0.776      | -            | -                | -                | -         |     0.68 | decenty, felps, HEN1, noway, VINI |
|           75 |     1455 | 2024-05-14 | BESTIA            | W   | 0.775      | -            | -                | -                | -         |     1.70 | decenty, felps, HEN1, noway, VINI |
|           74 |     1496 | 2024-05-13 | KRÜ               | W   | 0.767      | -            | -                | -                | -         |     1.25 | decenty, felps, HEN1, noway, VINI |
|           73 |     1565 | 2024-05-10 | BESTIA            | L   | 0.748      | -            | -                | -                | -         |   -22.15 | decenty, felps, HEN1, noway, VINI |
|           72 |     1623 | 2024-05-07 | ODDIK             | W   | 0.729      | 0.435        | -                | 0.678 (0.215)    | -         |     1.76 | decenty, felps, HEN1, noway, VINI |
|           71 |     1663 | 2024-05-05 | inSanitY          | W   | 0.714      | -            | -                | -                | -         |     1.23 | decenty, felps, HEN1, noway, VINI |
|           70 |     1861 | 2024-04-26 | SAW               | L   | 0.653      | -            | -                | -                | -         |   -15.95 | decenty, felps, HEN1, noway, VINI |
|           69 |     1904 | 2024-04-24 | Eternal Fire      | L   | 0.641      | -            | -                | -                | -         |    -4.10 | decenty, felps, HEN1, noway, VINI |
|           68 |     1923 | 2024-04-23 | FaZe              | L   | 0.634      | -            | -                | -                | -         |    -1.58 | decenty, felps, HEN1, noway, VINI |
|           67 |     1975 | 2024-04-20 | paiN              | L   | 0.615      | -            | -                | -                | -         |    -7.68 | decenty, felps, HEN1, noway, VINI |
|           66 |     2006 | 2024-04-20 | paiN              | W   | 0.611      | 0.589        | 0.476 (0.171)    | 0.763 (0.274)    | 1 (0.611) |    11.63 | decenty, felps, HEN1, noway, VINI |
|           65 |     2020 | 2024-04-19 | paiN              | L   | 0.608      | -            | -                | -                | -         |    -7.43 | decenty, felps, HEN1, noway, VINI |
|           64 |     2057 | 2024-04-18 | MIBR              | L   | 0.603      | -            | -                | -                | -         |    -7.00 | decenty, felps, HEN1, noway, VINI |
|           63 |     2060 | 2024-04-18 | 9z                | W   | 0.602      | 0.589        | 0.606 (0.215)    | 0.728 (0.258)    | 1 (0.602) |    15.02 | decenty, felps, HEN1, noway, VINI |
|           62 |     2061 | 2024-04-18 | Fluxo             | W   | 0.602      | -            | -                | -                | -         |     2.32 | decenty, felps, HEN1, noway, VINI |
|           61 |     2072 | 2024-04-18 | Metizport         | W   | 0.600      | -            | -                | -                | 1 (0.600) |     1.32 | decenty, felps, HEN1, noway, VINI |
|           60 |     2175 | 2024-04-15 | MIBR              | L   | 0.582      | -            | -                | -                | -         |    -6.97 | decenty, felps, HEN1, noway, VINI |
|           59 |     2190 | 2024-04-14 | paiN              | W   | 0.574      | 0.435        | 0.476 (0.119)    | -                | -         |    11.34 | decenty, felps, HEN1, noway, VINI |
|           58 |     2200 | 2024-04-13 | RED Canids        | W   | 0.569      | -            | -                | -                | -         |     2.97 | decenty, felps, HEN1, noway, VINI |
|           57 |     2236 | 2024-04-11 | adalYamigos       | W   | 0.556      | -            | -                | -                | -         |     0.21 | decenty, felps, HEN1, noway, VINI |
|           56 |     2246 | 2024-04-11 | paiN              | L   | 0.554      | -            | -                | -                | -         |    -6.31 | decenty, felps, HEN1, noway, VINI |
|           55 |     2273 | 2024-04-10 | Fluxo             | L   | 0.549      | -            | -                | -                | -         |   -15.36 | decenty, felps, HEN1, noway, VINI |
|           54 |     2277 | 2024-04-10 | Fluxo             | W   | 0.548      | -            | -                | -                | -         |     1.87 | decenty, felps, HEN1, noway, VINI |
|           53 |     2293 | 2024-04-10 | MIBR              | L   | 0.547      | -            | -                | -                | -         |    -7.27 | decenty, felps, HEN1, noway, VINI |
|           52 |     2339 | 2024-04-09 | Solid             | W   | 0.541      | -            | -                | -                | -         |     0.67 | decenty, felps, HEN1, noway, VINI |
|           51 |     2344 | 2024-04-09 | Solid             | W   | 0.541      | -            | -                | -                | -         |     0.67 | decenty, felps, HEN1, noway, VINI |
|           50 |     2349 | 2024-04-09 | paiN              | W   | 0.540      | -            | -                | -                | -         |    10.64 | decenty, felps, HEN1, noway, VINI |
|           49 |     2403 | 2024-04-07 | RED Canids        | W   | 0.528      | -            | -                | -                | -         |     2.48 | decenty, felps, HEN1, noway, VINI |
|           48 |     2406 | 2024-04-07 | FURIA Academy     | W   | 0.527      | -            | -                | -                | -         |     0.09 | decenty, felps, HEN1, noway, VINI |
|           47 |     2464 | 2024-04-04 | ODDIK             | W   | 0.509      | -            | -                | -                | -         |     1.11 | decenty, felps, HEN1, noway, VINI |
|           46 |     2469 | 2024-04-04 | ODDIK             | W   | 0.508      | -            | -                | -                | -         |     1.12 | decenty, felps, HEN1, noway, VINI |
|           45 |     2472 | 2024-04-04 | BESTIA            | W   | 0.508      | -            | -                | -                | -         |     1.04 | decenty, felps, HEN1, noway, VINI |
|           44 |     2502 | 2024-04-03 | Case              | W   | 0.502      | -            | -                | -                | -         |     0.71 | decenty, felps, HEN1, noway, VINI |
|           43 |     2505 | 2024-04-03 | Case              | W   | 0.502      | -            | -                | -                | -         |     0.71 | decenty, felps, HEN1, noway, VINI |
|           42 |     2709 | 2024-03-23 | FaZe              | L   | 0.426      | -            | -                | -                | -         |    -1.21 | decenty, felps, HEN1, noway, VINI |
|           41 |     2722 | 2024-03-22 | Vitality          | L   | 0.419      | -            | -                | -                | -         |    -0.75 | decenty, felps, HEN1, noway, VINI |
|           40 |     2732 | 2024-03-21 | Spirit            | L   | 0.415      | -            | -                | -                | -         |    -0.69 | decenty, felps, HEN1, noway, VINI |
|           39 |     2750 | 2024-03-21 | Virtus.pro        | W   | 0.412      | 1.000        | 0.349 (0.144)    | -                | 1 (0.412) |    10.68 | decenty, felps, HEN1, noway, VINI |
|           38 |     2769 | 2024-03-20 | GamerLegion       | W   | 0.407      | -            | -                | -                | 1 (0.407) |     0.70 | decenty, felps, HEN1, noway, VINI |
|           37 |     2782 | 2024-03-19 | Gaimin Gladiators | L   | 0.401      | -            | -                | -                | -         |   -11.05 | decenty, felps, HEN1, noway, VINI |
|           36 |     2798 | 2024-03-18 | Apeks             | W   | 0.392      | -            | -                | -                | 1 (0.392) |     1.04 | decenty, felps, HEN1, noway, VINI |
|           35 |     2816 | 2024-03-17 | HEROIC            | L   | 0.388      | -            | -                | -                | -         |    -2.29 | decenty, felps, HEN1, noway, VINI |
|           34 |     2825 | 2024-03-17 | ENCE              | W   | 0.386      | -            | -                | -                | 1 (0.386) |     5.67 | decenty, felps, HEN1, noway, VINI |
|           33 |     3055 | 2024-03-07 | Monte             | L   | 0.322      | -            | -                | -                | -         |    -8.94 | decenty, felps, HEN1, noway, VINI |
|           32 |     3173 | 2024-03-03 | paiN              | W   | 0.294      | -            | -                | -                | 1 (0.294) |     5.90 | decenty, felps, HEN1, noway, VINI |
|           31 |     3204 | 2024-03-02 | M80               | W   | 0.287      | -            | -                | -                | 1 (0.287) |     2.01 | decenty, felps, HEN1, noway, VINI |
|           30 |     3217 | 2024-03-01 | NRG               | W   | 0.282      | -            | -                | -                | 1 (0.282) |     0.33 | decenty, felps, HEN1, noway, VINI |
|           29 |     3308 | 2024-02-25 | Fluxo             | L   | 0.248      | -            | -                | -                | -         |    -7.06 | decenty, felps, HEN1, noway, VINI |
|           28 |     3340 | 2024-02-24 | BESTIA            | W   | 0.241      | -            | -                | -                | -         |     0.58 | decenty, felps, HEN1, noway, VINI |
|           27 |     3367 | 2024-02-22 | BESTIA            | L   | 0.229      | -            | -                | -                | -         |    -6.69 | decenty, felps, HEN1, noway, VINI |
|           26 |     3377 | 2024-02-22 | FURIA             | L   | 0.228      | -            | -                | -                | -         |    -2.19 | decenty, felps, HEN1, noway, VINI |
|           25 |     3392 | 2024-02-21 | 2GAME             | W   | 0.222      | -            | -                | -                | -         |     0.09 | decenty, felps, HEN1, noway, VINI |
|           24 |     3396 | 2024-02-21 | 2GAME             | W   | 0.222      | -            | -                | -                | -         |     0.09 | decenty, felps, HEN1, noway, VINI |
|           23 |     3405 | 2024-02-21 | LA RUGONETA       | W   | 0.220      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|           22 |     3497 | 2024-02-17 | adalYamigos       | W   | 0.195      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           21 |     3526 | 2024-02-16 | Galorys           | W   | 0.187      | -            | -                | -                | -         |     0.20 | decenty, felps, HEN1, noway, VINI |
|           20 |     3529 | 2024-02-16 | Galorys           | W   | 0.187      | -            | -                | -                | -         |     0.20 | decenty, felps, HEN1, noway, VINI |
|           19 |     3546 | 2024-02-15 | 9z                | W   | 0.182      | -            | -                | -                | -         |     4.68 | decenty, felps, HEN1, noway, VINI |
|           18 |     3548 | 2024-02-15 | Fluxo             | W   | 0.182      | -            | -                | -                | -         |     0.53 | decenty, felps, HEN1, noway, VINI |
|           17 |     3553 | 2024-02-15 | Solid             | W   | 0.181      | -            | -                | -                | -         |     0.25 | decenty, felps, HEN1, noway, VINI |
|           16 |     3583 | 2024-02-14 | Yawara            | W   | 0.175      | -            | -                | -                | -         |     0.02 | decenty, felps, HEN1, noway, VINI |
|           15 |     3620 | 2024-02-13 | RED Canids        | W   | 0.169      | -            | -                | -                | -         |     0.81 | decenty, felps, HEN1, noway, VINI |
|           14 |     3624 | 2024-02-13 | RED Canids        | L   | 0.169      | -            | -                | -                | -         |    -4.54 | decenty, felps, HEN1, noway, VINI |
|           13 |     3627 | 2024-02-13 | Solid             | W   | 0.168      | -            | -                | -                | -         |     0.23 | decenty, felps, HEN1, noway, VINI |
|           12 |     3724 | 2024-02-04 | 9z                | W   | 0.108      | -            | -                | -                | -         |     2.79 | decenty, felps, HEN1, noway, VINI |
|           11 |     3747 | 2024-02-03 | MIBR              | W   | 0.102      | -            | -                | -                | -         |     1.99 | decenty, felps, HEN1, noway, VINI |
|           10 |     3773 | 2024-02-02 | BESTIA            | W   | 0.096      | -            | -                | -                | -         |     0.23 | decenty, felps, HEN1, noway, VINI |
|            9 |     3777 | 2024-02-02 | 9z                | L   | 0.095      | -            | -                | -                | -         |    -0.55 | decenty, felps, HEN1, noway, VINI |
|            8 |     3779 | 2024-02-02 | BESTIA            | W   | 0.095      | -            | -                | -                | -         |     0.22 | decenty, felps, HEN1, noway, VINI |
|            7 |     3943 | 2024-01-24 | 9z                | W   | 0.036      | -            | -                | -                | -         |     0.92 | decenty, felps, HEN1, noway, VINI |
|            6 |     3963 | 2024-01-23 | BESTIA            | W   | 0.028      | -            | -                | -                | -         |     0.07 | decenty, felps, HEN1, noway, VINI |
|            5 |     3983 | 2024-01-22 | Hype              | W   | 0.022      | -            | -                | -                | -         |     0.00 | decenty, felps, HEN1, noway, VINI |
|            4 |     4017 | 2024-01-21 | paiN              | W   | 0.015      | -            | -                | -                | -         |     0.30 | decenty, felps, HEN1, noway, VINI |
|            3 |     4056 | 2024-01-20 | Fluxo             | W   | 0.008      | -            | -                | -                | -         |     0.02 | decenty, felps, HEN1, noway, VINI |
|            2 |     4099 | 2024-01-19 | BESTIA            | L   | 0.002      | -            | -                | -                | -         |    -0.07 | decenty, felps, HEN1, noway, VINI |
|            1 |     4108 | 2024-01-19 | Galorys           | W   | 0.001      | -            | -                | -                | -         |     0.00 | decenty, felps, HEN1, noway, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94,844.57)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $1,500.00      | $1,493.66       |
| 2024-06-10 |      0.956 | $1,500.00      | $1,433.35       |
| 2024-06-09 |      0.948 | $20,000.00     | $18,969.00      |
| 2024-05-16 |      0.788 | $20,000.00     | $15,754.60      |
| 2024-05-12 |      0.760 | $3,500.00      | $2,660.86       |
| 2024-04-20 |      0.615 | $50,000.00     | $30,759.53      |
| 2024-04-15 |      0.582 | $15,000.00     | $8,724.95       |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |
| 2024-03-10 |      0.341 | $5,000.00      | $1,706.91       |
| 2024-02-25 |      0.248 | $15,000.00     | $3,721.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
