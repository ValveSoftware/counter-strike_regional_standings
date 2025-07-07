### Roster Details<br />
Team Name: Sharks<br />
Roster: aNgelo, doc, gafolo, koala, rdnzao<br />
Global Rank: [68](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [14]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  937.5<br />
<br />
Final Rank Value (937.5) = Starting Rank Value (982.6) + Head To Head Adjustments (-45.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.449[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.139[<sup>2</sup>](#table1)
- LAN Wins: 0.351[<sup>2</sup>](#table1)

The average of these factors is 0.312<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 982.6
- 400 + ( ( 0.312 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 982.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |       39 | 2025-06-24 | LP                | L   | 1.000      | -            | -                | -                | -         |   -25.24 | aNgelo, doc, gafolo, koala, rdnzao |
|           66 |      187 | 2025-06-14 | RED Canids        | W   | 1.000      | 0.361        | 0.016 (0.006)    | 0.564 (0.204)    | 1 (1.000) |     9.44 | aNgelo, doc, gafolo, koala, rdnzao |
|           65 |      489 | 2025-05-25 | ex-W7M            | W   | 0.915      | -            | -                | -                | 0 (0.000) |     6.30 | aNgelo, doc, gafolo, koala, rdnzao |
|           64 |      503 | 2025-05-24 | América           | W   | 0.908      | -            | -                | -                | 0 (0.000) |     4.76 | aNgelo, doc, gafolo, koala, rdnzao |
|           63 |      693 | 2025-05-15 | ex-W7M            | W   | 0.848      | -            | -                | -                | 0 (0.000) |     5.66 | aNgelo, doc, gafolo, koala, rdnzao |
|           62 |      744 | 2025-05-13 | ODDIK Academy     | W   | 0.835      | -            | -                | -                | 0 (0.000) |     3.56 | aNgelo, doc, gafolo, koala, rdnzao |
|           61 |      749 | 2025-05-13 | LP                | W   | 0.834      | 0.333        | -                | 0.406 (0.113)    | 0 (0.000) |     4.95 | aNgelo, doc, gafolo, koala, rdnzao |
|           60 |      833 | 2025-05-10 | SELVA             | L   | 0.815      | -            | -                | -                | -         |   -15.06 | doc, gafolo, kenznk, koala, rdnzao |
|           59 |      861 | 2025-05-09 | Bounty Hunters    | W   | 0.808      | 0.450        | 0.010 (0.004)    | 0.478 (0.174)    | 0 (0.000) |     6.45 | doc, gafolo, kenznk, koala, rdnzao |
|           58 |      882 | 2025-05-08 | GameHunters       | W   | 0.802      | 0.450        | -                | 0.340 (0.123)    | -         |     7.35 | doc, gafolo, kenznk, koala, rdnzao |
|           57 |      909 | 2025-05-07 | Fluxo             | L   | 0.795      | -            | -                | -                | -         |   -13.06 | doc, gafolo, kenznk, koala, rdnzao |
|           56 |     1052 | 2025-05-02 | Imperial          | L   | 0.760      | -            | -                | -                | -         |    -8.66 | doc, gafolo, koala, n1cks, rdnzao  |
|           55 |     1158 | 2025-04-27 | Ninjas in Pyjamas | L   | 0.729      | -            | -                | -                | -         |    -2.21 | doc, gafolo, koala, n1cks, rdnzao  |
|           54 |     1160 | 2025-04-27 | BOSS              | W   | 0.728      | 0.333        | 0.023 (0.006)    | 0.659 (0.160)    | 1 (0.728) |    11.22 | doc, gafolo, koala, n1cks, rdnzao  |
|           53 |     1179 | 2025-04-27 | Getting Info      | W   | 0.724      | 0.333        | 0.019 (0.005)    | 0.543 (0.131)    | 1 (0.724) |    12.36 | doc, gafolo, koala, n1cks, rdnzao  |
|           52 |     1185 | 2025-04-26 | Anti-Eco Club     | W   | 0.723      | -            | -                | -                | 1 (0.723) |     1.12 | doc, gafolo, koala, n1cks, rdnzao  |
|           51 |     1354 | 2025-04-17 | BESTIA            | L   | 0.660      | -            | -                | -                | -         |   -13.74 | doc, gafolo, koala, n1cks, rdnzao  |
|           50 |     1382 | 2025-04-16 | Imperial          | L   | 0.653      | -            | -                | -                | -         |    -7.22 | doc, gafolo, koala, n1cks, rdnzao  |
|           49 |     1407 | 2025-04-15 | SELVA             | W   | 0.647      | -            | -                | -                | -         |     8.48 | doc, gafolo, koala, n1cks, rdnzao  |
|           48 |     1520 | 2025-04-09 | Fluxo             | W   | 0.608      | 0.450        | 0.042 (0.012)    | 0.448 (0.123)    | -         |     8.40 | doc, gafolo, koala, n1cks, rdnzao  |
|           47 |     1525 | 2025-04-09 | Fluxo             | L   | 0.608      | -            | -                | -                | -         |   -11.02 | doc, gafolo, koala, n1cks, rdnzao  |
|           46 |     1566 | 2025-04-08 | Keyd Stars        | W   | 0.602      | 0.450        | 0.008 (0.002)    | 0.499 (0.135)    | -         |     5.92 | doc, gafolo, koala, n1cks, rdnzao  |
|           45 |     1570 | 2025-04-08 | Keyd Stars        | W   | 0.601      | 0.450        | -                | 0.499 (0.135)    | -         |     6.20 | doc, gafolo, koala, n1cks, rdnzao  |
|           44 |     1578 | 2025-04-08 | RED Canids        | W   | 0.600      | -            | -                | -                | -         |     4.41 | doc, gafolo, hoax, koala, rdnzao   |
|           43 |     1579 | 2025-04-08 | RED Canids        | L   | 0.600      | -            | -                | -                | -         |   -14.82 | doc, gafolo, hoax, koala, rdnzao   |
|           42 |     1615 | 2025-04-07 | SELVA             | L   | 0.593      | -            | -                | -                | -         |   -12.16 | doc, gafolo, koala, n1cks, rdnzao  |
|           41 |     1616 | 2025-04-07 | SELVA             | L   | 0.593      | -            | -                | -                | -         |   -12.73 | doc, gafolo, koala, n1cks, rdnzao  |
|           40 |     1625 | 2025-04-06 | RED Canids        | W   | 0.588      | -            | -                | -                | -         |     6.16 | doc, gafolo, koala, n1cks, rdnzao  |
|           39 |     1646 | 2025-04-05 | SELVA             | W   | 0.582      | -            | -                | -                | -         |     6.00 | doc, gafolo, koala, n1cks, rdnzao  |
|           38 |     1665 | 2025-04-04 | FURIA fe          | W   | 0.574      | 0.143        | 0.137 (0.011)    | -                | -         |    10.45 | doc, gafolo, koala, n1cks, rdnzao  |
|           37 |     1676 | 2025-04-03 | RED Canids        | L   | 0.569      | -            | -                | -                | -         |   -12.11 | doc, gafolo, koala, n1cks, rdnzao  |
|           36 |     1806 | 2025-04-01 | GameHunters       | W   | 0.555      | -            | -                | -                | -         |     3.86 | doc, gafolo, koala, n1cks, rdnzao  |
|           35 |     1809 | 2025-04-01 | GameHunters       | W   | 0.555      | -            | -                | -                | -         |     3.99 | doc, gafolo, koala, n1cks, rdnzao  |
|           34 |     1849 | 2025-03-30 | RED Canids        | L   | 0.541      | -            | -                | -                | -         |   -11.62 | doc, gafolo, koala, n1cks, rdnzao  |
|           33 |     1857 | 2025-03-30 | ShindeN           | W   | 0.540      | -            | -                | -                | -         |     3.58 | doc, gafolo, koala, n1cks, rdnzao  |
|           32 |     1891 | 2025-03-29 | 9z                | W   | 0.535      | 0.143        | 0.047 (0.004)    | -                | -         |     5.18 | doc, gafolo, koala, n1cks, rdnzao  |
|           31 |     1925 | 2025-03-29 | América           | W   | 0.533      | -            | -                | -                | -         |     2.53 | doc, gafolo, koala, n1cks, rdnzao  |
|           30 |     1961 | 2025-03-28 | ShindeN           | L   | 0.528      | -            | -                | -                | -         |   -13.19 | doc, gafolo, koala, n1cks, rdnzao  |
|           29 |     2055 | 2025-03-27 | BURN              | W   | 0.519      | -            | -                | -                | -         |     1.08 | doc, gafolo, koala, n1cks, rdnzao  |
|           28 |     2145 | 2025-03-25 | LP                | W   | 0.508      | 0.450        | -                | 0.406 (0.093)    | -         |     2.89 | doc, gafolo, koala, n1cks, rdnzao  |
|           27 |     2146 | 2025-03-25 | LP                | W   | 0.508      | -            | -                | -                | -         |     2.97 | doc, gafolo, koala, n1cks, rdnzao  |
|           26 |     2291 | 2025-03-19 | KRÜ               | W   | 0.468      | -            | -                | -                | -         |     3.25 | doc, gafolo, koala, n1cks, rdnzao  |
|           25 |     2294 | 2025-03-19 | KRÜ               | L   | 0.468      | -            | -                | -                | -         |   -11.73 | doc, gafolo, koala, n1cks, rdnzao  |
|           24 |     2340 | 2025-03-18 | Yawara            | W   | 0.462      | -            | -                | -                | -         |     2.44 | doc, gafolo, koala, n1cks, rdnzao  |
|           23 |     2343 | 2025-03-18 | Yawara            | W   | 0.462      | -            | -                | -                | -         |     2.50 | doc, gafolo, koala, n1cks, rdnzao  |
|           22 |     2515 | 2025-03-10 | Flamengo          | L   | 0.408      | -            | -                | -                | -         |    -9.59 | doc, gafolo, koala, n1cks, rdnzao  |
|           21 |     2522 | 2025-03-10 | adalYamigos       | L   | 0.407      | -            | -                | -                | -         |   -11.15 | doc, gafolo, koala, n1cks, rdnzao  |
|           20 |     2527 | 2025-03-10 | 2GAME             | W   | 0.407      | -            | -                | -                | -         |     3.07 | doc, gafolo, koala, n1cks, rdnzao  |
|           19 |     2551 | 2025-03-09 | Flamengo          | L   | 0.402      | -            | -                | -                | -         |    -9.80 | doc, gafolo, koala, n1cks, rdnzao  |
|           18 |     2581 | 2025-03-09 | paiN Academy      | W   | 0.400      | -            | -                | -                | -         |     0.85 | doc, gafolo, koala, n1cks, rdnzao  |
|           17 |     2618 | 2025-03-08 | ShindeN           | W   | 0.395      | -            | -                | -                | -         |     2.05 | doc, gafolo, koala, n1cks, rdnzao  |
|           16 |     2701 | 2025-03-07 | 2GAME             | W   | 0.388      | -            | -                | -                | -         |     2.71 | doc, gafolo, koala, n1cks, rdnzao  |
|           15 |     2980 | 2025-02-26 | ODDIK             | L   | 0.329      | -            | -                | -                | -         |    -5.14 | doc, gafolo, koala, n1cks, rdnzao  |
|           14 |     2983 | 2025-02-26 | ODDIK             | L   | 0.328      | -            | -                | -                | -         |    -5.29 | doc, gafolo, koala, n1cks, rdnzao  |
|           13 |     3118 | 2025-02-22 | Imperial          | L   | 0.303      | -            | -                | -                | -         |    -4.30 | doc, gafolo, koala, n1cks, rdnzao  |
|           12 |     3123 | 2025-02-22 | ODDIK             | W   | 0.301      | 0.371        | 0.068 (0.008)    | -                | -         |     4.65 | doc, gafolo, koala, n1cks, rdnzao  |
|           11 |     3141 | 2025-02-21 | Keyd Stars        | W   | 0.294      | -            | -                | -                | -         |     1.99 | doc, gafolo, koala, n1cks, rdnzao  |
|           10 |     3170 | 2025-02-20 | Bounty Hunters    | W   | 0.288      | -            | -                | -                | -         |     1.94 | doc, gafolo, koala, n1cks, rdnzao  |
|            9 |     3190 | 2025-02-19 | Bounty Hunters    | W   | 0.282      | -            | -                | -                | -         |     1.93 | doc, gafolo, koala, n1cks, rdnzao  |
|            8 |     3193 | 2025-02-19 | Bounty Hunters    | W   | 0.282      | -            | -                | -                | -         |     1.96 | doc, gafolo, koala, n1cks, rdnzao  |
|            7 |     3387 | 2025-02-12 | Fluxo             | L   | 0.235      | -            | -                | -                | -         |    -5.22 | doc, gafolo, koala, n1cks, rdnzao  |
|            6 |     3406 | 2025-02-11 | Imperial          | W   | 0.229      | 0.143        | 0.133 (0.004)    | -                | -         |     3.97 | doc, gafolo, koala, n1cks, rdnzao  |
|            5 |     3410 | 2025-02-11 | Legacy            | L   | 0.228      | -            | -                | -                | -         |    -0.46 | doc, gafolo, koala, n1cks, rdnzao  |
|            4 |     3482 | 2025-02-09 | MIBR              | L   | 0.214      | -            | -                | -                | -         |    -0.92 | doc, gafolo, koala, n1cks, rdnzao  |
|            3 |     3536 | 2025-02-08 | BESTIA            | W   | 0.207      | -            | -                | -                | -         |     1.53 | doc, gafolo, koala, n1cks, rdnzao  |
|            2 |     3748 | 2025-01-28 | Floripa Stars     | W   | 0.135      | -            | -                | -                | -         |     0.65 | doc, gafolo, koala, n1cks, rdnzao  |
|            1 |     3752 | 2025-01-28 | Floripa Stars     | W   | 0.135      | -            | -                | -                | -         |     0.65 | doc, gafolo, koala, n1cks, rdnzao  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,627.89)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-14 |      1.000 | $12,500.00     | $12,500.00      |
| 2025-05-11 |      0.822 | $7,500.00      | $6,161.87       |
| 2025-05-02 |      0.762 | $10,000.00     | $7,620.04       |
| 2025-04-27 |      0.729 | $2,500.00      | $1,822.72       |
| 2025-03-11 |      0.416 | $750.00        | $311.95         |
| 2025-02-22 |      0.303 | $4,000.00      | $1,211.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
