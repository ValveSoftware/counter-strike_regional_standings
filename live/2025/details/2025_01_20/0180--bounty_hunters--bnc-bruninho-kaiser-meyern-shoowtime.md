### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, Bruninho, KAISER, meyern, SHOOWTiME<br />
Global Rank: [180](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [50]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  639.8<br />
<br />
Final Rank Value (639.8) = Starting Rank Value (657.9) + Head To Head Adjustments (-18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.9
- 400 + ( ( 0.130 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 657.9


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
|           18 |     1101 | 2024-11-02 | ex-Vikings  | L   | 0.680      | -            | -                | -                | -         |    -7.93 | bnc, Bruninho, KAISER, meyern, SHOOWTiME |
|           17 |     1973 | 2024-09-27 | Dusty Roots | L   | 0.440      | -            | -                | -                | -         |    -3.46 | bnc, Bruninho, KAISER, Reix, SHOOWTiME   |
|           16 |     2746 | 2024-09-03 | BESTIA      | L   | 0.281      | -            | -                | -                | -         |    -0.81 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           15 |     2805 | 2024-09-01 | Players     | W   | 0.266      | 0.371        | 0.014 (0.001)    | 0.409 (0.040)    | 0 (0.000) |     5.08 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           14 |     3030 | 2024-08-26 | Hype        | L   | 0.227      | -            | -                | -                | -         |    -2.83 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           13 |     3059 | 2024-08-26 | W7M         | L   | 0.225      | -            | -                | -                | -         |    -4.88 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           12 |     3410 | 2024-08-15 | Case        | L   | 0.154      | -            | -                | -                | -         |    -1.84 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           11 |     3453 | 2024-08-14 | ODDIK       | L   | 0.146      | -            | -                | -                | -         |    -0.84 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|           10 |     3876 | 2024-08-01 | Dusty Roots | L   | 0.061      | -            | -                | -                | -         |    -0.43 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            9 |     3882 | 2024-08-01 | Yawara      | W   | 0.060      | 0.143        | 0.005 (0.000)    | 0.268 (0.002)    | 0 (0.000) |     1.01 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            8 |     3896 | 2024-08-01 | Solid       | L   | 0.058      | -            | -                | -                | -         |    -1.29 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            7 |     3927 | 2024-07-31 | Players     | W   | 0.054      | 0.143        | 0.014 (0.000)    | 0.409 (0.003)    | 0 (0.000) |     1.01 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            6 |     3978 | 2024-07-30 | Fluxo       | L   | 0.047      | -            | -                | -                | -         |    -0.74 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            5 |     4044 | 2024-07-28 | Solid       | L   | 0.033      | -            | -                | -                | -         |    -0.74 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            4 |     4049 | 2024-07-28 | ex-Vikings  | W   | 0.033      | 0.143        | 0.015 (0.000)    | 0.331 (0.002)    | 0 (0.000) |     0.60 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            3 |     4132 | 2024-07-25 | W7M         | L   | 0.014      | -            | -                | -                | -         |    -0.30 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            2 |     4138 | 2024-07-25 | SENSEI      | W   | 0.013      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.08 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |
|            1 |     4144 | 2024-07-25 | ex-Vikings  | W   | 0.012      | 0.143        | 0.015 (0.000)    | 0.331 (0.001)    | 0 (0.000) |     0.22 | bnc, KAISER, piriajr, Reix, SHOOWTiME    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,189.80)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.686 | $1,000.00      | $685.92         |
| 2024-09-04 |      0.288 | $750.00        | $215.72         |
| 2024-08-16 |      0.160 | $1,800.00      | $288.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
