### Roster Details<br />
Team Name: Astralis<br />
Roster: HooXi, jabbi, phzy, ryu, Staehr<br />
Global Rank: [10](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [8]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1588.3<br />
<br />
Final Rank Value (1588.3) = Starting Rank Value (1638.6) + Head To Head Adjustments (-50.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.752[<sup>1</sup>](#table2)
- Bounty Collected: 0.721[<sup>2</sup>](#table1)
- Opponent Network: 0.337[<sup>2</sup>](#table1)
- LAN Wins: 0.809[<sup>2</sup>](#table1)

The average of these factors is 0.655<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1638.6
- 400 + ( ( 0.655 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1638.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      499 | 2026-02-18 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.95 | HooXi, jabbi, phzy, ryu, Staehr      |
|           41 |      567 | 2026-02-17 | FaZe              | W   | 1.000      | 1.000        | 0.591 (0.591)    | 0.358 (0.358)    | 1 (1.000) |    14.32 | HooXi, jabbi, phzy, ryu, Staehr      |
|           40 |      605 | 2026-02-16 | FUT               | L   | 1.000      | -            | -                | -                | -         |   -18.61 | HooXi, jabbi, phzy, ryu, Staehr      |
|           39 |      672 | 2026-02-15 | 3DMAX             | W   | 1.000      | 1.000        | 0.401 (0.401)    | 0.298 (0.298)    | 1 (1.000) |     8.27 | HooXi, jabbi, phzy, ryu, Staehr      |
|           38 |      737 | 2026-02-14 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -12.02 | HooXi, jabbi, phzy, ryu, Staehr      |
|           37 |     1069 | 2026-02-03 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -4.85 | HooXi, jabbi, phzy, ryu, Staehr      |
|           36 |     1095 | 2026-02-02 | FUT               | W   | 1.000      | 1.000        | 0.369 (0.369)    | 0.578 (0.578)    | 1 (1.000) |    11.36 | HooXi, jabbi, phzy, ryu, Staehr      |
|           35 |     1124 | 2026-02-01 | PARIVISION        | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.622 (0.622)    | 1 (1.000) |    26.32 | HooXi, jabbi, phzy, ryu, Staehr      |
|           34 |     1163 | 2026-01-31 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -9.17 | HooXi, jabbi, phzy, ryu, Staehr      |
|           33 |     1195 | 2026-01-30 | GamerLegion       | W   | 0.994      | 0.783        | 0.368 (0.286)    | 0.663 (0.516)    | 1 (0.994) |    13.66 | HooXi, jabbi, phzy, ryu, Staehr      |
|           32 |     1204 | 2026-01-30 | NRG               | L   | 0.993      | -            | -                | -                | -         |   -22.50 | HooXi, jabbi, phzy, ryu, Staehr      |
|           31 |     1257 | 2026-01-28 | paiN              | W   | 0.979      | 0.783        | 0.369 (0.283)    | 0.179 (0.137)    | 1 (0.979) |     5.31 | HooXi, jabbi, phzy, ryu, Staehr      |
|           30 |     1554 | 2026-01-18 | PARIVISION        | L   | 0.912      | -            | -                | -                | -         |    -5.19 | HooXi, jabbi, phzy, ryu, Staehr      |
|           29 |     1730 | 2026-01-13 | fnatic            | W   | 0.881      | 0.895        | -                | 0.504 (0.397)    | -         |     4.46 | HooXi, jabbi, phzy, ryu, Staehr      |
|           28 |     2213 | 2025-12-02 | Liquid            | L   | 0.600      | -            | -                | -                | -         |   -14.33 | device, HooXi, jabbi, Magisk, Staehr |
|           27 |     2231 | 2025-12-01 | Aurora            | W   | 0.594      | 0.809        | 1.000 (0.480)    | 0.351 (0.169)    | 1 (0.594) |    12.66 | device, HooXi, jabbi, Magisk, Staehr |
|           26 |     2249 | 2025-11-30 | FlyQuest          | W   | 0.587      | 0.809        | -                | 0.360 (0.171)    | 1 (0.587) |     3.30 | device, HooXi, jabbi, Magisk, Staehr |
|           25 |     2285 | 2025-11-29 | M80               | L   | 0.580      | -            | -                | -                | -         |   -14.50 | device, HooXi, jabbi, Magisk, Staehr |
|           24 |     2312 | 2025-11-29 | Ninjas in Pyjamas | L   | 0.579      | -            | -                | -                | -         |   -15.38 | device, HooXi, jabbi, Magisk, Staehr |
|           23 |     2985 | 2025-11-07 | Vitality          | L   | 0.431      | -            | -                | -                | -         |    -1.46 | device, HooXi, jabbi, Magisk, Staehr |
|           22 |     3039 | 2025-11-05 | Falcons           | L   | 0.419      | -            | -                | -                | -         |    -2.61 | device, HooXi, jabbi, Magisk, Staehr |
|           21 |     3070 | 2025-11-04 | The MongolZ       | W   | 0.411      | 1.000        | 0.672 (0.277)    | 0.300 (0.124)    | 1 (0.411) |     6.05 | device, HooXi, jabbi, Magisk, Staehr |
|           20 |     3093 | 2025-11-03 | Natus Vincere     | W   | 0.406      | 1.000        | 0.662 (0.269)    | -                | 1 (0.406) |     7.91 | device, HooXi, jabbi, Magisk, Staehr |
|           19 |     3189 | 2025-10-30 | Aurora            | L   | 0.380      | -            | -                | -                | -         |    -3.94 | HooXi, jabbi, Magisk, ruggah, Staehr |
|           18 |     3220 | 2025-10-29 | 3DMAX             | W   | 0.371      | 1.000        | 0.401 (0.149)    | -                | -         |     3.44 | device, HooXi, jabbi, Magisk, Staehr |
|           17 |     3248 | 2025-10-28 | Legacy            | L   | 0.365      | -            | -                | -                | -         |    -9.00 | device, HooXi, jabbi, Magisk, Staehr |
|           16 |     3275 | 2025-10-27 | MIBR              | W   | 0.360      | -            | -                | -                | -         |     0.06 | device, HooXi, jabbi, Magisk, Staehr |
|           15 |     3331 | 2025-10-26 | B8                | L   | 0.354      | -            | -                | -                | -         |    -8.99 | device, HooXi, jabbi, Magisk, Staehr |
|           14 |     4026 | 2025-10-06 | FaZe              | L   | 0.219      | -            | -                | -                | -         |    -3.97 | device, HooXi, jabbi, Magisk, Staehr |
|           13 |     4091 | 2025-10-05 | Aurora            | L   | 0.212      | -            | -                | -                | -         |    -2.09 | device, HooXi, jabbi, Magisk, Staehr |
|           12 |     4142 | 2025-10-04 | Falcons           | L   | 0.205      | -            | -                | -                | -         |    -1.44 | device, HooXi, jabbi, Magisk, Staehr |
|           11 |     4206 | 2025-10-02 | Legacy            | W   | 0.193      | -            | -                | -                | -         |     1.11 | device, HooXi, jabbi, Magisk, Staehr |
|           10 |     4245 | 2025-10-01 | HEROIC            | W   | 0.186      | -            | -                | -                | -         |     1.72 | device, HooXi, jabbi, Magisk, Staehr |
|            9 |     4282 | 2025-09-30 | GamerLegion       | L   | 0.180      | -            | -                | -                | -         |    -3.07 | device, HooXi, jabbi, Magisk, Staehr |
|            8 |     4326 | 2025-09-29 | ENCE              | L   | 0.172      | -            | -                | -                | -         |    -4.97 | device, HooXi, jabbi, Magisk, Staehr |
|            7 |     4374 | 2025-09-28 | Fluxo             | W   | 0.165      | -            | -                | -                | -         |     0.33 | device, HooXi, jabbi, Magisk, Staehr |
|            6 |     4663 | 2025-09-19 | FURIA             | L   | 0.107      | -            | -                | -                | -         |    -0.54 | device, HooXi, jabbi, Magisk, Staehr |
|            5 |     4746 | 2025-09-17 | GamerLegion       | W   | 0.092      | -            | -                | -                | -         |     1.34 | device, HooXi, jabbi, Magisk, Staehr |
|            4 |     4758 | 2025-09-16 | Legacy            | W   | 0.087      | -            | -                | -                | -         |     0.49 | device, HooXi, jabbi, Magisk, Staehr |
|            3 |     4779 | 2025-09-15 | paiN              | L   | 0.081      | -            | -                | -                | -         |    -2.26 | device, HooXi, jabbi, Magisk, Staehr |
|            2 |     4841 | 2025-09-14 | Virtus.pro        | W   | 0.072      | -            | -                | -                | -         |     0.04 | device, HooXi, jabbi, Magisk, Staehr |
|            1 |     4916 | 2025-09-12 | Aurora            | L   | 0.061      | -            | -                | -                | -         |    -0.60 | device, HooXi, jabbi, Magisk, Staehr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($156,500.25)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $31,250.00     | $31,250.00      |
| 2026-02-08 |      1.000 | $38,000.00     | $38,000.00      |
| 2026-01-18 |      0.914 | $28,750.00     | $26,289.68      |
| 2025-12-02 |      0.601 | $10,000.00     | $6,010.23       |
| 2025-11-09 |      0.445 | $72,500.00     | $32,269.95      |
| 2025-11-01 |      0.394 | $31,250.00     | $12,301.06      |
| 2025-10-12 |      0.260 | $8,500.00      | $2,211.79       |
| 2025-09-21 |      0.121 | $67,500.00     | $8,167.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
