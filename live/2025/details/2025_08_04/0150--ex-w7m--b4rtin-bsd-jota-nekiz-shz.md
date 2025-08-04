### Roster Details<br />
Team Name: ex-W7M<br />
Roster: b4rtiN, bsd, JOTA, NEKIZ, shz<br />
Global Rank: [150](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [44]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  674.4<br />
<br />
Final Rank Value (674.4) = Starting Rank Value (567.2) + Head To Head Adjustments (107.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 567.2
- 400 + ( ( 0.088 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 567.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       16 | 2025-08-01 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |    -5.88 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           13 |       50 | 2025-07-28 | Bounty Hunters  | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.508 (0.073)    | 0 (0.000) |    17.63 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           12 |       71 | 2025-07-27 | Fluxo           | W   | 1.000      | 0.143        | 0.040 (0.006)    | 0.440 (0.063)    | 0 (0.000) |    28.25 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           11 |      261 | 2025-07-16 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |    -4.20 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           10 |      275 | 2025-07-16 | LaChampionsLiga | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.103 (0.015)    | 0 (0.000) |    10.28 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|            9 |      393 | 2025-07-11 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -3.12 | b4rtiN, JOTA, levi, shz, urban0 |
|            8 |      434 | 2025-07-09 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -7.64 | b4rtiN, JOTA, levi, shz, urban0 |
|            7 |      438 | 2025-07-09 | SELVA           | W   | 1.000      | 0.384        | 0.017 (0.007)    | 0.377 (0.145)    | 0 (0.000) |    19.75 | b4rtiN, JOTA, levi, shz, urban0 |
|            6 |      469 | 2025-07-08 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -6.98 | b4rtiN, JOTA, levi, shz, urban0 |
|            5 |      478 | 2025-07-07 | Bounty Hunters  | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.508 (0.073)    | 0 (0.000) |    21.96 | b4rtiN, JOTA, levi, shz, urban0 |
|            4 |      482 | 2025-07-07 | Imperial        | W   | 1.000      | 0.143        | 0.121 (0.017)    | 0.674 (0.096)    | 0 (0.000) |    28.99 | b4rtiN, JOTA, levi, shz, urban0 |
|            3 |      528 | 2025-06-30 | Bounty Hunters  | L   | 0.968      | -            | -                | -                | -         |    -8.16 | b4rtiN, JOTA, levi, shz, urban0 |
|            2 |      534 | 2025-06-29 | RED Canids      | L   | 0.962      | -            | -                | -                | -         |    -6.23 | b4rtiN, JOTA, levi, shz, urban0 |
|            1 |      537 | 2025-06-29 | SELVA           | W   | 0.960      | 0.384        | 0.017 (0.006)    | 0.377 (0.139)    | 0 (0.000) |    22.58 | b4rtiN, JOTA, levi, shz, urban0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
