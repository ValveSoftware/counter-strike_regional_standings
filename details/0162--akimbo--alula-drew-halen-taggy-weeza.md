### Roster Details<br />
Team Name: Akimbo<br />
Roster: alula, Drew, Halen, taggy, Weeza<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  683.5<br />
<br />
Final Rank Value (683.5) = Starting Rank Value (704.3) + Head To Head Adjustments (-20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.3
- 400 + ( ( 0.150 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 704.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       73 | 2024-06-14 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -2.69 | alula, Drew, Halen, taggy, Weeza     |
|           13 |      228 | 2024-06-09 | Lore             | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.81 | alula, Drew, Halen, taggy, Weeza     |
|           12 |      292 | 2024-06-08 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -13.79 | alula, Drew, Halen, taggy, Weeza     |
|           11 |      475 | 2024-06-05 | Final Form       | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.071 (0.027)    | 0 (0.000) |    13.98 | alula, Drew, Halen, taggy, Weeza     |
|           10 |      564 | 2024-06-03 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -12.39 | abp, alula, Halen, rayxts, Weeza     |
|            9 |     2479 | 2024-03-19 | Strife           | L   | 0.598      | -            | -                | -                | -         |    -8.82 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            8 |     2506 | 2024-03-17 | LAG              | L   | 0.584      | -            | -                | -                | -         |    -4.69 | alula, Drew, Ethex, taggy, Weeza     |
|            7 |     2510 | 2024-03-17 | Villainous       | W   | 0.583      | 0.333        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.583) |     5.44 | Beast, Cyrix, dopplahs, TyRa, Zamgaa |
|            6 |     4046 | 2024-01-14 | Carpe Diem       | L   | 0.164      | -            | -                | -                | -         |    -1.93 | alula, Drew, Ethex, legacy, Weeza    |
|            5 |     4063 | 2024-01-13 | BOSS             | L   | 0.158      | -            | -                | -                | -         |    -1.54 | alula, Drew, Ethex, legacy, Weeza    |
|            4 |     4099 | 2024-01-12 | FLUFFY AIMERS    | W   | 0.153      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.74 | alula, Drew, Ethex, legacy, Weeza    |
|            3 |     4107 | 2024-01-12 | Party Astronauts | L   | 0.152      | -            | -                | -                | -         |    -0.83 | alula, Drew, Ethex, legacy, Weeza    |
|            2 |     4192 | 2024-01-09 | NRG              | L   | 0.132      | -            | -                | -                | -         |    -1.14 | alula, Drew, Ethex, legacy, Weeza    |
|            1 |     4194 | 2024-01-09 | Revenge Nation   | W   | 0.132      | 0.143        | 0.015 (0.000)    | 0.042 (0.001)    | 0 (0.000) |     2.04 | alula, Drew, Ethex, legacy, Weeza    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,834.88)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-23 |      0.625 | $2,000.00      | $1,249.27       |
| 2024-03-17 |      0.586 | $1,000.00      | $585.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
