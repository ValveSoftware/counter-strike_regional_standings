### Roster Details<br />
Team Name: GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [166](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [109]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  669.1<br />
<br />
Final Rank Value (669.1) = Starting Rank Value (668.2) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 668.2
- 400 + ( ( 0.139 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 668.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      743 | 2024-09-18 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -11.80 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           13 |      770 | 2024-09-17 | WW                | L   | 1.000      | -            | -                | -                | -         |   -21.80 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           12 |     1271 | 2024-08-30 | ATOX              | W   | 0.933      | 0.143        | 0.033 (0.004)    | 0.271 (0.036)    | 0 (0.000) |    22.73 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           11 |     1330 | 2024-08-29 | Chinggis Warriors | W   | 0.925      | 0.143        | 0.010 (0.001)    | 0.154 (0.020)    | 0 (0.000) |    21.20 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           10 |     1383 | 2024-08-28 | ATOX              | W   | 0.918      | 0.143        | 0.033 (0.004)    | 0.271 (0.036)    | 0 (0.000) |    23.67 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            9 |     1391 | 2024-08-28 | -72c              | W   | 0.918      | 0.143        | 0.002 (0.000)    | 0.084 (0.011)    | 0 (0.000) |    10.30 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            8 |     2461 | 2024-07-29 | Bromo             | L   | 0.718      | -            | -                | -                | -         |   -15.29 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            7 |     2489 | 2024-07-28 | AY                | W   | 0.713      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.67 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            6 |     2535 | 2024-07-26 | NomadS            | L   | 0.699      | -            | -                | -                | -         |   -15.37 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            5 |     3038 | 2024-07-12 | Alter Ego         | L   | 0.606      | -            | -                | -                | -         |   -13.09 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            4 |     3042 | 2024-07-12 | Chinggis Warriors | L   | 0.605      | -            | -                | -                | -         |    -4.67 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            3 |     3565 | 2024-06-07 | TYLOO             | L   | 0.373      | -            | -                | -                | -         |    -2.89 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            2 |     3637 | 2024-06-06 | Clutch            | W   | 0.366      | 0.416        | 0.003 (0.000)    | 0.024 (0.004)    | 0 (0.000) |     5.18 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            1 |     3693 | 2024-06-05 | ATOX              | L   | 0.359      | -            | -                | -                | -         |    -1.94 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,159.04)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
