### Roster Details<br />
Team Name: GL Academy<br />
Roster: darber, Goody, leaf, rud, Tree60<br />
Global Rank: [143](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
<br />
Final Rank Value:  731.0<br />
<br />
Final Rank Value (731.0) = Starting Rank Value (739.7) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 739.7
- 400 + ( ( 0.165 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 739.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      466 | 2024-07-18 | Astralis Talent | L   | 1.000      | -            | -                | -                | -         |   -16.45 | darber, Goody, leaf, rud, Tree60 |
|           11 |      525 | 2024-07-17 | K10             | L   | 1.000      | -            | -                | -                | -         |   -17.71 | darber, Goody, leaf, rud, Tree60 |
|           10 |     1392 | 2024-06-03 | PERA            | L   | 0.813      | -            | -                | -                | -         |    -6.82 | darber, Goody, leaf, rud, Tree60 |
|            9 |     1550 | 2024-05-28 | UNiTY           | W   | 0.773      | 0.379        | 0.025 (0.007)    | 0.306 (0.090)    | 0 (0.000) |    17.75 | darber, Goody, leaf, rud, Tree60 |
|            8 |     1643 | 2024-05-23 | brazylijski luz | L   | 0.740      | -            | -                | -                | -         |    -9.11 | darber, Goody, leaf, rud, Tree60 |
|            7 |     2206 | 2024-05-05 | MOUZ NXT        | L   | 0.618      | -            | -                | -                | -         |    -3.67 | darber, Goody, leaf, rud, shadiy |
|            6 |     2219 | 2024-05-04 | B8              | L   | 0.611      | -            | -                | -                | -         |    -3.31 | darber, Goody, leaf, rud, shadiy |
|            5 |     2289 | 2024-05-01 | RUBY            | W   | 0.591      | 0.435        | 0.097 (0.025)    | 0.506 (0.130)    | 0 (0.000) |    13.55 | darber, Goody, leaf, rud, shadiy |
|            4 |     2293 | 2024-04-30 | Sampi           | L   | 0.587      | -            | -                | -                | -         |    -5.32 | darber, Goody, leaf, rud, sSen   |
|            3 |     2378 | 2024-04-27 | K10             | W   | 0.564      | 0.143        | 0.008 (0.001)    | 0.133 (0.011)    | 0 (0.000) |     7.25 | darber, Goody, leaf, rud, sSen   |
|            2 |     3123 | 2024-03-30 | NAVI Junior     | W   | 0.378      | 0.333        | 0.003 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     5.28 | darber, Goody, leaf, nestee, rud |
|            1 |     3151 | 2024-03-28 | Passion UA      | W   | 0.365      | 0.333        | 0.172 (0.021)    | 1.000 (0.122)    | 0 (0.000) |     9.85 | darber, Goody, leaf, nestee, rud |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,267.75)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
