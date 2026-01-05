### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, exit, insani, kl1m, Qikert<br />
Global Rank: [51](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [11]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  1200.6<br />
<br />
Final Rank Value (1200.6) = Starting Rank Value (1166.7) + Head To Head Adjustments (33.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.491[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.606[<sup>2</sup>](#table1)

The average of these factors is 0.387<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1166.7
- 400 + ( ( 0.387 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1166.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      465 | 2025-11-30 | Liquid       | L   | 0.961      | -            | -                | -                | -         |    -2.35 | brnz4n, exit, insani, kl1m, Qikert  |
|           30 |      503 | 2025-11-29 | Passion UA   | L   | 0.954      | -            | -                | -                | -         |    -4.55 | brnz4n, exit, insani, kl1m, Qikert  |
|           29 |      516 | 2025-11-29 | Imperial     | L   | 0.953      | -            | -                | -                | -         |    -6.56 | brnz4n, exit, insani, kl1m, Qikert  |
|           28 |     1447 | 2025-10-28 | fnatic       | L   | 0.741      | -            | -                | -                | -         |    -4.22 | brn$, brnz4n, exit, insani, Qikert  |
|           27 |     1495 | 2025-10-27 | Astralis     | L   | 0.734      | -            | -                | -                | -         |    -2.75 | brn$, brnz4n, exit, insani, Qikert  |
|           26 |     1559 | 2025-10-26 | BetBoom      | L   | 0.726      | -            | -                | -                | -         |    -4.22 | brn$, brnz4n, exit, insani, Qikert  |
|           25 |     1915 | 2025-10-15 | Virtus.pro   | L   | 0.652      | -            | -                | -                | -         |   -11.54 | brnz4n, exit, insani, kl1m, Qikert  |
|           24 |     1941 | 2025-10-14 | Liquid       | L   | 0.646      | -            | -                | -                | -         |    -1.69 | brnz4n, exit, insani, kl1m, Qikert  |
|           23 |     1951 | 2025-10-13 | Lynn Vision  | W   | 0.644      | 1.000        | 0.131 (0.084)    | 0.248 (0.160)    | 1 (0.644) |     9.91 | brnz4n, exit, insani, kl1m, Qikert  |
|           22 |     2279 | 2025-10-05 | RED Canids   | W   | 0.589      | 0.333        | 0.019 (0.004)    | 0.323 (0.063)    | 1 (0.589) |     6.57 | brnz4n, exit, insani, kl1m, Qikert  |
|           21 |     2332 | 2025-10-04 | Fluxo        | W   | 0.583      | 0.333        | 0.036 (0.007)    | 0.473 (0.092)    | 1 (0.583) |    10.60 | brnz4n, exit, insani, kl1m, Qikert  |
|           20 |     2341 | 2025-10-04 | ODDIK        | W   | 0.581      | 0.333        | 0.019 (0.004)    | -                | 1 (0.581) |     5.24 | brnz4n, exit, insani, kl1m, Qikert  |
|           19 |     2417 | 2025-10-02 | ShindeN      | W   | 0.568      | 0.333        | -                | 0.369 (0.070)    | 1 (0.568) |     2.91 | brnz4n, exit, insani, kl1m, Qikert  |
|           18 |     2427 | 2025-10-02 | X7           | W   | 0.567      | -            | -                | -                | 1 (0.567) |     0.20 | brnz4n, exit, insani, kl1m, Qikert  |
|           17 |     2481 | 2025-09-30 | Imperial     | W   | 0.557      | 0.390        | 0.109 (0.024)    | 0.590 (0.128)    | 1 (0.557) |    15.34 | brnz4n, exit, insani, kl1m, Qikert  |
|           16 |     2526 | 2025-09-30 | ODDIK        | W   | 0.551      | 0.390        | 0.019 (0.004)    | 0.305 (0.066)    | 1 (0.551) |     5.55 | brnz4n, exit, insani, kl1m, Qikert  |
|           15 |     2532 | 2025-09-29 | BESTIA       | W   | 0.548      | 0.390        | 0.086 (0.018)    | 0.624 (0.133)    | 1 (0.548) |    11.49 | brnz4n, exit, insani, kl1m, Qikert  |
|           14 |     2567 | 2025-09-28 | Crashers     | W   | 0.541      | -            | -                | -                | 1 (0.541) |     0.55 | brnz4n, exit, insani, kl1m, Qikert  |
|           13 |     2613 | 2025-09-27 | RED Canids   | L   | 0.536      | -            | -                | -                | -         |   -10.33 | brnz4n, exit, insani, kl1m, Qikert  |
|           12 |     2626 | 2025-09-27 | Crashers     | W   | 0.534      | -            | -                | -                | -         |     0.47 | brnz4n, exit, insani, kl1m, Qikert  |
|           11 |     2796 | 2025-09-22 | Fake do Biru | W   | 0.502      | 0.363        | -                | 0.383 (0.070)    | -         |     2.76 | brnz4n, exit, insani, kl1m, nicks   |
|           10 |     2846 | 2025-09-20 | Fake do Biru | W   | 0.488      | 0.363        | -                | 0.383 (0.068)    | -         |     2.57 | brnz4n, exit, insani, kl1m, nicks   |
|            9 |     2945 | 2025-09-17 | RED Canids   | W   | 0.468      | 0.363        | 0.019 (0.003)    | -                | -         |     5.78 | brn$, brnz4n, exit, insani, nicks   |
|            8 |     3178 | 2025-09-11 | Keyd Stars   | W   | 0.428      | 0.363        | 0.022 (0.003)    | 0.458 (0.071)    | -         |     4.66 | brn$, brnz4n, exit, insani, nicks   |
|            7 |     3276 | 2025-09-09 | Fuego        | W   | 0.415      | -            | -                | -                | -         |     0.53 | brnz4n, exit, insani, kl1m, nicks   |
|            6 |     4216 | 2025-08-06 | Virtus.pro   | L   | 0.186      | -            | -                | -                | -         |    -3.05 | brnz4n, exit, insani, nicks, saffee |
|            5 |     4433 | 2025-07-24 | HEROIC       | L   | 0.101      | -            | -                | -                | -         |    -0.33 | brnz4n, exit, insani, nicks, saffee |
|            4 |     4448 | 2025-07-23 | 3DMAX        | L   | 0.093      | -            | -                | -                | -         |    -0.13 | brnz4n, exit, insani, nicks, saffee |
|            3 |     4551 | 2025-07-17 | Astralis     | L   | 0.054      | -            | -                | -                | -         |    -0.14 | brnz4n, exit, insani, nicks, saffee |
|            2 |     4585 | 2025-07-16 | Virtus.pro   | W   | 0.046      | 1.000        | 0.154 (0.007)    | -                | -         |     0.70 | brnz4n, exit, insani, nicks, saffee |
|            1 |     4594 | 2025-07-15 | Astralis     | L   | 0.041      | -            | -                | -                | -         |    -0.11 | brnz4n, exit, insani, nicks, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,322.82)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-02 |      0.974 | $10,000.00     | $9,744.70       |
| 2025-11-01 |      0.767 | $12,500.00     | $9,588.52       |
| 2025-10-19 |      0.679 | $10,000.00     | $6,785.63       |
| 2025-10-05 |      0.589 | $5,500.00      | $3,237.77       |
| 2025-09-30 |      0.557 | $8,226.00      | $4,579.16       |
| 2025-09-22 |      0.502 | $8,000.00      | $4,015.89       |
| 2025-07-25 |      0.107 | $2,500.00      | $268.64         |
| 2025-07-20 |      0.074 | $15,000.00     | $1,102.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
