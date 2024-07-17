### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: dwushka, KusMe, shady, Something, xdENiSZERA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  891.3<br />
<br />
Final Rank Value (891.3) = Starting Rank Value (914.7) + Head To Head Adjustments (-23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.181[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 914.7
- 400 + ( ( 0.240 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 914.7


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
|           33 |       12 | 2024-07-17 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -13.72 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           32 |       96 | 2024-07-15 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -17.56 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           31 |      364 | 2024-06-15 | ARCRED            | L   | 0.986      | -            | -                | -                | -         |   -12.85 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           30 |      430 | 2024-06-13 | HOTU              | W   | 0.973      | 0.450        | 0.010 (0.004)    | -                | 0 (0.000) |     6.37 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           29 |      439 | 2024-06-13 | 3DMAX             | L   | 0.972      | -            | -                | -                | -         |    -5.49 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           28 |      576 | 2024-06-09 | Illuminar         | L   | 0.945      | -            | -                | -                | -         |   -16.39 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           27 |      629 | 2024-06-08 | EYEBALLERS        | L   | 0.939      | -            | -                | -                | -         |   -15.00 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           26 |      727 | 2024-06-06 | Space             | L   | 0.927      | -            | -                | -                | -         |   -15.67 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           25 |      851 | 2024-06-04 | SINNERS           | W   | 0.912      | 0.435        | 0.058 (0.023)    | 0.744 (0.295)    | 0 (0.000) |    17.59 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           24 |      898 | 2024-06-02 | GUN5              | L   | 0.898      | -            | -                | -                | -         |   -12.29 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           23 |      916 | 2024-06-01 | 3DMAX             | W   | 0.894      | 0.435        | 0.209 (0.081)    | 1.000 (0.388)    | 0 (0.000) |    22.78 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           22 |      929 | 2024-06-01 | 777               | W   | 0.892      | 0.143        | 0.024 (0.003)    | 0.224 (0.028)    | 0 (0.000) |     7.54 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           21 |      944 | 2024-05-31 | LEON              | L   | 0.888      | -            | -                | -                | -         |   -22.01 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           20 |      962 | 2024-05-31 | Alliance          | W   | 0.885      | 0.435        | 0.021 (0.008)    | 0.349 (0.134)    | 0 (0.000) |    12.20 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           19 |      971 | 2024-05-30 | Insilio           | L   | 0.881      | -            | -                | -                | -         |   -12.71 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           18 |     1019 | 2024-05-28 | CYBERSHOKE        | W   | 0.868      | 0.372        | 0.059 (0.019)    | 0.309 (0.100)    | 0 (0.000) |     9.26 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           17 |     1049 | 2024-05-27 | Permitta          | W   | 0.860      | 0.435        | 0.039 (0.014)    | 0.794 (0.297)    | 0 (0.000) |    13.30 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           16 |     1100 | 2024-05-24 | DMS               | W   | 0.840      | 0.435        | -                | 0.494 (0.180)    | 0 (0.000) |    13.22 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           15 |     1145 | 2024-05-22 | ALTERNATE aTTaX   | W   | 0.828      | 0.435        | 0.050 (0.018)    | 0.644 (0.232)    | 0 (0.000) |    13.81 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           14 |     1240 | 2024-05-20 | SINNERS           | L   | 0.813      | -            | -                | -                | -         |    -7.99 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           13 |     1298 | 2024-05-18 | CPH Wolves        | W   | 0.799      | -            | -                | -                | 0 (0.000) |     3.48 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           12 |     1461 | 2024-05-14 | LEON              | W   | 0.774      | -            | -                | -                | -         |     6.21 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |     1492 | 2024-05-13 | WOPA              | W   | 0.767      | -            | -                | -                | -         |     4.30 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |     1659 | 2024-05-05 | Nemiga            | L   | 0.714      | -            | -                | -                | -         |    -2.60 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     1793 | 2024-04-29 | Nexus             | W   | 0.673      | 0.396        | 0.011 (0.003)    | 0.432 (0.115)    | -         |     9.73 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     1812 | 2024-04-28 | brazylijski luz   | L   | 0.667      | -            | -                | -                | -         |   -11.07 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     1816 | 2024-04-28 | LEON              | W   | 0.666      | 0.396        | 0.010 (0.003)    | 0.160 (0.042)    | -         |     5.60 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     2707 | 2024-03-23 | FORZE             | L   | 0.426      | -            | -                | -                | -         |    -5.06 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     2724 | 2024-03-22 | ex-Guild Eagles   | W   | 0.419      | -            | -                | -                | -         |     6.35 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     2770 | 2024-03-20 | TSM               | W   | 0.406      | -            | -                | -                | -         |     3.60 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     2997 | 2024-03-10 | 1WIN              | L   | 0.340      | -            | -                | -                | -         |    -4.82 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     3066 | 2024-03-07 | Permitta          | L   | 0.321      | -            | -                | -                | -         |    -4.02 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     3136 | 2024-03-05 | FORZE YNG         | W   | 0.307      | -            | -                | -                | -         |     0.51 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,465.34)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $5,000.00      | $4,965.27       |
| 2024-06-02 |      0.900 | $5,000.00      | $4,500.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
