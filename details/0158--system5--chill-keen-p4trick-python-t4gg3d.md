### Roster Details<br />
Team Name: System5<br />
Roster: Chill, keen, P4TriCK, Python, T4gg3D<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  697.2<br />
<br />
Final Rank Value (697.2) = Starting Rank Value (684.0) + Head To Head Adjustments (13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.0
- 400 + ( ( 0.140 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 684.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      603 | 2024-06-16 | EYEBALLERS | L   | 0.947      | -            | -                | -                | -         |    -7.99 | Chill, keen, P4TriCK, Python, T4gg3D |
|           11 |      633 | 2024-06-15 | RUBY       | W   | 0.940      | 0.143        | 0.122 (0.016)    | 0.575 (0.077)    | 0 (0.000) |    22.87 | Chill, keen, P4TriCK, Python, T4gg3D |
|           10 |      673 | 2024-06-14 | Nemiga     | L   | 0.933      | -            | -                | -                | -         |    -1.80 | Chill, keen, P4TriCK, Python, T4gg3D |
|            9 |     1436 | 2024-05-22 | PERA       | L   | 0.781      | -            | -                | -                | -         |    -4.20 | Chill, keen, P4TriCK, Python, T4gg3D |
|            8 |     1482 | 2024-05-21 | Space      | L   | 0.774      | -            | -                | -                | -         |    -6.43 | Chill, keen, P4TriCK, Python, T4gg3D |
|            7 |     1750 | 2024-05-14 | Norway     | W   | 0.727      | 0.500        | 0.008 (0.003)    | 0.116 (0.042)    | 0 (0.000) |    12.47 | Chill, keen, P4TriCK, Python, T4gg3D |
|            6 |     2281 | 2024-04-20 | 9INE       | W   | 0.566      | 0.500        | 0.000 (0.000)    | 0.075 (0.021)    | 0 (0.000) |     5.22 | Chill, keen, P4TriCK, Python, T4gg3D |
|            5 |     2803 | 2024-04-03 | Betera     | L   | 0.454      | -            | -                | -                | -         |    -6.31 | Chill, keen, P4TriCK, Python, shadiy |
|            4 |     2886 | 2024-03-29 | RUSH B     | L   | 0.421      | -            | -                | -                | -         |    -4.02 | Chill, keen, P4TriCK, Python, shadiy |
|            3 |     2972 | 2024-03-26 | Monte      | L   | 0.401      | -            | -                | -                | -         |    -1.41 | Chill, keen, krii, P4TriCK, Python   |
|            2 |     3199 | 2024-03-13 | SAW        | L   | 0.314      | -            | -                | -                | -         |    -0.51 | Chill, keen, krii, P4TriCK, Python   |
|            1 |     3579 | 2024-02-26 | PERA       | W   | 0.207      | 0.500        | 0.061 (0.006)    | 0.462 (0.048)    | 0 (0.000) |     5.28 | Chill, keen, krii, P4TriCK, Python   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($450.19)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
