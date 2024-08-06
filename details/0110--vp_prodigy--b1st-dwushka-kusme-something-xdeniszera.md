### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: b1st, dwushka, KusMe, Something, xdENiSZERA<br />
Global Rank: [110](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
<br />
Final Rank Value:  841.5<br />
<br />
Final Rank Value (841.5) = Starting Rank Value (872.1) + Head To Head Adjustments (-30.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 872.1
- 400 + ( ( 0.229 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 872.1


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
|           34 |      628 | 2024-07-19 | WOPA              | L   | 1.000      | -            | -                | -                | -         |   -26.76 | b1st, dwushka, KusMe, Something, xdENiSZERA  |
|           33 |      750 | 2024-07-17 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -14.49 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           32 |      834 | 2024-07-15 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -13.56 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           31 |     1102 | 2024-06-15 | ARCRED            | L   | 0.852      | -            | -                | -                | -         |   -10.73 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           30 |     1168 | 2024-06-13 | HOTU              | W   | 0.839      | 0.450        | 0.007 (0.003)    | -                | 0 (0.000) |     5.54 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           29 |     1177 | 2024-06-13 | 3DMAX             | L   | 0.838      | -            | -                | -                | -         |    -1.27 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           28 |     1314 | 2024-06-09 | Illuminar         | L   | 0.811      | -            | -                | -                | -         |   -13.43 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           27 |     1367 | 2024-06-08 | EYEBALLERS        | L   | 0.805      | -            | -                | -                | -         |   -12.87 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           26 |     1465 | 2024-06-06 | Space             | L   | 0.793      | -            | -                | -                | -         |   -14.20 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           25 |     1589 | 2024-06-04 | SINNERS           | W   | 0.779      | 0.435        | 0.047 (0.016)    | 0.800 (0.271)    | 0 (0.000) |    16.34 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           24 |     1636 | 2024-06-02 | GUN5              | L   | 0.765      | -            | -                | -                | -         |   -10.88 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           23 |     1654 | 2024-06-01 | 3DMAX             | W   | 0.760      | 0.435        | 0.510 (0.168)    | 1.000 (0.330)    | 0 (0.000) |    23.24 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           22 |     1667 | 2024-06-01 | 777               | W   | 0.758      | 0.143        | 0.015 (0.002)    | -                | 0 (0.000) |     6.38 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           21 |     1682 | 2024-05-31 | LEON              | L   | 0.754      | -            | -                | -                | -         |   -18.63 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           20 |     1700 | 2024-05-31 | Alliance          | W   | 0.752      | 0.435        | 0.017 (0.006)    | 0.282 (0.092)    | 0 (0.000) |     9.72 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           19 |     1709 | 2024-05-30 | Insilio           | L   | 0.747      | -            | -                | -                | -         |   -11.46 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           18 |     1757 | 2024-05-28 | CYBERSHOKE        | W   | 0.734      | 0.372        | 0.039 (0.011)    | 0.378 (0.103)    | 0 (0.000) |    10.30 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           17 |     1787 | 2024-05-27 | Permitta          | W   | 0.727      | 0.435        | 0.039 (0.012)    | 0.919 (0.290)    | 0 (0.000) |    12.25 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           16 |     1838 | 2024-05-24 | DMS               | W   | 0.706      | 0.435        | -                | 0.428 (0.131)    | 0 (0.000) |    11.94 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           15 |     1883 | 2024-05-22 | ALTERNATE aTTaX   | W   | 0.694      | 0.435        | 0.031 (0.009)    | 0.537 (0.162)    | 0 (0.000) |    11.79 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           14 |     1978 | 2024-05-20 | SINNERS           | L   | 0.679      | -            | -                | -                | -         |    -5.24 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           13 |     2036 | 2024-05-18 | CPH Wolves        | W   | 0.665      | 0.143        | -                | 0.354 (0.034)    | 0 (0.000) |     7.93 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           12 |     2199 | 2024-05-14 | LEON              | W   | 0.641      | -            | -                | -                | -         |     5.33 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |     2230 | 2024-05-13 | WOPA              | W   | 0.633      | -            | -                | -                | -         |     3.94 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |     2397 | 2024-05-05 | Nemiga            | L   | 0.580      | -            | -                | -                | -         |    -2.74 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     2531 | 2024-04-29 | Nexus             | W   | 0.539      | 0.396        | 0.014 (0.003)    | 0.447 (0.096)    | -         |     8.02 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     2550 | 2024-04-28 | brazylijski luz   | L   | 0.533      | -            | -                | -                | -         |    -9.21 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     2554 | 2024-04-28 | LEON              | W   | 0.532      | 0.396        | 0.007 (0.001)    | 0.124 (0.026)    | -         |     4.59 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     3445 | 2024-03-23 | FORZE             | L   | 0.293      | -            | -                | -                | -         |    -4.14 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     3462 | 2024-03-22 | ex-Guild Eagles   | W   | 0.285      | -            | -                | -                | -         |     3.78 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     3508 | 2024-03-20 | TSM               | W   | 0.272      | -            | -                | -                | -         |     2.18 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     3735 | 2024-03-10 | 1WIN              | L   | 0.206      | -            | -                | -                | -         |    -2.73 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     3804 | 2024-03-07 | Permitta          | L   | 0.187      | -            | -                | -                | -         |    -2.01 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     3874 | 2024-03-05 | FORZE YNG         | W   | 0.173      | -            | -                | -                | -         |     0.36 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,128.57)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.859 | $5,000.00      | $4,296.88       |
| 2024-06-02 |      0.766 | $5,000.00      | $3,831.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
