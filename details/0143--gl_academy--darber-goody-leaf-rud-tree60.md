### Roster Details<br />
Team Name: GL Academy<br />
Roster: darber, Goody, leaf, rud, Tree60<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  741.4<br />
<br />
Final Rank Value (741.4) = Starting Rank Value (747.8) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.315[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.8
- 400 + ( ( 0.172 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 747.8


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
|           12 |      224 | 2024-07-18 | Astralis Talent | L   | 1.000      | -            | -                | -                | -         |   -16.68 | darber, Goody, leaf, rud, Tree60 |
|           11 |      283 | 2024-07-17 | K10             | L   | 1.000      | -            | -                | -                | -         |   -18.02 | darber, Goody, leaf, rud, Tree60 |
|           10 |     1150 | 2024-06-03 | PERA            | L   | 0.861      | -            | -                | -                | -         |    -7.16 | darber, Goody, leaf, rud, Tree60 |
|            9 |     1308 | 2024-05-28 | UNiTY           | W   | 0.821      | 0.379        | 0.032 (0.010)    | 0.342 (0.106)    | 0 (0.000) |    19.11 | darber, Goody, leaf, rud, Tree60 |
|            8 |     1401 | 2024-05-23 | brazylijski luz | L   | 0.787      | -            | -                | -                | -         |    -9.48 | darber, Goody, leaf, rud, Tree60 |
|            7 |     1964 | 2024-05-05 | MOUZ NXT        | L   | 0.665      | -            | -                | -                | -         |    -4.01 | darber, Goody, leaf, rud, shadiy |
|            6 |     1977 | 2024-05-04 | B8              | L   | 0.659      | -            | -                | -                | -         |    -3.80 | darber, Goody, leaf, rud, shadiy |
|            5 |     2047 | 2024-05-01 | RUBY            | W   | 0.638      | 0.435        | 0.122 (0.034)    | 0.575 (0.160)    | 0 (0.000) |    14.72 | darber, Goody, leaf, rud, shadiy |
|            4 |     2051 | 2024-04-30 | Sampi           | L   | 0.634      | -            | -                | -                | -         |    -5.60 | darber, Goody, leaf, rud, sSen   |
|            3 |     2136 | 2024-04-27 | K10             | W   | 0.611      | 0.143        | 0.010 (0.001)    | 0.147 (0.013)    | 0 (0.000) |     7.69 | darber, Goody, leaf, rud, sSen   |
|            2 |     2881 | 2024-03-30 | NAVI Junior     | W   | 0.425      | 0.333        | 0.005 (0.001)    | 0.042 (0.006)    | 0 (0.000) |     5.83 | darber, Goody, leaf, nestee, rud |
|            1 |     2909 | 2024-03-28 | Passion UA      | W   | 0.412      | 0.333        | 0.163 (0.022)    | 1.000 (0.137)    | 0 (0.000) |    10.99 | darber, Goody, leaf, nestee, rud |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,551.48)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
