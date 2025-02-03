### Roster Details<br />
Team Name: JiJieHao<br />
Roster: Aaron, Bibu, dennyslaw, ISSAA, m1N1<br />
Global Rank: [170](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_03.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_02_03.md)<br />
<br />
Final Rank Value:  665.6<br />
<br />
Final Rank Value (665.6) = Starting Rank Value (664.8) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.8
- 400 + ( ( 0.137 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 664.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       79 | 2025-01-28 | CPH Wolves     | L   | 1.000      | -            | -                | -                | -         |    -9.31 | Aaron, Bibu, dennyslaw, ISSAA, m1N1       |
|           14 |      115 | 2025-01-27 | PARIVISION     | L   | 1.000      | -            | -                | -                | -         |    -8.78 | Aaron, Bibu, dennyslaw, ISSAA, m1N1       |
|           13 |      219 | 2025-01-23 | 9 Pandas       | L   | 1.000      | -            | -                | -                | -         |    -2.45 | Aaron, Bibu, dennyslaw, ISSAA, m1N1       |
|           12 |      530 | 2024-12-14 | Betera         | L   | 0.861      | -            | -                | -                | -         |   -10.61 | Aaron, Bibu, dennyslaw, ISSAA, m1N1       |
|           11 |      560 | 2024-12-13 | Spirit Academy | L   | 0.854      | -            | -                | -                | -         |    -3.41 | Aaron, Bibu, dennyslaw, ISSAA, m1N1       |
|           10 |      591 | 2024-12-11 | FAVBET         | W   | 0.841      | 0.143        | 0.074 (0.009)    | 1.000 (0.120)    | 0 (0.000) |    20.39 | Aaron, Bibu, dennyslaw, ISSAA, m1N1       |
|            9 |      601 | 2024-12-10 | Endpoint       | W   | 0.834      | 0.143        | 0.026 (0.003)    | 0.463 (0.055)    | 0 (0.000) |    17.61 | Aaron, Bibu, dennyslaw, ISSAA, m1N1       |
|            8 |     2854 | 2024-09-11 | GameAgents     | L   | 0.232      | -            | -                | -                | -         |    -2.93 | 0SAMAS, Aaron, Bibu, dennyslaw, m1N1      |
|            7 |     2983 | 2024-09-06 | EYEBALLERS     | W   | 0.199      | 0.500        | 0.042 (0.004)    | 0.569 (0.057)    | 0 (0.000) |     4.53 | 0SAMAS, Aaron, Bibu, dennyslaw, m1N1      |
|            6 |     3014 | 2024-09-05 | Rebels         | L   | 0.193      | -            | -                | -                | -         |    -3.00 | 0SAMAS, Aaron, Bibu, dennyslaw, m1N1      |
|            5 |     3214 | 2024-08-29 | Superfkrs      | L   | 0.145      | -            | -                | -                | -         |    -3.36 | 0SAMAS, dennyslaw, Duplicate, ISSAA, m1N1 |
|            4 |     3257 | 2024-08-28 | NOM            | L   | 0.139      | -            | -                | -                | -         |    -3.28 | 0SAMAS, dennyslaw, Duplicate, ISSAA, m1N1 |
|            3 |     3269 | 2024-08-28 | Adventurers    | W   | 0.138      | 0.143        | 0.009 (0.000)    | 0.231 (0.005)    | 0 (0.000) |     2.89 | 0SAMAS, dennyslaw, Duplicate, ISSAA, m1N1 |
|            2 |     3575 | 2024-08-21 | Onyx Ravens    | W   | 0.092      | 0.143        | 0.020 (0.000)    | 0.031 (0.000)    | 0 (0.000) |     1.11 | 0SAMAS, dennyslaw, Duplicate, ISSAA, m1N1 |
|            1 |     3578 | 2024-08-21 | DEPO           | W   | 0.092      | 0.143        | 0.011 (0.000)    | 0.047 (0.001)    | 0 (0.000) |     1.41 | 0SAMAS, dennyslaw, Duplicate, ISSAA, m1N1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($246.41)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
