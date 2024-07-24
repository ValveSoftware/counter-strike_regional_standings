### Roster Details<br />
Team Name: GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  637.9<br />
<br />
Final Rank Value (637.9) = Starting Rank Value (680.5) + Head To Head Adjustments (-42.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.5
- 400 + ( ( 0.139 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 680.5


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
|           15 |      439 | 2024-07-12 | Alter Ego         | L   | 1.000      | -            | -                | -                | -         |   -21.59 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2 |
|           14 |      443 | 2024-07-12 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -13.05 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2 |
|           13 |      966 | 2024-06-07 | TYLOO             | L   | 0.885      | -            | -                | -                | -         |   -11.72 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           12 |     1038 | 2024-06-06 | Clutch            | W   | 0.878      | 0.416        | 0.007 (0.002)    | 0.071 (0.026)    | 0 (0.000) |    14.22 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           11 |     1094 | 2024-06-05 | ATOX              | L   | 0.872      | -            | -                | -                | -         |    -5.86 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           10 |     3800 | 2024-02-16 | FlyQuest          | L   | 0.143      | -            | -                | -                | -         |    -0.19 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            9 |     3825 | 2024-02-16 | MAG               | L   | 0.139      | -            | -                | -                | -         |    -3.24 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            8 |     3830 | 2024-02-16 | Newhappy          | L   | 0.138      | -            | -                | -                | -         |    -3.15 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            7 |     3852 | 2024-02-15 | The Huns          | W   | 0.132      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.71 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            6 |     3895 | 2024-02-14 | ZEUS              | W   | 0.125      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.68 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            5 |     4086 | 2024-02-02 | Rare Atom         | L   | 0.046      | -            | -                | -                | -         |    -0.77 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            4 |     4093 | 2024-02-02 | ATOX              | W   | 0.044      | 0.143        | 0.026 (0.000)    | 0.215 (0.001)    | 0 (0.000) |     1.07 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            3 |     4117 | 2024-02-01 | Newhappy          | W   | 0.039      | 0.143        | 0.000 (0.000)    | 0.019 (0.000)    | 0 (0.000) |     0.34 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            2 |     4119 | 2024-02-01 | Steel Helmet      | W   | 0.038      | 0.143        | 0.008 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.41 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            1 |     4123 | 2024-02-01 | TYLOO             | L   | 0.037      | -            | -                | -                | -         |    -0.42 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,771.42)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.899 | $3,000.00      | $2,697.01       |
| 2024-02-17 |      0.149 | $500.00        | $74.41          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
