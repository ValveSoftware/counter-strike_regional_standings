### Roster Details<br />
Team Name: GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  662.2<br />
<br />
Final Rank Value (662.2) = Starting Rank Value (705.9) + Head To Head Adjustments (-43.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.9
- 400 + ( ( 0.142 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 705.9


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
|           19 |      151 | 2024-07-12 | Alter Ego         | L   | 1.000      | -            | -                | -                | -         |   -22.17 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2 |
|           18 |      155 | 2024-07-12 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -12.70 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2 |
|           17 |      678 | 2024-06-07 | TYLOO             | L   | 0.933      | -            | -                | -                | -         |   -12.12 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           16 |      750 | 2024-06-06 | Clutch            | W   | 0.926      | 0.416        | 0.008 (0.003)    | 0.075 (0.029)    | 0 (0.000) |    14.92 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           15 |      806 | 2024-06-05 | ATOX              | L   | 0.919      | -            | -                | -                | -         |    -5.38 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           14 |     3512 | 2024-02-16 | FlyQuest          | L   | 0.190      | -            | -                | -                | -         |    -0.18 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           13 |     3537 | 2024-02-16 | MAG               | L   | 0.186      | -            | -                | -                | -         |    -4.42 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           12 |     3542 | 2024-02-16 | Newhappy          | L   | 0.185      | -            | -                | -                | -         |    -4.31 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           11 |     3564 | 2024-02-15 | The Huns          | W   | 0.179      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     1.32 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           10 |     3607 | 2024-02-14 | ZEUS              | W   | 0.172      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.83 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            9 |     3798 | 2024-02-02 | Rare Atom         | L   | 0.093      | -            | -                | -                | -         |    -1.54 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            8 |     3805 | 2024-02-02 | ATOX              | W   | 0.091      | 0.143        | 0.031 (0.000)    | 0.239 (0.003)    | 0 (0.000) |     2.29 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            7 |     3829 | 2024-02-01 | Newhappy          | W   | 0.086      | 0.143        | 0.000 (0.000)    | 0.028 (0.000)    | 0 (0.000) |     0.72 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            6 |     3831 | 2024-02-01 | Steel Helmet      | W   | 0.085      | 0.143        | 0.009 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.17 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            5 |     3835 | 2024-02-01 | TYLOO             | L   | 0.084      | -            | -                | -                | -         |    -0.85 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            4 |     3939 | 2024-01-25 | Wings Up          | L   | 0.038      | -            | -                | -                | -         |    -0.93 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            3 |     3950 | 2024-01-24 | -72c              | W   | 0.033      | 0.143        | 0.000 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     0.16 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            2 |     4002 | 2024-01-22 | Steel Helmet      | L   | 0.019      | -            | -                | -                | -         |    -0.34 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            1 |     4069 | 2024-01-20 | The Huns          | L   | 0.006      | -            | -                | -                | -         |    -0.15 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,936.71)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.946 | $3,000.00      | $2,838.69       |
| 2024-02-17 |      0.196 | $500.00        | $98.02          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
