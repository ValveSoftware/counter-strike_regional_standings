### Roster Details<br />
Team Name: Oxuji<br />
Roster: ayano, fluffy, HeCkBNk, k1ssly, Kurama<br />
Global Rank: [85](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [64]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1005.7<br />
<br />
Final Rank Value (1005.7) = Starting Rank Value (984.5) + Head To Head Adjustments (21.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.406[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 984.5
- 400 + ( ( 0.309 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 984.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       34 | 2026-02-28 | 8Sins           | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.135 (0.019)    | 0 (0.000) |     7.08 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           22 |      202 | 2026-02-24 | brazylijski luz | W   | 1.000      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     4.23 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           21 |      250 | 2026-02-23 | home            | W   | 1.000      | 0.143        | -                | 0.171 (0.024)    | 0 (0.000) |     4.72 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           20 |      450 | 2026-02-19 | Mousquetaires   | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.160 (0.023)    | 0 (0.000) |     6.83 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           19 |      523 | 2026-02-17 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |    -8.99 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           18 |      546 | 2026-02-17 | Ursa            | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.351 (0.050)    | 0 (0.000) |    11.42 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           17 |      658 | 2026-02-15 | Nuclear TigeRES | L   | 1.000      | -            | -                | -                | -         |    -5.82 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           16 |      667 | 2026-02-15 | K27             | W   | 1.000      | 0.371        | 0.109 (0.040)    | 0.763 (0.283)    | 1 (1.000) |    27.80 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           15 |      687 | 2026-02-14 | Nemesis         | W   | 1.000      | 0.371        | 0.037 (0.014)    | 0.787 (0.292)    | 1 (1.000) |    24.37 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           14 |      711 | 2026-02-14 | WHITEBIRD       | W   | 1.000      | 0.371        | 0.093 (0.035)    | 0.725 (0.269)    | 1 (1.000) |    24.43 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           13 |      736 | 2026-02-14 | 1win            | L   | 1.000      | -            | -                | -                | -         |    -7.07 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           12 |      818 | 2026-02-12 | Atreides        | L   | 1.000      | -            | -                | -                | -         |   -25.28 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           11 |      835 | 2026-02-11 | CSDIILIT        | L   | 1.000      | -            | -                | -                | -         |   -24.70 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           10 |     1127 | 2026-02-01 | Nemesis         | L   | 1.000      | -            | -                | -                | -         |    -6.09 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            9 |     1132 | 2026-02-01 | MUERTA          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.22 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            8 |     1143 | 2026-02-01 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -5.35 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            7 |     1893 | 2025-12-21 | WHITEBIRD       | L   | 0.725      | -            | -                | -                | -         |    -5.54 | ayano, HeCkBNk, k1ssly, Kurama, mo0N    |
|            6 |     2029 | 2025-12-12 | TNT             | L   | 0.667      | -            | -                | -                | -         |   -17.98 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            5 |     2061 | 2025-12-09 | QWENTRY         | W   | 0.647      | 0.377        | 0.004 (0.001)    | 0.434 (0.106)    | 0 (0.000) |     5.16 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            4 |     2065 | 2025-12-09 | ALLINNERS       | W   | 0.647      | 0.377        | 0.008 (0.002)    | 0.174 (0.042)    | -         |     8.60 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            3 |     2080 | 2025-12-08 | NOVAQ           | W   | 0.641      | 0.377        | 0.033 (0.008)    | 0.597 (0.144)    | -         |    10.57 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            2 |     2084 | 2025-12-08 | K27             | L   | 0.640      | -            | -                | -                | -         |    -1.86 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            1 |     2496 | 2025-11-21 | BET-M           | L   | 0.528      | -            | -                | -                | -         |    -6.52 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,590.46)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      1.000 | $3,000.00      | $3,000.00       |
| 2025-12-21 |      0.726 | $4,944.00      | $3,590.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
