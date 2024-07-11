### Roster Details<br />
Team Name: GL Academy<br />
Roster: darber, Goody, leaf, rud, Tree60<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  808.6<br />
<br />
Final Rank Value (808.6) = Starting Rank Value (772.6) + Head To Head Adjustments (36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.6
- 400 + ( ( 0.177 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 772.6


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
|           10 |      698 | 2024-06-03 | PERA            | L   | 0.947      | -            | -                | -                | -         |    -7.51 | darber, Goody, leaf, rud, Tree60 |
|            9 |      856 | 2024-05-28 | UNiTY           | W   | 0.907      | 0.379        | 0.039 (0.013)    | 0.331 (0.114)    | 0 (0.000) |    21.45 | darber, Goody, leaf, rud, Tree60 |
|            8 |      949 | 2024-05-23 | brazylijski luz | L   | 0.874      | -            | -                | -                | -         |   -11.02 | darber, Goody, leaf, rud, Tree60 |
|            7 |     1512 | 2024-05-05 | MOUZ NXT        | L   | 0.752      | -            | -                | -                | -         |    -4.23 | darber, Goody, leaf, rud, shadiy |
|            6 |     1525 | 2024-05-04 | B8              | L   | 0.745      | -            | -                | -                | -         |    -3.86 | darber, Goody, leaf, rud, shadiy |
|            5 |     1595 | 2024-05-01 | RUBY            | W   | 0.725      | 0.435        | 0.139 (0.044)    | 0.563 (0.177)    | 0 (0.000) |    16.68 | darber, Goody, leaf, rud, shadiy |
|            4 |     1599 | 2024-04-30 | Slovakia        | L   | 0.721      | -            | -                | -                | -         |    -6.01 | darber, Goody, leaf, rud, sSen   |
|            3 |     1684 | 2024-04-27 | EXO             | W   | 0.698      | 0.143        | 0.019 (0.002)    | 0.139 (0.014)    | 0 (0.000) |    11.45 | darber, Goody, leaf, rud, sSen   |
|            2 |     2429 | 2024-03-30 | NAVI Junior     | W   | 0.512      | 0.333        | 0.006 (0.001)    | 0.057 (0.010)    | 0 (0.000) |     6.78 | darber, Goody, leaf, nestee, rud |
|            1 |     2457 | 2024-03-28 | Passion UA      | W   | 0.499      | 0.333        | 0.087 (0.015)    | 0.821 (0.136)    | 0 (0.000) |    12.25 | darber, Goody, leaf, nestee, rud |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,072.49)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
