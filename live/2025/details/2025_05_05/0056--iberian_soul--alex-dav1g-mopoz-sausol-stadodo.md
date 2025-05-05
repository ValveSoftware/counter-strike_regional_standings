### Roster Details<br />
Team Name: Iberian Soul<br />
Roster: alex, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [56](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  922.3<br />
<br />
Final Rank Value (922.3) = Starting Rank Value (870.0) + Head To Head Adjustments (52.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.173[<sup>2</sup>](#table1)
- LAN Wins: 0.191[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 870.0
- 400 + ( ( 0.259 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 870.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      122 | 2025-04-26 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -14.01 | alex, dav1g, mopoz, sausol, stadodo   |
|           51 |      210 | 2025-04-18 | ECSTATIC          | W   | 1.000      | 0.435        | 0.025 (0.011)    | 1.000 (0.435)    | 0 (0.000) |    14.72 | alex, dav1g, mopoz, sausol, stadodo   |
|           50 |      317 | 2025-04-14 | SINNERS           | W   | 1.000      | 0.435        | 0.018 (0.008)    | 0.489 (0.213)    | 0 (0.000) |    16.88 | alex, dav1g, mopoz, sausol, stadodo   |
|           49 |      361 | 2025-04-12 | JANO              | W   | 1.000      | 0.435        | 0.006 (0.003)    | -                | 0 (0.000) |     8.71 | alex, dav1g, mopoz, sausol, stadodo   |
|           48 |      633 | 2025-03-30 | Nemiga            | L   | 0.960      | -            | -                | -                | -         |   -11.02 | alex, dav1g, mopoz, sausol, stadodo   |
|           47 |      636 | 2025-03-30 | 9INE              | W   | 0.959      | 0.143        | 0.023 (0.003)    | 0.752 (0.103)    | 0 (0.000) |    18.11 | alex, dav1g, mopoz, sausol, stadodo   |
|           46 |      676 | 2025-03-29 | NOVAQ             | W   | 0.955      | -            | -                | -                | 0 (0.000) |     7.52 | alex, dav1g, mopoz, sausol, stadodo   |
|           45 |      696 | 2025-03-29 | Partizan          | W   | 0.952      | 0.143        | 0.108 (0.015)    | 0.753 (0.102)    | 0 (0.000) |    14.36 | alex, dav1g, mopoz, sausol, stadodo   |
|           44 |      756 | 2025-03-28 | ECLOT             | W   | 0.946      | 0.143        | 0.108 (0.015)    | 0.654 (0.088)    | 0 (0.000) |    19.35 | alex, dav1g, mopoz, sausol, stadodo   |
|           43 |      801 | 2025-03-27 | 9INE              | L   | 0.941      | -            | -                | -                | -         |    -9.58 | alex, dav1g, mopoz, sausol, stadodo   |
|           42 |     1057 | 2025-03-16 | Leça              | W   | 0.867      | -            | -                | -                | 1 (0.867) |     7.06 | alex, dav1g, mopoz, sausol, stadodo   |
|           41 |     1086 | 2025-03-15 | KlanPedrajas      | W   | 0.859      | -            | -                | -                | 1 (0.859) |     3.63 | alex, dav1g, mopoz, sausol, stadodo   |
|           40 |     1242 | 2025-03-09 | 9 Pandas          | L   | 0.819      | -            | -                | -                | -         |    -7.17 | alex, dav1g, mopoz, sausol, stadodo   |
|           39 |     1317 | 2025-03-08 | fnatic            | L   | 0.813      | -            | -                | -                | -         |    -9.42 | alex, dav1g, mopoz, sausol, stadodo   |
|           38 |     1428 | 2025-03-06 | Monte             | L   | 0.800      | -            | -                | -                | -         |   -15.93 | alex, dav1g, mopoz, sausol, stadodo   |
|           37 |     1432 | 2025-03-06 | NAVI Junior       | L   | 0.798      | -            | -                | -                | -         |    -6.16 | alex, dav1g, mopoz, sausol, stadodo   |
|           36 |     1465 | 2025-03-05 | GTZ               | L   | 0.793      | -            | -                | -                | -         |   -14.88 | alex, dav1g, mopoz, sausol, stadodo   |
|           35 |     1479 | 2025-03-04 | Monte             | W   | 0.788      | 0.435        | -                | 0.493 (0.169)    | -         |     7.91 | alex, dav1g, mopoz, sausol, stadodo   |
|           34 |     1516 | 2025-03-02 | Partizan          | W   | 0.775      | 0.435        | 0.108 (0.036)    | 0.753 (0.253)    | -         |    15.58 | alex, dav1g, mopoz, sausol, stadodo   |
|           33 |     1554 | 2025-03-01 | Alliance          | W   | 0.767      | -            | -                | -                | -         |     8.43 | alex, dav1g, mopoz, sausol, stadodo   |
|           32 |     1560 | 2025-03-01 | 9 Pandas          | L   | 0.766      | -            | -                | -                | -         |    -7.94 | alex, dav1g, mopoz, sausol, stadodo   |
|           31 |     1574 | 2025-02-28 | Fire Flux         | W   | 0.759      | -            | -                | -                | -         |    10.35 | alex, dav1g, mopoz, sausol, stadodo   |
|           30 |     1586 | 2025-02-27 | SINNERS           | W   | 0.755      | 0.435        | 0.018 (0.006)    | 0.489 (0.160)    | -         |    13.51 | alex, dav1g, mopoz, sausol, stadodo   |
|           29 |     1645 | 2025-02-25 | Aurora            | L   | 0.741      | -            | -                | -                | -         |   -12.24 | alex, dav1g, mopoz, sausol, stadodo   |
|           28 |     1669 | 2025-02-24 | OG                | W   | 0.735      | 0.143        | 0.053 (0.006)    | 1.000 (0.105)    | -         |    14.36 | alex, dav1g, mopoz, sausol, stadodo   |
|           27 |     1672 | 2025-02-24 | Fire Flux         | W   | 0.734      | -            | -                | -                | -         |    11.36 | alex, dav1g, mopoz, sausol, stadodo   |
|           26 |     1713 | 2025-02-23 | Alliance          | W   | 0.726      | -            | -                | -                | -         |     8.95 | alex, dav1g, mopoz, sausol, stadodo   |
|           25 |     1774 | 2025-02-20 | ECSTATIC          | W   | 0.706      | 0.143        | -                | 1.000 (0.101)    | -         |    10.82 | alex, dav1g, mopoz, sausol, stadodo   |
|           24 |     1784 | 2025-02-19 | 9INE              | L   | 0.700      | -            | -                | -                | -         |    -7.38 | alex, dav1g, mopoz, sausol, stadodo   |
|           23 |     2050 | 2025-02-09 | CPH Wolves        | L   | 0.633      | -            | -                | -                | -         |   -13.14 | alex, dav1g, mopoz, sausol, stadodo   |
|           22 |     2116 | 2025-02-08 | UNiTY             | W   | 0.625      | -            | -                | -                | -         |     6.97 | alex, dav1g, mopoz, sausol, stadodo   |
|           21 |     2213 | 2025-02-05 | Ninjas in Pyjamas | W   | 0.605      | -            | -                | -                | -         |    12.43 | alex, dav1g, mopoz, sausol, stadodo   |
|           20 |     2225 | 2025-02-04 | UNiTY             | L   | 0.600      | -            | -                | -                | -         |   -12.05 | alex, dav1g, mopoz, sausol, stadodo   |
|           19 |     2321 | 2025-01-25 | ECSTATIC          | L   | 0.533      | -            | -                | -                | -         |    -8.30 | alex, dav1g, mopoz, sausol, stadodo   |
|           18 |     2326 | 2025-01-24 | kONO              | L   | 0.526      | -            | -                | -                | -         |   -14.10 | alex, dav1g, mopoz, sausol, stadodo   |
|           17 |     2602 | 2024-12-14 | Chimera           | L   | 0.253      | -            | -                | -                | -         |    -5.45 | adamS, dav1g, mopoz, sausol, stadodo  |
|           16 |     2629 | 2024-12-13 | GUN5              | L   | 0.245      | -            | -                | -                | -         |    -3.43 | adamS, dav1g, mopoz, sausol, stadodo  |
|           15 |     2654 | 2024-12-11 | Endpoint          | L   | 0.234      | -            | -                | -                | -         |    -5.88 | adamS, dav1g, mopoz, sausol, stadodo  |
|           14 |     2667 | 2024-12-10 | Spirit Academy    | L   | 0.227      | -            | -                | -                | -         |    -4.12 | adamS, dav1g, mopoz, sausol, stadodo  |
|           13 |     2669 | 2024-12-10 | TSM               | W   | 0.226      | -            | -                | -                | -         |     0.75 | adamS, dav1g, mopoz, sausol, stadodo  |
|           12 |     2724 | 2024-12-07 | FAVBET            | W   | 0.207      | -            | -                | -                | -         |     1.68 | adamS, dav1g, mopoz, sausol, stadodo  |
|           11 |     2751 | 2024-12-06 | 9INE              | L   | 0.200      | -            | -                | -                | -         |    -2.85 | adamS, dav1g, mopoz, sausol, stadodo  |
|           10 |     2772 | 2024-12-05 | Betclic           | W   | 0.193      | 0.371        | 0.095 (0.007)    | -                | -         |     4.70 | adamS, dav1g, mopoz, sausol, stadodo  |
|            9 |     2807 | 2024-12-04 | Gaimin Gladiators | W   | 0.186      | -            | -                | -                | -         |     1.72 | adamS, dav1g, mopoz, sausol, stadodo  |
|            8 |     2863 | 2024-12-01 | Gaimin Gladiators | W   | 0.166      | -            | -                | -                | -         |     1.56 | adamS, dav1g, mopoz, sausol, stadodo  |
|            7 |     2935 | 2024-11-28 | GUN5              | L   | 0.147      | -            | -                | -                | -         |    -2.09 | adamS, dav1g, mopoz, sausol, stadodo  |
|            6 |     2947 | 2024-11-27 | Gaimin Gladiators | L   | 0.140      | -            | -                | -                | -         |    -3.20 | adamS, dav1g, mopoz, sausol, stadodo  |
|            5 |     2950 | 2024-11-27 | TNL               | W   | 0.140      | -            | -                | -                | -         |     1.11 | adamS, dav1g, mopoz, sausol, stadodo  |
|            4 |     2959 | 2024-11-26 | Gaimin Gladiators | W   | 0.134      | -            | -                | -                | -         |     1.16 | adamS, dav1g, mopoz, sausol, stadodo  |
|            3 |     2975 | 2024-11-25 | 9INE              | W   | 0.127      | -            | -                | -                | -         |     0.59 | adamS, dav1g, mopoz, sausol, stadodo  |
|            2 |     3131 | 2024-11-17 | Rhyno             | L   | 0.074      | -            | -                | -                | -         |    -1.84 | adamS, dav1g, deLonge, mopoz, stadodo |
|            1 |     3159 | 2024-11-16 | EXSAD             | W   | 0.067      | -            | -                | -                | 1 (0.067) |     0.23 | adamS, dav1g, deLonge, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,756.12)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.867 | $3,253.00      | $2,820.59       |
| 2024-11-27 |      0.140 | $5,000.00      | $699.85         |
| 2024-11-17 |      0.074 | $3,197.00      | $235.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
