### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: dwushka, KusMe, shady, Something, xdENiSZERA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  923.9<br />
<br />
Final Rank Value (923.9) = Starting Rank Value (909.4) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 909.4
- 400 + ( ( 0.242 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 909.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      200 | 2024-06-15 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |   -13.23 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           30 |      266 | 2024-06-13 | HOTU            | W   | 1.000      | 0.450        | 0.010 (0.004)    | -                | 0 (0.000) |     6.30 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           29 |      275 | 2024-06-13 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -5.36 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           28 |      412 | 2024-06-09 | Illuminar       | L   | 0.985      | -            | -                | -                | -         |   -14.17 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           27 |      465 | 2024-06-08 | EYEBALLERS      | L   | 0.979      | -            | -                | -                | -         |   -15.47 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           26 |      563 | 2024-06-06 | Space           | L   | 0.967      | -            | -                | -                | -         |   -16.71 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           25 |      687 | 2024-06-04 | SINNERS         | W   | 0.952      | 0.435        | 0.057 (0.024)    | 0.767 (0.317)    | 0 (0.000) |    18.29 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           24 |      734 | 2024-06-02 | GUN5            | L   | 0.938      | -            | -                | -                | -         |   -12.89 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           23 |      752 | 2024-06-01 | 3DMAX           | W   | 0.933      | 0.435        | 0.205 (0.083)    | 1.000 (0.406)    | 0 (0.000) |    23.93 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           22 |      765 | 2024-06-01 | 777             | W   | 0.932      | 0.143        | 0.024 (0.003)    | 0.231 (0.031)    | 0 (0.000) |     7.76 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           21 |      780 | 2024-05-31 | LEON            | L   | 0.927      | -            | -                | -                | -         |   -23.12 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           20 |      798 | 2024-05-31 | Alliance        | W   | 0.925      | 0.435        | 0.020 (0.008)    | 0.377 (0.151)    | 0 (0.000) |    12.85 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           19 |      807 | 2024-05-30 | Insilio         | L   | 0.921      | -            | -                | -                | -         |   -13.18 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           18 |      855 | 2024-05-28 | CYBERSHOKE      | W   | 0.908      | 0.372        | 0.058 (0.020)    | 0.317 (0.107)    | 0 (0.000) |     9.35 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           17 |      885 | 2024-05-27 | Permitta        | W   | 0.900      | 0.435        | 0.038 (0.015)    | 0.837 (0.327)    | 0 (0.000) |    13.95 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           16 |      936 | 2024-05-24 | DMS             | W   | 0.880      | 0.435        | -                | 0.471 (0.180)    | 0 (0.000) |    13.78 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           15 |      981 | 2024-05-22 | ALTERNATE aTTaX | W   | 0.868      | 0.435        | 0.050 (0.019)    | 0.577 (0.218)    | 0 (0.000) |    14.32 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           14 |     1076 | 2024-05-20 | SINNERS         | L   | 0.852      | -            | -                | -                | -         |    -8.26 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           13 |     1134 | 2024-05-18 | CPH Wolves      | W   | 0.839      | -            | -                | -                | 0 (0.000) |     6.61 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           12 |     1297 | 2024-05-14 | LEON            | W   | 0.814      | -            | -                | -                | -         |     6.48 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |     1328 | 2024-05-13 | WOPA            | W   | 0.807      | -            | -                | -                | -         |     4.52 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |     1495 | 2024-05-05 | Nemiga          | L   | 0.754      | -            | -                | -                | -         |    -2.52 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     1629 | 2024-04-29 | Romania         | W   | 0.713      | 0.396        | 0.011 (0.003)    | 0.375 (0.106)    | -         |    10.34 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     1648 | 2024-04-28 | brazylijski luz | L   | 0.706      | -            | -                | -                | -         |   -12.01 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     1652 | 2024-04-28 | LEON            | W   | 0.706      | 0.396        | 0.010 (0.003)    | 0.167 (0.047)    | -         |     5.90 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     2543 | 2024-03-23 | FORZE           | L   | 0.466      | -            | -                | -                | -         |    -5.30 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     2560 | 2024-03-22 | ex-Guild Eagles | W   | 0.459      | -            | -                | -                | -         |     7.20 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     2606 | 2024-03-20 | TSM             | W   | 0.446      | -            | -                | -                | -         |     4.12 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     2833 | 2024-03-10 | 1WIN            | L   | 0.380      | -            | -                | -                | -         |    -5.11 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     2902 | 2024-03-07 | Permitta        | L   | 0.360      | -            | -                | -                | -         |    -4.47 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     2972 | 2024-03-05 | FORZE YNG       | W   | 0.347      | -            | -                | -                | -         |     0.59 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,698.12)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-02 |      0.940 | $5,000.00      | $4,698.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
