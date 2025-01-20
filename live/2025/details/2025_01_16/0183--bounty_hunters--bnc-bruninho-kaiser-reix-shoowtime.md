### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, Bruninho, KAISER, reix, SHOOWTiME<br />
Global Rank: [183](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [54]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  636.1<br />
<br />
Final Rank Value (636.1) = Starting Rank Value (644.8) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.8
- 400 + ( ( 0.124 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 644.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1987 | 2024-09-27 | Dusty Roots | L   | 0.459      | -            | -                | -                | -         |    -3.45 | bnc, Bruninho, KAISER, reix, SHOOWTiME |
|           17 |     2760 | 2024-09-03 | BESTIA      | L   | 0.301      | -            | -                | -                | -         |    -0.80 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|           16 |     2819 | 2024-09-01 | Players     | W   | 0.286      | 0.371        | 0.014 (0.001)    | 0.403 (0.043)    | 0 (0.000) |     5.60 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|           15 |     3044 | 2024-08-26 | Hype        | L   | 0.247      | -            | -                | -                | -         |    -2.92 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|           14 |     3073 | 2024-08-26 | W7M         | L   | 0.245      | -            | -                | -                | -         |    -4.21 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|           13 |     3424 | 2024-08-15 | Case        | L   | 0.173      | -            | -                | -                | -         |    -1.95 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|           12 |     3467 | 2024-08-14 | ODDIK       | L   | 0.166      | -            | -                | -                | -         |    -0.86 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|           11 |     3890 | 2024-08-01 | Dusty Roots | L   | 0.080      | -            | -                | -                | -         |    -0.53 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|           10 |     3896 | 2024-08-01 | Yawara      | W   | 0.080      | 0.143        | 0.005 (0.000)    | 0.265 (0.003)    | 0 (0.000) |     1.37 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            9 |     3910 | 2024-08-01 | Solid       | L   | 0.078      | -            | -                | -                | -         |    -1.67 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            8 |     3941 | 2024-07-31 | Players     | W   | 0.074      | 0.143        | 0.014 (0.000)    | 0.403 (0.004)    | 0 (0.000) |     1.43 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            7 |     3992 | 2024-07-30 | Fluxo       | L   | 0.066      | -            | -                | -                | -         |    -0.99 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            6 |     4058 | 2024-07-28 | Solid       | L   | 0.053      | -            | -                | -                | -         |    -1.14 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            5 |     4063 | 2024-07-28 | UNO MILLE   | W   | 0.052      | 0.143        | 0.015 (0.000)    | 0.330 (0.002)    | 0 (0.000) |     0.98 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            4 |     4146 | 2024-07-25 | W7M         | L   | 0.033      | -            | -                | -                | -         |    -0.58 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            3 |     4152 | 2024-07-25 | SENSEI      | W   | 0.032      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.21 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            2 |     4158 | 2024-07-25 | UNO MILLE   | W   | 0.032      | 0.143        | 0.015 (0.000)    | 0.330 (0.001)    | 0 (0.000) |     0.60 | bnc, KAISER, piriajr, reix, SHOOWTiME  |
|            1 |     4258 | 2024-07-22 | UNO MILLE   | W   | 0.012      | 0.371        | 0.015 (0.000)    | 0.330 (0.001)    | 0 (0.000) |     0.22 | bnc, KAISER, piriajr, reix, SHOOWTiME  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($554.05)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-04 |      0.307 | $750.00        | $230.47         |
| 2024-08-16 |      0.180 | $1,800.00      | $323.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
