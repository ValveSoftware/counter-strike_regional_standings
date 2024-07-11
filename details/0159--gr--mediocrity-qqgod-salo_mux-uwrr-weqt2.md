### Roster Details<br />
Team Name: GR<br />
Roster: mediocrity, qqGOD, SALO_MUX, uwrr, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  693.5<br />
<br />
Final Rank Value (693.5) = Starting Rank Value (701.6) + Head To Head Adjustments (-8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.6
- 400 + ( ( 0.143 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 701.6


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
|           22 |      514 | 2024-06-07 | TYLOO             | L   | 0.972      | -            | -                | -                | -         |    -8.85 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           21 |      586 | 2024-06-06 | Clutch            | W   | 0.965      | 0.416        | 0.008 (0.003)    | 0.078 (0.031)    | 0 (0.000) |    15.67 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           20 |      642 | 2024-06-05 | ATOX              | L   | 0.959      | -            | -                | -                | -         |    -5.34 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           19 |     3348 | 2024-02-16 | FlyQuest          | L   | 0.230      | -            | -                | -                | -         |    -0.19 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           18 |     3373 | 2024-02-16 | MAG               | L   | 0.226      | -            | -                | -                | -         |    -5.29 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           17 |     3378 | 2024-02-16 | Newhappy          | L   | 0.225      | -            | -                | -                | -         |    -5.17 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           16 |     3400 | 2024-02-15 | The Huns          | W   | 0.218      | 0.143        | 0.000 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     1.74 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           15 |     3443 | 2024-02-14 | ZEUS              | W   | 0.212      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.05 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           14 |     3634 | 2024-02-02 | Rare Atom         | L   | 0.132      | -            | -                | -                | -         |    -2.16 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           13 |     3641 | 2024-02-02 | ATOX              | W   | 0.131      | 0.143        | 0.031 (0.001)    | 0.256 (0.005)    | 0 (0.000) |     3.32 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           12 |     3665 | 2024-02-01 | Newhappy          | W   | 0.125      | 0.143        | 0.000 (0.000)    | 0.038 (0.001)    | 0 (0.000) |     1.08 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           11 |     3667 | 2024-02-01 | Steel Helmet      | W   | 0.125      | 0.143        | 0.009 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.76 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           10 |     3671 | 2024-02-01 | TYLOO             | L   | 0.124      | -            | -                | -                | -         |    -1.88 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            9 |     3775 | 2024-01-25 | Wings Up          | L   | 0.078      | -            | -                | -                | -         |    -1.86 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            8 |     3786 | 2024-01-24 | -72c              | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.36 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            7 |     3838 | 2024-01-22 | Steel Helmet      | L   | 0.059      | -            | -                | -                | -         |    -1.03 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            6 |     3905 | 2024-01-20 | The Huns          | L   | 0.046      | -            | -                | -                | -         |    -1.09 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            5 |     3966 | 2024-01-19 | ATOX              | L   | 0.038      | -            | -                | -                | -         |    -0.24 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            4 |     3971 | 2024-01-19 | Eruption          | W   | 0.038      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.19 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            3 |     4152 | 2024-01-15 | Fort Arena        | W   | 0.012      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.06 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            2 |     4156 | 2024-01-15 | MungYu            | L   | 0.012      | -            | -                | -                | -         |    -0.29 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            1 |     4158 | 2024-01-15 | Chinggis Warriors | W   | 0.012      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.06 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,075.34)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.986 | $3,000.00      | $2,957.52       |
| 2024-02-17 |      0.236 | $500.00        | $117.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
