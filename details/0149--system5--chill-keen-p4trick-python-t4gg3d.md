### Roster Details<br />
Team Name: System5<br />
Roster: Chill, keen, P4TriCK, Python, T4gg3D<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  723.0<br />
<br />
Final Rank Value (723.0) = Starting Rank Value (705.2) + Head To Head Adjustments (17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.2
- 400 + ( ( 0.145 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 705.2


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
|           12 |      151 | 2024-06-16 | EYEBALLERS | L   | 1.000      | -            | -                | -                | -         |    -8.15 | Chill, keen, P4TriCK, Python, T4gg3D |
|           11 |      181 | 2024-06-15 | RUBY       | W   | 1.000      | 0.143        | 0.139 (0.020)    | 0.563 (0.080)    | 0 (0.000) |    24.43 | Chill, keen, P4TriCK, Python, T4gg3D |
|           10 |      221 | 2024-06-14 | Nemiga     | L   | 1.000      | -            | -                | -                | -         |    -1.57 | Chill, keen, P4TriCK, Python, T4gg3D |
|            9 |      984 | 2024-05-22 | PERA       | L   | 0.867      | -            | -                | -                | -         |    -4.25 | Chill, keen, P4TriCK, Python, T4gg3D |
|            8 |     1030 | 2024-05-21 | Space      | L   | 0.861      | -            | -                | -                | -         |    -7.11 | Chill, keen, P4TriCK, Python, T4gg3D |
|            7 |     1298 | 2024-05-14 | Norway     | W   | 0.814      | 0.500        | 0.010 (0.004)    | 0.124 (0.050)    | 0 (0.000) |    14.07 | Chill, keen, P4TriCK, Python, T4gg3D |
|            6 |     1829 | 2024-04-20 | 9INE       | W   | 0.653      | 0.500        | 0.000 (0.000)    | 0.082 (0.027)    | 0 (0.000) |     5.65 | Chill, keen, P4TriCK, Python, T4gg3D |
|            5 |     2351 | 2024-04-03 | Betera     | L   | 0.540      | -            | -                | -                | -         |    -7.02 | Chill, keen, P4TriCK, Python, shadiy |
|            4 |     2434 | 2024-03-29 | RUSH B     | L   | 0.507      | -            | -                | -                | -         |    -4.72 | Chill, keen, P4TriCK, Python, shadiy |
|            3 |     2520 | 2024-03-26 | Monte      | L   | 0.487      | -            | -                | -                | -         |    -0.64 | Chill, keen, krii, P4TriCK, Python   |
|            2 |     2747 | 2024-03-13 | SAW        | L   | 0.401      | -            | -                | -                | -         |    -0.47 | Chill, keen, krii, P4TriCK, Python   |
|            1 |     3127 | 2024-02-26 | PERA       | W   | 0.294      | 0.500        | 0.066 (0.010)    | 0.433 (0.064)    | 0 (0.000) |     7.65 | Chill, keen, krii, P4TriCK, Python   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($493.61)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
