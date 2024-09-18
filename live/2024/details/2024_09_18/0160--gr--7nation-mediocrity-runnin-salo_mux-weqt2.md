### Roster Details<br />
Team Name: GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [160](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [103]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  679.6<br />
<br />
Final Rank Value (679.6) = Starting Rank Value (685.6) + Head To Head Adjustments (-6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.6
- 400 + ( ( 0.146 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 685.6


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
|           14 |        0 | 2024-09-18 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -13.10 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           13 |       27 | 2024-09-17 | WW                | L   | 1.000      | -            | -                | -                | -         |   -24.12 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           12 |      528 | 2024-08-30 | ATOX              | W   | 1.000      | 0.143        | 0.041 (0.006)    | 0.310 (0.044)    | 0 (0.000) |    22.66 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           11 |      587 | 2024-08-29 | Chinggis Warriors | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.172 (0.025)    | 0 (0.000) |    22.96 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           10 |      640 | 2024-08-28 | ATOX              | W   | 1.000      | 0.143        | 0.041 (0.006)    | 0.310 (0.044)    | 0 (0.000) |    24.29 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            9 |      648 | 2024-08-28 | -72c              | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.108 (0.015)    | 0 (0.000) |    14.28 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            8 |     1718 | 2024-07-29 | Bromo             | L   | 0.859      | -            | -                | -                | -         |   -18.07 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            7 |     1746 | 2024-07-28 | AY                | W   | 0.853      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.32 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            6 |     1792 | 2024-07-26 | NomadS            | L   | 0.840      | -            | -                | -                | -         |   -18.52 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            5 |     2295 | 2024-07-12 | Alter Ego         | L   | 0.746      | -            | -                | -                | -         |   -16.24 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            4 |     2299 | 2024-07-12 | Chinggis Warriors | L   | 0.745      | -            | -                | -                | -         |    -5.78 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            3 |     2822 | 2024-06-07 | TYLOO             | L   | 0.513      | -            | -                | -                | -         |    -3.34 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            2 |     2894 | 2024-06-06 | Clutch            | W   | 0.506      | 0.416        | 0.004 (0.001)    | 0.038 (0.008)    | 0 (0.000) |     7.24 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            1 |     2950 | 2024-06-05 | ATOX              | L   | 0.500      | -            | -                | -                | -         |    -3.57 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,580.07)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
