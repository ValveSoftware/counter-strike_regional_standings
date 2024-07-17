### Roster Details<br />
Team Name: GL Academy<br />
Roster: darber, Goody, leaf, rud, Tree60<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [128](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  811.2<br />
<br />
Final Rank Value (811.2) = Starting Rank Value (777.3) + Head To Head Adjustments (34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.3
- 400 + ( ( 0.176 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 777.3


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
|           10 |      862 | 2024-06-03 | PERA            | L   | 0.908      | -            | -                | -                | -         |    -7.20 | darber, Goody, leaf, rud, Tree60 |
|            9 |     1020 | 2024-05-28 | UNiTY           | W   | 0.868      | 0.379        | 0.039 (0.013)    | 0.364 (0.119)    | 0 (0.000) |    20.76 | darber, Goody, leaf, rud, Tree60 |
|            8 |     1113 | 2024-05-23 | brazylijski luz | L   | 0.834      | -            | -                | -                | -         |   -10.15 | darber, Goody, leaf, rud, Tree60 |
|            7 |     1676 | 2024-05-05 | MOUZ NXT        | L   | 0.712      | -            | -                | -                | -         |    -4.16 | darber, Goody, leaf, rud, shadiy |
|            6 |     1689 | 2024-05-04 | B8              | L   | 0.706      | -            | -                | -                | -         |    -3.84 | darber, Goody, leaf, rud, shadiy |
|            5 |     1759 | 2024-05-01 | RUBY            | W   | 0.685      | 0.435        | 0.144 (0.043)    | 0.580 (0.173)    | 0 (0.000) |    16.06 | darber, Goody, leaf, rud, shadiy |
|            4 |     1763 | 2024-04-30 | Sampi           | L   | 0.681      | -            | -                | -                | -         |    -5.69 | darber, Goody, leaf, rud, sSen   |
|            3 |     1848 | 2024-04-27 | EXO             | W   | 0.658      | 0.143        | 0.019 (0.002)    | 0.132 (0.012)    | 0 (0.000) |    10.63 | darber, Goody, leaf, rud, sSen   |
|            2 |     2593 | 2024-03-30 | NAVI Junior     | W   | 0.472      | 0.333        | 0.006 (0.001)    | 0.051 (0.008)    | 0 (0.000) |     6.22 | darber, Goody, leaf, nestee, rud |
|            1 |     2621 | 2024-03-28 | Passion UA      | W   | 0.459      | 0.333        | 0.087 (0.013)    | 0.847 (0.130)    | 0 (0.000) |    11.33 | darber, Goody, leaf, nestee, rud |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,834.83)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
