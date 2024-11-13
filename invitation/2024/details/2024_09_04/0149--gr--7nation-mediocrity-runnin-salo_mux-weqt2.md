### Roster Details<br />
Team Name: GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [149](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [99]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  704.4<br />
<br />
Final Rank Value (704.4) = Starting Rank Value (680.6) + Head To Head Adjustments (23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.6
- 400 + ( ( 0.142 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 680.6


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
|           12 |      118 | 2024-08-30 | ATOX              | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.295 (0.042)    | 0 (0.000) |    20.45 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           11 |      177 | 2024-08-29 | Chinggis Warriors | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.194 (0.028)    | 0 (0.000) |    24.17 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           10 |      230 | 2024-08-28 | ATOX              | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.295 (0.042)    | 0 (0.000) |    21.93 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            9 |      238 | 2024-08-28 | -72c              | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.113 (0.016)    | 0 (0.000) |    14.79 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            8 |     1308 | 2024-07-29 | Bromo             | L   | 0.952      | -            | -                | -                | -         |   -19.45 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            7 |     1336 | 2024-07-28 | AY                | W   | 0.946      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.10 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            6 |     1382 | 2024-07-26 | NomadS            | L   | 0.932      | -            | -                | -                | -         |   -20.11 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            5 |     1885 | 2024-07-12 | Alter Ego         | L   | 0.839      | -            | -                | -                | -         |   -17.84 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            4 |     1889 | 2024-07-12 | Chinggis Warriors | L   | 0.838      | -            | -                | -                | -         |    -5.52 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            3 |     2412 | 2024-06-07 | TYLOO             | L   | 0.606      | -            | -                | -                | -         |    -3.47 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            2 |     2484 | 2024-06-06 | Clutch            | W   | 0.599      | 0.416        | 0.004 (0.001)    | 0.045 (0.011)    | 0 (0.000) |     8.93 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            1 |     2540 | 2024-06-05 | ATOX              | L   | 0.592      | -            | -                | -                | -         |    -6.13 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,858.66)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />