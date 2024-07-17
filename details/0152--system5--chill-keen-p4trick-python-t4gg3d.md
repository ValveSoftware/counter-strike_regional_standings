### Roster Details<br />
Team Name: System5<br />
Roster: Chill, keen, P4TriCK, Python, T4gg3D<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  725.8<br />
<br />
Final Rank Value (725.8) = Starting Rank Value (709.8) + Head To Head Adjustments (16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.8
- 400 + ( ( 0.144 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 709.8


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
|           12 |      315 | 2024-06-16 | EYEBALLERS | L   | 0.994      | -            | -                | -                | -         |    -8.25 | Chill, keen, P4TriCK, Python, T4gg3D |
|           11 |      345 | 2024-06-15 | RUBY       | W   | 0.987      | 0.143        | 0.144 (0.020)    | 0.580 (0.082)    | 0 (0.000) |    24.29 | Chill, keen, P4TriCK, Python, T4gg3D |
|           10 |      385 | 2024-06-14 | Nemiga     | L   | 0.981      | -            | -                | -                | -         |    -1.64 | Chill, keen, P4TriCK, Python, T4gg3D |
|            9 |     1148 | 2024-05-22 | PERA       | L   | 0.828      | -            | -                | -                | -         |    -4.05 | Chill, keen, P4TriCK, Python, T4gg3D |
|            8 |     1194 | 2024-05-21 | Space      | L   | 0.821      | -            | -                | -                | -         |    -6.52 | Chill, keen, P4TriCK, Python, T4gg3D |
|            7 |     1462 | 2024-05-14 | Norway     | W   | 0.774      | 0.500        | 0.010 (0.004)    | 0.122 (0.047)    | 0 (0.000) |    13.38 | Chill, keen, P4TriCK, Python, T4gg3D |
|            6 |     1993 | 2024-04-20 | 9INE       | W   | 0.613      | 0.500        | 0.000 (0.000)    | 0.080 (0.024)    | 0 (0.000) |     5.28 | Chill, keen, P4TriCK, Python, T4gg3D |
|            5 |     2515 | 2024-04-03 | Betera     | L   | 0.501      | -            | -                | -                | -         |    -6.85 | Chill, keen, P4TriCK, Python, shadiy |
|            4 |     2598 | 2024-03-29 | RUSH B     | L   | 0.468      | -            | -                | -                | -         |    -4.56 | Chill, keen, P4TriCK, Python, shadiy |
|            3 |     2684 | 2024-03-26 | Monte      | L   | 0.448      | -            | -                | -                | -         |    -1.26 | Chill, keen, krii, P4TriCK, Python   |
|            2 |     2911 | 2024-03-13 | SAW        | L   | 0.361      | -            | -                | -                | -         |    -0.46 | Chill, keen, krii, P4TriCK, Python   |
|            1 |     3291 | 2024-02-26 | PERA       | W   | 0.255      | 0.500        | 0.067 (0.009)    | 0.454 (0.058)    | 0 (0.000) |     6.63 | Chill, keen, krii, P4TriCK, Python   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($473.80)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
