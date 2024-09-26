### Roster Details<br />
Team Name: GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [164](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [105]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  662.5<br />
<br />
Final Rank Value (662.5) = Starting Rank Value (666.5) + Head To Head Adjustments (-3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.5
- 400 + ( ( 0.141 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 666.5


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
|           14 |      290 | 2024-09-18 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -13.19 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           13 |      317 | 2024-09-17 | WW                | L   | 1.000      | -            | -                | -                | -         |   -23.44 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           12 |      818 | 2024-08-30 | ATOX              | W   | 1.000      | 0.143        | 0.032 (0.005)    | 0.300 (0.043)    | 0 (0.000) |    22.00 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           11 |      877 | 2024-08-29 | Chinggis Warriors | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.161 (0.023)    | 0 (0.000) |    22.13 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|           10 |      930 | 2024-08-28 | ATOX              | W   | 1.000      | 0.143        | 0.032 (0.005)    | 0.300 (0.043)    | 0 (0.000) |    23.61 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            9 |      938 | 2024-08-28 | -72c              | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.106 (0.015)    | 0 (0.000) |    14.31 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            8 |     2008 | 2024-07-29 | Bromo             | L   | 0.805      | -            | -                | -                | -         |   -16.70 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            7 |     2036 | 2024-07-28 | AY                | W   | 0.799      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.38 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            6 |     2082 | 2024-07-26 | NomadS            | L   | 0.786      | -            | -                | -                | -         |   -17.03 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2 |
|            5 |     2585 | 2024-07-12 | Alter Ego         | L   | 0.692      | -            | -                | -                | -         |   -14.78 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            4 |     2589 | 2024-07-12 | Chinggis Warriors | L   | 0.691      | -            | -                | -                | -         |    -5.93 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2  |
|            3 |     3112 | 2024-06-07 | TYLOO             | L   | 0.459      | -            | -                | -                | -         |    -3.29 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            2 |     3184 | 2024-06-06 | Clutch            | W   | 0.452      | 0.416        | 0.003 (0.001)    | 0.034 (0.006)    | 0 (0.000) |     6.50 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2      |
|            1 |     3240 | 2024-06-05 | ATOX              | L   | 0.446      | -            | -                | -                | -         |    -3.48 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,418.46)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
