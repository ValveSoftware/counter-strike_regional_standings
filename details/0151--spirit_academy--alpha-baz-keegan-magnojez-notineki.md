### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alpha, baz, keegaN, Magnojez, notineki<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  708.8<br />
<br />
Final Rank Value (708.8) = Starting Rank Value (665.2) + Head To Head Adjustments (43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.215[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.2
- 400 + ( ( 0.131 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 665.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2713 | 2024-03-09 | RUBY              | L   | 0.530      | -            | -                | -                | -         |    -3.03 | alpha, baz, keegaN, Magnojez, notineki    |
|           13 |     2745 | 2024-03-08 | Passion UA        | W   | 0.522      | 0.372        | 0.086 (0.017)    | 0.803 (0.156)    | 0 (0.000) |    14.24 | alpha, baz, keegaN, Magnojez, notineki    |
|           12 |     2940 | 2024-02-29 | Aurora            | L   | 0.468      | -            | -                | -                | -         |    -0.08 | alpha, baz, keegaN, Magnojez, notineki    |
|           11 |     2950 | 2024-02-28 | 9 Pandas          | L   | 0.463      | -            | -                | -                | -         |    -0.95 | alpha, baz, keegaN, Magnojez, notineki    |
|           10 |     2952 | 2024-02-28 | HAVU              | W   | 0.462      | 0.143        | 0.002 (0.000)    | 0.222 (0.015)    | 0 (0.000) |     8.87 | alpha, baz, keegaN, Magnojez, notineki    |
|            9 |     2970 | 2024-02-27 | RUBY              | W   | 0.456      | 0.143        | 0.121 (0.008)    | 0.574 (0.037)    | 0 (0.000) |    12.13 | alpha, baz, keegaN, Magnojez, notineki    |
|            8 |     2977 | 2024-02-27 | brazylijski luz   | W   | 0.456      | 0.143        | 0.005 (0.000)    | 0.306 (0.020)    | 0 (0.000) |     9.78 | alpha, baz, keegaN, Magnojez, notineki    |
|            7 |     3527 | 2024-02-01 | Sangal            | L   | 0.282      | -            | -                | -                | -         |    -0.50 | alpha, baz, keegaN, Magnojez, notineki    |
|            6 |     3590 | 2024-01-28 | Alliance          | W   | 0.254      | 0.371        | 0.018 (0.002)    | 0.432 (0.041)    | 0 (0.000) |     6.30 | alpha, baz, keegaN, Magnojez, notineki    |
|            5 |     3652 | 2024-01-24 | Sangal            | L   | 0.228      | -            | -                | -                | -         |    -0.39 | alpha, keegaN, Magnojez, notineki, S0tF1k |
|            4 |     3897 | 2024-01-18 | Permitta          | L   | 0.188      | -            | -                | -                | -         |    -0.97 | alpha, baz, keegaN, Magnojez, notineki    |
|            3 |     4021 | 2024-01-15 | Aurora Young Blud | L   | 0.168      | -            | -                | -                | -         |    -2.02 | alpha, baz, keegaN, Magnojez, notineki    |
|            2 |     4273 | 2023-12-23 | ex-Anonymo        | W   | 0.014      | 0.333        | 0.000 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.17 | alpha, baz, keegaN, Magnojez, notineki    |
|            1 |     4277 | 2023-12-21 | ex-Anonymo        | W   | 0.001      | 0.333        | 0.000 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.01 | alpha, baz, keegaN, Magnojez, notineki    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68.05)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
