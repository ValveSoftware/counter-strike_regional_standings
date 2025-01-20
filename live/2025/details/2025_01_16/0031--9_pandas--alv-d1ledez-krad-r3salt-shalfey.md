### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: Alv, d1Ledez, Krad, r3salt, shalfey<br />
Global Rank: [31](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1187.7<br />
<br />
Final Rank Value (1187.7) = Starting Rank Value (1134.7) + Head To Head Adjustments (53.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.556[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.230[<sup>2</sup>](#table1)

The average of these factors is 0.371<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1134.7
- 400 + ( ( 0.371 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1134.7


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
|           53 |       31 | 2025-01-14 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -2.39 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           52 |       39 | 2025-01-12 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -9.34 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           51 |       43 | 2025-01-11 | EYEBALLERS        | W   | 1.000      | 0.417        | -                | 0.661 (0.276)    | 0 (0.000) |     4.18 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           50 |       49 | 2025-01-10 | GenOne            | W   | 1.000      | 0.417        | -                | 0.571 (0.238)    | 0 (0.000) |     4.11 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           49 |      629 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.841      | -            | -                | -                | -         |   -17.12 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |      658 | 2024-11-22 | Aurora            | W   | 0.835      | -            | -                | -                | 1 (0.835) |     6.03 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |      689 | 2024-11-21 | Virtus.pro        | L   | 0.828      | -            | -                | -                | -         |   -10.24 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |      700 | 2024-11-21 | G2                | L   | 0.823      | -            | -                | -                | -         |    -0.34 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |      710 | 2024-11-20 | Astralis          | W   | 0.822      | 0.143        | 0.328 (0.038)    | -                | 1 (0.822) |    17.26 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |      960 | 2024-11-11 | ECLOT             | W   | 0.757      | 0.371        | 0.286 (0.080)    | 1.000 (0.280)    | 0 (0.000) |    13.18 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |      972 | 2024-11-10 | ECLOT             | W   | 0.752      | 0.384        | 0.286 (0.083)    | 1.000 (0.289)    | 0 (0.000) |    13.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |      976 | 2024-11-10 | 500               | L   | 0.751      | -            | -                | -                | -         |   -16.47 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |      994 | 2024-11-09 | Gaimin Gladiators | W   | 0.745      | 0.384        | -                | 0.873 (0.250)    | 0 (0.000) |     6.81 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |      998 | 2024-11-09 | NAVI Junior       | W   | 0.744      | 0.371        | 0.204 (0.056)    | 1.000 (0.276)    | 0 (0.000) |     9.55 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |     1013 | 2024-11-08 | Fire Flux         | W   | 0.737      | -            | -                | -                | 0 (0.000) |     3.65 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     1027 | 2024-11-07 | Aurora            | L   | 0.732      | -            | -                | -                | -         |   -17.53 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     1032 | 2024-11-07 | ECLOT             | W   | 0.730      | 0.371        | 0.286 (0.077)    | 1.000 (0.271)    | -         |    13.07 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     1058 | 2024-11-05 | Insilio           | W   | 0.719      | -            | -                | -                | -         |     1.82 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     1067 | 2024-11-05 | los kogutos       | W   | 0.717      | -            | -                | -                | -         |     7.11 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     1105 | 2024-11-03 | Gaimin Gladiators | W   | 0.704      | 0.384        | -                | 0.873 (0.236)    | -         |     6.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     1128 | 2024-11-02 | Endpoint          | W   | 0.698      | -            | -                | -                | -         |     3.33 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     1154 | 2024-11-01 | NAVI Junior       | W   | 0.690      | 0.371        | 0.204 (0.052)    | 1.000 (0.256)    | -         |     9.42 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     1175 | 2024-10-31 | 9INE              | W   | 0.684      | 0.384        | 0.125 (0.033)    | 1.000 (0.263)    | -         |     7.90 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     1194 | 2024-10-30 | Johnny Speeds     | W   | 0.677      | 0.384        | 0.109 (0.028)    | -                | -         |     8.68 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           29 |     1228 | 2024-10-28 | ALASKA            | W   | 0.664      | -            | -                | -                | -         |     4.55 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           28 |     1290 | 2024-10-25 | Fire Flux         | W   | 0.644      | -            | -                | -                | -         |     3.74 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           27 |     1363 | 2024-10-20 | ECLOT             | L   | 0.610      | -            | -                | -                | -         |    -6.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           26 |     1429 | 2024-10-17 | SAW               | L   | 0.592      | -            | -                | -                | -         |    -4.35 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           25 |     1462 | 2024-10-16 | TSM               | W   | 0.586      | -            | -                | -                | -         |     4.16 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           24 |     1488 | 2024-10-15 | Zero Tenacity     | W   | 0.579      | 0.500        | 0.084 (0.024)    | -                | -         |     8.09 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           23 |     1530 | 2024-10-12 | NewBALLS          | W   | 0.558      | -            | -                | -                | -         |     0.66 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           22 |     1673 | 2024-10-06 | GamerLegion       | L   | 0.518      | -            | -                | -                | -         |    -3.84 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           21 |     1704 | 2024-10-05 | ECSTATIC          | W   | 0.512      | -            | -                | -                | -         |     5.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           20 |     1744 | 2024-10-04 | AMKAL             | W   | 0.505      | -            | -                | -                | -         |     2.01 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           19 |     2220 | 2024-09-22 | Nemiga            | L   | 0.423      | -            | -                | -                | -         |    -4.01 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           18 |     2237 | 2024-09-21 | Nexus             | L   | 0.418      | -            | -                | -                | -         |    -2.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           17 |     2244 | 2024-09-21 | devils.one        | W   | 0.417      | -            | -                | -                | -         |     1.40 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           16 |     2291 | 2024-09-19 | CPH Wolves        | L   | 0.406      | -            | -                | -                | -         |   -10.91 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           15 |     2305 | 2024-09-19 | Nemiga            | L   | 0.404      | -            | -                | -                | -         |    -3.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           14 |     2359 | 2024-09-17 | Kosovo            | W   | 0.392      | -            | -                | -                | -         |     0.54 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           13 |     2382 | 2024-09-16 | los kogutos       | L   | 0.385      | -            | -                | -                | -         |    -5.74 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           12 |     2405 | 2024-09-15 | K27               | W   | 0.378      | -            | -                | -                | -         |     0.54 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           11 |     2413 | 2024-09-15 | Johnny Speeds     | L   | 0.377      | -            | -                | -                | -         |    -7.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           10 |     2423 | 2024-09-15 | Spotless          | W   | 0.377      | -            | -                | -                | -         |     0.18 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            9 |     2662 | 2024-09-06 | B8                | W   | 0.319      | 0.500        | 0.164 (0.026)    | -                | -         |     4.96 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            8 |     3016 | 2024-08-27 | FURIA             | L   | 0.250      | -            | -                | -                | -         |    -0.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            7 |     3053 | 2024-08-26 | Eternal Fire      | L   | 0.246      | -            | -                | -                | -         |    -1.81 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            6 |     3125 | 2024-08-25 | FURIA             | W   | 0.239      | -            | -                | -                | 1 (0.239) |     6.98 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            5 |     3185 | 2024-08-23 | Nemiga            | W   | 0.224      | -            | -                | -                | -         |     4.92 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            4 |     3210 | 2024-08-22 | Cloud9            | L   | 0.217      | -            | -                | -                | -         |    -4.08 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            3 |     3250 | 2024-08-21 | Rebels            | W   | 0.211      | -            | -                | -                | -         |     1.02 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            2 |     3279 | 2024-08-21 | Insilio           | W   | 0.210      | -            | -                | -                | -         |     0.84 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            1 |     3314 | 2024-08-20 | PARIVISION        | L   | 0.205      | -            | -                | -                | -         |    -5.16 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,126.46)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-11-12 |      0.765 | $500.00        | $382.43         |
| 2024-11-11 |      0.757 | $11,000.00     | $8,325.95       |
| 2024-11-10 |      0.752 | $12,500.00     | $9,403.49       |
| 2024-10-20 |      0.611 | $6,000.00      | $3,668.16       |
| 2024-10-06 |      0.519 | $5,000.00      | $2,596.36       |
| 2024-09-24 |      0.438 | $4,000.00      | $1,750.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
