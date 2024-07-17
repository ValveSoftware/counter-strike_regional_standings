### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  946.9<br />
<br />
Final Rank Value (946.9) = Starting Rank Value (856.2) + Head To Head Adjustments (90.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 856.2
- 400 + ( ( 0.212 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 856.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       94 | 2024-07-15 | Sangal       | L   | 1.000      | -            | -                | -                | -         |    -5.18 | executor, kinqie, Kiro, nota, tex1y |
|           24 |      506 | 2024-06-10 | PARIVISION   | L   | 0.953      | -            | -                | -                | -         |   -11.90 | executor, kinqie, Kiro, nota, tex1y |
|           23 |      513 | 2024-06-10 | SAW          | L   | 0.952      | -            | -                | -                | -         |    -5.48 | executor, kinqie, Kiro, nota, tex1y |
|           22 |      518 | 2024-06-10 | Monte        | W   | 0.952      | 0.143        | 0.099 (0.013)    | 0.413 (0.056)    | 0 (0.000) |    18.05 | executor, kinqie, Kiro, nota, tex1y |
|           21 |      549 | 2024-06-09 | 9 Pandas     | W   | 0.946      | 0.143        | 0.126 (0.017)    | 0.591 (0.080)    | 0 (0.000) |    22.42 | executor, kinqie, Kiro, nota, tex1y |
|           20 |      560 | 2024-06-09 | Aurora       | W   | 0.946      | 0.143        | 0.514 (0.069)    | 0.813 (0.110)    | 0 (0.000) |    28.11 | executor, kinqie, Kiro, nota, tex1y |
|           19 |      565 | 2024-06-09 | SINNERS      | W   | 0.945      | 0.143        | 0.058 (0.008)    | 0.744 (0.100)    | 0 (0.000) |    21.03 | executor, kinqie, Kiro, nota, tex1y |
|           18 |      575 | 2024-06-09 | 3DMAX        | L   | 0.945      | -            | -                | -                | -         |    -4.55 | executor, kinqie, Kiro, nota, tex1y |
|           17 |      717 | 2024-06-06 | Aurora       | L   | 0.928      | -            | -                | -                | -         |    -0.90 | executor, kinqie, Kiro, nota, tex1y |
|           16 |      786 | 2024-06-05 | SINNERS      | L   | 0.921      | -            | -                | -                | -         |    -9.13 | executor, kinqie, Kiro, nota, tex1y |
|           15 |      836 | 2024-06-04 | SAW          | W   | 0.914      | 0.500        | 0.147 (0.067)    | 0.544 (0.249)    | 0 (0.000) |    25.86 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1634 | 2024-05-07 | MOUZ NXT     | L   | 0.726      | -            | -                | -                | -         |    -5.46 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     1660 | 2024-05-05 | Sampi        | L   | 0.714      | -            | -                | -                | -         |    -7.97 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     1685 | 2024-05-04 | HAVU         | W   | 0.707      | 0.435        | 0.002 (0.000)    | 0.202 (0.062)    | 0 (0.000) |     7.55 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     1729 | 2024-05-02 | EYEBALLERS   | L   | 0.693      | -            | -                | -                | -         |    -9.18 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     1786 | 2024-04-29 | ENCE Academy | W   | 0.674      | 0.435        | 0.008 (0.002)    | 0.203 (0.059)    | 0 (0.000) |     7.96 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2288 | 2024-04-10 | KOI          | L   | 0.548      | -            | -                | -                | -         |    -2.66 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     2341 | 2024-04-09 | PARIVISION   | W   | 0.541      | 0.500        | 0.027 (0.007)    | 0.424 (0.115)    | 0 (0.000) |    11.30 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     2577 | 2024-04-01 | PERA         | L   | 0.487      | -            | -                | -                | -         |    -5.54 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     2586 | 2024-03-31 | Monte        | W   | 0.480      | 0.500        | 0.103 (0.025)    | 0.241 (0.058)    | 0 (0.000) |    12.15 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     2598 | 2024-03-29 | System5      | W   | 0.468      | 0.500        | -                | 0.108 (0.025)    | 0 (0.000) |     4.56 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     2917 | 2024-03-13 | Betera       | W   | 0.361      | 0.500        | 0.008 (0.001)    | -                | -         |     3.88 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3181 | 2024-03-03 | Metizport    | L   | 0.294      | -            | -                | -                | -         |    -3.17 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     3290 | 2024-02-26 | SAW          | L   | 0.255      | -            | -                | -                | -         |    -0.74 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     3865 | 2024-01-30 | Sashi        | L   | 0.074      | -            | -                | -                | -         |    -0.36 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,159.44)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
