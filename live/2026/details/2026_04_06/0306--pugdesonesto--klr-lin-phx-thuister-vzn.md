### Roster Details<br />
Team Name: Pugdesonesto<br />
Roster: KLR, LIN, phx, Thuister, vzn<br />
Global Rank: [306](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [81]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  534.5<br />
<br />
Final Rank Value (534.5) = Starting Rank Value (509.3) + Head To Head Adjustments (25.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.3
- 400 + ( ( 0.056 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 509.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1359 | 2026-03-09 | R2         | L   | 1.000      | -            | -                | -                | -         |    -7.19 | KLR, LIN, phx, Thuister, vzn |
|            4 |     1453 | 2026-03-08 | Procyon    | L   | 1.000      | -            | -                | -                | -         |    -4.29 | KLR, LIN, phx, Thuister, vzn |
|            3 |     1558 | 2026-03-05 | Players    | W   | 0.990      | 0.333        | 0.000 (0.000)    | 0.297 (0.098)    | 0 (0.000) |    19.94 | KLR, LIN, phx, Thuister, vzn |
|            2 |     1648 | 2026-03-04 | Keyd Stars | L   | 0.980      | -            | -                | -                | -         |    -5.03 | KLR, LIN, phx, Thuister, vzn |
|            1 |     1680 | 2026-03-03 | FURIA fe   | W   | 0.974      | 0.333        | 0.005 (0.002)    | 0.113 (0.037)    | 0 (0.000) |    21.81 | KLR, LIN, phx, Thuister, vzn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
