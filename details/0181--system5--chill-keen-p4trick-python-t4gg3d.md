### Roster Details<br />
Team Name: System5<br />
Roster: Chill, keen, P4TriCK, Python, T4gg3D<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  592.8<br />
<br />
Final Rank Value (592.8) = Starting Rank Value (555.3) + Head To Head Adjustments (37.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.3
- 400 + ( ( 0.076 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 555.3


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
|           12 |       15 | 2024-06-16 | EYEBALLERS | L   | 1.000      | -            | -                | -                | -         |    -4.70 | Chill, keen, P4TriCK, Python, T4gg3D |
|           11 |       45 | 2024-06-15 | RUBY       | W   | 1.000      | 0.143        | 0.121 (0.017)    | 0.574 (0.082)    | 0 (0.000) |    27.63 | Chill, keen, P4TriCK, Python, T4gg3D |
|           10 |       85 | 2024-06-14 | Nemiga     | L   | 1.000      | -            | -                | -                | -         |    -0.78 | Chill, keen, P4TriCK, Python, T4gg3D |
|            9 |      850 | 2024-05-22 | PERA       | L   | 1.000      | -            | -                | -                | -         |    -2.64 | Chill, keen, P4TriCK, Python, T4gg3D |
|            8 |      896 | 2024-05-21 | Space      | L   | 1.000      | -            | -                | -                | -         |    -4.37 | Chill, keen, P4TriCK, Python, T4gg3D |
|            7 |     1164 | 2024-05-14 | Apeks      | W   | 0.970      | 0.500        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.25 | Chill, keen, P4TriCK, Python, T4gg3D |
|            6 |     1695 | 2024-04-20 | 9INE       | W   | 0.808      | 0.500        | 0.000 (0.000)    | 0.071 (0.029)    | 0 (0.000) |    11.19 | Chill, keen, P4TriCK, Python, T4gg3D |
|            5 |     2217 | 2024-04-03 | Betera     | L   | 0.696      | -            | -                | -                | -         |    -5.74 | Chill, keen, P4TriCK, Python, shadiy |
|            4 |     2301 | 2024-03-29 | RUSH B     | L   | 0.663      | -            | -                | -                | -         |    -3.63 | Chill, keen, P4TriCK, Python, shadiy |
|            3 |     2387 | 2024-03-26 | Monte      | L   | 0.643      | -            | -                | -                | -         |    -0.34 | Chill, keen, krii, P4TriCK, Python   |
|            2 |     2614 | 2024-03-13 | SAW        | L   | 0.557      | -            | -                | -                | -         |    -0.21 | Chill, keen, krii, P4TriCK, Python   |
|            1 |     2994 | 2024-02-26 | PERA       | W   | 0.450      | 0.500        | 0.058 (0.013)    | 0.455 (0.102)    | 0 (0.000) |    12.89 | Chill, keen, krii, P4TriCK, Python   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
