### Roster Details<br />
Team Name: GamersLab<br />
Roster: LEFI, MAXX, rayqu4za, Tusi, wap0<br />
Global Rank: [320](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [211]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  523.8<br />
<br />
Final Rank Value (523.8) = Starting Rank Value (521.5) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.5
- 400 + ( ( 0.065 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 521.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3463 | 2026-08-08 | LPH         | L   | 0.625      | -            | -                | -                | -         |    -3.83 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            5 |     3527 | 2026-08-07 | Nexus       | L   | 0.619      | -            | -                | -                | -         |    -0.43 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            4 |     3554 | 2026-08-06 | MAYBE       | W   | 0.613      | 0.345        | 0.003 (0.001)    | 0.312 (0.066)    | 1 (0.613) |    15.62 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            3 |     3568 | 2026-08-05 | WBT         | L   | 0.608      | -            | -                | -                | -         |    -0.44 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            2 |     3572 | 2026-08-05 | NAVI Junior | L   | 0.607      | -            | -                | -                | -         |    -0.32 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            1 |     3578 | 2026-08-05 | eSuba       | L   | 0.606      | -            | -                | -                | -         |    -8.23 | LEFI, MAXX, rayqu4za, Tusi, wap0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
