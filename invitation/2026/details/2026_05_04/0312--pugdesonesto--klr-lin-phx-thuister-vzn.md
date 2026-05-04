### Roster Details<br />
Team Name: Pugdesonesto<br />
Roster: KLR, LIN, phx, Thuister, vzn<br />
Global Rank: [312](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [81]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  533.0<br />
<br />
Final Rank Value (533.0) = Starting Rank Value (498.6) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.6
- 400 + ( ( 0.053 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 498.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2455 | 2026-03-09 | R2              | L   | 0.827      | -            | -                | -                | -         |    -6.48 | KLR, LIN, phx, Thuister, vzn          |
|           10 |     2549 | 2026-03-08 | Procyon         | L   | 0.820      | -            | -                | -                | -         |    -4.07 | KLR, LIN, phx, Thuister, vzn          |
|            9 |     2654 | 2026-03-05 | Players         | W   | 0.803      | 0.333        | 0.001 (0.000)    | 0.317 (0.085)    | 0 (0.000) |    16.72 | KLR, LIN, phx, Thuister, vzn          |
|            8 |     2744 | 2026-03-04 | Keyd Stars      | L   | 0.793      | -            | -                | -                | -         |    -3.18 | KLR, LIN, phx, Thuister, vzn          |
|            7 |     2776 | 2026-03-03 | FURIA fe        | W   | 0.787      | 0.333        | 0.002 (0.001)    | 0.079 (0.021)    | 0 (0.000) |    16.56 | KLR, LIN, phx, Thuister, vzn          |
|            6 |     4406 | 2026-01-22 | Bounty Hunters  | L   | 0.521      | -            | -                | -                | -         |    -0.66 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            5 |     4445 | 2026-01-21 | MAGICOS         | W   | 0.515      | 0.371        | 0.000 (0.000)    | 0.224 (0.043)    | 0 (0.000) |     8.95 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            4 |     4486 | 2026-01-20 | Prison Breakers | L   | 0.507      | -            | -                | -                | -         |    -7.91 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            3 |     4523 | 2026-01-18 | Charrados       | W   | 0.494      | 0.371        | 0.000 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     7.86 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            2 |     4607 | 2026-01-16 | Isurus          | L   | 0.481      | -            | -                | -                | -         |    -0.68 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            1 |     4700 | 2026-01-14 | HereWeGoAgain   | W   | 0.468      | 0.371        | 0.000 (0.000)    | 0.062 (0.011)    | 0 (0.000) |     7.31 | KLR, Lacerda, sakamoto, Thuister, vzn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
