### Roster Details<br />
Team Name: Fuego<br />
Roster: ALENNNCAR, Lukita, Thuister, vzn<br />
Global Rank: [347](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [98]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  457.2<br />
<br />
Final Rank Value (457.2) = Starting Rank Value (457.0) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.117[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.029<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 457.0
- 400 + ( ( 0.029 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 457.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4961 | 2025-11-04 | Procyon      | L   | 0.180      | -            | -                | -                | -         |    -0.44 | ALENNNCAR, BRNZ1K, Lukita, sakamoto, vzn |
|            5 |     5578 | 2025-10-15 | Fake do Biru | L   | 0.048      | -            | -                | -                | -         |    -0.10 | ALENNNCAR, felps, Lukita, Thuister, vzn  |
|            4 |     5644 | 2025-10-13 | GameHunters  | W   | 0.035      | 0.371        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.58 | ALENNNCAR, felps, Lukita, Thuister, vzn  |
|            3 |     5668 | 2025-10-11 | Yawara       | L   | 0.022      | -            | -                | -                | -         |    -0.06 | ALENNNCAR, ghosT1, Lukita, Thuister, vzn |
|            2 |     5765 | 2025-10-09 | Players      | W   | 0.006      | 0.371        | 0.000 (0.000)    | 0.297 (0.001)    | 0 (0.000) |     0.15 | ALENNNCAR, ghosT1, Lukita, Thuister, vzn |
|            1 |     5790 | 2025-10-08 | Procyon      | L   | 0.002      | -            | -                | -                | -         |    -0.01 | ALENNNCAR, ghosT1, Lukita, Thuister, vzn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
