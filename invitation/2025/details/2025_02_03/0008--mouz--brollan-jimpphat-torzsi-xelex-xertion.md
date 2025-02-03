### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, torzsi, xelex, xertioN<br />
Global Rank: [8](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1652.3<br />
<br />
Final Rank Value (1652.3) = Starting Rank Value (1713.8) + Head To Head Adjustments (-61.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.862[<sup>1</sup>](#table2)
- Bounty Collected: 0.651[<sup>2</sup>](#table1)
- Opponent Network: 0.351[<sup>2</sup>](#table1)
- LAN Wins: 0.845[<sup>2</sup>](#table1)

The average of these factors is 0.677<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1713.8
- 400 + ( ( 0.677 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1713.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |        2 | 2025-02-03 | Liquid        | L   | 1.000      | -            | -                | -                | -         |   -18.70 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           36 |       22 | 2025-02-01 | GamerLegion   | L   | 1.000      | -            | -                | -                | -         |   -23.32 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           35 |      330 | 2025-01-17 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |   -30.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           34 |      547 | 2024-12-14 | Spirit        | L   | 0.857      | -            | -                | -                | -         |    -6.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      585 | 2024-12-12 | The MongolZ   | W   | 0.844      | 1.000        | 1.000 (0.844)    | 0.716 (0.605)    | 1 (0.844) |    18.93 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      642 | 2024-12-07 | MIBR          | W   | 0.816      | 1.000        | 0.225 (0.183)    | 0.649 (0.530)    | 1 (0.816) |     4.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      673 | 2024-12-06 | 3DMAX         | W   | 0.810      | 1.000        | 0.403 (0.326)    | 0.722 (0.585)    | 1 (0.810) |     5.86 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      700 | 2024-12-05 | FaZe          | L   | 0.803      | -            | -                | -                | -         |    -8.67 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |      721 | 2024-12-05 | The MongolZ   | L   | 0.798      | -            | -                | -                | -         |    -7.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |      731 | 2024-12-04 | paiN          | W   | 0.796      | 1.000        | 0.328 (0.262)    | 0.799 (0.636)    | 1 (0.796) |     4.25 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1055 | 2024-11-18 | Natus Vincere | W   | 0.684      | 0.143        | 1.000 (0.098)    | -                | 1 (0.684) |    13.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1072 | 2024-11-17 | HEROIC        | W   | 0.678      | -            | -                | -                | 1 (0.678) |     1.56 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1084 | 2024-11-16 | Nemiga        | W   | 0.676      | -            | -                | -                | 1 (0.676) |     1.34 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1464 | 2024-11-01 | Vitality      | L   | 0.571      | -            | -                | -                | -         |    -6.43 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1484 | 2024-10-31 | Astralis      | L   | 0.565      | -            | -                | -                | -         |   -14.26 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1505 | 2024-10-30 | FaZe          | W   | 0.558      | 1.000        | 1.000 (0.558)    | 0.630 (0.352)    | 1 (0.558) |    12.16 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1813 | 2024-10-13 | Natus Vincere | L   | 0.447      | -            | -                | -                | -         |    -5.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1828 | 2024-10-12 | FURIA         | W   | 0.441      | 0.624        | -                | 0.686 (0.189)    | 1 (0.441) |     4.89 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     1846 | 2024-10-11 | Vitality      | W   | 0.434      | 0.624        | 0.796 (0.216)    | 0.591 (0.160)    | 1 (0.434) |     8.92 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     1892 | 2024-10-09 | FaZe          | W   | 0.421      | 0.624        | 1.000 (0.263)    | 0.630 (0.166)    | -         |     9.64 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     1928 | 2024-10-08 | Complexity    | W   | 0.414      | -            | -                | -                | -         |     1.05 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     1954 | 2024-10-07 | FURIA         | L   | 0.407      | -            | -                | -                | -         |    -8.34 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     1963 | 2024-10-07 | paiN          | W   | 0.406      | 0.624        | 0.328 (0.083)    | 0.799 (0.202)    | -         |     2.40 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2726 | 2024-09-15 | Complexity    | L   | 0.259      | -            | -                | -                | -         |    -7.58 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2759 | 2024-09-14 | fnatic        | W   | 0.252      | -            | -                | -                | -         |     0.26 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     2809 | 2024-09-12 | Complexity    | L   | 0.240      | -            | -                | -                | -         |    -7.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     2840 | 2024-09-11 | Imperial      | L   | 0.234      | -            | -                | -                | -         |    -7.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     2881 | 2024-09-10 | Rooster       | W   | 0.226      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3146 | 2024-08-31 | Eternal Fire  | L   | 0.160      | -            | -                | -                | -         |    -2.54 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3157 | 2024-08-30 | Spirit        | L   | 0.154      | -            | -                | -                | -         |    -0.83 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3190 | 2024-08-29 | paiN          | W   | 0.147      | 0.769        | -                | 0.799 (0.091)    | -         |     0.95 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3239 | 2024-08-28 | Eternal Fire  | W   | 0.141      | 0.769        | 0.714 (0.077)    | -                | -         |     2.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3694 | 2024-08-17 | Natus Vincere | L   | 0.067      | -            | -                | -                | -         |    -0.89 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     3718 | 2024-08-16 | G2            | W   | 0.060      | -            | -                | -                | -         |     1.56 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     3806 | 2024-08-13 | Vitality      | L   | 0.040      | -            | -                | -                | -         |    -0.46 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     3861 | 2024-08-12 | Complexity    | W   | 0.033      | -            | -                | -                | -         |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     3890 | 2024-08-11 | Falcons       | W   | 0.025      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130,478.79)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.69) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-12-15 |      0.865 | $80,000.00     | $69,197.36      |
| 2024-11-03 |      0.585 | $25,000.00     | $14,621.29      |
| 2024-10-13 |      0.447 | $42,000.00     | $18,789.93      |
| 2024-09-22 |      0.307 | $12,000.00     | $3,687.49       |
| 2024-09-01 |      0.165 | $50,000.00     | $8,272.02       |
| 2024-08-18 |      0.074 | $80,000.00     | $5,910.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
