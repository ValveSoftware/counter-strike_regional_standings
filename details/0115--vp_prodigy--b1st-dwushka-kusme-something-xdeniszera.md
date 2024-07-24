### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: b1st, dwushka, KusMe, Something, xdENiSZERA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  829.3<br />
<br />
Final Rank Value (829.3) = Starting Rank Value (868.1) + Head To Head Adjustments (-38.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 868.1
- 400 + ( ( 0.231 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 868.1


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
|           34 |      178 | 2024-07-19 | WOPA              | L   | 1.000      | -            | -                | -                | -         |   -26.41 | b1st, dwushka, KusMe, Something, xdENiSZERA  |
|           33 |      300 | 2024-07-17 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -13.83 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           32 |      384 | 2024-07-15 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -16.16 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           31 |      652 | 2024-06-15 | ARCRED            | L   | 0.938      | -            | -                | -                | -         |   -12.68 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           30 |      718 | 2024-06-13 | HOTU              | W   | 0.926      | 0.450        | 0.009 (0.004)    | -                | 0 (0.000) |     6.42 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           29 |      727 | 2024-06-13 | 3DMAX             | L   | 0.925      | -            | -                | -                | -         |    -4.92 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           28 |      864 | 2024-06-09 | Illuminar         | L   | 0.898      | -            | -                | -                | -         |   -15.08 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           27 |      917 | 2024-06-08 | EYEBALLERS        | L   | 0.892      | -            | -                | -                | -         |   -14.07 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           26 |     1015 | 2024-06-06 | Space             | L   | 0.880      | -            | -                | -                | -         |   -14.89 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           25 |     1139 | 2024-06-04 | SINNERS           | W   | 0.865      | 0.435        | 0.048 (0.018)    | 0.769 (0.289)    | 0 (0.000) |    16.55 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           24 |     1186 | 2024-06-02 | GUN5              | L   | 0.851      | -            | -                | -                | -         |   -11.85 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           23 |     1204 | 2024-06-01 | 3DMAX             | W   | 0.847      | 0.435        | 0.175 (0.064)    | 1.000 (0.368)    | 0 (0.000) |    22.11 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           22 |     1217 | 2024-06-01 | 777               | W   | 0.845      | 0.143        | 0.020 (0.002)    | -                | 0 (0.000) |     7.49 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           21 |     1232 | 2024-05-31 | LEON              | L   | 0.840      | -            | -                | -                | -         |   -20.54 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           20 |     1250 | 2024-05-31 | Alliance          | W   | 0.838      | 0.435        | 0.018 (0.006)    | 0.328 (0.119)    | 0 (0.000) |    11.27 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           19 |     1259 | 2024-05-30 | Insilio           | L   | 0.834      | -            | -                | -                | -         |   -12.14 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           18 |     1307 | 2024-05-28 | CYBERSHOKE        | W   | 0.821      | 0.372        | 0.050 (0.015)    | 0.294 (0.090)    | 0 (0.000) |     9.27 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           17 |     1337 | 2024-05-27 | Permitta          | W   | 0.813      | 0.435        | 0.032 (0.011)    | 0.790 (0.279)    | 0 (0.000) |    12.92 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           16 |     1388 | 2024-05-24 | DMS               | W   | 0.793      | 0.435        | -                | 0.461 (0.159)    | 0 (0.000) |    12.33 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           15 |     1433 | 2024-05-22 | ALTERNATE aTTaX   | W   | 0.781      | 0.435        | 0.041 (0.014)    | 0.638 (0.216)    | 0 (0.000) |    13.25 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           14 |     1528 | 2024-05-20 | SINNERS           | L   | 0.765      | -            | -                | -                | -         |    -7.78 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           13 |     1586 | 2024-05-18 | CPH Wolves        | W   | 0.752      | 0.143        | -                | 0.388 (0.042)    | 0 (0.000) |     9.04 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           12 |     1749 | 2024-05-14 | LEON              | W   | 0.727      | -            | -                | -                | -         |     6.26 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |     1780 | 2024-05-13 | WOPA              | W   | 0.720      | -            | -                | -                | -         |     4.57 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |     1947 | 2024-05-05 | Nemiga            | L   | 0.667      | -            | -                | -                | -         |    -2.73 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     2081 | 2024-04-29 | Nexus             | W   | 0.626      | 0.396        | 0.018 (0.004)    | 0.480 (0.119)    | -         |     9.70 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     2100 | 2024-04-28 | brazylijski luz   | L   | 0.619      | -            | -                | -                | -         |    -9.90 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     2104 | 2024-04-28 | LEON              | W   | 0.619      | 0.396        | 0.009 (0.002)    | 0.149 (0.037)    | -         |     5.60 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     2995 | 2024-03-23 | FORZE             | L   | 0.379      | -            | -                | -                | -         |    -4.59 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     3012 | 2024-03-22 | ex-Guild Eagles   | W   | 0.372      | -            | -                | -                | -         |     5.55 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     3058 | 2024-03-20 | TSM               | W   | 0.359      | -            | -                | -                | -         |     3.24 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     3285 | 2024-03-10 | 1WIN              | L   | 0.293      | -            | -                | -                | -         |    -4.16 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     3354 | 2024-03-07 | Permitta          | L   | 0.274      | -            | -                | -                | -         |    -3.26 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     3424 | 2024-03-05 | FORZE YNG         | W   | 0.260      | -            | -                | -                | -         |     0.55 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,993.09)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $5,000.00      | $4,729.14       |
| 2024-06-02 |      0.853 | $5,000.00      | $4,263.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
