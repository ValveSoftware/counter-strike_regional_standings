### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  741.5<br />
<br />
Final Rank Value (741.5) = Starting Rank Value (728.1) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.1
- 400 + ( ( 0.161 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 728.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       26 | 2024-06-16 | CPH Wolves     | L   | 1.000      | -            | -                | -                | -         |   -15.73 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |       60 | 2024-06-15 | The Prodigies  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.107 (0.015)    | 0 (0.000) |     9.09 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |      163 | 2024-06-12 | ADEPTS         | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.036 (0.005)    | 0 (0.000) |    12.63 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |      179 | 2024-06-11 | The Prodigies  | L   | 1.000      | -            | -                | -                | -         |   -21.89 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |      631 | 2024-06-01 | VP.Prodigy     | L   | 1.000      | -            | -                | -                | -         |    -8.25 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |      764 | 2024-05-26 | Metizport X    | W   | 1.000      | 0.322        | 0.008 (0.002)    | 0.034 (0.011)    | 0 (0.000) |    11.58 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |      991 | 2024-05-18 | DMS            | L   | 0.995      | -            | -                | -                | -         |    -8.62 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     1039 | 2024-05-17 | Space          | W   | 0.987      | 0.143        | 0.007 (0.001)    | 0.419 (0.059)    | 0 (0.000) |    20.83 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     1067 | 2024-05-16 | Rounds         | W   | 0.981      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.91 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     1106 | 2024-05-15 | GUN5           | L   | 0.976      | -            | -                | -                | -         |    -6.86 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     1249 | 2024-05-11 | Metizport X    | W   | 0.949      | 0.322        | 0.008 (0.002)    | 0.034 (0.010)    | 0 (0.000) |    11.73 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     1529 | 2024-04-27 | Sashi          | L   | 0.856      | -            | -                | -                | -         |    -1.56 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     1540 | 2024-04-27 | Preasy         | W   | 0.855      | 0.336        | 0.012 (0.003)    | 0.169 (0.049)    | 0 (0.000) |    15.67 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     1906 | 2024-04-13 | En av de lette | L   | 0.763      | -            | -                | -                | -         |   -11.64 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     2515 | 2024-03-17 | INFURITY       | W   | 0.583      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.50 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,232.14)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $3,864.00      | $3,864.00       |
| 2024-04-27 |      0.856 | $2,655.00      | $2,273.14       |
| 2024-04-13 |      0.763 | $1,436.00      | $1,095.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
