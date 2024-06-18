### Roster Details<br />
Team Name: WOPA<br />
Roster: brzer, Gnøffe, leakz, LUMSEN, Vster<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  646.9<br />
<br />
Final Rank Value (646.9) = Starting Rank Value (635.3) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 635.3
- 400 + ( ( 0.116 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 635.3


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
|           11 |       21 | 2024-06-16 | FLuffy Gangsters | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.071 (0.010)    | 0 (0.000) |    13.52 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|           10 |      148 | 2024-06-12 | The Prodigies    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.107 (0.015)    | 0 (0.000) |    14.76 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            9 |      160 | 2024-06-12 | CPH Wolves       | L   | 1.000      | -            | -                | -                | -         |   -11.62 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            8 |      169 | 2024-06-11 | ADEPTS           | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.036 (0.005)    | 0 (0.000) |    18.59 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            7 |      635 | 2024-06-01 | Illuminar        | L   | 1.000      | -            | -                | -                | -         |    -8.81 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            6 |     1029 | 2024-05-17 | LEON             | L   | 0.988      | -            | -                | -                | -         |   -12.10 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            5 |     1179 | 2024-05-14 | Secret           | W   | 0.968      | 0.143        | 0.000 (0.000)    | 0.108 (0.015)    | 0 (0.000) |    13.88 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            4 |     1194 | 2024-05-13 | VP.Prodigy       | L   | 0.962      | -            | -                | -                | -         |    -5.18 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            3 |     2395 | 2024-03-25 | Sashi            | L   | 0.636      | -            | -                | -                | -         |    -7.94 | brzer, Gnøffe, leakz, LUMSEN, Pellyy |
|            2 |     3837 | 2024-01-19 | MOUZ NXT         | L   | 0.193      | -            | -                | -                | -         |    -0.39 | brzer, buNNy, Gnøffe, leakz, LUMSEN  |
|            1 |     3898 | 2024-01-18 | Monte Gen        | L   | 0.188      | -            | -                | -                | -         |    -3.14 | Gizmy, leen, n0te, ryu, shield       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($597.53)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-12 |      1.000 | $360.00        | $360.00         |
| 2024-03-25 |      0.637 | $373.00        | $237.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
