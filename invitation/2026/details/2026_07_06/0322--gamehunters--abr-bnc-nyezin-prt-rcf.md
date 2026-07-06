### Roster Details<br />
Team Name: GameHunters<br />
Roster: abr, bnc, nyezin, prt, RCF<br />
Global Rank: [322](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [79]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  536.9<br />
<br />
Final Rank Value (536.9) = Starting Rank Value (513.9) + Head To Head Adjustments (23.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.9
- 400 + ( ( 0.060 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 513.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     4643 | 2026-02-26 | R2                | W   | 0.336      | 0.371        | 0.001 (0.000)    | 0.347 (0.043)    | 0 (0.000) |     7.17 | abr, bnc, nyezin, prt, rkt |
|           14 |     4772 | 2026-02-24 | Vasco             | W   | 0.320      | 0.371        | 0.009 (0.001)    | 0.264 (0.031)    | 0 (0.000) |     8.50 | abr, bnc, nyezin, prt, rkt |
|           13 |     5964 | 2026-01-24 | RED Canids        | L   | 0.114      | -            | -                | -                | -         |    -0.23 | abr, bnc, nyezin, prt, RCF |
|           12 |     6025 | 2026-01-23 | Turma do Pagode   | L   | 0.106      | -            | -                | -                | -         |    -0.20 | abr, bnc, nyezin, prt, RCF |
|           11 |     6090 | 2026-01-21 | Red Feet          | W   | 0.096      | 0.384        | 0.000 (0.000)    | 0.067 (0.002)    | 1 (0.096) |     1.51 | abr, bnc, nyezin, prt, RCF |
|           10 |     6095 | 2026-01-21 | Galorys           | W   | 0.095      | 0.384        | 0.012 (0.000)    | 0.438 (0.016)    | 1 (0.095) |     2.83 | abr, bnc, nyezin, prt, RCF |
|            9 |     6112 | 2026-01-21 | HereWeGoAgain     | W   | 0.094      | 0.371        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     1.35 | abr, bnc, nyezin, prt, RCF |
|            8 |     6129 | 2026-01-20 | Vasco             | L   | 0.088      | -            | -                | -                | -         |    -0.45 | abr, bnc, nyezin, prt, RCF |
|            7 |     6177 | 2026-01-18 | Satriales         | W   | 0.073      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.79 | abr, bnc, nyezin, prt, RCF |
|            6 |     6192 | 2026-01-17 | Turma do Pagode   | L   | 0.069      | -            | -                | -                | -         |    -0.13 | abr, bnc, nyezin, prt, RCF |
|            5 |     6199 | 2026-01-17 | Keyd Stars        | W   | 0.068      | 0.624        | 0.007 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     1.52 | abr, bnc, nyezin, prt, RCF |
|            4 |     6315 | 2026-01-15 | Gaimin Gladiators | L   | 0.055      | -            | -                | -                | -         |    -0.09 | abr, bnc, nyezin, prt, RCF |
|            3 |     6329 | 2026-01-15 | lospegadinhas     | W   | 0.053      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.58 | abr, bnc, nyezin, prt, RCF |
|            2 |     6340 | 2026-01-14 | Legacy            | L   | 0.050      | -            | -                | -                | -         |    -0.00 | abr, bnc, nyezin, prt, RCF |
|            1 |     6354 | 2026-01-14 | Isurus            | L   | 0.046      | -            | -                | -                | -         |    -0.15 | abr, bnc, nyezin, prt, RCF |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
