### Roster Details<br />
Team Name: HEROIC<br />
Roster: LNZ, Maden, SunPayus, xfl0ud, yxngstxr<br />
Global Rank: [22](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1255.3<br />
<br />
Final Rank Value (1255.3) = Starting Rank Value (1186.4) + Head To Head Adjustments (69.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.632[<sup>1</sup>](#table2)
- Bounty Collected: 0.506[<sup>2</sup>](#table1)
- Opponent Network: 0.142[<sup>2</sup>](#table1)
- LAN Wins: 0.328[<sup>2</sup>](#table1)

The average of these factors is 0.402<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1186.4
- 400 + ( ( 0.402 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1186.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      105 | 2025-01-23 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -0.66 | LNZ, Maden, SunPayus, xfl0ud, yxngstxr |
|           31 |      210 | 2025-01-18 | Liquid        | W   | 1.000      | 0.143        | 0.371 (0.053)    | -                | 0 (0.000) |    27.48 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           30 |      225 | 2025-01-14 | 3DMAX         | W   | 1.000      | 0.143        | 0.404 (0.058)    | -                | 0 (0.000) |    21.80 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           29 |      929 | 2024-11-18 | ECLOT         | L   | 0.736      | -            | -                | -                | -         |   -12.82 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           28 |      941 | 2024-11-17 | Cloud9        | L   | 0.730      | -            | -                | -                | -         |   -16.47 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           27 |      954 | 2024-11-17 | MOUZ          | L   | 0.725      | -            | -                | -                | -         |    -1.33 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           26 |      962 | 2024-11-16 | Rebels        | W   | 0.724      | -            | -                | -                | 1 (0.724) |     2.51 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           25 |     1544 | 2024-10-20 | Nemiga        | W   | 0.540      | 0.500        | 0.492 (0.133)    | 0.574 (0.155)    | 0 (0.000) |     8.99 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           24 |     1573 | 2024-10-19 | UNPAID        | L   | 0.533      | -            | -                | -                | -         |   -13.51 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           23 |     1620 | 2024-10-17 | Nemiga        | W   | 0.520      | 0.500        | 0.492 (0.128)    | 0.574 (0.149)    | 0 (0.000) |     8.18 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           22 |     1631 | 2024-10-17 | Fluxo         | W   | 0.519      | 0.624        | 0.130 (0.042)    | 0.535 (0.173)    | 1 (0.519) |     5.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           21 |     1652 | 2024-10-16 | SAW           | W   | 0.514      | 0.500        | 0.235 (0.060)    | 0.407 (0.104)    | -         |     9.50 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           20 |     1660 | 2024-10-16 | Nemiga        | W   | 0.513      | 0.624        | 0.492 (0.157)    | 0.574 (0.184)    | 1 (0.513) |     8.48 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           19 |     1681 | 2024-10-15 | Sashi         | W   | 0.507      | 0.500        | -                | 0.652 (0.165)    | -         |     3.94 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           18 |     2180 | 2024-09-27 | BetBoom       | L   | 0.387      | -            | -                | -                | -         |    -7.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           17 |     2242 | 2024-09-26 | Passion UA    | W   | 0.379      | 0.435        | -                | 0.802 (0.132)    | -         |     4.27 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           16 |     2801 | 2024-09-08 | Falcons       | L   | 0.259      | -            | -                | -                | -         |    -0.44 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           15 |     2840 | 2024-09-07 | FlyQuest      | W   | 0.252      | 0.889        | 0.172 (0.038)    | 0.486 (0.109)    | 1 (0.252) |     4.82 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           14 |     2862 | 2024-09-06 | FaZe          | L   | 0.246      | -            | -                | -                | -         |    -0.18 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           13 |     2883 | 2024-09-05 | Falcons       | W   | 0.241      | 0.889        | 0.872 (0.186)    | 0.627 (0.134)    | 1 (0.241) |     7.21 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           12 |     2936 | 2024-09-04 | Eternal Fire  | L   | 0.233      | -            | -                | -                | -         |    -0.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           11 |     2967 | 2024-09-03 | FaZe          | W   | 0.226      | 0.889        | 1.000 (0.201)    | 0.566 (0.114)    | 1 (0.226) |     6.99 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           10 |     3401 | 2024-08-22 | UNPAID        | W   | 0.145      | -            | -                | -                | -         |     1.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            9 |     3451 | 2024-08-21 | BC.Game       | W   | 0.139      | -            | -                | -                | -         |     0.59 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            8 |     3487 | 2024-08-21 | 1WIN          | W   | 0.138      | -            | -                | -                | -         |     0.18 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            7 |     3641 | 2024-08-15 | Nemiga        | L   | 0.099      | -            | -                | -                | -         |    -1.26 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            6 |     3733 | 2024-08-12 | Zero Tenacity | W   | 0.081      | -            | -                | -                | -         |     0.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            5 |     3883 | 2024-08-07 | Rebels        | W   | 0.046      | -            | -                | -                | -         |     0.18 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            4 |     3927 | 2024-08-06 | PARIVISION    | W   | 0.040      | -            | -                | -                | -         |     0.16 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            3 |     3934 | 2024-08-06 | los kogutos   | W   | 0.039      | -            | -                | -                | -         |     0.61 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            2 |     3971 | 2024-08-05 | 1WIN          | W   | 0.031      | -            | -                | -                | -         |     0.04 | Chill, LNZ, SaMey, xfl0ud, yxngstxr    |
|            1 |     4031 | 2024-08-03 | Passion UA    | W   | 0.019      | -            | -                | -                | -         |     0.29 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,445.86)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-26 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-10-20 |      0.540 | $17,000.00     | $9,172.83       |
| 2024-10-19 |      0.534 | $25,000.00     | $13,355.44      |
| 2024-09-28 |      0.394 | $2,000.00      | $787.29         |
| 2024-09-22 |      0.354 | $12,000.00     | $4,248.66       |
| 2024-08-06 |      0.040 | $22,000.00     | $881.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
