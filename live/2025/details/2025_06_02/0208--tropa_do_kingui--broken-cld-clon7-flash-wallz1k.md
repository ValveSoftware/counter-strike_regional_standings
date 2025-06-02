### Roster Details<br />
Team Name: Tropa do KinGui<br />
Roster: brokeN, cLd, clon7, flash, wallz1k<br />
Global Rank: [208](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [66]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  599.7<br />
<br />
Final Rank Value (599.7) = Starting Rank Value (620.7) + Head To Head Adjustments (-21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.7
- 400 + ( ( 0.120 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 620.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      182 | 2025-05-18 | América      | L   | 1.000      | -            | -                | -                | -         |   -13.48 | brokeN, cLd, clon7, flash, wallz1k |
|           13 |      196 | 2025-05-17 | Sojoga       | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.041 (0.014)    | 0 (0.000) |    15.35 | brokeN, cLd, clon7, flash, wallz1k |
|           12 |      263 | 2025-05-14 | MIBR Academy | L   | 1.000      | -            | -                | -                | -         |   -15.14 | brokeN, cLd, clon7, flash, wallz1k |
|           11 |      288 | 2025-05-13 | ex-W7M       | L   | 1.000      | -            | -                | -                | -         |   -12.46 | brokeN, cLd, clon7, flash, wallz1k |
|           10 |      293 | 2025-05-13 | RED Canids   | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.559 (0.186)    | 0 (0.000) |    21.90 | brokeN, cLd, clon7, flash, wallz1k |
|            9 |     1497 | 2025-03-28 | Swingers     | L   | 0.765      | -            | -                | -                | -         |    -6.28 | brokeN, cLd, clon7, flash, wallz1k |
|            8 |     2101 | 2025-03-09 | Swingers     | L   | 0.638      | -            | -                | -                | -         |    -5.32 | brokeN, cLd, clon7, flash, wallz1k |
|            7 |     2158 | 2025-03-08 | MIBR Academy | W   | 0.632      | 0.143        | 0.001 (0.000)    | 0.143 (0.013)    | 0 (0.000) |    10.22 | brokeN, cLd, clon7, flash, wallz1k |
|            6 |     2224 | 2025-03-07 | BESTIA       | L   | 0.626      | -            | -                | -                | -         |    -5.19 | brokeN, cLd, clon7, flash, wallz1k |
|            5 |     3092 | 2025-02-07 | Prasso       | L   | 0.440      | -            | -                | -                | -         |    -8.88 | brokeN, cLd, clon7, flash, wallz1k |
|            4 |     3602 | 2024-12-20 | Players      | L   | 0.111      | -            | -                | -                | -         |    -1.48 | brokeN, cLd, clon7, flash, k1not1  |
|            3 |     3633 | 2024-12-17 | LOBOARMY     | W   | 0.092      | 0.143        | 0.012 (0.000)    | 0.217 (0.003)    | 0 (0.000) |     1.72 | brokeN, cLd, clon7, flash, k1not1  |
|            2 |     3659 | 2024-12-15 | GameHunters  | L   | 0.079      | -            | -                | -                | -         |    -0.72 | brokeN, cLd, clon7, flash, k1not1  |
|            1 |     3711 | 2024-12-13 | 2070         | L   | 0.065      | -            | -                | -                | -         |    -1.22 | brokeN, cLd, clon7, flash, k1not1  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($357.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-29 |      1.000 | $357.00        | $357.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
