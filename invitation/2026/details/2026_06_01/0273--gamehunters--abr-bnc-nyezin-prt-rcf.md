### Roster Details<br />
Team Name: GameHunters<br />
Roster: abr, bnc, nyezin, prt, RCF<br />
Global Rank: [273](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [66]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  603.6<br />
<br />
Final Rank Value (603.6) = Starting Rank Value (552.8) + Head To Head Adjustments (50.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.8
- 400 + ( ( 0.080 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 552.8


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
|           15 |     3982 | 2026-02-26 | R2                | W   | 0.569      | 0.371        | 0.002 (0.000)    | 0.447 (0.094)    | 0 (0.000) |    11.34 | abr, bnc, nyezin, prt, rkt |
|           14 |     4111 | 2026-02-24 | Vasco             | W   | 0.553      | 0.371        | 0.011 (0.002)    | 0.368 (0.075)    | 0 (0.000) |    15.05 | abr, bnc, nyezin, prt, rkt |
|           13 |     5303 | 2026-01-24 | RED Canids        | L   | 0.347      | -            | -                | -                | -         |    -0.33 | abr, bnc, nyezin, prt, RCF |
|           12 |     5364 | 2026-01-23 | Turma do Pagode   | L   | 0.340      | -            | -                | -                | -         |    -0.34 | abr, bnc, nyezin, prt, RCF |
|           11 |     5429 | 2026-01-21 | Red Feet          | W   | 0.329      | 0.384        | 0.000 (0.000)    | 0.078 (0.010)    | 1 (0.329) |     4.92 | abr, bnc, nyezin, prt, RCF |
|           10 |     5434 | 2026-01-21 | Galorys           | W   | 0.328      | 0.384        | 0.013 (0.002)    | 0.472 (0.060)    | 1 (0.328) |     9.93 | abr, bnc, nyezin, prt, RCF |
|            9 |     5451 | 2026-01-21 | HereWeGoAgain     | W   | 0.327      | 0.371        | 0.000 (0.000)    | 0.043 (0.005)    | 0 (0.000) |     4.25 | abr, bnc, nyezin, prt, RCF |
|            8 |     5468 | 2026-01-20 | Vasco             | L   | 0.321      | -            | -                | -                | -         |    -1.42 | abr, bnc, nyezin, prt, RCF |
|            7 |     5516 | 2026-01-18 | Satriales         | W   | 0.306      | 0.371        | 0.000 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.87 | abr, bnc, nyezin, prt, RCF |
|            6 |     5531 | 2026-01-17 | Turma do Pagode   | L   | 0.302      | -            | -                | -                | -         |    -0.26 | abr, bnc, nyezin, prt, RCF |
|            5 |     5538 | 2026-01-17 | Keyd Stars        | W   | 0.301      | 0.624        | 0.000 (0.000)    | 0.011 (0.002)    | 0 (0.000) |     2.98 | abr, bnc, nyezin, prt, RCF |
|            4 |     5654 | 2026-01-15 | Gaimin Gladiators | L   | 0.288      | -            | -                | -                | -         |    -0.23 | abr, bnc, nyezin, prt, RCF |
|            3 |     5668 | 2026-01-15 | lospegadinhas     | W   | 0.286      | 0.371        | 0.000 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.65 | abr, bnc, nyezin, prt, RCF |
|            2 |     5679 | 2026-01-14 | Legacy            | L   | 0.283      | -            | -                | -                | -         |    -0.00 | abr, bnc, nyezin, prt, RCF |
|            1 |     5693 | 2026-01-14 | Isurus            | L   | 0.280      | -            | -                | -                | -         |    -0.64 | abr, bnc, nyezin, prt, RCF |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
