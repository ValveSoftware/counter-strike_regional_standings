### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, jks, nettik, story, Vexite<br />
Global Rank: [36](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [2]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  1306.5<br />
<br />
Final Rank Value (1306.5) = Starting Rank Value (1302.6) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.524[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.798[<sup>2</sup>](#table1)

The average of these factors is 0.477<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1302.6
- 400 + ( ( 0.477 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1302.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |       42 | 2026-02-28 | 100 Thieves       | L   | 1.000      | -            | -                | -                | -         |   -16.07 | INS, jks, nettik, story, Vexite  |
|           23 |       69 | 2026-02-27 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -10.14 | INS, jks, nettik, story, Vexite  |
|           22 |      112 | 2026-02-26 | Eternal Fire      | W   | 1.000      | 0.354        | 0.004 (0.002)    | 0.405 (0.143)    | 1 (1.000) |     4.68 | INS, jks, nettik, story, Vexite  |
|           21 |      140 | 2026-02-26 | Nexus             | W   | 1.000      | 0.354        | -                | 0.684 (0.242)    | 1 (1.000) |     3.53 | INS, jks, nettik, story, Vexite  |
|           20 |      181 | 2026-02-25 | HYPERSPIRIT       | W   | 1.000      | 0.354        | -                | 0.317 (0.112)    | 1 (1.000) |     1.62 | INS, jks, nettik, story, Vexite  |
|           19 |     1323 | 2026-01-25 | JiJieHao          | W   | 0.959      | 0.423        | 0.030 (0.012)    | 0.450 (0.182)    | 1 (0.959) |     4.18 | INS, jks, nettik, story, Vexite  |
|           18 |     1362 | 2026-01-24 | Morningstar       | W   | 0.951      | 0.423        | 0.047 (0.019)    | 0.344 (0.138)    | 1 (0.951) |     3.90 | INS, jks, nettik, story, Vexite  |
|           17 |     1401 | 2026-01-23 | Chinggis Warriors | W   | 0.946      | 0.423        | 0.015 (0.006)    | 0.222 (0.089)    | 1 (0.946) |     2.17 | INS, jks, nettik, story, Vexite  |
|           16 |     1546 | 2026-01-18 | Steel Helmet      | W   | 0.913      | -            | -                | -                | -         |     0.17 | INS, jks, nettik, story, Vexite  |
|           15 |     2249 | 2025-11-30 | Astralis          | L   | 0.587      | -            | -                | -                | -         |    -3.30 | INS, jks, nettik, regali, Vexite |
|           14 |     2288 | 2025-11-29 | 3DMAX             | L   | 0.580      | -            | -                | -                | -         |    -6.59 | INS, jks, nettik, regali, Vexite |
|           13 |     2303 | 2025-11-29 | Natus Vincere     | L   | 0.579      | -            | -                | -                | -         |    -2.20 | INS, jks, nettik, regali, Vexite |
|           12 |     2380 | 2025-11-25 | Fluxo             | W   | 0.553      | 0.624        | 0.033 (0.011)    | 0.317 (0.109)    | 1 (0.553) |     5.84 | INS, jks, nettik, regali, Vexite |
|           11 |     2408 | 2025-11-24 | Imperial          | W   | 0.548      | 0.624        | 0.080 (0.027)    | 0.670 (0.229)    | 1 (0.548) |     6.75 | INS, jks, nettik, regali, Vexite |
|           10 |     2423 | 2025-11-24 | Legacy            | W   | 0.546      | 0.624        | 0.620 (0.211)    | -                | 1 (0.546) |    10.84 | INS, jks, nettik, regali, Vexite |
|            9 |     3195 | 2025-10-30 | Legacy            | L   | 0.379      | -            | -                | -                | -         |    -4.59 | INS, jks, nettik, regali, Vexite |
|            8 |     3214 | 2025-10-29 | Liquid            | L   | 0.372      | -            | -                | -                | -         |    -4.57 | INS, jks, nettik, regali, Vexite |
|            7 |     3244 | 2025-10-28 | 3DMAX             | W   | 0.366      | 1.000        | 0.401 (0.147)    | 0.298 (0.109)    | 1 (0.366) |     8.12 | INS, jks, nettik, regali, Vexite |
|            6 |     3283 | 2025-10-27 | fnatic            | W   | 0.360      | 1.000        | 0.115 (0.041)    | 0.504 (0.181)    | -         |     5.86 | INS, jks, nettik, regali, Vexite |
|            5 |     3345 | 2025-10-26 | GamerLegion       | L   | 0.352      | -            | -                | -                | -         |    -1.84 | INS, jks, nettik, regali, Vexite |
|            4 |     4448 | 2025-09-26 | GenOne            | L   | 0.154      | -            | -                | -                | -         |    -4.11 | INS, jks, nettik, regali, Vexite |
|            3 |     4461 | 2025-09-26 | SINNERS           | W   | 0.153      | 0.339        | 0.248 (0.013)    | -                | -         |     2.90 | INS, jks, nettik, regali, Vexite |
|            2 |     4505 | 2025-09-25 | Metizport         | W   | 0.147      | -            | -                | -                | -         |     1.22 | INS, jks, nettik, regali, Vexite |
|            1 |     4523 | 2025-09-25 | BASEMENT BOYS     | L   | 0.145      | -            | -                | -                | -         |    -4.44 | INS, jks, nettik, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,175.86)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-28 |      1.000 | $2,250.00      | $2,250.00       |
| 2026-01-25 |      0.959 | $21,498.00     | $20,614.57      |
| 2025-12-02 |      0.601 | $10,000.00     | $6,010.23       |
| 2025-11-01 |      0.394 | $31,250.00     | $12,301.06      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
