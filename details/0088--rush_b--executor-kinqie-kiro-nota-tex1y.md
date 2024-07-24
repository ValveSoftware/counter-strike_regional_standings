### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  910.3<br />
<br />
Final Rank Value (910.3) = Starting Rank Value (834.8) + Head To Head Adjustments (75.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.118[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 834.8
- 400 + ( ( 0.215 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 834.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       37 | 2024-07-23 | SINNERS         | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.769 (0.385)    | 0 (0.000) |    17.95 | executor, kinqie, Kiro, nota, tex1y |
|           27 |      164 | 2024-07-19 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -5.07 | executor, kinqie, Kiro, nota, tex1y |
|           26 |      275 | 2024-07-17 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -17.65 | executor, kinqie, Kiro, nota, tex1y |
|           25 |      382 | 2024-07-15 | Sangal          | L   | 1.000      | -            | -                | -                | -         |    -5.54 | executor, kinqie, Kiro, nota, tex1y |
|           24 |      794 | 2024-06-10 | PARIVISION      | L   | 0.905      | -            | -                | -                | -         |   -10.04 | executor, kinqie, Kiro, nota, tex1y |
|           23 |      801 | 2024-06-10 | SAW             | L   | 0.905      | -            | -                | -                | -         |    -5.82 | executor, kinqie, Kiro, nota, tex1y |
|           22 |      806 | 2024-06-10 | Monte           | W   | 0.904      | 0.143        | 0.083 (0.011)    | 0.428 (0.055)    | 0 (0.000) |    16.91 | executor, kinqie, Kiro, nota, tex1y |
|           21 |      837 | 2024-06-09 | 9 Pandas        | W   | 0.899      | 0.143        | 0.105 (0.014)    | 0.578 (0.074)    | 0 (0.000) |    20.78 | executor, kinqie, Kiro, nota, tex1y |
|           20 |      848 | 2024-06-09 | Aurora          | W   | 0.899      | 0.143        | 0.423 (0.054)    | 0.783 (0.100)    | 0 (0.000) |    26.52 | executor, kinqie, Kiro, nota, tex1y |
|           19 |      853 | 2024-06-09 | SINNERS         | W   | 0.898      | 0.143        | 0.048 (0.006)    | 0.769 (0.099)    | 0 (0.000) |    19.46 | executor, kinqie, Kiro, nota, tex1y |
|           18 |      863 | 2024-06-09 | 3DMAX           | L   | 0.898      | -            | -                | -                | -         |    -4.18 | executor, kinqie, Kiro, nota, tex1y |
|           17 |     1005 | 2024-06-06 | Aurora          | L   | 0.880      | -            | -                | -                | -         |    -1.00 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1074 | 2024-06-05 | SINNERS         | L   | 0.873      | -            | -                | -                | -         |    -9.20 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     1124 | 2024-06-04 | SAW             | W   | 0.867      | 0.500        | 0.121 (0.052)    | 0.500 (0.217)    | 0 (0.000) |    23.96 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1922 | 2024-05-07 | MOUZ NXT        | L   | 0.679      | -            | -                | -                | -         |    -5.46 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     1948 | 2024-05-05 | Sampi           | L   | 0.667      | -            | -                | -                | -         |    -7.99 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     1973 | 2024-05-04 | HAVU            | W   | 0.659      | 0.435        | -                | 0.186 (0.053)    | 0 (0.000) |     6.80 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     2017 | 2024-05-02 | EYEBALLERS      | L   | 0.646      | -            | -                | -                | -         |    -8.94 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     2074 | 2024-04-29 | ENCE Academy    | W   | 0.627      | 0.435        | 0.007 (0.002)    | 0.183 (0.050)    | 0 (0.000) |     7.09 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2576 | 2024-04-10 | KOI             | L   | 0.500      | -            | -                | -                | -         |    -3.08 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     2629 | 2024-04-09 | PARIVISION      | W   | 0.494      | 0.500        | 0.022 (0.006)    | 0.429 (0.106)    | 0 (0.000) |    11.60 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     2865 | 2024-04-01 | PERA            | L   | 0.440      | -            | -                | -                | -         |    -5.41 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     2874 | 2024-03-31 | Monte           | W   | 0.433      | 0.500        | 0.083 (0.018)    | 0.210 (0.045)    | 0 (0.000) |    10.37 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     2886 | 2024-03-29 | System5         | W   | 0.421      | -            | -                | -                | -         |     4.02 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     3205 | 2024-03-13 | Betera          | W   | 0.314      | 0.500        | 0.007 (0.001)    | -                | -         |     3.27 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3469 | 2024-03-03 | Metizport       | L   | 0.246      | -            | -                | -                | -         |    -2.87 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     3578 | 2024-02-26 | SAW             | L   | 0.208      | -            | -                | -                | -         |    -0.78 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     4153 | 2024-01-30 | Sashi           | L   | 0.026      | -            | -                | -                | -         |    -0.11 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,852.47)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
