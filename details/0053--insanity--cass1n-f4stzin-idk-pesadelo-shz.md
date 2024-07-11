### Roster Details<br />
Team Name: inSanitY<br />
Roster: cass1n, f4stzin, iDk, pesadelo, shz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  1065.3<br />
<br />
Final Rank Value (1065.3) = Starting Rank Value (935.4) + Head To Head Adjustments (130.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.206[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 935.4
- 400 + ( ( 0.254 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 935.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       85 | 2024-07-03 | Bounty Hunters    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.16 | cass1n, f4stzin, iDk, pesadelo, shz |
|           22 |       88 | 2024-07-01 | Bounty Hunters    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.68 | cass1n, f4stzin, iDk, pesadelo, shz |
|           21 |       98 | 2024-06-29 | Galorys           | W   | 1.000      | 0.333        | -                | 0.519 (0.173)    | 0 (0.000) |     7.60 | cass1n, f4stzin, iDk, pesadelo, shz |
|           20 |      112 | 2024-06-27 | Sharks            | W   | 1.000      | 0.333        | 0.046 (0.015)    | 0.520 (0.173)    | 0 (0.000) |    17.42 | cass1n, f4stzin, iDk, pesadelo, shz |
|           19 |      133 | 2024-06-19 | Case              | W   | 1.000      | 0.337        | 0.033 (0.011)    | 0.582 (0.196)    | 0 (0.000) |     8.57 | cass1n, f4stzin, iDk, pesadelo, shz |
|           18 |      134 | 2024-06-18 | Galorys           | W   | 1.000      | 0.337        | 0.026 (0.009)    | 0.519 (0.175)    | 0 (0.000) |     8.72 | cass1n, f4stzin, iDk, pesadelo, shz |
|           17 |      137 | 2024-06-17 | Dusty Roots       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.89 | cass1n, f4stzin, iDk, pesadelo, shz |
|           16 |      177 | 2024-06-15 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -9.44 | cass1n, f4stzin, iDk, pesadelo, shz |
|           15 |      220 | 2024-06-14 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.26 | cass1n, f4stzin, iDk, pesadelo, shz |
|           14 |      362 | 2024-06-09 | Bounty Hunters    | L   | 0.988      | -            | -                | -                | -         |   -18.79 | cass1n, f4stzin, iDk, pesadelo, shz |
|           13 |      370 | 2024-06-09 | Bounty Hunters    | W   | 0.987      | 0.450        | 0.025 (0.011)    | 0.440 (0.195)    | 0 (0.000) |    12.07 | cass1n, f4stzin, iDk, pesadelo, shz |
|           12 |      439 | 2024-06-08 | Solid             | W   | 0.980      | 0.450        | 0.048 (0.021)    | 0.585 (0.258)    | 0 (0.000) |    11.24 | cass1n, f4stzin, iDk, pesadelo, shz |
|           11 |      479 | 2024-06-07 | Hype              | L   | 0.975      | -            | -                | -                | -         |   -20.98 | cass1n, f4stzin, iDk, pesadelo, shz |
|           10 |      508 | 2024-06-07 | KRÜ               | W   | 0.973      | 0.371        | 0.025 (0.009)    | -                | -         |     8.98 | cass1n, f4stzin, iDk, pesadelo, shz |
|            9 |      546 | 2024-06-06 | BESTIA            | W   | 0.968      | 0.450        | 0.050 (0.022)    | 0.657 (0.286)    | -         |    18.65 | cass1n, f4stzin, iDk, pesadelo, shz |
|            8 |      737 | 2024-06-01 | Solid             | W   | 0.936      | 0.371        | 0.048 (0.017)    | 0.585 (0.203)    | -         |    11.65 | cass1n, f4stzin, iDk, pesadelo, shz |
|            7 |      816 | 2024-05-30 | Intense           | W   | 0.920      | -            | -                | -                | -         |     2.84 | cass1n, f4stzin, iDk, pesadelo, shz |
|            6 |      874 | 2024-05-27 | Bounty Hunters    | W   | 0.901      | -            | -                | -                | -         |    11.45 | cass1n, f4stzin, iDk, pesadelo, shz |
|            5 |     1339 | 2024-05-12 | 9z                | L   | 0.802      | -            | -                | -                | -         |    -0.47 | cass1n, f4stzin, pesadelo, shz, vsm |
|            4 |     1397 | 2024-05-10 | 9z                | L   | 0.789      | -            | -                | -                | -         |    -0.43 | cass1n, f4stzin, iDk, pesadelo, shz |
|            3 |     1424 | 2024-05-09 | ODDIK             | W   | 0.780      | 0.435        | 0.042 (0.014)    | 0.602 (0.204)    | -         |    12.87 | cass1n, f4stzin, iDk, pesadelo, shz |
|            2 |     1463 | 2024-05-07 | Case              | W   | 0.767      | 0.435        | 0.033 (0.011)    | 0.582 (0.194)    | -         |    10.12 | cass1n, f4stzin, iDk, pesadelo, shz |
|            1 |     1499 | 2024-05-05 | Imperial          | L   | 0.753      | -            | -                | -                | -         |    -1.10 | cass1n, f4stzin, iDk, pesadelo, shz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,096.38)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-03 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-19 |      1.000 | $5,350.00      | $5,350.00       |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-10 |      0.995 | $750.00        | $746.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
