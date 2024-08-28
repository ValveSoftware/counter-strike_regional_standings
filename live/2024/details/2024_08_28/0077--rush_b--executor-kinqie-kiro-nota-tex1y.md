### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Global Rank: [77](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [56]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  945.1<br />
<br />
Final Rank Value (945.1) = Starting Rank Value (866.8) + Head To Head Adjustments (78.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.389[<sup>2</sup>](#table1)
- Opponent Network: 0.168[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.8
- 400 + ( ( 0.236 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 866.8


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
|           33 |      365 | 2024-08-20 | B8              | L   | 1.000      | -            | -                | -                | -         |    -7.83 | executor, kinqie, Kiro, nota, tex1y |
|           32 |      551 | 2024-08-13 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |    -8.80 | executor, kinqie, Kiro, nota, tex1y |
|           31 |      605 | 2024-08-12 | ARCRED          | W   | 1.000      | 0.500        | 0.038 (0.019)    | 0.401 (0.200)    | 0 (0.000) |    16.76 | executor, kinqie, Kiro, nota, tex1y |
|           30 |      865 | 2024-08-04 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |   -15.46 | executor, kinqie, Kiro, nota, tex1y |
|           29 |      902 | 2024-08-03 | Alliance        | W   | 1.000      | 0.342        | -                | 0.349 (0.119)    | 0 (0.000) |    10.60 | executor, kinqie, Kiro, nota, tex1y |
|           28 |      941 | 2024-08-02 | Astralis Talent | W   | 1.000      | 0.342        | -                | 0.121 (0.041)    | 0 (0.000) |     5.92 | executor, kinqie, Kiro, nota, tex1y |
|           27 |     1052 | 2024-07-30 | Rebels          | W   | 1.000      | 0.500        | 0.034 (0.017)    | 0.640 (0.320)    | 0 (0.000) |    18.57 | executor, kinqie, Kiro, nota, tex1y |
|           26 |     1282 | 2024-07-23 | SINNERS         | W   | 0.961      | 0.500        | 0.094 (0.045)    | 1.000 (0.480)    | 0 (0.000) |    19.59 | executor, kinqie, Kiro, nota, tex1y |
|           25 |     1409 | 2024-07-19 | SAW             | L   | 0.933      | -            | -                | -                | -         |    -1.35 | executor, kinqie, Kiro, nota, tex1y |
|           24 |     1520 | 2024-07-17 | brazylijski luz | L   | 0.921      | -            | -                | -                | -         |   -19.07 | executor, kinqie, Kiro, nota, tex1y |
|           23 |     1627 | 2024-07-15 | Sangal          | L   | 0.907      | -            | -                | -                | -         |    -4.63 | executor, kinqie, Kiro, nota, tex1y |
|           22 |     2039 | 2024-06-10 | PARIVISION      | L   | 0.672      | -            | -                | -                | -         |    -6.19 | executor, kinqie, Kiro, nota, tex1y |
|           21 |     2046 | 2024-06-10 | SAW             | L   | 0.672      | -            | -                | -                | -         |    -1.09 | executor, kinqie, Kiro, nota, tex1y |
|           20 |     2051 | 2024-06-10 | Monte           | W   | 0.671      | 0.143        | 0.093 (0.009)    | -                | 0 (0.000) |    13.64 | executor, kinqie, Kiro, nota, tex1y |
|           19 |     2082 | 2024-06-09 | 9 Pandas        | W   | 0.666      | 0.143        | 0.070 (0.007)    | 0.715 (0.068)    | 0 (0.000) |    15.02 | executor, kinqie, Kiro, nota, tex1y |
|           18 |     2093 | 2024-06-09 | Aurora          | W   | 0.666      | 0.143        | 0.361 (0.034)    | 0.584 (0.056)    | 0 (0.000) |    19.74 | executor, kinqie, Kiro, nota, tex1y |
|           17 |     2098 | 2024-06-09 | SINNERS         | W   | 0.665      | 0.143        | 0.094 (0.009)    | 1.000 (0.095)    | 0 (0.000) |    15.47 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     2108 | 2024-06-09 | 3DMAX           | L   | 0.665      | -            | -                | -                | -         |    -0.81 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     2250 | 2024-06-06 | Aurora          | L   | 0.647      | -            | -                | -                | -         |    -0.83 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     2319 | 2024-06-05 | SINNERS         | L   | 0.641      | -            | -                | -                | -         |    -5.39 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     2369 | 2024-06-04 | SAW             | W   | 0.634      | 0.500        | 0.360 (0.114)    | 0.657 (0.208)    | 0 (0.000) |    19.45 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     3167 | 2024-05-07 | MOUZ NXT        | L   | 0.446      | -            | -                | -                | -         |    -4.47 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     3193 | 2024-05-05 | Sampi           | L   | 0.434      | -            | -                | -                | -         |    -6.16 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     3218 | 2024-05-04 | HAVU            | W   | 0.426      | -            | -                | -                | -         |     2.27 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     3262 | 2024-05-02 | EYEBALLERS      | L   | 0.413      | -            | -                | -                | -         |    -6.31 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     3319 | 2024-04-29 | ENCE Academy    | W   | 0.394      | -            | -                | -                | -         |     3.16 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     3821 | 2024-04-10 | KOI             | L   | 0.267      | -            | -                | -                | -         |    -2.92 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     3874 | 2024-04-09 | PARIVISION      | W   | 0.261      | 0.500        | 0.050 (0.007)    | 0.703 (0.092)    | -         |     6.47 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     4110 | 2024-04-01 | Qiang           | L   | 0.207      | -            | -                | -                | -         |    -2.99 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     4119 | 2024-03-31 | Monte           | W   | 0.200      | 0.500        | 0.093 (0.009)    | -                | -         |     4.21 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     4131 | 2024-03-29 | System5         | W   | 0.188      | -            | -                | -                | -         |     1.36 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     4450 | 2024-03-13 | Betera          | W   | 0.081      | -            | -                | -                | -         |     0.65 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     4714 | 2024-03-03 | Metizport       | L   | 0.014      | -            | -                | -                | -         |    -0.26 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,338.40)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      0.667 | $6,500.00      | $4,338.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
