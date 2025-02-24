### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: jottAAA, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [8](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  1796.4<br />
<br />
Final Rank Value (1796.4) = Starting Rank Value (1846.9) + Head To Head Adjustments (-50.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.825[<sup>1</sup>](#table2)
- Bounty Collected: 0.736[<sup>2</sup>](#table1)
- Opponent Network: 0.477[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.760<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1846.9
- 400 + ( ( 0.760 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1846.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       64 | 2025-02-21 | Falcons            | L   | 1.000      | -            | -                | -                | -         |   -15.78 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      120 | 2025-02-17 | 3DMAX              | W   | 1.000      | 1.000        | 0.298 (0.298)    | 0.717 (0.717)    | 1 (1.000) |     5.07 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      145 | 2025-02-16 | BIG                | W   | 1.000      | 1.000        | 0.228 (0.228)    | 0.644 (0.644)    | 1 (1.000) |     1.40 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      171 | 2025-02-15 | FaZe               | L   | 1.000      | -            | -                | -                | -         |   -14.32 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      199 | 2025-02-14 | Imperial Valkyries | W   | 1.000      | 1.000        | 0.127 (0.127)    | 0.226 (0.226)    | 1 (1.000) |     0.29 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      430 | 2025-02-07 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |   -11.88 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      512 | 2025-02-04 | FaZe               | W   | 1.000      | 1.000        | 0.735 (0.735)    | 0.638 (0.638)    | 1 (1.000) |    16.74 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      520 | 2025-02-03 | 3DMAX              | W   | 1.000      | 1.000        | 0.298 (0.298)    | 0.717 (0.717)    | 1 (1.000) |     4.58 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |      533 | 2025-02-02 | Virtus.pro         | L   | 1.000      | -            | -                | -                | -         |   -26.14 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |      553 | 2025-02-01 | Falcons            | W   | 1.000      | 1.000        | 0.865 (0.865)    | 0.811 (0.811)    | 1 (1.000) |    15.18 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |      561 | 2025-01-30 | HEROIC             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.58 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |      569 | 2025-01-29 | Complexity         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.63 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |      589 | 2025-01-26 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -9.40 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |      595 | 2025-01-25 | G2                 | W   | 0.999      | 0.769        | 1.000 (0.768)    | 0.482 (0.370)    | 1 (0.999) |    16.10 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |      600 | 2025-01-24 | Vitality           | W   | 0.992      | 0.769        | 1.000 (0.762)    | 0.585 (0.446)    | 1 (0.992) |    19.53 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |      608 | 2025-01-19 | Falcons            | W   | 0.958      | 0.143        | -                | 0.811 (0.111)    | -         |    17.07 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |      619 | 2025-01-16 | Fluxo              | W   | 0.938      | -            | -                | -                | -         |     0.31 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1247 | 2024-11-23 | Astralis           | L   | 0.577      | -            | -                | -                | -         |    -9.76 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           22 |     1284 | 2024-11-21 | Sashi              | L   | 0.569      | -            | -                | -                | -         |   -17.78 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           21 |     1296 | 2024-11-21 | 3DMAX              | L   | 0.564      | -            | -                | -                | -         |   -15.27 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           20 |     1311 | 2024-11-20 | Aurora             | W   | 0.562      | -            | -                | -                | -         |     0.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           19 |     1870 | 2024-10-26 | B8                 | L   | 0.392      | -            | -                | -                | -         |   -12.13 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           18 |     1886 | 2024-10-26 | Falcons            | W   | 0.391      | -            | -                | -                | -         |     0.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           17 |     1908 | 2024-10-25 | B8                 | L   | 0.384      | -            | -                | -                | -         |   -11.88 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           16 |     2204 | 2024-10-09 | The MongolZ        | L   | 0.278      | -            | -                | -                | -         |    -3.55 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           15 |     2249 | 2024-10-08 | G2                 | W   | 0.272      | 0.624        | 1.000 (0.170)    | -                | -         |     3.77 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           14 |     2274 | 2024-10-07 | Astralis           | L   | 0.266      | -            | -                | -                | -         |    -4.94 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           13 |     2860 | 2024-09-22 | Natus Vincere      | L   | 0.166      | -            | -                | -                | -         |    -3.60 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           12 |     2891 | 2024-09-21 | MIBR               | W   | 0.158      | -            | -                | -                | -         |     0.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           11 |     2943 | 2024-09-19 | Vitality           | W   | 0.146      | 0.889        | 1.000 (0.130)    | -                | -         |     2.72 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|           10 |     2989 | 2024-09-18 | The MongolZ        | W   | 0.138      | 0.889        | -                | 0.769 (0.094)    | -         |     2.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            9 |     3290 | 2024-09-07 | Natus Vincere      | L   | 0.066      | -            | -                | -                | -         |    -1.44 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            8 |     3409 | 2024-09-04 | HEROIC             | W   | 0.045      | -            | -                | -                | -         |     0.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            7 |     3450 | 2024-09-03 | FlyQuest           | W   | 0.038      | -            | -                | -                | -         |     0.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            6 |     3491 | 2024-09-01 | Spirit             | L   | 0.024      | -            | -                | -                | -         |    -0.23 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            5 |     3503 | 2024-08-31 | MOUZ               | W   | 0.019      | -            | -                | -                | -         |     0.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            4 |     3509 | 2024-08-31 | paiN               | W   | 0.018      | -            | -                | -                | -         |     0.10 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            3 |     3529 | 2024-08-30 | FURIA              | W   | 0.011      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            2 |     3568 | 2024-08-29 | Falcons            | W   | 0.005      | -            | -                | -                | -         |     0.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            1 |     3599 | 2024-08-28 | MOUZ               | L   | 0.000      | -            | -                | -                | -         |     0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($228,201.74)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.61) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $62,500.00     | $62,500.00      |
| 2025-02-09 |      1.000 | $61,000.00     | $61,000.00      |
| 2025-01-26 |      1.000 | $85,625.00     | $85,625.00      |
| 2024-10-27 |      0.399 | $3,000.00      | $1,197.31       |
| 2024-10-13 |      0.306 | $5,000.00      | $1,531.64       |
| 2024-09-22 |      0.166 | $80,000.00     | $13,299.15      |
| 2024-09-01 |      0.024 | $125,000.00    | $3,048.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
