### Roster Details<br />
Team Name: Fingers Crossed<br />
Roster: BaGyZ, fello, MAGILA, Sidivo, Uzman<br />
Global Rank: [339](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [200]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  472.5<br />
<br />
Final Rank Value (472.5) = Starting Rank Value (452.7) + Head To Head Adjustments (19.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.105[<sup>2</sup>](#table1)

The average of these factors is 0.027<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 452.7
- 400 + ( ( 0.027 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 452.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3712 | 2026-01-04 | SINQU    | W   | 0.586      | 0.314        | 0.000 (0.000)    | 0.067 (0.012)    | 1 (0.586) |    12.40 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            7 |     3714 | 2026-01-04 | MINLATE  | L   | 0.586      | -            | -                | -                | -         |    -0.84 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            6 |     3719 | 2026-01-04 | ASTRAL   | L   | 0.585      | -            | -                | -                | -         |    -0.57 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            5 |     3722 | 2026-01-04 | AaB      | L   | 0.585      | -            | -                | -                | -         |    -0.21 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            4 |     3727 | 2026-01-04 | ESC      | L   | 0.585      | -            | -                | -                | -         |    -0.37 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            3 |     3864 | 2025-12-17 | illwill  | L   | 0.468      | -            | -                | -                | -         |    -0.72 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            2 |     3867 | 2025-12-17 | INFINITE | W   | 0.467      | 0.339        | 0.000 (0.000)    | 0.077 (0.012)    | 1 (0.467) |    10.29 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            1 |     3876 | 2025-12-17 | MOUZ NXT | L   | 0.466      | -            | -                | -                | -         |    -0.21 | BaGyZ, fello, MAGILA, Sidivo, Uzman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
