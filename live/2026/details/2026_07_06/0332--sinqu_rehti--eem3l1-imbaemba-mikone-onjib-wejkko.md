### Roster Details<br />
Team Name: SINQU REHTI<br />
Roster: Eem3l1, imbaemba, MikOne, Onjib, wejkko<br />
Global Rank: [332](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [212]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  515.9<br />
<br />
Final Rank Value (515.9) = Starting Rank Value (500.5) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.5
- 400 + ( ( 0.053 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 500.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       48 | 2026-06-29 | BERG     | L   | 1.000      | -            | -                | -                | -         |    -6.87 | Eem3l1, imbaemba, MikOne, Onjib, wejkko |
|            5 |       52 | 2026-06-29 | ASTRAL   | L   | 1.000      | -            | -                | -                | -         |    -2.79 | Eem3l1, imbaemba, MikOne, Onjib, wejkko |
|            4 |       57 | 2026-06-29 | Coalesce | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.104 (0.031)    | 1 (1.000) |    20.50 | Eem3l1, imbaemba, MikOne, Onjib, wejkko |
|            3 |       66 | 2026-06-28 | ASTRAL   | L   | 1.000      | -            | -                | -                | -         |    -2.58 | Eem3l1, imbaemba, MikOne, Onjib, wejkko |
|            2 |       67 | 2026-06-28 | 6666     | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.037 (0.011)    | 1 (1.000) |    13.52 | Eem3l1, imbaemba, MikOne, Onjib, wejkko |
|            1 |       72 | 2026-06-28 | BERG     | L   | 1.000      | -            | -                | -                | -         |    -6.32 | Eem3l1, imbaemba, MikOne, Onjib, wejkko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
