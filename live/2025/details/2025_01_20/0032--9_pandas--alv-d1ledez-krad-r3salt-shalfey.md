### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: Alv, d1Ledez, Krad, r3salt, shalfey<br />
Global Rank: [32](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1183.1<br />
<br />
Final Rank Value (1183.1) = Starting Rank Value (1130.3) + Head To Head Adjustments (52.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.557[<sup>1</sup>](#table2)
- Bounty Collected: 0.432[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.368<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1130.3
- 400 + ( ( 0.368 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1130.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |       21 | 2025-01-14 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -2.42 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           52 |       25 | 2025-01-12 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -9.16 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           51 |       29 | 2025-01-11 | EYEBALLERS        | W   | 1.000      | 0.417        | -                | 0.565 (0.236)    | 0 (0.000) |     4.22 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           50 |       35 | 2025-01-10 | GenOne            | W   | 1.000      | 0.417        | -                | 0.580 (0.242)    | 0 (0.000) |     4.16 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           49 |      615 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.822      | -            | -                | -                | -         |   -16.78 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |      644 | 2024-11-22 | Aurora            | W   | 0.815      | -            | -                | -                | 1 (0.815) |     5.81 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |      675 | 2024-11-21 | Virtus.pro        | L   | 0.808      | -            | -                | -                | -         |    -9.58 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |      686 | 2024-11-21 | G2                | L   | 0.804      | -            | -                | -                | -         |    -0.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |      696 | 2024-11-20 | Astralis          | W   | 0.802      | 0.143        | 0.325 (0.037)    | -                | 1 (0.802) |    16.82 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |      946 | 2024-11-11 | ECLOT             | W   | 0.737      | 0.371        | 0.286 (0.078)    | 1.000 (0.273)    | 0 (0.000) |    12.95 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |      958 | 2024-11-10 | ECLOT             | W   | 0.733      | 0.384        | 0.286 (0.081)    | 1.000 (0.282)    | 0 (0.000) |    13.72 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |      962 | 2024-11-10 | 500               | L   | 0.731      | -            | -                | -                | -         |   -16.08 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |      980 | 2024-11-09 | Gaimin Gladiators | W   | 0.725      | 0.384        | -                | 0.875 (0.244)    | 0 (0.000) |     6.54 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |      984 | 2024-11-09 | NAVI Junior       | W   | 0.724      | 0.371        | 0.204 (0.055)    | 1.000 (0.268)    | 0 (0.000) |     9.31 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |      999 | 2024-11-08 | Fire Flux         | W   | 0.717      | -            | -                | -                | 0 (0.000) |     3.55 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     1013 | 2024-11-07 | Aurora            | L   | 0.712      | -            | -                | -                | -         |   -17.14 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     1018 | 2024-11-07 | ECLOT             | W   | 0.711      | 0.371        | 0.286 (0.075)    | 1.000 (0.263)    | -         |    12.86 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     1044 | 2024-11-05 | Insilio           | W   | 0.699      | -            | -                | -                | -         |     1.76 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     1053 | 2024-11-05 | los kogutos       | W   | 0.697      | -            | -                | -                | -         |     7.12 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     1091 | 2024-11-03 | Gaimin Gladiators | W   | 0.684      | 0.384        | -                | 0.875 (0.230)    | -         |     6.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     1114 | 2024-11-02 | Endpoint          | W   | 0.678      | -            | -                | -                | -         |     3.16 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     1140 | 2024-11-01 | NAVI Junior       | W   | 0.671      | 0.371        | 0.204 (0.051)    | 1.000 (0.248)    | -         |     9.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     1161 | 2024-10-31 | 9INE              | W   | 0.664      | 0.384        | 0.125 (0.032)    | 1.000 (0.255)    | -         |     7.63 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     1180 | 2024-10-30 | Johnny Speeds     | W   | 0.658      | 0.384        | 0.108 (0.027)    | -                | -         |     8.45 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           29 |     1214 | 2024-10-28 | Verdant           | W   | 0.644      | -            | -                | -                | -         |     4.51 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           28 |     1276 | 2024-10-25 | Fire Flux         | W   | 0.625      | -            | -                | -                | -         |     3.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           27 |     1349 | 2024-10-20 | ECLOT             | L   | 0.591      | -            | -                | -                | -         |    -6.20 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           26 |     1415 | 2024-10-17 | SAW               | L   | 0.573      | -            | -                | -                | -         |    -4.40 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           25 |     1448 | 2024-10-16 | TSM               | W   | 0.566      | -            | -                | -                | -         |     3.92 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           24 |     1474 | 2024-10-15 | Zero Tenacity     | W   | 0.560      | 0.500        | 0.083 (0.023)    | -                | -         |     7.55 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           23 |     1516 | 2024-10-12 | NewBALLS          | W   | 0.538      | -            | -                | -                | -         |     0.64 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           22 |     1659 | 2024-10-06 | GamerLegion       | L   | 0.499      | -            | -                | -                | -         |    -3.01 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           21 |     1690 | 2024-10-05 | ECSTATIC          | W   | 0.492      | -            | -                | -                | -         |     5.52 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           20 |     1730 | 2024-10-04 | DMS               | W   | 0.485      | -            | -                | -                | -         |     1.88 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           19 |     2206 | 2024-09-22 | Nemiga            | L   | 0.403      | -            | -                | -                | -         |    -3.84 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           18 |     2223 | 2024-09-21 | Nexus             | L   | 0.399      | -            | -                | -                | -         |    -2.27 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           17 |     2230 | 2024-09-21 | devils.one        | W   | 0.398      | -            | -                | -                | -         |     1.34 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           16 |     2277 | 2024-09-19 | CPH Wolves        | L   | 0.386      | -            | -                | -                | -         |   -10.40 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           15 |     2291 | 2024-09-19 | Nemiga            | L   | 0.384      | -            | -                | -                | -         |    -3.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           14 |     2345 | 2024-09-17 | Kosovo            | W   | 0.372      | -            | -                | -                | -         |     0.52 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           13 |     2368 | 2024-09-16 | los kogutos       | L   | 0.365      | -            | -                | -                | -         |    -5.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           12 |     2391 | 2024-09-15 | K27               | W   | 0.359      | -            | -                | -                | -         |     0.51 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           11 |     2399 | 2024-09-15 | Johnny Speeds     | L   | 0.358      | -            | -                | -                | -         |    -6.96 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           10 |     2409 | 2024-09-15 | Spotless          | W   | 0.357      | -            | -                | -                | -         |     0.18 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            9 |     2648 | 2024-09-06 | B8                | W   | 0.299      | 0.500        | 0.162 (0.024)    | -                | -         |     4.63 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            8 |     3002 | 2024-08-27 | FURIA             | L   | 0.231      | -            | -                | -                | -         |    -0.53 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            7 |     3039 | 2024-08-26 | Eternal Fire      | L   | 0.226      | -            | -                | -                | -         |    -1.69 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            6 |     3111 | 2024-08-25 | FURIA             | W   | 0.219      | -            | -                | -                | 1 (0.219) |     6.43 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            5 |     3171 | 2024-08-23 | Nemiga            | W   | 0.204      | -            | -                | -                | -         |     4.48 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            4 |     3196 | 2024-08-22 | Cloud9            | L   | 0.198      | -            | -                | -                | -         |    -3.74 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            3 |     3236 | 2024-08-21 | Rebels            | W   | 0.192      | -            | -                | -                | -         |     0.91 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            2 |     3265 | 2024-08-21 | Insilio           | W   | 0.191      | -            | -                | -                | -         |     0.77 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            1 |     3300 | 2024-08-20 | PARIVISION        | L   | 0.185      | -            | -                | -                | -         |    -4.71 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,359.05)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-11-12 |      0.745 | $500.00        | $372.60         |
| 2024-11-11 |      0.737 | $11,000.00     | $8,109.50       |
| 2024-11-10 |      0.733 | $12,500.00     | $9,157.53       |
| 2024-10-20 |      0.592 | $6,000.00      | $3,550.09       |
| 2024-10-06 |      0.500 | $5,000.00      | $2,497.97       |
| 2024-09-24 |      0.418 | $4,000.00      | $1,671.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
