### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, NAF, NertZ, siuhy, ultimate<br />
Global Rank: [23](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [19]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1400.4<br />
<br />
Final Rank Value (1400.4) = Starting Rank Value (1356.7) + Head To Head Adjustments (43.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.738[<sup>1</sup>](#table2)
- Bounty Collected: 0.538[<sup>2</sup>](#table1)
- Opponent Network: 0.268[<sup>2</sup>](#table1)
- LAN Wins: 0.478[<sup>2</sup>](#table1)

The average of these factors is 0.506<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1356.7
- 400 + ( ( 0.506 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1356.7


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
|           37 |     1194 | 2026-01-30 | FUT               | L   | 0.994      | -            | -                | -                | -         |   -12.17 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           36 |     1220 | 2026-01-29 | G2                | L   | 0.988      | -            | -                | -                | -         |    -9.14 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           35 |     1244 | 2026-01-28 | Ninjas in Pyjamas | W   | 0.981      | 0.783        | 0.120 (0.092)    | 0.423 (0.325)    | 1 (0.981) |    11.83 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           34 |     1438 | 2026-01-22 | Falcons           | L   | 0.940      | -            | -                | -                | -         |    -2.32 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           33 |     1597 | 2026-01-17 | Gentle Mates      | W   | 0.906      | 0.895        | 0.206 (0.167)    | 0.686 (0.557)    | -         |    16.01 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           32 |     1685 | 2026-01-15 | Ninjas in Pyjamas | W   | 0.894      | 0.895        | 0.120 (0.096)    | 0.423 (0.339)    | -         |    12.26 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           31 |     2152 | 2025-12-05 | Passion UA        | L   | 0.620      | -            | -                | -                | -         |   -12.01 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           30 |     2173 | 2025-12-04 | The MongolZ       | L   | 0.614      | -            | -                | -                | -         |    -5.52 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           29 |     2187 | 2025-12-04 | Spirit            | L   | 0.613      | -            | -                | -                | -         |    -2.99 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           28 |     2213 | 2025-12-02 | Astralis          | W   | 0.600      | 0.809        | 0.468 (0.227)    | 0.375 (0.182)    | 1 (0.600) |    14.33 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           27 |     2228 | 2025-12-01 | TYLOO             | W   | 0.595      | -            | -                | -                | 1 (0.595) |     1.15 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           26 |     2245 | 2025-11-30 | MIBR              | W   | 0.588      | 0.809        | 0.153 (0.073)    | 0.666 (0.316)    | 1 (0.588) |     9.91 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           25 |     2278 | 2025-11-29 | PARIVISION        | L   | 0.581      | -            | -                | -                | -         |    -0.98 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           24 |     2298 | 2025-11-29 | B8                | L   | 0.580      | -            | -                | -                | -         |    -8.76 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           23 |     3173 | 2025-10-31 | BC.Game           | L   | 0.386      | -            | -                | -                | -         |    -4.56 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           22 |     3214 | 2025-10-29 | FlyQuest          | W   | 0.372      | 1.000        | -                | 0.360 (0.134)    | 1 (0.372) |     4.57 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           21 |     3252 | 2025-10-28 | BetBoom           | W   | 0.365      | 1.000        | -                | 0.931 (0.340)    | 1 (0.365) |     6.41 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           20 |     3279 | 2025-10-27 | Aurora            | L   | 0.360      | -            | -                | -                | -         |    -1.27 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           19 |     3349 | 2025-10-26 | Legacy            | W   | 0.352      | 1.000        | 0.620 (0.218)    | -                | 1 (0.352) |     5.59 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           18 |     3576 | 2025-10-18 | HEROIC            | W   | 0.303      | 1.000        | 0.443 (0.134)    | 0.433 (0.131)    | 1 (0.303) |     6.08 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           17 |     3599 | 2025-10-18 | 3DMAX             | L   | 0.297      | -            | -                | -                | -         |    -3.53 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           16 |     3662 | 2025-10-16 | Legacy            | W   | 0.284      | 1.000        | 0.620 (0.176)    | -                | 1 (0.284) |     4.44 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           15 |     3721 | 2025-10-14 | MIBR              | W   | 0.273      | 1.000        | -                | 0.666 (0.181)    | 1 (0.273) |     5.26 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           14 |     3732 | 2025-10-13 | GamerLegion       | W   | 0.270      | 1.000        | 0.368 (0.099)    | 0.663 (0.179)    | -         |     6.74 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           13 |     4354 | 2025-09-28 | Partizan          | W   | 0.167      | -            | -                | -                | -         |     0.16 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           12 |     4366 | 2025-09-28 | 9INE              | L   | 0.166      | -            | -                | -                | -         |    -2.84 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           11 |     4380 | 2025-09-28 | SIXSEVEN          | W   | 0.165      | -            | -                | -                | -         |     0.27 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           10 |     4418 | 2025-09-27 | ENCE              | W   | 0.160      | -            | -                | -                | -         |     1.51 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            9 |     4429 | 2025-09-27 | 9INE              | L   | 0.159      | -            | -                | -                | -         |    -2.76 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            8 |     4434 | 2025-09-27 | SIXSEVEN          | W   | 0.158      | -            | -                | -                | -         |     0.26 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            7 |     4639 | 2025-09-20 | The MongolZ       | L   | 0.113      | -            | -                | -                | -         |    -0.77 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            6 |     4672 | 2025-09-19 | Aurora            | W   | 0.106      | 1.000        | 1.000 (0.106)    | -                | -         |     3.04 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            5 |     4751 | 2025-09-17 | FaZe              | W   | 0.092      | -            | -                | -                | -         |     2.25 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            4 |     4764 | 2025-09-16 | TYLOO             | W   | 0.087      | -            | -                | -                | -         |     0.18 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            3 |     4793 | 2025-09-15 | HEROIC            | W   | 0.079      | -            | -                | -                | -         |     1.66 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            2 |     4830 | 2025-09-14 | GamerLegion       | L   | 0.073      | -            | -                | -                | -         |    -0.45 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            1 |     4863 | 2025-09-13 | FURIA             | L   | 0.068      | -            | -                | -                | -         |    -0.08 | NAF, NertZ, siuhy, Twistzz, ultimate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($147,592.83)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.994 | $4,500.00      | $4,473.35       |
| 2026-01-25 |      0.960 | $51,250.00     | $49,215.89      |
| 2025-12-14 |      0.681 | $20,000.00     | $13,622.07      |
| 2025-11-01 |      0.394 | $62,500.00     | $24,602.13      |
| 2025-10-19 |      0.305 | $130,000.00    | $39,664.98      |
| 2025-09-28 |      0.167 | $1,700.00      | $284.34         |
| 2025-09-21 |      0.121 | $130,000.00    | $15,730.08      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
