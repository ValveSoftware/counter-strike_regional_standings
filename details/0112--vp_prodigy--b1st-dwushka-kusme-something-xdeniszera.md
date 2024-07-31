### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: b1st, dwushka, KusMe, Something, xdENiSZERA<br />
Global Rank: [112](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
<br />
Final Rank Value:  837.5<br />
<br />
Final Rank Value (837.5) = Starting Rank Value (876.1) + Head To Head Adjustments (-38.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 876.1
- 400 + ( ( 0.231 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 876.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      420 | 2024-07-19 | WOPA              | L   | 1.000      | -            | -                | -                | -         |   -26.64 | b1st, dwushka, KusMe, Something, xdENiSZERA  |
|           33 |      542 | 2024-07-17 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -14.56 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           32 |      626 | 2024-07-15 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -15.79 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           31 |      894 | 2024-06-15 | ARCRED            | L   | 0.891      | -            | -                | -                | -         |   -12.49 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           30 |      960 | 2024-06-13 | HOTU              | W   | 0.879      | 0.450        | 0.007 (0.003)    | -                | 0 (0.000) |     5.85 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           29 |      969 | 2024-06-13 | 3DMAX             | L   | 0.878      | -            | -                | -                | -         |    -1.39 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           28 |     1106 | 2024-06-09 | Illuminar         | L   | 0.850      | -            | -                | -                | -         |   -14.18 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           27 |     1159 | 2024-06-08 | EYEBALLERS        | L   | 0.845      | -            | -                | -                | -         |   -13.44 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           26 |     1257 | 2024-06-06 | Space             | L   | 0.833      | -            | -                | -                | -         |   -14.74 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           25 |     1381 | 2024-06-04 | SINNERS           | W   | 0.818      | 0.435        | 0.038 (0.014)    | 0.721 (0.256)    | 0 (0.000) |    15.31 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           24 |     1428 | 2024-06-02 | GUN5              | L   | 0.804      | -            | -                | -                | -         |   -11.70 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           23 |     1446 | 2024-06-01 | 3DMAX             | W   | 0.799      | 0.435        | 0.504 (0.175)    | 1.000 (0.347)    | 0 (0.000) |    24.41 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           22 |     1459 | 2024-06-01 | 777               | W   | 0.798      | 0.143        | 0.016 (0.002)    | -                | 0 (0.000) |     6.82 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           21 |     1474 | 2024-05-31 | LEON              | L   | 0.793      | -            | -                | -                | -         |   -19.58 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           20 |     1492 | 2024-05-31 | Alliance          | W   | 0.791      | 0.435        | 0.014 (0.005)    | 0.273 (0.094)    | 0 (0.000) |    10.19 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           19 |     1501 | 2024-05-30 | Insilio           | L   | 0.786      | -            | -                | -                | -         |   -12.08 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           18 |     1549 | 2024-05-28 | CYBERSHOKE        | W   | 0.773      | 0.372        | 0.040 (0.011)    | 0.347 (0.100)    | 0 (0.000) |    10.87 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           17 |     1579 | 2024-05-27 | Permitta          | W   | 0.766      | 0.435        | 0.025 (0.008)    | 0.799 (0.266)    | 0 (0.000) |    11.90 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           16 |     1630 | 2024-05-24 | DMS               | W   | 0.746      | 0.435        | -                | 0.447 (0.145)    | 0 (0.000) |    12.65 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           15 |     1675 | 2024-05-22 | ALTERNATE aTTaX   | W   | 0.734      | 0.435        | 0.032 (0.010)    | 0.564 (0.180)    | 0 (0.000) |    12.24 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           14 |     1770 | 2024-05-20 | SINNERS           | L   | 0.718      | -            | -                | -                | -         |    -7.52 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           13 |     1828 | 2024-05-18 | CPH Wolves        | W   | 0.705      | 0.143        | -                | 0.358 (0.036)    | 0 (0.000) |     8.32 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           12 |     1991 | 2024-05-14 | LEON              | W   | 0.680      | -            | -                | -                | -         |     5.64 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |     2022 | 2024-05-13 | WOPA              | W   | 0.673      | -            | -                | -                | -         |     4.16 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |     2189 | 2024-05-05 | Nemiga            | L   | 0.620      | -            | -                | -                | -         |    -2.95 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     2323 | 2024-04-29 | Nexus             | W   | 0.579      | 0.396        | 0.014 (0.003)    | 0.465 (0.107)    | -         |     8.55 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     2342 | 2024-04-28 | brazylijski luz   | L   | 0.572      | -            | -                | -                | -         |    -9.77 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     2346 | 2024-04-28 | LEON              | W   | 0.571      | 0.396        | 0.007 (0.002)    | 0.131 (0.030)    | -         |     4.93 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     3237 | 2024-03-23 | FORZE             | L   | 0.332      | -            | -                | -                | -         |    -4.47 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     3254 | 2024-03-22 | ex-Guild Eagles   | W   | 0.324      | -            | -                | -                | -         |     4.46 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     3300 | 2024-03-20 | TSM               | W   | 0.311      | -            | -                | -                | -         |     2.56 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     3527 | 2024-03-10 | 1WIN              | L   | 0.246      | -            | -                | -                | -         |    -3.68 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     3596 | 2024-03-07 | Permitta          | L   | 0.226      | -            | -                | -                | -         |    -2.90 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     3666 | 2024-03-05 | FORZE YNG         | W   | 0.213      | -            | -                | -                | -         |     0.43 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,520.21)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $5,000.00      | $4,492.70       |
| 2024-06-02 |      0.806 | $5,000.00      | $4,027.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
