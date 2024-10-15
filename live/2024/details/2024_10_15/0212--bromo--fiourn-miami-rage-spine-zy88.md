### Roster Details<br />
Team Name: Bromo<br />
Roster: FIOURN, Miami, rage, SPine, Zy88<br />
Global Rank: [212](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_15.md)<br />
Regional Rank: [26]( ../../standings_asia_2024_10_15.md)<br />
<br />
Final Rank Value:  531.9<br />
<br />
Final Rank Value (531.9) = Starting Rank Value (491.5) + Head To Head Adjustments (40.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.5
- 400 + ( ( 0.047 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 491.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        0 | 2024-10-15 | The Huns     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.90 | FIOURN, Miami, rage, SPine, Zy88 |
|           12 |     1471 | 2024-08-28 | Teamwork     | L   | 0.879      | -            | -                | -                | -         |   -16.79 | FIOURN, Miami, rage, SPine, Zy88 |
|           11 |     1487 | 2024-08-28 | CatEvil      | W   | 0.878      | 0.143        | 0.000 (0.000)    | 0.158 (0.020)    | 0 (0.000) |    15.90 | FIOURN, Miami, rage, SPine, Zy88 |
|           10 |     1522 | 2024-08-27 | Steel Helmet | W   | 0.873      | 0.143        | 0.000 (0.000)    | 0.029 (0.004)    | 0 (0.000) |     8.88 | FIOURN, Miami, rage, SPine, Zy88 |
|            9 |     1542 | 2024-08-27 | Teamwork     | L   | 0.871      | -            | -                | -                | -         |   -17.35 | FIOURN, Miami, rage, SPine, Zy88 |
|            8 |     1646 | 2024-08-25 | Teamwork     | W   | 0.859      | 0.143        | 0.000 (0.000)    | 0.117 (0.014)    | 0 (0.000) |     9.81 | FIOURN, Miami, rage, SPine, Zy88 |
|            7 |     1648 | 2024-08-25 | XNL          | W   | 0.858      | 0.143        | 0.000 (0.000)    | 0.058 (0.007)    | 0 (0.000) |     9.59 | FIOURN, Miami, rage, SPine, Zy88 |
|            6 |     1653 | 2024-08-25 | Steel Helmet | W   | 0.858      | 0.143        | 0.000 (0.000)    | 0.029 (0.004)    | 0 (0.000) |     8.98 | FIOURN, Miami, rage, SPine, Zy88 |
|            5 |     2550 | 2024-07-29 | CatEvil      | L   | 0.679      | -            | -                | -                | -         |    -8.32 | FIOURN, Miami, rage, SPine, Zy88 |
|            4 |     2558 | 2024-07-29 | GR           | W   | 0.679      | 0.143        | 0.003 (0.000)    | 0.127 (0.012)    | 0 (0.000) |    14.37 | FIOURN, Miami, rage, SPine, Zy88 |
|            3 |     2588 | 2024-07-28 | NKT          | W   | 0.673      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.87 | FIOURN, Miami, rage, SPine, Zy88 |
|            2 |     2609 | 2024-07-27 | NomadS       | L   | 0.666      | -            | -                | -                | -         |   -10.13 | FIOURN, Miami, rage, SPine, Zy88 |
|            1 |     2634 | 2024-07-26 | The Huns     | W   | 0.660      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.65 | FIOURN, Miami, rage, SPine, Zy88 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
