### Roster Details<br />
Team Name: GL Academy<br />
Roster: darber, Goody, leaf, rud, Tree60<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  811.6<br />
<br />
Final Rank Value (811.6) = Starting Rank Value (768.9) + Head To Head Adjustments (42.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.9
- 400 + ( ( 0.182 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 768.9


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
|           10 |      562 | 2024-06-03 | PERA            | L   | 1.000      | -            | -                | -                | -         |    -8.53 | darber, Goody, leaf, rud, Tree60 |
|            9 |      722 | 2024-05-28 | UNiTY           | W   | 1.000      | 0.379        | 0.038 (0.014)    | 0.288 (0.109)    | 0 (0.000) |    22.34 | darber, Goody, leaf, rud, Tree60 |
|            8 |      815 | 2024-05-23 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -12.58 | darber, Goody, leaf, rud, Tree60 |
|            7 |     1378 | 2024-05-05 | MOUZ NXT        | L   | 0.907      | -            | -                | -                | -         |    -5.35 | darber, Goody, leaf, rud, shadiy |
|            6 |     1391 | 2024-05-04 | B8              | L   | 0.901      | -            | -                | -                | -         |    -4.99 | darber, Goody, leaf, rud, shadiy |
|            5 |     1461 | 2024-05-01 | RUBY            | W   | 0.880      | 0.435        | 0.121 (0.046)    | 0.574 (0.219)    | 0 (0.000) |    19.61 | darber, Goody, leaf, rud, shadiy |
|            4 |     1465 | 2024-04-30 | Sampi           | L   | 0.877      | -            | -                | -                | -         |    -7.00 | darber, Goody, leaf, rud, sSen   |
|            3 |     1550 | 2024-04-27 | EXO             | W   | 0.854      | 0.143        | 0.020 (0.002)    | 0.137 (0.017)    | 0 (0.000) |    14.26 | darber, Goody, leaf, rud, sSen   |
|            2 |     2296 | 2024-03-30 | NAVI Junior     | W   | 0.668      | 0.333        | 0.007 (0.001)    | 0.071 (0.016)    | 0 (0.000) |     8.84 | darber, Goody, leaf, nestee, rud |
|            1 |     2324 | 2024-03-28 | Passion UA      | W   | 0.654      | 0.333        | 0.086 (0.019)    | 0.803 (0.175)    | 0 (0.000) |    16.11 | darber, Goody, leaf, nestee, rud |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,006.53)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
