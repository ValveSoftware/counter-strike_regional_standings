### Roster Details<br />
Team Name: adalYamigos<br />
Roster: delboNi, f4stzin, piriajr, shz, zqkS<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  682.0<br />
<br />
Final Rank Value (682.0) = Starting Rank Value (606.1) + Head To Head Adjustments (75.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.1
- 400 + ( ( 0.096 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 606.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     2216 | 2024-04-12 | Case        | L   | 0.563      | -            | -                | -                | -         |    -3.55 | delboNi, f4stzin, piriajr, shz, zqkS |
|           27 |     2236 | 2024-04-11 | Imperial    | L   | 0.556      | -            | -                | -                | -         |    -0.21 | delboNi, f4stzin, piriajr, shz, zqkS |
|           26 |     2325 | 2024-04-09 | MIBR        | L   | 0.542      | -            | -                | -                | -         |    -0.13 | delboNi, f4stzin, piriajr, shz, zqkS |
|           25 |     2329 | 2024-04-09 | MIBR        | L   | 0.542      | -            | -                | -                | -         |    -0.13 | delboNi, f4stzin, piriajr, shz, zqkS |
|           24 |     2401 | 2024-04-07 | Case        | W   | 0.529      | 0.435        | 0.034 (0.008)    | 0.697 (0.160)    | 0 (0.000) |    13.57 | delboNi, f4stzin, piriajr, shz, zqkS |
|           23 |     2436 | 2024-04-05 | 2GAME       | L   | 0.515      | -            | -                | -                | -         |    -7.49 | delboNi, f4stzin, piriajr, shz, zqkS |
|           22 |     2437 | 2024-04-05 | 2GAME       | W   | 0.515      | 0.450        | -                | 0.079 (0.018)    | 0 (0.000) |     8.95 | delboNi, f4stzin, piriajr, shz, zqkS |
|           21 |     2456 | 2024-04-04 | BESTIA      | W   | 0.509      | 0.450        | 0.050 (0.011)    | 0.645 (0.148)    | 0 (0.000) |    13.99 | delboNi, f4stzin, piriajr, shz, zqkS |
|           20 |     2460 | 2024-04-04 | BESTIA      | L   | 0.509      | -            | -                | -                | -         |    -2.00 | delboNi, f4stzin, piriajr, shz, zqkS |
|           19 |     2947 | 2024-03-12 | Solid       | L   | 0.355      | -            | -                | -                | -         |    -2.15 | delboNi, f4stzin, piriajr, shz, zqkS |
|           18 |     2986 | 2024-03-10 | BESTIA      | W   | 0.343      | 0.435        | 0.050 (0.007)    | 0.645 (0.096)    | 0 (0.000) |     9.64 | delboNi, f4stzin, piriajr, shz, zqkS |
|           17 |     3040 | 2024-03-08 | Flamengo    | W   | 0.327      | -            | -                | -                | 0 (0.000) |     3.32 | delboNi, f4stzin, piriajr, shz, zqkS |
|           16 |     3120 | 2024-03-05 | Case        | W   | 0.309      | 0.450        | 0.034 (0.005)    | 0.697 (0.097)    | 0 (0.000) |     8.26 | delboNi, f4stzin, piriajr, shz, zqkS |
|           15 |     3122 | 2024-03-05 | Case        | W   | 0.309      | 0.450        | 0.034 (0.005)    | 0.697 (0.097)    | 0 (0.000) |     8.37 | delboNi, f4stzin, piriajr, shz, zqkS |
|           14 |     3390 | 2024-02-21 | Galorys     | W   | 0.222      | 0.450        | 0.026 (0.003)    | 0.535 (0.053)    | 0 (0.000) |     5.74 | delboNi, f4stzin, piriajr, shz, zqkS |
|           13 |     3394 | 2024-02-21 | Galorys     | W   | 0.222      | 0.450        | 0.026 (0.003)    | 0.535 (0.053)    | 0 (0.000) |     5.80 | delboNi, f4stzin, piriajr, shz, zqkS |
|           12 |     3470 | 2024-02-18 | Solid       | L   | 0.202      | -            | -                | -                | -         |    -0.94 | delboNi, f4stzin, piriajr, shz, zqkS |
|           11 |     3497 | 2024-02-17 | Imperial    | L   | 0.195      | -            | -                | -                | -         |    -0.05 | delboNi, f4stzin, piriajr, shz, zqkS |
|           10 |     3576 | 2024-02-14 | Corinthians | W   | 0.176      | -            | -                | -                | 0 (0.000) |     2.02 | delboNi, f4stzin, piriajr, shz, zqkS |
|            9 |     3585 | 2024-02-14 | Corinthians | W   | 0.175      | -            | -                | -                | -         |     2.05 | delboNi, f4stzin, piriajr, shz, zqkS |
|            8 |     3618 | 2024-02-13 | Solid       | W   | 0.169      | 0.450        | 0.047 (0.004)    | 0.622 (0.047)    | -         |     4.58 | delboNi, f4stzin, piriajr, shz, zqkS |
|            7 |     3622 | 2024-02-13 | Solid       | W   | 0.169      | 0.450        | 0.047 (0.004)    | 0.622 (0.047)    | -         |     4.60 | delboNi, f4stzin, piriajr, shz, zqkS |
|            6 |     3632 | 2024-02-13 | inSanitY    | W   | 0.166      | -            | -                | -                | -         |     1.25 | delboNi, f4stzin, piriajr, shz, zqkS |
|            5 |     3960 | 2024-01-23 | Sharks      | L   | 0.028      | -            | -                | -                | -         |    -0.09 | delboNi, f4stzin, piriajr, shz, zqkS |
|            4 |     3987 | 2024-01-22 | MIBR        | W   | 0.022      | 0.143        | 0.269 (0.001)    | -                | -         |     0.69 | delboNi, f4stzin, piriajr, shz, zqkS |
|            3 |     4045 | 2024-01-20 | Case        | L   | 0.009      | -            | -                | -                | -         |    -0.19 | delboNi, f4stzin, piriajr, shz, zqkS |
|            2 |     4092 | 2024-01-19 | 9z          | L   | 0.003      | -            | -                | -                | -         |     0.00 | delboNi, f4stzin, piriajr, shz, zqkS |
|            1 |     4107 | 2024-01-19 | Fluxo       | L   | 0.001      | -            | -                | -                | -         |    -0.00 | delboNi, f4stzin, piriajr, shz, zqkS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
