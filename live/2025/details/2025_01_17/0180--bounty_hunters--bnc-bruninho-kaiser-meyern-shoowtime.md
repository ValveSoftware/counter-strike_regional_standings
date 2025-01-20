### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, Bruninho, KAISER, meyern, SHOOWTiME<br />
Global Rank: [180](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [50]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  640.4<br />
<br />
Final Rank Value (640.4) = Starting Rank Value (659.3) + Head To Head Adjustments (-18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.3
- 400 + ( ( 0.131 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 659.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1092 | 2024-11-02 | ex-Vikings  | L   | 0.694      | -            | -                | -                | -         |    -8.10 | bnc, Bruninho, KAISER, meyern, SHOOWTiME |
|           18 |     1964 | 2024-09-27 | Dusty Roots | L   | 0.453      | -            | -                | -                | -         |    -3.59 | bnc, Bruninho, KAISER, Reix, SHOOWTiME   |
|           17 |     2737 | 2024-09-03 | BESTIA      | L   | 0.295      | -            | -                | -                | -         |    -0.85 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           16 |     2796 | 2024-09-01 | Players     | W   | 0.280      | 0.371        | 0.014 (0.001)    | 0.405 (0.042)    | 0 (0.000) |     5.32 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           15 |     3021 | 2024-08-26 | Hype        | L   | 0.241      | -            | -                | -                | -         |    -3.00 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           14 |     3050 | 2024-08-26 | W7M         | L   | 0.239      | -            | -                | -                | -         |    -5.17 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           13 |     3401 | 2024-08-15 | Case        | L   | 0.167      | -            | -                | -                | -         |    -1.99 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           12 |     3444 | 2024-08-14 | ODDIK       | L   | 0.160      | -            | -                | -                | -         |    -0.89 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           11 |     3867 | 2024-08-01 | Dusty Roots | L   | 0.074      | -            | -                | -                | -         |    -0.53 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           10 |     3873 | 2024-08-01 | Yawara      | W   | 0.074      | 0.143        | 0.005 (0.000)    | 0.266 (0.003)    | 0 (0.000) |     1.23 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            9 |     3887 | 2024-08-01 | Solid       | L   | 0.072      | -            | -                | -                | -         |    -1.58 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            8 |     3918 | 2024-07-31 | Players     | W   | 0.067      | 0.143        | 0.014 (0.000)    | 0.405 (0.004)    | 0 (0.000) |     1.27 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            7 |     3969 | 2024-07-30 | Fluxo       | L   | 0.060      | -            | -                | -                | -         |    -0.95 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            6 |     4035 | 2024-07-28 | Solid       | L   | 0.047      | -            | -                | -                | -         |    -1.04 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            5 |     4040 | 2024-07-28 | ex-Vikings  | W   | 0.046      | 0.143        | 0.015 (0.000)    | 0.330 (0.002)    | 0 (0.000) |     0.84 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            4 |     4123 | 2024-07-25 | W7M         | L   | 0.027      | -            | -                | -                | -         |    -0.60 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            3 |     4129 | 2024-07-25 | SENSEI      | W   | 0.026      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.16 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            2 |     4135 | 2024-07-25 | ex-Vikings  | W   | 0.026      | 0.143        | 0.015 (0.000)    | 0.330 (0.001)    | 0 (0.000) |     0.47 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            1 |     4235 | 2024-07-22 | ex-Vikings  | W   | 0.006      | 0.371        | 0.015 (0.000)    | 0.330 (0.001)    | 0 (0.000) |     0.10 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,237.97)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.699 | $1,000.00      | $699.49         |
| 2024-09-04 |      0.301 | $750.00        | $225.89         |
| 2024-08-16 |      0.174 | $1,800.00      | $312.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
