### Roster Details<br />
Team Name: GR<br />
Roster: mediocrity, qqGOD, SALO_MUX, uwrr, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  673.1<br />
<br />
Final Rank Value (673.1) = Starting Rank Value (689.6) + Head To Head Adjustments (-16.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.6
- 400 + ( ( 0.143 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 689.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      378 | 2024-06-07 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -8.57 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           21 |      450 | 2024-06-06 | Clutch            | W   | 1.000      | 0.416        | 0.007 (0.003)    | 0.071 (0.030)    | 0 (0.000) |    16.56 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           20 |      506 | 2024-06-05 | ATOX              | L   | 1.000      | -            | -                | -                | -         |    -5.03 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           19 |     3215 | 2024-02-16 | FlyQuest          | L   | 0.386      | -            | -                | -                | -         |    -0.23 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           18 |     3240 | 2024-02-16 | MAG               | L   | 0.381      | -            | -                | -                | -         |    -8.44 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           17 |     3245 | 2024-02-16 | Newhappy          | L   | 0.381      | -            | -                | -                | -         |    -8.45 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           16 |     3267 | 2024-02-15 | The Huns          | W   | 0.374      | 0.143        | 0.000 (0.000)    | 0.065 (0.003)    | 0 (0.000) |     3.59 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           15 |     3310 | 2024-02-14 | ZEUS              | W   | 0.368      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.98 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           14 |     3501 | 2024-02-02 | Rare Atom         | L   | 0.288      | -            | -                | -                | -         |    -4.38 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           13 |     3508 | 2024-02-02 | ATOX              | W   | 0.287      | 0.143        | 0.027 (0.001)    | 0.275 (0.011)    | 0 (0.000) |     7.40 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           12 |     3532 | 2024-02-01 | Newhappy          | W   | 0.281      | 0.143        | 0.000 (0.000)    | 0.066 (0.003)    | 0 (0.000) |     2.72 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           11 |     3534 | 2024-02-01 | Steel Helmet      | W   | 0.281      | 0.143        | 0.010 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     4.22 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           10 |     3538 | 2024-02-01 | TYLOO             | L   | 0.280      | -            | -                | -                | -         |    -3.31 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            9 |     3642 | 2024-01-25 | Wings Up          | L   | 0.234      | -            | -                | -                | -         |    -5.32 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            8 |     3653 | 2024-01-24 | -72c              | W   | 0.228      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.24 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            7 |     3705 | 2024-01-22 | Steel Helmet      | L   | 0.215      | -            | -                | -                | -         |    -3.56 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            6 |     3772 | 2024-01-20 | The Huns          | L   | 0.201      | -            | -                | -                | -         |    -4.61 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            5 |     3833 | 2024-01-19 | ATOX              | L   | 0.194      | -            | -                | -                | -         |    -1.14 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            4 |     3838 | 2024-01-19 | Eruption          | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     1.01 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            3 |     4019 | 2024-01-15 | Fort Arena        | W   | 0.168      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.89 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            2 |     4023 | 2024-01-15 | MungYu            | L   | 0.168      | -            | -                | -                | -         |    -3.96 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            1 |     4025 | 2024-01-15 | Chinggis Warriors | W   | 0.167      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.87 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,195.66)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-02-17 |      0.391 | $500.00        | $195.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
